// @ts-nocheck
"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const response = await strapi
      .service("api::product.product")
      .find(sanitizedQueryParams);

    return response;
  },
}));
