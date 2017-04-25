/**
 * Created by lee on 6/2/16.
 */
var app = angular.module("VideoAPP",[]);

app.controller('videoCtrl', function($scope, $http){

    $scope.video_data = [];
    $scope.city = "San Jose";

    $scope.cityvideo = function(city){
        $http.jsonp('https://api.dailymotion.com/videos?fields=id,thumbnail_url%2Ctitle,url&country=us&search='+city+'&page=2&limit=9&callback=JSON_CALLBACK')
            .success(function(result){
                $scope.video_data = result.list;
            })
            .error(function(result){
                alert("fail")
                $scope.video_data = "Request Failed";
            });
    }
    $scope.cityvideo("San Jose");
});
