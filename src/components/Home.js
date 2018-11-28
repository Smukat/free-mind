import React from 'react';
import Header from './Header';
import AddButton from './AddButton';
import NoTaskMain from './NoTaskMain';
import Main from './Main';
import Note from './Note';

import { Consumer } from './Context/indexContext';
const Home = () => {
	return (
		<Consumer>
			{({ notes }) => (
				<div>
					<Header />
					<AddButton />
					{(notes.length > 0) ? <Main /> : <NoTaskMain /> }
				</div>
			)}
		</Consumer>

);
}

export default Home;
