import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface CustomRouteProps {
  routes?: object[]
}

const Index: FC<RouteComponentProps & CustomRouteProps> = () => (
  <h1>sandwiches</h1>
)

export default Index
