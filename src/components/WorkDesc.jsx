import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import workContext from "../context/workContext";
import FirstJobCard from "./FirstJobCard";
import WorkDescCard from "./WorkDescCard";

function WorkDesc({ cssClass }) {
  const { jobDeails, isFiltering, filteredJobDetails } =
    useContext(workContext);

  return (
    <div className={cssClass}>
      {isFiltering ? null : (
        <Routes>
          <Route index element={<FirstJobCard />} />
        </Routes>
      )}
      {isFiltering
        ? filteredJobDetails.map((job, index) => (
            <WorkDescCard key={index} index={index} job={job} />
          ))
        : jobDeails.map((job, index) => (
            <WorkDescCard key={index} index={index} job={job} />
          ))}
    </div>
  );
}

export default WorkDesc;
