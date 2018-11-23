import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class SecondaryNavbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='all'
          active={activeItem === 'all'}
          onClick={this.handleItemClick}
        >
          All
        </Menu.Item>

        <Menu.Item
          name='today'
          active={activeItem === 'today'}
          onClick={this.handleItemClick}
        >
          Today
        </Menu.Item>

        <Menu.Item
          name='later'
          active={activeItem === 'later'}
          onClick={this.handleItemClick}
        >
          Later
        </Menu.Item>

        <Menu.Item
          name='done'
          active={activeItem === 'done'}
          onClick={this.handleItemClick}
        >
          Done
        </Menu.Item>
      </Menu>
    )
  }
}