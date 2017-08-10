import angular from 'angular'
import router from '@uirouter/angularjs'
import oclazyload from 'oclazyload'

import route from './router.js'

console.log('router', router)
console.log('oclazyload', oclazyload)
console.log('route', route)

export default angular.module('app', [
        router,
        oclazyload
    ])
    .config(['$stateProvider', '$urlRouterProvider', route])
    .controller('indexCtrl', require('./route/index/index.js'))