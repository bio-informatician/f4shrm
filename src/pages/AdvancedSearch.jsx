import React, { useEffect, useState } from 'react';
import {
  Collapse,
  Select,
  Space,
  Form,
  Input,
  Segmented,
  Button,
  Row,
  Col,
  Tooltip,
  message, // Import message object from 'antd'
} from 'antd';
import SearchHistory from '../components/History';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/AdvancedSearch.css'; // Import your CSS file here

const { TextArea } = Input;

const AdvancedSearch = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [segmentedType, setSegmentedType] = useState('AND');
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem('historyData')) || []
  );
  const [copiedValue, setCopiedValue] = useState('');

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const handleCopyToClipboard = () => {
    const textToCopy = form.getFieldValue('query');
    try {
      navigator.clipboard.writeText(textToCopy);
      setCopiedValue(textToCopy);
      message.success('Query copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy query:', err);
      message.error('Failed to copy query. Please try again.');
    }
  };

  const onFinish = () => {
    const { fields, searchTerm, query } = form.getFieldsValue();

    if (!searchTerm) {
      return;
    }

    const newPhrase = query
      ? `(${query}) ${segmentedType} (${searchTerm}${
          fields ? `[${fields}]` : ''
        })`
      : searchTerm + (fields ? `[${fields}]` : '');

    form.setFieldsValue({
      query: newPhrase,
      searchTerm: '',
      fields: undefined,
    });
  };

  const addToHistory = (addToList) => {
    const { fields, searchTerm, query } = form.getFieldsValue();

    let newPhrase = '';

    if (!query && segmentedType === 'NOT' && fields && searchTerm) {
      newPhrase = `${segmentedType}(${searchTerm}[${fields}])`;
    } else if (
      !fields &&
      !searchTerm &&
      segmentedType === 'NOT' &&
      query &&
      !addToList
    ) {
      newPhrase = `${segmentedType}(${query})`;
    } else if (fields && searchTerm && !addToList) {
      newPhrase = query
        ? `(${query}) ${searchTerm ? segmentedType : ''} ${
            searchTerm ? `(${searchTerm}[${fields}])` : ''
          }`
        : searchTerm
        ? `${searchTerm}[${fields}]`
        : searchTerm;
    } else {
      newPhrase = query;
    }

    if (addToList) {
      const newHistoryData = [
        ...searchHistory,
        {
          key: Math.random(),
          searchTerm,
          fields,
          query: newPhrase.trim(),
          time: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
          description: newPhrase.trim(),
        },
      ];

      localStorage.setItem('historyData', JSON.stringify(newHistoryData));
      setSearchHistory(newHistoryData);
    }

    form.setFieldsValue({
      searchTerm: '',
      fields: undefined,
      query: addToList
        ? searchHistory[searchHistory.length - 1]?.query.trim()
        : newPhrase.trim(),
    });
  };

  const handleEditHistoryItem = (query) => {
    form.setFieldsValue({ query });
  };

  function getCount(str) {
    return str.split('(').filter(function(num) {
      return num != '(';
    }).length;
  }

  function getCount2(str) {
    return str.split(')').filter(function(num) {
      return num != ')';
    }).length;
  }

  const AdvancedSearchFunction = async () => {
    try {
      let { fields, searchTerm, query } = form.getFieldsValue();

      if (getCount(query) !== getCount2(query)) {
        const diff = getCount(query) - getCount2(query);
        const closingParentheses = Array(diff)
          .fill(')')
          .join('');
        query = query + closingParentheses;
      }

      addToHistory(true);
      navigate(`/Results/Advanced/${query}`, {
        state: { from: 'Advanced', value: query },
      });
    } catch (error) {
      console.log('Error', error);
    }
  };

  const AdvancedSearchFunctionFromHistory = async (query) => {
    try {
      navigate(`/Results/Advanced/${query}`, {
        state: { from: 'Advanced', value: query },
      });
    } catch (error) {
      console.log('Error');
    }
  };

  let [columnsOptions, setColumnsOptions] = useState([]);

  const [searchFields, setSearchFields] = useState([]);
  const [taxonomyFields, setTaxonomyFields] = useState([]);

  const getAllFields = async () => {
    try {
      let result = await axios.get('http://192.168.10.12:7000/api/searchTableColNames/');
      let { data, taxonomy } = result.data;

      let searchFieldsArray = [];
      let taxonomyFieldsArray = [];

      for (const [key, value] of Object.entries(data[0])) {
        searchFieldsArray.push({
          label: value,
          value: value,
        });
      }

      for (const [key, value] of Object.entries(taxonomy[0])) {
        taxonomyFieldsArray.push({
          label: value,
          value: value,
        });
      }

      searchFieldsArray.sort((a, b) => a.label.localeCompare(b.label));
      taxonomyFieldsArray.sort((a, b) => a.label.localeCompare(b.label));

      setSearchFields(searchFieldsArray);
      setTaxonomyFields(taxonomyFieldsArray);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const copyContent = async () => {
    const textToCopy = form.getFieldValue('query');
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedValue(textToCopy);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const resetForm = () => {
    form.setFieldsValue({
      searchTerm: '',
      fields: undefined,
      query: '',
      type: 'AND',
    });
  };

  const onQueryChange = (e) => {
    const { value } = e.target;
    form.setFieldsValue({ query: value });
    setCopiedValue(value);
  };

  useEffect(() => {
    getAllFields();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Form
            form={form}
            name="complex-form"
            onFinish={onFinish}
            style={{
              // marginLeft: '10px',
              // marginRight: '10px',
              margin: '10px',
              border: '1px solid #ddd',
              padding: '20px',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '20px',
                  marginLeft: '20px',
                  marginRight: '30px',
                }}
              >
                Advanced search:
              </h3>
              <h3 style={{ marginLeft: '20px', marginRight: '30px' }}>
                Select field(s) to search through and enter your search term(s)
                to build your query.{' '}
                {/* <span className="button-sign">Search</span>. */}
              </h3>
            </div>

            <Form.Item name="fields">
              <Select
                showSearch
                placeholder="All fields"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                  (option?.value ?? '')
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              >
                <Select.OptGroup label="Search Fields">
                  {searchFields.map((field) => (
                    <Select.Option key={field.value} value={field.value}>
                      {field.label}
                    </Select.Option>
                  ))}
                </Select.OptGroup>
                <Select.OptGroup label="Taxonomy Fields">
                  {taxonomyFields.map((field) => (
                    <Select.Option key={field.value} value={field.value}>
                      {field.label}
                    </Select.Option>
                  ))}
                </Select.OptGroup>
              </Select>
            </Form.Item>

            <Form.Item
              name="searchTerm"
              rules={[
                {
                  required: false,
                  message: 'searchTerm can not be empty',
                },
              ]}
            >
              <Input placeholder="Enter a search term" />
            </Form.Item>
            <h3 style={{ marginLeft: '20px', marginRight: '5px' }}>
              Use Boolean terms to build a complex query and click{' '}
              <span className="button-sign">Add</span>. Click{' '}
              <span className="button-sign-reset">Reset</span> to reset your
              query.{' '}
            </h3>
            <Form.Item name="type">
              <Segmented
                block
                options={['AND', 'OR', 'NOT']}
                onChange={(value) => setSegmentedType(value)}
              />
            </Form.Item>

            <Form.Item>
              <div className="flex gap-x-2 ">
                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  onClick={() => addToHistory(false)}
                >
                  ADD
                </Button>
                <Button
                  block
                  style={{
                    backgroundColor: '#88d9e6',
                    borderColor: '#88d9e6',
                    color: 'black',
                  }}
                  onClick={() => resetForm()}
                >
                  Reset
                </Button>
              </div>
            </Form.Item>

            <div className="relative">
              {/* <Form.Item name="query">
                <TextArea rows={4} placeholder="Add Query" />
              </Form.Item> */}
              <div className="absolute bottom-3 right-16 cursor-pointer">
                {/* ... (tooltip code) */}
              </div>
            </div>

            <h3 style={{ marginLeft: '20px', marginRight: '5px' }}>
              Your search terms will appear here!
            </h3>
            <Form.Item name="query">
              <TextArea
                rows={4}
                placeholder="Add Query"
                value={copiedValue || form.getFieldValue('query')}
                onChange={onQueryChange}
              />
            </Form.Item>
            <h3 style={{ marginLeft: '20px', marginRight: '5px' }}>
              Click the <span className="button-sign">Search</span> below to
              submit your query.{' '}
            </h3>
            <Form.Item>
              <div className="flex gap-x-2 mb-4">
                <Button
                  type="primary"
                  className="w-full ml-2"
                  onClick={() => AdvancedSearchFunction()}
                >
                  Search
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} md={12}>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <SearchHistory
              searchHistory={searchHistory}
              setSearchHistory={setSearchHistory}
              AdvancedSearchFunctionFromHistory={
                AdvancedSearchFunctionFromHistory
              }
              handleCopyToClipboard={handleCopyToClipboard}
              handleEditHistoryItem={handleEditHistoryItem}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdvancedSearch;

