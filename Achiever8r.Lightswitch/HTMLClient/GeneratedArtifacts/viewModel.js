/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function BrowseAchievements(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAchievements screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Achievements" type="msls.VisualCollection" elementType="msls.application.Achievement">
        /// Gets the achievements for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAchievements.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAchievements", parameters);
    }

    function EditAchievement(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EditAchievement screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Achievement" type="msls.application.Achievement">
        /// Gets or sets the achievement for this screen.
        /// </field>
        /// <field name="Ratings" type="msls.VisualCollection" elementType="msls.application.Rating">
        /// Gets the ratings for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EditAchievement.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EditAchievement", parameters);
    }

    function EditRating(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the EditRating screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Rating" type="msls.application.Rating">
        /// Gets or sets the rating for this screen.
        /// </field>
        /// <field name="details" type="msls.application.EditRating.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "EditRating", parameters);
    }

    msls._addToNamespace("msls.application", {

        BrowseAchievements: $defineScreen(BrowseAchievements, [
            {
                name: "Achievements", kind: "collection", elementType: lightSwitchApplication.Achievement,
                createQuery: function () {
                    return this.dataWorkspace.ApplicationData.Achievements.expand("AchievementCategory").expand("AchievedByUser");
                }
            }
        ], [
        ]),

        EditAchievement: $defineScreen(EditAchievement, [
            { name: "Achievement", kind: "local", type: lightSwitchApplication.Achievement },
            {
                name: "Ratings", kind: "collection", elementType: lightSwitchApplication.Rating,
                getNavigationProperty: function () {
                    if (this.owner.Achievement) {
                        return this.owner.Achievement.details.properties.Ratings;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this.expand("RatedByUser");
                }
            }
        ], [
        ]),

        EditRating: $defineScreen(EditRating, [
            { name: "Rating", kind: "local", type: lightSwitchApplication.Rating }
        ], [
        ]),

        showBrowseAchievements: $defineShowScreen(function showBrowseAchievements(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAchievements screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAchievements", parameters, options);
        }),

        showEditAchievement: $defineShowScreen(function showEditAchievement(Achievement, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EditAchievement screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("EditAchievement", parameters, options);
        }),

        showEditRating: $defineShowScreen(function showEditRating(Rating, options) {
            /// <summary>
            /// Asynchronously navigates forward to the EditRating screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("EditRating", parameters, options);
        })

    });

}(msls.application));
