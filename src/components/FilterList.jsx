import FilterListItem from "./FilterListItem";

function FilterList({ options }) {
  const { title, filters } = options;

  return (
    <div className="mb-6 last:mb-0" onClick={(e) => e.stopPropagation()}>
      <h3 className="text-lg text-white font-bold mb-2">{title}</h3>
      {filters.map((filter, index) => (
        <FilterListItem key={index} filter={filter} />
      ))}
    </div>
  );
}

export default FilterList;
