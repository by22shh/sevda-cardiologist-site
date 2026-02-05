# Руководство по интеграции Telegram и WhatsApp

## 📱 Интеграция Telegram Bot

### Шаг 1: Создание бота

1. Откройте Telegram и найдите [@BotFather](https://t.me/BotFather)
2. Отправьте команду `/newbot`
3. Введите имя бота (например, "София Математика Репетитор")
4. Введите username бота (например, "sofia_math_tutor_bot")
5. BotFather выдаст вам токен бота. Сохраните его!

**Пример токена:** `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`

### Шаг 2: Получение Chat ID

**Вариант 1: Через @userinfobot**
1. Найдите в Telegram [@userinfobot](https://t.me/userinfobot)
2. Отправьте любое сообщение
3. Бот вернет ваш ID

**Вариант 2: Через API**
1. Отправьте любое сообщение вашему боту
2. Откройте в браузере:
   ```
   https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates
   ```
3. Найдите в ответе поле `"chat":{"id": 123456789}`

### Шаг 3: Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789
```

### Шаг 4: Тестирование

1. Запустите сервер: `bun run dev`
2. Заполните форму на сайте
3. Проверьте, что сообщение пришло в Telegram

---

## 💬 Интеграция WhatsApp

Для интеграции с WhatsApp есть несколько вариантов:

### Вариант 1: Green API (Рекомендуется для России)

**Green API** - простой сервис для отправки сообщений WhatsApp.

1. Зарегистрируйтесь на [green-api.com](https://green-api.com/)
2. Создайте инстанс (бесплатный тариф доступен)
3. Отсканируйте QR-код в WhatsApp
4. Получите `idInstance` и `apiTokenInstance`

**Настройка:**

```env
WHATSAPP_PHONE=79999999999  # ваш номер
WHATSAPP_API_KEY=your_api_token_instance
WHATSAPP_INSTANCE_ID=your_id_instance
```

**Код интеграции для `src/app/api/booking/route.ts`:**

```typescript
// Green API Integration
const greenApiUrl = `https://api.green-api.com/waInstance${process.env.WHATSAPP_INSTANCE_ID}/sendMessage/${process.env.WHATSAPP_API_KEY}`;

await fetch(greenApiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chatId: `${whatsappPhone}@c.us`,
    message: formattedMessage,
  }),
});
```

### Вариант 2: Twilio (Международный)

**Twilio** - популярный сервис для SMS и WhatsApp.

1. Зарегистрируйтесь на [twilio.com](https://www.twilio.com/)
2. Активируйте WhatsApp в консоли
3. Получите Account SID и Auth Token
4. Настройте WhatsApp Sender

**Настройка:**

```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
WHATSAPP_PHONE=whatsapp:+79999999999
```

**Код интеграции:**

```typescript
// Установите пакет: bun add twilio
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

await client.messages.create({
  from: process.env.TWILIO_WHATSAPP_FROM,
  to: process.env.WHATSAPP_PHONE,
  body: formattedMessage,
});
```

### Вариант 3: WhatsApp Business API (Профессиональный)

Для больших объемов и официального использования:

1. Подайте заявку на [WhatsApp Business Platform](https://business.whatsapp.com/)
2. Дождитесь одобрения Facebook
3. Интегрируйте через официальный API

**Требования:**
- Зарегистрированный бизнес
- Верификация в Facebook
- Техническая интеграция

---

## 🔔 Тестирование уведомлений

### Тест Telegram:

```bash
curl -X POST https://api.telegram.org/bot<ВАШ_ТОКЕН>/sendMessage \
  -H "Content-Type: application/json" \
  -d '{"chat_id": "<ВАШ_CHAT_ID>", "text": "Тестовое сообщение"}'
```

### Тест формы:

```bash
curl -X POST http://localhost:3000/api/booking \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Тест",
    "phone": "+79999999999",
    "email": "test@example.com",
    "message": "Тестовая заявка"
  }'
```

---

## 🚨 Частые проблемы

### Telegram

**Проблема:** Бот не отправляет сообщения
- ✅ Проверьте правильность токена
- ✅ Убедитесь, что вы отправили хотя бы одно сообщение боту
- ✅ Проверьте Chat ID
- ✅ Убедитесь, что переменные окружения загружены

**Проблема:** Ошибка 401 Unauthorized
- ✅ Токен неверный или устарел
- ✅ Пересоздайте бота через BotFather

### WhatsApp

**Проблема:** Сообщения не доставляются
- ✅ Проверьте, что номер телефона в международном формате
- ✅ Убедитесь, что аккаунт WhatsApp активен
- ✅ Проверьте баланс аккаунта (для платных сервисов)

**Проблема:** Green API не работает
- ✅ Проверьте статус инстанса в личном кабинете
- ✅ Убедитесь, что QR-код был отсканирован
- ✅ Проверьте лимиты бесплатного тарифа

---

## 📊 Мониторинг

### Логирование

Добавьте логи в `src/app/api/booking/route.ts`:

```typescript
console.log("✅ Telegram notification sent");
console.log("✅ WhatsApp notification sent");
console.error("❌ Error sending notification:", error);
```

### Проверка статуса

Создайте endpoint для проверки интеграций:

```typescript
// src/app/api/health/route.ts
export async function GET() {
  const status = {
    telegram: !!process.env.TELEGRAM_BOT_TOKEN,
    whatsapp: !!process.env.WHATSAPP_API_KEY,
  };

  return Response.json(status);
}
```

---

## 🎯 Рекомендации

1. **Для небольших объемов (до 100 заявок/день):**
   - Telegram Bot (бесплатно)
   - Green API (бесплатный тариф)

2. **Для средних объемов (100-1000 заявок/день):**
   - Telegram Bot (бесплатно)
   - Green API (платный тариф)

3. **Для больших объемов (1000+ заявок/день):**
   - Telegram Bot (бесплатно)
   - WhatsApp Business API (требует верификации)

---

## 💡 Дополнительные возможности

### Добавление кнопок в Telegram

```typescript
await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id: telegramChatId,
    text: formattedMessage,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "✅ Принять", callback_data: "accept" },
          { text: "❌ Отклонить", callback_data: "decline" }
        ]
      ]
    }
  }),
});
```

### Форматирование сообщений

```typescript
const formattedMessage = `
<b>🔔 Новая заявка на консультацию!</b>

<b>👤 Имя:</b> ${name}
<b>📞 Телефон:</b> <code>${phone}</code>
${email ? `<b>📧 Email:</b> ${email}` : ""}
${message ? `<b>💬 Сообщение:</b>\n${message}` : ""}

<i>Время: ${new Date().toLocaleString("ru-RU")}</i>
`.trim();
```

---

**Нужна помощь?** Обратитесь к документации:
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Green API](https://green-api.com/docs/)
- [Twilio WhatsApp](https://www.twilio.com/docs/whatsapp)
