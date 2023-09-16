import React from 'react'
import { Col } from 'react-bootstrap'

export default function DatesAction({ showAllFunc: showData, deleteAllFunc }) {
  return (
    <>
      <Col sm="8" className='d-flex justify-content-between px-0'>
        <button className='btn btn-danger w-25' onClick={() => deleteAllFunc()}>Delete All</button>
        <button className='btn btn-danger w-25' onClick={() => showData()}>Show Data</button>
      </Col>
    </>
  )
}
