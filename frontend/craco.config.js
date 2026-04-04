// craco.config.js
const path = require("path");

// Detect environment
const isDev = process.env.NODE_ENV === "development";

// Environment variable flags
const config = {
  disableHotReload: process.env.DISABLE_HOT_RELOAD === "true",
  enableVisualEdits: process.env.REACT_APP_ENABLE_VISUAL_EDITS === "true",
  enableHealthCheck: process.env.ENABLE_HEALTH_CHECK === "true",
};

// Conditionally load visual editing modules (DEV ONLY)
let babelMetadataPlugin;
let setupDevServer;

if (isDev && config.enableVisualEdits) {
  babelMetadataPlugin = require("./plugins/visual-edits/babel-metadata-plugin");
  setupDevServer = require("./plugins/visual-edits/dev-server-setup");
}

// Conditionally load health check modules (DEV ONLY)
let WebpackHealthPlugin;
let setupHealthEndpoints;
let healthPluginInstance;

if (isDev && config.enableHealthCheck) {
  WebpackHealthPlugin = require("./plugins/health-check/webpack-health-plugin");
  setupHealthEndpoints = require("./plugins/health-check/health-endpoints");
  healthPluginInstance = new WebpackHealthPlugin();
}

const cracoConfig = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      // Disable hot reload completely if requested (DEV ONLY)
      if (isDev && config.disableHotReload) {
        webpackConfig.plugins = webpackConfig.plugins.filter(
          (plugin) => plugin.constructor.name !== "HotModuleReplacementPlugin"
        );

        webpackConfig.watch = false;
        webpackConfig.watchOptions = {
          ignored: /.*/,
        };
      } else if (isDev) {
        // Reduce watch overhead in development
        webpackConfig.watchOptions = {
          ...webpackConfig.watchOptions,
          ignored: [
            "**/node_modules/**",
            "**/.git/**",
            "**/build/**",
            "**/dist/**",
            "**/coverage/**",
            "**/public/**",
          ],
        };
      }

      // Add health check plugin (DEV ONLY)
      if (isDev && config.enableHealthCheck && healthPluginInstance) {
        webpackConfig.plugins.push(healthPluginInstance);
      }

      return webpackConfig;
    },
  },
};

// Add babel plugin only if visual editing is enabled (DEV ONLY)
if (isDev && config.enableVisualEdits && babelMetadataPlugin) {
  cracoConfig.babel = {
    plugins: [babelMetadataPlugin],
  };
}

// Configure dev server ONLY in development
if (isDev && (config.enableVisualEdits || config.enableHealthCheck)) {
  cracoConfig.devServer = (devServerConfig) => {
    // Visual edits dev-server setup
    if (config.enableVisualEdits && setupDevServer) {
      devServerConfig = setupDevServer(devServerConfig);
    }

    // Health check endpoints
    if (
      config.enableHealthCheck &&
      setupHealthEndpoints &&
      healthPluginInstance
    ) {
      const originalSetupMiddlewares = devServerConfig.setupMiddlewares;

      devServerConfig.setupMiddlewares = (middlewares, devServer) => {
        if (originalSetupMiddlewares) {
          middlewares = originalSetupMiddlewares(middlewares, devServer);
        }

        setupHealthEndpoints(devServer, healthPluginInstance);
        return middlewares;
      };
    }

    return devServerConfig;
  };
}

module.exports = cracoConfig;
  };
}

module.exports = webpackConfig;
