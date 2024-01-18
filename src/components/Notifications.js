import React from 'react'
import Notification from './Notification';
import '../css/Notifications.css';
export default function Notifications(props) {
  return (
    <div className="notifications">
      {
        props.notifications.map((each,id) =>{
          return (
            <Notification 
            updateSeen={()=>props.updateSeen(id)}
            notificationData={each} 
            key={id}
            />
          )
        })
      }
    </div>
  )
}