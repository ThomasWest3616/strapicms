module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'bc0cb252674cd74de44e9a9ea112d447'),
    },
  },
});
