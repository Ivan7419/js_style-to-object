'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((style) => {
    if (!style.trim()) {
      return;
    }

    const [key, value] = style.split(':');

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
