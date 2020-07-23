import React, { Component } from 'react';
import { fetchAllCharacters } from '../store/characterReducer';
import { connect } from 'react-redux';
import Character from '../components/Character';

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchAllCharacters()
    }
    render() {
        console.log(this.props.characters)
        return this.props.characters ? 
        <div style={{ padding: "10px", display: "flex", flexDirection:"row", flexWrap: "wrap" }}>
        {this.props.characters.map(character =>   <Character character={character} key={character.char_id} />)}
   
        </div> : <h1>Loading...</h1>
    }
}

const mapStateToProps = storeState => {
    return {
        characters : storeState.features.characters.characters
    }
}

export default connect(mapStateToProps, { fetchAllCharacters })(HomePage)