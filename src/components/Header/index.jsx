import React from 'react'
import { Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'    
import { useNavigate } from 'react-router'

const Header = ({platforms, platformId,setPlatformId}) => {
  const navigate = useNavigate()


  const handlePlatformId = (e) => {
    let id = e.target.value
    setPlatformId(id)
  }
  const handleSearch = (e) => { // handle platformId and navigate to url base on input
    let input = e.target.value
    let select = document.querySelector('#search-select').value
    setPlatformId(select)
    navigate(`/games/${input}`)
  }
  return (
    <div className='header'>
      <div className="logo">
        <strong>RAWG</strong>
      </div>
      <form>
        <TextField id="search-input" defaultValue="" variant="filled" label="Search"  onChange={handleSearch}/>
        <FormControl sx={{minWidth: 110}} id="search-select-control">
          <InputLabel id="search-select-label">Platform</InputLabel>
          <Select id="search-select" label="platform" autoWidth value={platformId || ""} onChange={handlePlatformId}>
            <MenuItem value="">All</MenuItem>
            {platforms && platforms.map(platform =>
              (<MenuItem value={platform.id} key={platform.id}>{platform.name}</MenuItem>)
            )}
          </Select>
        </FormControl>
      </form>
    </div>
  )
}
    
export default Header