# Food Recipe App

## ✅ Project Overview  
The Food Recipe App is a fully-functional recipe browsing platform built using React, TailwindCSS, React Router, and external APIs.
It allows users to:
-Search recipes in real-time
-Browse trending & quick meal categories
-Explore global cuisines
-View detailed recipe information
-Read step-by-step cooking instructions
-View ingredient + measurements dynamically
-Navigate smoothly with a clean UI and routing

## 🚀 Features  
- Browse a list of meals / recipes (with images, names)  
- Search by recipe name / keyword (with loading state)  
- Filter recipes by cuisine/ingredient/category  
- View recipe detail: ingredients list, cooking instructions, images  
- Responsive design (mobile / desktop) using Tailwind  
- Smooth UI with React components, routing via React Router

## 🧰 Tech Stack  
Frontend
⚛️ React 19
⚡ Vite
🎨 Tailwind CSS
🔀 React Router v7
🎯 Lucide Icons
🏎️ React Slick Slider
API
🍜 TheMealDB (https://www.themealdb.com/)

## 📁 Project Structure  
food-recipe-app/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── component/
│   │   ├── CatagorySection.jsx
│   │   ├── Cuisine.jsx
│   │   ├── HomeView.jsx
│   │   ├── Navbar.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeDetailView.jsx
│   │   ├── RecipeSlider.jsx
│   │   ├── SearchView.jsx
│   │   └── TrendingRecipe.jsx
│   │
│   ├── JS/
│   │   └── fetch.js
│   │
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── vite.config.js
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
└── index.html


##  Motivation / What I Learned  
I built this Food Recipe App to strengthen my skills in API integration, React, and Tailwind CSS while creating a fully responsive, 
real-world application. The project helped me practise working with external APIs, managing state and props, 
implementing React Router, and handling asynchronous data such as loading/error states. 
I also learned how to render dynamic data, build reusable components, and structure a clean front-end codebase.

## How to Run Locally  
1. Clone the repo: `git clone https://github.com/rafikul-shaikh/food-recipe-app.git`  
2. Install dependencies: `npm install`  
3. Start dev server: `npm run dev`  (or `npm start` depending on config)  
4. Open in browser: `http://localhost:5173` (or default port)  

##  Future Improvements  
1. favorite recipes (localStorage)
2. User login system (Firebase)
3. Dark/Light theme toggle
4. Pagination for search results

