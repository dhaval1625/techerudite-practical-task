import Container from '@/components/ui/Container';
import Background from '../images/bg-about-us.jpg';
import HeadingPrimary from '@/components/ui/HeadingPrimary';
import TextPrimary from '@/components/ui/TextPrimary';
import { Button } from '@/components/ui/button';
import { AboutObject } from '@/components/ui/icon';

function About() {
   return <section style={{backgroundImage: `url(${Background})`, backgroundSize: '80%', backgroundPosition: 'right'}} className="section" id="about">
      <Container>
         <div className="grid mt-40 mb-20 about-grid gap-10 place-items-center">
            <div className="space-y-6">
               <HeadingPrimary>About us</HeadingPrimary>
               <TextPrimary>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr</TextPrimary>
               <Button>Contact Us</Button>
            </div>
            <div className="icon">
               <AboutObject />
            </div>
         </div>
      </Container>
   </section>;
}
export default About;
