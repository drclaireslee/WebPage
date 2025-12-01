const helmetOptions = {
    contentSecurityPolicy: {
      directives: {
        "img-src": ["'self'", "https://iprahoo86xomtazb.public.blob.vercel-storage.com", "data:"],
      },
    },
};

export default helmetOptions;