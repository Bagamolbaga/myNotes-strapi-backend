module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f18c573ff1b5d6fd7305d06bc30f6f5c'),
  },
});
