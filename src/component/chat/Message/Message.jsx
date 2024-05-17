import { useSession } from "next-auth/react"
import Image from "next/image"
import './message.css'

export default function Message({message}) {

    const{data: session}= useSession()
    
   return (
    <div className={message.uid==session.user.id?"eighty me mescontainer":"eighty else mescontainer"}>
        <div >
       
           <div className="flexme">
            <div>
                <Image src={message.avatar} alt="image" width={45} height={45} className="img w-[45px] h-[45px] object-cover rounded-full profilepic"/>
            </div>
            <div>
                <div className="boldme bot6">{message.name}</div>
                <p className="wrapme">{message.text}</p>
            </div>
            </div>
       </div></div>
       
   )
}
