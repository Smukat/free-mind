import React, { Component } from 'react'
import Note from './Note';
import AddNote from './AddNote';

export default class Main extends Component {
	state = {}

	render() {
		return (
			<main className="main-notes">
			<AddNote />
			</main>
		);
	}
}