import { useState } from "react";
import Image from "next/image"; // import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

// ✅ define the shape of your form state
// type FormState = {
//   name: string;
//   email: string;
//   message: string;
// };

const Contact = () => {
  // ✅ type the form ref so emailjs.sendForm accepts it
  // const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  // const [form, setForm] = useState<FormState>({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // // ✅ type ChangeEvent for input & textarea
  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setForm((prev) => ({ ...prev, [name]: value }));
  // };

  // // ✅ type FormEvent for submit handler
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     if (formRef.current) {
  //       // await emailjs.sendForm(
  //       //   import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //       //   import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //       //   formRef.current,
  //       //   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  //       // );
  //     }

  //     // Reset form
  //     setForm({ name: "", email: "", message: "" });
  //   } catch (error) {
  //     console.error("EmailJS Error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    setLoading(true);

    try {
      console.log("form data: ", formData);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("response: ", response);

      if (response.ok) {
        setStatus("Email sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      console.log(error);
      setStatus("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                // ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                {
                  <p className="mt-4 text-center">
                    {status === "Email sent successfully." ? (
                      <span className="flex items-center justify-center text-green-500">
                        <FaCheckCircle className="mr-2" /> {status}
                      </span>
                    ) : status === "Failed to send email." ? (
                      <span className="flex items-center justify-center text-red-500">
                        <FaTimesCircle className="mr-2" /> {status}
                      </span>
                    ) : (
                      status
                    )}
                  </p>
                }
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5} // ✅ rows should be a number
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <Image
                        src="/images/arrow-down.svg"
                        alt="arrow"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
