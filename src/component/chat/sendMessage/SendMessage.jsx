import { useState } from 'react'
import './sendmessage.css'
import EmojiPicker from 'emoji-picker-react'
import {addDoc, average, collection, serverTimestamp} from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { db } from '@/lib/firebase'

export default function SendMessage() {

    const {data:session}= useSession()
    const [message, setMessage]= useState('')
    const [img, setImg]=useState({
        file: null, 
        url: ''
       })
    const [open, setOpen]= useState(false)
       console.log(session.user.image)
    const handleEmoji=(e)=>{
        setMessage(prev=> prev+e.emoji)
        setOpen(false)
   } 

   const handleImg=(e)=>{
    if(e.target.files[0]){
        setImg({
            file: e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }
   }

   const handleSend=async(e)=>{
    e.preventDefault()
    if(message === '')
        return

    let imgUrl=null

    try{
       if(img.file){
            
        }
        addDoc(collection(db, 'messages'),{
            text: message,
            name: session.user.name,
            avatar: session.user.image,
            createdAt: serverTimestamp(),
            uid: session.user.id
        })
        
       
    }catch(err){
        console.log(err)
    }

    setImg({file: null, url: ''})
    setMessage('')
   }

   return (
       <div className="sendmessage">
           <form onSubmit={(e)=>handleSend(e)}>
            <div className='wrapper'>
                <div className='icons'>
                        <label htmlFor='file'>
                            <img src='./img.png'/>
                        </label>
                            <input type='file' id='file' style={{display: 'none'}} onChange={handleImg}/>
                            <img src='./camera.png'/>
                            <img src='./mic.png'/>
                    </div>
                <label htmlFor='messageInput' hidden>
                    Enter Message
                </label>
                <input id='messageInput' name='messageInput' type='text' value={message} onChange={(e)=> setMessage(e.target.value)} className='form-input__input' placeholder='type message...'/>
                <div className='emoji'>
                        <img src='./emoji.png' onClick={()=>setOpen(prev=>!prev)}/>
                        <div className='picker'>
                            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                        </div>
                    </div>
                        <button className='sendButton'>Send</button>
                </div>
           </form>

</div>

       
   )
}