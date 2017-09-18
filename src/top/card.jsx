import React from 'react';

import { Card,
         Flag
       } from 'semantic-ui-react';

import './../assets/stylesheets/gc-common.css';
import './../assets/stylesheets/styles.css';

import Logo_1 from './../assets/img/logo_3.jpg';

const ProfileCard = () => (
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
);

export default ProfileCard;
