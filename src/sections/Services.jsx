import Container from '@/components/ui/Container';
import HeadingPrimary from '@/components/ui/HeadingPrimary';
import HeadingSecondary from '@/components/ui/HeadingSecondary';
import TextPrimary from '@/components/ui/TextPrimary';
import {
   BudgetIcon,
   RevenueIcon,
   SearchIcon,
   ServiceIcon,
   SettingIcon,
   TaxIcon,
} from '@/components/ui/icon';

const data = [
   {
      id: 's1',
      icon: <SearchIcon />,
      title: 'Audit & Account',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
   },
   {
      id: 's2',
      icon: <BudgetIcon />,
      title: 'Budget & Projections',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam',
   },
   {
      id: 's3',
      icon: <RevenueIcon />,
      title: 'Payroll & Bookkeeping',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua. Ut enim ad minim veniam',
   },
   {
      id: 's4',
      icon: <SettingIcon />,
      title: 'Software Training & IT',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ',
   },
   {
      id: 's5',
      icon: <TaxIcon />,
      title: 'Tax planning & Returns',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
   },
   {
      id: 's6',
      icon: <ServiceIcon />,
      title: 'Management Information',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn. Ut enim ad minim veniam',
   },
];

function Services() {
   return (
      <section
         id="services"
         className="section"
      >
         <Container>
            <HeadingPrimary>Services</HeadingPrimary>
            <div className="mt-12 grid grid-cols-3 gap-14 place-items-center">
               {data.map((item) => (
                  <div key={item.id} className="flex flex-col items-center space-y-6">
                     <div className="icon">
                        {item.icon}
                     </div>
                     <HeadingSecondary>{item.title}</HeadingSecondary>
                     <TextPrimary className="text-center max-w-[294px]">
                        {item.desc}
                     </TextPrimary>
                  </div>
               ))}
            </div>
         </Container>
      </section>
   );
}
export default Services;
