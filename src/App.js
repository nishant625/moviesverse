import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';
//43580899

const API_URL='https://www.omdbapi.com/?i=tt3896198&apikey=43580899';


function App() {
  const [movies,setMovies]=useState([]);
  const[seachTerm,setSearchTerm]=useState('');

  const searchMovies=async(title)=>{
    const response=await fetch(`${API_URL}&s=${title}`)
    const data=await response.json();
    setMovies(data.Search)
  }

useEffect(()=>{

searchMovies('spiderman ')
},[])

  return (
    <div className='app'>
      <h1>Moviesverse</h1>
       
       <div className='search'>
        <input type="text" placeholder='search for movies' value={seachTerm } onChange={(e)=>setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick= {()=> searchMovies(seachTerm)} />
       </div>
        
        {
          movies?.length>0
          ?(<div className='container'>
          {
            movies.map((movie)=>
            <MovieCard movie={movie}/>)
          }
         </div>)
         :
         (
          <div className='empty'>
              <h2>no movies found</h2>
          </div>
         )
        }
       
    </div>
  );
}

export default App;
