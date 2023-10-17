'use strict';

/**
 * ci service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ci.ci');
