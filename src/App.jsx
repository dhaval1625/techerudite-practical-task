import './App.css';
import About from './sections/About';
import Banner from './sections/Banner';
import Process from './sections/Process';
import Services from './sections/Services';
import { BlogBG } from './components/ui/icon';
import Testimonals from './sections/Testimonals';
import Blogs from './sections/Blogs';
import Contact from './sections/Contact';

function App() {
   return (
      <main>
         <Banner />
         <Services />
         <About />
         <Process />
         <div className="relative pt-16">
            <div className="absolute icon top-0 left-0 w-full">
               <BlogBG />
            </div>
            <div className="relative">
               <Testimonals />
               <Blogs />
            </div>
         </div>
         <Contact />
      </main>
   );
}

export default App;
