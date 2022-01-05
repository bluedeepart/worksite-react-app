import Card from "./shared/Card";
import checkmarkNotVerified from "../assets/images/checkmarkNotVerified.svg";
import checkmarkVerified from "../assets/images/checkmarkVerified.svg";
import location from "../assets/images/location.svg";
import firstjoblogo from "../assets/images/firstjoblogo.svg";
import secondjoblogo from "../assets/images/secondjoblogo.svg";
import thirdjoblogo from "../assets/images/thirdjoblogo.svg";
import fourthjoblogo from "../assets/images/fourthjoblogo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function WorkListCard({ job, index }) {
  const imgSrc = [firstjoblogo, secondjoblogo, thirdjoblogo, fourthjoblogo];
  const [linkUrl, setLinkUrl] = useState(job.title);

  useEffect(() => {
    setLinkUrl(job.title.toLowerCase().split(" ").join("-"));
  }, [job.title]);

  return (
    <Card>
      <Link
        to={{
          pathname: `/worksite-react-app/${linkUrl}`,
        }}
      >
        <div className="flex items-start space-x-4 mb-4">
          <img src={imgSrc[job.id - 1]} alt={job.title} />
          <div>
            <h3 className="text-white font-bold">{job.title}</h3>
            <p className="flex items-center">
              <img src={location} alt="location" className="mr-1" />
              {job.location}
            </p>
          </div>
        </div>
        <div className="xs:flex justify-between">
          <ul className="flex items-start space-x-2 mb-4 xs:mb-0">
            {job.tags.map((tag, index) => (
              <li key={index} className="bg-dark-2 px-2 py-1 rounded-5 text-sm">
                {tag}
              </li>
            ))}
          </ul>
          <p className="text-white font-bold flex items-center">
            <img
              src={
                job.isPaymentVerified ? checkmarkVerified : checkmarkNotVerified
              }
              alt="Payment"
              className="mr-3"
            />
            {job.isPaymentVerified ? "Payment Verified" : "Payment Unverified"}
          </p>
        </div>
      </Link>
    </Card>
  );
}

export default WorkListCard;
