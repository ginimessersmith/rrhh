export const ListExpansionPanel = [
  {
    'name': 'Sistema',
    'icon': 'wysiwyg',
    'listPanel': [{ 'nameRouter': 'Usuarios', 'router': '/user/perfil' },]
  },
  {
    'name': 'Empresa',
    'icon': 'webhook',
    'listPanel': [
      { 'nameRouter': 'Sucursales', 'router': '/user/branch' },
      { 'nameRouter': 'Departamentos', 'router': '/user/department' },
      { 'nameRouter': 'Departamentos Sucursales', 'router': '/user/department-branch' },
      { 'nameRouter': 'Cargos', 'router': '/user/position' },
    ]
  },
  {
    'name': 'Personal',
    'icon': 'groups',
    'listPanel': [
      { 'nameRouter': 'Empleados', 'router': '/user/employee' },
      { 'nameRouter': 'Tipos de Contratos', 'router': '/user/contract-type' },
      { 'nameRouter': 'Profesiones', 'router': '/user/profession' },
    ]
  },
  {
    'name': 'Planillas',
    'icon': 'description',
    'listPanel': [
      { 'nameRouter': 'Gestiones', 'router': '/user/management' },
      { 'nameRouter': 'Periodos', 'router': '/user/period' },
    ]
  },
  {
    'name': 'Vacantes',
    'icon': 'person_search',
    'listPanel': [
      { 'nameRouter': 'Vacancias', 'router': '/user/vacancies' },
      { 'nameRouter': 'Aplicantes', 'router': '/user/applicant' },
      { 'nameRouter': 'Aplicaciones', 'router': '/user/application' },
    ]
  },
]
