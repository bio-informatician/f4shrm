import React from "react";
import { Carousel } from "antd";
import Iframe from "react-iframe";
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CompanyCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="w-full flex flex-col">
    <Carousel afterChange={onChange} autoplay >
      <div>
        <div style={contentStyle}>1</div>
      </div>
      <div>
        <div style={contentStyle}>2</div>
      </div>
      <div>
        <div style={contentStyle}>3</div>
      </div>
      <div>
        <div style={contentStyle}>4</div>
      </div>
    </Carousel>

    <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    // extra={<Button type="primary">Next</Button>}
  />
    
    </div>
  );
};

export default CompanyCarousel;
