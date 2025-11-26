import Title from "@/shared/ui/Title";
import { Container } from "@/shared/ui/Container";
import Categories from "@/features/FilterByCategory/ui/Category";
import SortPopup from "@/features/ProductSort/ui/Sort";

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
      </Container>
    </div>
  );
}

export default HomePage;
