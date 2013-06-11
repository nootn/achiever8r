define(['services/logger', 'services/datacontext'], function (logger, datacontext) {
    var vm = {
        activate: activate,
        title: 'Home View',
        achievements: ko.observableArray([]),
        loadedAt: ko.observable(""),
    };

    return vm;

    function activate() {

        if (datacontext.loadAllAchievements(vm.achievements)) {
            var newDate = new Date();
            vm.loadedAt("Last Sync: " + moment().format('MMMM Do YYYY, h:mm:ss a'));
        }
        
        return true;
    }
});