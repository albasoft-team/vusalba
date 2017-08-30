vusalbaApp.controller('analyzeController',['$scope','$rootScope', 'analyseService',
    function ($scope, $rootScope, analyseService) {
    $scope.data = [
                    ['sn-sl', 0],
                    ['sn-th', 0],
                    ['sn-680', 0],
                    ['sn-zg', 0],
                    ['sn-tc', 0],
                    ['sn-kd', 0],
                    ['sn-6976', 0],
                    ['sn-6978', 0],
                    ['sn-6975', 0],
                    ['sn-dk', 0],
                    ['sn-db', 0],
                    ['sn-fk', 0],
                    ['sn-1181', 0],
                    ['sn-lg', 0]
                    ];
       $scope.form = {};
        $scope.analyser = function (form) {
            console.log(form);
            analyseService.postData(form)
                .then(function (response) {
                    // console.log($scope.data);
                    console.log(response);
                     $scope.results =response[1];
                    angular.forEach(response[0], function (it) {
                       for (var i = 0 ; i < $scope.data.length ; i++) {
                           if ($scope.data[i]['hc-key'] == it.hc_key) {
                               // console.log(it.hc_key);
                               $scope.data[i]['value'] = it.value;
                               $scope.data[i]['drilldown'] = it.name;
                               $scope.data[i]['fils'] = it.fils;
                           }
                       }
                    });
                     console.log($scope.data);
                     console.log($scope.results);
                    $scope.initialyze($scope.data, form);
                })

        };
            $scope.initialyze = function (donnees, form) {
                console.log('ici');
                $scope.nameofpoint = '';
                Highcharts.mapChart('container', {
                    chart: {
                        map: 'countries/sn/sn-all',
                        events: {
                            drilldown: function (e) {
                                console.log(e.point);
                                $scope.nameofpoint = e.point.name;
                                if (!e.seriesOptions) {
                                    var chart = this;
                                    // Show the spinner
                                    // chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>');
                                    chart.showLoading('Chargement .....');
                                    setTimeout(function () {
                                        chart.hideLoading();
                                    }, 2000);
                                    Highcharts.chart('chartContainer', {
                                        chart: {
                                            type: 'column',
                                            events : {
                                                drilldown : function (e) {
                                                    e.point.fils = {}; var drilldown = [];
                                                    $scope.nameofpoint = e.point.name;
                                                    angular.forEach($scope.results, function (it) {
                                                        if (it.parent !== null && it.parent == e.point.name) {
                                                            var isdrilldown = it.level == form.level ? false : true
                                                            drilldown.push({
                                                                name : it.name,
                                                                y : it.valeurAxe,
                                                                drilldown : isdrilldown
                                                            })
                                                        }

                                                    });
                                                    var value = '{"'+ e.point.name +'":{'
                                                                            +'"name" :"'+ e.point.name + '",'
                                                                            +'"data" :'+ JSON.stringify(drilldown)
                                                                            +'}}';
                                                    $scope.allfils = {};
                                                     $scope.allfils = JSON.parse(value);
                                                    if (!e.seriesOptions) {
                                                        var chart = this,
                                                            drilldowns  = $scope.allfils;
                                                            series = drilldowns[e.point.name];
                                                        // Show the loading label
                                                        chart.showLoading('Chargement ...');

                                                        setTimeout(function () {
                                                            chart.hideLoading();
                                                            chart.addSeriesAsDrilldown(e.point, series);
                                                        }, 2000);
                                                    }
                                                }
                                            }
                                        },
                                        title: {
                                            text: 'Le nombre de suffrage obtenu dans les centres de la commune de '+ e.point.name
                                        },
                                        xAxis: {
                                            type: 'category'
                                        },
                                        yAxis: {
                                            title: {
                                                text: ''
                                            }

                                        },
                                        legend: {
                                            enabled: false
                                        },
                                        plotOptions: {
                                            series: {
                                                pointWidth : 60,
                                                borderWidth: 0,
                                                dataLabels: {
                                                    enabled: true,
                                                    format: '{point.y:.1f}'
                                                }
                                            }
                                        },
                                        tooltip: {
                                            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                                            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
                                        },
                                        series: [{
                                            name: 'Brands',
                                            colorByPoint: true,
                                            data: e.point.fils
                                        }],
                                        drilldown : {
                                            // series : $scope.allfils
                                            series : []
                                        }
                                    })
                                    Highcharts.chart('pieContainer', {
                                        chart: {
                                            type: 'pie',
                                            events : {
                                                drilldown : function (e) {
                                                    e.point.fils = {}; var drilldown = [];
                                                    $scope.nameofpoint = e.point.name;
                                                    angular.forEach($scope.results, function (it) {
                                                        if (it.parent !== null && it.parent == e.point.name) {
                                                            var isdrilldown = it.level == form.level ? false : true
                                                            drilldown.push({
                                                                name : it.name,
                                                                y : it.valeurAxe,
                                                                drilldown : isdrilldown
                                                            })
                                                        }

                                                    });
                                                    var value = '{"'+ e.point.name +'":{'
                                                        +'"name" :"'+ e.point.name + '",'
                                                        +'"data" :'+ JSON.stringify(drilldown)
                                                        +'}}';
                                                    $scope.allfils = {};
                                                    $scope.allfils = JSON.parse(value);
                                                    if (!e.seriesOptions) {
                                                        var chart = this,
                                                            drilldowns  = $scope.allfils;
                                                        series = drilldowns[e.point.name];
                                                        // Show the loading label
                                                        chart.showLoading('Chargement ...');

                                                        setTimeout(function () {
                                                            chart.hideLoading();
                                                            chart.addSeriesAsDrilldown(e.point, series);
                                                        }, 2000);
                                                    }
                                                }
                                            }
                                        },
                                        title: {
                                            text: 'Le nombre de suffrage obtenu dans les centres de la commune de '+ $scope.nameofpoint
                                        },
                                        xAxis: {
                                            type: 'category'
                                        },
                                        yAxis: {
                                            title: {
                                                text: ''
                                            }

                                        },
                                        legend: {
                                            enabled: false
                                        },
                                        plotOptions: {
                                            series: {
                                                pointWidth : 60,
                                                borderWidth: 0,
                                                dataLabels: {
                                                    enabled: true,
                                                    format: '{point.y:.1f}'
                                                }
                                            },
                                        },
                                        tooltip: {
                                            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                                            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
                                        },
                                        series: [{
                                            name: 'Brands',
                                            colorByPoint: true,
                                            data: e.point.fils
                                        }],
                                        drilldown : {
                                            // series : $scope.allfils
                                            series : []
                                        }
                                    })
                                    Highcharts.setOptions({
                                        lang: {
                                            drillUpText: 'Retour'
                                        }
                                    });
                                }
                                this.setTitle(null, { text: e.point.name });
                            }
                        }
                    },
                    title: {
                        text: 'Représentation niveau national'
                    },

                    subtitle: {
                        text: "Senegal"
                    },

                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom'
                        }
                    },

                    colorAxis: {
                        min: 0
                    },

                    series: [{
                        data: donnees,
                        name: 'Suffrage',
                        states: {
                            hover: {
                                color: '#BADA55'
                            }
                        },
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }]
                });
            };
            $scope.initialyze($scope.data, $scope.form);

    }]);