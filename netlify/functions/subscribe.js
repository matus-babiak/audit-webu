/**
 * Netlify serverless function – odoslanie kontaktu do Ecomail.
 * V Netlify nastavte premenné: ECOMAIL_API_KEY, ECOMAIL_LIST_ID
 */
const ECOMAIL_API = "https://api2.ecomailapp.cz";

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const apiKey = process.env.ECOMAIL_API_KEY;
  const listId = process.env.ECOMAIL_LIST_ID;

  if (!apiKey || !listId) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Ecomail nie je nakonfigurovaný. Nastavte ECOMAIL_API_KEY a ECOMAIL_LIST_ID v Netlify.",
      }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Neplatné JSON" }),
    };
  }

  const email = body.email?.trim();
  const name = body.name?.trim();

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "E-mail je povinný" }),
    };
  }

  try {
    const res = await fetch(`${ECOMAIL_API}/lists/${listId}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        key: apiKey,
      },
      body: JSON.stringify({
        subscriber_data: {
          email,
          name: name || "",
        },
        resubscribe: false,
        trigger_autoresponders: true,
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        statusCode: res.status,
        body: JSON.stringify({
          error: data.message || data.error || "Ecomail API chyba",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Nepodarilo sa odoslať údaje. Skúste to neskôr.",
      }),
    };
  }
};
