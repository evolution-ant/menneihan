'use strict';

/**
 * alfred-terminal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::alfred-terminal.alfred-terminal');
