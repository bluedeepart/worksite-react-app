import { useContext } from "react";
import workContext from "../context/workContext";
import FilterList from "./FilterList";

function Filter() {
  const { filterOptions, showFilter } = useContext(workContext);
  if (showFilter) {
    return (
      <div className="absolute basis-1/6 bg-dark p-4 right-0 top-0 xl:block z-10 max-w-xs w-full h-full">
        {filterOptions.map((options, index) => (
          <FilterList key={index} options={options} />
        ))}
      </div>
    );
  } else
    return (
      <>
        <div className="basis-1/6 hidden xl:block">
          {filterOptions.map((options, index) => (
            <FilterList key={index} options={options} />
          ))}
        </div>
      </>
    );
}

export default Filter;
