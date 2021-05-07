import React from 'react'
import './Coin.css'
import CoinContainer from './CoinContainer'

class Coin extends React.Component {
   

    render() {
    return (
        <div className='coin'>
        
         <img src={this.props.info.imgSrc} alt={this.props.info.side} 
         />
        </div>
    )
    }
}
export default Coin;