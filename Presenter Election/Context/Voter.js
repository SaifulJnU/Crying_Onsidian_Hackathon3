import React, { createContext, useState } from 'react'
import Web3Model from 'web3modal'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { ethers } from 'ethers'
// import axios from axios;
import { useRouter } from 'next/router';

//internal

import { VotingAddress, VotingAddressABI } from './constants'
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0")
const fetchContract = (signerOrProvider) => new ethers.Contract(VotingAddress,VotingAddressABI,signerOrProvider)

export const VotingContext = createContext();
export const VotingProvider = ({ children }) => {
  const votingTitle = 'my first smart contact';
  const route = useRouter()
  const [currentAccount, setCurrentAccount] = useState('')
  const [candidateLength, setCandidateLength] = useState('')
  const pushCandidate = [];
  const candidateIndex = [];

  const [candidateArray, setCandidateArray] = useState(pushCandidate)



  const [error, setError] = useState('')
  const highestVote = [];


  const pushVoter = [];
  const [voterArray, setVoterArray] = useState(pushVoter);
  const [voterLength, setVoterLength] = useState('');
  const [voterAddress, setVoterAddress] = useState([]);



  const checkIf = async () => {
    // if (!window.ethereum) return setError("Install METAMASK");

    // const account = await window.ethereum.request({ method: eth_accounts });

    // if (account.length) {
    //   setCurrentAccount(account[0]);
    // } else {
    //   setError("Install error");
    // }
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner()
    const accountAddress = await signer.getAddress()
    setCurrentAccount(accountAddress);
  }

  const connectWallet = async () => {
    if (!window.ethereum) return setError("Install METAMASK");

    const account = await window.ethereum.request({ method: eth_requestAccounts });


    setCurrentAccount(account[0]);

  }

  const createVoter = async (user) => {
    try {
      const { name, address, position } = user;
      if (!name || !address) {
        console.log('error, Insert Data')
      } else {
        const web3Model = new Web3Model();
        //console.log(web3Model);
        const connection = await web3Model.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const singer = provider.getSigner();
          const contract = fetchContract(singer)
         console.log(contract);
      }

    } catch (error) {
      setError("User Not Added ");
    }

  }





  return (
    <VotingContext.Provider value={{ votingTitle, currentAccount, createVoter, connectWallet, checkIf }}>
      {children}
    </VotingContext.Provider>
  )
}
// const Voter = () => {
//   return (
//     <div>Voter</div>
//   )
// }

// export default Voter