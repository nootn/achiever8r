/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.EditAchievement.created = function (screen) {
    $(function () {
        contact = $.connection.notifyHub;
        contact.client.broadcastMessage = function (message) {
            screen.Status = message;
        };

        msls.promiseOperation(CallGetLatestStatus).then(function PromiseSuccess(PromiseResult) {
            screen.Status = PromiseResult;
        });

        $.connection.hub.start()
        .done(function () {
        })
        .fail(function () {
            alert("Could not Connect! - ensure EnableCrossDomain = true");
        });
    });
};

function CallGetLatestStatus(operation) {
    $.ajax({
        type: 'post',
        data: {},
        url: '../web/GetLatestStatus.ashx',
        success: operation.code(function AjaxSuccess(AjaxResult) {
            operation.complete(AjaxResult);
        })
    });
}

myapp.EditAchievement.NumberOfRatings_Tap_execute = function (screen) {

};

myapp.EditAchievement.AddRating_Tap_execute = function (screen) {
    myapp.showEditRating(null, {
        beforeShown: function (editScreen) {
            var item = new myapp.Rating();
            item.Achievement = screen.Achievement;
            editScreen.Rating = item;
        },
        afterClosed: function () {
            //TODO: figure out why this does not work: http://social.msdn.microsoft.com/Forums/en-US/lightswitch/thread/bb0d5e4c-4a44-416b-a33f-792670a69a41
            //screen.Achievement.load();
        }
    });
};
myapp.EditAchievement.RatingsList_ItemTap_execute = function (screen) {
    alert(screen.Ratings.selectedItem.Comment);
    myapp.showEditRating(screen.Ratings.selectedItem, {
        afterClosed: function () {
            //TODO: figure out why this does not work: http://social.msdn.microsoft.com/Forums/en-US/lightswitch/thread/bb0d5e4c-4a44-416b-a33f-792670a69a41
            //screen.Achievement.load();
        }
    });
};