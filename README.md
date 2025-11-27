# KhabarNow – React News Application

KhabarNow is a lightweight, category-based news application built with **React** and the official **NewsAPI**. The project is structured using Create React App and focuses on clean UI, fast navigation, and modular component design.

---

## 🚀 Live Demo

Using the free Api key not let the project to be made live for everyone.

---

## 📌 Features

* Category-wise news (Technology, Sports, Health, etc.)
* Real-time news fetched from NewsAPI
* Clean, responsive UI
* Loading indicators for better UX
* Environment-based API key handling
* Optimized React components structure
* Enbling Light and Dark Theme

---

## 📁 Project Structure

```
KhabarNow-NewsApplication
│
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   ├── index.js
│   ├── styles/
│   └── utils/
└── package.json

```

---

## 🛠️ Getting Started

This project was bootstrapped with **Create React App**.

### 1. Clone the Repository

```
git clone https://github.com/Darpan7588/KhabarNow-NewsApplication.git
cd KhabarNow-NewsApplication
```

### 2. Install Dependencies

```
npm install
```

### 3. Add Your NewsAPI Key

Create a `.env` file in the project root:

```
REACT_APP_NEWS_API_KEY=your_api_key_here
```

### 4. Start Development Server

```
npm start
```

Open **[http://localhost:3000](http://localhost:3000)**.

---

## 📦 Production Build

```
npm run build
```

This generates optimized files in the `build/` folder.

---

## 🌐 Deployment (GitHub Pages)

1. Add homepage to `package.json`:

```
"homepage": "https://<your-username>.github.io/KhabarNow-NewsApplication"
```

2. Install gh-pages:

```
npm install gh-pages --save-dev
```

3. Add deploy scripts in `package.json`:

```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:

```
npm run deploy
```

---

## 🧪 Available Scripts (CRA Defaults)

### Development

```
npm start
```

### Build

```
npm run build
```

### Eject (⚠️ Not reversible)

```
npm run eject
```

---

## 📚 Learn More

* React Documentation: [https://reactjs.org/](https://reactjs.org/)
* BootStrap Documentation: [https://getbootstrap.com/docs/5.3/getting-started/introduction/](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* Create React App Docs: [https://facebook.github.io/create-react-app/](https://facebook.github.io/create-react-app/)
* NewsAPI Docs: [https://newsapi.org/](https://newsapi.org/)

---

Some Snippets of the Website:

<img width="1919" height="1020" alt="Screenshot 2025-11-27 171512" src="https://github.com/user-attachments/assets/42e14a53-9f73-40cc-b19a-a34e5a6d3059" />
Light-themed 

<img width="1919" height="1017" alt="Screenshot 2025-11-27 171456" src="https://github.com/user-attachments/assets/8e63cd0e-efb6-412b-8f16-5045eb51554c" />
Dark-themed
