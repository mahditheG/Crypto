import React, { useEffect, useState } from 'react';
import { getCoin } from '../services/api';
//Components
import Coin from './Coin';
//Loader
import Loader from './Loader';
//css
import styles from './Landing.module.css'

//Components
const Landing = () => {
     const [value, setValue] = useState("")
     const [coins, setCoins] = useState([])
     useEffect(() => {
          const fetchAPI = async () => {
               const data = await getCoin();
               console.log(data);
               setCoins(data)
          }

          fetchAPI()
     }, [])
     const changeHandler = (event) => {
          setValue(event.target.value)
     }
     const filterdCoins = coins.filter(coin => coin.name.toLowerCase().includes(value.toLowerCase()))
     return (
          <>
               {
                    coins.length ?
                         <div>
                              <input type='text' placeholder="Search..." value={value} onChange={changeHandler} className={styles.input} />
                              <div className={styles.container}>
                                   {
                                        filterdCoins.map(coin => <Coin
                                             key={coin.id}
                                             name={coin.name}
                                             image={coin.image}
                                             symbol={coin.symbol}
                                             price={coin.current_price}
                                             marketCap={coin.market_cap}
                                             priceChange={coin.price_change_percentage_24h}
                                        />)

                                   }

                              </div>
                         </div> :
                         <Loader />

               }
          </>
     );
};

export default Landing;