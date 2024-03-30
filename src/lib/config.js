import { z } from 'zod';

const API_URL = 'http://3.7.81.243:3253/';
export const BLOG_URL = API_URL + 'api/blog/';
export const CONTACT_URL = API_URL + 'api/contact/send';
export const FOOTER_URL = API_URL + 'api/settings/fetch-frontend-details';

export const dateFormat = { year: 'numeric', month: 'long', day: 'numeric' };


export const formElements = [
   {
      id: 'f1',
      name: 'fname',
      validationSchema: z.string().min(1, {message: 'Name is required'}),
      label: 'Name',
   },
   {
      id: 'f2',
      name: 'lname',
      validationSchema: z.string().min(1, {message: 'Last Name is required'}),
      label: 'Last Name',
   },
   {
      id: 'f3',
      name: 'email',
      validationSchema: z.string().min(1, {message: 'Email is required!'}).email('Please enter a valid email'),
      label: 'Mail',
   },
   {
      id: 'f4',
      name: 'phone',
      validationSchema: z.string().min(10, {message: 'Phone number is invalid!'}),
      label: 'Phone',
   },
   {
      id: 'f5',
      name: 'budget',
      validationSchema: z.number({coerce: true, invalid_type_error: 'Budget must be number!'},).min(1, {message: 'Budget is required!'}),
      label: 'Budget',
   },
   {
      id: 'f6',
      name: 'description',
      validationSchema: z.string().min(10, {message: 'Description should be alteast 10 character long'}),
      label: 'Description',
   },
]

const schemaObj = {};
const formKeysObj = {};

formElements.forEach(el => {
   schemaObj[el.name] = el.validationSchema;
   formKeysObj[el.name] = '';
})

export const formSchemaDef = schemaObj;
export const formKeys = formKeysObj;