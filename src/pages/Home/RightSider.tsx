import React from 'react';
import { Layout, Tabs, Table, Divider } from 'antd';

const { Sider } = Layout;
const { TabPane } = Tabs;

const createColumns = (color: string) => {
  return [
    {
      title: '价格(USD)',
      dataIndex: 'price',
      key: 'price',
      render(item: string) {
        return <span style={{ color }}>{item}</span>;
      }
    },
    {
      title: '数量(张)',
      dataIndex: 'count',
      key: 'count'
    },
    {
      title: '累计(张)',
      dataIndex: 'total',
      key: 'total'
    }
  ];
};

const tableDataSource = [
  { key: 1, price: '7,520.76', count: 456, total: '1,068' },
  { key: 2, price: '7, 520.73', count: 40, total: '612' },
  { key: 3, price: '7, 520.61', count: 22, total: '572' },
  { key: 4, price: '7, 520.58', count: 23, total: '550' },
  { key: 5, price: '7, 520.57', count: 3, total: '527' },
  { key: 6, price: '7, 520.0', count: 55, total: '524' },
  { key: 7, price: '7, 519.97', count: 82, total: '469' },
  { key: 8, price: '7, 519.96', count: 200, total: '387' },
  { key: 9, price: '7, 519.83', count: 23, total: '187' },
  { key: 10, price: '7, 519.76', count: 21, total: '187' }
];

const RightSider = () => {
  return (
    <Sider theme="light" width="240" style={{ overflow: 'auto' }}>
      <Tabs defaultActiveKey="1" size="small">
        <TabPane tab="盘口" key="1">
          <Table
            dataSource={tableDataSource.slice(0, 3)}
            columns={createColumns('green')}
            pagination={false}
          />
          <div className="pl12 pr12 pt12 pb12 df fdc">
            <div className="df jsb ac">
              <div className="fs12 text-color-disabled">最新价</div>
              <div className="fs12 text-color-disabled">指数价</div>
            </div>
            <div className="df jsb ac">
              <div className="fs18 text-color-primary">7,507.87</div>
              <div className="fs18 text-color-disabled">7,497.96</div>
            </div>
          </div>
          <Divider className="mt0 mb0" />
          <Table
            showHeader={false}
            dataSource={tableDataSource.slice(3)}
            columns={createColumns('red')}
            pagination={false}
          />
        </TabPane>
        <TabPane tab="实时成交" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </Sider>
  );
};

export default RightSider;
