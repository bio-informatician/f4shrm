import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

const SimplePageSearchBar = ({ type }) => {
  const navigate = useNavigate();
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const onSearch = () => {
    navigate(`Results/${searchValue}`, {
      state: { from: 'SimplePageSearchBar', value: searchValue },
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingRight: '30px',
        justifyContent: 'center',
      }}
    >
      <Input
        placeholder={searchVisible ? 'Virus name, Host, Abbreviation...' : ''}
        allowClear
        onPressEnter={onSearch}
        onChange={(e) => setSearchValue(e.target.value)}
        className="search-input"
        style={{
          width: searchVisible ? '300px' : '0px',
          height: '30px', // Set the height
          padding: searchVisible ? '2px 40px 2px 5px' : '0',
          overflow: searchVisible ? 'visible' : 'hidden', // Hide overflow when the search bar is hidden
          transition: 'width 0.9s ease, padding 0.3s ease',
        }}
      />
      {/* <Button
        icon={<SearchOutlined />}
        onClick={onSearchClick}
        className="search-icon"
        style={{
          marginLeft: '5px',
          height: '30px', // Set the height
          fontWeight: 'narow',
          color: 'white',
          border: 'none',
          background: type === 'mobile' ? '#3559E0' : 'transparent', // Remove background color
        }}
      >
        Search
      </Button> */}

<Button
  icon={<SearchOutlined />}
  onClick={onSearchClick}
  className="search-icon"
  style={{
    marginLeft: '5px',
    height: '30px', // Set the height
    fontWeight: 'narow',
    color: 'white',
    border: 'none',
    background: type === 'mobile' ? '#aaaa' : 'transparent', // Remove background color
  }}
>
  {type === 'mobile' ? null : 'Search'}
</Button>

    </div>
  );
};

export default SimplePageSearchBar;

