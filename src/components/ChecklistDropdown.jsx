import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";

const ChecklistDropdown = () => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelect = (selectedList) => {
    setSelectedValues(selectedList);
    console.log(selectedValues);
  };
  console.log(selectedValues);
  return (
    <>
      <Multiselect
        isObject={false}
        onKeyPressFn={function noRefCheck() {}}
        onRemove={function noRefCheck() {}}
        onSearch={function noRefCheck() {}}
        onSelect={handleSelect}
        selectedValues={selectedValues}
        className="checklistdropdown"
        options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]}
      />
   
    </>
  );
};

export default ChecklistDropdown;
