
const allowedOrigins = [
  "https://drclaireslee.vercel.app",
  "http://localhost:5173",
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        } else {
        callback(new Error("CORS blocked"));
        }
    },
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS", "HEAD"],
    allowedHeaders: ["Content-Type", "Authorization", "x-auth"],
};

export default corsOptions;