import Layout from "./components/Layout";
import MailForm from "./components/MailForm";
import Presentation from "./components/Presentation";
import Products from "./components/Products";
import StickyFooter from "./components/StickyFooter";

function App() {
  return (
    <Layout>
      <Presentation/>
      <Products/>
      <MailForm/>
      <StickyFooter/>
    </Layout>
  );
}

export default App;
