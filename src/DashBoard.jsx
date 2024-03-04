import React from 'react'
import Sidebar from './Sidebar'
import {Row, Col} from 'react-bootstrap'

const DashBoard = () => {
  return (
    <div>
        <Row>
            <Col md={3}>
            <Sidebar/>
            </Col>
        </Row>
      
    </div>
  )
}

export default DashBoard
