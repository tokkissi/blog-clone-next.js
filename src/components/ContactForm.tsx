"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({ message: "토끼씨에게 메일을 보냈습니다!", state: "success" });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <section className="max-w-md w-full">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2 bg-slate-700 text-white p-4 my-4 rounded-xl"
      >
        <label htmlFor="from" className="font-semibold">
          Your Email
        </label>
        <input
          className="text-black"
          type="email"
          id="from"
          name="from"
          value={form.from}
          onChange={onChange}
          required
          autoFocus
        />
        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          className="text-black"
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={onChange}
          required
        />
        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          className="text-black"
          id="message"
          name="message"
          value={form.message}
          onChange={onChange}
          rows={10}
          required
        />
        <button className="bg-yellow-300 text-black font-bold hover:bg-yellow-400">
          Submit
        </button>
      </form>
    </section>
  );
}
