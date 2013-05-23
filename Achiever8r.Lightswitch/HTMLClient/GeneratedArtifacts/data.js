/// <reference path="../Scripts/msls-1.0.0.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function AchievementCategory(entitySet) {
        /// <summary>
        /// Represents the AchievementCategory entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this achievementCategory.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this achievementCategory.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this achievementCategory.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this achievementCategory.
        /// </field>
        /// <field name="Achievements" type="msls.EntityCollection" elementType="msls.application.Achievement">
        /// Gets the achievements for this achievementCategory.
        /// </field>
        /// <field name="details" type="msls.application.AchievementCategory.Details">
        /// Gets the details for this achievementCategory.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Achievement(entitySet) {
        /// <summary>
        /// Represents the Achievement entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this achievement.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this achievement.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this achievement.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this achievement.
        /// </field>
        /// <field name="AchievementCategory" type="msls.application.AchievementCategory">
        /// Gets or sets the achievementCategory for this achievement.
        /// </field>
        /// <field name="AchievedByUser" type="msls.application.User">
        /// Gets or sets the achievedByUser for this achievement.
        /// </field>
        /// <field name="NominatedByUser" type="msls.application.User">
        /// Gets or sets the nominatedByUser for this achievement.
        /// </field>
        /// <field name="NominatedOn" type="Date">
        /// Gets or sets the nominatedOn for this achievement.
        /// </field>
        /// <field name="Ratings" type="msls.EntityCollection" elementType="msls.application.Rating">
        /// Gets the ratings for this achievement.
        /// </field>
        /// <field name="details" type="msls.application.Achievement.Details">
        /// Gets the details for this achievement.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function User(entitySet) {
        /// <summary>
        /// Represents the User entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this user.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this user.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this user.
        /// </field>
        /// <field name="LoginId" type="String">
        /// Gets or sets the loginId for this user.
        /// </field>
        /// <field name="FullName" type="String">
        /// Gets or sets the fullName for this user.
        /// </field>
        /// <field name="Achievements" type="msls.EntityCollection" elementType="msls.application.Achievement">
        /// Gets the achievements for this user.
        /// </field>
        /// <field name="AchievementNominations" type="msls.EntityCollection" elementType="msls.application.Achievement">
        /// Gets the achievementNominations for this user.
        /// </field>
        /// <field name="Ratings" type="msls.EntityCollection" elementType="msls.application.Rating">
        /// Gets the ratings for this user.
        /// </field>
        /// <field name="details" type="msls.application.User.Details">
        /// Gets the details for this user.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function Rating(entitySet) {
        /// <summary>
        /// Represents the Rating entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rating.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this rating.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this rating.
        /// </field>
        /// <field name="RatedOn" type="Date">
        /// Gets or sets the ratedOn for this rating.
        /// </field>
        /// <field name="Achievement" type="msls.application.Achievement">
        /// Gets or sets the achievement for this rating.
        /// </field>
        /// <field name="RatedByUser" type="msls.application.User">
        /// Gets or sets the ratedByUser for this rating.
        /// </field>
        /// <field name="Comment" type="String">
        /// Gets or sets the comment for this rating.
        /// </field>
        /// <field name="details" type="msls.application.Rating.Details">
        /// Gets the details for this rating.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="AchievementCategories" type="msls.EntitySet">
        /// Gets the AchievementCategories entity set.
        /// </field>
        /// <field name="Achievements" type="msls.EntitySet">
        /// Gets the Achievements entity set.
        /// </field>
        /// <field name="Users" type="msls.EntitySet">
        /// Gets the Users entity set.
        /// </field>
        /// <field name="Ratings" type="msls.EntitySet">
        /// Gets the Ratings entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        AchievementCategory: $defineEntity(AchievementCategory, [
            { name: "Id", type: Number },
            { name: "RowVersion", type: Array },
            { name: "Description", type: String },
            { name: "Achievements", kind: "collection", elementType: Achievement }
        ]),

        Achievement: $defineEntity(Achievement, [
            { name: "Id", type: Number },
            { name: "RowVersion", type: Array },
            { name: "Description", type: String },
            { name: "AchievementCategory", kind: "reference", type: AchievementCategory },
            { name: "AchievedByUser", kind: "reference", type: User },
            { name: "NominatedByUser", kind: "reference", type: User },
            { name: "NominatedOn", type: Date },
            { name: "Ratings", kind: "collection", elementType: Rating }
        ]),

        User: $defineEntity(User, [
            { name: "Id", type: Number },
            { name: "RowVersion", type: Array },
            { name: "LoginId", type: String },
            { name: "FullName", type: String },
            { name: "Achievements", kind: "collection", elementType: Achievement },
            { name: "AchievementNominations", kind: "collection", elementType: Achievement },
            { name: "Ratings", kind: "collection", elementType: Rating }
        ]),

        Rating: $defineEntity(Rating, [
            { name: "Id", type: Number },
            { name: "RowVersion", type: Array },
            { name: "RatedOn", type: Date },
            { name: "Achievement", kind: "reference", type: Achievement },
            { name: "RatedByUser", kind: "reference", type: User },
            { name: "Comment", type: String }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "AchievementCategories", elementType: AchievementCategory },
            { name: "Achievements", elementType: Achievement },
            { name: "Users", elementType: User },
            { name: "Ratings", elementType: Rating }
        ], [
            {
                name: "AchievementCategories_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.AchievementCategories },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/AchievementCategories(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Achievements_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Achievements },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Achievements(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Users_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Users },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Users(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Ratings_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.Ratings },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/Ratings(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            },
            {
                name: "GetMissingUsers", value: function () {
                    return new $DataServiceQuery({ _entitySet: this.Users },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/GetMissingUsers()",
                        {
                        });
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
