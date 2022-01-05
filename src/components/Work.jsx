import WorkDesc from "./WorkDesc";
import WorkList from "./WorkList";

function Work() {
  return (
    <section className="md:flex md:justify-between xl:basis-5/6 w-full items-start xl:items-stretch">
      <WorkList cssCLass="lg:w-sm md:w-2/5" />
      <WorkDesc cssClass="md:ml-6 lg:ml-8 lg:w-desc md:w-3/5" />
    </section>
  );
}

export default Work;
