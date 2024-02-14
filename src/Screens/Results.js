import React,{useState} from "react";
import {Link,useNavigate} from 'react-router-dom';
import { Row,Col,Form,Button,Alert } from "react-bootstrap";
import axios from 'axios';

const Results=()=>{
    const [registerInput,setRegisterInput]=useState("")
    const [error,setError]=useState("")
    const navigate=useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault()
        if(registerInput===''){
            setError("Please enter the register id")
        }else {
            axios.get('http://localhost:3001/studentInfo')
            .then((response)=>
            response.data.map((data,index)=>{
                if(data.registerId===registerInput){
                navigate(`displayresult/${registerInput}`)
            }else {
                setError("Invalid Register Id")
            }
        })
    )}}
    return(
        <>
        <Link to='/' className="btn btn-dark" style={{marginTop:"1rem"}}>Go Back</Link>

        <Row className="text-center">
            <Col>
                <h3>Check your results here...</h3>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
            </Col>
            <Col style={{marginLeft:"-19.5rem"}}>
            <Form onSubmit={(e)=>submitHandler(e)}>
                <Form.Label>Enter your Register No:</Form.Label><br/>
                <Form.Control type="text" placeholder="Enter your Register No" style={{width:"70%"}}
                value={registerInput}
                onChange={(e)=>setRegisterInput(e.target.value)}/>
                <Button type="submit" style={{marginTop:"1rem"}}>Submit</Button>
            </Form>
            
            </Col>
        </Row>
        <Row className="justify-content-center my-3">
        {error?<Alert variant="danger">{error}</Alert>:''}
        </Row>
        </>
    )
    }
export default Results