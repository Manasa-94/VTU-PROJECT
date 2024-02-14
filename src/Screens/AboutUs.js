import React from "react";
import { Row,Col,Image } from "react-bootstrap";

const AboutUs=()=>{
    return(
        <>
        <h3 style={{color:"orange",margin:'2rem 0px 0px 35.4rem'}}>Vision</h3>
        <Row>
            <Col>
            <Image src='images/vision.jpg' alt='vision' height="400px" width="100%" />
            </Col>
            <Col>
            <p className='p-style'>
                To become an outstanding Technological University at the cutting 
                edge of Science and Technology that produces world class Knowledge-delivery,
                 Research, Extension and Leadership in Technology innovation for Industry and Society.
                </p>
                <p className='p-style'>
                To become an outstanding Technological University at the cutting edge of Science 
                and Technology that produces world class Knowledge-delivery, Research, Extension
                 and Leadership in Technology innovation for Industry and Society.
                </p>
            </Col>
        </Row>
        <br/>
        <h3 style={{color:"orange",margin:'2rem 0px 0px 0px'}}>Mission</h3>
        <Row>
            <Col>
                <p className='p-style'>To plan the development of technical education, to establish value-based and 
                need-based education and training in engineering and technology, with a view
                to generate qualified and competent manpower, responsive to technological and 
                societal needs.</p>

                <p className='p-style'>To plan the development of technical education, to establish value-based and 
                need-based education and training in engineering and technology, with a view
                to generate qualified and competent manpower, responsive to technological and 
                societal needs.</p>
            </Col>
            <Col>
            <Image src='images/mission.jpg' alt='mission' height="400px" width="100%" />
            </Col>
        </Row>
        <br/>
        <h3 style={{color:"orange",margin:'2rem 0px 0px 35.4rem'}}>Mandate</h3>
        <Row>
            <Col>
            <Image src='images/mandate.jpg' alt='mandate' height="400px" width="100%" />
            </Col>
            <Col>
            <p className='p-style'>
                The Visvesvaraya Technological University has been established by the Government of the Karnataka in
                 order to Promote planned and sustainable development of technical education consistent with
                  state and national policies.
                *Design need based programs that ensure adequate human resource of the right kind.
                *Establish objective evaluation and certification systems for students,programs and institutions.
                *Collaborate with national and international institutions R&D establishments organizations like AICTE,
                 MHRD, UGC, etc.industry and user agencies.
                </p>
            </Col>
        </Row>

        </>
    )
}
export default AboutUs