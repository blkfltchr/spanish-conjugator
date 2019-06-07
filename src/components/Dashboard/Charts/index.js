import React, { useState } from 'react';
import WeekChart from './WeekChart';
import MonthChart from './MonthChart';
import YearChart from './YearChart';
import WeekDummy from './WeekChart/weekDummy';
import MonthDummy from './MonthChart/monthDummy';
import YearDummy from './YearChart/yearDummy';

function Charts(props) {
  const [value, setValue] = useState('0');

  const handleDropdown = e => {
    setValue(e.target.value);
  };

  console.log(
    'Charts ----',
    props,
    Object.values(props).length,
    Object.values(props.data).length === 0
  );

  return (
    <div style={{ margin: '20px 0' }}>
      <select value={value} onChange={handleDropdown}>
        <option value="0">Week</option>
        <option value="1">Month</option>
        <option value="2">Year</option>
      </select>
      {Object.values(props.data).length > 0 ? (
        <div>
          {value === '0' && <WeekChart />}
          {value === '1' && <MonthChart />}
          {value === '2' && <YearChart />}{' '}
        </div>
      ) : (
        <div>
          {value === '0' && <WeekDummy />}
          {value === '1' && <MonthDummy />}
          {value === '2' && <YearDummy />}{' '}
        </div>
      )}
    </div>
  );
}

export default Charts;
