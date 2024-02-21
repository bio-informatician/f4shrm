// import React from 'react';
// import { Button, Modal, Form, Input, message } from 'antd';
// import { SendOutlined } from '@ant-design/icons';
// import emailjs from 'emailjs-com';


// const FeedbackButton = () => {
//   const [visible, setVisible] = React.useState(false);

//   const showModal = () => {
//     setVisible(true);
//   };

//   const handleCancel = () => {
//     setVisible(false);
//   };

//   const handleSubmit = async (values) => {
//     try {
//       await emailjs.send(
//         'YOUR_SERVICE_ID', // Your EmailJS service ID
//         'YOUR_TEMPLATE_ID', // Your EmailJS template ID
//         {
//           from_name: values.name,
//           from_email: values.email,
//           message: values.feedback,
//         },
//         'YOUR_USER_ID' // Your EmailJS user ID
//       );

//       setVisible(false);
//       message.success('Thank you for your feedback!');
//     } catch (error) {
//       console.error('Error sending feedback:', error);
//       message.error('Failed to send feedback. Please try again later.');
//     }
//   };

//   return (
//     <>
//       <Button
//         type="primary"
//         shape="circle"
//         size="large"
//         icon={<SendOutlined />}
//         style={{
//           position: 'fixed',
//           bottom: 20,
//           right: 20,
//           zIndex: 1000,
//         }}
//         onClick={showModal}
//       />

//       <Modal
//         title="Feedback"
//         visible={visible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <Form onFinish={handleSubmit}>
//           <Form.Item
//             label="Your Name"
//             name="name"
//             rules={[{ required: true, message: 'Please enter your name!' }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             label="Your Email"
//             name="email"
//             rules={[
//               {
//                 required: true,
//                 message: 'Please enter your email address!',
//                 type: 'email',
//               },
//             ]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             label="Feedback"
//             name="feedback"
//             rules={[
//               { required: true, message: 'Please enter your feedback!' },
//             ]}
//           >
//             <Input.TextArea rows={4} />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Submit Feedback
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default FeedbackButton;
