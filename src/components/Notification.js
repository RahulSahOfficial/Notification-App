import React from 'react'
const imgUrlPrefix="./images/"

export default function Notification(props) {

  let n_dot=null;
  if(!props.notificationData.seen)
    n_dot=<span className="n-dot"></span>

  let textTarget=null;
  if(props.notificationData.target_type === "text"){
    textTarget=<a href={props.notificationData.target.href} className="post-target">{props.notificationData.target.text}</a>
  }
  let msgTag=null;
  if(props.notificationData.target_type === "message")
    msgTag=<p className="message">{props.notificationData.target.text}</p>
  let imageTag=null
  if(props.notificationData.target_type==="image")
  imageTag=<div className="right">
              <div className="n-post-img-cont">
                  <img src={imgUrlPrefix+props.notificationData.target.src} alt="Post Name" />
              </div>
          </div>


  return (
    <div onClick={props.updateSeen} className={"each-n " + (!props.notificationData.seen? "unseen" : "seen")}>
      <div className="left">
          <div className="n-avatar-cont">
              <img src={imgUrlPrefix+props.notificationData.avatar} alt={props.notificationData.profile_name} />
          </div>
          <div className="n-text-cont">
              <p className="n-text">
                <span className="profile-name">{props.notificationData.profile_name}</span>
                <span>{props.notificationData.post_message}</span>
                {textTarget}
                {n_dot}
              </p>
              <p className="time">{props.notificationData.time} ago</p>
              {msgTag}
          </div>
      </div>
      {imageTag}
    </div>
  )
}