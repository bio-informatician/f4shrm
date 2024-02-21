import React, { useState } from 'react';

// Define your breadcrumb history state and initial state
const initialBreadcrumbHistory = [];
const BreadcrumbComponent = () => {
  const [breadcrumbHistory, setBreadcrumbHistory] = useState(initialBreadcrumbHistory);
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0);
  const [isSearched, setIsSearched] = useState(false);
  const [searchText, setSearchText] = useState('');
  const routeMaxLength = 10; // Define your maximum breadcrumb length

  // Define a function to handle going one step back
  const handleGoOneStepBack = () => {
    if (currentRouteIndex > 0) {
      setCurrentRouteIndex(currentRouteIndex - 1);
    }
  };

  // Define a function to handle going one step forward
  const handleGoOneStepForward = () => {
    if (currentRouteIndex < breadcrumbHistory.length - 1) {
      setCurrentRouteIndex(currentRouteIndex + 1);
    }
  };

  // Define a function to navigate to a specific route
  const goToSpecialRoute = (item) => {
    // If navigating to a new route, update the breadcrumb history
    const newBreadcrumbHistory = breadcrumbHistory.slice(0, currentRouteIndex + 1);
    newBreadcrumbHistory.push(item);
    setBreadcrumbHistory(newBreadcrumbHistory);

    // Update the current route index to the new route
    setCurrentRouteIndex(newBreadcrumbHistory.length - 1);

    // Perform the action associated with navigating to the route (e.g., update searchText and setIsSearched)
    setSearchText(item.child);
    setIsSearched(true);
  };

  // Define your JSX for the breadcrumb component
  return (
    <div className="flex flex-row items-center">
      {isSearched ? (
        <p className="flex text-lg text-white">Results For: {searchText}</p>
      ) : (
        <Breadcrumb className="gap-x-2" separator=">">
          <Breadcrumb.Item
            onClick={handleGoOneStepBack}
            className={`cursor-pointer text-white sm:text-xl ${
              currentRouteIndex === 0 ? 'text-gray-400' : 'text-black'
            }`}
          >
            &lt; Go One Step Back
          </Breadcrumb.Item>
          {breadcrumbHistory.map((item, index) => (
            <Breadcrumb.Item
              onClick={() => goToSpecialRoute(item)}
              key={index}
              className={`cursor-pointer text-white sm:text-xl ${
                index === currentRouteIndex ? 'text-black' : 'text-gray-400'
              }`}
            >
              {item.child}
            </Breadcrumb.Item>
          ))}
          <Breadcrumb.Item
            onClick={handleGoOneStepForward}
            className={`cursor-pointer text-white sm:text-xl ${
              currentRouteIndex === breadcrumbHistory.length - 1
                ? 'text-gray-400'
                : 'text-black'
            }`}
          >
            Go One Step Forward &gt;
          </Breadcrumb.Item>
        </Breadcrumb>
      )}
    </div>
  );
};

export default BreadcrumbComponent;
