import React, { createContext, useState } from 'react'

export const MyContext = React.createContext();

export const ContextProvider = ({ children }) => {

  const [books, setbooks] = useState({});

  return (
    <MyContext.Provider value={[books, setbooks]}>
      {children}
    </MyContext.Provider>
  )
}

export default ContextProvider;