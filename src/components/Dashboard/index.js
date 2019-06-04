import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../styled/Button';
import Charts from './Charts';
import Tenses from './Tenses';
import { useQuery } from 'react-apollo-hooks';
import { GET_MY_INFO } from '../GqlQueries/userQueries';
import PresentTense from './Tenses/PresentTense';
import PreteriteTense from './Tenses/PreteriteTense';
import ImperfectTense from './Tenses/ImperfectTense';

function Dashboard() {
  const [id, setId] = useState('');

  const { loading, data } = useQuery(GET_MY_INFO);

  console.log('Data from dash ->', data, Object.values(data).length);
  if (Object.values(data).length > 0) {
    console.log('Dashboard data id---', data.me.id);
    setId(data.me.id);
  }
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>
          Welcome to your student dashboard
          {data.length > 0 ? `, ${data.me.name}!` : null}
        </h1>
        <h3>Track your progress.</h3>
      </div>
      <div style={{ margin: '0 auto', maxWidth: '600px' }}>
        <Charts />
        <Tenses loading={loading} id={id} />
        {/* <PresentTense loading={loading} id={id} /> */}
        {/* <PreteriteTense loading={loading} id={id} /> */}
        {/* <ImperfectTense loading={loading} id={id} /> */}
        <Button>
          <Link to="/">
            <button type="button">Start conjugating</button>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
