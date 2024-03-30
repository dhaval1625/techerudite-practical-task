import Container from '@/components/ui/Container';
import HeadingPrimary from '@/components/ui/HeadingPrimary';
import HeadingSecondary from '@/components/ui/HeadingSecondary';
import TextPrimary from '@/components/ui/TextPrimary';
import { RightArrowIcon } from '@/components/ui/icon';
import { BLOG_URL, dateFormat } from '@/lib/config';
import { fetchData } from '@/lib/utils';
import { useEffect, useState } from 'react';

function Blogs() {
   const [blogList, setBlogList] = useState([]);
   useEffect(() => {
      const getBlogdata = async () => {
         const data = await fetchData(BLOG_URL);
         setBlogList(data.data.slice(0, 3));
      };
      getBlogdata();
   }, []);

   return (
      <section
         className="section"
         id="blogs"
      >
         <Container>
            <div className="flex justify-between items-center">
               <HeadingPrimary>Blogs</HeadingPrimary>
               <a
                  className="flex items-center space-x-2 text-xl font-bold hover:underline text-blue"
                  href="#"
               >
                  <span>View All</span>
                  <RightArrowIcon />
               </a>
            </div>
            <div className="grid mt-12 grid-cols-3 gap-11">
               {blogList &&
                  blogList.length > 0 &&
                  blogList.map((item) => (
                     <div
                        className="space-y-3"
                        key={item.id}
                     >
                        <div className="img rounded-lg aspect-[332/200]">
                           <img
                              className='object-cover'
                              src={item.image_url}
                              alt={item.name}
                           />
                        </div>
                        <HeadingSecondary className='capitalize'>{item.name}</HeadingSecondary>
                        <TextPrimary>{new Date(item.createdAt).toLocaleDateString('en-US', dateFormat)} by <span className='text-red'>{item.writer_name}</span></TextPrimary>
                        <TextPrimary>{item.short_description}</TextPrimary>
                     </div>
                  ))}
            </div>
         </Container>
      </section>
   );
}
export default Blogs;
