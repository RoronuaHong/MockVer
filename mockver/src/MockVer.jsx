import './MockVer.scss'

import MainContainer from '@/containers/MainContainer/index'
import { MockContextProvider } from '@/context/MockContext'

function App() {

  return (
    <MockContextProvider>
      <div className="App">
        <MainContainer />
      </div>
    </MockContextProvider>
  )
}

export default App
