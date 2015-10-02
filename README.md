# angular-datetime-keep-offset
An Angularjs directive that maintains an offset between 2 Datetimes

# Usage

You can use bower to install this directive:

    bower intall angular-datetime-keep-offset


Add it as a dependency to your application:

    var myApp = angular.module('myApp', 'modelKeepOffset')


Use it on combination with a datepicker or timepicker to maintain an offset

    <input type="text" ng-model="begin" ui-timepicker model-keep-offset="end">
    <input type="text" ng-model="end" ui-timepicker>
