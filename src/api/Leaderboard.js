// api/leaderboard.js
const FAM_LIST = ["Dragon", "Horse", "Boar", "Goat", "Dog", "Rat", "Ox", "Tiger", "Rabbit", "Snake", "Monkey", "Rooster"];

function parseFams(raw) {
  if (!raw) return [];
  return FAM_LIST.filter((fam) => raw.toLowerCase().includes(fam.toLowerCase()));
}

export default async function handler(req, res) {
  const SHEET_ID = process.env.SHEET_ID;
  const API_KEY = process.env.GOOGLE_SHEETS_API_KEY;
  const RANGE = "Form Responses 1!A2:F";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const rows = data.values || [];

    const totals = {};
    FAM_LIST.forEach((fam) => (totals[fam] = 0));

    for (const row of rows) {
      const [, , famRaw, , , pointsRaw] = row;
      const points = Number(pointsRaw) || 0;
      parseFams(famRaw).forEach((fam) => {
        totals[fam] += points;
      });
    }

    const leaderboard = Object.entries(totals)
      .map(([fam, points]) => ({ fam, points }))
      .sort((a, b) => b.points - a.points);

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
    res.status(200).json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch leaderboard" });
  }
}