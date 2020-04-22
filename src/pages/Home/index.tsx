import React from 'react';
import classnames from 'classnames';
import style from './style.module.scss';
import { Layout } from 'antd';
import LeftSider from './LeftSider';
import ContentForm from './ContentForm';

const { Sider, Content } = Layout;

const Home: React.FC<{}> = () => {
  return (
    <div className={classnames(style.homeContainer)} data-testid="homeTitle">
      <Layout style={{ height: 600 }}>
        <LeftSider />
        <Content className="df fdc jce">
          图表
          <ContentForm />
        </Content>
        <Sider theme="light" width="240">
          right sidebar
        </Sider>
      </Layout>
    </div>
  );
};

export default Home;
