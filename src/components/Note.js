import React, { Component } from 'react';
import { Segment, Button, Popup, Label, Icon  } from 'semantic-ui-react'

export default class Note extends Component {
	state = {}

	render() {
		const { priority, title, description } = this.props;
		//If priority is now the color of the label will be red, otherwise teal.
		const color = (priority === "now") ? "red" 
		: (priority === "later") ? "teal" : "grey";
		
		const priorityLabel = priority.charAt(0).toUpperCase() + priority.slice(1);
		return (
			<div className="note-style">
				{/*Label button */}
				<Segment raised color={color}>
					<Label as='a' color={color} ribbon>
						{priorityLabel}
					</Label>
					{/*Settings Button */}
					<Popup
						trigger={<Button circular icon='setting' floated="right" size='tiny'/>}
						content={
						<Button.Group vertical icon basic>
						<Button icon basic labelPosition='left'>
							<Icon name='check circle' color="green"/>
							Done
						</Button>
						<Button icon basic labelPosition='left'>
							<Icon name='edit' color="black"/>
							Edit
						</Button>
						<Button icon basic labelPosition='left'>
							<Icon name='trash' color="red"/>
							Delete
						</Button>
						</Button.Group>}
						on='click'
						position='left center'
					/>
					<h3>{title}</h3>
					<p>{description}</p>
				</Segment>

			    {/* <Header as='h2' attached='top'>
					Attached Header
					</Header>
					<Segment attached>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat.
						<Button circular icon='settings' floated="right" size='tiny'/>
					</Segment> */}
			</div>
		);
	}
}
