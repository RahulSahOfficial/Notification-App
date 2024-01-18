import React, { Component } from 'react'
import data from '../data/data.json';
import Header from './Header';
import Notifications from './Notifications';
import Attribute from './Attribute';
import '../css/App.css';


export class App extends Component {
  updateSeen = (id) =>{
    const newNotificationData=this.state.notifications;
    newNotificationData[id].seen=true
    this.setState({
        notifications:newNotificationData,
        unseenCnt:this.cntUnseen(this.state.notifications)
    })
  }
  cntUnseen=(notifications)=>{
    let cnt=0;
    notifications.forEach(each => {
      if(!each.seen)
        cnt++;
    })
    return cnt;
  }
  markAllAsRead = () =>{
    const newNotificationData=this.state.notifications;
    newNotificationData.forEach(each =>each.seen=true)
    this.setState({
      notifications:newNotificationData,
      unseenCnt:0
    })
  }
  state={
    notifications:data.notification,
    unseenCnt:this.cntUnseen(data.notification)
  }
  render() {
    return (
      <div className="App">
        <Header update={this.markAllAsRead} unseenCnt={this.state.unseenCnt}/>
        <Notifications updateSeen={this.updateSeen} notifications={this.state.notifications} />
        <Attribute />
      </div>
    )
  }
}

export default App