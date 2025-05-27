import { init } from 'emailjs-com';

// Initialize EmailJS with your user ID
// Replace 'YOUR_USER_ID' with your actual EmailJS user ID
init('YOUR_USER_ID');

// EmailJS template parameters
export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  receiverEmail: 'nirmal@teamoutsmart.in',
}; 