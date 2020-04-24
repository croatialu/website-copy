import React from 'react';
import { Table, Tabs, Space, Radio, Checkbox, Select, Input, Button } from 'antd';
import classNames from 'classnames';

const { TabPane } = Tabs;
const { Option } = Select;

const columns = [
  {
    title: '合约',
    dataIndex: '1',
    key: '1',
    render(item: any) {
      return <span style={{ color: 'red' }}>{item}</span>;
    }
  },
  {
    title: '开仓均价',
    dataIndex: '2',
    key: '2'
  },
  {
    title: '持仓均价',
    dataIndex: '3',
    key: '3'
  },
  {
    title: '持仓担保资产',
    dataIndex: '4',
    key: '4'
  },
  {
    title: '持仓均价',
    dataIndex: '5',
    key: '5'
  },
  {
    title: '未实现盈亏',
    dataIndex: '6',
    key: '6'
  },
  {
    title: '受益',
    dataIndex: '7',
    key: '7'
  },
  {
    title: '收益率',
    dataIndex: '8',
    key: '8'
  },
  {
    title: '持仓量',
    dataIndex: '9',
    key: '9'
  },
  {
    title: '可平量',
    dataIndex: '10',
    key: '10'
  },
  {
    title: '价格',
    dataIndex: '11',
    key: '11',
    render() {
      return <Input style={{ width: 80 }} />;
    }
  },
  {
    title: '数量',
    dataIndex: '12',
    key: '12',

    render() {
      return (
        <Space className="df ac">
          <Input style={{ width: 80 }} />
          <Button>平空</Button>
        </Space>
      );
    }
  },
  {
    title: '操作',
    dataIndex: '13',
    key: '13',
    render() {
      return (
        <Space>
          <Button type="primary">止损</Button>
          <Button type="primary">止损</Button>
        </Space>
      );
    }
  }
];

const operations = (
  <>
    <Checkbox>显示所有BTC合约</Checkbox>
    <Select defaultValue="all" style={{ width: 120 }} className="mr12">
      <Option value="all">全部撤单</Option>
      <Option value="part">部分撤单</Option>
    </Select>
  </>
);

const Table1: React.FC<{ style?: React.CSSProperties; className?: string }> = ({
  style,
  className
}) => {
  return (
    <Tabs
      tabBarExtraContent={operations}
      className={classNames('card-container', className)}
      defaultActiveKey="1"
      size="small"
      type="card"
      style={style}
    >
      <TabPane tab="当前持仓" key="1">
        <Table
          dataSource={[
            {
              key: 1,
              1: '666',
              2: '666',
              3: '666',
              4: '666',
              5: '666',
              6: '666',
              7: '666',
              8: '666',
              9: '666',
              10: '666'
            }
          ]}
          columns={columns}
        />
      </TabPane>
      <TabPane tab="当前委托" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="历史委托" key="3">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab="成交记录" key="4">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab="财务记录" key="5">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab="所有持仓" key="6">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default Table1;
