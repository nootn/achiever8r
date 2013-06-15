/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.Achievement.created = function (entity) {
    msls.promiseOperation(CallGetLoggedInUserName).then(function PromiseSuccess(PromiseResult) {
        if (PromiseResult !== undefined && PromiseResult.length > 0) {
            //NOTE: this does not work, leaving here for discussion - how do you get this working or is it not possible?
            entity.NominatedByUser.LoginId = PromiseResult;
        }
    });
    entity.NominatedOn = new Date();
    entity.NumberOfRatings = 0;
};

function CallGetLoggedInUserName(operation) {
    $.ajax({
        type: 'post',
        data: {},
        url: '../web/GetLoggedInUserName.ashx',
        success: operation.code(function AjaxSuccess(AjaxResult) {
            operation.complete(AjaxResult);
        })
    });
}