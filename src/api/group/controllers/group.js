"use strict";
/**
 *  group controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::group.group");

module.exports = createCoreController("api::group.group", ({ strapi }) => ({
  async create(ctx) {
    const body = ctx.request.body;
    const entity = await strapi.service("api::group.group").create(body);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  // async find(ctx) {
  //   const entitys = await strapi.service("api::group.group").find();
  //   const sanitizedEntity = await this.sanitizeOutput(entitys, ctx);
  //   return this.transformResponse(sanitizedEntity);
  // },
}));
