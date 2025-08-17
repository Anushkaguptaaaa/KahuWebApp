# Kahu Backend - Cat Breed Detection API

This is the backend service for the Kahu web application, which provides cat breed detection functionality using The Cat API.

## Features

- Image upload endpoint
- Cat breed detection using The Cat API
- Error handling and validation

## Tech Stack

- Node.js
- Express
- TypeScript
- Multer (file uploads)
- Axios (API requests)
- dotenv (environment variables)
- cors (enable frontend requests)

## Setup Instructions

1. **Install dependencies:**

```bash
npm install
```

2. **Create environment variables:**

Create a `.env` file in the root directory with the following variables:

```
PORT=5000
CAT_API_KEY=your_cat_api_key_here
```

You can get a Cat API key from [https://thecatapi.com/](https://thecatapi.com/)

3. **Development mode:**

```bash
npm run dev
```

4. **Production build:**

```bash
npm run build
npm start
```

## API Endpoints

### Upload Image for Breed Detection

**Endpoint:** `POST /api/upload`

**Request:**
- Content-Type: multipart/form-data
- Body: form-data with key "image" and value as the image file

**Response:**
```json
{
  "success": true,
  "breeds": [
    {
      "id": "beng",
      "name": "Bengal",
      "origin": "United States",
      "description": "...",
      // other breed information
    }
  ],
  "imageUrl": "https://cdn2.thecatapi.com/images/abc123.jpg"
}
```

If no breeds are detected:
```json
{
  "success": true,
  "breeds": [],
  "message": "No cat breeds detected in the image",
  "imageUrl": "https://cdn2.thecatapi.com/images/abc123.jpg"
}
```

## Error Handling

- Invalid file: 400 Bad Request
- Cat API failure: 502 Bad Gateway
- Internal error: 500 Server Error
