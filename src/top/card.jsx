import React from 'react';

import {
  Grid,
  Card,
  Flag
} from 'semantic-ui-react';

import './../assets/stylesheets/gc-common.css';
import './../assets/stylesheets/styles.scss';

import Logo_1 from './../assets/img/logo_3.jpg';

const ProfileCard = () => (
    <Grid
      container
    >
      <Grid.Column
        mobile={16}
        tablet={16}
        computer={16}
      >
      <Card>
        <img src={Logo_1} alt="" className="gc-width-100 height-auto" />
        <Card.Content>
          <Card.Header>
            Masahiro
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in July
            </span>
          </Card.Meta>
          <Card.Description>
            プロフィール
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Flag name='france' />
        </Card.Content>
      </Card>
    </Grid.Column>
  </Grid>
);

export default ProfileCard;
