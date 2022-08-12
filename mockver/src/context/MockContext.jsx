import { createContext, useState, useReducer } from 'react'

import MockReducer from '@/reducer/MockReducer'

export const MockContext = createContext(null)

const initialState = []

export const MockContextProvider = ({ children }) => {
  const [mockInfo, setMockInfo] = useState({

    // TODO: 暂时添加相应arr。
    verLineArr: [],
    horLineArr: []
  })

  const [mocks, mocksDispatch] = useReducer(MockReducer, initialState)

  return (
    <MockContext.Provider value={{ 
      mockInfo, setMockInfo,
      mocksState: mocks, mocksDispatch }}>
      {children}
    </MockContext.Provider>
  )
}






