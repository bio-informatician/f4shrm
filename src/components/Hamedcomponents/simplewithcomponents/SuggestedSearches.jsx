// SuggestedSearches.jsx
import React from 'react';
import { Button } from 'antd';

const SuggestedSearches = ({ goToResults, mostRecomendSearched }) => {
  return (
    <div className="w-full flex gap-x-5 justify-center items-center flex-col gap-y-4 ">
      <div className="text-white">Suggested Searches : </div>
      <div className="w-full flex gap-x-5 justify-center items-center recomeSearch">
        {mostRecomendSearched.map((item) => (
          <Button
            key={item.key}
            onClick={() => goToResults(item)}
            style={{
              backgroundColor: '#ffff',
              borderColor: '#ffff',
              color: 'black',
            }}
          >
            {item.key}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedSearches;
