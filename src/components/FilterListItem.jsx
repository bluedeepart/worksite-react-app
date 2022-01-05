import { useContext } from "react";
import workContext from "../context/workContext";

function FilterListItem({ filter }) {
  const inputId = filter.toLowerCase();
  const { jobFilterHandler } = useContext(workContext);
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        className="peer absolute bg-transparent w-5 h-5 opacity-0 cursor-pointer"
        name={inputId}
        id={inputId}
        onChange={() => jobFilterHandler(inputId)}
      />
      <div className="w-5 h-5 border border-text_color peer-checked:bg-prime rounded-2 mr-2"></div>
      <label htmlFor={inputId} className="cursor-pointer">
        {filter}
      </label>
    </div>
  );
}

export default FilterListItem;
