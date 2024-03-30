import Container from '@/components/ui/Container';
import HeadingPrimary from '@/components/ui/HeadingPrimary';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CONTACT_URL, formElements, formKeys, formSchemaDef } from '@/lib/config';
import { fetchData } from '@/lib/utils';
import { useState } from 'react';
import TextPrimary from '@/components/ui/TextPrimary';

const formSchema = z.object(formSchemaDef);

function Contact() {
   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: formKeys,
      resetOptions: {
         keepDirtyValues: false,
         keepErrors: false,
      },
   });

   const [isLoading, setIsLoading] = useState(false);
   const [successMsg, setSuccessMsg] = useState(null);

   async function onSubmit(values) {
      setIsLoading(true);
      const response = await fetchData(CONTACT_URL, {
         method: 'POST',
         payload: values
      })
      setSuccessMsg(response.message);
      setIsLoading(false);
      form.reset();
   }

   return (
      <section
         className="section"
         id="contact"
      >
         <Container>
            <HeadingPrimary>Contact Us</HeadingPrimary>
            <div className="mx-auto max-w-[785px] mt-8">
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                     <div className="grid grid-cols-2 gap-x-14 gap-y-10">
                        {formElements.map((el, idx) => (
                           <FormField
                              key={el.id}
                              control={form.control}
                              name={el.name}
                              render={({ field }) => (
                                 <FormItem>
                                    <FormControl>
                                       <Input
                                          placeholder={el.label}
                                          {...field}
                                       />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        ))}
                     </div>
                     <div className="flex items-center flex-col justify-center mt-10 space-y-5">
                        <Button disabled={isLoading} type="submit">Contact Us</Button>
                        {isLoading && <TextPrimary className='!text-primary/90'>Sending data...</TextPrimary>}
                        {successMsg && <TextPrimary>{successMsg}</TextPrimary>}
                     </div>
                  </form>
               </Form>
            </div>
         </Container>
      </section>
   );
}
export default Contact;
