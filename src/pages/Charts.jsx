import { Col, Row } from 'antd';
import BarChart from '../components/BarChart';
import LineChart from '../components/BubbleCharts';
import PieChart from '../components/PieChart';
import PolarCharts from '../components/PolarCharts';
import RadarCharts from '../components/RadarCharts';
import StackedCharts from '../components/StackedCharts';


const ChartsPage = () => {
  return (
    <Row className="flex w-full items-center" gutter={[10, 20]}>
      {/* <Col md={12} xs={24}>
        <PieChart />
      </Col> */}
      <Col md={12} xs={24}>
        <BarChart />
      </Col>
      <Col md={12} xs={24}>
        <RadarCharts />
      </Col>
      <Col md={12} xs={24}>
        <StackedCharts />
      </Col>
      <Col md={24} xs={24}>
        <PolarCharts />
      </Col>
      <Col md={24} xs={24}>
        <LineChart />
      </Col>
    </Row>
  );
};

export default ChartsPage;
