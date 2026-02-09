import { useState } from "react";
import Image from "next/image";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaUser,
  FaEnvelope,
  FaComment,
} from "react-icons/fa";
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 mt-16 items-stretch rounded-2xl border border-white/[0.07] p-6 md:p-8 xl:p-10 contact-section-blend">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-8 md:p-10">
              <form
                onSubmit={handleSubmit}
                className="contact-form w-full flex flex-col gap-6"
              >
                {status ? (
                  <div
                    className={`contact-form-status flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm ${
                      status === "Email sent successfully."
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : status === "Failed to send email."
                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                        : "bg-white/5 text-white-50 border border-white/10"
                    }`}
                  >
                    {status === "Email sent successfully." && (
                      <FaCheckCircle className="size-4 shrink-0" />
                    )}
                    {status === "Failed to send email." && (
                      <FaTimesCircle className="size-4 shrink-0" />
                    )}
                    <span>{status}</span>
                  </div>
                ) : null}

                <div className="contact-form-field">
                  <label htmlFor="name">Your name</label>
                  <div className="contact-form-input-wrap">
                    <FaUser className="contact-form-icon" aria-hidden />
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
                </div>

                <div className="contact-form-field">
                  <label htmlFor="email">Your email</label>
                  <div className="contact-form-input-wrap">
                    <FaEnvelope className="contact-form-icon" aria-hidden />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-field">
                  <label htmlFor="message">Your message</label>
                  <div className="contact-form-input-wrap contact-form-input-wrap--textarea">
                    <FaComment
                      className="contact-form-icon contact-form-icon--textarea"
                      aria-hidden
                    />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      rows={4}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="contact-form-submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <Image
                        src="/images/arrow-down.svg"
                        alt=""
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 flex min-h-[280px] xl:min-h-0">
            <div className="bg-[#8b8680] w-full h-full min-h-[280px] xl:min-h-0 hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
