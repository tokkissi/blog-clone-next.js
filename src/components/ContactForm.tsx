"use client";
import { sendContactEmail } from "@/service/contact";
import { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

type Form = {
  from: string;
  subject: string;
  message: string;
};
const DEFAULT_FOAM_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_FOAM_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) {
      return;
    }
    setIsSending(true);
    sendContactEmail(form) //
      .then(() => {
        setBanner({
          message: "메일을 성공적으로 전송했습니다",
          state: "success",
        });
        setForm(DEFAULT_FOAM_DATA);
      })
      .catch(() => {
        setBanner({
          message: "메일 전송에 실패했습니다. 다시 시도해주세요",
          state: "fail",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
        setIsSending(false);
      });
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
