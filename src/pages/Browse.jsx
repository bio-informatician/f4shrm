import React, { useState, useEffect } from 'react';
import {
  BookOutlined,
  InfoCircleOutlined,
  MoreOutlined,
  SearchOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import {
  Breadcrumb,
  Button,
  Col,
  Divider,
  Image,
  Input,
  Row,
  Space,
  Spin,
  Tag,
  Tooltip,
  notification,
} from 'antd';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import viralzone from '../assets/logo/viralzone.png';
import Iframe from 'react-iframe';
import classNames from 'classnames';
import ictvLogo from '../assets/logo/ictvLogo.png';
// import ViralZoneIframe from '../components/Hamedcomponents/browes/hook/ViralZoneIframe';
import '../styles/BrowseStyles.css'; // Import your custom CSS file

const routeMaxLength = 100; // Set the maximum length of the breadcrumb history

const { Search } = Input;

const Browse = () => {
  let [route, setRoute] = useState(() => {
    // Retrieve route from local storage on component mount
    const savedRoute = localStorage.getItem('route');
    return savedRoute ? JSON.parse(savedRoute) : [];
  });

  const [viralZoneData, setViralZoneData] = useState([]);

  useEffect(() => {
    getInitialDataForViral();
  }, []);

  const flattenObject = (obj) => {
    const result = {};

    const recurse = (current, parentKey = '') => {
      for (const key in current) {
        // const newKey = parentKey + (parentKey ? '.' : '') + key;
        const newKey = key;

        if (typeof current[key] === 'object' && current[key] !== null) {
          recurse(current[key], newKey);
        } else {
          result[newKey] = current[key];
        }
      }
    };

    recurse(obj);

    return result;
  };

  const getInitialDataForViral = async () => {
    let response = await axios.get(
      `http://192.168.10.12:7000/api/sourceViralZoneDict/`
    );

    if (response.status === 200) {
      let { data } = response;

      const flattenedObject = flattenObject(data);

      console.log('flattenedObject', flattenedObject);

      setViralZoneData(flattenedObject);
    }
  };

  useEffect(() => {
    // Check if route data exists in local storage
    const savedRoute = localStorage.getItem('route');
    if (savedRoute) {
      // If route data exists, set it in the state
      setRoute(JSON.parse(savedRoute));

      // Check if savedRoute is not empty before accessing its elements
      const parsedRoute = JSON.parse(savedRoute);
      if (parsedRoute.length > 0) {
        // Fetch initial data based on the saved route
        const lastItem = parsedRoute[parsedRoute.length - 1];
        getBrowseData(lastItem.parent, lastItem.child);
      } else {
        // Handle the case when savedRoute is an empty array
        // Fetch initial data without specific route parameters
        getBrowseData();
      }
    } else {
      // If no route data in local storage, fetch initial data
      getBrowseData();
    }
  }, []); // Empty dependency array ensures this effect runs only on component mount

  useEffect(() => {
    localStorage.setItem('route', JSON.stringify(route));
  }, [route]);

  let [boxes, setBoxes] = useState([]);
  let [loading, setLoading] = useState(false);
  let [isSearched, setIsSearched] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const getBrowseData = async (name = 'Community', subCategory = 'Virus') => {
    try {
      setLoading(true);
      setSearchText('');
      setIsSearched(false);

      let response = await axios.get(
        `http://192.168.10.12:7000/api/browse/${name},${subCategory}`
      );
      let { data } = response;

      let updatedRoute = [...route];
      if (Object.keys(data[0]).length) {
        for (var key in data[0]) {
          if (data[0].hasOwnProperty(key)) {
            updatedRoute.push({ parent: name, child: data[0][key] });
          }
        }
      }

      updatedRoute = updatedRoute.filter((obj, index) => {
        return (
          index ===
          updatedRoute.findIndex(
            (o) => obj.parent === o.parent && obj.child === o.child
          )
        );
      });

      setRoute(updatedRoute);

      let initialBoxes = Object.entries(data[1]).map(([key, value], index) => ({
        name: key,
        value: value,
        count: data[2][key],
      }));

      // Sorting logic starts here
      const getRankIndex = (rank) => {
        const ranksOrder = [
          'Realm',
          'Subrealm',
          'Kingdom',
          'Subkingdom',
          'Phylum',
          'Subphylum',
          'Class',
          'Subclass',
          'Order',
          'Suborder',
          'Family',
          'Subfamily',
          'Genus',
          'Subgenus',
          'Species',
        ];
        return ranksOrder.indexOf(rank);
      };

      const sortedBoxes = [...initialBoxes].sort((a, b) => {
        const rankAIndex = getRankIndex(a.name);
        const rankBIndex = getRankIndex(b.name);
        return rankAIndex - rankBIndex;
      });
      // Sorting logic ends here

      setBoxes(sortedBoxes);
    } catch (error) {
      console.error('Error occurred:', error);
      // Handle the error, e.g., set an error state
    } finally {
      setLoading(false);
    }
  };

  //IMPORTANT ----->>>>
  const getSpeciesData = async (name = 'Community', subCategory = 'Virus') => {
    navigate(`/Results/Browse/${name}:${subCategory}`, {
      state: { from: 'Browse', value: { name, subCategory } },
    });
  };

  const goToSpecialRoute = (item) => {
    let findedIndex;

    findedIndex = route.findIndex(
      (q) => q.child === item.child && q.parent === item.parent
    );

    if (findedIndex !== -1) {
      route = route.filter((item, index) => index < findedIndex);
      setRoute(route);
    }

    getBrowseData(item.parent, item.child);
  };

  const handleSearch = (query) => {
    navigate(`/Results/HomePage/${query}`, {
      state: { from: 'HomePage', value: query },
    });
  };

  const handleSearchText = async (e) => {
    setBoxes([]);
    setIsSearched(true);

    try {
      let result = await axios.get(
        `http://192.168.10.12:7000/api/searchTaxonomy/${e}`
      );

      if (result.status === 200) {
        const newArray = result.data.data.reduce(
          (accumulator, currentValue) => {
            const index = accumulator.findIndex(
              (obj) => obj.name === currentValue.name_type
            );
            if (index === -1) {
              accumulator.push({
                name: currentValue.name_type,
                value: [currentValue.tree_rank_name],
                count: 1,
              });
            } else {
              accumulator[index].value.push(currentValue.tree_rank_name);
              accumulator[index].count += 1;
            }
            return accumulator;
          },
          []
        );

        // Sorting logic for search results
        const getRankIndex = (rank) => {
          const ranksOrder = [
            'Realm',
            'Subrealm',
            'Kingdom',
            'Subkingdom',
            'Phylum',
            'Subphylum',
            'Class',
            'Subclass',
            'Order',
            'Suborder',
            'Family',
            'Subfamily',
            'Genus',
            'Subgenus',
            'Species',
          ];
          return ranksOrder.indexOf(rank);
        };

        const sortedResults = [...newArray].sort((a, b) => {
          const rankAIndex = getRankIndex(a.name);
          const rankBIndex = getRankIndex(b.name);
          return rankAIndex - rankBIndex;
        });

        setBoxes(sortedResults);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const [searchText, setSearchText] = useState('');

  // Listen for changes in the route state and update the browser's history
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const parent = queryParams.get('parent');
    const child = queryParams.get('child');

    if (parent && child) {
      // If there are parent and child values in the URL, update the route state
      const newRoute = [{ parent, child }];
      setRoute(newRoute);
    }
  }, [location.search]);

  useEffect(() => {
    // Add the current route to the browser's history
    const queryParams = new URLSearchParams();
    const lastItem = route[route.length - 1];
    queryParams.set('parent', lastItem?.parent || '');
    queryParams.set('child', lastItem?.child || '');
    const newUrl = `/Browse?${queryParams.toString()}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  }, [route]);

  const [currentBreadcrumbIndex, setCurrentBreadcrumbIndex] = useState(0);

  const goBack = () => {
    if (currentBreadcrumbIndex > 0) {
      setCurrentBreadcrumbIndex(currentBreadcrumbIndex - 1);
    }
  };

  const goForward = () => {
    if (currentBreadcrumbIndex < route.length - 1) {
      setCurrentBreadcrumbIndex(currentBreadcrumbIndex + 1);
    }
  };

  useEffect(() => {
    if (route.length === 0) {
      setCurrentBreadcrumbIndex(0);
    } else {
      setCurrentBreadcrumbIndex(route.length - 1);
    }
  }, [route]);

  const breadcrumbText = route.map((item) => item.child).join('/');

  const copyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = window.location.href;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    // Optionally, you can provide user feedback or perform other actions after copying
    console.log('Breadcrumbs copied to clipboard!');

    openNotification();
  };

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Copied',
      duration: 5,
    });
  };

  const isKeyInFlattenedObject = (flattenedObj, keyToFind) => {
    return Object.keys(flattenedObj).includes(keyToFind);
  };

  const getValueForKey = (flattenedObj, keyToFind) => {
    return flattenedObj[keyToFind];
  };

  const findInViralZone = (q, type = '') => {
    if (type === 'id') {
      return getValueForKey(viralZoneData, q);
    } else {
      return isKeyInFlattenedObject(viralZoneData, q);
    }
    // if()
  };

  return (
    <Spin spinning={loading}>
      {contextHolder}
      <div className="flex flex-col w-full items-center gap-y-5">
        {/* Description Section */}
        <div className="w-full flex justify-center items-center gap-6">
          <div className="w-4/5 flex flex-col">
            <div>
            <h2 className="text-xl font-bold" style={{ display: 'flex', alignItems: 'center' }}>
  Virus Taxonomy Browsing
  <a
    href="https://ictv.global/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}
  >
    <img
      src={ictvLogo}
      alt="ICTV Logo"
      style={{
        width: '40px',
        height: '30px',
        marginRight: '5px',
      }}
    />
  </a>
</h2>

            </div>
            <div className="flex flex-col">
              <p className="text-base">
                Browse to access virus records based on the latest release from
                the International Committee on Taxonomy of Viruses (ICTV){' '}
                {/* <a
                  href="https://ictv.global/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <img
                    src={ictvLogo}
                    alt="ICTV Logo"
                    style={{
                      width: '40px',
                      height: '30px',
                      marginRight: '5px',
                    }}
                  />
                </a> */}
                . Read more at our
                {/* Use Link component for internal link */}
                <Link
                  to="/DataSources"
                  style={{ padding: '2px', color: '#007bff' }}
                >
                  Data Sources
                </Link>{' '}
                page.
              </p>

              <p className="text-base">
                <strong>How to browse:</strong>
                <br />
                Click on each rank to load the connected subranks. Use the
                breadcrumb trail (e.g., Viruses/.../.../.../... etc) or your
                browser back button to navigate backward. Click on the cards
                icon
                      {'  '}

                <span className="button-sign">
                  {' '}
                  <AppstoreOutlined style={{ fontSize: '16px' }} />
                </span>
                {' '}

                next to any taxa rank to load a search result of all records
                pertaining to that specific taxonomy rank at the species level.
              </p>
            </div>
          </div>
        </div>

        {/* Search Box Section */}
        <div className="w-full flex justify-center  browse-content flex-col py-5 ">
          <div className="w-2/5 mx-auto">
            <Search
              placeholder="Search tax rank..."
              allowClear
              enterButton="Search"
              size="large"
              className="searchInput"
              onSearch={(e) => handleSearchText(e)}
              value={searchText}
              onChange={(e) =>
                e.target.value === ''
                  ? getBrowseData()
                  : setSearchText(e.target.value)
              }
            />
          </div>

          {/* Navigation Section */}
          <div className="navigation">
            {isSearched ? (
              <p className="results">Results For: {searchText}</p>
            ) : (
              <div className="breadcrumbs">
                <button
                  onClick={() => {
                    if (route.length > 1) {
                      goToSpecialRoute(route[route.length - 2]);
                    }
                  }}
                  className="go-back"
                >
                  Go One Step Back
                </button>

                <Breadcrumb separator="/">
                  {route.map((item, index) => (
                    <Breadcrumb.Item
                      key={index}
                      className={`breadcrumb-item ${
                        index === route.length - 1 ? 'current' : ''
                      }`}
                    >
                      <span onClick={() => goToSpecialRoute(item)}>
                        {item.child}
                      </span>
                    </Breadcrumb.Item>
                  ))}
                </Breadcrumb>

                <CopyOutlined
                  style={{ color: 'white', marginLeft: '6px' }}
                  onClick={() => copyToClipboard()}
                />
              </div>
            )}
          </div>

          <br />

          <Row className="flex justify-start w-full p-5" gutter={[10, 20]}>
            {boxes.map((item, index) => (
              <Col
                md={24}
                xs={24}
                xl={24}
                lg={24}
                className={classNames('flex flex-col gap-y-5 box-browse py-5')}
                key={index}
              >
                <div className="w-full text-center myCustomClass">
                  {item.name} ({item.value.length}{' '}
                  {isSearched ? '' : `/ ${item.count}`})
                </div>

                {/*               
              <div className="w-full text-center">
                {item.name} ({item.value.length}{' '}
                {isSearched ? '' : `/ ${item.count}`})
              </div> */}
                <Divider className="p-0 m-0" />
                <div className="flex gap-3 w-full flex-wrap">
                  {item.value.map((q, index) => (
                    <div
                      className="flex flex-row items-center justify-between tag-box"
                      key={index}
                    >
                      <Tag
                        color={item.name === 'Species' ? '#f0f0f0' : '#88d9e6'}
                        className="flex items-center justify-center w-full cursor-pointer tag-class whitespace-pre-wrap"
                        style={{ overflow: 'hidden' }} // Add this style

                        onClick={() =>
                          item.name !== 'Species'
                            ? getBrowseData(item.name, q)
                            : getSpeciesData(item.name, q)
                        }
                      >
                        <div className="flex items-center gap-x-2 custom-tooltip">
                          <span
                            className={
                              'flex items-center justify-center py-2 text-base'
                            }
                            style={{ color: 'black' }}
                          >
                            {q}
                          </span>

                          {findInViralZone(q) && (
                            <Tooltip
                              title={
                                <Iframe
                                  url={`https://viralzone.expasy.org/taxid/${findInViralZone(
                                    q,
                                    'id'
                                  )}`}
                                  width="100%"
                                  height="100%"
                                  position="relative"
                                />
                              }
                              overlayInnerStyle={{
                                width: '20.7rem',
                                height: '20.7rem',
                              }}
                            >
                              {/* برای اضافه کردن ویرال زون از اینجا استفاده شود */}
                              {/* <InfoCircleOutlined
                                style={{ color: 'black', fontSize: '20px' }}
                              /> */}

                              <Image
                                src={`${viralzone}`}
                                preview={false}
                                style={{
                                  width: '25px',
                                  height: '25px',
                                  borderRadius: '4px',
                                  position: 'relative',
                                  top: '1px',
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(
                                    `https://viralzone.expasy.org/taxid/${findInViralZone(
                                      q,
                                      'id'
                                    )}`,
                                    '_blank'
                                  );
                                }}
                              />
                            </Tooltip>
                          )}

                          {/* <Tooltip title="Additional Information in viralzone.expasy.org">
                                <Link to={`https://viralzone.expasy.org/${item['tax_id']}`}>
                                  <Image src={viralzone} width={100} preview={false} style={{ marginRight: '10px' }} />
                                </Link>
                              </Tooltip> */}
                        </div>
                      </Tag>
                      {item.name !== 'Species' && (
                        <Button
                          style={{
                            minHeight: '2.625rem',
                            minWidth: '2rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          type="primary"
                          icon={
                            <div className="flex flex-row justify-center items-center">
                              <Tooltip title="Card view of all sample records belonging to any species under this rank name">
                                <AppstoreOutlined
                                  style={{ fontSize: '24px' }}
                                />
                              </Tooltip>
                            </div>
                          }
                          onClick={() => getSpeciesData(item.name, q)}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Spin>
  );
};

export default Browse;
