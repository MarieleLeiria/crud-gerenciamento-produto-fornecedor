import emailjs from "@emailjs/nodejs";
import dotenv from "dotenv";

dotenv.config();

export function Batata() {
  emailjs
    .send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE,
      {
        to_name: "James",
        from_name: "Sara",
        message: "Olá, isso é um teste!",
      },
      process.env.PUBLIC_KEY
    )
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch((err) => {
      console.error("FAILED...", err);
    });
}
