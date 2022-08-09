import { useReducer } from 'react'

import './MockVer.scss'

import MainContainer from '@/containers/MainContainer/index'

import MockReducer from '@/reducer/MockReducer'
import { MocksContext } from '@/context/context'

const initialState = []

function App() {
  const [mocks, mocksDispatch] = useReducer(MockReducer, initialState)

  return (
    <MocksContext.Provider value={{ mocksState: mocks, mocksDispatch }}>  
      <div className="App">
        <MainContainer />
      </div>
    </MocksContext.Provider>
  )
}

export default App
