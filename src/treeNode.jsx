import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TreeNode extends Component {
  static propTypes = {
    icon:PropTypes.string,
    label:PropTypes.string,
    children:PropTypes.element,
    path: PropTypes.arrayOf(PropTypes.number)
  }

  render() {
    return (
      <li>
        <div>
          <img src={this.props.icon} alt="" style={{width:16,height:16}} />
          <span>{this.props.label}</span>
        </div>
        {
          this.props.children
        }
      </li>
    )
  }
}
