import React from 'react'

const OfficeDetails = ({office}) => {
  return (
    <div>
      <hr/>
      <h1>Name: {office.Name}</h1>
      <h3 style={office.Rent <= 60000 ? {color: "red"}:{color: "green"}}>Rent: Rs. {office.Rent}</h3>
      <h3>Address: {office.Address}</h3>
    </div>
  )
}

export default OfficeDetails