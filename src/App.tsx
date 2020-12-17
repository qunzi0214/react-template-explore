import React, { FC } from 'react'
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Link,
  Redirect,
} from 'react-router-dom'
import {
  Layout,
  Menu,
} from 'antd'

import Sandwiches from './pages/sandwiches'
import Tacos from './pages/tacos'

const { Content } = Layout

interface RouteI {
  path: string
  label: string
  component: keyof RoutesCompsMapI
  routes?: RouteI[]
}

interface RoutesCompsMapI {
  Sandwiches?: FC<any>
  Tacos?: FC<any>
  Egg?: FC<any>
  Bread?: FC<any>
  Bus?: FC<any>
  Cart?: FC<any>
}

const routes: RouteI[] = [
  {
    path: '/sandwiches',
    label: 'sandwiches',
    component: 'Sandwiches',
    routes: [
      {
        path: '/sandwiches/egg',
        label: 'egg',
        component: 'Egg',
      },
      {
        path: '/sandwiches/bread',
        label: 'bread',
        component: 'Bread',
      },
    ],
  },
  {
    path: '/tacos',
    label: 'tacos',
    component: 'Tacos',
    routes: [
      {
        path: '/tacos/bus',
        label: 'bus',
        component: 'Bus',
      },
      {
        path: '/tacos/cart',
        label: 'cart',
        component: 'Cart',
      },
    ],
  },
]

const routesCompsMap: RoutesCompsMapI = {
  Sandwiches,
  Tacos,
}

const App: FC = () => {
  return (
    <Router>
      <Layout>

        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
          {
            routes.map(route => (
              <Menu.Item key={route.path}>
                <Link to={`${route.path}`}>{route.label}</Link>
              </Menu.Item>
            ))
          }
        </Menu>

        <Content>
          <Switch>
            <Redirect exact path="/" to={routes[0].path} />
            {
              routes.map((route, index) => (
                <Route path={`${route.path}`} key={index} render={props => {
                  const Comp = routesCompsMap[route.component]
                  return (
                    // @ts-expect-error
                    <Comp {...props} routes={route.routes} />
                  )
                }} />
              ))
            }
          </Switch>
        </Content>

      </Layout>
    </Router>
  )
}

export default App
