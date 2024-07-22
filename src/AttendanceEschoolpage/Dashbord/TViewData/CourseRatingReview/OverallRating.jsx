import React from "react";
import "../CourseRatingReview/overall.css";

const OverallRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

  return (
    <div className="overall-rating">
      <div className="rating-value">{rating.toFixed(1)}</div>
      <div className="stars">
        {[...Array(filledStars)].map((_, i) => (
          <span key={i} className="filled-star">
            &#9733;
          </span>
        ))}
        {halfStar && <span className="half-star">&#9733;</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="empty-star">
            &#9733;
          </span>
        ))}
      </div>
      <div className="rating-text">Overall Rating</div>
    </div>
  );
};

export default OverallRating;
