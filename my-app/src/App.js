import React ,{useState,useEffect}  from 'react';
import axios from 'axios';
import './index'
import Black from './Black';
import { Grid } from '@mui/material';
export default function App() {
  const [first, setfirst] = useState([])
  
  useEffect(() => {
    async function name(){
      const res=await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${20}&page=${1}&mime_types={png}`)
      setfirst(res.data)
  
    }
    name()
  }, [])
  
  return (
    first.map(data=>{
      return(
        <Grid container>
        <Black key={data.id } src={data.url}/>
        <Black key={data.id } src={data.url}/>
        <Black key={data.id } src={data.url}/>
        <Black key={data.id } src={data.url}/>
        <Black key={data.id } src={data.url}/>
        <Black key={data.id} src={data.url}/>
        </Grid>
        )
      
    })
    );
}
