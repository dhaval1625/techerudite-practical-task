import Navbar from '@/components/Navbar';
import Background from '../images/bg-banner.jpg';
import Container from '../components/ui/Container';
import { Button } from '@/components/ui/button';

function Banner() {
   return (
      <section
         id="home"
         style={{ backgroundImage: `url(${Background})` }}
         className="bg-img"
      >
         <Navbar />
         <div className="section">
            <Container>
               <div className="space-y-6 max-w-[516px]">
                  <h1 className="text-5xl leading-tight font-bold uppercase heading">
                     How much
                     <br />
                     could you save?
                  </h1>
                  <p className='max-w-[470px] text-lg'>
                     Answer the questions below to get a fixed price quotation for us to take your
                     accountancy hassles away from you.
                  </p>
                  <div className="p-8 space-y-5 rounded-2xl shadow-sm bg-white">
                     <p className="text-2xl text-center">
                        Is your turnover expected to be more than £85k?
                     </p>
                     <div className="flex items-center justify-center space-x-4">
                        <Button>Yes</Button>
                        <Button>No</Button>
                     </div>
                  </div>
                  <p className="text-base">Takes less than 30 seconds</p>
               </div>
            </Container>
         </div>
      </section>
   );
}

export default Banner;
