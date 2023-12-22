const { sanitize } = require("@strapi/utils");

module.exports = (plugin) => {
  plugin.controllers.user.updateMe = async (ctx) => {
    if (!ctx.state.user || !ctx.state.user.id) {
      return (ctx.response.status = 401);
    }
    await strapi
      .query("plugin::users-permissions.user")
      .update({
        where: { id: ctx.state.user.id },
        data: ctx.request.body,
        populate: { favorite_products: true, address: true },
      })
      .then(async (response) => {
        console.log("[RESPONSE]:", response);
        const resp = await sanitize.contentAPI.output(
          response,
          strapi.getModel("plugin::users-permissions.user")
        );
        ctx.response.body = resp;
      });
  };

  plugin.routes["content-api"].routes.push({
    method: "PUT",
    path: "/user/me",
    handler: "user.updateMe",
    config: {
      prefix: "",
      policies: [],
    },
  });

  return plugin;
};
