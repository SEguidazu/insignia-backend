// @ts-nocheck
"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { sanitize, validateYupSchema } = require("@strapi/utils");

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    const contentType = strapi.contentType("api::product.product");
    await validateYupSchema(contentType, ctx.query);
    const sanitizedQueryParams = await sanitize.contentAPI.query(
      ctx.query,
      contentType
    );
    const response = await strapi
      .service("api::product.product")
      .find(sanitizedQueryParams);

    return response;
  },
}));
