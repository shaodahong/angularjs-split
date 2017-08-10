import app from './app'
function route($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: '/',
            controller: 'indexCtrl',
            template: require('./route/index/index.html')
        })
        .state('index.page1', {
            url: '^/page1',
            controller: 'page1Ctrl',
            templateProvider: ['$q', function ($q) {
                let deferred = $q.defer();
                require.ensure(['./route/page1/page1.html'], function () {
                    let template = require('./route/page1/page1.html');
                    deferred.resolve(template);
                });

                return deferred.promise;
            }],
            resolve: {
                foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    let deferred = $q.defer();
                    require.ensure(['./route/page1/page1.js'], function () {
                        let module = require('./route/page1/page1.js');
                        console.log('let', module)
                        $ocLazyLoad.load({
                            name: 'page1'
                        });
                        deferred.resolve(module);
                    });

                    return deferred.promise;
                }]
            },
        })
    // .state('index.page1', {
    //     url: '^/page1',
    //     templateUrl: './route/page1/page1.html',
    //     controller: './route/page1/page1.js'
    // })
    // .state('index.page2', {
    //     url: '^/page2',
    //     templateUrl: './route/page1/page2.html',
    //     controller: './route/page1/page2.js'
    // })
    // .state('index.page3', {
    //     url: '^/page3',
    //     templateUrl: './route/page1/page3.html',
    //     controller: './route/page1/page3.js'
    // })
}

export default route;