import { Link, useLocation } from 'react-router-dom';
import {
  Input,
  Table,
  Image,
  Button,
  Pagination,
  Row,
  Col,
  Card,
  Tooltip,
  notification,
} from 'antd';
import {
  CopyOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
  ShareAltOutlined,
  EditOutlined,
  CloudDownloadOutlined,
  SearchOutlined,
} from '@ant-design/icons';

import { memo, useEffect, useState } from 'react';
import FilterColumnModal from '../components/FilterColumnModal';
import { usePageContext } from '../components/Context';
import axios from 'axios';
import { debounce, findIndex } from 'lodash';
import RefineDrawer from '../components/RefineDrawer';
import { isMobile } from 'react-device-detect';
import bvbrclogo from '../assets/bvbrc.png';
import ncbiLogo from '../assets/ncbi.png';
import pubMedLogo from '../assets/PubMedLogo.png';
import CardSkeleton from '../components/skeleton';
import queryString from 'query-string';
import OverViewDrawer from '../components/OverViewDrawer';
import SearchTermDownloadButton from '../components/Hamedcomponents/results/SearchTermDownloadButton';

import classNames from 'classnames';

import '../styles/ResultsPage.css'; // Make sure the file path is correct
import { CSVLink } from 'react-csv';

const VIEW_PREFERENCE_KEY = 'user_view_preference'; // Key to store the user's view preference in localStorage

const ResultsPage = () => {
  // State variables
  let [Data, setData] = useState([]); // Data for the page
  let location = useLocation(); // Get the current URL location

  const { state } = useLocation(); // Get the state from the location
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // Keys of selected rows in the table
  const [selectedRow, setSelectedRow] = useState([]); // Selected row data
  let [isTableView, setIsTableView] = useState(false); // Flag to determine whether the view is in table mode or not
  const [pageNumber, setPageNumber] = useState(1); // Current page number
  const [pageTotalNumber, setPageTotalNumber] = useState(10); // Total number of pages

  let [initialColumns, setInitialColumns] = useState([]); // Initial column configuration

  let [columns, setColumns] = useState(initialColumns); // Column configuration for the table

  let [loading, setLoading] = useState(false); // Loading state

  const [advText, setAdvText] = useState(''); // Advanced search text
  const [backendSearchTerm, setBackendSearchTerm] = useState([]); // Search terms used for backend search
  // const [advTextCount, setAdvTextCount] = useState(''); // Advanced search text
  // const [backendSearchTermCount, setBackendSearchTermCount] = useState([]); // Search terms used for backend search
  const [totalCount, setTotalCount] = useState(null); // State to store total count

  const {
    checkedList,
    setSelectedRowInContext,
    initialContextColumns,
    setInitialContextColumns,
  } = usePageContext(); // Access context variables and functions

  // hzhz
  // Load user's view preference from localStorage on component mount

  useEffect(() => {
    const storedViewPreference = localStorage.getItem(VIEW_PREFERENCE_KEY);

    if (storedViewPreference === 'table') {
      console.log('result iss');
      setIsTableView(true);
    }
  }, []); // Run the effect when the isTableView state changes

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = () => {
    const { from, value } = location.state || {};

    const urlString = location.pathname || '';
    const parts = urlString.split('/');

    let fromPageUrlString = '';
    let sercheadPhrase = '';

    console.log('partspartspartsparts', parts);

    if (parts.length >= 2) {
      fromPageUrlString = parts[2] || '';
      sercheadPhrase = parts[3] || '';
    }

    let fromPage = from || fromPageUrlString || '';
    let searchedValue = value || sercheadPhrase || '';

    console.log('fromPage', fromPage, 'searchedValue', searchedValue);

    getInitialColumns().then(() => {
      if (searchedValue && fromPage === 'SimpleSearch') {
        // If the state value is from simple search
        handleSimpleSearch(searchedValue, 'SimpleSearch'); // Handle simple search
        setAdvText(searchedValue); // Set advanced search text
      } else if (searchedValue && fromPage === 'SimplePageSearch') {
        // If the state value is from simple page search
        handleSimpleSearch(searchedValue, 'SimplePageSearch'); // Handle simple page search
        setAdvText(searchedValue); // Set advanced search text
      } else if (
        searchedValue &&
        (fromPage === 'SimplePageSearchBar' || fromPage === 'HomePage')
      ) {
        // If the state value is from simple page search
        handleSimpleSearch(searchedValue, 'SimplePageSearchBar'); // Handle simple page search
        setAdvText(searchedValue); // Set advanced search text

        // hhhhhhhhhhhhh
      } else if (searchedValue && fromPage === 'Advanced') {
        // If the state value is from advanced search
        handleAdvancedSearch(searchedValue); // Handle advanced search
        setAdvText(searchedValue); // Set advanced search text
      } else if (searchedValue && fromPage === 'Genera10') {
        // If the state value is from advanced search
        getGeneraData(searchedValue); // Handle advanced search
        setAdvText(searchedValue); // Set advanced search text
      } else if (fromPage === 'Browse') {
        let name = '';
        let subCategory = '';

        if (!value) {
          let splitSearchedText = sercheadPhrase.split(':');
          searchedValue = {
            name: splitSearchedText[0],
            subCategory: splitSearchedText[1],
          };
        }

        name = searchedValue.name;
        subCategory = searchedValue.subCategory;

        console.log('searchedValue', searchedValue);

        // If the state value is from browse
        getSpeciesData(searchedValue); // Fetch species data
        setAdvText(`${name}  ${subCategory ? `/ ${subCategory}` : ''} `); // Set advanced search text
      } else if (fromPage === 'SimpleBrowse') {
        // If the state value is from simple browse
        getSimpleBrowseData(searchedValue); // Fetch simple browse data
        setAdvText(searchedValue); // Set advanced search text
      } else if (fromPage === 'RecommendSearch') {
        // If the state value is from simple browse
        getRecommendSearchData(searchedValue); // Fetch simple browse data
        setAdvText(searchedValue); // Set advanced search text
      }
    });
  };

  // Function to handle view preference change and store it in localStorage
  const handleViewPreferenceChange = (view) => {
    setIsTableView(view === 'table');
    localStorage.setItem(VIEW_PREFERENCE_KEY, view);

    getInitialData();
  };

  const getInitialColumns = async () => {
    try {
      setLoading(true); // Set loading state to true
      let result = await axios.get(`http://192.168.10.12:7000/api/searchTableColNames/`); // Fetch data from the specified URL

      let { data } = result.data;

      let columnsArray = [];

      if (data.length) {
        let columnsObject = data[0];
        let n = 0;

        // Iterate over the columnsObject and push column objects to columnsArray
        for (const [key, value] of Object.entries(columnsObject)) {
          columnsArray.push({
            title: value,
            dataIndex: key,
            ellipsis: true,
            key: key,
            fixed: n > 0 && n < 4 && !isMobile && 'left',
            render: (name) => (
              <p
                style={{
                  wordWrap: 'break-word',
                  wordBreak: 'break-word',
                  whiteSpace: 'nowrap',
                }}
              >
                {name ? (name === 'Null' ? '-' : name) : '-'}
              </p>
            ),
            sorter: (a, b) => {
              if (a[key] && b[key]) {
                return a[key]?.localeCompare(b[key]);
              } else {
                return a[key] - b[key];
              }
            },
            width: value.length > 10 ? value.length * 10 : value.length * 20,
          });
          n++;
        }

        var a = columnsArray;
        var b = a.shift();
        a.push(b);

        setInitialColumns(columnsArray);
        if (columnsArray.length) {
          setInitialContextColumns(columnsArray);
        }
        setColumns(columnsArray.slice(0, 7)); // Set columns state with a subset of columnsArray
        // Alternatively, you can set all columns:
        // setColumns(columnsArray);

        setLoading(false); // Set loading state to false
      }
    } catch (error) {
      console.log('Error', error);
      setLoading(false); // Set loading state to false in case of an error
    }
  };

const handleSimpleSearch = debounce(async (value, page) => {
  try {
    setLoading(true); // Set loading state to true

    const storedViewPreference = localStorage.getItem(VIEW_PREFERENCE_KEY);
    let isTableView = false; // Declare isTableView

    if (storedViewPreference === 'table') {
      isTableView = true;
    }

    const result = await axios.get(
      isTableView
        ? `http://192.168.10.12:7000/api/searchTable/${value ? value : state.value}`
        : `http://192.168.10.12:7000/api/searchCard/${value ? value : state.value}`
    );

    const { data } = result.data;
    setTotalCount(result?.data?.totalcount);

    data?.map((item, index) => {
      item.key = index + 1;
    });

    setTimeout(() => {
      setSelectedRowKeys([]);
      if (result.data.searchedterm) {
        backendSearchTerm.push(result.data.searchedterm);
        setBackendSearchTerm([...backendSearchTerm]); // Assuming backendSearchTerm is an array
      }
      setData(data);
    }, 200);

    setLoading(false); // Set loading state to false
  } catch (error) {
    console.log('Error', error);
    setLoading(false); // Set loading state to false in case of an error
  }
});


  const handleAdvancedSearch = async (value) => {
    try {
      setLoading(true); // Set loading state to true

      const storedViewPreference = localStorage.getItem(VIEW_PREFERENCE_KEY);
      if (storedViewPreference === 'table') {
        isTableView = true;
      } else {
        isTableView = false;
      }

      let result = await axios.get(
        isTableView
          ? `http://192.168.10.12:7000/api/searchAdvTable/${
              value ? value : state.value
            }`
          : `http://192.168.10.12:7000/api/searchAdvCard/${
              value ? value : state.value
            }`
      );

      let { data } = result.data;
      setTotalCount(result?.data?.totalcount);

      data.map((item, index) => {
        item.key = index + 1;
      });

      setTimeout(() => {
        setSelectedRowKeys([]);
        if (result.data.searchedterm) {
          backendSearchTerm.push(result.data.searchedterm);
          setBackendSearchTerm(backendSearchTerm);
        }
        setData(data);
      }, 200);

      setLoading(false); // Set loading state to false
    } catch (error) {
      console.log('Error', error);
      setLoading(false); // Set loading state to false in case of an error
    }
  };

  const getSpeciesData = async (value) => {
    try {
      setLoading(true); // Set loading state to true

      const storedViewPreference = localStorage.getItem(VIEW_PREFERENCE_KEY);
      if (storedViewPreference === 'table') {
        isTableView = true;
      } else {
        isTableView = false;
      }

      let { name, subCategory } = value;
      let results = await axios.get(
        `http://192.168.10.12:7000/api/taxonomyRank${
          !isTableView ? 'Card' : ''
        }/${name},${subCategory}`
      );

      let { data } = results?.data;
      setTotalCount(results?.data?.totalcount);

      data?.map((item, index) => {
        item.key = index + 1;
      });

      setTimeout(() => {
        setSelectedRowKeys([]);
        if (results.data.searchedterm) {
          backendSearchTerm.push(results.data.searchedterm);
          setBackendSearchTerm(backendSearchTerm);
        }
        setData(data || []);
      }, 200);
    } catch (error) {
      console.log('Error', error);
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  const getRecommendSearchData = async (value) => {
    try {
      setLoading(true); // Set loading state to true

      const storedViewPreference = localStorage.getItem(VIEW_PREFERENCE_KEY);
      if (storedViewPreference === 'table') {
        isTableView = true;
      } else {
        isTableView = false;
      }

      let results;

      if (!isTableView) {
          results = await axios.get(`http://192.168.10.12:7000/api/searchCard${value}/`);
      } else {
          results = await axios.get(`http://192.168.10.12:7000/api/searchTable${value}/`);
      };

      let { data } = results?.data;
      setTotalCount(results?.data?.totalcount);

      data?.map((item, index) => {
        item.key = index + 1;
      });

      setTimeout(() => {
        setSelectedRowKeys([]);
        if (results.data.searchedterm) {
          backendSearchTerm.push(results.data.searchedterm);
          setBackendSearchTerm(backendSearchTerm);
        }
        setData(data || []);
      }, 200);
    } catch (error) {
      console.log('Error', error);
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  
  const getGeneraData = async (value) => {
    try {
      setLoading(true); // Set loading state to true

      const storedViewPreference = localStorage.getItem(VIEW_PREFERENCE_KEY);
      if (storedViewPreference === 'table') {
        isTableView = true;
      } else {
        isTableView = false;
      }

      let results;

      if (!isTableView) {
          results = await axios.get(`http://192.168.10.12:7000/api/searchAdvCard/${value}[Genus]`);
      } else {
          results = await axios.get(`http://192.168.10.12:7000/api/searchAdvTable/${value}[Genus]`);
      };

      let { data } = results?.data;
      setTotalCount(results?.data?.totalcount);

      data?.map((item, index) => {
        item.key = index + 1;
      });

      setTimeout(() => {
        setSelectedRowKeys([]);
        if (results.data.searchedterm) {
          backendSearchTerm.push(results.data.searchedterm);
          setBackendSearchTerm(backendSearchTerm);
        }
        setData(data || []);
      }, 200);
    } catch (error) {
      console.log('Error', error);
    } finally {
      setLoading(false); // Set loading state to false
    }
  };


  const getSimpleBrowseData = async (value) => {
    try {
      setLoading(true); // Set loading state to true

      const storedViewPreference = localStorage.getItem(VIEW_PREFERENCE_KEY);
      if (storedViewPreference === 'table') {
        isTableView = true;
      } else {
        isTableView = false;
      }

      result = await axios.get(
        `http://192.168.10.12:7000/api/searchTaxonomy/viria/${value}`
      ); // Make a GET request to the specified URL
      let { data } = result?.data; // Destructure the data from the response

      data.map((item, index) => {
        item.key = index + 1; // Add a "key" property to each item in the data array
      });

      setData(data); // Set the data state with the fetched data

      if (result.data.searchedterm) {
        backendSearchTerm.push(result.data.searchedterm); // Add the searched term to the backendSearchTerm array
        setBackendSearchTerm(backendSearchTerm); // Update the backendSearchTerm state
      }
    } catch (error) {
      console.log('Error', error); // Log any errors that occur
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  const childToParent = (childData) => {
    let columns = [...initialColumns]; // Create a copy of the initialColumns array
    let finded = columns.filter((item) => childData.includes(item.title)); // Filter the columns array based on the childData
    setColumns(finded); // Update the columns state with the filtered columns
  };

  const onSelectChange = (newSelectedRowKeys, selectedRows) => {
    setSelectedRowKeys(newSelectedRowKeys); // Update the selectedRowKeys state with the new selected row keys
    setSelectedRowInContext(selectedRows); // Update the selectedRowInContext state with the new selected rows
    setSelectedRow(selectedRows); // Update the selectedRow state with the new selected rows
  };

  const rowSelection = {
    selectedRowKeys, // Use the selectedRowKeys state as the selectedRowKeys property
    onChange: onSelectChange, // Set the onChange event handler
  };

  const highlightSearchTerm = (text, searchTerm) => {
    if (!text || !searchTerm) {
      return text;
    }

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const [openOverViewDrawer, setOpenOverViewDrawer] = useState(false);
  const [overViewSmapleID, setOverViewSmapleID] = useState('');
  const closeOverViewDrawer = () => {
    setOpenOverViewDrawer(false);
  };

  const noDataFunc = () => {
    setTimeout(() => {
      return 'There is No data for show ... !';
    }, 500);
  };

  const copyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = window.location.href;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    openNotification();
  };

  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.open({
      message: 'Copied',
      duration: 5,
    });
  };

  return (
    <div className="h-full overflow-auto ResultPage ">
      {contextHolder}
      <div
        className={classNames(
          { 'w-full items-center gap-x-5 flex justify-between': true },
          { 'px-6': !isTableView }
        )}
      >
        <div className="flex flex-row gap-2">
          <div className="mb-2 ">
            <RefineDrawer
              initialColumns={initialColumns?.map((item) => {
                return item.title;
              })}
              handleAdvancedSearch={handleAdvancedSearch}
              advText={advText}
              backendSearchTerm={backendSearchTerm}
              setBackendSearchTerm={setBackendSearchTerm}
            />
          </div>

          {/* hzhz */}

          <div>
            <Button
              type="primary"
              className="mb-2"
              onClick={() => handleViewPreferenceChange('card')}
              disabled={!isTableView}
            >
              Card View
            </Button>
          </div>

          <div>
            <Button
              type="primary"
              className="mb-2"
              onClick={() => handleViewPreferenceChange('table')}
              disabled={isTableView}
            >
              Table View
            </Button>
          </div>

          <Tooltip title="Copy Address">
            <Button type="primary" className="flex justify-center items-center">
              <CopyOutlined
                style={{ color: 'white', marginLeft: '6px' }}
                onClick={() => copyToClipboard()}
              />
            </Button>
          </Tooltip>

          {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}>
            <div>
              <h4 className="mbtotal-count">Number of Results: <span>{totalCount}</span></h4>
            </div>
          </div> */}
        </div>
        {/* Search box */}
        {/* <Input.Search
          placeholder="Search.............."
          // Add your search functionality here, e.g., onChange, onSearch, etc.
          // onChange={(e) => handleSearch(e.target.value)}
          // onSearch={(value) => handleSearch(value)}
          allowClear
          enterButton={<SearchOutlined />}
          style={{ width: 400 }}
        /> */}

        {/* <h1>Count: {result.data?.totalcount}</h1> */}

        {/* hzhz */}

        <div className="mb-2">
          <FilterColumnModal
            childToParent={childToParent}
            initialColumns={initialColumns}
            selectedRow={selectedRow}
            columns={
              columns.length > 0 ? columns : initialContextColumns.slice(0, 7)
            }
            location={location}
            backendSearchTerm={backendSearchTerm}
            isTableView={isTableView}
          />
        </div>
      </div>
      {isTableView && Data.length > 0 ? (
        <div>
          <Table
            className="table-striped-rows"
            rowSelection={rowSelection}
            columns={
              columns.length > 0 ? columns : initialContextColumns.slice(0, 7)
            }
            dataSource={Data}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  closeOverViewDrawer();
                  setOverViewSmapleID(record.sample_id);
                  setOpenOverViewDrawer(true);
                }, // click row
              };
            }}
            loading={loading}
            tableLayout="auto"
            scroll={{
              x: 'max-content',
              y: 'calc(110vh - 25rem)',
            }}
            sticky={true}
            bordered={true}
            showHeader={true}
            pagination={{
              defaultPageSize: 50,
              responsive: true,
            }}
          />
        </div>
      ) : (
        <div className="w-full">
          {!loading ? (
            Data.length > 0 ? (
              <div className="m-10">
                <Row gutter={[32, 20]}>
                  {Data?.slice(
                    (pageNumber - 1) * pageTotalNumber,
                    pageNumber * pageTotalNumber
                  ).map((item) => {
                    return (
                      <Col className="overflow-auto card-style p-0 m-0" md={24}>
                        <Card
                          bordered={false}
                          className="card-none flex p-0 m-0"
                        >
                          <div className="flex flex-row flex-wrap">
                            <Tooltip
                              title="Click to open detail view of virus"
                              arrow
                            >
                              <div
                                className="flex flex-col items-center text-left flex-wrap"
                                onClick={() => {
                                  closeOverViewDrawer();
                                  // setOverViewSmapleID(item?.bvbrc_id);
                                  setOverViewSmapleID(item?.sample_id);
                                  setOpenOverViewDrawer(true);
                                }}
                              >
                                <p className="text-blue-500 text-lg text-left  font-bold cursor-pointer">
                                  {item?.blue || ''}
                                </p>
                              </div>
                            </Tooltip>
                          </div>

                          <div className="flex flex-row w-full gap-1 items-center">
                            <Tooltip title="The accession number is a unique identifier assigned to a record in sequence databases such as GenBank.">
                              {/* <InfoCircleOutlined style={{ color: 'black', fontSize: '14px' }} /> */}
                              <p
                                className="text-black font-bold"
                                style={{ marginRight: '10px' }}
                              >
                                NCBI Accession Number:
                              </p>
                            </Tooltip>

                            <p
                              className="text-black font-bold"
                              style={{ marginRight: '10px' }}
                            >
                              {item['accession']}
                            </p>

                            <Tooltip title="Genomic coverage, the percentage of all base pairs or loci of the genome covered by sequencing.">
                              {/* <InfoCircleOutlined style={{ color: 'black', fontSize: '14px' }} /> */}
                              <p
                                className="text-black font-bold"
                                style={{ marginRight: '10px' }}
                              >
                                Genome Coverage:
                              </p>
                            </Tooltip>

                            <p className="text-black font-bold">
                              {item['genome_coverage']}
                            </p>
                          </div>

                          <div className="flex flex-row w-full gap-1 items-center">
                            <Tooltip title="The Baltimore Classification divides viruses into seven groups based on whether their genome is DNA, RNA, single stranded, or double stranded, the sense of the single strand, and the presence or absence of a reverse transcriptase">
                              {/* <InfoCircleOutlined style={{ color: 'black', fontSize: '14px' }} /> */}
                              <p
                                className="text-black font-bold"
                                style={{ marginRight: '30px' }}
                              >
                                Baltimore Class:{' '}
                                {item['baltimore_class']
                                  ? item['baltimore_class']
                                  : '-'}
                              </p>
                            </Tooltip>

                            {item['bvbrc_id'] && (
                              <Tooltip title="Additional Information in bv-brc.org">
                                {/* <InfoCircleOutlined style={{ color: 'black', fontSize: '14px' }} /> */}
                                <Link
                                  to={`https://www.bv-brc.org/view/Genome/${item['bvbrc_id']}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Image
                                    src={bvbrclogo}
                                    width={100}
                                    preview={false}
                                    style={{ marginRight: '10px' }}
                                  />
                                </Link>
                              </Tooltip>
                            )}

                            {item['accession'] && (
                              <Tooltip title="Additional Information in ncbi.nlm.nih.gov">
                                {/* <InfoCircleOutlined style={{ color: 'black', fontSize: '14px' }} /> */}
                                <Link
                                  to={`https://www.ncbi.nlm.nih.gov/nuccore/${item['accession']}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Image
                                    src={ncbiLogo}
                                    width={100}
                                    preview={false}
                                    style={{ marginRight: '10px' }}
                                  />
                                </Link>
                              </Tooltip>
                            )}

                            {/* <Tooltip title="6-Additional Information in pubmed.ncbi.nlm.nih.gov/"> */}
                            {/* Assuming 'item' object has a valid 'pmid' property */}
                            {/* <Link to={`https://pubmed.ncbi.nlm.nih.gov/pm_id/${item['pmid']}`}>
                                  <Image src={pubMedLogo} width={100} preview={false} style={{ marginRight: '10px' }} />
                                </Link>
                              </Tooltip> */}
                            {/* hzhzhzhzhz */}

                            {item['pmid'] && (
                              <Tooltip title="Additional Information in pubmed.ncbi.nlm.nih.gov/">
                                {/* Assuming 'item' object has a valid 'pmid' property */}
                                {item['pmid'] > 0 && (
                                  <Link
                                    to={`https://pubmed.ncbi.nlm.nih.gov/${item['pmid']}/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <Image
                                      src={pubMedLogo}
                                      width={100}
                                      preview={false}
                                      style={{ marginRight: '10px' }}
                                    />
                                  </Link>
                                )}
                              </Tooltip>
                            )}

                            {/* hzhzhzhzhz */}

                            {/* <Tooltip title="6-Additional Information in pubmed.ncbi.nlm.nih.gov/">
                                <Link to={`https://pubmed.ncbi.nlm.nih.gov/pmid/${item['pmid']}`}>
                                  <Image src={pubMedLogo} width={100} preview={false} style={{ marginRight: '10px' }} />
                                </Link>
                              </Tooltip> */}
                          </div>

                          {/* {item['pmid'] && (
                                        <Tooltip title="6-Additional Information in pubmed.ncbi.nlm.nih.gov/">
                                          <Link to={`https://pubmed.ncbi.nlm.nih.gov/${item['pmid']}`}>
                                            <Image src={pubMedLogo} width={100} preview={false} />
                                          </Link>
                                        </Tooltip>
                                      )} */}
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
                {Data.length > 0 && (
                  <div className="w-full">
                    <div className="justify-end flex items-end mt-10">
                      <Pagination
                        defaultCurrent={1}
                        total={Data.length || 0}
                        onChange={(a, b, c) => {
                          setPageNumber(a);
                          if (b) {
                            setPageTotalNumber(b);
                          }
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full justify-center items-center text-center">
                {noDataFunc()}
              </div>
            )
          ) : (
            <div className="p-5">
              <CardSkeleton />
            </div>
          )}
        </div>
      )}
      {overViewSmapleID && (
        <OverViewDrawer
          openOverViewDrawer={openOverViewDrawer}
          closeOverViewDrawer={closeOverViewDrawer}
          overViewSmapleID={overViewSmapleID}
        />
      )}
    </div>
  );
};

export default memo(ResultsPage);
