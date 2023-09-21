import React, { useEffect, useRef } from 'react'

const TextBubble = (props) => {
  const message = props.message;
  const isSender = props.isSender;
  const author = props.author;
  const textBox = useRef();


  useEffect(()=>{
    textBox.current.style.height = textBox.current.scrollHeight + "px";

  },[message])

  
    if (isSender){
      return (
        <div className="flex justify-end">
          <div className="m-9 px-1 h-auto">
            <textarea 
              readOnly 
              ref= {textBox}
              className='bg-mindaro focus:outline-none h-1 p-4 resize-none rounded-xl'>
              {message}
            </textarea>
            <h6 className='text-right text-xl font-bold'>{author}</h6>
          </div>
            
        </div>
      )
    } else {
      return (
        <div className="flex justify-start">
          <div className="m-9 px-1 h-auto">
            <textarea 
              readOnly 
              ref= {textBox}
              className='bg-mindaro focus:outline-none h-1 p-4 resize-none rounded-xl'>
              {message}
            </textarea>
            <h6 className='text-left text-2xl font-bold '>{author}</h6>
          </div>
            
        </div>
      )





    }
    
  } 
 


export default TextBubble