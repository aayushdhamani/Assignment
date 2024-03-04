import React from 'react'
import Sidebar from './Sidebar'
import {Row, Col} from 'react-bootstrap'
import companiesData from './Data/data';
import Table from './Components/Table';

const DashBoard = () => {
  return (
    <div>
        <Row>
            <Col md={3}>
            <Sidebar/>
            </Col>
            <Col md ={9}>
            <Table companiesData={companiesData}></Table>
            </Col>
        </Row>
      
    </div>
  )
}

export default DashBoard
