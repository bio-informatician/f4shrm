import { Checkbox, Col, Row } from "antd";
import { useEffect, useState } from "react";

const App = ({ childToParent, isSelectAll, initialColumns }) => {
  let [initialColumn, setInitialColumn] = useState([]);
  
  useEffect(() => {
      initialColumn = initialColumns.map((item) => item.title);
      setInitialColumn(initialColumn);
    }, []);
    
    const [checkedList, setCheckedList] = useState(initialColumn);
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
    childToParent(checkedValues);
  };

//   useEffect(() => {
//     if (isSelectAll) {
//       onChange([...initialColumn]);
//     }else {
//         onChange([]);
//     }
//   }, [isSelectAll]);

  return (
    <Checkbox.Group
      style={{
        width: "100%",
      }}
      onChange={onChange}
      value={checkedList}
    >
      <Row>
        {initialColumn.map((item, index) => (
          <Col span={8}>
            <Checkbox value={item} key={index}>
              {item}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );
};

export default App;
