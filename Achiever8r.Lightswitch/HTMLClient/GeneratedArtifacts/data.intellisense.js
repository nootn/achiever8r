/// <reference path="data.js" />

(function (lightSwitchApplication) {

    msls._addEntryPoints(lightSwitchApplication.AchievementCategory, {
        /// <field>
        /// Called when a new achievementCategory is created.
        /// <br/>created(msls.application.AchievementCategory entity)
        /// </field>
        created: [lightSwitchApplication.AchievementCategory]
    });

    msls._addEntryPoints(lightSwitchApplication.Achievement, {
        /// <field>
        /// Called when a new achievement is created.
        /// <br/>created(msls.application.Achievement entity)
        /// </field>
        created: [lightSwitchApplication.Achievement]
    });

    msls._addEntryPoints(lightSwitchApplication.User, {
        /// <field>
        /// Called when a new user is created.
        /// <br/>created(msls.application.User entity)
        /// </field>
        created: [lightSwitchApplication.User]
    });

    msls._addEntryPoints(lightSwitchApplication.Rating, {
        /// <field>
        /// Called when a new rating is created.
        /// <br/>created(msls.application.Rating entity)
        /// </field>
        created: [lightSwitchApplication.Rating]
    });

}(msls.application));
