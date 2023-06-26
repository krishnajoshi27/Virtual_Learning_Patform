import React, { useEffect } from "react";
import { NewsApi } from "../redux/actions/newsAction";
import { useDispatch } from "react-redux";

const Course = () => {
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NewsApi())
  }, [])
  
  return (
    <div className="center2">
      <h1 className="annoucument">News And Announcement</h1>
    </div>
  );
};

export default Course;
