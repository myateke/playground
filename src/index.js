import React from 'react';

import ReactDOM from 'react-dom';

import CardExampleCard from './top/card.jsx';
import { Grid
       } from 'semantic-ui-react';

import './assets/stylesheets/gc-common.css';

ReactDOM.render(
  <section className="mAll10">
    <h1>Profile</h1>
      <Grid columns={2}>
          <Grid.Row>
              <Grid.Column>
                  <CardExampleCard />
              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
          </Grid.Row>

          <Grid.Row>
              <Grid.Column>

              </Grid.Column>
              <Grid.Column>

              </Grid.Column>
          </Grid.Row>
      </Grid>

  </section>,
  document.getElementById('app')
);
