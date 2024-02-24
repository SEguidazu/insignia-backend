"use strict";

/**
 * order service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::order.order", ({ strapi }) => ({
  async create(params) {
    const products = params.data?.order_qty;
    // @ts-ignore
    const result = await super.create(params);

    try {
      products?.forEach(async (item) => {
        const entry = await strapi.entityService.findOne(
          "api::product.product",
          item.id,
          {
            fields: ["stock"],
          }
        );

        await strapi.entityService.update("api::product.product", item.id, {
          data: {
            stock: entry.stock - item.quantity,
          },
        });
      });
    } catch (error) {
      console.error("[UPDATE_STOCK_CREATE_ORDER]:", error);
    }

    return result;
  },
}));
