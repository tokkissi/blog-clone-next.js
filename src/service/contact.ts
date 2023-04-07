import { EmailData } from "./email";

export async function sendContactEmail(email: EmailData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "메일 전송 요청 에러");
  }
  return data;
}
