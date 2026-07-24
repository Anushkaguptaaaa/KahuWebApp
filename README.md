# Kahu - Cat Breed Detection Web Application
Why "Kahu"?
In Hawaiian, kahu means guardian, caretaker, or steward. The name reflects the app's mission of empowering pet owners with reliable guidance so they can become better caretakers for their cats. Rather than replacing the bond between a pet and its owner, Kahu is designed to support and strengthen it.

Kahu helps you identify cat breeds from photos, explore breed info, chat with Joe (a cat & vet-care assistant), and play cat-themed brain teasers.

## Project Structure

```
KahuWebApp/
├── client/          # Vanilla JS SPA (HTML/CSS/JS)
├── backend/         # Express + TypeScript API (also serves client in local dev)
│   └── src/         # Edit TypeScript here (dist/ is build output)
├── api/             # Vercel serverless entry for /api/*
├── vercel.json      # Vercel deploy config
└── package.json     # Root deps for Vercel builds
```

## Features

- Upload a cat photo for breed detection (Roboflow)
- Results page with confidence scores
- Gallery of popular Indian cat breeds
- About & Contact pages
- **Ask Joe** chatbot (Gemini) for cat care and general vet-related questions
- Brain teasers on the home page:
  - **Cat Memory Match**
  - **N-Queens Puzzle** (Easy 4×4 / Medium 6×6 / Hard 8×8)
- Responsive coquette-themed UI for mobile and desktop
- SPA routing (`/`, `/about`, `/gallery`, `/contact`, `/results`)

## Tech Stack

### Frontend
- HTML, CSS, vanilla JavaScript (ES modules)
- Bootstrap + jQuery (carousels / legacy UI)
- Client-side SPA router

### Backend
- Node.js + Express + TypeScript
- Multer (memory uploads)
- Axios + FormData → Roboflow breed model
- Google Gemini (`@google/genai`) for Joe chat

## Local Setup

### Prerequisites
- Node.js 18+
- npm

### 1. Install backend dependencies
```bash
cd backend
npm install
```

### 2. Environment variables
Create `backend/.env`:

```env
PORT=5001
ROBOFLOW_API_KEY=your_roboflow_api_key
ROBOFLOW_MODEL=cat-breeds-2n7zk/2
ROBOFLOW_BASE_URL=https://serverless.roboflow.com
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash
```

Notes:
- macOS often uses port 5000 for AirPlay, so prefer `5001`.
- Never commit `.env` (it is gitignored).

### 3. Run the app
```bash
cd backend
npm run dev
```

Open [http://localhost:5001](http://localhost:5001).  
The backend serves both the API and the static frontend from `client/`.

### Optional: production-style build
```bash
cd backend
npm run build
npm start
```

## API Endpoints

### `POST /api/upload`
Detect breeds from an uploaded image.

- **Body:** `multipart/form-data` with field `image`
- **Success response:**
```json
{
  "success": true,
  "breeds": [
    {
      "name": "bengal",
      "confidence": 0.92
    }
  ]
}
```

### `POST /api/chat`
Chat with Joe.

- **Body:** `{ "message": "How often should I feed my cat?" }`
- **Success response:**
```json
{
  "success": true,
  "reply": "..."
}
```

## Deploy on Vercel

1. Push the repo to GitHub and import it in Vercel.
2. Keep **Root Directory** as the repo root (not `backend/` or `client/`).
3. Add environment variables in Vercel:
   - `ROBOFLOW_API_KEY` (required)
   - `GEMINI_API_KEY` (required)
   - Optional: `ROBOFLOW_MODEL`, `ROBOFLOW_BASE_URL`, `GEMINI_MODEL`
4. Do **not** set `PORT` on Vercel.
5. Redeploy after changing env vars.

`vercel.json` serves `client/` as static output, rewrites SPA routes to `index.html`, and routes `/api/*` to the serverless function in `api/`.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
