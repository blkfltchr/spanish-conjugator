import React, { useState } from 'react';
import WeekChart from './WeekChart';
import MonthChart from './MonthChart';
import YearChart from './YearChart';

function Charts() {
  const [value, setValue] = useState('0');

  const handleDropdown = e => {
    setValue(e.target.value);
    console.log(value);
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <select value={value} onChange={handleDropdown}>
        <option value="0">Week</option>
        <option value="1">Month</option>
        <option value="2">Year</option>
      </select>
      {value === '0' && <WeekChart />}
      {value === '1' && <MonthChart />}
      {value === '2' && <YearChart />}
    </div>
  );
}

export default Charts;
