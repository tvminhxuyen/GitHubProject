define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                { route: ['', 'home'],                          moduleId: 'hello/index',                title: 'Giới thiệu',            nav: 1 },
                { route: 'view-composition',                    moduleId: 'viewComposition/index',      title: 'Liên hệ',               nav: true },
                { route: 'modal',                               moduleId: 'modal/index',                title: 'Khuyến mãi',            nav: 3 },
                { route: 'event-aggregator',                    moduleId: 'eventAggregator/index',      title: 'Nhà cung cấp',          nav: 2 },
                { route: 'widgets',                             moduleId: 'widgets/index',              title: 'Khách hàng',            nav: true },
                { route: 'master-detail',                       moduleId: 'masterDetail/index',         title: 'Nhập hàng',             nav: true },
                { route: 'knockout-samples*details',            moduleId: 'ko/index',                   title: 'Xuất hàng',             nav: true },
                { route: 'keyed-master-details/:id*details',    moduleId: 'keyedMasterDetail/master',   title: 'Keyed Master Detail',   hash: '#keyed-master-details/:id' }
            ]).buildNavigationModel()
              .mapUnknownRoutes('hello/index', 'not-found')
              .activate();
        }
    };
});