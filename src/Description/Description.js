import React, { Component } from 'react';
import { connect } from 'react-redux';

class Description extends Component {

  render() {
    var styles = {
      marginTop: "60px",
      textAlign: "center",
      position: "relative",
      fontWeight: "bold"
    };

    return (
      <div>
          <p style={styles}>
            {this.props.seriesContent.overview}
          </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    seriesContent: state.ShowsReducer.seriesContent,
  }
}

export default connect(mapStateToProps, null)(Description);
