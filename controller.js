angular.module("app")
    .controller("myCtrl", function($scope, $log, $filter, $timeout, $anchorScroll) {


        //$log and $filter
        $scope.name = "john";
        $scope.formattedName = $filter('uppercase')($scope.name);

        $log.info($scope.name);
        $log.info($scope.formattedName);

        $scope.date = new Date();
        $scope.person = {
            name: "Kyle",
            age: 26,
            occupation: "Developer"
        };

        $scope.scrollTo = function(id) {
            $anchorScroll(id);
        };

        $scope.characters = 5;
        $scope.test = "$20,000";

        $timeout(function() {
            $scope.test = "30,000";
        }, 2000);

        $timeout(function() {
            $scope.test = "$40,000";
        }, 3000);

        $timeout(function() {
            $scope.test = "$50,000";
        }, 4000);

        $timeout(function() {
            $scope.test = "$60,000";
        }, 5000);

        $timeout(function() {
            $scope.test = "$70,000";
        }, 6000);

    });
