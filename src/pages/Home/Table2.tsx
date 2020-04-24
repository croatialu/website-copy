import React from 'react';
import { Table, Tabs, Space, Radio, Checkbox, Select, Button } from 'antd';
import classNames from 'classnames';

const { TabPane } = Tabs;
const { Option } = Select;

const columns = [
  {
    title: '合约',
    dataIndex: '1',
    key: '1'
  },
  {
    title: '倍数',
    dataIndex: '2',
    key: '2'
  },
  {
    title: '委托时间',
    dataIndex: '3',
    key: '3'
  },
  {
    title: '交易类型',
    dataIndex: '4',
    key: '4'
  },
  {
    title: '委托类型',
    dataIndex: '5',
    key: '5'
  },
  {
    title: '委托量',
    dataIndex: '6',
    key: '6'
  },
  {
    title: '委托价',
    dataIndex: '7',
    key: '7'
  },
  {
    title: '成交量',
    dataIndex: '8',
    key: '8'
  },
  {
    title: '成交均价',
    dataIndex: '9',
    key: '9'
  },
  {
    title: '受益',
    dataIndex: '10',
    key: '10'
  },
  {
    title: '手续费',
    dataIndex: '11',
    key: '11'
  },
  {
    title: '状态',
    dataIndex: '12',
    key: '12'
  },
  {
    title: '操作',
    dataIndex: '13',
    key: '13',
    render() {
      return <Button type="default">查看</Button>;
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
        <Space direction="vertical" className="w100percent">
          <Radio.Group size="small" className="pl12 pr12">
            <Space>
              <Radio.Button value="large">限价委托</Radio.Button>
              <Radio.Button value="default">计划委托</Radio.Button>
            </Space>
          </Radio.Group>
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
                10: '666',
                11: '666',
                12: '666'
              }
            ]}
            columns={columns}
          />
        </Space>
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
