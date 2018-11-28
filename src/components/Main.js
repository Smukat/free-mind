import React, { Component } from 'react'
import Note from './Note';
import AddNote from './AddNote';
import { Consumer } from './Context/indexContext';

export default class Main extends Component {
	state = {}

	render() {
		return (
			<main className="main-notes">
				<Consumer>
					{ ({notes}) => (
						notes.map((note, index) => (
							<Note 
								key={note.id} 
								index={index} 
								priority={note.priority} 
								title={note.title}
								description={note.description}
								/>
						))
					)}
				</Consumer>
			</main>
		);
	}
}