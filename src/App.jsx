import { Header } from "./components/UI/Header/Header";
import { Layout } from "./components/UI/Layout/Layout";
import { TaskList } from "./components/TaskList/TaskList";
import { SearchState } from "./components/context/Search/SearchState";




function App() {
  return (
    <>
      <SearchState>
        <Header />
        <Layout>
          <TaskList />
        </Layout>
      </SearchState>
    </>

  );
}

export default App;
