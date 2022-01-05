import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import downArrow from "../assets/images/downArrow.svg";
import workContext from "../context/workContext";
import Button from "./shared/Button";

function FilterBtn({ direction }) {
  const { backToJobListHandler, showFilterHandler } = useContext(workContext);

  return (
    <div className={`text-${direction} flex justify-between`}>
      <Routes>
        <Route
          path="/:slug"
          element={
            <Button
              cssClass="text-white bg-prime mb-6 inline-flex items-center md:hidden"
              click={backToJobListHandler}
            >
              <img src={downArrow} alt="Filters" className="mr-3 rotate-90" />
              Back
            </Button>
          }
        />
      </Routes>

      <Button></Button>

      <Button
        cssClass="text-white bg-surface mb-6 inline-flex items-center xl:hidden self-end"
        click={showFilterHandler}
      >
        Filters
        <img src={downArrow} alt="Filters" className="ml-3" />
      </Button>
    </div>
  );
}

export default FilterBtn;
