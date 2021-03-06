﻿/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $parameters = [document.createElement("div"), msls.ContentItem];

    msls._addEntryPoints(lightSwitchApplication.BrowseAchievements, {
        /// <field>
        /// Called when a new BrowseAchievements screen is created.
        /// <br/>created(msls.application.BrowseAchievements screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAchievements],
        /// <field>
        /// Called before changes on an active BrowseAchievements screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAchievements screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAchievements],
        /// <field>
        /// Called after the AchievementList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AchievementList_postRender: $parameters,
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: $parameters,
        /// <field>
        /// Called after the Achievement content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Achievement_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the AchievedByUser content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AchievedByUser_postRender: $parameters,
        /// <field>
        /// Called after the AchievementCategory content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AchievementCategory_postRender: $parameters,
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: $parameters,
        /// <field>
        /// Called after the NumberOfRatings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NumberOfRatings_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.EditAchievement, {
        /// <field>
        /// Called when a new EditAchievement screen is created.
        /// <br/>created(msls.application.EditAchievement screen)
        /// </field>
        created: [lightSwitchApplication.EditAchievement],
        /// <field>
        /// Called before changes on an active EditAchievement screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EditAchievement screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EditAchievement],
        /// <field>
        /// Called to determine if the NumberOfRatings_Tap method can be executed.
        /// <br/>canExecute(msls.application.EditAchievement screen)
        /// </field>
        NumberOfRatings_Tap_canExecute: [lightSwitchApplication.EditAchievement],
        /// <field>
        /// Called to execute the NumberOfRatings_Tap method.
        /// <br/>execute(msls.application.EditAchievement screen)
        /// </field>
        NumberOfRatings_Tap_execute: [lightSwitchApplication.EditAchievement],
        /// <field>
        /// Called to determine if the AddRating_Tap method can be executed.
        /// <br/>canExecute(msls.application.EditAchievement screen)
        /// </field>
        AddRating_Tap_canExecute: [lightSwitchApplication.EditAchievement],
        /// <field>
        /// Called to execute the AddRating_Tap method.
        /// <br/>execute(msls.application.EditAchievement screen)
        /// </field>
        AddRating_Tap_execute: [lightSwitchApplication.EditAchievement],
        /// <field>
        /// Called to determine if the RatingsList_ItemTap method can be executed.
        /// <br/>canExecute(msls.application.EditAchievement screen)
        /// </field>
        RatingsList_ItemTap_canExecute: [lightSwitchApplication.EditAchievement],
        /// <field>
        /// Called to execute the RatingsList_ItemTap method.
        /// <br/>execute(msls.application.EditAchievement screen)
        /// </field>
        RatingsList_ItemTap_execute: [lightSwitchApplication.EditAchievement],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the NominatedOn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NominatedOn_postRender: $parameters,
        /// <field>
        /// Called after the AchievementCategory content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AchievementCategory_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: $parameters,
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: $parameters,
        /// <field>
        /// Called after the AchievedByUser content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AchievedByUser_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: $parameters,
        /// <field>
        /// Called after the NumberOfRatings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        NumberOfRatings_postRender: $parameters,
        /// <field>
        /// Called after the Ratings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Ratings_postRender: $parameters,
        /// <field>
        /// Called after the StatusR8ings content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StatusR8ings_postRender: $parameters,
        /// <field>
        /// Called after the RatingsList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RatingsList_postRender: $parameters,
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: $parameters,
        /// <field>
        /// Called after the RatedOn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RatedOn_postRender: $parameters,
        /// <field>
        /// Called after the RatedByUser content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RatedByUser_postRender: $parameters,
        /// <field>
        /// Called after the Comment content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comment_postRender: $parameters
    });

    msls._addEntryPoints(lightSwitchApplication.EditRating, {
        /// <field>
        /// Called when a new EditRating screen is created.
        /// <br/>created(msls.application.EditRating screen)
        /// </field>
        created: [lightSwitchApplication.EditRating],
        /// <field>
        /// Called before changes on an active EditRating screen are applied.
        /// <br/>beforeApplyChanges(msls.application.EditRating screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.EditRating],
        /// <field>
        /// Called to determine if the DeleteRating method can be executed.
        /// <br/>canExecute(msls.application.EditRating screen)
        /// </field>
        DeleteRating_canExecute: [lightSwitchApplication.EditRating],
        /// <field>
        /// Called to execute the DeleteRating method.
        /// <br/>execute(msls.application.EditRating screen)
        /// </field>
        DeleteRating_execute: [lightSwitchApplication.EditRating],
        /// <field>
        /// Called to determine if the DeleteRecord method can be executed.
        /// <br/>canExecute(msls.application.EditRating screen)
        /// </field>
        DeleteRecord_canExecute: [lightSwitchApplication.EditRating],
        /// <field>
        /// Called to execute the DeleteRecord method.
        /// <br/>execute(msls.application.EditRating screen)
        /// </field>
        DeleteRecord_execute: [lightSwitchApplication.EditRating],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: $parameters,
        /// <field>
        /// Called after the Status content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Status_postRender: $parameters,
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: $parameters,
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: $parameters,
        /// <field>
        /// Called after the Achievement content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Achievement_postRender: $parameters,
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: $parameters,
        /// <field>
        /// Called after the RatedByUser content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RatedByUser_postRender: $parameters,
        /// <field>
        /// Called after the RatedOn content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RatedOn_postRender: $parameters,
        /// <field>
        /// Called after the Comment content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Comment_postRender: $parameters
    });

}(msls.application));
