import React, { Component } from 'react'

export default class QuestionList extends Component {
    render() {
        return (
            <div>
                <br></br>
  <br></br>
  <br></br>
                <form>
  <label>
    What is your name ?
    <input type="text" name="name" />
  </label>
  <br></br>
  <br></br>
  <br></br>
  <label>
    Where are you going ?
    <input type="text" name="name" />
  </label>
  <br></br>
  <br></br>
  <br></br>
  <label>
    How old are you ?
    <input type="number" name="name" />
  </label>
  <br></br>
  <br></br>
  <label>
   Dates traveling ?
    <input type="date" name="name" />
  </label>
  <label>
  <br></br>
  <br></br>
  <br></br>
          What would you like to do?
          {/* <select value={this.state.value} onChange={this.handleChange}> */}
          <select>
            <option value="grapefruit">Bars</option>
            <option value="lime">Clubs</option>
            <option value="coconut">Sports</option>
            <option value="mango">Music</option>
          </select>
        </label>
        <label>
        <br></br>
  <br></br>
  <br></br>
          Whats important to you?
          {/* <select value={this.state.value} onChange={this.handleChange}> */}
         < select>
            <option value="grapefruit">Reviews</option>
            <option value="lime">Price</option>
            <option value="coconut">Quality</option>
            <option value="mango">Uniqueness</option>
          </select>
        </label>
        <br></br>
  
  <br></br>
  <input type="submit" value="Submit" />
</form>

            </div>
        )
    }
}
