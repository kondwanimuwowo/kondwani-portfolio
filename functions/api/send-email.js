import sgMail from "@sendgrid/mail";

export async function onRequestPost(context) {
  try {
    const { name, email, subject, message } = await context.request.json();

    // Set SendGrid API key from environment variable
    sgMail.setApiKey(context.env.SENDGRID_API_KEY);

    const msg = {
      to: "kondwanimuwowo@gmail.com",
      from: "kondwanimuwowo@gmail.com", // Make sure this is verified in SendGrid
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Subject:</strong> ${subject}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await sgMail.send(msg);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("SendGrid error:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to send email",
        details: error.response?.body || error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
