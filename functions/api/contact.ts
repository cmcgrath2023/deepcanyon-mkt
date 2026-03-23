/// <reference types="@cloudflare/workers-types" />

interface Env {
  CRM_API_URL: string;
  CRM_API_KEY: string;
  RESEND_API_KEY: string;
  RESEND_FROM_EMAIL: string;
  COMPANY_EMAIL: string;
}

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  interest?: string;
  aum?: string;
  message?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactPayload = await request.json();

    if (!data.firstName || !data.lastName || !data.email) {
      return new Response(
        JSON.stringify({ error: "First name, last name, and email are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const submittedAt = new Date().toISOString();

    // Push to CRM
    if (env.CRM_API_URL && env.CRM_API_KEY) {
      try {
        await fetch(env.CRM_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${env.CRM_API_KEY}`,
          },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            company: data.company || "",
            phone: data.phone || "",
            interest: data.interest || "",
            aum: data.aum || "",
            message: data.message || "",
            source: "deepcanyon-business-contact",
            submittedAt,
          }),
        });
      } catch (e) {
        console.error("CRM push failed:", e);
      }
    }

    // Send internal notification email via Resend
    if (env.RESEND_API_KEY && env.COMPANY_EMAIL) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: env.RESEND_FROM_EMAIL || "Deep Canyon <noreply@deepcanyon.ai>",
            to: env.COMPANY_EMAIL,
            subject: `New Business Inquiry: ${data.firstName} ${data.lastName} — ${data.company || "No company"}`,
            html: `
              <h2>New Business Tier Inquiry</h2>
              <table style="border-collapse:collapse;font-family:sans-serif;">
                <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${data.firstName} ${data.lastName}</td></tr>
                <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;">${data.email}</td></tr>
                <tr><td style="padding:6px 12px;font-weight:bold;">Company</td><td style="padding:6px 12px;">${data.company || "—"}</td></tr>
                <tr><td style="padding:6px 12px;font-weight:bold;">Phone</td><td style="padding:6px 12px;">${data.phone || "—"}</td></tr>
                <tr><td style="padding:6px 12px;font-weight:bold;">Interest</td><td style="padding:6px 12px;">${data.interest || "—"}</td></tr>
                <tr><td style="padding:6px 12px;font-weight:bold;">Est. AUM</td><td style="padding:6px 12px;">${data.aum || "—"}</td></tr>
                <tr><td style="padding:6px 12px;font-weight:bold;">Message</td><td style="padding:6px 12px;">${data.message || "—"}</td></tr>
                <tr><td style="padding:6px 12px;font-weight:bold;">Submitted</td><td style="padding:6px 12px;">${submittedAt}</td></tr>
              </table>
            `,
          }),
        });
      } catch (e) {
        console.error("Email send failed:", e);
      }
    }

    // Send confirmation to the lead
    if (env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: env.RESEND_FROM_EMAIL || "Deep Canyon <noreply@deepcanyon.ai>",
            to: data.email,
            subject: "Thanks for your interest in Deep Canyon",
            html: `
              <p>Hi ${data.firstName},</p>
              <p>Thanks for reaching out about the Deep Canyon Business tier. We've received your inquiry and will be in touch within one business day.</p>
              <p>Best,<br/>The Deep Canyon Team</p>
            `,
          }),
        });
      } catch (e) {
        console.error("Confirmation email failed:", e);
      }
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (e) {
    console.error("Contact form error:", e);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};
