import React from 'react'
//import './CoinContainer.css'
import Coin from './Coin'
import {choice} from './helpers'

class CoinContainer extends React.Component {
    static defaultProps = {
        coins: [
            {side: 'heads', imgSrc:'https://tinyurl.com/react-coin-heads-jpg'},
            {side: 'tails', imgSrc:'https://tinyurl.com/react-coin-tails-jpg'},
        ]
    }
    constructor(props){
        super(props);
        this.state ={
            curProps: {
                curCoin: null
            },
            flips: {
                numFlips: 0
            },
            numHeads: 0,
            numTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin = () => {

        
        const newCoin = choice(this.props.coins);
        this.setState(oldState => {
            return {
                ...oldState,
                curCoin: newCoin,
                flips: {
                    ...oldState.flips,
                    numFlips: oldState.flips.numFlips + 1
                },
                numHeads: oldState.numHeads + (newCoin.side === 'heads' ? 1 : 0),
                numTails: oldState.numTails + (newCoin.side === 'tails' ? 1 : 0)
            };
        });
    };
    handleClick(e) {
        this.flipCoin();
    };


    render() {
    return (
        <div className='coinContainer'>
            {this.state.curCoin && <Coin info={this.state.curCoin} />}
            <button onClick={this.handleClick}>Call it!</button>
            <p>
               fliped {this.state.flips.numFlips} times{' '}{this.state.numHeads}{' '}where heads{" "}{this.state.numTails} were tials
            </p>
        </div>
    )
    }
}
export default CoinContainer;