import { createContext, useState } from "react";
import jobDeails from "../data/jobDetails";
import filterOptions from "../data/filterOptions";
import { useNavigate } from "react-router-dom";

const workContext = createContext();

export const WorkContextProvider = ({ children }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [filteredJobDetails, setFilteredJobDetails] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const navigate = useNavigate();

  const backToJobListHandler = () => {
    navigate("/");
  };

  const showFilterHandler = (e) => {
    e.stopPropagation();
    setShowFilter(!showFilter);
  };
  document.body.addEventListener("click", () => {
    setShowFilter(false);
  });

  const jobFilterHandler = (val) => {
    setFilteredJobDetails(jobDeails);
    setIsFiltering(!isFiltering);
    const searchValue = val.toLowerCase().split(" ").join("");
    let newJOb = jobDeails.filter((jobs) =>
      jobs.location.toLowerCase().split(" ").join("").indexOf(searchValue) > -1
        ? jobs
        : null
    );
    // newJOb = jobDeails.filter((jobs) =>
    //   jobs.location.toLowerCase().split(" ").join("").indexOf(searchValue) > -1
    //     ? jobs
    //     : null
    // );
    // newJOb = jobDeails.filter((jobs) =>
    //   jobs.location.toLowerCase().split(" ").join("").indexOf(searchValue) > -1
    //     ? jobs
    //     : null
    // );
    setFilteredJobDetails(newJOb);
  };

  return (
    <workContext.Provider
      value={{
        jobDeails,
        filterOptions,
        showFilter,
        isFiltering,
        filteredJobDetails,
        backToJobListHandler,
        showFilterHandler,
        jobFilterHandler,
      }}
    >
      {children}
    </workContext.Provider>
  );
};

export default workContext;
