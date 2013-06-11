define(['durandal/system', 'services/logger'],
    function (system, logger) {

        configureBreeze();

        breeze.config.initializeAdapterInstances({ dataService: "OData" });
        var achievementsManager = new breeze.EntityManager("http://localhost:42465/ApplicationData.svc");
        //achievementsManager.enableSaveQueuing(true);
        configureManagerToSaveModifiedItemImmediately(achievementsManager);

        var datacontext = {
            metadataStore: achievementsManager.metadataStore,

            loadAllAchievements: function (itemsObservable) {
                return breeze.EntityQuery
                    .from("Achievements")
                    .using(achievementsManager).execute()
                    .then(getSucceeded)
                    .fail(getFailed);

                function getSucceeded(data) {
                    itemsObservable(data.results);
                }

                function getFailed(error) {
                    logger.logError(error.message, route, 'datacontext', true);
                }

            },
        };

        return datacontext;

        function configureBreeze() {
            // configure to use camelCase
            breeze.NamingConvention.camelCase.setAsDefault();

            // configure to resist CSRF attack
            var antiForgeryToken = $("#antiForgeryToken").val();
            if (antiForgeryToken) {
                // get the current default Breeze AJAX adapter & add header
                var ajaxAdapter = breeze.config.getAdapterInstance("ajax");
                ajaxAdapter.defaultSettings = {
                    headers: {
                        'RequestVerificationToken': antiForgeryToken
                    },
                };
            }
        }

        function configureManagerToSaveModifiedItemImmediately(manager) {
            manager.entityChanged.subscribe(entityStateChanged);

            function entityStateChanged(args) {
                if (args.entityAction === breeze.EntityAction.EntityStateChange) {
                    var entity = args.entity;
                    if (entity.entityAspect.entityState.isModified()) {
                        saveEntity(entity, manager);
                    }
                }
            }
        }

        function saveEntity(masterEntity, manager) {

            return manager.saveChanges().fail(saveFailed);

            function saveFailed(error) {
                var msg = "Error saving " +
                    describeSaveOperation(masterEntity) + ": " +
                    getErrorMessage(error);

                masterEntity.errorMessage(msg);
                // Let user see invalid value briefly before reverting
                setTimeout(function () { manager.rejectChanges(); }, 1000);
                logger.logError(msg, "", "datacontext", true);
                throw error; // so caller can see failure
            }
        }

        function describeSaveOperation(entity) {
            var statename = entity.entityAspect.entityState.name.toLowerCase();
            var typeName = entity.entityType.shortName;
            var title = entity.title && entity.title();
            title = title ? (" '" + title + "'") : "";
            return statename + " " + typeName + title;
        }

        function getErrorMessage(error) {
            var reason = error.message;
            if (reason.match(/validation error/i)) {
                reason = getValidationErrorMessage(error);
            }
            return reason;
        }

        function getValidationErrorMessage(error) {
            try { // return the first error message
                var firstItem = error.entitiesWithErrors[0];
                var firstError = firstItem.entityAspect.getValidationErrors()[0];
                return firstError.errorMessage;
            } catch (e) { // ignore problem extracting error message 
                return "validation error";
            }
        }
    });