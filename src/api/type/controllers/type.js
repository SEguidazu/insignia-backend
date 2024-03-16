"use strict";

/**
 * type controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { sanitize, validateYupSchema } = require("@strapi/utils");

module.exports = createCoreController("api::type.type", ({ strapi }) => ({
  async find(ctx) {
    const contentType = strapi.contentType("api::type.type");
    await validateYupSchema(contentType, ctx.query);
    const sanitizedQueryParams = await sanitize.contentAPI.query(
      ctx.query,
      contentType
    );
    const response = await strapi
      .service("api::type.type")
      .find(sanitizedQueryParams);

    return response;
  },
}));
