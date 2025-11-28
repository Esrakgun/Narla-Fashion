"use client";

import { FC, useRef, useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import dayjs, { Dayjs } from "dayjs";
// import DatePicker from "./DatePicker";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";

const DatePicker = dynamic(() => import("./DatePicker"), {
  ssr: false,
});

const EmailJSForm: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [skills, setSkills] = useState({ designing: false, modelling: false });

  const form = useRef<HTMLFormElement>(null);

  const handleSkillChange = (key: keyof typeof skills) => {
    setSkills(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_3gpghvn", // Service ID
        "template_gpi60hi", // Template ID
        form.current,
        "dbxBhqQNBtHl5xBbI" // Public Key
      )
      .then(
        () => {
          toast.success("Mail başarıyla gönderildi!", { position: "top-right" });

          setName("");
          setEmail("");
          setMessage("");
          setSkills({ designing: false, modelling: false });
          setDate(dayjs());
        },
        (error) => {
          console.log(error);
          toast.error("Mail gönderilemedi, lütfen tekrar deneyin!", { position: "top-right" });
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="space-y-6 mb-3!">
        <div className="flex flex-col mb-2!">
          <label htmlFor="from_name" className=" mb-1! mt-7! text-gray-700 font-medium">Name</label>
          <input
            name="from_name"
            type="text"
            id="from_name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-200 pl-2!"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="from_email" className="mb-2 text-gray-700 font-medium">E-mail</label>
          <input
            name="from_email"
            type="email"
            id="from_email"
            placeholder="E-mail adresinizi girin"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-200 pl-2!"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col mb-2!">
          <label htmlFor="message" className="mb-2 text-gray-700 font-medium">Mesaj</label>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Mesajınızı yazın"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-200 pl-2!"
            value={message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
          />
        </div>

        {/* Hidden input for EmailJS */}
        <input type="hidden" name="selected_date" value={date?.format("DD/MM/YYYY") || ""} />

        <DatePicker value={date} onChange={setDate} />

        <div className="flex flex-col mb-5!">
          <p className="text-gray-700 font-medium mb-2!">Gerekli Beceriler</p>
          <div className="flex gap-4">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={skills.designing}
                onChange={() => handleSkillChange("designing")}
                className="accent-amber-300"
              />
              <span className="text-gray-700">Designing</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={skills.modelling}
                onChange={() => handleSkillChange("modelling")}
                className="accent-amber-300"
              />
              <span className="text-gray-700">Modelling</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
        >
          GÖNDER
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default EmailJSForm;
