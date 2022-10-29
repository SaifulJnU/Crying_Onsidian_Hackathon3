import React, { useContext, useState } from 'react'
import { VotingContext } from '../Context/Voter'
import allowVoter from '../styles/allowVoter.module.css'


const AllowVoter = () => {
  const [user, setUser] = useState({
    name: '',
    address: '',
  })
  const handleChange = (e) => {
    console.log(e.target.value);
    const newUser = { ...user }
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }
  console.log(user);
  const { createVoter } = useContext(VotingContext);


  return (
    <div className={allowVoter.container}>
      <div className={allowVoter.form} >
        <div>
          <p>Name:</p>
          <input className={allowVoter.input} type='text' name='name' onChange={handleChange} />
          <p>Address:</p>
          <input className={allowVoter.input} type='text' name='address' onChange={handleChange} />

         
          <br />
          <input className={allowVoter.btn} type='submit' value='Add Presenter' onClick={() => createVoter(user)} />
        </div>
      </div>
      
    </div>
  )
}

export default AllowVoter