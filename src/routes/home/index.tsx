import React, { FC, useState, useEffect } from 'react'
import { Radio } from 'antd'
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom'

import A from './routes/home-a'
import B from './routes/home-b'

const Index: FC = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const location = useLocation()

  // console.log(location)
  // TODO: router change will cause twice render?

  const [subPath, setSubPath] = useState(location.pathname)

  const onChange = (e: any): void => {
    setSubPath(e.target.value)
    history.push(e.target.value)
  }

  useEffect(() => {
    setSubPath(location.pathname)
  }, [location])

  return (
    <>
      <Radio.Group onChange={onChange} value={subPath}>
        <Radio value={`${match.path}/home-a`}>A</Radio>
        <Radio value={`${match.path}/home-b`}>B</Radio>
      </Radio.Group>
      <Switch>
        <Redirect exact path={`${match.path}/`} to={`${match.path}/home-a`} />
        <Route path={`${match.path}/home-a`} component={A} />
        <Route path={`${match.path}/home-b`} component={B} />
      </Switch>
    </>
  )
}

export default Index
