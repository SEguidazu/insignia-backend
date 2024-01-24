module.exports = {
  apps: [
    {
      name: "insignia-strapi",
      cwd: "/home/bitnami/insignia-backend",
      script: "yarn",
      args: "start",
      env: {
        HOST: "0.0.0.0",
        PORT: "1337",
        APP_KEYS:
          "GIn4M5yfxFTSHiSsWcUIKw==,gQCXDHyGyJjy/5OEWCcDfw==,BCeZ1OPxiJT97307/5lbyQ==,HV4GMz+gc5XdAJKZqd22JQ==",
        API_TOKEN_SALT: "VptYKC+gjwnc6xcfS/mlBg==",
        ADMIN_JWT_SECRET: "jVAWH3xrq57ElWqAWBs/iQ==",
        TRANSFER_TOKEN_SALT: "Ul487Q7FJQ/gEC6pyMfm4Q==",
        JWT_SECRET: "MTnRDSk7k1yZEo9G6BuBkg==",
        NODE_ENV: "production",
        DATABASE_CLIENT: "postgres",
        DATABASE_HOST:
          "ls-e993358941994842fdf611d7aa2d3c5506024125.ch0ogaooa22r.us-east-1.rds.amazonaws.com",
        DATABASE_PORT: "5432",
        DATABASE_NAME: "dbinsignia",
        DATABASE_USERNAME: "postgres",
        DATABASE_PASSWORD: "%hWFT<b2?)+:<~E#D=IUXu~=)!x#|)<Z",

        AWS_ACCESS_KEY_ID: "AKIAR6FRLN2ALGPSUPOV",
        AWS_ACCESS_SECRET: "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",
        AWS_REGION: "us-east-1",
        AWS_BUCKET_NAME: "strapi-insignia-media",
      },
    },
  ],
};
