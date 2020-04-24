import React from 'react';
import { Tabs, Radio, Tooltip, Button, Space, Input, Divider, Slider } from 'antd';
import './ContentForm.module.scss';

const { TabPane } = Tabs;

const withTooltip = (text: string, tips = '巴拉巴拉...') => {
  return (
    <Tooltip title={tips}>
      <span>{text}</span>
    </Tooltip>
  );
};

const sliderMarks = {
  0: '',
  25: '',
  50: '',
  75: '',
  100: ''
};

const ContentForm = () => {
  return (
    <div className="card-container bg-color-white">
      <Tabs defaultActiveKey="1" size="small" style={{ height: 300 }} type="card">
        <TabPane tab="开仓" key="1" className="pl12">
          <div className="df jsb">
            <div>
              <Radio.Group size="small">
                <Space>
                  <Radio.Button value="large">{withTooltip('限价委托')}</Radio.Button>
                  <Radio.Button value="default">{withTooltip('计划委托')}</Radio.Button>
                </Space>
              </Radio.Group>
            </div>
            <div>
              <Space>
                {withTooltip('全仓')}

                <Button>张</Button>
                <Button>20x</Button>
              </Space>
            </div>
          </div>

          <Radio.Group>
            <Radio value={1}>{withTooltip('只做Maker')}</Radio>
            <Radio value={2}>{withTooltip('IOC')}</Radio>
            <Radio value={3}>{withTooltip('FOK')}</Radio>
          </Radio.Group>

          <div className="df">
            <div className="f1">
              <Input prefix="买入价(USD)" />
              <div className="tar fs12">巴拉巴拉</div>
              <Input prefix="买入量(张)" />
              <div className="tar fs12">巴拉巴拉</div>
              <Slider defaultValue={50} marks={sliderMarks} className="mb0 mt0" />
              <div className="df ac jsb fs12">
                <span className="color-success">可开多：--张</span>
                <span>可用: 7.122BTC</span>
              </div>
              <Button type="primary" className="w100percent">
                买入开多(看涨)
              </Button>
            </div>
            <Divider type="vertical" className="h100percent" />
            <div className="f1">
              <Input prefix="卖出价(USD)" />
              <div className="tar fs12">巴拉巴拉</div>
              <Input prefix="卖出量(张)" />
              <div className="tar fs12">巴拉巴拉</div>
              <Slider defaultValue={50} marks={sliderMarks} className="mb0 mt0" />
              <div className="df ac jsb fs12">
                <span className="color-success">可开多：--张</span>
                <span>可用: 7.122BTC</span>
              </div>
              <Button type="primary" className="w100percent">
                买入开多(看涨)
              </Button>
            </div>
          </div>
        </TabPane>
        <TabPane tab="平仓" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ContentForm;
