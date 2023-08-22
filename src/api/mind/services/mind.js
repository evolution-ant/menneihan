'use strict';

/**
 * mind service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mind.mind');
