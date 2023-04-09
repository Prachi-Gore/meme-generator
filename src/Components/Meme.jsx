import React, { useEffect, useState } from 'react'

import icon from "../assets/icon.png"
import './Meme.css'
import memeData from '../memeData'

export default function Meme(){


    
    const[meme,setMeme] =useState({
        topText:"shut up",
        bottomText:"give my chocolate back",
        randomImage:"https://i.imgflip.com/1bhk.jpg"});
       // console.log(meme)

        const[allMeme,setAllMeme]=useState([]);
        useEffect(()=>{
            async function getMemes(){

          const res=await fetch("https://api.imgflip.com/get_memes")
           const data=await res.json()
            setAllMeme(data.data.memes)
        }
        getMemes()
        },[])
        //console.log(allMeme)
        const getMemeImage=  function (){
            let rnd=Math.floor(Math.random()*100)
            let url=allMeme[rnd].url
            setMeme((oldmeme)=>{return(
             {...oldmeme,randomImage:url})})
             //console.log( meme)
         }
        function handleChange (event){
            // console.log(event.target.value)
             const {name,value}=event.target;
            // console.log(name,value)
            // console.log({name,value})
             setMeme((oldmeme)=>{return(
                //  console.log( {...oldmeme,[name]:value})
                      {...oldmeme,[name]:value}
                 )
             })
         }
    
     
    return(
        
         <main className='main'>
            <div className="input-box">
            <input 
                 type="text"
                 placeholder='Top text'
                 className='form-input'
                 onChange={handleChange}
                 name='topText'
                 value={meme.topText}
                 />
            <input
                type="text"
                placeholder='Bottom text'
                className='form-input'
                onChange={handleChange}
                name='bottomText'
                value={meme.bottomText}
                />
            </div>
           
            <button onClick={getMemeImage}>Get a new meme image <img src={icon} ></img></button>
            <div className='meme-container'>
            <img className='memeImg' src={meme.randomImage} alt="loading..."></img>
            <h2 className='meme-top-text'>{meme.topText}</h2>
            <h2 className='meme-bottom-text'>{meme.bottomText}</h2>
            </div>
         </main>
        
    )
}