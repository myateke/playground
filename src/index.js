import React from 'react';

import ReactDOM from 'react-dom';

import ProfileCard from './top/card.jsx';
import ListDivided from './top/list.jsx';
import { Grid
       } from 'semantic-ui-react';

import './assets/stylesheets/gc-common.css';

ReactDOM.render(
  <section className="mAll70">
    <h1>Profile</h1>
      <Grid
        columns={2}
        centered
      >
          <Grid.Row>
              <Grid.Column
                width={4}
              >
                  <ProfileCard />
              </Grid.Column>
              <Grid.Column
                width={12}
                className="bg-white"
              >
                  <ListDivided />
              </Grid.Column>
          </Grid.Row>
      </Grid>

  </section>,
  document.getElementById('app')
);
