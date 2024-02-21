// Import necessary dependencies and components
import React, { useEffect, memo, useState } from 'react';
import { Layout, Drawer, Row, Col, Tooltip, Image, Space } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  MenuOutlined,
  TwitterOutlined,
  UserOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

// Import resources, routes, and components
// import Words from '../resources/words';
import Colors from '../resources/colors';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { isMobileView } from '../services/ViewMode';
import HomePageMenu from '../Routes/HomePageMenu';
// import HomePageRoutes from '../Routes/HomePageRoutes';
import VirjenLogo from '../assets/main-image.png';
import UnijenaLogo from '../assets/uni.png';
// import UnijenaLogo from '../assets/lorem1.png';
import DenbiLogoWhiteLogo from '../assets/denbi-logo-white.svg';
import XLogo from '../assets/logo/x-twitter.svg';
import NfdiLogo from '../assets/lorem2.png';
import DfgLogo from '../assets/lorem3.png';
import ArunaLogo from '../assets/aruna.png';
import SimplePageSearch from '../components/SimplePageSearch';
import SocialMediaFloatButton from '../components/FloatButton';
import classNames from 'classnames/bind';
import { isMobile } from 'react-device-detect';

const { Header, Content, Footer } = Layout;

// Define the HomePage component
const HomePage = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const mobileView = isMobileView() || false;

  const location = useLocation();

  // Function to handle website navigation
  const goToWebsite = (siteName) => {
    switch (siteName) {
      case 'instagram':
        window.open('https://instagram.com', '_blank');
        break;
      case 'whatsapp':
        window.open('https://whatsapp.com', '_blank');
        break;
      case 'linkedin':
        window.open('https://linkedin.com', '_blank');
        break;
      case 'facebook':
        window.open('https://facebook.com', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com/VirJenDB', '_blank');
        break;
      case 'github':
        window.open('https://github.com/VirJenDB/reproducibility-module', '_blank');
        break;
      case 'youtube':
        window.open('https://youtube.com', '_blank');
        break;
      default:
        break;
    }
  };

  // Dropdown menu items
  const items = [
    {
      label: 'Profile',
      key: '1',
    },
    {
      label: 'Language',
      key: '2',
    },
    {
      label: <Link to={'/Logout'}>LogOut</Link>,
      key: '3',
    },
  ];

  const onClick = ({ key }) => {
    if (key === '3') {
      // console.log('Heloo logout');
      // navigate('LogOut');
    }
  };

  // Render the HomePage component
  useEffect(() => {
    const fetchLastUpdate = async () => {
      try {
        const response = await fetch(
          'http://192.168.10.12:7000/api/statsCurrentVersion/'
        );
        if (response.ok) {
          const data = await response.json();
          setLastUpdate(data);
        } else {
          console.error('Error fetching last update data');
        }
      } catch (error) {
        console.error('Error fetching last update data:', error);
      }
    };

    fetchLastUpdate();
  }, []);

  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setShowDrawer(false);
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout className="min-h-screen relative">
      <Header
        className="flex flex-row items-center fixed w-full"
        style={{
          zIndex: 200,
          backgroundColor: '#00798c',
          padding: 40,
        }}
      >
        <Row
          style={{ width: '100%' }}
          align="middle"
          className="flex justify-between"
        >
          <Col>
            <div className="flex lg:hidden">
              <MenuOutlined
                style={{
                  color: Colors.white,
                  fontSize: 20,
                }}
                onClick={toggleDrawer}
              />
            </div>
          </Col>
          <Col className="hidden lg:flex w-full ">
            <div className="flex  w-full align-middle items-center">
              <div
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="hidden lg:flex"
              >
                {lastUpdate && (
                  <Tooltip title={`Last data update: ${lastUpdate.Date}`}>
                    <Link className="flex" to={'/'}>
                      <Image
                        src={VirjenLogo}
                        width={100}
                        height={60}
                        preview={false}
                        title="VirJen DB"
                        style={{ marginTop: '5px' }} // Corrected the syntax error here
                      />
                    </Link>
                    {/* <span style={{ color: 'white', marginLeft: '10px' }}>{`Version: ${lastUpdate.Ver}`}</span> */}
                  </Tooltip>
                )}
              </div>
              <HomePageMenu />
            </div>
          </Col>
        </Row>
      </Header>
      <Layout className="relative min-h-fit">
        <Content
          className="bg-white"
          style={{
            marginTop: 62,
            // برای چابجا کردن محتویات داخل صفحه اول با پدینگ این کار را انجام می دیم
            paddingTop: '18px',
            paddingBottom: '90px',
          }}
        >
          <Drawer
            className="flex lg:hidden"
            title="Menu"
            placement="left"
            onClose={() => setShowDrawer(!showDrawer)}
            open={showDrawer}
            width={'60%'}
          >
            <HomePageMenu type={'mobile'} />
          </Drawer>
          <Row className="w-full">
            <div
              id="app-container"
              className={classNames('w-full')}
              style={{
                padding: 0,
              }}
            >
              {location.pathname === '/' ? <SimplePageSearch /> : <Outlet />}
            </div>
          </Row>
        </Content>

        <Footer
          className="flex flex-row w-full absolute bottom-0"
          style={{
            textAlign: 'center',
            backgroundColor: '#00798c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // Adjust alignment as needed
            padding: '15px 20px', // Add padding as needed
          }}
        >
          <div className="w-full md:justify-between  items-center flex justify-center">
            <div className="justify-center items-center align-middle md:flex hidden">
              {/* {lastUpdate && (
        <Tooltip title={`Last Update: ${lastUpdate.Date}`}>
          <div className="logo-container">
            <Image src={VirjenLogo} width={75} height={45} preview={false} />
            <div style={{ color: 'white', marginTop: '0px' }}>{`Version: ${lastUpdate.Ver}`}</div>
          </div>
        </Tooltip>
      )} */}

              <h2 style={{ color: 'white', marginLeft: '30px' }}>
                © 2024 - All Rights Reserved
              </h2>
            </div>

            <div className="flex">
              <Space size={'large'}>
                {/* <Link className="flex" to={'https://www.uni-jena.de/en'}>
                  <Image
                    preview={false}
                    src={UnijenaLogo}
                    style={{
                      width: '9rem',
                      height: '3rem',
                      borderRadius: '2px',
                    }}
                  />
                </Link>
                <Link className="flex" to={'https://nfdi4microbiota.de/'}>
                  <Image
                    preview={false}
                    src={NfdiLogo}
                    style={{
                      width: '7rem',
                      height: '4rem',
                      borderRadius: '5px',
                    }}
                  />
                </Link>

                <Link className="flex" to={'https://www.denbi.de/'}>
                  <Image
                    preview={false}
                    src={DenbiLogoWhiteLogo}
                    style={{
                      width: '7rem',
                      height: '4rem',
                      borderRadius: '5px',
                    }}
                  />
                </Link>

                <Link className="flex" to={'https://www.dfg.de/en/index.jsp'}>
                  <Image
                    preview={false}
                    src={DfgLogo}
                    style={{
                      width: '7rem',
                      height: '4rem',
                      borderRadius: '5px',
                    }}
                  />
                </Link>
                
                <Link className="flex" to={'https://dev.aruna-storage.org/'}>
                  <Image
                    preview={false}
                    src={ArunaLogo}
                    style={{
                      width: '7rem',
                      height: '2rem',
                      borderRadius: '5px',
                    }}
                  />
                </Link> */}

<Link className="flex" to={'https://www.uni-jena.de/en'} target="_blank" rel="noopener noreferrer">
  <Image
    preview={false}
    src={UnijenaLogo}
    style={{
      width: '9rem',
      height: '3rem',
      borderRadius: '2px',
    }}
  />
</Link>

<Link className="flex" to={'https://nfdi4microbiota.de/'} target="_blank" rel="noopener noreferrer">
  <Image
    preview={false}
    src={NfdiLogo}
    style={{
      width: '7rem',
      height: '4rem',
      borderRadius: '5px',
    }}
  />
</Link>

<Link className="flex" to={'https://www.denbi.de/'} target="_blank" rel="noopener noreferrer">
  <Image
    preview={false}
    src={DenbiLogoWhiteLogo}
    style={{
      width: '7rem',
      height: '4rem',
      borderRadius: '5px',
    }}
  />
</Link>

<Link className="flex" to={'https://www.dfg.de/en/index.jsp'} target="_blank" rel="noopener noreferrer">
  <Image
    preview={false}
    src={DfgLogo}
    style={{
      width: '7rem',
      height: '4rem',
      borderRadius: '5px',
    }}
  />
</Link>

<Link className="flex" to={'https://dev.aruna-storage.org/'} target="_blank" rel="noopener noreferrer">
  <Image
    preview={false}
    src={ArunaLogo}
    style={{
      width: '7rem',
      height: '2rem',
      borderRadius: '5px',
    }}
  />
</Link>




              </Space>
            </div>

            <div className="md:flex hidden">
              <Space size={'large'}>
                <div className="hoverIcon">
                  {/* <YoutubeOutlined
                    style={{ color: 'white', fontSize: '35px' }}
                    onClick={() => goToWebsite('youtube')}
                  /> */}
                </div>
                {/* <div className="hoverIcon">
                  <InstagramOutlined
                    style={{ color: 'white', fontSize: '35px' }}
                    onClick={() => goToWebsite('instagram')}
                  />
                </div> */}
                {/* <div className="hoverIcon">
                  <TwitterOutlined
                    style={{ color: 'white', fontSize: '35px' }}
                    onClick={() => goToWebsite('twitter')}
                  />
                </div> */}
                <div className="hoverIcon">
                  <Link
                    to="https://twitter.com/VirJenDB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      preview={false}
                      src={XLogo}
                      style={{
                        color: 'white',
                        width: '4rem',
                        height: '2rem',
                        borderRadius: '5px',
                      }}
                    />
                  </Link>
                </div>
{/* 
                <div className="hoverIcon">
                  <LinkedinOutlined
                    style={{ color: 'white', fontSize: '35px' }}
                    onClick={() => goToWebsite('linkedin')}
                  />
                </div> */}
                <div className="hoverIcon">
                  {/* <GithubOutlined
                    style={{ color: 'white', fontSize: '35px' }}
                    onClick={() => goToWebsite('github')}
                  /> */}
                </div>
              </Space>
            </div>
            <div className="md:hidden flex">
              <SocialMediaFloatButton />
            </div>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default memo(HomePage);

