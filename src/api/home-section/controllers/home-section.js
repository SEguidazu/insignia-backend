"use strict";

/**
 * home-section controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::home-section.home-section",
  ({ strapi }) => ({
    async find(ctx) {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const response = await strapi
        .service("api::home-section.home-section")
        .find(sanitizedQueryParams);

      return response;
    },
  })
);
