import React, { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import moment from 'moment';
import { useQuery } from 'react-apollo-hooks';
import { MY_LOGS_BY_DATE } from '../../../GqlQueries/logQueries';

function WeekChart() {
  const [weekCorrect, setWeekCorrect] = useState([]);
  const [weekTotal, setWeekTotal] = useState([]);

  const oneWeekAgo = moment()
    .subtract(7, 'd')
    .format('YYYY-MM-DD');

  const { loading, data } = useQuery(MY_LOGS_BY_DATE, {
    variables: {
      date: oneWeekAgo
    }
  });

  // getDay() returns 0-6; Sun-Sat
  // we update the temp arrays based on the count of answers
  // Sun-Sat and then setState with the updated array
  useEffect(() => {
    if (Object.values(data).length > 0) {
      let tempWeekTotal = [0, 0, 0, 0, 0, 0, 0];
      let tempWeekCor = [0, 0, 0, 0, 0, 0, 0];

      data.myLogs.map(val => {
        const aDate = new Date(val.createdAt);
        const theDay = aDate.getDay();
        tempWeekTotal[theDay] += 1;
        if (val.correct === true) {
          tempWeekCor[theDay] += 1;
        }
        setWeekCorrect(tempWeekCor);
        setWeekTotal(tempWeekTotal);
      });
    }
  }, [data]);

  console.log('Actual state -->', weekCorrect, weekTotal);

  const weekData = [
    { name: 'Mon', correct: 40, answers: 90 },
    { name: 'Tue', correct: 30, answers: 72 },
    { name: 'Wed', correct: 20, answers: 62 },
    { name: 'Thu', correct: 12, answers: 54 },
    { name: 'Fri', correct: 18, answers: 32 },
    { name: 'Sat', correct: 23, answers: 25 },
    { name: 'Sun', correct: 24, answers: 56 }
  ];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const correct = () => {
    const correct = weekData.map(weekData => weekData.correct);
    return correct.reduce(reducer);
  };

  const answers = () => {
    const answers = weekData.map(weekData => weekData.answers);
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
          <AreaChart width={600} height={200} data={weekData} syncId="anyId">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 15, right: 15 }} />
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

export default WeekChart;
