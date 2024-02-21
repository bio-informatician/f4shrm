import {
  Button,
  Drawer,
  Collapse,
  Row,
  Col,
  Checkbox,
  Form,
  Divider,
  Card,
} from 'antd';
import { useEffect, useState } from 'react';
import { Input } from 'antd';
import { Radio } from 'antd';
import { DatePicker, Space, Select } from 'antd';
import {
  CloseCircleFilled,
  CloseCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Segmented } from 'antd';
import { Mentions } from 'antd';
import { useNavigate } from 'react-router-dom';
import NumericInput from './numeric-input';
import axios from 'axios';

import { Slider } from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const { Panel } = Collapse;
const { Search } = Input;

const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

const RefineDrawer = ({
  advText,
  totalCount,
  handleAdvancedSearch,
  backendSearchTerm,
  setBackendSearchTerm,
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (key) => {
    // console.log(key);
  };

  const CheckBoxOnChange = (e) => {
    setValue(e.target.value);
  };

  const onDateChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  const onOk = (value) => {
    console.log('onOk: ', value);
  };

  const [prefix, setPrefix] = useState('@');
  const onSearch = (_, newPrefix) => {
    setPrefix(newPrefix);
  };

  const [value, setValue] = useState('');

  const OPTIONS = ['Num1', 'Num2', 'Num3', 'Num4'];

  const [selectedItems, setSelectedItems] = useState([]);
  // const [text, setText] = useState('');
  let [options, setOptions] = useState([]);
  let [selectedFilters, setSelectedFilters] = useState([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  const getOptions = async () => {
    try {
      let result = await axios.get(
        'http://192.168.10.12:7000/api/searchTableRefineOptions/'
      );

      if (result.status === 200) {
        options = [];
        for (const [key, value] of Object.entries(result.data[0])) {
          options.push({
            title: key,
            value: value,
          });
        }
        setOptions(options);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOptions();
  }, []);

  const handleCallAdvancedSearch = () => {
    if (text) {
      try {
        navigate(`/Results/Advanced/${text}`, {
          state: { from: 'Advanced', value: text },
        });
      } catch (error) {
        console.log('Error', error);
      }
      // setText('');
    }
  };

  const renderData = (item) => {
    switch (item.value) {
      case 'textbox':
        return (
          <div className="flex flex-col gap-y-2 ">
            <Form.Item name={item.title} className="m-0 p-0">
              <TextArea rows={1} />
            </Form.Item>
            {/* <Button type="primary">Submit</Button> */}
          </div>
        );
        break;
      case 'percent':
        return (
          <div className="flex flex-col gap-y-2 ">
            <Form.Item name={item.title} className="m-0 p-0">
              <Slider range defaultValue={[0, 0]} />
            </Form.Item>
          </div>
        );
        break;
      case 'minmax':
        return (
          <div className="w-full flex flex-col gap-y-4 items-center">
            <Space direction="horizontal" size={12}>
              <Form.Item
                name={[`${item.title}`, 'Min']}
                label="Min"
                className="m-0 p-0"
              >
                <NumericInput
                  style={{
                    width: 120,
                  }}
                  value={value}
                  onChange={setValue}
                />
              </Form.Item>
              <Form.Item
                name={[`${item.title}`, 'Max']}
                label="Max"
                className="m-0 p-0"
              >
                <NumericInput
                  style={{
                    width: 120,
                  }}
                  value={value}
                  onChange={setValue}
                />
              </Form.Item>
            </Space>
          </div>
        );

        break;
      case 'fromto':
        return (
          <div className="w-full flex flex-col gap-y-4 items-center">
            <Space direction="vertical" size={12}>
              {/* <DatePicker showTime onChange={onChange} onOk={onOk} /> */}
              <Form.Item name={item.title} className="m-0 p-0">
                <RangePicker
                  format="YYYY"
                  onChange={onChange}
                  onOk={onOk}
                  picker="year"
                />
              </Form.Item>
            </Space>
          </div>
        );

        break;
      default:
        return (
          <Form.Item name={item.title} className="m-0 p-0">
            <Checkbox.Group
              style={{
                width: '100%',
              }}
            >
              <Row>
                {typeof item.value === 'object' &&
                  item.value?.map((item) => (
                    <Col span={12}>
                      <Checkbox value={item}>{item}</Checkbox>
                    </Col>
                  ))}
              </Row>
            </Checkbox.Group>
          </Form.Item>
        );
        break;
    }
  };

  const resetAllFilters = () => {
    form.resetFields();
    setSelectedFilters([]);
    setBackendSearchTerm(backendSearchTerm.slice(0, 1));
    console.log('aFTER rESET ===>', form.getFieldsValue());
  };

  const execFilters = async () => {
    try {
      let result = form.getFieldsValue();

      let combineFiltersText = '';

      let selectedFilter = [];

      for (const [key, value] of Object.entries(result || {})) {
        result.type = options.find((item) => item.title === key)?.value || '';
        if (value && (value.length || value['Min'])) {
          selectedFilter.push({
            key,
            value,
            type: result.type,
          });
        }
      }

      selectedFilter.map((item) => {
        switch (item.type) {
          case 'textbox':
            combineFiltersText =
              combineFiltersText +
              (combineFiltersText.length ? 'AND' : '') +
              `(${item.value}[${item.key}])`;
            break;
          case 'percent':
            combineFiltersText =
              combineFiltersText +
              (combineFiltersText.length ? 'AND' : '') +
              `(${item.value[0]}_${item.value[1]}[${item.key}])`;
            break;
          case 'minmax':
            combineFiltersText =
              combineFiltersText +
              (combineFiltersText.length ? 'AND' : '') +
              `(${item.value['Min']}_${item.value['Max']}[${item.key}])`;
            break;

          case 'fromto':
            combineFiltersText =
              combineFiltersText +
              (combineFiltersText.length ? 'AND' : '') +
              `(${item.value[0].$y}_${item.value[1].$y}[${item.key}])`;
            break;

          default:
            combineFiltersText =
              combineFiltersText +
              (combineFiltersText.length ? 'AND' : '') +
              item.value.map(
                (q, index) =>
                  `(${q}[${item.key}])${
                    item.value.length > 1 && item.value.length - 1 !== index
                      ? 'OR'
                      : ''
                  }`
              );
            break;
        }
      });

      if (selectedFilter.length > 1) {
        combineFiltersText = '(' + combineFiltersText + ')';
      }

      if (advText || backendSearchTerm.length) {
        combineFiltersText = `(${
          backendSearchTerm
            ? backendSearchTerm[backendSearchTerm.length - 1]
            : advText
        })${combineFiltersText.length > 0 ? 'AND' : ''}${combineFiltersText}`;
      }

      combineFiltersText = combineFiltersText.replace(',', '');
      console.log('combineFiltersText', combineFiltersText);

      try {
        handleAdvancedSearch(combineFiltersText);

        setSelectedFilters(selectedFilter);
      } catch (error) {
        setSelectedFilters([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFilter = (item, value) => {
    setBackendSearchTerm(backendSearchTerm.slice(0, 1));
    console.log('items', item, value);
    let columnName = item.key || '';

    if (typeof item.type === 'string') {
      item.value = undefined;
      form.setFieldsValue({
        [columnName]: undefined,
      });
    } else {
      item.value = item.value.filter((t) => t !== value);
      form.setFieldsValue({
        [columnName]: item.value,
      });
    }

    selectedFilters = [...selectedFilters, item];

    const uniqueNames = [];

    selectedFilters = selectedFilters.filter((element) => {
      const isDuplicate = uniqueNames.includes(element.key);

      if (!isDuplicate && element.value && element.value?.length) {
        uniqueNames.push(element.key);
        return true;
      }
      return false;
    });

    setSelectedFilters(selectedFilters);
  };

  return (
    <>
      <Button
        onClick={showDrawer}
        style={{
          backgroundColor: '#03C988',
          borderColor: '#03C988',
          color: 'white',
        }}
      >
        Refine Results
      </Button>

      <Drawer title="Filters" placement="left" onClose={onClose} open={open}>
        {advText && advText.length && (
          <div className="w-full flex justify-center items-center text-center overflow-auto">
            <p className="text-base"> Searched term: {advText}</p>
            {/* <p className="text-base"> Searched term: {totalCount}</p> */}
          </div>
        )}

        <div className="w-full flex justify-center items-end gap-x-2">
          <Button
            type="primary"
            className="my-3"
            onClick={() => resetAllFilters()}
          >
            Reset Filters
          </Button>
          <Button
            onClick={execFilters}
            className="my-3"
            style={{
              backgroundColor: '#03C988',
              borderColor: '#03C988',
              color: 'white',
            }}
          >
            Apply Filters
          </Button>
        </div>

        <div className="flex flex-wrap w-full gap-2 my-2 flex-col">
          {selectedFilters.map((item) => {
            return (
              <div className="overflow-auto justify-start">
                <div className="whitespace-nowrap">
                  <p className="font-bold mb-2"> {item.key}</p>
                </div>
                <Divider className="p-0 m-0 py-1" />
                {typeof item.value === 'string' ? (
                  <div className="selectedFilteredBox relative">
                    <span className="max-w-xs overflow-auto">{item.value}</span>
                    <CloseCircleFilled
                      style={{
                        color: 'red',
                      }}
                      className="cursor-pointer absolute right-5"
                      onClick={() => removeFilter(item, item.value)}
                    />
                  </div>
                ) : item.type === 'fromto' ? (
                  <div className="selectedFilteredBox">
                    <span>
                      {item.value[0].$y} - {item.value[1].$y}
                    </span>
                    <CloseCircleOutlined
                      style={{ color: 'red' }}
                      className="cursor-pointer absolute right-5"
                      onClick={() => removeFilter(item)}
                    />
                  </div>
                ) : item.type === 'minmax' ? (
                  <div className="selectedFilteredBox">
                    <span>
                      {item.value['Min']} - {item.value['Max']}
                    </span>
                    <CloseCircleOutlined
                      style={{ color: 'red' }}
                      className="cursor-pointer absolute right-5"
                      onClick={() => removeFilter(item)}
                    />
                  </div>
                ) : item.type === 'percent' ? (
                  <div className="selectedFilteredBox">
                    <span>
                      {item.value[0]} - {item.value[1]}
                    </span>
                    <CloseCircleOutlined
                      style={{ color: 'red' }}
                      className="cursor-pointer absolute right-5"
                      onClick={() => removeFilter(item)}
                    />
                  </div>
                ) : (
                  <div className="w-full flex flex-col gap-y-2">
                    {item.value.map((q) => (
                      <div className="selectedFilteredBox">
                        <span>{q}</span>
                        <CloseCircleOutlined
                          style={{ color: 'red' }}
                          className="cursor-pointer absolute right-5"
                          onClick={() => removeFilter(item, q)}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* -- SHOW FILTERED COLUMNS -- */}
        <Collapse onChange={onChange}>
          {options?.map((item, index) => (
            <Panel header={<div>{item.title}</div>} key={index + 1}>
              <Form
                form={form}
                layout="vertical"
                initialValues={
                  {
                    // size: componentSize,
                  }
                }
                onValuesChange={(changedValues, allFileds) => {
                  console.log(
                    'changedValues',
                    changedValues,
                    'allFileds',
                    allFileds
                  );
                }}
                // size={componentSize}
                onFieldsChange={(_, allFields) => {
                  if (item.value !== 'textbox') {
                    console.log('______', _, allFields);
                  }
                }}
                style={{
                  maxWidth: 600,
                }}
              >
                {renderData(item)}
              </Form>
            </Panel>
          ))}
        </Collapse>
        <div className="w-full flex justify-center items-end gap-x-2 mt-3">
          <Button type="primary" onClick={() => resetAllFilters()}>
            Reset Filters
          </Button>
          <Button
            onClick={execFilters}
            style={{
              backgroundColor: '#03C988',
              borderColor: '#03C988',
              color: 'white',
            }}
          >
            Apply Filters
          </Button>
        </div>
      </Drawer>
    </>
  );
};
export default RefineDrawer;
