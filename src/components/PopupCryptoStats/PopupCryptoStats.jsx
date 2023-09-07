import React from 'react'
import './PopupCryptoStats.css';
import ReactApexChart from 'react-apexcharts';

function PopupCryptoStats(props) {

    const options = {
        chart: {
            type: 'candlestick',
            height: 350,
        },
        title: {
            text: 'Last Month Price',
            align: 'left',
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
        },
    };
    const series = [
        {
            data: [{
                x: new Date(1538778600000),
                y: [props.cryptoItem.price_usd, parseFloat(props.cryptoItem.price_usd + props.cryptoItem.percent_change_24h) , parseFloat(props.cryptoItem.price_usd) + parseFloat(props.cryptoItem.percent_change_24h), parseFloat(props.cryptoItem.price_usd) - parseFloat(props.cryptoItem.percent_change_24h)]
            },
            ],
        },
    ];
    return (
        <div className='PopupCryptoStats' onClick={e => props.setPopupCrypto(false)}>
            <div onClick={e => e.stopPropagation()} className='PopupCryptoStats_block'>
                <h2 >{props.cryptoItem.name}</h2>
                <ReactApexChart options={options} series={series} type="candlestick" height={450} />
            </div>
        </div>
    )
}

export default PopupCryptoStats
