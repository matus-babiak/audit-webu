/**
 * Vercel serverless function – odoslanie kontaktu do Ecomail.
 * V Vercel nastavte premenné: ECOMAIL_API_KEY, ECOMAIL_LIST_ID
 */
const ECOMAIL_API = "https://api2.ecomailapp.cz";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ECOMAIL_API_KEY;
  const listId = process.env.ECOMAIL_LIST_ID;

  if (!apiKey || !listId) {
    return res.status(500).json({
      error: "Ecomail nie je nakonfigurovaný. Nastavte ECOMAIL_API_KEY a ECOMAIL_LIST_ID vo Vercel.",
    });
  }

  const { email, name } = req.body || {};
  const trimmedEmail = email?.trim();
  const trimmedName = name?.trim();

  if (!trimmedEmail) {
    return res.status(400).json({ error: "E-mail je povinný" });
  }

  try {
    const response = await fetch(`${ECOMAIL_API}/lists/${listId}/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        key: apiKey,
      },
      body: JSON.stringify({
        subscriber_data: {
          email: trimmedEmail,
          name: trimmedName || "",
        },
        resubscribe: false,
        trigger_autoresponders: true,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.message || data.error || "Ecomail API chyba",
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({
      error: "Nepodarilo sa odoslať údaje. Skúste to neskôr.",
    });
  }
}
