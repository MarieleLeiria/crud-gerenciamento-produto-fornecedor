import emailjs from "@emailjs/nodejs"; // você pode remover se não usar o SDK
import dotenv from "dotenv";
//import fetch from "node-fetch";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const prisma = new PrismaClient();

export default function Batata() {
  var templateParams = {
    name: "James",
    notes: "Check this out!",
  };

  emailjs
    .send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, {
      publicKey: process.env.PUBLIC_KEY,
      privateKey: process.env.PRIVATE_KEY,
    })
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch((err) => {
      console.error("FAILED...", err);
    });
}

// export default async function Batata() {
//   var data = {
//     service_id: "service_y72y0yd",
//     template_id: "template_gdsusxf",
//     user_id: "IG69QdV7nl9CbTEhf",
//     template_params: {
//       username: "James",
//       "g-recaptcha-response": "03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...",
//     },
//   };
//   try {
//     const response = await fetch(
//       "https://api.emailjs.com/api/v1.0/email/send",
//       {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: { "Content-Type": "application/json" },
//       }
//     );

//     const result = await response.json();
//     console.log("Resposta do EmailJS:", result);

//     return result; // opcional
//   } catch (error) {
//     console.error("Erro ao enviar o e-mail:", error);
//     throw error;
//   }
// }
