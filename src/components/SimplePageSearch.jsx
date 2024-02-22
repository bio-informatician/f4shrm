import { Button, Col, Divider, Image, Row, Typography } from 'antd';
import { Input, Space } from 'antd';
// import { AudioOutlined,DownloadOutlined, SearchOutlined } from '@ant-design/icons';

// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { usePageContext } from '../components/Context';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PieChart from './PieChart';
// import HomePageTable from './HomePageTable';
import VennDiagram from './VennDiagram';
import Top10GeneraBarChart from '../components/Hamedcomponents/Top10GeneraBarChart';
import MostSearchedSection from '../components/Hamedcomponents/MostSearchedSection';
import GeneralSummaryBarChart from '../components/Hamedcomponents/GeneralSummaryBarChart';
// import AcceptancePopup from '../components/Hamedcomponents/AcceptancePopup';
// import { Line } from 'react-chartjs-2';

const { Search } = Input;
const { Text } = Typography;

const SimplePageSearch = () => {
  const [vennData, setVennData] = useState([]); // Add this line

  const { searched, setSearched } = usePageContext();

  let mostRecommendSearched = [
    {
      key: 'SARS-CoV-2',
      value: 'SARS-Cov-2',
    },
    {
      key: 'Bacteriophages',
      value: 'Bacteriophages',
    },
    {
      key: 'Influenza A virus',
      value: 'Influenzaviruses',
    },
    {
      key: 'Archaea Viruses',
      value: 'ArchaealViruses',
    },
    {
      key: 'NonSARS-CoV-2',
      value: 'NonSARS-CoV-2',
    }
  ];

  const navigate = useNavigate();

  const onSearch = (value) => {
    setSearched(value);
    navigate(`Results/${value}`, {
      state: { from: 'SimplePageSearch', value },
    });
  };

  // for the button click
  const goToResults = (item) => {
    setSearched(item);
    navigate(`/Results/RecommendSearch/`, {
      state: { from: 'RecommendSearch', value: `${item.value}` },
    });
  };

  const handleDownloadClick = (item) => {
    // Handle the download logic here for the item
    console.log('Downloading', item);
  };

  const [chartData, setChartData] = useState({});
  const [secondChartData, setSecondChartData] = useState({});
  const [thirdChartData, setThirdChartData] = useState({});

  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState({});

  const [ganttChartData, setGanttChartData] = useState([]);

  //   const barColors = [

  //   '#00429d', '#ef6548', '#5fc463', '#ffd700', '#8c564b',
  //   '#4b0082', '#ff69b4', '#2ca02c', '#ff7f0e', '#1f77b4'
  // ];

  const barColors = [
    '#999999',
    '#E69F00',
    '#56B4E9',
    '#009E73',
    '#F0E442',
    '#0072B2',
    '#D55E00',
    '#CC79A7',
  ];

  useEffect(() => {
    const fetchGanttChartData = async () => {
      try {
        const response = await fetch(
          'http://192.168.10.12:7000/api/statsSummaryChart/'
        );
        const data = await response.json();
        setGanttChartData(data);
      } catch (error) {
        console.error('Error fetching Gantt chart data:', error);
      }
    };

    const thirdBackgroundColors = [
      '#00429d',
      '#ef6548',
      '#5fc463',
      '#ffd700',
      '#8c564b',
      '#4b0082',
      '#CC79A7',
      '#009E73',
      '#ff7f0e',
      '#1f77b4',
    ];

    const secondBackgroundColors = [
      '#00429d',
      '#ef6548',
      '#5fc463',
      '#ffd700',
      '#8c564b',
      '#4b0082',
      '#CC79A7',
      '#009E73',
      '#ff7f0e',
      '#1f77b4',
    ];
    const FirstBackgroundColors = [
      '#00429d',
      '#ef6548',
      '#5fc463',
      '#ffd700',
      '#8c564b',
      '#4b0082',
      '#CC79A7',
      '#009E73',
      '#ff7f0e',
      '#1f77b4',
    ];

    const fetchFirstChart = async () => {
      const response = await fetch(
        'http://192.168.10.12:7000/api/statsDataSource/'
      );
      const result = await response.json();

      const labels = result.map((item) => item.name);
      const values = result.map((item) => item.count);

      setChartData({
        title: (
          <span title="Composition of the database according to data source.">
            <b>Data Sources</b>
          </span>
        ),
        chartData: {
          labels: labels,
          datasets: [
            {
              label: '# of Entities',
              data: values,
              backgroundColor: FirstBackgroundColors.slice(0, values.length),
              borderColor: FirstBackgroundColors.slice(0, values.length),
              borderWidth: 1,
            },
          ],
        },
      });
    };
    const fetchSecondChart = async () => {
      const response = await fetch(
        'http://192.168.10.12:7000/api/statsBaltimore/'
      );
      const result = await response.json();

      const labels = result.map((item) => item.Baltimore_Class);
      const values = result.map((item) => item.count);

      setSecondChartData({
        title: (
          <div style={{ textAlign: 'center' }}>
            <span title="Composition of the database according to Baltimore Class.">
              <b> Baltimore Classes</b>
            </span>
            <br />
            <span style={{ fontSize: '14px' }}>
              (To remove a class click on legend){' '}
              {/* Add as many stars as needed */}
            </span>
          </div>
        ),
        // title: 'Baltimore Classes Entities',
        chartData: {
          labels: labels,
          datasets: [
            {
              label: '# of Entities',
              data: values,
              backgroundColor: secondBackgroundColors.slice(0, values.length),
              borderColor: secondBackgroundColors.slice(0, values.length),
              borderWidth: 1,
            },
          ],
        },
      });
    };
    const fetchThirdChart = async () => {
      const response = await fetch(
        'http://192.168.10.12:7000/api/statsHost/'
      );
      const result = await response.json();

      const labels = result.map((item) => item.name);
      const values = result.map((item) => item.count);

      setThirdChartData({
        title: (
          <div style={{ textAlign: 'center' }}>
            <span title="Composition of the database according to Host.">
              <b>Hosts</b>
            </span>
            <br />
            <span style={{ fontSize: '14px' }}>
              (To remove a host click on legend){' '}
              {/* Add the text you want to display under "Hosts" */}
            </span>
          </div>
        ),
        chartData: {
          labels: labels,
          datasets: [
            {
              label: '# of Entities',
              data: values,
              backgroundColor: thirdBackgroundColors.slice(0, values.length),
              borderColor: thirdBackgroundColors.slice(0, values.length),
              borderWidth: 1,
            },
          ],
        },
      });
    };

    const fetchVennData = async () => {
      try {
        const response = await fetch(
          'http://192.168.10.12:7000/api/statsDataSource/'
        );
        const data = await response.json();
        setVennData(data);
      } catch (error) {
        console.error('Error fetching Venn diagram data:', error);
      }
    };

    fetchVennData();

    fetchGanttChartData();
    // fetchTableData();
    fetchFirstChart();
    fetchSecondChart();
    fetchThirdChart();
  }, []);

  return (
    <div className="flex justify w-full simpleSearchBackGround items-center flex-col min-h-screen">
        {/* <AcceptancePopup /> */}

      {/* <div>
     <div className="sm:w-1/2 flex  w-full flex-col gap-y-8 px-4 custom-button py-20 pb-5 ">
        <div className="w-full justify items-left text-justify">
        <p className="text-white text-base space-evenly font-semibold bg-black bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg shadow-lg">
          <span className="text-black ">
          Access publicly accessible virus sequences and metadata. Find and download data using the keyword search below.
          </span>
        </p>
      </div>

          <div>
            <Search
              placeholder="Virus name, Host, Abbreviation ..."
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
              className="searchInput"
                            
            />
            <br />
            <br />

            <a href="AdvancedSearch" style={{ padding: '30px',color:'#B40404',fontWeight:'bold' }}>Advanced Search</a>

          </div>







          <div className="w-full flex gap-x-5 justify-center items-center flex-col gap-y-4">
         <div className="text-black font-bold pb-2 border-b border-black mb-1">Suggested Searches</div>
        
      <MostSearchedSection 
        mostSearchedItems={mostRecommendSearched} 
        onSearchItemClick={goToResults}
        onDownloadItemClick={handleDownloadClick}
        
      />

        </div>
      </div>


     </div> */}

      <div
        style={{
          background: `linear-gradient(to bottom, rgba(0, 121, 140, 1),  #f2f2f2)`,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {' '}
        <div className="sm:w-1/2 flex w-full flex-col gap-y-8 px-4 custom-button py-20 pb-5">
          <div className="w-full justify items-left text-justify">
            <p className="text-white text-base space-evenly font-semibold bg-black bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg shadow-lg">
              <span className="text-white ">
                Welcome to VirJenDB! We are a web service for accessing publicly
                available virus sequences and metadata. Find and download data
                using the keyword search below.{' '}
              </span>
            </p>
          </div>

          <div>
            <Search
              placeholder="Virus name, Host, Abbreviation ..."
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
              className="searchInput"
            />
            <br />
            <br />

            <a
              href="AdvancedSearch"
              style={{ padding: '30px', color: '#B40404', fontWeight: 'bold' }}
            >
              Advanced Search
            </a>
          </div>

          <div className="w-full flex gap-x-5 justify-center items-center flex-col gap-y-4">
            <div className="text-black font-bold pb-2 border-b border-black mb-1">
              Suggested Searches
            </div>

            <MostSearchedSection
              mostSearchedItems={mostRecommendSearched}
              onSearchItemClick={goToResults}
              onDownloadItemClick={handleDownloadClick}
            />
          </div>
          <br />
          <br />
          
        </div>
      </div>

      {/* <div className="w-full px-5 m-0">
        <Divider style={{ backgroundColor: '#D3D3D3' }} dashed={true} />
      </div> */}

      <Row
        className="flex flex-row  w-full justify-evenly p-5 items-center"
        gutter={[0, 40]}
      >
        <Col
          xs={24}
          md={8}
          className="w-full flex flex-col justify-center items-center overflow-auto"
        >
          <Top10GeneraBarChart />
        </Col>

        <Col
          xs={24}
          md={8}
          className="w-full flex flex-col justify-center items-center overflow-auto"
        >
          <GeneralSummaryBarChart />
        </Col>
        <Col
          md={8}
          xs={24}
          className="w-full flex flex-col justify-center items-center pie-chart-class"
        >
          <Text
            style={{ textAlign: 'center', fontSize: '24px', color: 'black' }}
          >
            {chartData.title}
          </Text>

          {/* Add the text below the Data Sources title */}
          <Text style={{ color: 'black', fontSize: '14px' }}>
            (To remove a data source click on legend)
          </Text>

          {Object.keys(chartData.chartData || {}).length ? (
            <div className="mb-4 sm:mb-0 w-full h-full flex flex-col">
              {/* <PieChart chartData={chartData.chartData} /> */}
              <VennDiagram chartData={vennData} />
            </div>
          ) : (
            <div className="text-white">Waiting To Load Chart ...</div>
          )}
        </Col>

        <Divider style={{ backgroundColor: '#D3D3D3' }} dashed={true} />
        <Col
          xs={24}
          md={12}
          className="w-full flex flex-col  justify-center items-center "
        >
          <Text className="text-lg" style={{ color: 'black' }}>
            {secondChartData.title}
          </Text>

          {Object.keys(secondChartData.chartData || {}).length ? (
            <div className="mb-4 sm:mb-0 w-full h-full">
              <PieChart chartData={secondChartData.chartData} />
            </div>
          ) : (
            <div className="text-white">Waiting To Load Chart ...</div>
          )}
        </Col>

        <Col
          xs={24}
          md={12}
          className="w-full flex flex-col  justify-center items-center "
        >
          <Text className="text-lg" style={{ color: 'black' }}>
            {thirdChartData.title}
          </Text>

          {Object.keys(thirdChartData.chartData || {}).length ? (
            <div className="mb-4 sm:mb-0 w-full h-full">
              <PieChart chartData={thirdChartData.chartData} />
            </div>
          ) : (
            <div className="text-white">Waiting To Load Chart ...</div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SimplePageSearch;
