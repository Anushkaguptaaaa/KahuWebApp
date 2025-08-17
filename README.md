# Kahu - Cat Breed Detection Web Application

Kahu is a web application that allows users to upload images of cats and get information about the detected breed using The Cat API.

## Project Structure

This is a monorepo containing:

- `client/`: Static HTML/CSS/JS frontend (not actively used)
- `frontend/`: React/TypeScript frontend application
- `backend/`: Node.js/Express/TypeScript backend API

## Features

- Upload cat images for breed detection
- View detailed information about detected cat breeds
- Responsive design for mobile and desktop
- User authentication (login/signup)
- Gallery of cat breeds

## Tech Stack

### Frontend
- React
- TypeScript
- Axios for API calls
- React Router for navigation

### Backend
- Node.js
- Express
- TypeScript
- Multer for file uploads
- Axios for API calls to The Cat API

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   CAT_API_KEY=your_cat_api_key_here
   ```
   You can get a Cat API key from [https://thecatapi.com/](https://thecatapi.com/)

4. Start the development server:
   ```
   npm run dev
   ```
   The backend server will run on http://localhost:5000

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The frontend application will run on http://localhost:3000

## API Endpoints

### Upload Image for Breed Detection
- **Endpoint:** `POST /api/upload`
- **Request:** multipart/form-data with key "image" and value as the image file
- **Response:**
  ```json
  {
    "success": true,
    "breeds": [
      {
        "id": "beng",
        "name": "Bengal",
        "origin": "United States",
        "description": "...",
        "temperament": "Alert, Agile, Energetic, Demanding, Intelligent",
        "life_span": "12 - 15 years",
        "weight": {
          "imperial": "6 - 12",
          "metric": "3 - 5"
        }
      }
    ],
    "imageUrl": "https://cdn2.thecatapi.com/images/abc123.jpg"
  }
  ```

## Future Enhancements
- Save uploaded image & result to database
- User authentication for history tracking
- Joey chatbot integration with WebSocket API

## License
This project is licensed under the MIT License - see the LICENSE file for details.