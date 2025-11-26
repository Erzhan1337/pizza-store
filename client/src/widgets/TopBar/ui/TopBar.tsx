import Categories from "@/features/FilterByCategory/ui/Category";
import SortPopup from "@/features/ProductSort/ui/Sort";

function TopBar() {
  return (
    <div>
      <Categories />
      <SortPopup />
    </div>
  );
}

export default TopBar;
