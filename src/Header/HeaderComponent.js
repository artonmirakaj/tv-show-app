import React from 'react';

const HeaderComponent = (props) => {
  return (
    <div>
      {
        props.seriesRatings.map((rate, key) => (
          <div key={key}>
            {
              rate.ratings.map(ratings => {
                return <div>{ratings.rating}</div>
              })
            }
          </div>
        ))
      }
    </div>
  );
}

export default HeaderComponent;