import React,{useState,useEffect} from 'react';
import { Table,Container } from 'react-bootstrap';
import axios from 'axios';
import { ToWords } from 'to-words';

const TableData=({studentId})=>{

    const toWords=new ToWords();

    const[resultDetails,setResultDetails]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/studentInfo')
        .then((response)=>{
            console.log("res",response.data)
            let temp=[]
            temp = response.data.filter((data)=>data.registerId === studentId)
            setResultDetails(temp)
        })
        .catch((error)=>console.log("err",error))
    },[studentId])
    console.log("state",resultDetails)

    const getTotalMarks=(value)=>{
        let sum=0
        resultDetails.map((data)=>{
            sum+=Number(data[value])
        })
        return sum
    }
    const scoreHandler=()=>{
        let count=0
        resultDetails.map((data)=>{
            if(data.result==='FAIL'){
                count++
            }
        })
        if(count>=1){
            return 'FAIL'
        }else{
            return 'PASS'
        }

    }

    const finalResult=()=>{
        let status,sum=0
        resultDetails.map((data)=>{
            sum+=Number(data.obtained_marks)
            if(data.result==='FAIL'){
                status='FAIL'
            }else if(sum>260){
                status='DISTINCTION'
            }else if(sum<260 && sum>220){
                status='FIRST CLASS'
            }else{
                status='SECOND CLASS'
            }
        })
        return status
    }
     
    const findPercent=()=>{
       let obtained=getTotalMarks('obtained_marks')
       let max=getTotalMarks('max_marka')
        let x='%',
        percent=Math.floor((obtained/max)*100)
        return [percent,x]
    }

    const totalMarksInWords=()=>{
        let a=getTotalMarks('obtained_marks')
        let text=toWords.convert(a)
        return text
    }

    return(
        <Container>
        <Table  className='my-5' responsive bordered>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>Sl No</th>
                    <th colSpan={2}>Subject
                        <th style={{padding:"1rem 5rem"}}>Code</th>
                        <th style={{padding:"1rem 5rem"}}>Subject</th>
                    </th>
                    <th colSpan={3}>Examination Marks Obtained
                        <th style={{padding:"1rem 3.5rem"}}>Max</th>
                        <th style={{padding:"1rem 3.5rem"}}>Min</th>
                        <th style={{padding:"1rem 3rem"}}>Obtained</th>
                    </th>
                    <th>Subject Result</th>
                </tr>
            </thead>
            <tbody>
               {
                resultDetails.map((data,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.code}</td>
                        <td>{data.subject}</td>
                        <td>{data.max_marka}</td>
                        <td>{data.min_marks}</td>
                        <td>{data.obtained_marks}</td>
                        <td>{data.result}</td>
                    </tr>
                ))
               }
            </tbody>
            <thead>
                <tr>
                    <th colSpan={3}>Grand Total</th>
                    <td>{getTotalMarks('max_marka')}</td>
                    <td>{getTotalMarks('min_marks')}</td>
                    <td>{getTotalMarks('obtained_marks')}</td>
                    <td>{scoreHandler()}</td>
                </tr>
            </thead>
        </Table>
        <p><b>Total Marks Obtained[In Words]</b>: {totalMarksInWords()}</p>
        <p><b>Result of Semester</b>: {finalResult()}</p>
        <p><b>Percentage</b>: {findPercent()}</p>
        <p><b>Date</b>: 05 DEC 2024</p>
        
        </Container>
    )
}
export default TableData