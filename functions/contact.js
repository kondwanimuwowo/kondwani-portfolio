export async function onRequestPost(context) {
  const body = await context.request.json();

  const data = {
    name: body.name,
    email: body.email,
    message: body.message,
    time: new Date().toISOString(),
  };

  console.log("New Contact Form Submission:", data);

  await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: "hi@kondwanimuwowo.com" }],
        },
      ],
      from: {
        email: "no-reply@kondwanimuwowo.com",
        name: "Contact Form",
      },
      subject: `New message from ${data.name}`,
      content: [
        {
          type: "text/plain",
          value: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
        },
      ],
    }),
  });

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
