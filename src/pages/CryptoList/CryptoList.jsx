import React from 'react'
import './CryptoList.css';
import axios from 'axios';
import PopupCryptoStats from '../../components/PopupCryptoStats/PopupCryptoStats';
import { useEffect, useState } from 'react';

function CryptoList() {

    const [cryptoResult, setCryptoResult] = useState([]);
    const limit = 30;
    const limitedCrypto = cryptoResult.slice(0, limit);
    const [popupCrypto, setPopupCrypto] = useState(false);
    const [selectedCrypto, setSelectedCrypto] = useState(null);

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


    const openPopup = (cryptoItem) => {
        setSelectedCrypto(cryptoItem);
        setPopupCrypto(true);
    };

    return (
        <div className='CryptoList'>
            {
                (popupCrypto === true) ? <PopupCryptoStats cryptoItem={selectedCrypto} limitedCrypto={limitedCrypto} setPopupCrypto={setPopupCrypto} /> : ''
            }
            {
                limitedCrypto.map((item) => (
                    <div className='crypto_item' onClick={e => openPopup(cryptoResult[item.rank - 1])} key={item.id}>
                        <h2 className='crypto_item_symbol'>{item.symbol}</h2>
                        <h2 className='crypto_item_price'>$ {item.price_usd}</h2>
                        <h2 className='crypto_item_change'>
                            {
                                (item.percent_change_24h > 0) ? <span className='green'>{item.percent_change_24h}</span> : <span className='red'>{item.percent_change_24h}</span>
                            }
                        </h2>
                    </div>
                ))
            }
        </div>
    )
}

export default CryptoList
