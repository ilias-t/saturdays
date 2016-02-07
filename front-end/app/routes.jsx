import App from './components/App'
import Search from './components/CampsiteSearchForm'
import Calendar from './components/Calendar'

const routes = {
  path: '/',
  component: App, //main wrapper component
  childRoutes: [
    { path: 'search', component: Search },
    { path: 'calendar', component: Calendar }
  ]
}
export default routes