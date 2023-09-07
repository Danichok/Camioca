import React from 'react'
import './UserOrder.css';
import gus from '../../img/Gus.webp';
import jesse from '../../img/jesse.jpg';
import saul from '../../img/saul.webp';
import walter from '../../img/walter.png';

function UserOrder() {
    const user = [
        {
            name: 'Walter White',
            date: '10/10/2020',
            img: walter,
            status: 'Standard'
        },
        {
            name: 'Jesse Pinkman',
            date: '10/10/2020',
            img: jesse,
            status: 'Premium'
        },
        {
            name: 'Saul Goodman',
            date: '10/10/2020',
            img: saul,
            status: 'Free'
        },
        {
            name: 'Gustavo Fring',
            date: '10/10/2020',
            img: gus,
            status: 'Admin'
        },
        {
            name: 'Gustavo Fring',
            date: '10/10/2020',
            img: gus,
            status: 'Admin'
        },
        {
            name: 'Jesse Pinkman',
            date: '10/10/2020',
            img: jesse,
            status: 'Premium'
        }
        
    ]
    function getStatusColor(status) {
        switch (status) {
            case 'Standard':
                return '#6100FF'; 
            case 'Premium':
                return '#A066FF';
            case 'Free':
                return '#94FF62'; 
            case 'Admin':
                return '#FFE500'; 
            default:
                return 'transparent';
        }
    }
    return (
        <div className='UserOrder'>
            <h2 className='UserOrder_plot'>Last Purchase</h2>
            <div className='users'>
                <div className='users_pin'>
                    <p>Name</p>
                    <p>Date</p>
                    <p style={{textAlign: 'right', paddingRight: '25px'}}>Status</p>
                </div>
                <div className='user_scroll'>
                    {
                        user.map((user, index) => {
                            return (
                                <div key={index} className='user_block'>
                                    <div className='order_user_avatar'>
                                        <img src={user.img} alt="user-avatar" />
                                        {user.name}
                                    </div>
                                    <div className='user_date'>
                                        {user.date}
                                    </div>
                                    <div className='user_status'>
                                        <div style={{ backgroundColor: getStatusColor(user.status) }}>
                                            <p >{user.status}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default UserOrder
