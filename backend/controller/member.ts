import { Request, Response } from "express";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import dotenv from "dotenv";
dotenv.config();

const mailgun = new Mailgun(FormData);
const mg_client = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
});

const DOMAIN = process.env.DOMAIN || "";

export async function new_member(req: Request, res: Response) {
  const data = {
    from: `ByteSized <sam@${DOMAIN}>`,
    to: [req.body.email],
    subject: `Just one more step ${req.body.name}! 🚀`,
    text: `Confirm your subscription by clicking on the link: https://bashcat.vercel.app/verify?email=${req.body.email}&name=${req.body.name}`,
  };
  const result = await mg_client.messages.create(DOMAIN, data);
  res.status(200).json({ status: "email sent" });
}

export async function confirm_member(req: Request, res: Response) {
  const email = req.query.email;
  const name = req.query.name;

  if (!email) {
    res.status(404).json({ status: "no email present in query" });
    return;
  }
  if (!name) {
    res.status(404).json({ status: "no name present in query" });
    return;
  }
  try {
    const member = await mg_client.lists.members.createMember(`sam@${DOMAIN}`, {
      address: email.toString(),
      name: name.toString(),
    });
    res.status(201).json({ status: "user created" });
  } catch (err) {
    res.status(500).json({ status: err });
  }
}
