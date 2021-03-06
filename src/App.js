import Carousel from "./components/Carousel";
import CarouselItem from "./components/Carousel/CarouselItem";
import GNB from "./components/GNB";
import { carousel } from "./mocks";

function App() {
  return (
    <div className="App">
      <GNB />
      <Carousel>
        {carousel.map((item) => (
          <CarouselItem
            key={item.id}
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
          ></CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
