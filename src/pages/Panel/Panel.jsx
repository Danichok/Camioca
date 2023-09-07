import React from 'react'
import './Panel.css';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Dashboard from '../Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import People from '../People/People';
import CryptoList from '../CryptoList/CryptoList';


function Panel() {

  return (
    <div className='panel_main'>
      <Header />
      <Menu />
      <div className='all_pages'>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/people' element={<People />} />
          <Route path='/cryptoList' element={<CryptoList />} />
        </Routes>

      </div>
    </div>
  )
}

export default Panel;
