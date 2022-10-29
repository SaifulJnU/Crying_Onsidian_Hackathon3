import '../styles/globals.css'
import { VotingProvider } from '../Context/Voter'
import Navbar from '../Components/Navbar/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <VotingProvider>
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
    </VotingProvider>
  )
}

export default MyApp
