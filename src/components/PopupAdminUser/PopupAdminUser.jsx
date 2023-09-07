import React from 'react'
import './PopupAdminUser.css';
import { useState } from 'react';

function PopupAdminUser(props) {
    const [blockTogle, setBlockTogle] = useState(true);

    return (
        <div onClick={e => props.setPopupAdmin(false)} className='PopupAdminUser'>
            <div onClick={e => e.stopPropagation()} className='PopupAdminUser_block'>
                <div className='user_details'>
                    <div className='user_details_avatar'>
                        <img src={props.userItem.img} alt="user-avatar" />
                    </div>
                    <div className='user_details_content'>
                        <h2>{props.userItem.name}</h2>
                        <p >Status: {props.userItem.status} <span style={{ backgroundColor: props.getStatusColor(props.userItem.status) }}></span></p>
                        <p>Registration Date: {props.userItem.date}</p>
                        <p className='user_details_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At beatae dolorum a voluptatum odit deserunt molestias tempore eaque recusandae explicabo ex magnam hic eligendi accusamus temporibus nemo eum, soluta non?</p>
                    </div>
                    <div className='setting_user'>
                        {
                            blockTogle ? <button onClick={e => setBlockTogle(false)} className='block_user'>Block user</button> : <button onClick={e => setBlockTogle(true)} className='unblock_user'>Unblock user</button>
                        }
                        <p><button>Send Notification</button></p>
                        <p><button>Change Status</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupAdminUser
