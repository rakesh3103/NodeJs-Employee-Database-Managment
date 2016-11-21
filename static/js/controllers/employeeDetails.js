/**
 * Created by Rakesh M on 23-Jul-16.
 */
app.controller('employeeDetails', function($scope,$location,$http, Data) {

    $http.get("http://api.randomuser.me/?results=20").then(function(response){
        $scope.ajaxData = response.data.results;
        console.log(response.data);

    });
    
});


app.directive('pictureRepeat', function(){
   return{
       restrict: 'AE',

       priority: 1001,

      scope: {

          data: "="
       },
       templateUrl: 'templates/pictureRepeat.html',
       controller: function($scope){
           console.log("Scope: " + $scope);
       }
   }; 
    
    
});



