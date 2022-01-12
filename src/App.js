import CarouselItem from "./components/Carousel/CarouselItem";

function App() {
  return (
    <div className="App">
      <CarouselItem
        img="https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg"
        title="유저 경험을 설계하라!"
        subtitle="문제를 해결하는 프로덕트 디자인"
        link="https://www.wanted.co.kr/events/wantedcon22"
      ></CarouselItem>
    </div>
  );
}

export default App;
