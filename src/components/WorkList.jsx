import { useContext } from "react";
import workContext from "../context/workContext";
import WorkListCard from "./WorkListCard";

function WorkList({ cssCLass }) {
  const { jobDeails, isFiltering, filteredJobDetails } = useContext(workContext);

  if(isFiltering){
    return ( <div className={cssCLass}>
      {filteredJobDetails.map((job, index) => (
        <WorkListCard key={index} index={index} job={job} />
      ))}
    </div>)
  }else{
    return( <div className={cssCLass}>
      {jobDeails.map((job, index) => (
        <WorkListCard key={index} index={index} job={job} />
      ))}
    </div>)
  }
}

export default WorkList;
