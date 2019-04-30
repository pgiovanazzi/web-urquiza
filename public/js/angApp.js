'use strict'

const moduleMainController = angular.module("MainController", []);
const moduleMassage = angular.module("AlertMessages", []);

const app = angular.module("app", ["MainController", "AlertMessages"]);