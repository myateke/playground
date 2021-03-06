import React from 'react';
import {
  Grid,
  List
} from 'semantic-ui-react';

const ListDivided = () => (
  <Grid
    container
  >
    <Grid.Column
      mobile={16}
      tablet={16}
      computer={10}
    >
      <List divided relaxed className="pAll20">
        <List.Item>
          <List.Icon name='github' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a' href="https://github.com/myateke">github</List.Header>
            <List.Description>調査用リポジトリ</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='write' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a' href="http://qiita.com/gcyata">Qiita</List.Header>
            <List.Description>勉強内容記事</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Grid.Column>
  </Grid>
);

export default ListDivided;
