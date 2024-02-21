import React, { useEffect, useState } from 'react';
import { Menu, Row, Typography, Col, Space, Avatar, Input, Button } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  MenuOutlined,
  BulbOutlined, // Light mode icon
  LineChartOutlined, // Night mode icon
} from '@ant-design/icons';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Words from '../resources/words';
import { isMobile } from 'react-device-detect';

import SimplePageSearchBar from '../components/SimplePageSearchBar';

import '../styles/HomePageMenu.css'; // Import the CSS file

const { Paragraph, Text } = Typography;
const { Search } = Input;

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const HomePageMenu = ({ type }) => {
  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };

  // Add Page Route Links
  const items = [
    getItem('Home', ''),
    getItem('Advanced Search', 'AdvancedSearch'),
    getItem('Browse', 'Browse'),
    getItem('Downloads', 'Downloads'),
    {
      ...getItem('About', 'About'),
      children: [
        getItem('About Us', 'AboutUs', null, null, 'sub'),
        getItem('Contact Us', 'ContactUs', null, null, 'sub'),
        getItem('Data Sources', 'DataSources', null, null, 'sub'),
        // getItem('Downloads', 'Downloads', null, null, 'sub'),
        getItem('FAQ', 'Faq', null, null, 'sub'),
        getItem('Legals', 'Legals', null, null, 'sub'),
        getItem('Resources', 'Resources', null, null, 'sub'),
        getItem('News', 'News', null, null, 'sub'),
      ],
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const isResultsPage = location.pathname.includes('Results');

  const onClick = (e) => {
    navigate(`/${e.key}`);
  };

  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onSearch = (value) => {
    // Handle search logic
  };

  // State for night mode (true = night mode, false = light mode)
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <div className={`w-full ${isNightMode ? 'night-mode' : ''}`}>
      <Row className="flex justify-center">
        <Col
          style={{ width: '100%' }}
          className={
            type === 'mobile' ? 'customMobileMenu' : 'customDesktopMenu'
          }
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: type === 'mobile' ? 'column' : 'row',
            }}
          >
            <Menu
              id="MAINMENU"
              mode={type === 'mobile' ? 'vertical' : 'horizontal'}
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              className="disable-ant-dropdown-hover-effect drawerMenu"
              style={{
                backgroundColor: isNightMode
                  ? 'black'
                  : type === 'mobile'
                  ? 'white'
                  : '#00798c',
                color: isNightMode ? 'white' : 'white',
                height: '100%',
                // width: '45%',
                padding: '8px',
                marginLeft: '0px',
                width: '100%',
              }}
              items={items}
              onClick={onClick}
            />
            {/* Conditionally render the SimplePageSearchBar */}
            {!isResultsPage && <SimplePageSearchBar type={type} />}

            {/* Add night mode / light mode toggle button */}
            {/* <Button
              icon={isNightMode ? <LineChartOutlined /> : <BulbOutlined />}
              onClick={toggleNightMode}
              type="link"
              className="night-mode-toggle"
            >
              {isNightMode ? 'Light Mode' : 'Night Mode'}
            </Button> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePageMenu;
