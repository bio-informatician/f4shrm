// SearchBar.jsx
import React from 'react';
import { Search } from 'antd';

const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <Search
        placeholder="Virus name, Host, Abbreviation ..."
        allowClear
        enterButton="Search"
        size="medium"
        onSearch={onSearch}
        className="searchInput"
      />
    </div>
  );
};

export default SearchBar;
