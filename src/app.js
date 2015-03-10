angular.module('sdjs', [])

.controller('AppController', function AppController ($scope) {

    $scope.pageTitle = 'San Diego JS Meetup: Angualar Directives';
    
})









































//---

// A simple directive that returns a link function

.directive('simpleDirective', function () {
    
    //Returning a link function!
    return function linkFunction (scope, element, attrs) {
        element.bind('click', function () {
            alert('Simple!');
        });
    };
    
})





































//---

// A less simple directive with an object containing a compile function

.directive('compileDirective', function () {
    
    //Returning an object with a compile function!
    return {
    
        compile: function compileFunction (element, attrs) {
        
            console.log('Compiling...', attrs['compileDirective']);
            element.prepend('<span>\u263A </span> ');
            
            return function linkingFunction (scope, element, attrs) {
                console.log('Linking...', attrs['compileDirective']);
                element.bind('click', function () {
                    alert('Compile Directive ' + attrs['compileDirective']);
                });
            };
        }
        
    };
    
})


























//---

// A directive that updates it's own markup content

.directive('agLabel', function agLabel () {
    return {
        compile: function compileFunction (element) {
            console.log('Compiling agLabel...');
            element.append('<span class="label label-primary">Label</span>');
            return function linkFunction () {
                console.log('Linking agLabel...');
            };
        }
    };
})




































//---

// A directive with a scope variable

.directive('agLabelWithContent', function agLabelWithContent () {
    return {
        scope: {
            content: '@'
        },
        compile: function compileFunction (element, attrs) {
            console.log('Compiling agLabel...', attrs.content);
            element.append('<span class="label label-primary"></span>');
            return function linkFunction (linkScope, linkElement) {
                console.log('Linking agLabel...', linkScope.content);
                linkElement.children().append(linkScope.content);
            };
        }
    };
})






























//---

// A directive that uses ngModel as a requirement

.directive('agDatepicker', function datepicker () {
    return {
        scope: {
            selectType: '@',
            ngModel: '='
        },
        require: 'ngModel'
    };
})





































//---

// A directive using a template

.directive('agHelloUser', function agTemplate () {
    return {
        template: '<h3 ng-if="agHelloUser">Hello {{ agHelloUser }}</h3>',
        scope: {
            agHelloUser: '='
        }
    };
})
;
