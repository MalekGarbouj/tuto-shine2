var app = angular.module('customers',['ngRoute', 'templates']);

app.controller("CustomerSearchController", ["$scope","$http",function($scope , $http) {                         
    
    var page = 0;

    $scope.search = function(searchTerm) {
        if (searchTerm.length < 3){
            return;
        }
        $http.get("http://localhost:3000/customers.json",
       { "params": { "keywords": searchTerm, "page": page } })
            .then(function(response) {
            $scope.customers = response.data;
            }.error(function(data,status,headers,config) {
            alert("There was a problem: " + status);
            }
        ));
    }
        
    $scope.previousPage = function() {
        if (page > 0) {
        page = page - 1;
        $scope.search($scope.keywords);
        }
    }
    $scope.nextPage = function() {
        page = page + 1;
        $scope.search($scope.keywords);
    }

}]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "customer_search.html",
        controller: "CustomerSearchController"
    });
   }
]);
