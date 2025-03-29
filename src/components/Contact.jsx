// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact" className="contact">
//       <div className="container">
//         <div className="section-title">
//           <h2>Get In Touch</h2>
//         </div>
//         <div className="contact-content">
//           <div className="contact-info">
//             <h3>Contact Information</h3>
//             <p><strong>Email:</strong> shivasai.karampuri@gmail.com</p>
//             <p><strong>Phone:</strong> +91-8919714795</p>
//             <p><strong>LinkedIn:</strong> linkedin.com/in/shiva-sai-k/</p>
//             <p><strong>GitHub:</strong> github.com/Shivasai-k</p>
//           </div>
//           <form className="contact-form">
//             <div className="form-group">
//               <input type="text" placeholder="Your Name" required />
//             </div>
//             <div className="form-group">
//               <input type="email" placeholder="Your Email" required />
//             </div>
//             <div className="form-group">
//               <textarea placeholder="Your Message" rows="5" required></textarea>
//             </div>
//             <button type="submit" className="btn">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the form data to your backend
//     // or use a service like Formspree
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message! I will get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <section id="contact" className="contact">
//       <div className="container">
//         <div className="section-title">

//           <h2>Get In Touch</h2>
//         </div>
//         <div className="contact-content">
//           <p>
//             I'm currently looking for new opportunities. Whether you have a question
//             or just want to say hi, I'll try my best to get back to you!
//           </p>
//           <form className="contact-form" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>
//             </div>
//             <button type="submit" className="btn">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS IDs
    emailjs.sendForm(
      'service_yppbhnf',       // e.g., 'service_abc123'
      'template_cd7p4rd',      // e.g., 'template_xyz456'
      e.target,
      '8eTXhRyEtvUDEeFfp'           // e.g., 'user_123abc'
    )
    .then((result) => {
      console.log('Email sent:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-content">
          <p>
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {/* Submission status feedback */}
            {submitStatus === 'success' && (
              <p className="success-message">
                ✔️ Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="error-message">
                ❌ Failed to send. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;