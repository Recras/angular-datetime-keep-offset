angular.module('modelKeepOffset', [])
    .directive('modelKeepOffset', function() {
        return {
            restrict: 'A',
            require: 'ngModel',

            link: function(scope, element, attr, ctrl) {
                var getModel = function() {
                    return scope.$eval(attr.ngModel);
                };

                var getmodelKeepOffset = function() {
                    return scope.$eval(attr.modelKeepOffset);
                };

                var oldVal = angular.copy(getModel());

                ctrl.$parsers.push(function(value) {
                    if (value.getTime() !== oldVal.getTime()) {
                        var diff = (value - oldVal) / 1000;
                        var offsetModel = getmodelKeepOffset();
                        offsetModel.setSeconds(offsetModel.getSeconds() + diff);
                        oldVal = angular.copy(value);
                    }
                    return value;
                });
            }
        };
    });
