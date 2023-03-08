import React from 'react';
import './Trends.css';

const renderTrend = (tag, topic, figure) => (
  <div className="trends__card">
    <div className="trends__cardTag">{tag}</div>
    <h3 className="trends__cardTopic">{topic}</h3>
    <div className="trends__cardFigure">{figure}</div>
  </div>
);

const Trends = () => {
  return (
    <section className="trends">
      <h1>Trends for you</h1>
      <div className="trends__cards">
        {renderTrend('Tech . Starlink', 'Starlink - Elon', '11k Tweets')}
        {renderTrend('Politics . LP', 'Peter Obi', '11k Tweets')}
        {renderTrend('Sports . Trending', 'Manchester United', '231k Tweets')}
        {renderTrend('Music . Trending', 'Simi', '331k Tweets')}
        {renderTrend('Tech . Trending', 'ReactJS', '444k Tweets')}
      </div>
    </section>
  );
};

export default Trends;
