import emailjs from '@emailjs/browser';

import {MailData} from '../data/dataDef';

export const sendMail = async (data: MailData): Promise<void> => {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID!,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
    {
      name: data.name,
      email: data.email,
      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY!,
  );
};