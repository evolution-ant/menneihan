'use strict';

/**
 * joke-topic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::joke-topic.joke-topic');
