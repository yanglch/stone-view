export default [
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      // dashboard
      { path: '/', redirect: '/index' },
      {
        path: '/index',
        name: 'stoneIndex',
        icon: 'home',
        component: './Dashboard/Analysis',
      },
      {
        path: '/stone',
        icon: 'shopping-cart',
        name: 'stone',
        component: './Forms/BasicForm',
      },
      {
        path: '/news',
        icon: 'sound',
        name: 'news',
        component: './List/TableList',
      },
      {
        path: '/connect_us',
        name: 'connect_us',
        icon: 'phone',
        component: './Profile/BasicProfile',
      },
      {
        component: '404',
      },
    ],
  },
];
