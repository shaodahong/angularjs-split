import angular from 'angular'
import app from './app'

console.log('app', app)

angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name])
})