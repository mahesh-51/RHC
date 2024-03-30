import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import LawLogo from "../assets/images/lawLogo.png";

const Footer = () => {
  return (
    <div className='bg-dark text-light p-4 '>
      <Row>
        <Col className='d-flex justify-content-center align-items-center' md={4}>
          <p className='fs-2 fst-italic'>Joshi Law Office <img src={LawLogo} style={{width: 46}} className="bg-light rounded" alt="Law" /></p>
        </Col>
        <Col className='d-flex justify-content-start' md={4}>
          <ul>
            <li className='py-2'><a href="" className='text-light'>Home</a></li>
            <li className='py-2'><a href="" className='text-light'>About us</a></li>
            <li className='py-2'><a href="" className='text-light'>Services</a></li>
            <li className='py-2'><a href="" className='text-light'>Contact us</a></li>
          </ul>
        </Col>
        <Col className='d-flex justify-content-start' md={4}>
          <div>
            <Row>
              <Col className='py-2'>  
                <span className='fw-bolder'>Email:</span> <Link to="mailto:mahesh.mentem51@gmail.com" className='text-light' target='_blank'>Mahesh.mentem51@gmail.com</Link> 
              </Col>
            </Row>
            <Row>
              <Col className='py-2'>
              <span className='fw-bolder'>Contact:</span> 8806920771
              </Col>
            </Row>
            <Row>
              <Col className='py-2'>
              <span className='fw-bolder'>Address:</span> Pal road, Opp.Preksha Hospital, Jodhpur (Rajasthan)
              </Col>
            </Row>

          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer