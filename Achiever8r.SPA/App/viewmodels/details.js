define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
        title: 'Details View'
    };

    return vm;

    //#region Internal Methods
    function activate() {
        return true;
    }
    //#endregion
});