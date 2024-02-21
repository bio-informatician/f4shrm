// import React, { useState, useEffect } from 'react';

// const AcceptancePopup = () => {
//   const [showPopup, setShowPopup] = useState(true);

//   useEffect(() => {
//     const hasAccepted = localStorage.getItem('accepted');
//     if (hasAccepted) {
//       setShowPopup(false);
//     }
//   }, []);

//   const handleAccept = () => {
//     localStorage.setItem('accepted', true);
//     setShowPopup(false);
//   };

//   return (
//     showPopup && (
//       <div
//         style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           zIndex: 9999,
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: 'white',
//             padding: '20px',
//             borderRadius: '5px',
//           }}
//         >
//           <div style={{ textAlign: 'center' }}>
//             <h2>Welcome to VirJenDB!</h2>
//             <p>

// VirJenDB is a community-driven platform dedicated to researchers like you. Our goal is to provide a comprehensive resource for finding, accessing, curating, downloading, and analyzing sequences and metadata from all viruses.

// Terms and Conditions

// Before accessing the wealth of data and tools available on VirJenDB, we kindly ask you to review and accept our terms and conditions. By clicking "Accept" below, you agree to abide by our policies and guidelines.

// Your Contribution Matters

// At VirJenDB, we believe in the power of collaboration and community-driven research. Your contributions help enhance the quality and accessibility of virus-related data for researchers worldwide.

// Thank you for joining us on this journey!</p>
//             <div>
//               <button
//                 style={{
//                   padding: '10px 20px',
//                   backgroundColor: '#007bff',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                 }}
//                 onClick={handleAccept}
//               >
//                 Accept
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default AcceptancePopup;




import React, { useState, useEffect } from 'react';

const AcceptancePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('accepted');
    if (hasAccepted) {
      setShowPopup(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('accepted', true);
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            maxWidth: '600px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginBottom: '20px' }}>Welcome to VirJenDB!</h2>
          <p>
            VirJenDB is a community-driven platform dedicated to researchers
            like you. Our goal is to provide a comprehensive resource for
            finding, accessing, curating, downloading, and analyzing sequences
            and metadata from all viruses.
          </p>
          <p>
            <strong>Terms and Conditions:</strong> Before accessing the wealth
            of data and tools available on VirJenDB, we kindly ask you to
            review and accept our terms and conditions. By clicking "Accept"
            below, you agree to abide by our policies and guidelines.
          </p>
          <p>
            <strong>Your Contribution Matters:</strong> At VirJenDB, we believe
            in the power of collaboration and community-driven research. Your
            contributions help enhance the quality and accessibility of
            virus-related data for researchers worldwide.
          </p>
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </div>
    )
  );
};

export default AcceptancePopup;
