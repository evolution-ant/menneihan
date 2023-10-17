'use strict';

/**
 * ci controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ci.ci');
