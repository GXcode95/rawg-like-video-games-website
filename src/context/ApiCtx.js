import { createContext } from "react"
import React from "react"
export const ApiCtx = createContext()
export function ApiCtxProvider(props) {



  return(
    <ApiCtx.Provider value="">
      {props.children}
      {/* {console.log("platofmrs list => ", platforms)} */}
    </ApiCtx.Provider>
  )
}