// import React from 'react';
// import { Input, Menu } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';

// const { Item, SubMenu } = Menu;


// const Navbar = () => {
//   return (
//     <div className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
//       <div className="flex items-center space-x-4">

//         {/* Homepage Link */}
//         <a href="/" className="text-white font-semibold">
//           Homepage
//         </a>
//       </div>

//       <div>
//         {/* Menu */}

//                 {/* Logo */}
//                 <a href="/">
//           <img src="/path/to/logo3.png" alt="Logo 3" className="h-3" />
//         </a>
        
//         <Menu theme="dark" mode="horizontal">
//           {/* Advanced Search Link */}
//                   {/* Search Bar */}
//         <Input
//           prefix={<SearchOutlined />}
//           placeholder="Search..."
//           className="w-1/8"
//           // Handle search functionality here
//         />
//           <Item key="advanced-search">
//             <a href="/advanced-search">Advanced Search</a>
//           </Item>
//           {/* news Link */}
//           <Item key="news">
//             <a href="/news">News</a>
//           </Item>
//           {/* news Link */}
//           <Item key="downloads">
//             <a href="/downloads">News</a>
//           </Item>
//                     {/* Browse Link */}

//           <Item key="browse">
//             <a href="/browse">Browse</a>
//           </Item>
//           {/* Documentation Dropdown */}
//           <SubMenu key="documentation" title="Documentation">
//             {/* About Us */}
//             <Item key="about-us">
//               <a href="/about-us">About Us</a>
//             </Item>
//             {/* Contact */}
//             <Item key="contact">
//               <a href="/Contact.jsx">Contact</a>
//             </Item>
//             {/* Events and News */}
//             <Item key="events-news">
//               <a href="/events-news">Events and News</a>
//             </Item>
//             {/* FAQ */}
//             <Item key="faq">
//               <a href="/faq">FAQ</a>
//             </Item>
//             {/* Useful Links */}
//             <Item key="useful-links">
//               <a href="/useful-links">Useful Links</a>
//             </Item>
//             <Item key="about">
//               <a href="/about">About</a>
//             </Item>
//           </SubMenu>
//         </Menu>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
