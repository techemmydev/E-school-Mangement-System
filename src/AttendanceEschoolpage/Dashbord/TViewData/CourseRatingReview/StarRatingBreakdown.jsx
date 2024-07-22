import React from "react";
import "../CourseRatingReview/break.css";

const StarRatingBreakdown = ({ ratings }) => {
  const totalRatings = ratings.reduce((acc, rating) => acc + rating.count, 0);

  const getPercentage = (count) => {
    return totalRatings ? ((count / totalRatings) * 100).toFixed(1) : 0;
  };

  return (
    <div className="rating-breakdown">
      {ratings.map((rating, index) => (
        <div className="rating-row" key={index}>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={i < rating.stars ? "filled-star" : "empty-star"}
              >
                &#9733;
              </span>
            ))}
          </div>
          <div className="rating-bar">
            <div
              className="filled-bar"
              style={{ width: `${getPercentage(rating.count)}%` }}
            ></div>
          </div>
          <div className="percentage">{getPercentage(rating.count)}%</div>
        </div>
      ))}
    </div>
  );
};

export default StarRatingBreakdown;
