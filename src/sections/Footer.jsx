import Container from '@/components/ui/Container';
import Logo from '../images/logo.png';
import { useEffect, useState } from 'react';
import { FOOTER_URL } from '@/lib/config';
import { fetchData } from '@/lib/utils';

function Footer() {
   const [footerData, setFooterData] = useState(null);

   const getFooterData = async () => {
      const data = await fetchData(FOOTER_URL);
      setFooterData(data.data);
   };

   useEffect(() => {
      getFooterData();
   }, []);
   return (
      <section className="section !pb-10 bg-blue-200">
         <Container>
            {footerData && <div className="grid grid-cols-2 gap-10">
               <div className="border-r border-blue-100 space-y-6 pr-10">
                  <h2 className="text-[22px] font-bold max-w-[433px]">
                     Tagline will go here. Lorem ipsum d oler sit amet…
                  </h2>
                  <p className="text-[22px] font-bold text-blue-300">{footerData.inquiry_mail}</p>
               </div>
               <div className="grid pl-10 grid-cols-2 gap-20">
                  <div className="space-y-3 max-w-[160px]">
                     <p className="text-gray text-sm leading-loose font-semibold">Address</p>
                     <p className="text-gray-100 text-sm leading-loose">
                        {footerData.address}
                     </p>
                  </div>
                  <div className="space-y-3 max-w-[160px]">
                     <p className="text-gray text-sm font-semibold">Contacts</p>
                     <div>
                        <p className="text-gray-100 text-sm leading-loose">{footerData.contact_mail}</p>
                        <p className="text-gray-100 text-sm leading-loose">{footerData.contact_no}</p>
                     </div>
                  </div>
               </div>
            </div>}

            <div className="mt-20 flex justify-between items-center">
               <a href='#home' className="img max-w-[135px]">
                  <img
                     src={Logo}
                     alt="logo"
                  />
               </a>
               <ul className="flex items-center space-x-7">
                  <li>
                     <a
                        className="text-base text-gray-100 hover:underline"
                        href="#about"
                     >
                        About
                     </a>
                  </li>
                  <li>
                     <a
                        className="text-base text-gray-100 hover:underline"
                        href="#blogs"
                     >
                        Blogs
                     </a>
                  </li>
                  <li>
                     <a
                        className="text-base text-gray-100 hover:underline"
                        href="#contact"
                     >
                        Contact
                     </a>
                  </li>
                  <li>
                     <a
                        className="text-base text-gray-100 hover:underline"
                        href="#services"
                     >
                        Services
                     </a>
                  </li>
               </ul>
               <p className="text-gray-200 text-xs">© 2022. All rights reserved</p>
            </div>
         </Container>
      </section>
   );
}
export default Footer;
