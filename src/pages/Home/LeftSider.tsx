import React from 'react';
import { Layout, Divider, Tabs, List, Button, Space } from 'antd';
import classNames from 'classnames';
const { TabPane } = Tabs;

interface BtcDataItem {
  name: string;
  value: string;
  type: 'warn' | 'default';
}
const btcCapitalDataSource: BtcDataItem[] = [
  {
    name: '啊啊啊哈哈',
    value: '0.0330',
    type: 'default'
  },
  {
    name: '啊啊啊哈哈',
    value: '0.0330',
    type: 'default'
  },
  {
    name: '啊啊啊哈哈',
    value: '0.0330',
    type: 'default'
  },
  {
    name: '啊啊啊哈哈',
    value: '0.0330',
    type: 'warn'
  },
  {
    name: '啊啊啊哈哈',
    value: '0.0330',
    type: 'default'
  },
  {
    name: '啊啊啊哈哈',
    value: '0.0330',
    type: 'default'
  }
];

const LeftSider = () => {
  return (
    <Layout.Sider theme="light" width="240">
      <Space direction="vertical" className="w100percent">
        <div className="h40 lh40 pl12 font-size-sm text-color-placeholder">交割合约总资产折合</div>
        <Divider className="mt0 mb0" />
        <Tabs defaultActiveKey="1" size="small" style={{ height: 300 }}>
          <TabPane tab="自选" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="全部" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="当周" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="次周" key="4">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="季度" key="5">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>

        <div className="df fdc">
          <div style={{ height: 32 }} className="df jsb ac bg-color-grey">
            <h4 className="mb0 pl12">BTC资产</h4>
            <div>
              <Button type="link" size="small">
                买币
              </Button>
              <Button type="link" size="small">
                划转
              </Button>
            </div>
          </div>
          <List
            style={{ height: 203, overflow: 'auto' }}
            size="small"
            dataSource={btcCapitalDataSource}
            renderItem={(item) => (
              <List.Item >
                <div className="w100percent df jsb ac">
                  <span className="fs12">{item.name}</span>
                  <span className={classNames('fs12', { 'color-warning': item.type === 'warn' })}>
                    {item.value}
                  </span>
                </div>
              </List.Item>
            )}
          />
        </div>
      </Space>
    </Layout.Sider>
  );
};

export default LeftSider;
