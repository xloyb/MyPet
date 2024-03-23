import React from 'react'

const Search = ({placeholder}) => {
  return (
    <div>
        
        <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
    </div>
  )
}

export default Search