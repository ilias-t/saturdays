import App from './components/App'
import Search from './components/CampsiteSearchForm'
import Calendar from './components/Calendar'

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'search', component: Search },
    { path: 'calendar', component: Calendar }
  ]
}
export default routes