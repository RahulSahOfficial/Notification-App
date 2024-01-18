import React from 'react'
import '../css/Header.css'

export default function Header(props) {
    return (
        <header>
            <h1>Notifications <span>{props.unseenCnt}</span></h1>
            <button onClick={props.update}>Mark all as read</button>
        </header>
    )
}
