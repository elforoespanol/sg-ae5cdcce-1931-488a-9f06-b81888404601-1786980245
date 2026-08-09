import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from "micro";

// Stripe webhook handler - placeholder for future payments implementation
// To enable: install stripe, add STRIPE_WEBHOOK_SECRET to env, and implement handlers below

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // const sig = req.headers["stripe-signature"] as string;
    // const buf = await buffer(req);
    // const event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);

    // Handle events:
    // - checkout.session.completed
    // - invoice.payment_succeeded
    // - customer.subscription.updated

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    return res.status(400).json({ message: "Webhook error" });
  }
}