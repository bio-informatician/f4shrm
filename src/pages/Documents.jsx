import React from 'react';
import { Collapse, Divider, Space } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const About = () => (
  <div className="w-full flex flex-col gap-5">
    <div className="w-full justify-center items-center text-center text-lg font-bold">
      About Page
    </div>
    <Divider className="mt-2" />
    <div className="w-full flex justify-center items-center">
      <Space
        direction="vertical"
        className="flex w-full justify-center items-center"
      >
        <Collapse collapsible="header" style={{ width: '60vw' }}>
          <Panel
            header="This panel can only be collapsed by clicking text"
            key="1"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="icon" style={{ width: '60vw' }}>
          <Panel
            header="This panel can only be collapsed by clicking icon"
            key="2"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="icon" style={{ width: '60vw' }}>
          <Panel
            header="This panel can only be collapsed by clicking icon"
            key="3"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="icon" style={{ width: '60vw' }}>
          <Panel
            header="This panel can only be collapsed by clicking icon"
            key="4"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="icon" style={{ width: '60vw' }}>
          <Panel
            header="This panel can only be collapsed by clicking icon"
            key="5"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="icon" style={{ width: '60vw' }}>
          <Panel
            header="This panel can only be collapsed by clicking icon"
            key="6"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="icon" style={{ width: '60vw' }}>
          <Panel
            header="This panel can only be collapsed by clicking icon"
            key="7"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="icon" style={{ width: '60vw' }}>
          <Panel
            header="This panel can only be collapsed by clicking icon"
            key="8"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
        <Collapse collapsible="icon" style={{ width: '60vw' }}>
          <Panel
            header="This panel can only be collapsed by clicking icon"
            key="9"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Space>
    </div>
  </div>
);

export default About;
