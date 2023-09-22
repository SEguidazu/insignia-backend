// @ts-nocheck
"use strict";

/**
 * slider controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::slider.slider", ({ strapi }) => ({
  async find(ctx) {
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);
    const response = await strapi
      .service("api::slider.slider")
      .find(sanitizedQueryParams);

    return response;
  },
}));
