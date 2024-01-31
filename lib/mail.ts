import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string
) => {
  await resend.emails.send({
    from: "verify@armandovl.dev",
    to: email,
    subject: "Autenticación de 2 factores",
    html: `<p>Tu codigo 2FA es: ${token}</p>`
  });
};


export const sendVerificationEmail = async (
  email: string, 
  token: string
) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "verify@armandovl.dev",
    to: email,
    subject: "Confirma tu dirección de correo electrónico",
    html: `<p>Haz clic <a href="${confirmLink}">aquí</a> para confirmar tu dirección de correo electrónico.</p>`
  });
};

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`
  await resend.emails.send({
    from: "verify@armandovl.dev",
    to: email,
    subject: "Recupera tu contraseña",
    html: `<p>Click <a href="${resetLink}">aquí</a> para recuperar tu contraseña.</p>`
  });
};