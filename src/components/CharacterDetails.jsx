import React from 'react';

const CharacterDetails = ({ character }) => {
	return (
		<div style={{ marginLeft: 750, marginTop: 20 }} key={character.char_id}>
			<img src={character[0].img} alt="character" style={{ width: 250, height: 300 }} />
			<h1>Name: {character[0].name}</h1>
			<h3>NickName: {character[0].nickname}</h3>
			<h3>Category: {character[0].category}</h3>
			<h4>BirthDay: {character[0].birthday}</h4>
			<h4>Occupation: {character[0].occupation.map((occupation) => <p> {occupation} </p>)}</h4>
			<h4>Status: {character[0].status}</h4>
			<h4>Appearance:</h4>
			{character[0].appearance.map((appearance) => <p> {appearance}</p>)}
		</div>
	);
};

export default CharacterDetails;
