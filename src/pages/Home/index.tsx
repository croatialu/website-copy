import React from 'react';
import classnames from 'classnames';
import style from './style.module.scss';
import { Layout } from 'antd';
import LeftSider from './LeftSider';
import RightSider from './RightSider';
import ContentForm from './ContentForm';

import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';

const { Content } = Layout;

const Home: React.FC<{}> = () => {
  return (
    <div className={classnames(style.homeContainer)} data-testid="homeTitle">
      <Layout style={{ height: 600 }}>
        <LeftSider />
        <Content className="df fdc jce">
          图表
          <ContentForm />
        </Content>
        <RightSider />
      </Layout>

      <Table1 className="bg-color-white mt12" />
      <Table2 className="bg-color-white mt12" />
      <Table3 className="bg-color-white mt12" />
    </div>
  );
};

export default Home;
