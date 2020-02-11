import React from 'react'
import ReactDom from 'react-dom'
import './style.scss'
import './style.css'

console.log('I am printing logs')

ReactDom.render(
  <div>Hello, React!</div>,
  document.getElementById('root')
)
