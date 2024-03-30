import Container from '@/components/ui/Container';
import HeadingPrimary from '@/components/ui/HeadingPrimary';
import User from '../images/user.jpg';
import HeadingSecondary from '@/components/ui/HeadingSecondary';
import TextPrimary from '@/components/ui/TextPrimary';
import { LeftQuoteIcon, RightQuoteIcon } from '@/components/ui/icon';

function Testimonals() {
   return (
      <section className="section">
         <Container>
            <HeadingPrimary>Testimonials</HeadingPrimary>
            <div className="grid mt-12 gap-16 grid-cols-2">

               {/* I would have made this separate component and rendered using array data. But due to limited time I copied it */}
               <div className="p-7 bg-white rounded-2xl space-y-3 shadow-lg relative">
                  <div className="absolute top-0 left-3 -translate-y-1/2 icon">
                     <LeftQuoteIcon />
                  </div>
                  <div className="absolute bottom-0 right-3 translate-y-1/2 icon">
                     <RightQuoteIcon />
                  </div>
                  <div className="flex items-center space-x-4">
                     <div className="rounded-full img max-w-[56px]">
                        <img
                           src={User}
                           alt="user"
                        />
                     </div>
                     <HeadingSecondary>Josh brollins</HeadingSecondary>
                  </div>
                  <TextPrimary>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                     tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                  </TextPrimary>
               </div>
               <div className="p-7 bg-white rounded-2xl space-y-3 shadow-lg relative">
                  <div className="absolute top-0 left-3 -translate-y-1/2 icon">
                     <LeftQuoteIcon />
                  </div>
                  <div className="absolute bottom-0 right-3 translate-y-1/2 icon">
                     <RightQuoteIcon />
                  </div>
                  <div className="flex items-center space-x-4">
                     <div className="rounded-full img max-w-[56px]">
                        <img
                           src={User}
                           alt="user"
                        />
                     </div>
                     <HeadingSecondary>Josh brollins</HeadingSecondary>
                  </div>
                  <TextPrimary>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                     tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                  </TextPrimary>
               </div>
            </div>
         </Container>
      </section>
   );
}
export default Testimonals;
