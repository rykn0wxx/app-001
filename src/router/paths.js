export default [
  {
    path: '/',
    name: 'Application',
    view: 'layouts/Application',
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        view: 'pages/Home',
        meta: { isPublic: true }
      },
      {
        path: '/about',
        name: 'About',
        view: 'pages/About',
        meta: { isPublic: true }
      }
    ]
  }
]
