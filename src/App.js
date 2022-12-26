import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import Hero from './components/Hero';
import MailingList from './components/MailingList';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <MailingList/>
      <Footer></Footer>
    </div>
  );
}

export default App;
