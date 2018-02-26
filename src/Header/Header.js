import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from '../Loader/Loader';
import * as actions from './HeaderActions';

class Header extends Component {
  componentDidMount() {
    this.props.actions.getRatings();
  }

  render() {

    var styles = {
      marginTop: "10px",
    };

    return (
      <div className="container">

      <Loader loading={this.props.loading} />

      {/*<HeaderComponent seriesRatings={this.props.seriesRatings} />*/}

      <nav>
        <div className="navbar-fixed">
          <h1 className="brand-logo center blue-text text-darken-2" style={styles}>Game Of Thrones</h1>
    
        </div>

          <div className="row">
            <ul>
              <li className="btn btn-primary cyan col s4 center-align" style={styles}>
                <Link to="/">
                  Description
                </Link>
              </li>

              <li className="btn btn-primary cyan col s4 center-align" style={styles}>
                <Link to="/episodes">
                  Episodes
                </Link>
              </li>

              <li className="btn btn-primary cyan col s4 center-align" style={styles}>
                <Link to="/cast">
                  Cast
                </Link>
              </li>
            </ul>
          </div>
      </nav>
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
    seriesRatings: state.HeaderReducer.seriesRatings,
    loading: state.HeaderReducer.loading,
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);