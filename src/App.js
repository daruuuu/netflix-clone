import "./App.css";
import Banner from "./component/Banner/Banner";
import Navbar from "./component/Navbar/Navbar";
import Row from "./component/Row/Row";
import request from "./request";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Banner />

      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" fetchUrl={request.fetchTrending} />

      <Row title="TOP RATED" fetchUrl={request.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />

      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
