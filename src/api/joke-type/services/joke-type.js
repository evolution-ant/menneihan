'use strict';

/**
 * joke-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::joke-type.joke-type');
