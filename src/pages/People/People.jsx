import React from 'react'
import './People.css';
import gus from '../../img/Gus.webp';
import jesse from '../../img/jesse.jpg';
import saul from '../../img/saul.webp';
import walter from '../../img/walter.png';
import edit from '../../img/edit.svg';
import PopupAdminUser from '../../components/PopupAdminUser/PopupAdminUser';
import { useState } from 'react';

function People() {
  const [popupAdmin, setPopupAdmin] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const user = [
    {
      name: 'Walter White',
      date: '12/03/2021',
      img: walter,
      status: 'Standard'
    },
    {
      name: 'Jesse Pinkman',
      date: '03/10/2020',
      img: jesse,
      status: 'Premium'
    },
    {
      name: 'Saul Goodman',
      date: '23/08/2019',
      img: saul,
      status: 'Free'
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

  const openPopup = (userItem) => {
    setSelectedUser(userItem)
    setPopupAdmin(true);
  };
  return (
    <div className='people'>
      {
        (popupAdmin === true) ? <PopupAdminUser getStatusColor={getStatusColor} setPopupAdmin={setPopupAdmin} userItem={selectedUser} /> : ''
      }
      {
        user.map((user, index, item) => {
          return (
            <div key={index} className='people_block'>
              <div className='people_avatar'>
                <img src={user.img} alt="people-avatar" />
                {user.name}
              </div>
              <div className='people_edit'>
                Registered: {user.date}
                <img onClick={e => openPopup(user)} src={edit} alt="edit" />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default People
