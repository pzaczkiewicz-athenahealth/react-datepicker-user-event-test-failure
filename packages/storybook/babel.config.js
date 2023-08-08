const baseConfigFunction = require('../../babel.config.js');

module.exports = function (api) {
  const baseConfig = baseConfigFunction(api);

  return {
    ...baseConfig,
  };
};
