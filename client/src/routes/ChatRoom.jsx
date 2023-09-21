import React, { useEffect, useState ,useRef} from 'react';
import { useLocation } from 'react-router-dom';
import TextBubble from '../components/TextBubble';

const ChatRoom = ({ socket }) => { 

    //Inital Variables 
    const location = useLocation();
    const userInput = useRef();
    const author = location.state.author;
    const roomId = location.state.roomID;
    const [message, setMessage] = useState('');
    const [conversation, setConversation] = useState([]);

    //Message Data 
    const textData = {
        message: message,
        roomId: roomId,
        receiver: null,
        userId: socket.id,
        author:author,
    }

    //Update the page render with new message
    useEffect(()=>{
        
        socket.on("messageRecieved",(newTextData)=>{
            const isSender = newTextData.userId === socket.id ? true : false;
            newTextData.receiver = isSender;
            setConversation(prev => [...prev, newTextData]);
        });

        return ()=>{
            socket.off("messageRecieved");
        }



    },[socket]);// useEffect end
    
    useEffect(()=>{
        //increase user input text area
        if (userInput.current.style.height !== '56px'){
            userInput.current.style.height = userInput.current.scrollHeight + "px";
        }

        

        
    
      },[message])
    
    //Sends a signal to server everytime a message is sent
    const messageSend = ()=>{
        if (message !== ''){
            socket.emit("messageSent",textData);
            setMessage('');
            userInput.current.style.height = "36px"; 
        }
        
    }
    
    
    

    return (
        <div className='bg-celadon h-screen overflow-hidden relative'>
            <h1 className='bg-olivine p-5 text-center text-2xl '>Room: <span className='font-bold'>{roomId}</span></h1>
            <div className="h-[80%] overflow-auto">
                {conversation.map((content) => (
                    
                    <TextBubble message={content.message} isSender={content.receiver} author={content.author}/>
                    
                ))}
                {console.log(conversation)}
            </div>
            <div className="bg-olivine flex justify-center items-center h-[80px] absolute bottom-0 w-full  ">
                <textarea 
                    type='text'
                    value={message}
                    ref={userInput}
                    className='rounded-xl text-center w-[180px] p-1 overflow-auto h-4 resize-none tablet:w-[250px] desktop:w-[300px]'
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Send a message!'
                />
                <button className='bg-mindaro rounded-xl border-none p-2 mx-2' 
                onClick={messageSend}>Send</button>
            </div>
        </div>
    );
}

export default ChatRoom;
