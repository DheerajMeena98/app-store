import {Component} from 'react'

import './index.css'

class AppItem extends Component {
  render() {
    const {eachApp} = this.props
    const {appName, imageUrl} = eachApp
    return (
      <li className="each-app-card">
        <img src={imageUrl} className="app-image" alt={appName} />
        <p className="each-app-name"> {appName} </p>
      </li>
    )
  }
}

export default AppItem
