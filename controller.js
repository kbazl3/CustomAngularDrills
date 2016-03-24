angular.module("app")
    .controller("myCtrl", function($scope, $log, $filter, $anchorScroll) {

        
        //$log and $filter
        $scope.name = "john";
        $scope.formattedName = $filter('uppercase')($scope.name);

        $log.info($scope.name);
        $log.info($scope.formattedName);

        $scope.scrollTo = function(id) {
            $anchorScroll(id);
        };

    });
