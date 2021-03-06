import React from 'react'

const  Title = ({name, title}) => {
  return (
    <div className='row'>
      <div className='col-10 text-center my-2 mx-auto text-title' >
        <h1 className='text-capitalize font-weight-bold'>
          {name} <strong className='text-main-brown'>{title}</strong>
          </h1>
      </div>
    </div>
  )
}


export default Title