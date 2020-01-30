import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Beers extends Component {
    render() {
        console.log('Beers ---> Beers rendered')
        return (
            <div>
            <Navbar />
                <img src='../images/beers.png'></img>
            </div>
        )
    }
}
