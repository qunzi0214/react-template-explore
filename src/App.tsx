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

import Home from './routes/home'
import Users from './routes/users'

const { Content } = Layout

// const Home = lazy(async () => await import('./routes/home'))
// const Users = lazy(async () => await import('./routes/users'))

const App: FC = () => (
  <Router>
    <Layout>

      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/home">home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/users">users</Link>
        </Menu.Item>
      </Menu>

      <Content>
        <Switch>
          <Redirect exact path="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/users" component={Users} />
        </Switch>
      </Content>

    </Layout>
  </Router>
)

export default App
