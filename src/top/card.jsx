import React from 'react';

import { Card, Icon } from 'semantic-ui-react';

import './../assets/stylesheets/gc-common.css';
import './../assets/stylesheets/styles.css';

import Logo_1 from './../assets/img/logo_3.jpg';

const CardExampleCard = () => (
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
      <a href="https://github.com/myateke">
        <Icon name='github alternate' />
        github
      </a>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
