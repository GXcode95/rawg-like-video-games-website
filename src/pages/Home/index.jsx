import React from 'react'
import { useNavigate, useParams } from 'react-router'
import Axios from 'axios'
import GameList from 'pages/GameList'
import GameDetails from 'pages/GameDetails'
import Header from 'components/Header'


const Home = () => {
  const key = ""
  const [data, setData] = React.useState()
  const [platforms, setPlatforms] = React.useState()
  const [platformId, setPlatformId] = React.useState("")
  const [apiUrl, setApiUrl] = React.useState() // avoid request the same url multipes times
  const navigate = useNavigate()
  let {type,search} = useParams()

  const axiosNextPage = () => {
    if (data.next)
      Axios.get(data.next).then(response =>{
        setData(response.data)
      })
  }
  const axiosPreviousPage = () => {
    if (data.previous)
      Axios.get(data.previous).then(response =>setData(response.data))
  }
  const handleAxios = () => {// building the url to request, axios on it and setData
    let finalUrl = "https://api.rawg.io/api/"
      switch (type){
        case "games": //request for gamelsit
          finalUrl += type + key 
          if(search) finalUrl += "&search=" + search + "&page_size=27"
          if(platformId !== "") {
            finalUrl += "&parent_platforms=" + platformId
          }
        break;
        case "game": //request for specific game
          finalUrl += type +"s/" + search + key
        break;
        case undefined: // request for most wanted games
          finalUrl += "games" + key + "&page_size=27"
        break;
        default: // request for gameList, with an additional param (genres, editor, developers...)
          // eslint-disable-next-line react-hooks/exhaustive-deps
          if(type === "platforms") {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            type = "parent_platforms";
            if (platforms){
              let platform = platforms.filter( platform => platform.slug === search)
              // eslint-disable-next-line react-hooks/exhaustive-deps
              search = platform[0].id
            } 
          }
          finalUrl += "games" + key + `&${type}=` + search + "&page_size=27"
        break;
      }
      
      if (!finalUrl.includes("undefined") && finalUrl !== apiUrl ) {
        Axios.get(finalUrl).then(response => {
          console.log("request the url:",finalUrl)
          console.log("***** DATA *****", response.data)
          setData(response.data)
          setApiUrl(finalUrl)
        })
      }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("EVENT ==> ", e.target.querySelector('input').value)
    let input = e.target.querySelector('input').value
    console.log("EVENT ==> ", e.target.querySelector('select').value)
    let select =  e.target.querySelector('select').value
    setPlatformId(select)
    navigate(`/games/${input}`) // select have 'games' as default value
    //handleAxios()
  }
  
  React.useState( // fetch and set the list of parent platforms
    ()=> {
      Axios.get("https://api.rawg.io/api/platforms/lists/parents" + key)
      .then(response => setPlatforms(response.data.results))
      console.log("platforms requested")
    },[]
  )
  React.useEffect(
    ()=> {
      handleAxios()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[platforms, platformId, window.location.pathname]
  )



  return (
    <div className='game-list'>
      <Header onSubmit={handleSubmit} platforms={platforms}/>
      
      {type === "game" && data ? 
        (<GameDetails />) : 
        (<GameList onNext={axiosNextPage} onPrevious={axiosPreviousPage} data={data} />)}      
      
    </div>
  )
}

export default Home
