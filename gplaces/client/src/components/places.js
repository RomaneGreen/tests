import React, { Component } from 'react'

export default class Googleplaces extends Component {
    constructor() {
        super();
        this.state = {
            places : []
        }
    }


    
    componentDidMount() {
    fetch("/dday")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({ places: result.results })
             console.log(this.state.places)
            


            })
    
    }
    // this.state.cart.map((item, key) =>
    // <li key={item.id}>{item.name}</li>


  render() {
    const items = this.state.places.map((spot, key) =>
    <p key={spot.id}>{spot.name}    Rating:{spot.rating}   Price:{spot.price_level}/5     Location:{spot.vicinity} Total Ratings-{spot.user_ratings_total}<br/></p>
    )
      return (<div>
            {items}
        </div>);

        }

    }