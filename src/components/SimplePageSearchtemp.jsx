// import React from 'react';
// import { Input, Button } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';

// const { Search } = Input;

// const SearchBar = () => {
//   const navigate = useNavigate();

//   const onSearch = (value) => {
//     navigate('/Results', {
//       state: { from: 'SearchBar', value },
//     });
//   };

//   return (
//     <div>
//       <Search
//         placeholder="Search..."
//         allowClear
//         enterButton={<Button icon={<SearchOutlined />} />}
//         size="medium"
//         onSearch={onSearch}
//       />
//     </div>
//   );
// };

// export default SearchBar;


// import React from 'react';
// import { Input, Button } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';

// const SearchBar = () => {
//   const navigate = useNavigate();

//   const onSearch = (value) => {
//     // Perform search action here
//     navigate('Results', {
//       state: { from: 'SearchBar', value },
//     });
//   };

//   return (
//     <div>
//       <Input.Search
//         placeholder="Virus name, Host, ..."
//         allowClear
//         enterButton={
//           <Button type="primary" icon={<SearchOutlined />} />
//         }
//         size="medium"
//         onSearch={onSearch}
//       />
//     </div>
//   );
// };

// export default SearchBar;
