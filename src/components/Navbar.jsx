import Logo from '../images/logo.png';
import Container from './ui/Container';
import { buttonVariants } from './ui/button';

function Navbar() {
   return (
      <nav className="py-5">
         <Container>
            <div className="flex justify-between items-center">
               <a href='#home' className="img max-w-[180px]">
                  <img
                     width="180"
                     height="80"
                     src={Logo}
                     alt="logo"
                  />
               </a>
               <ul className="flex items-center gap-10">
                  <li><a className='text-xl hover:underline' href="#services">Services</a></li>
                  <li><a className='text-xl hover:underline' href="#about">About us</a></li>
                  <li><a className='text-xl hover:underline' href="#blogs">Blogs</a></li>
                  <li><a className='text-xl hover:underline' href="#process">Case Studies</a></li>
                  <li><a className={buttonVariants({variant: 'default'})} href="#contact">Contact us</a></li>
               </ul>
            </div>
         </Container>
      </nav>
   );
}

export default Navbar;
