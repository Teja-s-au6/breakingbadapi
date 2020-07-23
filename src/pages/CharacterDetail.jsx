import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrnetCharacter } from '../store/currentCharacter';
import CharacterDetails from '../components/CharacterDetails';

class CharacterDetail extends Component {
    componentDidMount() {
        if (this.props.match.params.characterId === undefined) {
			return 'hee';
		}
        this.props.fetchCurrnetCharacter(this.props.match.params.characterId)
    }
    render() {
        console.log(this.props.currentCharacter)
        return (
            <div>
                {this.props.currentCharacter ? <CharacterDetails character={this.props.currentCharacter} /> : <h1>Loading</h1>}
            </div>
        )
    }
}

const mapStateToProps = storeState => {
    return {
        currentCharacter : storeState.features.currentCharacter.character
    }
}

export default connect(mapStateToProps, {fetchCurrnetCharacter})(CharacterDetail)
