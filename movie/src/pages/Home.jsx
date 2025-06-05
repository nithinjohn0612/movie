import React, { useState } from 'react'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("")

    const movies = ()=>{}
    const handleSearch = (e)=>{
        e.preventDefault()
    }
  return (
    <div className='home'>
        <form onSubmit="" className='search-form'>
            <input type = "text" placeholder='search for movies..' className = "search-input" value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}/>
            <button type='submit' className='search-button'>Search</button>
        </form>
    </div>

  )
}

export default Home