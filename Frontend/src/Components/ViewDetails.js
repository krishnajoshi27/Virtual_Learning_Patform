import React, { useState } from "react";
import frame from "../images/Frame.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function ViewDetails() {
  return (
    <div className="details">
      <h4 className="title ">All Courses</h4>
      <div className="detail-course">
        <span className="frame-div">
          <img src={frame} />
        </span>
        <div>
          <strong>Learn Reactjs</strong> <br />
          by Christopher Morgan
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "300px",
          background: "#D9D9D9",
          marginTop: "40px",
          borderRadius: "10px",
        }}
      >
        <div className="course">Course, Teacher details</div>
        <div style={{ textAlign: "center", margin: "20px 0px" }}>
          Request teacher to schedule classes:{" "}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button className="btn">Online</button>
          <button className="btn">In-Person</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <button className="btn">Group</button>
            <button className="btn">Individual</button>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button className="btn">Group</button>
            <button className="btn">Individual</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
