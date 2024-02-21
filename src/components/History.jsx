import React, { useState } from 'react';
import { List, Button, Tooltip, Table, Popconfirm, message } from 'antd';
import { EditOutlined, DeleteOutlined, SendOutlined } from '@ant-design/icons';
import '../styles/SearchHistory.css'; // Import your custom CSS file

const SearchHistory = ({
  searchHistory,
  setSearchHistory,
  AdvancedSearchFunctionFromHistory,
  handleCopyToClipboard,
  handleEditHistoryItem,
  tableView = 'list',
}) => {
  const [editingItemId, setEditingItemId] = useState(null);
  const [sendingItemId, setSendingItemId] = useState(null);

  const handleEditItem = (itemId) => {
    setEditingItemId(itemId);
    setSendingItemId(null);
  };

  const handleSaveItem = (itemId, editedQuery) => {
    const updatedHistory = searchHistory.map((item) => {
      if (item.key === itemId) {
        return { ...item, query: editedQuery };
      }
      return item;
    });

    setSearchHistory(updatedHistory);
    setEditingItemId(null);
    localStorage.setItem('historyData', JSON.stringify(updatedHistory));
  };

  const handleDeleteItem = (itemId) => {
    const updatedHistory = searchHistory.filter((item) => item.key !== itemId);
    setSearchHistory(updatedHistory);
    localStorage.setItem('historyData', JSON.stringify(updatedHistory));
    message.success('Record deleted');
  };

  const handleSendToAdvancedSearch = (query) => {
    sendToAdvancedSearch(query);
    setSendingItemId(null);
  };

  return (
<div className="search-history-container">
<div >
<h3 style={{ fontSize: '20px' , marginLeft: '2px', marginRight: '30px' }}>
    Search history:
  </h3>
  <br />
  <br />
  Click <span className="button-sign">Insert</span> to copy and Insert your keywords in the search term box.
</div>
    {tableView === 'list' && (
      <List
        itemLayout="horizontal"
        dataSource={searchHistory}
        renderItem={(item) => (
          <List.Item
  className={`history-list-item ${editingItemId === item.key ? 'editing' : ''}`}
  style={{ padding: '10px' }} // Adjust the padding value as needed
  actions={[
    <Button
      key="edit"
      type="primary"
      // icon={<EditOutlined />}
      onClick={() => handleEditHistoryItem(item.query)}
    >
      Insert
    </Button>,
    <Button
      key="delete"
      danger
      icon={<DeleteOutlined />}
      onClick={() => handleDeleteItem(item.key)}
    >
      {/* Delete */}
    </Button>,
  ]}
>
              <List.Item.Meta
                title={
                  <Tooltip title={item.description}>
                    <span
                      className="cursor-pointer"
                      onClick={() => AdvancedSearchFunctionFromHistory(item.query)}
                    >
                      {item.query}
                    </span>
                  </Tooltip>
                }
                description={item.time}
              />
            </List.Item>
          )}
        />
      )}
      {tableView === 'table' && (
        
        <Table
          columns={[
            {
              title: 'Searched History',
              dataIndex: 'query',
              key: 'query',
              render: (query, record) => (
                <Tooltip title={record.description}>
                  <span
                    className="cursor-pointer"
                    onClick={() => AdvancedSearchFunctionFromHistory(query)}
                  >
                    {query}
                  </span>
                </Tooltip>
              ),
            },
            // {
            //   title: 'Actions',
            //   key: 'actions',
            //   render: (record) => (
            //     <>
            //       {editingItemId === record.key ? (
            //         <>
            //           <Button
            //             type="primary"
            //             icon={<EditOutlined />}
            //             onClick={() => handleSaveItem(record.key, record.query)}
            //           >
            //             Save
            //           </Button>
            //           <Popconfirm
            //             title="Are you sure you want to cancel editing?"
            //             onConfirm={() => setEditingItemId(null)}
            //             okText="Yes"
            //             cancelText="No"
            //           >
            //             <Button danger icon={<DeleteOutlined />} style={{ marginLeft: 8 }}>
            //               Cancel
            //             </Button>
            //           </Popconfirm>
            //         </>
            //       ) : (
            //         <>
            //           {sendingItemId === record.key ? (
            //             <Button
            //               type="primary"
            //               icon={<SendOutlined />}
            //               onClick={() => handleSendToAdvancedSearch(record.query)}
            //             >
            //               Send
            //             </Button>
            //           ) : (
            //             <Button
            //               type="primary"
            //               icon={<EditOutlined />}
            //               onClick={() => handleEditItem(record.key)}
            //             >
            //               Edit
            //             </Button>
            //           )}
            //           <Popconfirm
            //             title="Are you sure you want to delete this record?"
            //             onConfirm={() => handleDeleteItem(record.key)}
            //             okText="Yes"
            //             cancelText="No"
            //           >
            //             <Button danger icon={<DeleteOutlined />} style={{ marginLeft: 8 }}>
            //               Delete
            //             </Button>
            //           </Popconfirm>
            //         </>
            //       )}
            //     </>
            //   ),
            // },
          ]}
          dataSource={searchHistory}
          pagination={false}
          rowKey={(record) => record.key}
        />
      )}
    </div>
  );
};

export default SearchHistory;
