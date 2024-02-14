import React,{useEffect,useState} from 'react';
import {Row,Col,Form} from 'react-bootstrap';
import TableData from './TableData';
import axios from'axios';
import { useParams } from 'react-router-dom';

const ResultDisplay=()=>{

    const[studentDetails,setStudentDetails]=useState([])

    const {id}=useParams()
    useEffect(()=>{
        axios.get('http://localhost:3001/studentInfo')
        .then((response)=>{
            response.data.map((data)=>{
                if(data.registerId===id){
                    setStudentDetails(data)
                }
            })

        }).catch((error)=>console.log('error',error))
    },[])
    return(
        <>
        <Row className='justify-content-center my-5' >
            <Col sm={12} md={6}>
                <h4>Visvesvaraya Technological University,Belgaum</h4>
                <h6 style={{marginLeft:"4rem", fontSize:"15px"}}>VII-Semester, B.E.Examination Result, Nov/Dec-2024</h6>
            </Col>
        </Row>
        <Row>
            <Col sm={12} md={6}>
                <Form.Group>
                    <Form.Label>Student Name:</Form.Label>
                    <Form.Label style={{marginLeft:"5.2rem"}}>{studentDetails.studentName}</Form.Label><br/>
                    <Form.Label>Father's/Mothers's Name:</Form.Label>
                    <Form.Label style={{marginLeft:"1rem"}}>{studentDetails.FatherName}</Form.Label><br/>
                    <Form.Label>College name:</Form.Label>
                    <Form.Label style={{marginLeft:"5.4rem"}}>{studentDetails.collegeName}</Form.Label><br/>
                </Form.Group>
            </Col>
            <Col sm={12} md={6}>
                <Form.Group>
                <Form.Label style={{float:"right"}}>Register No: {studentDetails.registerId}</Form.Label>
                </Form.Group>
            </Col>
        </Row>
        <Row>
            <TableData studentId={studentDetails.registerId}/>
        </Row>
        </>
    )
}
export default ResultDisplay