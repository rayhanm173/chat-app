
import Chat from "../chat/Chat";
import UserInfo from "../userInfo/UserInfo";
import './dashboard.css'

export default function Dashboard() {

   return (
       <div className="dashboard w-[100%]">
        <div className="container">
            <div className="wrapper">
                
                <Chat />
                <div className='separator'></div>
                <UserInfo />
            </div>
          </div>
       </div>
   )
}
