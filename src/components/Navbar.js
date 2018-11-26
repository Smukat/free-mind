<<<<<<< HEAD
import React, { Component } from 'react'
import { Menu, Icon} from 'semantic-ui-react'
import logo from '../images/logo.png';

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
=======
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee  } from '@fortawesome/free-solid-svg-icons'
>>>>>>> origin/master

    return (
<<<<<<< HEAD
      <div>
        <Menu>
					<Menu.Item name='home' onClick={this.handleItemClick}>
						<img src={logo} alt="logo" />
					</Menu.Item>
          <Menu.Menu position='right' icon='labeled'>
						<Menu.Item
							name='add'
							active={activeItem === 'add'}
							onClick={this.handleItemClick}
						>
							<Icon name='add' />
							New Task
						</Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
=======
        <nav className="navbar-style">
            <p>freeMind</p>
            <button className="addButton">+</button>
            <FontAwesomeIcon icon={faCoffee} />
        </nav>
    );
>>>>>>> origin/master
}
