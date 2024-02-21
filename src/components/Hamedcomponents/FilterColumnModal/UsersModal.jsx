import React from 'react';
import { Modal, Card } from 'antd';

const UsersModal = ({ open, selectedRow, onCancel }) => {
  return (
    <Modal
      open={open}
      title="Users Data"
      onCancel={onCancel}
      footer={null}
      width={1000}
      bodyStyle={{ maxHeight: '500px', overflow: 'scroll' }}
    >
      <div className="w-full flex flex-col gap-y-4">
        {selectedRow.map((item) => (
          <Card hoverable key={item.id}>
            {/* Render user data here */}
          </Card>
        ))}
      </div>
    </Modal>
  );
};

export default UsersModal;



// import React from 'react';
// import { Modal, Card } from 'antd';

// const UsersModal = ({ open, selectedRow, onCancel }) => {
//   return (
//     <Modal
//       visible={open}
//       title="Users Data"
//       onCancel={onCancel}
//       footer={null}
//       width={1000}
//       bodyStyle={{ maxHeight: '500px', overflow: 'scroll' }}
//     >
//       <div className="w-full flex flex-col gap-y-4">
//         {selectedRow.map((item) => (
//           <Card hoverable key={item.id}>
//             {/* Render user data here */}
//           </Card>
//         ))}
//       </div>
//     </Modal>
//   );
// };

// export default UsersModal;






// import React from 'react';
// import { Modal, Card } from 'antd';

// const UsersModal = ({ open, selectedRow, onCancel }) => {
//   return (
//     <Modal
//       open={open}
//       title="Users Data"
//       onCancel={onCancel}
//       footer={null}
//       width={1000}
//       bodyStyle={{ maxHeight: '500px', overflow: 'scroll' }}
//     >
//       <div className="w-full flex flex-col gap-y-4">
//         {selectedRow.map((item) => (
//           <Card hoverable key={item.id}>
//             {/* Render user data here */}
//           </Card>
//         ))}
//       </div>
//     </Modal>
//   );
// };

// export default UsersModal;