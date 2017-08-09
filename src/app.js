import angular from 'angular'
import router from '@uirouter/angularjs'
import oclazyload from 'oclazyload'

console.log('router', router)
console.log('oclazyload', oclazyload)

export default angular.module('app', [
    router,
    oclazyload
])