import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='bg-secondary text-white p-3 '>
      <Row>
        <Col className='d-flex justify-content-center' md={4}>
         Logo
        </Col>
        <Col className='d-flex justify-content-center' md={4}>
          hh
        </Col>
        <Col className='d-flex justify-content-center' md={4}>
          hh
        </Col>
      </Row>
    </div>
  )
}

export default Footer