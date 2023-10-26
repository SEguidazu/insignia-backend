"use strict";

/**
 * subcategory controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::subcategory.subcategory",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const response = await strapi
        .service("api::subcategory.subcategory")
        .find(sanitizedQueryParams);

      return response;
    },
  })
);
