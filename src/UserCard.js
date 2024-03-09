import React from 'react'

const UserCard = ({user}) => {
  return (
    <>
   //in this compenent I tried to display the user's name and the user's email 
    <div>{user.name}</div>
    <div>{user.email}</div>
 </>
  )
}

export default UserCard