vusalbaApp.controller('enterDataController', ['$scope','$rootScope','enterDataService',


    function ($scope, $rootScope, enterDataService) {

            $scope.results = [] ;
        // _show('loader');
         _hide('bodyTable');
        $scope.iscreated = false;
        $scope.initializeData = function () {
            enterDataService.getAll()
                .then(function (response) {
                    _hide('loader');
                    _show('bodyTable');
                    $scope.allInputTable = response.data;
                    angular.forEach($scope.allInputTable, function (item) {
                        var itemtag = JSON.parse(item.tags);
                        $scope.results.push(itemtag);
                    });
                    if ($scope.results.length > 0 ) {
                        $scope.iscreated = true;
                    }
                    // console.log($scope.results);
                }, function (msg) {

                });
        };

        $scope.saveData = function(data, id, donnees) {
            _show('loader');
            angular.extend(data, {id: id});
             $scope.results = [];
            var objectKeys = Object.keys(data);
            var formule = [];
            var listCalcul = [];
            angular.forEach(donnees.axeValues, function (item) {
                if (item.formule.indexOf('/') > -1) {
                    formule = item.formule.split('/');
                    var operation = {
                        "formule" : item.formule,
                        "operande1" : formule[0],
                        "operande2" : formule[1],
                        "operateur" : '/'
                    };
                    listCalcul.push(operation);
                }
                if (item.formule.indexOf('-') > -1 ) {
                    formule = item.formule.split('-');
                    var operation = {
                        "formule" : item.formule,
                        "operande1" : formule[0],
                        "operande2" : formule[1],
                        "operateur" : '-'
                    };
                    listCalcul.push(operation);
                }
                if (item.formule.indexOf('+') > -1 ) {
                    formule = item.formule.split('+');
                    var operation = {
                        "formule" : item.formule,
                        "operande1" : formule[0],
                        "operande2" : formule[1],
                        "operateur" : '+'
                    };
                    listCalcul.push(operation);
                }
                if (item.formule.indexOf('*') > -1 ) {
                    formule = item.formule.split('*');
                    var operation = {
                        "formule" : item.formule,
                        "operande1" : formule[0],
                        "operande2" : formule[1],
                        "operateur" : '*'
                    };
                    listCalcul.push(operation);
                }
                for (key in data){
                    // item.value = data + '.' + objectKeys[i] ;
                    if (key == item.code) {
                        item.value = data[key] ;
                    }
                }


            });
            // console.log(donnees);
            angular.forEach(listCalcul, function (item) {
                var op1 = 0;
                var op2 = 0;
                var operateur = item.operateur;
                angular.forEach(donnees.axeValues, function (it) {

                    if (item.operande1 == it.name) {
                       op1 =  parseFloat(it.value);
                    }

                    if (item.operande2 == it.name) {
                        op2 = parseFloat(it.value);
                    }
                    if (op1 !== 0 && op2 !== 0) {
                        angular.forEach(donnees.axeValues, function (it2) {
                            if (it2.formule == item.formule) {
                                switch (operateur) {
                                    case '/' : it2.value = (op1 / op2 * 100).toFixed(2)  + ' %' ;break;
                                    case '+' : it2.value = op1 + op2  ;break;
                                    case '-' : it2.value = op1 - op2  ;break;
                                    case '*' : it2.value = op1 * op2  ;break;
                                    default :
                                        it2.value = 0;break;
                                }
                            }
                        })
                    }
                })
            });

            enterDataService.editData(donnees)
                .then(function (response) {
                    var results = response.data;
                    angular.forEach(results, function (item) {
                        _hide('loader');
                        var itemtag = JSON.parse(item.tags);
                        $scope.results.push(itemtag);
                    });
                }, function (msg) {
                    alert(msg);
                })
        };

        $scope.enableBtn = function () {
            $('.editable-input').mask('000 000 000 000 000', {reverse: true});
            $('.editable-input').mask('#00 000 000 000 000', {reverse: true});
            $('.editable-input').mask('##0 000 000 000 000', {reverse: true});
            // $('#dbTable div ').addClass('popover-wrapper');
        };
        $scope.setMarkeur = function (data, id,budget) {
            if (!data.match(/[\d\s]+/g)) {
                angular.element(document.getElementById("gb"+id+budget)).find("input").css('border','2px solid #a94442');
                angular.element(document.getElementById("validForm"+id)).attr("disabled","disabled");
            }
            else {
                angular.element(document.getElementById("gb"+id+budget)).find("input").css('border','2px solid #b2dba1');
                angular.element(document.getElementById("validForm"+id)).removeAttr("disabled","disabled");
            }
        };
}]);
