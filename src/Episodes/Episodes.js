import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './EpisodesActions';
import EpisodesComponent from './EpisodesComponent';

class Episodes extends Component {
  componentDidMount() {
    this.props.actions.getEpisodes();
  }

  render() {
    return(
      <EpisodesComponent seriesEpisodes={this.props.seriesEpisodes} />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    seriesEpisodes: state.EpisodesReducer.seriesEpisodes,
    loading: state.EpisodesReducer.loading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);