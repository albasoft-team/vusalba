'use strict';
vusalbaApp.factory('composantService', function ($http, $q) {
        var factory = {
                composants:false,
                axis:false,
                getAll : function () {
                    var  deferred = $q.defer();
                    if (factory.composants !== false) {
                        deferred.resolve(factory.composants);
                    }else {
                        $http.get(Routing.generate('composant_list'))
                            .then(function (data, status) {
                                factory.composants = data;
                                deferred.resolve(factory.composants);
                            },(function (data, status) {
                                deferred.reject('impossible de recuperer les donnees');
                            }));
                    }
                    return deferred.promise;
                },
                getAllAxis : function () {
                    var  deferred = $q.defer();
                    if (factory.axis !== false) {
                        deferred.resolve(factory.axis);
                    }else {
                        $http.get(Routing.generate('axis_list'))
                            .then(function (data, status) {
                                factory.axis = data;
                                deferred.resolve(factory.axis);
                            },(function (data, status) {
                                deferred.reject('impossible de recuperer les donnees');
                            }));
                    }
                    return deferred.promise;
                }
        }
        return factory;
});
