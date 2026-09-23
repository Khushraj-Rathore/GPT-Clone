# 🤖 SigmaGPT - MERN Stack GPT Clone

SigmaGPT is a full-stack AI chat application inspired by ChatGPT. It is built using the MERN stack and integrates the OpenAI API to generate AI-powered responses.

The project includes a React-based frontend, Node.js/Express backend, MongoDB database for storing conversations, and support for Markdown and code syntax highlighting.

---

## 🚀 Features

- 💬 AI-powered conversations using OpenAI API
- 🧵 Create and manage multiple chat threads
- 💾 Store chat conversations in MongoDB
- ⚡ React-based responsive chat interface
- 🔄 Real-time-style response rendering
- 📝 Markdown response rendering
- 💻 Code syntax highlighting
- 📚 Chat history
- 🔐 Environment variables for API configuration
- 📡 REST API based backend
- 🎨 Clean ChatGPT-inspired UI

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- CSS
- React Context API
- React Markdown
- Rehype Highlight
- Highlight.js

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- OpenAI API

### Development Tools

- Git
- GitHub
- VS Code
- Postman

---

## 📁 Project Structure

```text
SIGMAGPT/
│
├── Backend/
│   ├── models/
│   │   └── Thread.js
│   │
│   ├── routes/
│   │   └── chat.js
│   │
│   ├── utils/
│   │   └── openai.js
│   │
│   ├── package.json
│   ├── server.js
│   └── test.js
│
├── Frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── Chat.jsx
│   │   ├── ChatWindow.jsx
│   │   ├── MyContext.jsx
│   │   ├── Sidebar.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone https://github.com/Khushraj-Rathore/GPT-Clone.git
```

Go inside the project:

```bash
cd GPT-Clone
```

---

## 2. Backend Setup

Go to the Backend folder:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `Backend` folder:

```env
OPENAI_API_KEY=your_openai_api_key
MONGO_URI=your_mongodb_connection_string
```

Then start the backend:

```bash
node server.js
```

---

## 3. Frontend Setup

Open another terminal and go to the Frontend folder:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

---

# 🔑 Environment Variables

The following environment variables are required for the backend:

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | OpenAI API key used to generate AI responses |
| `MONGO_URI` | MongoDB connection string |

> ⚠️ Never commit your `.env` file or API keys to GitHub.

---

# 🔄 Application Flow

```text
                User
                 │
                 ▼
          React Frontend
                 │
                 │ HTTP Request
                 ▼
        Node.js + Express
                 │
        ┌────────┴────────┐
        ▼                 ▼
   OpenAI API          MongoDB
        │                 │
        │ AI Response     │ Chat History
        └────────┬────────┘
                 ▼
          React Frontend
                 │
                 ▼
           AI Response
```

---

# 💡 Main Concepts Used

This project helped me practice and implement:

- React components
- React Hooks
- `useState`
- `useEffect`
- React Context API
- REST APIs
- Express.js routes
- MongoDB and Mongoose
- Database schemas
- Chat/thread data modelling
- OpenAI API integration
- Markdown rendering
- Syntax highlighting
- Frontend-backend communication
- Environment variables
- Git and GitHub

---

# 🧠 Chat Data Model

The application stores conversations using a thread-based structure.

A thread contains:

```text
Thread
│
├── threadId
├── title
├── messages
│   ├── role
│   ├── content
│   └── timestamp
│
├── createdAt
└── updatedAt
```

This allows multiple conversations to be stored and retrieved separately.

---

# 📸 Screenshots

Add screenshots of the application here.

Example:

```markdown
![SigmaGPT Chat Interface](screenshots/chat-interface.png)
```

---

# 🔮 Future Improvements

Some possible improvements for future versions:

- User authentication and authorization
- Streaming AI responses
- Improved responsive design
- Dark/light theme
- Better error handling
- Loading states
- AI model selection
- File upload support
- Voice input
- Chat search

---

# 👨‍💻 Author

**Khushrajsingh Rathore**

Backend Developer Intern | MERN Stack Developer

GitHub:  
https://github.com/Khushraj-Rathore

---

# 📄 License

This project is created for learning and development purposes.
