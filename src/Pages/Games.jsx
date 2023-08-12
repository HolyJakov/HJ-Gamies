import {React,useEffect,useState} from 'react'
import axios from 'axios'
import './Games.css'
const Games = () => {
  const [dat, setDat] = useState([]);
  
  
useEffect(()=>{
  axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',
  {headers: {
    'X-RapidAPI-Key': '0f7505cb32mshada651c7a4b71adp1c2729jsnd89830528b6c',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }}
  )
  .then((res)=>{
    setDat(res.data)
    // console.log(res)
  })
  .catch((error)=>{console.log('error',error)})
  
},[])

  return (
    <>
    {/* <div>
      <input type="text" placeholder='search for games'/>
    </div> */}
    <div className='game-style'>
     {dat.map((game)=>(
      <div className='main-game'>
        <p key={game.id}></p>
        <a href={game.freetogame_profile_url}><img src={game.thumbnail} alt="" /></a>
        <h3>{game.title}</h3>
        <p className='description'>{game.short_description}</p>
        <h4>Genre: {game.genre}</h4>
      </div>
     ))}   
    </div>
    </>
     
  )
}

export default Games