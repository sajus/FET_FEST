import Core from './Core'
import { fetchComponents } from './api'

const routes =  [
  {
    path: '*',
    exact: true,
    component: Core,
    fetchInitialData: (req = '', domain = '') => fetchComponents(req, domain)
  }
]

export default routes
