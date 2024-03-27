export default [
  {
    component: 'CNavItem',
    name: 'Templates',
    to: '/templates',
    icon: 'cil-speedometer',
  },
 
  {
    component: 'CNavTitle',
    name: 'Documentos',
  },
  {
    component: 'CNavGroup',
    name: 'Fichas',
    to: '/pages',
    icon: 'cil-book',
    items: [
      {
        component: 'CNavItem',
        name: 'Crear Ficha',
        to: '/pages/login',
      },
      {
        component: 'CNavItem',
        name: 'Ver Fichas',
        to: '/pages/register',
      },
      {
        component: 'CNavItem',
        name: 'Listar Parámetros',
        to: '/parametros',
      },
      
    ],
  },

  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
