
const routes = [
  {
    path: '/',
    component: () => import('pages/Index'),
    children: [
      {
        path: '/login',
        component: () => import('pages/login/login')
      },
      {
        path: '/login/forgot',
        component: () => import('pages/login/forgot')
      },
      {
        path: '/login/register',
        component: () => import('pages/login/register')
      },
      {
        path: '/dashboard',
        component: () => import('layouts/layout'),
        children: [
          {
            path: '/dashboard',
            component: () => import('pages/dashboard/dashboard')
          },
          {
            path: '/beers',
            component: () => import('pages/beers/beer')
          }
        ]
      }
    ]
  }
]

export default routes
