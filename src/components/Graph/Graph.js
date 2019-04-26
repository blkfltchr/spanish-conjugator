import React, { useState } from "react";
import PropTypes from "prop-types";
import CalendarHeatMap from "react-calendar-heatmap";
import "./graph.css";

const Graph = () => {
  return (
    <div>
      <CalendarHeatMap
        startDate={new Date("2016-01-01")}
        endDate={new Date("2016-04-01")}
        values={[
          { date: "2016-01-01" },
          { date: "2016-01-22" },
          { date: "2016-01-30" }
        ]}
      />
    </div>
  );
};

export default Graph;
