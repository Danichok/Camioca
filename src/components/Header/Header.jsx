import React from 'react'
import './Header.css';
import gus from '../../img/Gus.webp';
import select from '../../img/select_menu.svg';
import search from '../../img/search.svg';
import { useState } from 'react';
import notifInactive from '../../img/notif_inactive.svg';
import notifActive from '../../img/notif_active.svg';
import Notif from '../Notif/Notif';

function Header() {

    const [userSettings, setUserSettings] = useState(false);
    const [notif, setNotif] = useState(false);

    console.log(userSettings)
    return (
        <div className='header'>
            <div className='user'>
                <div className='user_avatar'>
                    <img src={gus} alt="user-avatar" />
                </div>
                <div className='user_name'>
                    Gustavo Fring
                </div>
                <div className='select_btn'>
                    <div onClick={e => setUserSettings(true)} style={{width:'20px', height:'20px'}}>
                        <img  src={select} alt="select-menu" />
                    </div>
                    
                </div>
            </div>
            <div className='search'>
                <img src={search} alt="search" />
                <input placeholder='Quick search' type="text" />
            </div>
            <div className='notification'>
                <img onClick={e => setNotif(true)} src={notifInactive} alt="search" />
                {
                    (notif === true) ? <Notif setNotif={setNotif} /> : ''
                }
            </div>
        </div>
    )
}

export default Header
