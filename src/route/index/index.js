module.exports = function ($scope, $state) {
        console.log('indexCtrl')

        $scope.navs = [
            {
                name: 'page1',
                index: 1
            },
            {
                name: 'page2',
                index: 2
            },
            {
                name: 'page3',
                index: 3
            }
        ]

        $scope.go = function (nav) {
            console.log('go', nav, $state)
            $state.go('index.page1')
        }
}