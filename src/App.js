import { WorkContextProvider } from "./context/workContext";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Container from "./components/shared/Container";
import WorkList from "./components/WorkList";
import WorkDesc from "./components/WorkDesc";
import FilterBtn from "./components/FilterBtn";

function App() {
  const param = useParams();
  return (
    <Router>
      <WorkContextProvider>
        <div className="pb-5">
          <Header />
          <main className="pb-10">
            <Container>
              <FilterBtn direction="right" />
              <div className="flex relative">
                <Filter />
                <section className="md:flex md:justify-between xl:basis-5/6 w-full items-start xl:items-stretch">
                  <WorkList cssCLass="lg:w-sm md:w-2/5" />
                  <WorkDesc cssClass="md:ml-6 lg:ml-8 lg:w-desc md:w-3/5 absolute top-0 left-0 h-full bg-dark md:static" />
                  <Routes>
                    <Route index element={param.slug} />
                    <Route path="/job/:slug" element={param.slug}></Route>
                  </Routes>
                </section>
              </div>
            </Container>
          </main>
        </div>
      </WorkContextProvider>
    </Router>
  );
}

export default App;
