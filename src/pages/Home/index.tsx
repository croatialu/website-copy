import React from 'react';
import classnames from 'classnames';
import style from './style.module.scss';
import { Button } from 'antd';

const Home: React.FC<{}> = () => {
  return (
    <div className={classnames(style.homeContainer)} data-testid="homeTitle">
      hello world
      <Button type="danger">123</Button>
    </div>
  );
};

export default Home;
