var website = angular.module('website', ['headerWebsite' , 'aboutWebsite' , 'homeWebsite']);

(function (){
    config.$inject = ['$provide', '$httpProvider','$urlRouterProvider'];
    function config ($provide, $httpProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/about")
    };
    website.config(config);
}());