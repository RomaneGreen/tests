import React, { Component } from 'react'

export default class Rank extends Component {

  constructor() {
    super() 
      this.state = {
        emoji : ''
      }
  }

  
  componentDidMount() {
    this.generateEmoji(this.props.entries)
  }

  
  componentDidUpdate(prevProps,prevState) {
    if( prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
      return null
    } else {
      this.generateEmoji(this.props.entries)
    }
  }
  
  generateEmoji = (entries) => {

    fetch(`https://aabpqadbdd.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
    .then(response => response.json())
    .then( data => this.setState({
      emoji: data.input
    })).catch(error => (console.log(error)))
   
  }
  render() {
    return (
      <div>
        <div>
      <div className='white f3'>
        {`${this.props.name}, your current entry count is...`}
      </div>
      <div className='white f1'>
        {this.props.entries}
      </div>
      <div className='white f3'>
       {`Rank Badge: ${this.state.emoji}`}
      </div>
    </div>
      </div>
    )
  }
}


// import React from 'react';

// const Rank = ({ name, entries }) => {
//   return (
    
//   );
// }

// export default Rank;