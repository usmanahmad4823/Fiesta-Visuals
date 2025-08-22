import React, { useRef } from "react";
import emailjs from "emailjs-com";
import SectionHeading from "./SectionHeading";
import PageSubtitle from "./PageSubtitle";
import SocialMedia from "./SocialMedia";
import ContactCards from "./ContactCards";
import FAQ from "./FAQ";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",   // from EmailJS dashboard
        "service_cz2ifum",   // from EmailJS dashboard
        // "YOUR_TEMPLATE_ID",  // from EmailJS dashboard
        "template_qdgzstu",  // from EailJS dashboard
        form.current,
        // "YOUR_PUBLIC_KEY"    // from EmailJS dashboard
        "NlQRPqP3mn_UE5QzT"    // from EmailJS dashboard
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="text-gray-700 rounded-4xl z-40 relative inset-0 bg-[#FFFFFF]  text-center">
      <div className="relative bg-[#FFF] pt-[5rem]">
        <div className="portfolio-top">
          <PageSubtitle title="Contact" />
          <SectionHeading sectionHeading="Get In Touch" />
        </div>

        <main className="pt-[2rem] w-full flex flex-col items-center">
          <div className="w-full md:max-w-[60%] px-8">
            <p className="text-[12px] leading-5 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              consequat lectus. Donec porta tortor eleifend imperdiet cursus.
              Mauris accumsan erat a posuere.
            </p>
            <SocialMedia />
          </div>

          {/* Contact Form */}
          <div className="w-full h-full flex items-center justify-center text-start bg-white px-4 py-10">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full md:max-w-[60%] md:w-full md:px-4 text-[#FFF] border-gray-200 rounded-3xl p-6 sm:p-10 shadow-md"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 100% 100%, #dd23bb40, #0000 40%),
                  radial-gradient(circle at 0 100%, #2d62ff4d, #0000 60%)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "#000",
              }}
            >
              {/* Name and Subject Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-[#FFF] mb-2">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm outline-none"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#FFF] mb-2">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm outline-none"
                    placeholder="Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#FFF] mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#FFF] mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm outline-none"
                    placeholder="Subject"
                  />
                </div>
              </div>

              {/* Message Area */}
              <div className="mt-6">
                <label className="block text-sm text-[#FFF] mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full rounded-3xl border border-gray-300 px-4 py-3 text-sm outline-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Checkbox */}
              <div className="mt-4 flex items-center">
                <input type="checkbox" id="terms" className="mr-2" required />
                <label htmlFor="terms" className="text-sm text-[#FFF]">
                  I accept the <span className="underline">Terms</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-[#FFF] text-black rounded-full py-3 text-sm hover:bg-gray-100 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Cards */}
          <ContactCards />
        </main>
      </div>
      <FAQ />
    </section>
  );
};

export default Contact;
