import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import ReactApexChart from 'react-apexcharts';
import wallet from '../../img/wallet.svg';
import eth from '../../img/ETH.svg';
import btc from '../../img/BTC.svg';
import axios from 'axios';
import gus from '../../img/Gus.webp';
import UserOrder from '../../components/UserOrder/UserOrder';
import addBalance from '../../img/add_balance.svg';
import withdraw from '../../img/withdraw.svg';
import Coments from '../../components/Coments/Coments';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Dashboard() {


  const [cryptoResult, setCryptoResult] = useState([]);
  const [desiredItem1, setDesiredItem1] = useState(null);
  const [desiredItem2, setDesiredItem2] = useState(null);
  const BTC = 90;
  const ETH = 80;

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.coinlore.net/api/tickers/',
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.data);
        setCryptoResult(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  useEffect(() => {
    const item = cryptoResult.find(item => item.id == BTC);
    setDesiredItem1(item);
  }, [cryptoResult]);
  useEffect(() => {
    const item = cryptoResult.find(item => item.id == ETH);
    setDesiredItem2(item);

  }, [cryptoResult]);


  const options = {
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {

    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands';
        },
      },
    },
  };

  return (
    <div className='dashboard'>
      <div className='top_tool'>
        <div className='chart'>
          <ReactApexChart options={options} series={options.series} type="bar" height={450} />
        </div>
        <div className='wallet_block_list'>
          <div className='wallet_wrapper'>
            <div className='wallet'>
              <div className='wallet_list' >
                <img src={btc} alt="wallet" />
                {desiredItem1 ? (
                  <>
                    <h2>{desiredItem1.symbol}</h2>
                    <p className='wallet_price'>${desiredItem1.price_usd}</p>
                    <p>
                      {
                        (desiredItem1.percent_change_24h > 0) ? <span className='green'>+{desiredItem1.percent_change_24h}%</span> : <span className='red'>{desiredItem1.percent_change_24h}%</span>
                      } <h3>on this day</h3>
                    </p>
                  </>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>
            <div className='wallet'>
              <div className='wallet_list' >
              
                  <img src={eth} alt="wallet" />
                

                {desiredItem2 ? (
                  <>
                    <h2>{desiredItem2.symbol}</h2>
                    <p className='wallet_price'>${desiredItem2.price_usd}</p>
                    <p>
                      {
                        (desiredItem2.percent_change_24h > 0) ? <span className='green'>+{desiredItem2.percent_change_24h}%</span> : <span className='red'>{desiredItem2.percent_change_24h}%</span>
                      } <h3>on this day</h3>
                    </p>
                  </>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>
            <div className='wallet'>
              <div className='wallet_list' >
                <img src={wallet} alt="wallet" />
                <h2>My Balance</h2>
                <p className='wallet_price'>$3890.12</p>
                <div className='wallet_button'>
                  <a target='_black' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"><img src={withdraw} alt="withdraw" /></a>
                  <a target='_black' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"><img src={addBalance} alt="addBalance" /></a>
                </div>
              </div>
            </div>


          </div>
          <div className='user_info_block'>
            <div className='user_info'>
              <img src={gus} alt="gus" />
            </div>
          </div>
        </div>
      </div>
      <div className='dashboard_bot'>
        <div className='user_list'>
          <UserOrder />
        </div>
        <div className='todo_list'>
          <Calendar />
        </div>
      </div>

    </div>
  );
}

export default Dashboard;