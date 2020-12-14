import React, { FC } from 'react'
import Style from './index.less'
import { Button, DatePicker } from 'antd'

const Index: FC = () => (
  <div className={Style.root}>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
  </div>
)

export default Index
