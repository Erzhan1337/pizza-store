import Title from "@/shared/ui/title";
import FilterCheckboxGroup from "@/features/SidebarFilter/ui/FilterCheckboxGroup";

function Filters() {
  return (
    <div>
      <Title text="Фильтрация" size="2xl" />
      <FilterCheckboxGroup />
    </div>
  );
}

export default Filters;