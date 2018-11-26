import React, { Component} from 'react';
import { Button, Checkbox, Form, Container, Header, Radio, Input, TextArea } from 'semantic-ui-react';

export default class AddNote extends Component {
/* the state valuePriority will hold 3 possibilities:
		1: "Priority NOW",
		2: "Priority LATER",
		3: DONE */
	state = {}

	handleChange = (e, { valuePriority }) => this.setState({ valuePriority });

	render() {
		const { valuePriority } = this.state;

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
            value='1'
            checked={valuePriority === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Later'
            value='2'
            checked={valuePriority === '2'}
            onChange={this.handleChange}
          />
				</Form.Group>
					<Button type='submit' icon="paper plane" primary fluid />
				</Form>
			</Container>
		);
	}
}
