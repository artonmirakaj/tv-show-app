import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './CastActions';
import Loader from '../Loader/Loader';

class Cast extends Component {
  componentDidMount() {
    this.props.actions.getCast();
  }

  render() {
    var styles = {
      marginTop: "60px",
      textAlign: "center",
      position: "relative",
      fontWeight: "bold",
    };

    return (
      <div style={styles}>
        <Loader loading={this.props.loading} />
        {
          this.props.cast.map((character, key) => {
            return (
              <div key={key}>
                <p>{character.person.name}: {character.character}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cast: state.CastReducer.cast,
    loading: state.CastReducer.loading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cast);