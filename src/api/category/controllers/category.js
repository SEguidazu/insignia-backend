// @ts-nocheck
"use strict";

/**
 * category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const response = await strapi
        .service("api::category.category")
        .find(sanitizedQueryParams);

      return response;
    },
  })
);
