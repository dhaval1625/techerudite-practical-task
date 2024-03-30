import Container from "@/components/ui/Container";
import HeadingPrimary from "@/components/ui/HeadingPrimary";
import HeadingSecondary from "@/components/ui/HeadingSecondary";
import TextPrimary from "@/components/ui/TextPrimary";
import BgObject from '../images/bg-object-process.png';
import ItemObject from '../images/process-item-bg.png';

function Process() {
   return <section className="section relative" id="process">

      {/* This background image was there in figma. But doesn't look too good. So I commented it. */}
      {/* <div className="img max-w-[1000px] absolute left-0 -translate-x-1/2 top-0">
         <img src={BgObject} alt="background object" />
      </div> */}
      <Container>
         <HeadingPrimary>Our Process</HeadingPrimary>
         <div className="grid grid-cols-3 gap-12 mt-12">
            <div className="relative aspect-square flex items-center justify-center">
               <div className="img absolute top-0 left-0 w-full h-full">
                  <img src={ItemObject} alt="background object" />
               </div>
               <div className="space-y-5 max-w-[220px] text-center relative">
                  <HeadingSecondary>Step 1</HeadingSecondary>
                  <TextPrimary>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </TextPrimary>
               </div>
            </div>
            <div className="relative aspect-square flex items-center justify-center">
               <div className="img absolute top-0 left-0 w-full h-full">
                  <img src={ItemObject} alt="background object" />
               </div>
               <div className="space-y-5 max-w-[220px] text-center relative">
                  <HeadingSecondary>Step 2</HeadingSecondary>
                  <TextPrimary>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </TextPrimary>
               </div>
            </div>
            <div className="relative aspect-square flex items-center justify-center">
               <div className="img absolute top-0 left-0 w-full h-full">
                  <img src={ItemObject} alt="background object" />
               </div>
               <div className="space-y-5 max-w-[220px] text-center relative">
                  <HeadingSecondary>Step 3</HeadingSecondary>
                  <TextPrimary>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </TextPrimary>
               </div>
            </div>
         </div>
      </Container>
   </section>;
}
export default Process;
