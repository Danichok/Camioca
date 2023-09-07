import React from 'react'
import './Notif.css';


function Notif(props) {
    return (
        <div onClick={e => props.setNotif(false)} className='Notif'>
            <div onClick={e => e.stopPropagation()} className='Notif_block'>
                There are no notifications
            </div>
        </div>
    )
}

export default Notif
