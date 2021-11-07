import React from 'react'
    
const Header = ({onSubmit, platforms}) => {

  const platformsList = () => {
    if (platforms){
      return platforms.map(platform => (
        <option value={platform.id} key={platform.id}>{platform.name}</option>
      ))
    }
  }

  return (
    <div className='header'>
      <form onSubmit={onSubmit}>
        <input type="text" defaultValue="mario"/>
        <select name="platforms" id="platforms-select">
          <option value="">all</option>
          {platformsList()}
        </select>
        <input type="submit" value="OK" />
      </form>
    </div>
  )
}
    
export default Header
