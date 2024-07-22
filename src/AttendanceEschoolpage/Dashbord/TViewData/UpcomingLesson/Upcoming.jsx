import React from "react";
import "../UpcomingLesson/style.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
const UpcomingLesson = ({ title, para, time, info, status, date }) => {
  return (
    <div className="upcoming-lesson">
      <div className="lesson-title">
        <h1>{title}</h1>
        <p>{para}</p>
        <p>{info}</p>
        <p>
          <span>
            {" "}
            <FaCalendarAlt style={{ marginRight: "5px" }} />
            {date}
          </span>{" "}
          |
          <span>
            {" "}
            <FaRegClock style={{ marginRight: "5px" }} />
            {time}
          </span>
        </p>
      </div>
      <div className="lesson-status">
        <h1>{status}</h1>
        <button>click</button>
      </div>
    </div>
  );
};

const CourseSchedule = () => {
  const lessons = [
    {
      id: 1,
      title: "Lesson 30",
      para: "lorem ipsum",
      date: "Sep 5, 2022",
      time: "09:00-10:00 am",
      status: "Confirmed",
    },
    {
      id: 2,
      title: "Lesson 30",
      para: "lorem ipsum",
      date: "Sep 5, 2022",
      time: "09:00-10:00 am",
      status: "Confirmed",
    },
    {
      id: 3,
      title: "Lesson 30",
      para: "lorem ipsum",
      date: "Sep 5, 2022",
      time: "09:00-10:00 am",
      status: "Confirmed",
    },
  ];

  return (
    <div className="course-schedule">
      <div className="schedule-header">
        <h2 className="upcoming-lessons-title">Upcoming Lessons</h2>
        <div className="view-all-courses">
          <p>View All Courses</p>
          <span>
            <HiOutlineDotsVertical className="icon-dots" />
          </span>
        </div>
      </div>
      <div className="lessons-list">
        {lessons.map((lesson, index) => (
          <UpcomingLesson
            key={index}
            title={lesson.title}
            para={lesson.para}
            date={lesson.date}
            time={lesson.time}
            status={lesson.status}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSchedule;
