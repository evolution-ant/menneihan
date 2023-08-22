'use strict';

/**
 * site-tag service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-tag.site-tag');
