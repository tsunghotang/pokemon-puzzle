// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8iF05":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "89839876c2ab8f48";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"kShel":[function(require,module,exports) {
var _puzzle = require("./puzzle");
(0, _puzzle.initPuzzleGame)();

},{"./puzzle":"2dS8S"}],"2dS8S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPuzzleGame", ()=>initPuzzleGame);
var _timer = require("./timer");
var _images = require("./images");
var _imagesDefault = parcelHelpers.interopDefault(_images);
const initPuzzleGame = ()=>{
    // check if we are on the puzzle page
    const gameBoard = document.querySelector(".game-board");
    const generateGrid = (puzzle, shuffleCount, width, height)=>{
        let empty = puzzle.indexOf(0);
        let lastPiece = empty;
        for(let i = 0; i < shuffleCount; i++){
            const pieces = surroundingPieces(empty, width, height);
            pieces.filter((el)=>el === lastPiece);
            const pieceIndex = pieces[Math.floor(Math.random() * pieces.length)];
            puzzle[empty] = puzzle[pieceIndex];
            lastPiece = empty;
            puzzle[pieceIndex] = 0;
            empty = pieceIndex;
        }
        return puzzle;
    };
    const drawGrid = (grid)=>{
        const imgHTMLArray = grid.map((el)=>{
            if (el === 0) return "empty";
            else return `<img src="${(0, _imagesDefault.default)[el - 1]}" data-order="${el}" class="puzzle-img">`;
        });
        const tdArray = document.querySelectorAll("td");
        tdArray.forEach((td, i)=>{
            if (imgHTMLArray[i] === "empty") {
                td.classList.add(imgHTMLArray[i]);
                td.innerHTML = `<span class="puzzle-img" data-order='16'></span>`;
            } else td.innerHTML = imgHTMLArray[i];
        });
    };
    const surroundingPieces = (z, w, h)=>{
        const x = z % w;
        const y = Math.floor(z / h);
        const left = x === 0 ? "none" : z - 1;
        const up = y === 0 ? "none" : z - w;
        const right = x === w - 1 ? "none" : z + 1;
        const down = y === h - 1 ? "none" : z + w;
        return [
            left,
            up,
            right,
            down
        ].filter((el)=>el !== "none");
    };
    const isValidMove = (tile)=>{
        const tileColumn = tile.cellIndex;
        const tileRow = tile.parentElement.rowIndex;
        const emptyTile = document.querySelector(".empty");
        const emptyTileColumn = emptyTile.cellIndex;
        const emptyTileRow = emptyTile.parentElement.rowIndex;
        return tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1 || tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1 || tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1 || tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1;
    };
    const moveTile = (tile)=>{
        const emptyTile = document.querySelector(".empty");
        const emptyInnerHTML = emptyTile.innerHTML;
        emptyTile.innerHTML = tile.innerHTML;
        emptyTile.classList.remove("empty");
        tile.innerHTML = emptyInnerHTML;
        tile.classList.add("empty");
    };
    const checkSolved = (tiles, intervalId, moves)=>{
        const tilesOrder = Array.from(document.querySelectorAll(".puzzle-img")).map((e)=>e.dataset.order);
        if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16") {
            clearInterval(intervalId);
            const time = `${document.getElementById("mm").innerText} : ${document.getElementById("ms").innerText}`;
            setTimeout(()=>{
                alert(`Congragulations, you completed the puzzle in ${time} with ${moves} moves`);
            }, 100);
            document.querySelector(".game-board").classList.add("no-click");
        }
    };
    // Init
    if (gameBoard) {
        let moveCount = 0;
        let intervalId = null;
        const counterElement = document.querySelector(".move-counter");
        const tiles = document.querySelectorAll("td");
        document.querySelector(".reset").addEventListener("click", ()=>{
            location.reload();
        });
        gameBoard.addEventListener("click", ()=>{
            intervalId = setInterval((0, _timer.startTimer), 1000);
        }, {
            once: true
        });
        /// generate a random grid  (grid, number of randomized moves, width, height)
        const grid = generateGrid([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            0
        ], 100, 4, 4);
        // populate the grid
        drawGrid(grid);
        tiles.forEach((tile)=>{
            tile.addEventListener("click", ()=>{
                if (isValidMove(tile)) {
                    moveCount++;
                    counterElement.innerText = moveCount;
                    moveTile(tile);
                    checkSolved(tiles, intervalId, moveCount);
                }
            });
        });
    }
};

},{"./timer":"hRfvf","./images":"2yAII","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hRfvf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startTimer", ()=>startTimer);
let min = 0;
let sec = 0;
const startTimer = ()=>{
    let leadingZero = "";
    leadingZero = sec < 10 ? "0" : "";
    document.getElementById("ms").innerHTML = leadingZero + sec;
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        leadingZero = min < 10 ? "0" : "";
        document.getElementById("mm").innerHTML = leadingZero + min;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2yAII":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// images
var _201Unown1Svg = require("../images/201-unown-1.svg");
var _201Unown1SvgDefault = parcelHelpers.interopDefault(_201Unown1Svg);
var _201Unown2Svg = require("../images/201-unown-2.svg");
var _201Unown2SvgDefault = parcelHelpers.interopDefault(_201Unown2Svg);
var _201Unown3Svg = require("../images/201-unown-3.svg");
var _201Unown3SvgDefault = parcelHelpers.interopDefault(_201Unown3Svg);
var _201Unown4Svg = require("../images/201-unown-4.svg");
var _201Unown4SvgDefault = parcelHelpers.interopDefault(_201Unown4Svg);
var _201Unown5Svg = require("../images/201-unown-5.svg");
var _201Unown5SvgDefault = parcelHelpers.interopDefault(_201Unown5Svg);
var _201Unown6Svg = require("../images/201-unown-6.svg");
var _201Unown6SvgDefault = parcelHelpers.interopDefault(_201Unown6Svg);
var _201Unown7Svg = require("../images/201-unown-7.svg");
var _201Unown7SvgDefault = parcelHelpers.interopDefault(_201Unown7Svg);
var _201Unown8Svg = require("../images/201-unown-8.svg");
var _201Unown8SvgDefault = parcelHelpers.interopDefault(_201Unown8Svg);
var _201Unown9Svg = require("../images/201-unown-9.svg");
var _201Unown9SvgDefault = parcelHelpers.interopDefault(_201Unown9Svg);
var _201Unown10Svg = require("../images/201-unown-10.svg");
var _201Unown10SvgDefault = parcelHelpers.interopDefault(_201Unown10Svg);
var _201Unown11Svg = require("../images/201-unown-11.svg");
var _201Unown11SvgDefault = parcelHelpers.interopDefault(_201Unown11Svg);
var _201Unown12Svg = require("../images/201-unown-12.svg");
var _201Unown12SvgDefault = parcelHelpers.interopDefault(_201Unown12Svg);
var _201Unown13Svg = require("../images/201-unown-13.svg");
var _201Unown13SvgDefault = parcelHelpers.interopDefault(_201Unown13Svg);
var _201Unown14Svg = require("../images/201-unown-14.svg");
var _201Unown14SvgDefault = parcelHelpers.interopDefault(_201Unown14Svg);
var _201Unown15Svg = require("../images/201-unown-15.svg");
var _201Unown15SvgDefault = parcelHelpers.interopDefault(_201Unown15Svg);
const images = [
    (0, _201Unown1SvgDefault.default),
    (0, _201Unown2SvgDefault.default),
    (0, _201Unown3SvgDefault.default),
    (0, _201Unown4SvgDefault.default),
    (0, _201Unown5SvgDefault.default),
    (0, _201Unown6SvgDefault.default),
    (0, _201Unown7SvgDefault.default),
    (0, _201Unown8SvgDefault.default),
    (0, _201Unown9SvgDefault.default),
    (0, _201Unown10SvgDefault.default),
    (0, _201Unown11SvgDefault.default),
    (0, _201Unown12SvgDefault.default),
    (0, _201Unown13SvgDefault.default),
    (0, _201Unown14SvgDefault.default),
    (0, _201Unown15SvgDefault.default)
];
exports.default = images;

},{"../images/201-unown-1.svg":"lAHfZ","../images/201-unown-2.svg":"l5leb","../images/201-unown-3.svg":"3fAF6","../images/201-unown-4.svg":"fXZqg","../images/201-unown-5.svg":"cX68t","../images/201-unown-6.svg":"WTyCm","../images/201-unown-7.svg":"enfOQ","../images/201-unown-8.svg":"34OS5","../images/201-unown-9.svg":"llBVz","../images/201-unown-10.svg":"h6Zeo","../images/201-unown-11.svg":"gsClu","../images/201-unown-12.svg":"12Cqj","../images/201-unown-13.svg":"j9gLE","../images/201-unown-14.svg":"bU1HY","../images/201-unown-15.svg":"4SNFM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lAHfZ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-1.2ae2a592.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"l5leb":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-2.1983a85b.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3fAF6":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-3.548d14d0.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fXZqg":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-4.25eb4f2e.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cX68t":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-5.2fcd1231.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"WTyCm":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-6.fafdaefb.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"enfOQ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-7.9bc093f2.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"34OS5":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-8.8f35c3e3.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"llBVz":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-9.de4b3fa1.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"h6Zeo":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-10.977a7c57.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gsClu":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-11.edaaf4e0.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"12Cqj":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-12.bccc2904.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"j9gLE":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-13.27a5af0e.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bU1HY":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-14.3e5f300d.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4SNFM":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("bNZ0D") + "201-unown-15.f5fe5547.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["8iF05","kShel"], "kShel", "parcelRequire94c2")

//# sourceMappingURL=index.c2ab8f48.js.map
