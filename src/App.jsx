import { Header } from "./components/UI/Header/Header";
import { Layout } from "./components/UI/Layout/Layout";
import { TaskList } from "./components/TaskList/TaskList";


function App() {
  return (
    <>
      <Header />
      <Layout>
        <TaskList/>
      </Layout>
    </>

  );
}

export default App;
