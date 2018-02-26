import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './showsActions';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

class Shows extends Component {
  componentDidMount() {
    this.props.actions.getShow();
  }

  render() {
    return (
      <div className="show-container">
        <Loader loading={this.props.loading} />
        <Header 
          seriesContent={this.props.seriesContent}
        />
        {this.props.children}
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
  return {
    seriesContent: state.ShowsReducer.seriesContent,
    loading: state.ShowsReducer.loading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shows);