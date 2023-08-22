'use strict';

/**
 * code-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::code-tag.code-tag');
