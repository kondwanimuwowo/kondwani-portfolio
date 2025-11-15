// functions/contact.js
export async function onRequestPost({ request }) {
  try {
    const body = await request.json();

    const data = {
      name: body.name,
      email: body.email,
      message: body.message,
      time: new Date().toISOString(),
    };

    console.log("📧 New Contact Form Submission:", data);

    // Send email notification
    const emailResponse = await fetch(
      "https://api.mailchannels.net/tx/v1/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: "kondwanimuwowo@gmail.com" }], // Your email
            },
          ],
          from: {
            email: "contact@kondwanimuwowo.com", // Use your domain
            name: "Portfolio Contact Form",
          },
          subject: `New message from ${data.name}`,
          content: [
            {
              type: "text/plain",
              value: `New contact form submission:\n\nName: ${
                data.name
              }\nEmail: ${
                data.email
              }\nTime: ${new Date().toLocaleString()}\n\nMessage:\n${
                data.message
              }\n\n---\nSent from your portfolio website`,
            },
            {
              type: "text/html",
              value: `
              <div style="font-family: Arial, sans-serif; max-width: 600px;">
                <h2 style="color: #333;">New Contact Form Submission</h2>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
                  <p><strong>Name:</strong> ${data.name}</p>
                  <p><strong>Email:</strong> ${data.email}</p>
                  <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
                </div>
                <div style="margin-top: 20px;">
                  <h3 style="color: #333;">Message:</h3>
                  <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #007acc;">${data.message.replace(
                    /\n/g,
                    "<br>"
                  )}</p>
                </div>
                <hr style="margin: 30px 0;">
                <p style="color: #666; font-size: 12px;">Sent from your portfolio website</p>
              </div>
            `,
            },
          ],
        }),
      }
    );

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("MailChannels error:", errorText);
      // Don't fail the form submission if email fails
      console.log("Email failed but form was logged");
    } else {
      console.log("✅ Email notification sent successfully");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Error in contact form:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error:
          "Sorry, there was an error sending your message. Please try again.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
