// functions/contact.js - SIMPLE VERSION
export async function onRequestPost({ request }) {
  try {
    const body = await request.json();

    // Just log the form data to Cloudflare dashboard
    console.log("📧 Contact form submission received:");
    console.log("Name:", body.name);
    console.log("Email:", body.email);
    console.log("Message:", body.message);

    // Always return success for now
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! Your message has been received.",
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
        error: "Something went wrong. Please try again.",
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
