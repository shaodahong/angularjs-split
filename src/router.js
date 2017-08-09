import app from './app'

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: './route/index/index.html'
        })
        .state('index.page1', {
            url: '^/page1',
            templateUrl: './route/page1/page1.html',
            controller: './route/page1/page1.js'
        })
        .state('index.page2', {
            url: '^/page2',
            templateUrl: './route/page1/page2.html',
            controller: './route/page1/page2.js'
        })
        .state('index.page3', {
            url: '^/page3',
            templateUrl: './route/page1/page4.html',
            controller: './route/page1/page3.js'
        })

}])