import { createContext } from "react"
import React from "react"
import Axios from 'axios'
export const ApiCtx = createContext()
const key = ""
export function ApiCtxProvider(props) {
  const [platforms, setPlatforms] = React.useState([])

  const platformSlugToId = (slug) => {
    if (platforms.length > 1) {

      let platform = platforms.filter( platform => platform.slug === slug)
      return platform[0].id
    }
  }

  React.useState( // fetch and set the lsit of all parent platforms
    ()=> {
      Axios.get("https://api.rawg.io/api/platforms/lists/parents" + key)
      .then(response => setPlatforms(response.data.results))
      console.log("platforms requested")
    },[]
  )

  return(
    <ApiCtx.Provider value={{platforms, platformSlugToId}}>
      {props.children}
      {/* {console.log("platofmrs list => ", platforms)} */}
    </ApiCtx.Provider>
  )
}