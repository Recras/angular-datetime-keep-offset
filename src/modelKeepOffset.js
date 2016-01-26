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

                var oldVal;
                var setOldVal = function() {
                    oldVal = angular.copy(getModel());
                };
                setOldVal();

                ctrl.$parsers.push(function(value) {
                    if (value && oldVal && value.getTime() !== oldVal.getTime()) {
                        var diff = (value - oldVal) / 1000;
                        var offsetModel = getmodelKeepOffset();
                        if (offsetModel) {
                            offsetModel.setSeconds(offsetModel.getSeconds() + diff);
                        }
                        setOldVal();
                    }
                    return value;
                });

                scope.$watch(getModel, function() {
                    setOldVal();
                });
            }
        };
    });
