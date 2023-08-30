import React from "react";

const RangeSlider = ({ value, onInput }) => {
  return (
    <>
      <div className="px-9 mt-2 lg:px-0 sm:px-9">
        <input
          type="range"
          min="1"
          max="35"
          step="1"
          value={value}
          onInput={onInput}
          className="calculate_range_slider"
        />
      </div>
    </>
  );
};

export default RangeSlider;
