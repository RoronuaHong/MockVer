import './MockVer.scss'

import { Helmet } from 'react-helmet'

import MainContainer from '@/containers/MainContainer/index'
import { MockContextProvider } from '@/context/MockContext'

function App() {

  return (
    <MockContextProvider>
      <Helmet>
        <title>MockVer</title>
        <meta name='description' content='EffieWebVer' />
      </Helmet>
      <div className="App">
        <MainContainer />
      </div>
    </MockContextProvider>
  )
}

export default App
