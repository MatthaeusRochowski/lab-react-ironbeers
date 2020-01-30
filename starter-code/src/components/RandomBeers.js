import React, { Component } from 'react'
import Navbar from './Navbar'

export default class RandomBeers extends Component {
    render() {
        console.log('RandomBeers ---> RandomBeers rendered')
        return (
            <div>
            <Navbar />
                <img src='../images/random-beer.png'></img>
            </div>
        )
    }
}
