import React from 'react'
import { useParams } from 'react-router'
import Axios from 'axios'
import { ApiCtx } from 'context/ApiCtx'

const key = ""

const Home = () => {
  const [data, setData] = React.useState({})
  const {platforms, platformSlugToId} = React.useContext(ApiCtx)
  let {type,search} = useParams()

  React.useEffect(// building the url to request, axios on it and setData
    ()=> {
      let finalUrl = "https://api.rawg.io/api/"
      switch (type){
        case "games": //request for gamelsit
          finalUrl += type + key 
          if(search) finalUrl += "&search=" + search
        break;
        case "game": //request for specific game
          finalUrl += type +"s/" + search + key
        break;
        case undefined: // request for most wanted games
          finalUrl += "games" + key
        break;
        default: // request for gameList, with an additional param (genres, editor, developers...)
          // eslint-disable-next-line react-hooks/exhaustive-deps
          if(type === "platforms") {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            type = "parent_platforms";search = platformSlugToId(search)
          }
          finalUrl += "games" + key + `&${type}=` + search
        break;
      }
      
      if (!finalUrl.includes("undefined")) {
        Axios.get(finalUrl).then(response => {
          console.log("request the url:",finalUrl)
          console.log("***** DATA *****", response.data)
          setData(response.data)
        })
      }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[platforms]
  )
  React.useEffect(
    () => {
      //console.log(data)

    },[data]
  )


  return (
    <div className='game-list'>
    </div>
  )
}

export default Home
