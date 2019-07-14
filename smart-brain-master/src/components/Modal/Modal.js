

import  { Component } from 'react';
import ReactDOM from 'react-dom'
import './Modal.css'


const modalRoot = document.getElementById('modal-root');


export default class Modal extends Component {
    constructor(props){
        super(props)

        this.el = document.createElement('div')
    }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el )
    
  }

  componentDidMount =() => {
    modalRoot.appendChild(this.el)
}


componentWillUnmount =() => {
    modalRoot.removeChild(this.el)
}
}


