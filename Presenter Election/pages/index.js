import React, { useContext } from 'react'
import Image from 'next/image'
import Countdown from 'react-countdown';

//in

import { VotingContext } from '../Context/Voter';
import Style from '../styles/index.module.css'
import Card from '../Components/Card/Card'
import bit from '../public/bit.svg';


const HOME = () => {
  const { votingTitle, checkIf, currentAccount } = useContext(VotingContext);
  return (
    <div className={Style.container}>
      <div className={Style.card}>
        <p>Blockchain Based Digital Forensic Image Classification System using deep learning model.</p>
         <Image src={bit} style={{height:'300px', width:'400px'}}/>
      </div >
      <div className={Style.wallet}>
        {
          currentAccount.length > 0 ? (<div><h2 style={{backgroundColor:'#ffafcc', padding:'8px 8px', borderRadius:'20px',  }}>Connected</h2> <span style={{paddingTop:'50px'}}>Address: {currentAccount} </span></div>) : (<div style={{paddingTop:'100px'}}>
            <button className={Style.btn} onClick={() => checkIf()}>Connect Wallet</button>

          </div>)
        }
      </div>

    </div>
  )
}

export default HOME
