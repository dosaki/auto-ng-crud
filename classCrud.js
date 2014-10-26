var classCrud = angular.module('classCrud', []);

classCrud.controller('ClassCrudCtrl', function ($scope) {
    $scope.attributes = $scope.attributes = [
        {"show":true, "type":"Date", "name":"closeDate", "values":{1:"2014-11-14T13:43:00Z"}},
        {"show":true, "type":"String", "name":"confirmText", "values":{1:"Thank you for confirming."}},
        {"show":true, "type":"String", "name":"connectionMode", "values":{1:"http"}},
        {"show":true, "type":"String", "name":"consentAgreement", "values":{1:"You are being invited to take part in this."}},
        {"show":true, "type":"String", "name":"contact", "values":{1:""}},
        {"show":true, "type":"Long", "name":"copiedFrom", "values":{1:null}},
        {"show":true, "type":"String", "name":"description", "values":{1:"blabla"}},
        {"show":true, "type":"String", "name":"descriptionImageLayout", "values":{1:"center"}},
        {"show":true, "type":"String", "name":"folder", "values":{1:"bt"}},
        {"show":true, "type":"Boolean", "name":"goFirstTask", "values":{1:false}},
        {"show":true, "type":"Boolean", "name":"inSameWindow", "values":{1:true}},
        {"show":true, "type":"Boolean", "name":"isLive", "values":{1:true}},
        {"show":true, "type":"String", "name":"locale", "values":{1:""}},
        {"show":true, "type":"String", "name":"name", "values":{1:""}},
        {"show":true, "type":"String", "name":"optOutText", "values":{1:""}},
        {"show":true, "type":"Organization", "name":"organization", "values":{1:""}},
        {"show":true, "type":"String", "name":"pageFooter", "values":{1:""}},
        {"show":true, "type":"String", "name":"pageHeader", "values":{1:""}},
        {"show":true, "type":"SortedSet", "name":"sections", "values":{1:""}},
        {"show":true, "type":"String", "name":"shortName", "values":{1:""}},
        {"show":true, "type":"Date", "name":"startDate", "values":{1:""}},
        {"show":true, "type":"String", "name":"styleSheet", "values":{1:""}},
        {"show":true, "type":"String", "name":"testOverText", "values":{1:""}},
        {"show":true, "type":"String", "name":"thankYou", "values":{1:""}},
        {"show":true, "type":"Boolean", "name":"useCache", "values":{1:""}},
        {"show":true, "type":"Set", "name":"userSessions", "values":{1:""}},
        {"show":true, "type":"String", "name":"webSiteName", "values":{1:""}}
    ];

    $scope.className = "Test"
});
