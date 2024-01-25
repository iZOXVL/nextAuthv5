import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
  email: string, 
  token: string
) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirma tu dirección de correo electrónico",
    html: `<p>Haz clic <a href="${confirmLink}">aquí</a> para confirmar tu dirección de correo electrónico.</p>`
  });
};