import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Имя, телефон и сообщение обязательны для заполнения" },
        { status: 400 }
      );
    }

    // Format the message
    const formattedMessage = `
🔔 Новая заявка на консультацию!

👤 Имя: ${name}
📞 Телефон: ${phone}
${email ? `📧 Email: ${email}` : ""}
💬 Сообщение: ${message}

Время: ${new Date().toLocaleString("ru-RU")}
    `.trim();

    // Send to Telegram
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramBotToken && telegramChatId) {
      try {
        await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: formattedMessage,
            parse_mode: "HTML",
          }),
        });
      } catch (error) {
        console.error("Telegram error:", error);
      }
    }

    // Send to WhatsApp (using WhatsApp Business API or third-party service)
    // Note: This is a placeholder. You'll need to integrate with a service like Twilio, WhatsApp Business API, etc.
    const whatsappPhone = process.env.WHATSAPP_PHONE;
    const whatsappApiKey = process.env.WHATSAPP_API_KEY;

    if (whatsappPhone && whatsappApiKey) {
      // Example using a hypothetical WhatsApp API service
      // Replace this with your actual WhatsApp integration
      try {
        // await fetch("https://api.whatsapp-service.com/send", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Authorization": `Bearer ${whatsappApiKey}`,
        //   },
        //   body: JSON.stringify({
        //     to: whatsappPhone,
        //     message: formattedMessage,
        //   }),
        // });
      } catch (error) {
        console.error("WhatsApp error:", error);
      }
    }

    return NextResponse.json(
      { message: "Заявка успешно отправлена" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Произошла ошибка при обработке заявки" },
      { status: 500 }
    );
  }
}
