import React from 'react';

const Loader = (props) => {

  var loader = {
    position: "absolute",
    backgroundColor: "#fff",
    height: "100%",
    opacity: ".5",
    width: "100%",
    textAlign: "center",
  };

  if(props.loading) {
    return (
      <div style={loader}>
        Loading...
      </div>
    );
  }

  return null;
};

export default Loader;