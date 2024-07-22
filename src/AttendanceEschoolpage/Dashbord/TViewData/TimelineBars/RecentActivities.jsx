import React from "react";
import "../TimelineBars/RecentActivities.css";

const activities = [
  { time: "32 min", activity: "Glory primary school was deleted" },
  { time: "56 min", activity: "New staff was created" },
  { time: "2 hrs", activity: "New staff was created" },
  { time: "2 hrs", activity: "Inactive staff is now active" },
];

const RecentActivities = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-header">
        Recent Activities <span className="timeline-today">Today</span>
      </h2>
      <ul className="timeline">
        {activities.map((item, index) => (
          <li key={index} className="timeline-item">
            <div className="timeline-time">{item.time}</div>
            <div className="timeline-content">{item.activity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
