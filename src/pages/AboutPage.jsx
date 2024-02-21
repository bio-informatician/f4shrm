// import { Link, Outlet, useLocation } from "react-router-dom";
// import { Input, Table, Image } from "antd";
// import { useCallback, useEffect, useState } from "react";
// import FilterColumnModal from "../components/FilterColumnModal";
// // import ExportExcel from "../components/ExportExcel";
// import { usePageContext } from "../components/Context";
// import axios from "axios";
// import { debounce } from "lodash";
// import { isMobileView } from "../services/ViewMode";

// const AboutPage = () => {
//   let [Data, setData] = useState([]);
//   let [firstNames, setFirstNames] = useState([]);
//   let [bloodGroups, setBloodGroups] = useState([]);

//   const { state } = useLocation();
//   const [selectedRowKeys, setSelectedRowKeys] = useState([]);

//   let [initialColumns] = useState([
//     {
//       title: "ID",
//       width: 50,
//       dataIndex: "id",
//       key: "id",
//       fixed: "left",
//     },
//     {
//       title: "Profile Photo",
//       width: 100,
//       dataIndex: "image",
//       key: "image",
//       fixed: "left",
//       render: (image) => (
//         <Image src={image} width={70} height={70} alt="noImage" />
//       ),
//     },
//     {
//       title: "First Name",
//       width: 150,
//       dataIndex: "firstName",
//       key: "firstName",
//       fixed: "left",
//       filters: firstNames,
//       onFilter: (value, record) => record.firstName.indexOf(value) === 0,
//       sorter: (a, b) => a.firstName.length - b.firstName.length,
//     },
//     {
//       title: "Last Name",
//       width: 100,
//       dataIndex: "lastName",
//       key: "lastname",
//       fixed: "left",
//     },
//     {
//       title: "MaidenName",
//       width: 150,
//       dataIndex: "maidenName",
//       key: "maidenName",
//       fixed: "left",
//     },
//     {
//       title: "Age",
//       dataIndex: "age",
//       key: "age",
//       width: 100,
//       sorter: (a, b) => a.age - b.age,
//     },
//     {
//       title: "Height",
//       dataIndex: "height",
//       key: "height",
//       width: 100,
//       sorter: (a, b) => a.height - b.height,
//     },
//     {
//       title: "Weight",
//       dataIndex: "weight",
//       key: "weight",
//       width: 100,
//       sorter: (a, b) => a.weight - b.weight,
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//       width: 150,
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       key: "phone",
//       width: 150,
//     },
//     {
//       title: "User Name",
//       dataIndex: "username",
//       key: "username",
//       width: 150,
//     },
//     {
//       title: "Gender",
//       dataIndex: "gender",
//       key: "gender",
//       width: 100,
//     },
//     {
//       title: "Eye Color",
//       dataIndex: "eyeColor",
//       key: "eyeColor",
//       width: 100,
//     },
//     {
//       title: "Company",
//       dataIndex: "company",
//       key: "company",
//       width: 150,
//       render: (company) => <p>{company.name}</p>,
//     },
//     {
//       title: "IP",
//       dataIndex: "ip",
//       key: "ip",
//       width: 150,
//     },
//     {
//       title: "Blood Group",
//       dataIndex: "bloodGroup",
//       key: "bloodGroup",
//       width: 100,
//       filters: firstNames,
//       onFilter: (value, record) => record.bloodGroup.indexOf(value) === 0,
//     },
//   ]);

//   let [columns, setColumns] = useState(initialColumns);
//   let [loading, setLoading] = useState(false);
//   let [searchValue, setSearchValue] = useState(state ? state : "");
//   const [selectionType, setSelectionType] = useState("checkbox");

//   const { checkedList, setCheckedList } = usePageContext();

//   useEffect(() => {
//     if (state) {
//       handleSearchUser(state);
//       setSearchValue(state);
//     } else {
//       getDataFromAPI();
//     }
//   }, []);

//   const getDataFromAPI = async () => {
//     try {
//       setLoading(true);
//       let { data } = await axios.get(`https://dummyjson.com/users`);

//       let AllFirstNames = data.users.map((item) => {
//         return {
//           text: item.firstName,
//           value: item.firstName,
//         };
//       });
//       let AllBloodGroups = data.users.map((item) => {
//         return {
//           text: item.bloodGroup,
//           value: item.bloodGroup,
//         };
//       });
//       setFirstNames(AllFirstNames);
//       setBloodGroups(AllBloodGroups);

//       initialColumns.find((item) => item.dataIndex === "firstName").filters =
//         AllFirstNames;
//       initialColumns.find((item) => item.dataIndex === "bloodGroup").filters =
//         AllBloodGroups;

//       data.users.map((item) => {
//         item.key = item.id;
//       });

//       setTimeout(() => {
//         setSelectedRowKeys([]);
//         setData(data.users);
//       }, 500);

//       setLoading(false);
//     } catch (error) {
//       console.log("Error", error);
//     }
//   };

//   const handleSearchUser = debounce(async (value) => {
//     try {
//       if (checkedList.length > 0) {
//         childToParent(checkedList);
//       }

//       const { data } = await axios.get(
//         `https://dummyjson.com/users/search?q=${value}`
//       );

//       data.users.map((item) => {
//         item.key = item.id;
//       });
//       setLoading(true);
//       setData(data.users);
//       // setSearchValue(value);
//       setLoading(false);
//     } catch (error) {
//       console.log("Error", error);
//     }

//   }, 500);

//   const handleFilterUsers = async () => {
//     try {
//       const { data } = await axios.get(
//         `https://dummyjson.com/users/filter?key=hair.color&value=Brown`
//       );
//       setData(data.users);
//     } catch (error) {
//       console.log("Error", error);
//     }
//   };

//   const childToParent = (childdata) => {
//     let columns = [...initialColumns];
//     let finded = columns.filter((item) => childdata.includes(item.title));
//     setColumns(finded);
//   };
//   const onSelectChange = (newSelectedRowKeys) => {
//     console.log("selectedRowKeys changed: ", newSelectedRowKeys);
//     setSelectedRowKeys(newSelectedRowKeys);
//   };
//   const rowSelection = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//   };
//   return (
//     <div>
//       <div className="w-full items-center gap-x-5 flex justify-between">
//         <div className="w-full flex gap-x-2 items-center">
//           {/* <p className="text-2xl pb-3"> Search Base On Some Table Data :</p> */}
//           <Input
//             onChange={(e) => {
//               setSearchValue(e.target.value);
//               handleSearchUser(e.target.value);
//             }}
//             style={{
//               height: "50px",
//               marginBottom: "30px",
//               maxWidth: isMobileView ? "70%" : "30%",
//               borderRadius: "8px",
//               // borderBottom: "1px solid grey",
//             }}
//             placeholder={"Search Base On Some Table Data"}
//             value={searchValue}
//           />
//         </div>
//         {/* <div>
//           <ExportExcel/>
//         </div> */}
//         <div>
//           <FilterColumnModal
//             columns={columns}
//             childToParent={childToParent}
//             initialColumns={initialColumns}
//           />
//         </div>
//       </div>

//       <Table
//         rowSelection={rowSelection}
//         columns={columns}
//         dataSource={Data}
//         loading={loading}
//         scroll={{
//           x: 1250,
//           y: 140,
//         }}
//         bordered={true}
//         pagination={{
//           pageSize: 5,
//         }}
//       />
//     </div>
//   );
// };

// export default AboutPage;
