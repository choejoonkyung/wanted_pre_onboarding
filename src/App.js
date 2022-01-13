import Carousel from "./components/Carousel";
import CarouselItem from "./components/Carousel/CarouselItem";

function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem
          img="https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg"
          title="유저 경험을 설계하라1!"
          subtitle="문제를 해결하는 프로덕트 디자인"
          link="https://www.wanted.co.kr/events/wantedcon22"
        ></CarouselItem>
        <CarouselItem
          img="https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg"
          title="유저 경험을 설계하라2!"
          subtitle="문제를 해결하는 프로덕트 디자인"
          link="https://www.wanted.co.kr/events/wantedcon22"
        ></CarouselItem>
        <CarouselItem
          img="https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg"
          title="유저 경험을 설계하라3!"
          subtitle="문제를 해결하는 프로덕트 디자인"
          link="https://www.wanted.co.kr/events/wantedcon22"
        ></CarouselItem>
        <CarouselItem
          img="https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg"
          title="유저 경험을 설계하라4!"
          subtitle="문제를 해결하는 프로덕트 디자인"
          link="https://www.wanted.co.kr/events/wantedcon22"
        ></CarouselItem>
        <CarouselItem
          img="https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg"
          title="유저 경험을 설계하라5!"
          subtitle="문제를 해결하는 프로덕트 디자인"
          link="https://www.wanted.co.kr/events/wantedcon22"
        ></CarouselItem>
        <CarouselItem
          img="https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg"
          title="유저 경험을 설계하라6!"
          subtitle="문제를 해결하는 프로덕트 디자인"
          link="https://www.wanted.co.kr/events/wantedcon22"
        ></CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
