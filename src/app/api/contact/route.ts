import { sendEmail } from "@/service/email";
import * as yup from "yup";

export const emailSchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(request: Request) {
  const body = await request.json();
  if (!emailSchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: "유효하지 않은 포맷" }), {
      status: 400,
    });
  }

  return sendEmail(body) //
    .then(
      () =>
        new Response(JSON.stringify({ message: "메일 전송 성공" }), {
          status: 200,
        })
    )
    .catch((error) => {
      console.log(error);
      new Response(JSON.stringify({ message: "메일 전송 실패" }), {
        status: 500,
      });
    });
}
