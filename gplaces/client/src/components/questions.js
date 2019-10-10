import React, { Component } from 'react'
import '../Question.css'
export default class QuestionList extends Component {
    render() {
        return (
            <div>
<h1 class="ttle">DDAY</h1>
  <h2 class="mmle">Enter Your Information</h2>
  <form class="form" action="#">
    
    <fieldset class="form-fieldset ui-input __first">
      <input type="text" id="username" tabindex="0" />
      <label for="username">
        <span data-text="Age">Age</span>
      </label>
    </fieldset>
    
    <fieldset class="form-fieldset ui-input __second">
      <input type="email" id="email" tabindex="0" />
      <label for="email">
        <span data-text="Gender">Gender</span>
      </label>
    </fieldset>
    
    <fieldset class="form-fieldset ui-input __third">
      <input type="text" id="new-password" />
      <label for="new-password">
        <span data-text="Desired Destination">Desired Destination</span>
      </label>
    </fieldset>
    
    <fieldset class="form-fieldset ui-input __fourth">
      <input type="Date" id="repeat-new-password" />
      <label for="repeat-new-password">
        <span data-text="Travel Dates">Travel Dates</span>
      </label>
    </fieldset>
    
    <div class="form-footer">
      <button class="btn">Submit</button>
    </div>
  </form>
</div>

        




        )}}