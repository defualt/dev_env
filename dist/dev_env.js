(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs-extra"), require("webpack"), require("yargs"), require("child_process"), require("directory-named-webpack-plugin"), require("express"), require("extract-text-webpack-plugin"), require("globby"), require("html-webpack-plugin"), require("node-sass-json-importer"), require("path"), require("string-replace-webpack-plugin"), require("url"), require("validate-npm-package-name"), require("webpack-dev-middleware"), require("webpack-node-externals"));
	else if(typeof define === 'function' && define.amd)
		define("@defualt/dev_env", ["fs-extra", "webpack", "yargs", "child_process", "directory-named-webpack-plugin", "express", "extract-text-webpack-plugin", "globby", "html-webpack-plugin", "node-sass-json-importer", "path", "string-replace-webpack-plugin", "url", "validate-npm-package-name", "webpack-dev-middleware", "webpack-node-externals"], factory);
	else if(typeof exports === 'object')
		exports["@defualt/dev_env"] = factory(require("fs-extra"), require("webpack"), require("yargs"), require("child_process"), require("directory-named-webpack-plugin"), require("express"), require("extract-text-webpack-plugin"), require("globby"), require("html-webpack-plugin"), require("node-sass-json-importer"), require("path"), require("string-replace-webpack-plugin"), require("url"), require("validate-npm-package-name"), require("webpack-dev-middleware"), require("webpack-node-externals"));
	else
		root["@defualt/dev_env"] = factory(root["fs-extra"], root["webpack"], root["yargs"], root["child_process"], root["directory-named-webpack-plugin"], root["express"], root["extract-text-webpack-plugin"], root["globby"], root["html-webpack-plugin"], root["node-sass-json-importer"], root["path"], root["string-replace-webpack-plugin"], root["url"], root["validate-npm-package-name"], root["webpack-dev-middleware"], root["webpack-node-externals"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("yargs");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable func-names */
function parseRequestResolvePlugin() {
  var parseRequest = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

  return {
    apply: function apply(resolver) {
      // I don't know why 'module' or 'resolve' are those values.
      // Something to do with the the way they are used in this file:
      // https://github.com/webpack/enhanced-resolve/blob/master/lib/ResolverFactory.js
      // So they can be other values as seen in that file.
      resolver.plugin( /* 'modules'*/'resolve', function (request, callback) {
        var newRequestStr = parseRequest(request.request);
        if (newRequestStr && newRequestStr !== request.request) {
          var obj = Object.assign({}, request, {
            request: newRequestStr
          });
          this.doResolve('resolve', obj, 'blah blah', callback);
        } else {
          callback();
        }
      });
    }
  };
}

module.exports = parseRequestResolvePlugin;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fsExtra = __webpack_require__(0);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _validateNpmPackageName = __webpack_require__(20);

var _validateNpmPackageName2 = _interopRequireDefault(_validateNpmPackageName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint-disable no-console */


function ensureTrailingSlash(str) {
  return str.replace(/\/?$/, '/');
}

function ensureReadJsonSync(packageDotJsonPath) {
  var packageDotJsonContent = void 0;
  try {
    packageDotJsonContent = _fsExtra2.default.readJsonSync(packageDotJsonPath);
  } catch (e) {
    packageDotJsonContent = {};
  }
  return packageDotJsonContent;
}

function showProblemsInConsole(problems) {
  if (Object.keys(problems).length) {
    console.info('\x1b[1m', '\nProblems with dependencies', '\x1b[0m');
  }
  Object.keys(problems).forEach(function (moduleResource) {
    console.info('\x1b[36m', '\nProblem in module with `import` statement:', '\x1b[0m');
    console.info('\x1b[37m', ' ' + moduleResource, '\x1b[0m');
    Object.keys(problems[moduleResource]).forEach(function (depName) {
      var problemMsg = problems[moduleResource][depName].msg;
      console.info('\x1b[33m', 'Dependency requested as:', '\x1b[0m');
      console.info('\x1b[37m', ' ' + depName, '\x1b[0m');
      console.info('\x1b[33m', 'Message: ' + problemMsg, '\x1b[0m');
      var problemInfo = problems[moduleResource][depName].info;
      if (problemInfo) {
        console.info('\x1b[37m', '- ' + problemInfo.join('\n - '), '\x1b[0m');
      }
    });
  });
}

function findDependenciesProblems(dependencies, packageDotJsonContent) {
  var problems = {};

  dependencies.forEach(function (dep) {
    if (dep.module) {
      var rawRequest = dep.module.rawRequest;
      // if (rawRequest.indexOf('/Users/brianephraim/Sites/monorepo/packages') === 0) {
      //   console.info('\x1b[33m', 'depWTF', rawRequest, '\x1b[0m');
      //   console.log('depWTF', dep);
      // } else {
      //   console.info('\x1b[33m', 'depGGG', rawRequest, '\x1b[0m');
      //   console.log('depGGG', dep);
      // }

      // not a relative dependency
      // not an absolut dependency
      // we are only concerned with depenencies referenced like
      // `import asdf from 'asdf';`
      // or
      // `import qwer from 'asdf/qwer';``
      // or
      // `import asdf from '@defualt/asdf';``
      // These dependencies will be either in /node_modules/ or /packages/,
      // the latter for only monorepo use.
      if (rawRequest && rawRequest.indexOf('.') !== 0 && rawRequest.indexOf('/') !== 0) {
        var validationResult = (0, _validateNpmPackageName2.default)(rawRequest);
        if (validationResult.validForNewPackages) {
          if (!packageDotJsonContent || (!packageDotJsonContent.dependencies || !packageDotJsonContent.dependencies[rawRequest]) && (!packageDotJsonContent.devDependencies || !packageDotJsonContent.devDependencies[rawRequest])) {
            problems[rawRequest] = { msg: 'MISSING FROM PACKAGE.JSON' };
          }
        } else {
          var info = [].concat(_toConsumableArray(validationResult.warnings || []), _toConsumableArray(validationResult.errors || [])).filter(function (msg) {
            return msg !== 'name can only contain URL-friendly characters';
          });
          // console.log(validationResult);
          if (info.length) {
            problems[rawRequest] = {
              msg: 'BAD FORMATTING',
              info: [].concat(_toConsumableArray(validationResult.warnings || []), _toConsumableArray(validationResult.errors || []))
            };
          }
        }
      }
    }
  });

  return Object.keys(problems).length ? problems : null;
}

function parseStatsForDependencyProblems(stats) {
  var shouldShowProblemsInConsole = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var isMonorepo = _fsExtra2.default.existsSync(process.cwd() + '/packages');

  var packageDotJsonCache = {};
  var problems = {};
  stats.compilation.modules.forEach(function (module) {
    // only concerned with module entries from /packages/ folder (not node_modules)
    if (module.resource && module.resource.indexOf('node_modules') === -1) {
      var packageDotJsonPath = void 0;
      if (isMonorepo) {
        var packagesDir = process.cwd() + '/packages';
        packagesDir = ensureTrailingSlash(packagesDir);
        // get substring from first trailing slash after whatever packagesDir is
        var packageFolderName = module.resource.split(packagesDir)[1].split('/')[0];
        packageDotJsonPath = '' + packagesDir + packageFolderName + '/package.json';
      } else {
        packageDotJsonPath = process.cwd() + '/package.json';
      }

      var packageDotJsonContent = packageDotJsonCache[packageDotJsonPath] || ensureReadJsonSync(packageDotJsonPath);
      packageDotJsonCache[packageDotJsonPath] = packageDotJsonContent;

      var packageSomehowPublic = !packageDotJsonContent.private || !packageDotJsonContent.privateFromGithub;

      // only concerned if module's package.json is not empty,
      // and if it is public on either NPM or Girhub
      if (Object.keys(packageDotJsonContent).length && packageSomehowPublic) {
        var depProblems = findDependenciesProblems(module.dependencies, packageDotJsonContent);
        if (depProblems) {
          problems[module.resource] = depProblems;
        }
      }
    }
  });
  if (Object.keys(problems).length > 0 && shouldShowProblemsInConsole) {
    showProblemsInConsole(problems);
  }

  return problems;
}

exports.default = parseStatsForDependencyProblems;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _child_process = __webpack_require__(10);

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var command = 'sh';

  var args = ['-c',
  // Why `CI=true `? ----- https://github.com/facebook/jest/issues/2959
  'CI=true ' + process.cwd() + '/node_modules/.bin/jest --watch --config=' + __dirname + '/jest.config.js'];

  var proc = _child_process2.default.spawn(command, args, { stdio: 'inherit' });
  proc.on('exit', function (code, signal) {
    process.on('exit', function () {
      if (signal) {
        process.kill(process.pid, signal);
      } else {
        process.exit(code);
      }
    });
  });
}; /* eslint-disable camelcase */

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DirectoryNamedWebpackPlugin = __webpack_require__(11);
var parseRequestResolvePlugin = __webpack_require__(4);
var path = __webpack_require__(17);

module.exports = {
  resolve: {
    modules: [path.resolve('./src/library'), path.resolve(process.cwd(), 'packages'), path.resolve(process.cwd(), '../../packages'), 'node_modules'],
    extensions: ['.js'],
    plugins: [parseRequestResolvePlugin(function (requestStr) {
      if (requestStr.indexOf('@') === 0 && requestStr.indexOf('/') !== -1) {
        return requestStr.split('/')[1];
      }
      return false;
    }), new DirectoryNamedWebpackPlugin(true)]
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _yargs = __webpack_require__(2);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _webpackDevMiddleware = __webpack_require__(21);

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpack = __webpack_require__(1);

var _webpack2 = _interopRequireDefault(_webpack);

var _url = __webpack_require__(19);

var _url2 = _interopRequireDefault(_url);

var _webpackConfig = __webpack_require__(9);

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _parseStatsForDependencyProblems = __webpack_require__(5);

var _parseStatsForDependencyProblems2 = _interopRequireDefault(_parseStatsForDependencyProblems);

var _testSetup = __webpack_require__(6);

var _testSetup2 = _interopRequireDefault(_testSetup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var env = _yargs.argv.env;

var doWebpack = true;

if (env === 'test') {
  (0, _testSetup2.default)();
} else if (doWebpack) {
  var app = (0, _express2.default)();
  var port = 3000;
  var config = _webpackConfig2.default;
  var compiler = (0, _webpack2.default)(config);
  if (env === 'build') {
    compiler.run(function (err, stats) {
      (0, _parseStatsForDependencyProblems2.default)(stats);
      // fs.writeFileSync(process.cwd() + '/_webpack_stats.json',JSON.stringify(stats, null, 2));

      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        return;
      }

      var info = stats.toJson();

      if (stats.hasErrors()) {
        info.errors.forEach(function (e) {
          console.error('\x1b[31m', e, '\x1b[0m');
        });
      }

      if (stats.hasWarnings()) {
        info.warnings.forEach(function (w) {
          console.warn('\x1b[33m', w, '\x1b[0m');
        });
      }
    });
  } else {
    app.use(function (req, res, next) {
      var urlSplit = _url2.default.parse(req.url).pathname.split('/');
      var lastPart = urlSplit[urlSplit.length - 1];
      var lastPartContainsDot = lastPart.indexOf('.') !== -1;
      var lastPartContainsDotHtml = lastPart.indexOf('.html') !== -1;
      if (!lastPartContainsDot || lastPartContainsDotHtml) {
        req.url = '/';
      }
      next();
    });

    console.info('🔷 Starting webpack ...');

    var activeWebpackDevMiddleware = (0, _webpackDevMiddleware2.default)(compiler, {
      publicPath: config.output.publicPath,
      stats: {
        colors: true
      }
    });
    activeWebpackDevMiddleware.waitUntilValid(function (stats) {
      (0, _parseStatsForDependencyProblems2.default)(stats);
    });

    app.use(activeWebpackDevMiddleware);

    app.use('/images', _express2.default.static('packages/images'));
    app.use('/fonts', _express2.default.static('packages/fonts'));
    // app.get(new RegExp('^[/](images|fonts)[/](.+)'), (req, res) => {
    //   res.sendFile(path.join(__dirname, `packages${url.parse(req.url).pathname}`));
    // });

    // app.get('/*', (req, res) => {
    //   console.log(url.parse(req.url).pathname);
    //   res.sendFile(path.join(process.cwd(), 'index.html'));
    // });

    // app.get(new RegExp('/^\/(.*)\.html$'), (req, res) => {
    //   res.sendFile(path.join(process.cwd(), 'index.html'));
    // });

    app.listen(port, function (error) {
      if (error) {
        console.error(error);
      } else {
        console.info('🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
      }
    });
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _yargs = __webpack_require__(2);

var _stringReplaceWebpackPlugin = __webpack_require__(18);

var _stringReplaceWebpackPlugin2 = _interopRequireDefault(_stringReplaceWebpackPlugin);

var _webpack = __webpack_require__(1);

var _webpack2 = _interopRequireDefault(_webpack);

var _nodeSassJsonImporter = __webpack_require__(16);

var _nodeSassJsonImporter2 = _interopRequireDefault(_nodeSassJsonImporter);

var _extractTextWebpackPlugin = __webpack_require__(13);

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

var _htmlWebpackPlugin = __webpack_require__(15);

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _webpackNodeExternals = __webpack_require__(22);

var _webpackNodeExternals2 = _interopRequireDefault(_webpackNodeExternals);

var _globby = __webpack_require__(14);

var _globby2 = _interopRequireDefault(_globby);

var _fsExtra = __webpack_require__(0);

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _webpackConfigResolve = __webpack_require__(7);

var _webpackConfigResolve2 = _interopRequireDefault(_webpackConfigResolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*
                                                                                                                                                                                                      This files return a function that when called generates a webpack config json.
                                                                                                                                                                                                      `argv` is passed into this function.
                                                                                                                                                                                                    
                                                                                                                                                                                                      when `argv.env === falsey`
                                                                                                                                                                                                        This compiles for a dev server via webpack-dev-middleware.  No files are created to disk,
                                                                                                                                                                                                        only created in memory.
                                                                                                                                                                                                    
                                                                                                                                                                                                      when `argv.env === 'build'`
                                                                                                                                                                                                        This compiles files to disk in a /dist folder and a /demo folder.
                                                                                                                                                                                                    
                                                                                                                                                                                                      when `argv.dirroot === some path`
                                                                                                                                                                                                        This is used when dev_env itself is compiled.
                                                                                                                                                                                                        This very file is compiled according the config set by this file.
                                                                                                                                                                                                        This is needed to make dev_env portable via npm.
                                                                                                                                                                                                        babel-node needs to compile this dev_env to work,
                                                                                                                                                                                                        but this does not play well when dev_env is in a node_modules folder.
                                                                                                                                                                                                        So we need to compile dev_env before publishing to npm.
                                                                                                                                                                                                        Directory paths need to be tweaked to accomplish this,
                                                                                                                                                                                                        and that's what `argv.dirroot` helps with.
                                                                                                                                                                                                    
                                                                                                                                                                                                    
                                                                                                                                                                                                      This function is also affected by package.json.
                                                                                                                                                                                                    
                                                                                                                                                                                                      when package.json.bundleForNode === true
                                                                                                                                                                                                        in conjunction with `argv.env === 'build'`, the bundle will
                                                                                                                                                                                                        have special consideration for a node platform.
                                                                                                                                                                                                        Only application files will be bundled.
                                                                                                                                                                                                        node_modules and node built-in requires will not be bundled.
                                                                                                                                                                                                    */

var devHtmlPath = './index.html';

function generateConfigJson() {
  var env = _yargs.argv.env;

  var dirRoot = _yargs.argv.dirroot || process.cwd();

  var packageJson = _fsExtra2.default.readJsonSync(dirRoot + '/package.json');

  var bundleForNode = packageJson.bundleForNode;

  var username = null;
  if (packageJson.repository && packageJson.repository.url) {
    username = packageJson.repository.url.replace('://').split('/')[1];
  }

  var libraryName = packageJson.name;
  var libraryNameReduced = libraryName.split('/')[1] || libraryName.split('/')[0];

  var plugins = [];
  var pluginRegistry = {};
  function registerPlugin(name, plugin) {
    if (!pluginRegistry[name]) {
      plugins.push(plugin);
      pluginRegistry[name] = true;
      return true;
    }
    return false;
  }

  function conditionalExtractTextLoaderCss(usePlugin, moreLoaderParams) {
    if (usePlugin) {
      registerPlugin('ExtractTextPlugin', new _extractTextWebpackPlugin2.default('[name].css'));
      return { use: _extractTextWebpackPlugin2.default.extract(moreLoaderParams) };
    }
    return {
      use: [moreLoaderParams.fallback].concat(_toConsumableArray(moreLoaderParams.use))
    };
  }

  var outputFiles = {};
  if (env === 'build') {
    outputFiles.library = 'dist/' + libraryNameReduced;
    outputFiles.libraryMin = 'dist/' + libraryNameReduced + '.min';
    outputFiles.demo = 'dist/demo/index';
  } else {
    outputFiles.demo = 'boot';
    outputFiles.library = '' + libraryNameReduced;
  }
  var entryFiles = _extends(_defineProperty({
    MainApp: _globby2.default.sync([dirRoot + '/packages/MainApp/MainApp.js'])
  }, outputFiles.library, _globby2.default.sync([dirRoot + '/' + libraryNameReduced + '.js', dirRoot + '/src/library/index.js'])), outputFiles.libraryMin ? _defineProperty({}, outputFiles.libraryMin, _globby2.default.sync([dirRoot + '/src/library/index.js'])) : {}, _defineProperty({}, outputFiles.demo, _globby2.default.sync([dirRoot + '/*.demo.js', dirRoot + '/demo.js', dirRoot + '/**/*/*.demo.js', dirRoot + '/**/*/demo.js', '!' + dirRoot + '/packages/**/*', dirRoot + '/packages/MainApp/MainApp.js'])));
  var entry = Object.keys(entryFiles).reduce(function (accum, entryName) {
    if (entryFiles[entryName].length) {
      accum[entryName] = entryFiles[entryName];
    }
    return accum;
  }, {});

  function moveModify(source, modifyPath, modifyContent) {
    var sources = [];
    if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object') {
      sources = source;
    } else {
      sources.push(source);
    }
    var toCopy = [];
    sources.forEach(function (pattern) {
      toCopy = [].concat(_toConsumableArray(toCopy), _toConsumableArray(_globby2.default.sync(pattern)));
    });
    toCopy.forEach(function (filePath) {
      var filePathOut = filePath;
      if (modifyPath) {
        filePathOut = modifyPath(filePath);
      }
      var content = _fsExtra2.default.readFileSync(filePath, 'utf8');
      if (modifyContent) {
        content = modifyContent(content, filePath, filePathOut);
      }
      _fsExtra2.default.outputFileSync(filePathOut, content);
    });
  }

  if (env === 'build') {
    moveModify(['src/import-examples/**/!(webpack.config).*', 'src/tonicExample.js'], function (filePath) {
      return filePath.replace('src/', './');
    }, function (content) {
      return content.replace(/LIBRARYNAME/g, libraryName);
    });

    registerPlugin('UglifyJsPlugin', new _webpack2.default.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }));

    var templatePath = 'src/demo/index.ejs';
    var htmlTemplateExists = _fsExtra2.default.existsSync(templatePath);
    var indexHtmlSettings = _extends({
      chunks: [outputFiles.demo]
    }, htmlTemplateExists ? { template: templatePath } : {}, {
      title: 'afasdfasdfasd',
      username: username,
      libraryName: libraryName
    });
    registerPlugin('demoIndex-HtmlWebpackPlugin', new _htmlWebpackPlugin2.default(_extends({
      filename: './dist/demo/index.html'
    }, indexHtmlSettings)));
  } else {
    registerPlugin('demoDevIndex-HtmlWebpackPlugin', new _htmlWebpackPlugin2.default({
      chunks: [outputFiles.demo],
      filename: devHtmlPath
    }));
  }
  registerPlugin('StringReplacePlugin', new _stringReplaceWebpackPlugin2.default());

  registerPlugin('LoaderOptionsPlugin', new _webpack2.default.LoaderOptionsPlugin({
    options: {
      sassLoader: {
        importer: _nodeSassJsonImporter2.default
      },
      context: dirRoot
    }
  }));

  var config = _extends({
    entry: entry,
    devtool: env === 'build' ? 'source-map' : 'eval',
    output: {
      path: '' + dirRoot,
      filename: '[name].js',
      library: libraryName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
      publicPath: '/'
      // publicPath: '/assets/',
    },
    module: {
      rules: [{
        test: /\.(js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
        // include: `${dirRoot}`,
        // options: {
        //   presets: [

        //     [
        //       'es2015',
        //       // needed for tree shaking
        //       { modules: false },
        //     ],
        //     'react',
        //     // 'react',
        //   ],
        //   plugins: [
        //     'transform-es2015-spread',
        //     'transform-object-rest-spread',
        //   ],
        //   // mocha needs .babelrc,
        //   // and .babelrc cannot use the above config
        //   // so ignore .babelrc here
        //   babelrc: false,
        // },
      }, _extends({
        test: /\.css$/
      }, conditionalExtractTextLoaderCss(env === 'build', {
        fallback: 'style-loader',
        use: ['css-loader']
      })), _extends({
        test: /\.scss$/
      }, conditionalExtractTextLoaderCss(env === 'build', {
        fallback: 'style-loader',
        use: ['css-loader?sourceMap', {
          loader: 'sass-loader?sourceMap',
          // Apply the JSON importer via sass-loader's options.
          options: {
            importer: _nodeSassJsonImporter2.default
          }
        }]
      })), {
        test: /\.json$/,
        loaders: ['json-loader']
      }, {
        test: /\.ejs$/,
        loader: 'ejs-compiled-loader'
      }, {
        test: /\.md/,
        loaders: ['html-loader', 'markdown-loader']
      }, {
        test: /\.js|\.html|\.ejs$/,
        exclude: [__filename],
        loader: _stringReplaceWebpackPlugin2.default.replace({
          replacements: [{
            pattern: /LIBRARYNAME/g,
            replacement: function replacement() /* match, p1, offset, string */{
              return libraryName;
            }
          }]
        })
      }]
    },
    resolve: _webpackConfigResolve2.default.resolve,
    plugins: plugins
  }, bundleForNode ? {
    target: 'node',
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [(0, _webpackNodeExternals2.default)({ modulesFromFile: true })]
  } : {});

  _fsExtra2.default.writeFileSync('./_webpack-config-preview.json', JSON.stringify(config, null, 2));
  return config;
}

exports.default = generateConfigJson();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("directory-named-webpack-plugin");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("globby");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("html-webpack-plugin");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("node-sass-json-importer");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("string-replace-webpack-plugin");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("validate-npm-package-name");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});
//# sourceMappingURL=dev_env.js.map