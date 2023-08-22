'use strict';

/**
 * joke-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::joke-tag.joke-tag');
