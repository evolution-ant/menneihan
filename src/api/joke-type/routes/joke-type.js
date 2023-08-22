'use strict';

/**
 * joke-type router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::joke-type.joke-type');
