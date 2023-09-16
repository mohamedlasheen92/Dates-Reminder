import React from 'react'
import { Col } from 'react-bootstrap'

export default function DatesCount({ data }) {
  return (
    <>
      <Col sm="8" className='dates-count fs-5 text-danger'>
        You have <span className='fw-bold'>{data.length}</span> appointments today.
      </Col>
    </>
  )
}
