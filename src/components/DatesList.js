import React from 'react'
import { Col } from 'react-bootstrap'

export default function DatesList({ data }) {
  return (
    <>
      <Col sm="8" className='content bg-light rounded'>
        {
          data.length ? (
            data.map((person, index) => {
              return (
                <div className='person border-bottom d-flex align-items-center' key={index}>
                  <img src={person.image} alt='' />
                  <div className='person-data'>
                    <p>{person.name}</p>
                    <p>{person.date}</p>
                  </div>
                </div>
              )
            })

          ) : <h2 className='text-secondary text-center mt-5'>There're no appointments</h2>
        }
      </Col>
    </>
  )
}
