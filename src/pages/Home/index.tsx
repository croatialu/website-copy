import React from 'react';
import classnames from 'classnames';
import style from './style.module.scss';

const Home: React.FC<{}> = () => {
  return (
    <div className={classnames(style.homeContainer)} data-testid="homeTitle">
      hello world
    </div>
  );
};

export default Home;
