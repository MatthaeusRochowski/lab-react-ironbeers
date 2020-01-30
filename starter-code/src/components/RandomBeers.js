import React, { Component } from 'react'
import Header from './Header'

export default class RandomBeers extends Component {
    render() {
        console.log('RandomBeers ---> RandomBeers rendered')
        return (
            <div>
            <Header />
                <img src='../images/random-beer.png' alt='random-beer'></img>
            </div>
        )
    }
}
