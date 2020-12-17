import React, { FC, useState, useLayoutEffect } from 'react'
import { Radio } from 'antd'
import {
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from 'react-router-dom'

import Cart from './views/cart'
import Bus from './views/bus'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routesCompsMap = {
  Cart,
  Bus,
}

interface CustomRouteProps {
  routes?: object[]
}

const Index: FC<RouteComponentProps & CustomRouteProps> = ({ match, history, location, routes }) => {
  const [subPath, setSubPath] = useState(location.pathname)

  const onChange = (e: any): void => {
    history.push(e.target.value)
  }

  useLayoutEffect(() => {
    setSubPath(() => location.pathname)
  }, [location.pathname])

  return (
    <>
      <Radio.Group onChange={onChange} value={subPath}>
        {
          routes?.map((route, index) => {
            return (
              // @ts-expect-error
              <Radio value={route.path} key={index}>{route.label}</Radio>
            )
          })
        }
      </Radio.Group>
      <Switch>
        <Redirect exact path={`${match.path}/`} to={`${match.path}/cart`} />
        <Route path={`${match.path}/cart`} component={Cart} />
        <Route path={`${match.path}/bus`} component={Bus} />
      </Switch>
    </>
  )
}

export default Index
