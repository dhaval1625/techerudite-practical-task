import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
   return twMerge(clsx(inputs));
}

export async function fetchData(url, config) {
   let fetchConfig = null;
   if (config) {
      fetchConfig = {
         method: config.method,
         body: JSON.stringify(config.payload),
         headers: {
            'Content-type': 'application/json'
         }
      };
   }

   try {
      const res = await fetch(url, fetchConfig);
      const data = await res.json();
      return data;
   } catch (error) {
      console.log(error);
   }

}
