angular.
    module('MobiTel').
        config(['$locationProvider', '$routeProvider',
            function config($locationProvider, $routeProvider) {

                $routeProvider.
                    when('/home', {
                        template: '<home></home>'
                    }).
                     when('/discounts', {
                         template: '<discounts></discounts>'
                    }).
                    when('/shipping-and-payment', {
                        template: '<shipping-and-payment></shipping-and-payment>'
                    }).
                    when('/contacts', {
                        template: '<contacts></contacts>'
                    }).
                    when('/shops', {
                        template: '<shops></shops>'
                    }).
                    when('/catalog/laptops', {
                        template: '<laptops></laptops>'
                    }).
                    when('/catalog/phones', {
                        template: '<phones></phones>'
                    }).
                    when('/catalog/tablets', {
                        template: '<tablets></tablets>'
                    }).
                    otherwise('/home')
            }
        ])