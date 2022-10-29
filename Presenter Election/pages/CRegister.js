import React from 'react'
import allowVoter from '../styles/allowVoter.module.css'

const CRegister = () => {
  return (
    <div className={allowVoter.container}>
      <div className={allowVoter.form} >
        <div>

          <p>Address:</p>
          <input className={allowVoter.input} type='text' name='address' />
          <br />
          <input className={allowVoter.btn} type='submit' value="Submit Vote " />
        </div>
      </div>
    </div>
  )
}

export default CRegister