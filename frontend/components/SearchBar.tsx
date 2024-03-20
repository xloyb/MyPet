'use client'
import { useState } from 'react'
import React from 'react'
import { SearchBreeds } from '.'

function SearchBar() {

 const  [MenuBreeds, setMenuBreeds] = useState('');
  const handleSearch = ()=>{}

  return (
    <form className='searchbar'
     onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <SearchBreeds 
        MenuBreeds={MenuBreeds}
        setMenuBreeds={setMenuBreeds}
        />
      </div>
    </form>
  )
}

export default SearchBar