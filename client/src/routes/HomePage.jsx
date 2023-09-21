import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({socket}) => {

  let navigate = useNavigate();

  const [author, setAuthor] = useState('');
  const [roomID, setroomID] = useState('');
  
  const connect = () =>{
    if (!author || !roomID){

      window.alert('Enter a username and room id to get started!');

    } else {
      socket.emit('roomJoin', roomID);
      navigate("/chatroom", {state:{author,roomID}});
    }
    
  }

  


  return (
    <div className="bg-celadon h-screen flex flex-col justify-center ">
      <h1 className='text-3xl text-center my-3 font-bold desktop:text-5xl '>Join the conversation</h1>
      <h3 className='text-center text-lg my-2 desktop:text-2xl'>Enter a <span className='font-bold'>username</span> and <span className='font-bold'>room</span> code!</h3>
      <div className='flex flex-col items-center justify-center'>
          <input 
            type='text' 
            className='rounded-xl h-8  text-center  focus:outline-none w-[250px]'
            onChange={(e) => setAuthor(e.target.value)}
             placeholder='Username'
          />

          <input 
            type='text' 
            className='rounded-xl h-8 text-center focus:outline-none w-[250px] m-3 '
            onChange={(e) => setroomID(e.target.value)}
            placeholder='Room ID'
          />

          <button className='bg-mindaro p-3 text-lg rounded-lg font-bold ' onClick={connect}>Create / Join Room</button>
        
       
      </div>
    </div>
  )
}

export default HomePage