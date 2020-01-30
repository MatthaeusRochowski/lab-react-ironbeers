import React, { Component } from 'react'
import Header from './Header'

export default class NewBeer extends Component {
    render() {
        console.log('NewBeer ---> NewBeer rendered')
        return (
            <div>
            <Header />
                <img src='../images/new-beer.png' alt='new-beer'></img>
            </div>
        )
    }
}
