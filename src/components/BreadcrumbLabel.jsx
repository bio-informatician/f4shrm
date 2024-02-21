// BreadcrumbLabel.jsx
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const BreadcrumbLabel = ({ route, goToSpecialRoute }) => {
  // Load breadcrumb history from the cookie when the component mounts
  useEffect(() => {
    const savedHistory = Cookies.getJSON('virjenbreadcrumbHistory');
    if (savedHistory) {
      goToSpecialRoute(savedHistory);
    }
  }, []);

  // Save breadcrumb history to the cookie when it changes
  useEffect(() => {
    Cookies.set('virjenbreadcrumbHistory', route, { expires: 365 }); // Cookie will expire in 365 days
  }, [route]);

  return (
    <div className="breadcrumbs">
      <button
        onClick={() => {
          if (route.length > 1) {
            goToSpecialRoute(route[route.length - 2]);
          }
        }}
        className="go-back"
      >
        Go One Step Back
      </button>
      <span>
        {route.map((item, index) => (
          <span
            onClick={() => goToSpecialRoute(item)}
            key={index}
            className={`breadcrumb-item ${
              index === route.length - 1 ? 'current' : ''
            }`}
          >
            {item.child}
          </span>
        ))}
      </span>
    </div>
  );
};

export default BreadcrumbLabel;
