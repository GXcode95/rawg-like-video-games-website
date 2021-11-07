import React from 'react'
    
const ListNav = ({onPrevious, onNext}) => {

  return (
    <div className='list-nav'>
      <button onClick={onPrevious}>PREVIOUS</button>
      <button onClick={onNext}>NEXT</button>
    </div>
  )
}
    
export default ListNav
