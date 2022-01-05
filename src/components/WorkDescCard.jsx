import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Button from "./shared/Button";
import Card from "./shared/Card";

function WorkDescCard({ job, index }) {
  const [linkUrl, setLinkUrl] = useState(job.title);
  const desc = job.desc;
  useEffect(() => {
    setLinkUrl(job.title.toLowerCase().split(" ").join("-"));
  }, [job.title]);

  // if (index === 1) {
  //   console.log(1456);
  // }

  return (
    <Routes>
      {/* <Route
        path="/"
        element={<Navigate to="/looking-for-a-freelance-frontend-developer" />}
      /> */}
      <Route
        path={`/${linkUrl}`}
        element={
          <>
            <Card>
              <div className="flex justify-between  mb-6">
                <div>
                  <h3 className="text-white font-bold text-xl">{desc.title}</h3>
                  <p>{job.location}</p>
                </div>
                <p className="text-white">Posted {desc.date} ago</p>
              </div>
              <div className="bg-dark p-6 rounded-5 xs:flex justify-between mb-6">
                <div>
                  <h3 className="text-white font-bold mb-4 xs:mb-0">
                    Experience
                  </h3>
                  <p>{desc.level}</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-4 xs:mb-0">
                    Location
                  </h3>
                  <p>{job.location}</p>
                </div>
                <div>
                  <h3 className="text-white font-bold">Salary Range</h3>
                  <p>{desc.salary}</p>
                </div>
              </div>

              <h3 className="text-white font-bold mb-4">Company Overview</h3>
              <p className="mb-6">{desc.overview}</p>

              <h3 className="text-white font-bold mb-4">Job Requirements</h3>
              <ul className="mb-6">
                {desc.jobRequirement.map((requirement, index) => (
                  <li
                    key={index}
                    className="mb-2 before:bg-checkmark relative before:absolute before:top-0.5 before:left-0 before:w-6 before:h-6 before:bg-no-repeat pl-7"
                  >
                    {requirement}
                  </li>
                ))}
              </ul>
              <div className="text-right">
                <Button cssClass="bg-prime text-white">Apply to job</Button>
              </div>
            </Card>
          </>
        }
      ></Route>
    </Routes>
  );
}

export default WorkDescCard;
