﻿/// <reference path="../GeneratedArtifacts/viewModel.js" />


myapp.EditRating.DeleteRecord_execute = function (screen) {
    screen.Rating.deleteEntity();
};
myapp.EditRating.created = function (screen) {
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