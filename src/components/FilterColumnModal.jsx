import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from 'antd';
import { Checkbox, Divider } from 'antd';
import { usePageContext } from '../components/Context';
// import { Link } from 'react-router-dom';
// import { isMobileView } from '../services/ViewMode';
import { Tooltip, Card } from 'antd';

import {
  CloudDownloadOutlined,
  InfoCircleOutlined,
  SelectOutlined,
} from '@ant-design/icons';
import { isMobile, isTablet } from 'react-device-detect';
import { CSVLink } from 'react-csv';
// import queryString from 'query-string';
// Import saveAs from file-saver
import { saveAs } from 'file-saver';
import PropTypes from 'prop-types';
import tooltipsHeader from './Hamedcomponents/FilterColumnModal/tooltipsHeader';
import SearchTermDownloadButton from './Hamedcomponents/results/SearchTermDownloadButton';

const { Meta } = Card;
const CheckboxGroup = Checkbox.Group;

const FilterColumnModal = ({
  childToParent,
  initialColumns,
  selectedRow,
  columns,
  location,
  backendSearchTerm,
  isTableView,
}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [initialColumn, setInitialColumn] = useState([]);

  const { checkedList, setCheckedList } = usePageContext();

  useEffect(() => {
    const initialCol = initialColumns.map((item) => item.title);
    setInitialColumn(initialCol);
    setCheckedList(columns.map((item) => item.title));
  }, [initialColumns]);

  // Handle backendSearchTerm as an array
  const searchTermArray = Array.isArray(backendSearchTerm)
    ? backendSearchTerm
    : [backendSearchTerm];

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      childToParent(checkedList);
    }, 500);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < initialColumns.length);
    setCheckAll(list.length === initialColumns.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? initialColumn : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  //------------

  const [openUserModal, setOpenUserModal] = useState(false);

  const showUsersModal = () => {
    setOpenUserModal(true);
  };

  const cancelUserModal = () => {
    setOpenUserModal(false);
  };

  return (
    <>
      <div className="flex flex-row gap-x-3">
        {backendSearchTerm.length > 0 && (
          <div className="mb-2">
            <SearchTermDownloadButton
              searchedTerm={backendSearchTerm[backendSearchTerm.length - 1]}
            />
          </div>
        )}

        {selectedRow.length > 0 && (
          <CSVLink
            data={selectedRow}
            filename={`${
              new Date().toISOString().split('T')[0]
            }_VJ.vBeta_metadata.csv`}
            onClick={(event, fileInfo) => {
              // Save the file using the generated file name
              saveAs(fileInfo.blob, fileInfo.filename);
            }}
          >
            <Tooltip title="Download Selection">
              <Button
                type="primary"
                className="flex justify-center items-center"
              >
                {/* <CloudDownloadOutlined /> */}
                Download Selection
              </Button>
            </Tooltip>
          </CSVLink>
        )}

        {isTableView && (
          <Button
            type="primary"
            onClick={showModal}
            className="flex justify-center items-center"
          >
            {isMobile ? <SelectOutlined /> : 'Add / Remove Columns'}
          </Button>
        )}
      </div>
      <Modal
        width={isMobile || isTablet ? '100vw' : '60vw'}
        open={open} // Changed from "open" to "visible"
        title="Choose Columns"
        onOk={handleOk}
        className="add-remove-column-modal"
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="dashed"
            loading={loading}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>,
          <Button type="primary" loading={loading} onClick={handleOk}>
            OK
          </Button>,
        ]}
      >
        <div className="w-full">
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Check all Columns
          </Checkbox>
          <Divider />
          <Row className="w-full">
            <Col
              md={24}
              className="flex flex-row overflow-scroll  whitespace-normal w-full"
            >

<CheckboxGroup
  value={checkedList}
  onChange={onChange}
  className="w-full"
>
  <Row
    gutter={[100, 10]}
    className="overflow-auto overflow-x-hidden"
  >
    {initialColumns
      .slice() // Create a shallow copy to avoid modifying the original array
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((item) => (
        <Col
          span={isMobile ? 24 : 8}
          key={item.title}
          className="overflow-x-hidden md:overflow-auto md:overflow-x-hidden"
        >
          <Checkbox
            value={item.title}
            className="whitespace-nowrap"
          >
            {item.title}{' '}
            <Tooltip
              title={tooltipsHeader[item.title] || item.title}
            >
              {' '}
              <InfoCircleOutlined />
            </Tooltip>
          </Checkbox>
        </Col>
      ))}
  </Row>
</CheckboxGroup>



              {/* <CheckboxGroup
                value={checkedList}
                onChange={onChange}
                className="w-full"
              >
                <Row
                  gutter={[100, 10]}
                  className="overflow-auto overflow-x-hidden"
                >
                  {initialColumns.map((item) => (
                    <Col
                      span={isMobile ? 24 : 8}
                      key={item.title}
                      className="overflow-x-hidden md:overflow-auto md:overflow-x-hidden"
                    >
                      <Checkbox
                        value={item.title}
                        className="whitespace-nowrap"
                      >
                        {item.title}{' '}
                        <Tooltip
                          title={tooltipsHeader[item.title] || item.title}
                        >
                          {' '}
                          <InfoCircleOutlined />
                        </Tooltip>
                      </Checkbox>
                    </Col>
                  ))}
                </Row>
              </CheckboxGroup> */}

{/* 
<CheckboxGroup
  value={checkedList}
  onChange={onChange}
  className="w-full"
>
  <Row
    gutter={[100, 10]}
    className="overflow-auto overflow-x-hidden"
  >
    {initialColumns
      .sort((a, b) => a.title.localeCompare(b.title)) // Sort columns alphabetically
      .map((item) => (
        <Col
          span={isMobile ? 24 : 8}
          key={item.title}
          className="overflow-x-hidden md:overflow-auto md:overflow-x-hidden"
        >
          <Checkbox
            value={item.title}
            className="whitespace-nowrap"
          >
            {item.title}{' '}
            <Tooltip
              title={tooltipsHeader[item.title] || item.title}
            >
              {' '}
              <InfoCircleOutlined />
            </Tooltip>
          </Checkbox>
        </Col>
      ))}
  </Row>
</CheckboxGroup> */}




            </Col>
          </Row>
        </div>
      </Modal>
      <Modal
        open={openUserModal} // Changed from "openUserModal" to "visible"
        title="Users Data"
        onOk={handleOk}
        onCancel={cancelUserModal}
        footer={null}
        width={1000}
        bodyStyle={{ maxHeight: '500px', overflow: 'scroll' }}
      >
        <div className="w-full flex flex-col gap-y-4">
          {selectedRow.map((item) => (
            <Card hoverable key={item.sample_id}>
              <div className="w-full flex items-center justify-start">
                <div>
                  <img
                    alt="example"
                    src={item.image}
                    style={{
                      width: 240,
                    }}
                  />
                </div>

                <div className="">
                  <p
                    className="site-description-item-profile-p"
                    style={{
                      marginBottom: 24,
                    }}
                  >
                    User Profile
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Modal>
    </>
  );
};

FilterColumnModal.propTypes = {
  childToParent: PropTypes.func.isRequired,
  initialColumns: PropTypes.array.isRequired,
  selectedRow: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  backendSearchTerm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  isTableView: PropTypes.bool.isRequired,
};

export default FilterColumnModal;

