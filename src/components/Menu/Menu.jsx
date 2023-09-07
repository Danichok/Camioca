import React from 'react'
import './Menu.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Menu(props) {

  const [activeLink, setActiveLink] = useState('Dashboard')

  return (
    <div>


      <div className='menu'>

        <div>
          <Link
            onClick={e => {
              setActiveLink('Dashboard')

            }}
            to='/panel/dashboard'>
            <div className={activeLink === 'Dashboard' ? 'menu_link active_menu_link' : 'menu_link'}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill={activeLink === 'Dashboard' ? '#2F80ED' : '#8E8E93'} />
              </svg>

              <h2>Dashboard</h2>
            </div>
          </Link>
        </div>
        <div>
          <Link
            onClick={e => {
              setActiveLink('People')

            }}
            to='/panel/people'>
            <div className={activeLink === 'People' ? 'menu_link active_menu_link' : 'menu_link'}>
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z" fill={activeLink === 'People' ? '#2F80ED' : '#8E8E93'} />
              </svg>
              <h2>People</h2>
            </div>
          </Link>
        </div>
        <div>
          <Link
            onClick={e => {
              setActiveLink('CryptoList')

            }}
            to='/panel/cryptoList'>
            <div className={activeLink === 'CryptoList' ? 'menu_link active_menu_link' : 'menu_link'}>
              <svg width="18" height="18" viewBox="0 0 434 601" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M134 100.667V34M267.333 100.667V34M267.333 100.667H34M267.333 100.667C322.563 100.667 367.333 145.438 367.333 200.667C367.333 255.897 322.563 300.667 267.333 300.667M100.667 500.667V300.667M100.667 300.667V100.667M100.667 300.667H300.667C355.897 300.667 400.667 345.437 400.667 400.667C400.667 455.897 355.897 500.667 300.667 500.667H34M134 567.333V500.667M267.333 567.333V500.667" stroke={activeLink === 'CryptoList' ? '#2F80ED' : '#8E8E93'} stroke-width="66.6667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              <h2>Crypto</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className='logo_block'>
        <h2>CAMIOCA</h2>
        <p>Version: 1.0.0.11</p>
      </div>
    </div>
  )
}

export default Menu
