import React from 'react';

import ReactDOM from 'react-dom';

import ProfileCard from './top/card.jsx';
import ListDivided from './top/list.jsx';
import BarChart from './Chart/index.jsx';
import LineChart from './Chart/Line/index.jsx';
import RadarChart from './Chart/Radar/index.jsx';

import { Grid
       } from 'semantic-ui-react';

 import './assets/stylesheets/gc-common.css';
 import './assets/stylesheets/styles.scss';

ReactDOM.render(
  <section className="mAll70">
    <h1>Playground</h1>
      <Grid
        columns={2}
        centered
      >
          <Grid.Row>
              <BarChart/>
          </Grid.Row>
          <Grid.Row>
              <LineChart/>
          </Grid.Row>
          <Grid.Row>
              <RadarChart/>
          </Grid.Row>
      </Grid>

  </section>,
  document.getElementById('app')
);
