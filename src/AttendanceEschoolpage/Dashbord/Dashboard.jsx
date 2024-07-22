import React from "react";
import style from "../Dashbord/dashboard.module.css";
import { dashboardcontent } from "./dashcontent";
import Pie from "./TViewData/PieChart/Pie";
import Chartimage from "./TViewData/TableImageData/Chartimage";
import RecentActivities from "./TViewData/TimelineBars/RecentActivities";
import BarChart from "./TViewData/ReportOverview/BarChart";
import { databars } from "../Dashbord/TViewData/ReportOverview/barLine";
import CourseSchedule from "./TViewData/UpcomingLesson/Upcoming";
import BasicColor from "./TViewData/CourseRatingReview/CourseRatingReviews";
import OverallRating from "./TViewData/CourseRatingReview/OverallRating";
import { MdKeyboardArrowDown } from "react-icons/md";
import StarRatingBreakdown from "./TViewData/CourseRatingReview/StarRatingBreakdown";
const Dashboard = () => {
  const ratings = [
    { stars: 5, count: 560 },
    { stars: 4, count: 370 },
    { stars: 3, count: 80 },
    { stars: 2, count: 10 },
    { stars: 1, count: 5 },
  ];
  const averageRating = 4.6;
  return (
    <React.Fragment>
      <div className={style.welcomejohn}>
        <h1>Welcome John</h1>
        <p>Home</p>
      </div>
      <section className={style.container}>
        <div className={`${style.dashboard_container1}`}>
          {dashboardcontent.map((items, index) => {
            return (
              <div className={`${style.dashboard_container} `} key={index}>
                <div>
                  <h1 className={`${style.dashboard_containerh1} `}>
                    {items.heading}
                    {index === 0 ? (
                      <span className={style.testingspan}>{items.badge}</span>
                    ) : (
                      ""
                    )}
                    {index === 1 ? (
                      <span className={style.testingspan}>{items.badge}</span>
                    ) : (
                      ""
                    )}
                  </h1>
                  <p className={`${style.dashboard_containerPara}`}>
                    {items.amount}{" "}
                    {index === 2 ? (
                      <span className={style.testingspan}>{items.badge}</span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
                <div>
                  <img src={items.icons} alt="icons" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <aside className={`${style.dashboard_chart_container}`}>
        <div className={`${style.dashboardchart1}`}>
          <BarChart data={databars} />
        </div>
        <div className={`${style.dashboardchart2}`}>
          <div className={`${style.dashboardchart_desktop}`}>
            <RecentActivities />
          </div>
        </div>
        <div>
          <Pie />
        </div>
        <div className={`${style.dashboardchart3}`}>
          <Chartimage />
        </div>
      </aside>

      <aside className={`${style.dashboard_chart_mobile}`}>
        <div className={`${style}`}>
          <CourseSchedule />
        </div>

        <div>
          <div className={style.schedule_header}>
            <h2 className={style.upcoming_lessons_title}>
              Overall Course Rating
            </h2>
            <div className={style.viewallcourses}>
              <p>This Week</p>
              <span>
                <MdKeyboardArrowDown className={style.icondots} />
              </span>
            </div>
          </div>
          <div className={`${style.flex_rating}`}>
            <OverallRating rating={averageRating} />
            <BasicColor />
          </div>
        </div>
        <div>
          <StarRatingBreakdown ratings={ratings} />
        </div>
        <div>
          <aside className={`${style.dashboard_chart_container2}`}>
            <div className={`${style.dashboardchart1}`}>
              <BarChart data={databars} />
            </div>
            <div className={`${style.dashboardchart2}`}>
              <RecentActivities />
            </div>
            <div className={`${style.dashboardchart4}`}>
              <Pie />
            </div>
            <div className={`${style.dashboardchart3}`}>
              <Chartimage />
            </div>
          </aside>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Dashboard;
