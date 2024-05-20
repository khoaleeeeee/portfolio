import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

const send = async (params) => {
  console.log('Sending email...', {
    serviceId,
    templateId,
    params,
    publicKey,
  }
  );
  try {
    await emailjs.send(
      serviceId,
      templateId,
      params,
      publicKey,
    );
  } catch (err) {
    if (err instanceof EmailJSResponseStatus) {
      console.error(err);
      throw new Error(
        `${err.status} - ${err.text}`,
      );
    }

    throw new Error(err);
  }
};

export default { send };
