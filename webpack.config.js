const nodeExternals = require('webpack-node-externals');

module.exports = {
  // Your existing configuration
  // ...
  externals: [nodeExternals({
    // Add more modules if needed
    allowlist: ['stream']
  })]
};
