import "./App.css";
import Banner from "./component/Banner/Banner";
import Navbar from "./component/Navbar/Navbar";
import Row from "./component/Row/Row";
import Card from "./component/Row/Card";
import { pbBogor, pbCantik, pbKcmt, pbKuncir, pbOren, pbZoom } from "./data";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Banner />

      <Row title="PB Ke Bogor">
        {pbBogor.map((data) => (
          <>
            <Card key={data.id} img={data.img} wish={data.wish} />
          </>
        ))}
      </Row>

      <Row title="PB kawai desune">
        {pbZoom.map((data) => (
          <>
            <Card key={data.id} img={data.img} wish={data.wish} />
          </>
        ))}
      </Row>

      <Row title="PB ke Bandoeng">
        {pbKuncir.map((data) => (
          <>
            <Card key={data.id} img={data.img} wish={data.wish} />
          </>
        ))}
      </Row>

      <Row title="PB pake baju the jack">
        {pbOren.map((data) => (
          <>
            <Card key={data.id} img={data.img} wish={data.wish} />
          </>
        ))}
      </Row>

      <Row title="PB lucu bgt ga ngerti lagi">
        {pbKcmt.map((data) => (
          <>
            <Card key={data.id} img={data.img} wish={data.wish} />
          </>
        ))}
      </Row>

      <Row title="PB si paling cantik">
        {pbCantik.map((data) => (
          <>
            <Card key={data.id} img={data.img} wish={data.wish} />
          </>
        ))}
      </Row>
    </div>
  );
}

export default App;
