import Card from "./shared/Card"

function FirstJobCard() {
    return (
        <Card cssClass="hidden md:block">
                <div className="flex justify-between  mb-6">
                  <div>
                    <h3 className="text-white font-bold text-xl">
                      Frontend Developer
                    </h3>
                    <p>Virginia, United States</p>
                  </div>
                  <p className="text-white">Posted 4 days ago</p>
                </div>
                <div className="bg-dark p-6 rounded-5 xs:flex justify-between mb-6">
                  <div>
                    <h3 className="text-white font-bold mb-4 xs:mb-0">
                      Experience
                    </h3>
                    <p>Expert</p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-4 xs:mb-0">Location</h3>
                    <p>Virginia, United States</p>
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Salary Range</h3>
                    <p>$100-$120/hr</p>
                  </div>
                </div>
                <h3 className="text-white font-bold mb-4">Company Overview</h3>
                <p className="mb-6">
                  Dividstar was established in 1932 by Matthew Cohens in
                  Virginia, United States. Dividstar has been the leader
                  application for personal finance over the past 10 decades and
                  aim to continue holding that position. As times continue to
                  evolve, we do too.
                </p>
                <h3 className="text-white font-bold mb-4">Job Requirements</h3>
                <ul className="mb-6">
                  <li className="mb-2 before:bg-checkmark relative before:absolute before:top-0.5 before:left-0 before:w-6 before:h-6 before:bg-no-repeat pl-7">
                    4 years of professional working experience.
                  </li>
                  <li className="mb-2 before:bg-checkmark relative before:absolute before:top-0.5 before:left-0 before:w-6 before:h-6 before:bg-no-repeat pl-7">
                    Understanding of Next.js, React, and Angular.
                  </li>
                  <li className="mb-2 before:bg-checkmark relative before:absolute before:top-0.5 before:left-0 before:w-6 before:h-6 before:bg-no-repeat pl-7">
                    Knowledge of REACT tools including React.js, Webpack,
                    Enzyme, Redux, and Flux.
                  </li>
                </ul>
                <div className="text-right">
                  <button className="rounded-5 px-6 py-4  bg-prime text-white">
                    Apply to job
                  </button>
                </div>
              </Card>
    )
}

export default FirstJobCard
