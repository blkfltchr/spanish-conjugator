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
  const [monthCorrect, setMonthCorrect] = useState([]);
  const [monthTotal, setMonthTotal] = useState([]);
  const [monthData, setMonthData] = useState([0]);

  // const monthData = [
  //   {
  //     name: moment()
  //       .subtract(31, 'd')
  //       .format('Do-MMM'),
  //     correct: 40,
  //     answers: 90
  //   },
  //   { name: '06/02/19', correct: 30, answers: 72 },
  //   { name: '06/03/19', correct: 20, answers: 62 },
  //   { name: '06/04/19', correct: 12, answers: 54 },
  //   { name: '06/05/19', correct: 18, answers: 32 },
  //   { name: '06/06/19', correct: 23, answers: 25 },
  //   { name: '06/07/19', correct: 24, answers: 56 },
  //   { name: '06/08/19', correct: 0, answers: 0 },
  //   { name: '06/09/19', correct: 0, answers: 0 },
  //   { name: '06/10/19', correct: 0, answers: 0 },
  //   { name: '06/11/19', correct: 0, answers: 0 },
  //   { name: '06/12/19', correct: 30, answers: 72 },
  //   { name: '06/13/19', correct: 20, answers: 62 },
  //   { name: '06/14/19', correct: 12, answers: 54 },
  //   { name: '06/15/19', correct: 18, answers: 32 },
  //   { name: '06/16/19', correct: 0, answers: 0 },
  //   { name: '06/17/19', correct: 0, answers: 0 },
  //   { name: '06/18/19', correct: 39, answers: 82 },
  //   { name: '06/19/19', correct: 12, answers: 34 },
  //   { name: '06/20/19', correct: 12, answers: 34 },
  //   { name: '06/21/19', correct: 40, answers: 90 },
  //   { name: '06/22/19', correct: 30, answers: 72 },
  //   { name: '06/23/19', correct: 20, answers: 62 },
  //   { name: '06/24/19', correct: 12, answers: 54 },
  //   { name: '06/25/19', correct: 18, answers: 32 },
  //   { name: '06/26/19', correct: 23, answers: 25 },
  //   { name: '06/27/19', correct: 12, answers: 34 },
  //   { name: '06/28/19', correct: 12, answers: 34 },
  //   { name: '06/29/19', correct: 12, answers: 34 },
  //   { name: '06/30/19', correct: 12, answers: 34 }
  // ];

  const oneMonthAgo = moment()
    .subtract(31, 'd')
    .format('YYYY-MM-DD');

  console.log('oneMonthAgo', oneMonthAgo, oneMonthAgo + 1);

  const { loading, data } = useQuery(MY_LOGS_BY_DATE, {
    variables: {
      date: oneMonthAgo
    }
  });
  let arr = [];
  // let days = 31;
  let days = 31;
  while (days > 0) {
    arr.push({
      name: moment()
        .subtract(days, 'd')
        .format('Do-MMM'),
      correct: 0,
      answers: 0
    });
    days--;
  }
  console.log('Will  it  work?', arr[2].correct, arr);

  // getDate() returns 1-31; Sun-Sat
  // we update the temp arrays based on the count of answers
  // Sun-Sat and then setState with the updated array
  useEffect(() => {
    if (Object.values(data).length > 0) {
      // let tempWeekTotal = [0, 0, 0, 0, 0, 0, 0];
      // let tempWeekCor = [0, 0, 0, 0, 0, 0, 0];
      console.log("We're in use effect");
      // let count = 0;
      // let tempData = [];
      data.myLogs.map(val => {
        console.log('What is the val----', val);
        const aDate = new Date(val.createdAt);
        const theDay = aDate.getDate();
        console.log('A date + the Day', aDate, theDay);
        console.log('Arr', arr);
        arr[arr.length - 1 - theDay].answers += 1;
        if (val.correct === true) {
          arr[arr.length - 1 - theDay].correct += 1;
        }
        // setWeekCorrect(tempWeekCor);
        // setWeekTotal(tempWeekTotal);
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
