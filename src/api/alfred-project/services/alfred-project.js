'use strict';

/**
 * alfred-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::alfred-project.alfred-project');
