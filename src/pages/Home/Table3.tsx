import React from 'react';
import { Table, Tabs, Space, Radio, Checkbox, Select } from 'antd';
import classNames from 'classnames';

const { TabPane } = Tabs;
const { Option } = Select;

const columns = [
  {
    title: '成交时间',
    dataIndex: '1',
    key: '1'
  },
  {
    title: '交易类型',
    dataIndex: '2',
    key: '2'
  },
  {
    title: '成交量(张)',
    dataIndex: '3',
    key: '3'
  },
  {
    title: '成交价(USD)',
    dataIndex: '4',
    key: '4'
  },
  {
    title: '成交类型',
    dataIndex: '5',
    key: '5'
  },
  {
    title: '受益(BTC)',
    dataIndex: '6',
    key: '6'
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

const Table2: React.FC<{ style?: React.CSSProperties; className?: string }> = ({
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

export default Table2;
