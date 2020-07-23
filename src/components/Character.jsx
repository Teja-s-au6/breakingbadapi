import React from 'react';
import '../styles/Character.css';
import { Link } from 'react-router-dom';

const Character = ({ character }) => {
	return (
		<div className="container">
			<img src={character.img} alt="character" className="image" />
			<p className="title">{character.name}e</p>
			<div className="overlay" />
			<div className="button">
				<Link to={`/character/${character.char_id}`}> View </Link>
			</div>
		</div>
	);
};

export default Character;
