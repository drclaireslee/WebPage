
const corsOptions = {
    origin: "https://drclaireslee.vercel.app",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS", "HEAD"],
    allowedHeaders: ["Content-Type", "Authorization", "x-auth"]
};

export default corsOptions;