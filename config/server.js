module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7d6b5a9a1c1c0e92e2ef4f2ee3e59656'),
    },
  },
});
