import React, { Component } from 'react'
import Navbar from './Navbar'

export default class NewBeer extends Component {
    render() {
        console.log('NewBeer ---> NewBeer rendered')
        return (
            <div>
            <Navbar />
                <img src='../images/new-beer.png'></img>
            </div>
        )
    }
}
