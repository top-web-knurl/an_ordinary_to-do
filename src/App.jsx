import { Header } from "./components/UI/Header/Header";
import { Layout } from "./components/UI/Layout/Layout";
import { TaskList } from "./components/TaskList/TaskList";
import { SearchState } from "./components/context/Search/SearchState";
import { Footer } from "./components/UI/Footer/Footer";




function App() {
  return (
    <div className="page-wrapper">
      <SearchState>
        <Header />
        <Layout>
          <TaskList />
        </Layout>
        <Footer />
      </SearchState>
    </div>

  );
}

export default App;
