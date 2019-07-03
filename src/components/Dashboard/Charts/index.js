import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

  const { data } = props;

  return (
    <div
      style={{
        margin: '20px 0',
      }}
    >
      <select value={value} onChange={handleDropdown}>
        <option value="0">Week</option>
        <option value="1">Month</option>
        <option value="2">Year</option>
      </select>
      {Object.values(data).length > 0 ? (
        <div
          style={{
            padding: '0 15px',
            marginTop: '15px',
            borderRadius: '4px',
            backgroundColor: '#fff',
            boxShadow:
              '0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
          }}
        >
          {value === '0' && <WeekChart />}
          {value === '1' && <MonthChart />}
          {value === '2' && <YearChart />}{' '}
        </div>
      ) : (
        <div
          style={{
            padding: '0 15px',
            marginTop: '15px',
            borderRadius: '4px',
            backgroundColor: '#fff',
            boxShadow:
              '0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
          }}
        >
          {value === '0' && <WeekDummy />}
          {value === '1' && <MonthDummy />}
          {value === '2' && <YearDummy />}{' '}
        </div>
      )}
    </div>
  );
}

Charts.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Charts;
