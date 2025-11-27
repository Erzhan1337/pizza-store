import Title from "@/shared/ui/title";
import { Container } from "@/shared/ui/container";
import Categories from "@/features/FilterByCategory/ui/Category";
import SortPopup from "@/features/ProductSort/ui/Sort";
import Filters from "@/features/SidebarFilter/ui/Filter";

function HomePage() {
  return (
    <div>
      <Container className="lg:mt-10 md:mt-7 mt-5">
        <Title
          text="Все пиццы"
          size="4xl"
          className="text-xl md:text-2xl lg:text-4xl"
        />
        <div className="mt-3 md:mt-5 flex items-center justify-between">
          <Categories />
          <SortPopup />
        </div>
        <div>
          <Filters />
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
