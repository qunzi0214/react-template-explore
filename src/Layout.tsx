import React, { FC, Suspense, lazy } from 'react'
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom'

const Home = lazy(async () => await import('./views/home'))
const Users = lazy(async () => await import('./views/users'))

const Layout: FC = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </nav>
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
      </Switch>
    </Suspense>

  </div>
)

export default Layout
