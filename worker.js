export default {
    async fetch(request, env) {
        // Handle CORS
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }

        if (request.method !== "POST") {
            return new Response("Method Not Allowed", { status: 405 });
        }

        try {
            const data = await request.json();
            const { name, phone, email, message } = data;

            if (!name || !phone || !message) {
                return new Response(JSON.stringify({ error: "Required fields missing" }), {
                    status: 400,
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
                });
            }

            const token = env.TELEGRAM_BOT_TOKEN;
            const chatId = env.TELEGRAM_CHAT_ID;

            const formattedMessage = `
🔔 Новая заявка на консультацию!

👤 Имя: ${name}
📞 Телефон: ${phone}
${email ? `📧 Email: ${email}` : ""}
💬 Сообщение: ${message}

Время: ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}
      `.trim();

            const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: formattedMessage,
                    parse_mode: "HTML",
                }),
            });

            if (response.ok) {
                return new Response(JSON.stringify({ message: "Success" }), {
                    status: 200,
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
                });
            } else {
                return new Response(JSON.stringify({ error: "Telegram API error" }), {
                    status: 500,
                    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
                });
            }
        } catch (err) {
            return new Response(JSON.stringify({ error: "Server error" }), {
                status: 500,
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            });
        }
    },
};
