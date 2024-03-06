import React,{useState} from "react";
import Sidebar from "./components/Sidebar";
import { Row, Col } from "react-bootstrap";
import Box from "./components/Box";
import companiesData from './Data/data';
import Table from './components/Table';
import Header from "./components/Header";
import Bottom from "./components/Bottom";

const DashBoard = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
    <Row >
        <Col md={2} >
        <Sidebar/>
        
        </Col>  
        
        <Col md ={10}>
        <Header setSearch={setSearch}/>
        <Table companiesData={companiesData} search={search}></Table>
        <Bottom/>
        </Col>
    </Row>
</div>
    
  );
};

export default DashBoard;
