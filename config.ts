export default {
  // These env variables may not work on client side
  dbUrl: process.env.DB_URL,
  dbName: process.env.DB_NAME,
  jwtSecret: process.env.JWT_SECRET,
  stripeSecret: process.env.STRIPE_SECRET,
  pages: {
    index: "/",
    login: "/login",
    donate: (path = "[id]") => `/donate/${path}`
  },
  apis: {
    login: "/api/login",
    checkToken: "/api/checkToken",
    createDonation: "/api/createDonation",
    paymentIntents: "/api/paymentIntents",
    // Remove this endpoint when we no longer need to redirect from index.ts
    getDefaultNonprofitId: "/api/getDefaultNonprofitId"
  }
};
