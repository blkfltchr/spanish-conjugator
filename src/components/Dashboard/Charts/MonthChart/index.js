import React, { useState, useEffect } from 'react';
import { MY_LOGS_BY_DATE } from '../../../GqlQueries/logQueries';
import moment from 'moment';
import { useQuery } from 'react-apollo-hooks';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function MonthlyChart() {
  const [monthData, setMonthData] = useState([0]);

  const oneMonthAgo = moment()
    .subtract(31, 'd')
    .format('YYYY-MM-DD');

  const { data } = useQuery(MY_LOGS_BY_DATE, {
    variables: {
      date: oneMonthAgo
    }
  });

  // we create an array of objects with the date and
  // the count of correct and total answers on that date
  // name is used for the graph
  // dateForUseEffect is used for mapping in useEffect
  let arr = [];
  let days = 30;
  while (days >= 0) {
    arr.push({
      name: moment()
        .subtract(days, 'd')
        .format('Do-MMM'),
      correct: 0,
      answers: 0,
      dateForUseEffect: moment()
        .subtract(days, 'd')
        .format('D'),
      correct: 0,
      answers: 0
    });
    days--;
  }

  // we map through the users logs for the month
  // getDate() returns 1-31;
  // we then map through the arr created above
  // if the row in the above arr has the same date
  // as the user log, we increase the total answers and
  // correct (if correct)
  // this is a nested for loop and there may be a more
  // efficient way of doing this
  // it currently only re-renders when data is updated
  // if a user answers a question, they won't see the update
  useEffect(() => {
    if (Object.values(data).length > 0) {
      data.myLogs.map(val => {
        const aDate = new Date(val.createdAt);
        const theDay = aDate.getDate();

        arr.map(row => {
          if (parseInt(row.dateForUseEffect) === theDay) {
            row.answers += 1;
            if (val.correct === true) {
              row.correct += 1;
            }
          }
        });
        setMonthData(arr);
      });
    }
  }, [data]);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const correct = () => {
    const correct = monthData.map(monthData => monthData.correct);
    return correct.reduce(reducer);
  };

  const answers = () => {
    const answers = monthData.map(monthData => monthData.answers);
    return answers.reduce(reducer);
  };

  return (
    <div
      style={{
        textAlign: 'left',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{ width: '100px' }}>
        <div>
          <h2>{`${((correct() / answers()) * 100).toFixed(1)} %`}</h2>
          <p>Percent</p>
        </div>
        <div>
          <h2>{correct()}</h2>
          <p>Correct answers</p>
        </div>
        <div>
          <h2>{answers()}</h2>
          <p>Total answers</p>
        </div>
      </div>
      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer>
          <AreaChart width={600} height={200} data={monthData} syncId="anyId">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              padding={{ left: 15, right: 15 }}
              interval={6}
            />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="answers" />
            <Area type="monotone" dataKey="correct" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MonthlyChart;
