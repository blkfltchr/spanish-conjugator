import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../styled/Button';
import Charts from './Charts';
import Tenses from './Tenses';
import { useQuery } from 'react-apollo-hooks';
import { GET_NAME } from '../GqlQueries/userQueries';

function Dashboard() {
  const { data } = useQuery(GET_NAME);
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
        <Tenses />
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
