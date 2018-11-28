import React, { Component} from 'react';
import { Button, Checkbox, Form, Container, Header, Radio, Input, TextArea } from 'semantic-ui-react';

export default class AddNote extends Component {
	state = {}

	handleChange = (e, { value }) => this.setState({ value });

	render() {
		const { value } = this.state;

		return (
			<Container className="addTask-style">
			  <Header as='h3'>
					Adding a new task...
				</Header>
				<Form>
					<Form.Field required>
						<label>Task:</label>
						<input />
					</Form.Field>
					<Form.Field label="Description" control='textarea' rows='3' />
					<Form.Group inline>
          <label>Priority:</label>
          <Form.Field
            control={Radio}
            label='Now'
            value='now'
            checked={value === 'now'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Later'
            value='later'
            checked={value === 'later'}
            onChange={this.handleChange}
          />
				</Form.Group>
					<Button type='submit' icon="paper plane" primary fluid />
				</Form>
			</Container>
		);
	}
}
