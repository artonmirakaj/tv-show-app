import React from 'react';

const EpisodesComponent = (props) => {
  var styles = {
    marginTop: "60px",
    textAlign: "center",
    position: "relative",
  };

  var seasonStyle = {
   fontWeight: "bold",
   fontSize: "20px",
   margin: "15px"
  };

  return (
    <div style={styles}>
        {
          props.seriesEpisodes.map((season, key) => (
            <div key={key}>
              <div style={seasonStyle}>{`Season ${key + 1}`}</div>
              {
                season.episodes.map(episode => {
                  return <div>{episode.title}</div>
                })
              }
            </div>
          ))
        }
      </div>
  );
}

export default EpisodesComponent;
