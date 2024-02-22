"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { sanitize, validateYupSchema } = require("@strapi/utils");

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async find(ctx) {
    const contentType = strapi.contentType("api::order.order");
    await validateYupSchema(contentType, ctx.query);
    const sanitizedQueryParams = await sanitize.contentAPI.query(
      ctx.query,
      contentType
    );
    const response = await strapi
      .service("api::order.order")
      .find(sanitizedQueryParams);

    return response;
  },
}));
