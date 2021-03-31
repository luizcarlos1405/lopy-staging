import { G as _inherits, H as _getPrototypeOf, J as _possibleConstructorReturn, K as _classCallCheck, L as init, M as safe_not_equal, N as _assertThisInitialized, O as dispatch_dev, Q as SvelteComponentDev, aw as create_slot, R as validate_slots, U as element, X as claim_element, Y as children, $ as detach_dev, a1 as attr_dev, a2 as add_location, a3 as insert_dev, a6 as _slicedToArray, ax as update_slot, af as transition_in, ag as transition_out, _ as _toConsumableArray, F as _typeof, ay as createCommonjsModule, az as writable, aA as readable, aB as regenerator, c as _defineProperty, aC as add_render_callback, aD as create_in_transition } from './client.8250aea1.js';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/TopBar.svelte";

function create_fragment(ctx) {
  var div;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[1].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[0], null);
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "z-50 flex justify-between items-center flex-nowrap font-base sticky top-2 mx-2 mt-2 px-4 py-3 shadow-md  box-border rounded-full rounded-full  bg-background-dark");
      add_location(div, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[0], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("TopBar", slots, ['default']);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<TopBar> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
  };

  return [$$scope, slots];
}

var TopBar = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(TopBar, _SvelteComponentDev);

  var _super = _createSuper(TopBar);

  function TopBar(options) {
    var _this;

    _classCallCheck(this, TopBar);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "TopBar",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return TopBar;
}(SvelteComponentDev);

var stripNonDigits = function stripNonDigits(str) {
  return str.replace(/[^\d]/g, '');
};
var formatMoney = function formatMoney(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$showSign = _ref.showSign,
      showSign = _ref$showSign === void 0 ? true : _ref$showSign,
      _ref$thousandsSeparat = _ref.thousandsSeparator,
      _ref$decimalSeparator = _ref.decimalSeparator;

  var sign = showSign && Math.sign(value) < 0 ? '-' : '';
  var amount = Math.abs(value);
  var whole = Math.floor(amount / 100);
  var decimal = amount - whole * 100;
  var thousandsSeparatedWhole = "".concat(whole).split('').reduceRight(function (acc, char, index, array) {
    var maxIndex = array.length;
    var reversedIndex = maxIndex - index;
    var isThirdFromRight = reversedIndex && reversedIndex !== maxIndex && reversedIndex % 3 === 0;
    var group = "".concat(char).concat(acc[0]);
    acc[0] = group;

    if (isThirdFromRight) {
      return [''].concat(_toConsumableArray(acc));
    }

    return acc;
  }, ['']).join('.');
  var twoDigitsDecimal = "".concat(decimal).padStart(2, '0');
  return "R$".concat(sign).concat(thousandsSeparatedWhole, ",").concat(twoDigitsDecimal);
};
var isClient = function isClient() {
  return typeof window !== 'undefined';
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

/*
 * Dexie.js - a minimalistic wrapper for IndexedDB
 * ===============================================
 *
 * By David Fahlander, david.fahlander@gmail.com
 *
 * Version 3.0.3, Wed Nov 18 2020
 *
 * http://dexie.org
 *
 * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
 */
var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
}

var keys = Object.keys;
var isArray = Array.isArray;

var _global = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global;

if (typeof Promise !== 'undefined' && !_global.Promise) {
  _global.Promise = Promise;
}

function extend(obj, extension) {
  if (_typeof(extension) !== 'object') return obj;
  keys(extension).forEach(function (key) {
    obj[key] = extension[key];
  });
  return obj;
}

var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;

function hasOwn(obj, prop) {
  return _hasOwn.call(obj, prop);
}

function props(proto, extension) {
  if (typeof extension === 'function') extension = extension(getProto(proto));
  keys(extension).forEach(function (key) {
    setProp(proto, key, extension[key]);
  });
}

var defineProperty = Object.defineProperty;

function setProp(obj, prop, functionOrGetSet, options) {
  defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === 'function' ? {
    get: functionOrGetSet.get,
    set: functionOrGetSet.set,
    configurable: true
  } : {
    value: functionOrGetSet,
    configurable: true,
    writable: true
  }, options));
}

function derive(Child) {
  return {
    from: function from(Parent) {
      Child.prototype = Object.create(Parent.prototype);
      setProp(Child.prototype, "constructor", Child);
      return {
        extend: props.bind(null, Child.prototype)
      };
    }
  };
}

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

function getPropertyDescriptor(obj, prop) {
  var pd = getOwnPropertyDescriptor(obj, prop);
  var proto;
  return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}

var _slice = [].slice;

function slice(args, start, end) {
  return _slice.call(args, start, end);
}

function override(origFunc, overridedFactory) {
  return overridedFactory(origFunc);
}

function assert(b) {
  if (!b) throw new Error("Assertion Failed");
}

function asap(fn) {
  if (_global.setImmediate) setImmediate(fn);else setTimeout(fn, 0);
}

function arrayToObject(array, extractor) {
  return array.reduce(function (result, item, i) {
    var nameAndValue = extractor(item, i);
    if (nameAndValue) result[nameAndValue[0]] = nameAndValue[1];
    return result;
  }, {});
}

function tryCatch(fn, onerror, args) {
  try {
    fn.apply(null, args);
  } catch (ex) {
    onerror && onerror(ex);
  }
}

function getByKeyPath(obj, keyPath) {
  if (hasOwn(obj, keyPath)) return obj[keyPath];
  if (!keyPath) return obj;

  if (typeof keyPath !== 'string') {
    var rv = [];

    for (var i = 0, l = keyPath.length; i < l; ++i) {
      var val = getByKeyPath(obj, keyPath[i]);
      rv.push(val);
    }

    return rv;
  }

  var period = keyPath.indexOf('.');

  if (period !== -1) {
    var innerObj = obj[keyPath.substr(0, period)];
    return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
  }

  return undefined;
}

function setByKeyPath(obj, keyPath, value) {
  if (!obj || keyPath === undefined) return;
  if ('isFrozen' in Object && Object.isFrozen(obj)) return;

  if (typeof keyPath !== 'string' && 'length' in keyPath) {
    assert(typeof value !== 'string' && 'length' in value);

    for (var i = 0, l = keyPath.length; i < l; ++i) {
      setByKeyPath(obj, keyPath[i], value[i]);
    }
  } else {
    var period = keyPath.indexOf('.');

    if (period !== -1) {
      var currentKeyPath = keyPath.substr(0, period);
      var remainingKeyPath = keyPath.substr(period + 1);
      if (remainingKeyPath === "") {
        if (value === undefined) {
          if (isArray(obj) && !isNaN(parseInt(currentKeyPath))) obj.splice(currentKeyPath, 1);else delete obj[currentKeyPath];
        } else obj[currentKeyPath] = value;
      } else {
        var innerObj = obj[currentKeyPath];
        if (!innerObj) innerObj = obj[currentKeyPath] = {};
        setByKeyPath(innerObj, remainingKeyPath, value);
      }
    } else {
      if (value === undefined) {
        if (isArray(obj) && !isNaN(parseInt(keyPath))) obj.splice(keyPath, 1);else delete obj[keyPath];
      } else obj[keyPath] = value;
    }
  }
}

function delByKeyPath(obj, keyPath) {
  if (typeof keyPath === 'string') setByKeyPath(obj, keyPath, undefined);else if ('length' in keyPath) [].map.call(keyPath, function (kp) {
    setByKeyPath(obj, kp, undefined);
  });
}

function shallowClone(obj) {
  var rv = {};

  for (var m in obj) {
    if (hasOwn(obj, m)) rv[m] = obj[m];
  }

  return rv;
}

var concat = [].concat;

function flatten(a) {
  return concat.apply([], a);
}

var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set".split(',').concat(flatten([8, 16, 32, 64].map(function (num) {
  return ["Int", "Uint", "Float"].map(function (t) {
    return t + num + "Array";
  });
}))).filter(function (t) {
  return _global[t];
});
var intrinsicTypes = intrinsicTypeNames.map(function (t) {
  return _global[t];
});
var intrinsicTypeNameSet = arrayToObject(intrinsicTypeNames, function (x) {
  return [x, true];
});

function deepClone(any) {
  if (!any || _typeof(any) !== 'object') return any;
  var rv;

  if (isArray(any)) {
    rv = [];

    for (var i = 0, l = any.length; i < l; ++i) {
      rv.push(deepClone(any[i]));
    }
  } else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
    rv = any;
  } else {
    rv = any.constructor ? Object.create(any.constructor.prototype) : {};

    for (var prop in any) {
      if (hasOwn(any, prop)) {
        rv[prop] = deepClone(any[prop]);
      }
    }
  }

  return rv;
}

var toString = {}.toString;

function toStringTag(o) {
  return toString.call(o).slice(8, -1);
}

var getValueOf = function getValueOf(val, type) {
  return type === "Array" ? '' + val.map(function (v) {
    return getValueOf(v, toStringTag(v));
  }) : type === "ArrayBuffer" ? '' + new Uint8Array(val) : type === "Date" ? val.getTime() : ArrayBuffer.isView(val) ? '' + new Uint8Array(val.buffer) : val;
};

function getObjectDiff(a, b, rv, prfx) {
  rv = rv || {};
  prfx = prfx || '';
  keys(a).forEach(function (prop) {
    if (!hasOwn(b, prop)) rv[prfx + prop] = undefined;else {
      var ap = a[prop],
          bp = b[prop];

      if (_typeof(ap) === 'object' && _typeof(bp) === 'object' && ap && bp) {
        var apTypeName = toStringTag(ap);
        var bpTypeName = toStringTag(bp);

        if (apTypeName === bpTypeName) {
          if (intrinsicTypeNameSet[apTypeName]) {
            if (getValueOf(ap, apTypeName) !== getValueOf(bp, bpTypeName)) {
              rv[prfx + prop] = b[prop];
            }
          } else {
            getObjectDiff(ap, bp, rv, prfx + prop + ".");
          }
        } else {
          rv[prfx + prop] = b[prop];
        }
      } else if (ap !== bp) rv[prfx + prop] = b[prop];
    }
  });
  keys(b).forEach(function (prop) {
    if (!hasOwn(a, prop)) {
      rv[prfx + prop] = b[prop];
    }
  });
  return rv;
}

var iteratorSymbol = typeof Symbol !== 'undefined' && Symbol.iterator;
var getIteratorOf = iteratorSymbol ? function (x) {
  var i;
  return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () {
  return null;
};
var NO_CHAR_ARRAY = {};

function getArrayOf(arrayLike) {
  var i, a, x, it;

  if (arguments.length === 1) {
    if (isArray(arrayLike)) return arrayLike.slice();
    if (this === NO_CHAR_ARRAY && typeof arrayLike === 'string') return [arrayLike];

    if (it = getIteratorOf(arrayLike)) {
      a = [];

      while (x = it.next(), !x.done) {
        a.push(x.value);
      }

      return a;
    }

    if (arrayLike == null) return [arrayLike];
    i = arrayLike.length;

    if (typeof i === 'number') {
      a = new Array(i);

      while (i--) {
        a[i] = arrayLike[i];
      }

      return a;
    }

    return [arrayLike];
  }

  i = arguments.length;
  a = new Array(i);

  while (i--) {
    a[i] = arguments[i];
  }

  return a;
}

var isAsyncFunction = typeof Symbol !== 'undefined' ? function (fn) {
  return fn[Symbol.toStringTag] === 'AsyncFunction';
} : function () {
  return false;
};
var debug = typeof location !== 'undefined' && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

function setDebug(value, filter) {
  debug = value;
  libraryFilter = filter;
}

var libraryFilter = function libraryFilter() {
  return true;
};

var NEEDS_THROW_FOR_STACK = !new Error("").stack;

function getErrorWithStack() {
  if (NEEDS_THROW_FOR_STACK) try {
    throw new Error();
  } catch (e) {
    return e;
  }
  return new Error();
}

function prettyStack(exception, numIgnoredFrames) {
  var stack = exception.stack;
  if (!stack) return "";
  numIgnoredFrames = numIgnoredFrames || 0;
  if (stack.indexOf(exception.name) === 0) numIgnoredFrames += (exception.name + exception.message).split('\n').length;
  return stack.split('\n').slice(numIgnoredFrames).filter(libraryFilter).map(function (frame) {
    return "\n" + frame;
  }).join('');
}

var dexieErrorNames = ['Modify', 'Bulk', 'OpenFailed', 'VersionChange', 'Schema', 'Upgrade', 'InvalidTable', 'MissingAPI', 'NoSuchDatabase', 'InvalidArgument', 'SubTransaction', 'Unsupported', 'Internal', 'DatabaseClosed', 'PrematureCommit', 'ForeignAwait'];
var idbDomErrorNames = ['Unknown', 'Constraint', 'Data', 'TransactionInactive', 'ReadOnly', 'Version', 'NotFound', 'InvalidState', 'InvalidAccess', 'Abort', 'Timeout', 'QuotaExceeded', 'Syntax', 'DataClone'];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
  VersionChanged: "Database version changed by other database connection",
  DatabaseClosed: "Database has been closed",
  Abort: "Transaction aborted",
  TransactionInactive: "Transaction has already completed or failed"
};

function DexieError(name, msg) {
  this._e = getErrorWithStack();
  this.name = name;
  this.message = msg;
}

derive(DexieError).from(Error).extend({
  stack: {
    get: function get() {
      return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
    }
  },
  toString: function toString() {
    return this.name + ": " + this.message;
  }
});

function getMultiErrorMessage(msg, failures) {
  return msg + ". Errors: " + Object.keys(failures).map(function (key) {
    return failures[key].toString();
  }).filter(function (v, i, s) {
    return s.indexOf(v) === i;
  }).join('\n');
}

function ModifyError(msg, failures, successCount, failedKeys) {
  this._e = getErrorWithStack();
  this.failures = failures;
  this.failedKeys = failedKeys;
  this.successCount = successCount;
  this.message = getMultiErrorMessage(msg, failures);
}

derive(ModifyError).from(DexieError);

function BulkError(msg, failures) {
  this._e = getErrorWithStack();
  this.name = "BulkError";
  this.failures = failures;
  this.message = getMultiErrorMessage(msg, failures);
}

derive(BulkError).from(DexieError);
var errnames = errorList.reduce(function (obj, name) {
  return obj[name] = name + "Error", obj;
}, {});
var BaseException = DexieError;
var exceptions = errorList.reduce(function (obj, name) {
  var fullName = name + "Error";

  function DexieError(msgOrInner, inner) {
    this._e = getErrorWithStack();
    this.name = fullName;

    if (!msgOrInner) {
      this.message = defaultTexts[name] || fullName;
      this.inner = null;
    } else if (typeof msgOrInner === 'string') {
      this.message = "" + msgOrInner + (!inner ? '' : '\n ' + inner);
      this.inner = inner || null;
    } else if (_typeof(msgOrInner) === 'object') {
      this.message = msgOrInner.name + " " + msgOrInner.message;
      this.inner = msgOrInner;
    }
  }

  derive(DexieError).from(BaseException);
  obj[name] = DexieError;
  return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
  obj[name + "Error"] = exceptions[name];
  return obj;
}, {});

function mapError(domError, message) {
  if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name]) return domError;
  var rv = new exceptionMap[domError.name](message || domError.message, domError);

  if ("stack" in domError) {
    setProp(rv, "stack", {
      get: function get() {
        return this.inner.stack;
      }
    });
  }

  return rv;
}

var fullNameExceptions = errorList.reduce(function (obj, name) {
  if (["Syntax", "Type", "Range"].indexOf(name) === -1) obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;

function nop() {}

function mirror(val) {
  return val;
}

function pureFunctionChain(f1, f2) {
  if (f1 == null || f1 === mirror) return f2;
  return function (val) {
    return f2(f1(val));
  };
}

function callBoth(on1, on2) {
  return function () {
    on1.apply(this, arguments);
    on2.apply(this, arguments);
  };
}

function hookCreatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res !== undefined) arguments[0] = res;
    var onsuccess = this.onsuccess,
        onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res2 !== undefined ? res2 : res;
  };
}

function hookDeletingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    f1.apply(this, arguments);
    var onsuccess = this.onsuccess,
        onerror = this.onerror;
    this.onsuccess = this.onerror = null;
    f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
  };
}

function hookUpdatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function (modifications) {
    var res = f1.apply(this, arguments);
    extend(modifications, res);
    var onsuccess = this.onsuccess,
        onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res === undefined ? res2 === undefined ? undefined : res2 : extend(res, res2);
  };
}

function reverseStoppableEventChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    if (f2.apply(this, arguments) === false) return false;
    return f1.apply(this, arguments);
  };
}

function promisableChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);

    if (res && typeof res.then === 'function') {
      var thiz = this,
          i = arguments.length,
          args = new Array(i);

      while (i--) {
        args[i] = arguments[i];
      }

      return res.then(function () {
        return f2.apply(thiz, args);
      });
    }

    return f2.apply(this, arguments);
  };
}

var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100;
var MAX_LONG_STACKS = 20;
var ZONE_ECHO_LIMIT = 100;

var _a = typeof Promise === 'undefined' ? [] : function () {
  var globalP = Promise.resolve();
  if (typeof crypto === 'undefined' || !crypto.subtle) return [globalP, globalP.__proto__, globalP];
  var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
  return [nativeP, nativeP.__proto__, globalP];
}();

var resolvedNativePromise = _a[0];
var nativePromiseProto = _a[1];
var resolvedGlobalPromise = _a[2];
var nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ? function () {
  resolvedGlobalPromise.then(physicalTick);
} : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? function () {
  var hiddenDiv = document.createElement("div");
  new MutationObserver(function () {
    physicalTick();
    hiddenDiv = null;
  }).observe(hiddenDiv, {
    attributes: true
  });
  hiddenDiv.setAttribute('i', '1');
} : function () {
  setTimeout(physicalTick, 0);
};

var asap$1 = function asap$1(callback, args) {
  microtickQueue.push([callback, args]);

  if (needsNewPhysicalTick) {
    schedulePhysicalTick();
    needsNewPhysicalTick = false;
  }
};

var isOutsideMicroTick = true;
var needsNewPhysicalTick = true;
var unhandledErrors = [];
var rejectingErrors = [];
var currentFulfiller = null;
var rejectionMapper = mirror;
var globalPSD = {
  id: 'global',
  global: true,
  ref: 0,
  unhandleds: [],
  onunhandled: globalError,
  pgp: false,
  env: {},
  finalize: function finalize() {
    this.unhandleds.forEach(function (uh) {
      try {
        globalError(uh[0], uh[1]);
      } catch (e) {}
    });
  }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];

function DexiePromise(fn) {
  if (_typeof(this) !== 'object') throw new TypeError('Promises must be constructed via new');
  this._listeners = [];
  this.onuncatched = nop;
  this._lib = false;
  var psd = this._PSD = PSD;

  if (debug) {
    this._stackHolder = getErrorWithStack();
    this._prev = null;
    this._numPrev = 0;
  }

  if (typeof fn !== 'function') {
    if (fn !== INTERNAL) throw new TypeError('Not a function');
    this._state = arguments[1];
    this._value = arguments[2];
    if (this._state === false) handleRejection(this, this._value);
    return;
  }

  this._state = null;
  this._value = null;
  ++psd.ref;
  executePromiseTask(this, fn);
}

var thenProp = {
  get: function get() {
    var psd = PSD,
        microTaskId = totalEchoes;

    function then(onFulfilled, onRejected) {
      var _this = this;

      var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
      var cleanup = possibleAwait && !decrementExpectedAwaits();
      var rv = new DexiePromise(function (resolve, reject) {
        propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
      });
      debug && linkToPreviousPromise(rv, this);
      return rv;
    }

    then.prototype = INTERNAL;
    return then;
  },
  set: function set(value) {
    setProp(this, 'then', value && value.prototype === INTERNAL ? thenProp : {
      get: function get() {
        return value;
      },
      set: thenProp.set
    });
  }
};
props(DexiePromise.prototype, {
  then: thenProp,
  _then: function _then(onFulfilled, onRejected) {
    propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
  },
  catch: function _catch(onRejected) {
    if (arguments.length === 1) return this.then(null, onRejected);
    var type = arguments[0],
        handler = arguments[1];
    return typeof type === 'function' ? this.then(null, function (err) {
      return err instanceof type ? handler(err) : PromiseReject(err);
    }) : this.then(null, function (err) {
      return err && err.name === type ? handler(err) : PromiseReject(err);
    });
  },
  finally: function _finally(onFinally) {
    return this.then(function (value) {
      onFinally();
      return value;
    }, function (err) {
      onFinally();
      return PromiseReject(err);
    });
  },
  stack: {
    get: function get() {
      if (this._stack) return this._stack;

      try {
        stack_being_generated = true;
        var stacks = getStack(this, [], MAX_LONG_STACKS);
        var stack = stacks.join("\nFrom previous: ");
        if (this._state !== null) this._stack = stack;
        return stack;
      } finally {
        stack_being_generated = false;
      }
    }
  },
  timeout: function timeout(ms, msg) {
    var _this = this;

    return ms < Infinity ? new DexiePromise(function (resolve, reject) {
      var handle = setTimeout(function () {
        return reject(new exceptions.Timeout(msg));
      }, ms);

      _this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
    }) : this;
  }
});
if (typeof Symbol !== 'undefined' && Symbol.toStringTag) setProp(DexiePromise.prototype, Symbol.toStringTag, 'Dexie.Promise');
globalPSD.env = snapShot();

function Listener(onFulfilled, onRejected, resolve, reject, zone) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.resolve = resolve;
  this.reject = reject;
  this.psd = zone;
}

props(DexiePromise, {
  all: function all() {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function (resolve, reject) {
      if (values.length === 0) resolve([]);
      var remaining = values.length;
      values.forEach(function (a, i) {
        return DexiePromise.resolve(a).then(function (x) {
          values[i] = x;
          if (! --remaining) resolve(values);
        }, reject);
      });
    });
  },
  resolve: function resolve(value) {
    if (value instanceof DexiePromise) return value;
    if (value && typeof value.then === 'function') return new DexiePromise(function (resolve, reject) {
      value.then(resolve, reject);
    });
    var rv = new DexiePromise(INTERNAL, true, value);
    linkToPreviousPromise(rv, currentFulfiller);
    return rv;
  },
  reject: PromiseReject,
  race: function race() {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function (resolve, reject) {
      values.map(function (value) {
        return DexiePromise.resolve(value).then(resolve, reject);
      });
    });
  },
  PSD: {
    get: function get() {
      return PSD;
    },
    set: function set(value) {
      return PSD = value;
    }
  },
  totalEchoes: {
    get: function get() {
      return totalEchoes;
    }
  },
  newPSD: newScope,
  usePSD: usePSD,
  scheduler: {
    get: function get() {
      return asap$1;
    },
    set: function set(value) {
      asap$1 = value;
    }
  },
  rejectionMapper: {
    get: function get() {
      return rejectionMapper;
    },
    set: function set(value) {
      rejectionMapper = value;
    }
  },
  follow: function follow(fn, zoneProps) {
    return new DexiePromise(function (resolve, reject) {
      return newScope(function (resolve, reject) {
        var psd = PSD;
        psd.unhandleds = [];
        psd.onunhandled = reject;
        psd.finalize = callBoth(function () {
          var _this = this;

          run_at_end_of_this_or_next_physical_tick(function () {
            _this.unhandleds.length === 0 ? resolve() : reject(_this.unhandleds[0]);
          });
        }, psd.finalize);
        fn();
      }, zoneProps, resolve, reject);
    });
  }
});

if (NativePromise) {
  if (NativePromise.allSettled) setProp(DexiePromise, "allSettled", function () {
    var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function (resolve) {
      if (possiblePromises.length === 0) resolve([]);
      var remaining = possiblePromises.length;
      var results = new Array(remaining);
      possiblePromises.forEach(function (p, i) {
        return DexiePromise.resolve(p).then(function (value) {
          return results[i] = {
            status: "fulfilled",
            value: value
          };
        }, function (reason) {
          return results[i] = {
            status: "rejected",
            reason: reason
          };
        }).then(function () {
          return --remaining || resolve(results);
        });
      });
    });
  });
  if (NativePromise.any && typeof AggregateError !== 'undefined') setProp(DexiePromise, "any", function () {
    var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function (resolve, reject) {
      if (possiblePromises.length === 0) reject(new AggregateError([]));
      var remaining = possiblePromises.length;
      var failures = new Array(remaining);
      possiblePromises.forEach(function (p, i) {
        return DexiePromise.resolve(p).then(function (value) {
          return resolve(value);
        }, function (failure) {
          failures[i] = failure;
          if (! --remaining) reject(new AggregateError(failures));
        });
      });
    });
  });
}

function executePromiseTask(promise, fn) {
  try {
    fn(function (value) {
      if (promise._state !== null) return;
      if (value === promise) throw new TypeError('A promise cannot be resolved with itself.');
      var shouldExecuteTick = promise._lib && beginMicroTickScope();

      if (value && typeof value.then === 'function') {
        executePromiseTask(promise, function (resolve, reject) {
          value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
        });
      } else {
        promise._state = true;
        promise._value = value;
        propagateAllListeners(promise);
      }

      if (shouldExecuteTick) endMicroTickScope();
    }, handleRejection.bind(null, promise));
  } catch (ex) {
    handleRejection(promise, ex);
  }
}

function handleRejection(promise, reason) {
  rejectingErrors.push(reason);
  if (promise._state !== null) return;
  var shouldExecuteTick = promise._lib && beginMicroTickScope();
  reason = rejectionMapper(reason);
  promise._state = false;
  promise._value = reason;
  debug && reason !== null && _typeof(reason) === 'object' && !reason._promise && tryCatch(function () {
    var origProp = getPropertyDescriptor(reason, "stack");
    reason._promise = promise;
    setProp(reason, "stack", {
      get: function get() {
        return stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack;
      }
    });
  });
  addPossiblyUnhandledError(promise);
  propagateAllListeners(promise);
  if (shouldExecuteTick) endMicroTickScope();
}

function propagateAllListeners(promise) {
  var listeners = promise._listeners;
  promise._listeners = [];

  for (var i = 0, len = listeners.length; i < len; ++i) {
    propagateToListener(promise, listeners[i]);
  }

  var psd = promise._PSD;
  --psd.ref || psd.finalize();

  if (numScheduledCalls === 0) {
    ++numScheduledCalls;
    asap$1(function () {
      if (--numScheduledCalls === 0) finalizePhysicalTick();
    }, []);
  }
}

function propagateToListener(promise, listener) {
  if (promise._state === null) {
    promise._listeners.push(listener);

    return;
  }

  var cb = promise._state ? listener.onFulfilled : listener.onRejected;

  if (cb === null) {
    return (promise._state ? listener.resolve : listener.reject)(promise._value);
  }

  ++listener.psd.ref;
  ++numScheduledCalls;
  asap$1(callListener, [cb, promise, listener]);
}

function callListener(cb, promise, listener) {
  try {
    currentFulfiller = promise;
    var ret,
        value = promise._value;

    if (promise._state) {
      ret = cb(value);
    } else {
      if (rejectingErrors.length) rejectingErrors = [];
      ret = cb(value);
      if (rejectingErrors.indexOf(value) === -1) markErrorAsHandled(promise);
    }

    listener.resolve(ret);
  } catch (e) {
    listener.reject(e);
  } finally {
    currentFulfiller = null;
    if (--numScheduledCalls === 0) finalizePhysicalTick();
    --listener.psd.ref || listener.psd.finalize();
  }
}

function getStack(promise, stacks, limit) {
  if (stacks.length === limit) return stacks;
  var stack = "";

  if (promise._state === false) {
    var failure = promise._value,
        errorName,
        message;

    if (failure != null) {
      errorName = failure.name || "Error";
      message = failure.message || failure;
      stack = prettyStack(failure, 0);
    } else {
      errorName = failure;
      message = "";
    }

    stacks.push(errorName + (message ? ": " + message : "") + stack);
  }

  if (debug) {
    stack = prettyStack(promise._stackHolder, 2);
    if (stack && stacks.indexOf(stack) === -1) stacks.push(stack);
    if (promise._prev) getStack(promise._prev, stacks, limit);
  }

  return stacks;
}

function linkToPreviousPromise(promise, prev) {
  var numPrev = prev ? prev._numPrev + 1 : 0;

  if (numPrev < LONG_STACKS_CLIP_LIMIT) {
    promise._prev = prev;
    promise._numPrev = numPrev;
  }
}

function physicalTick() {
  beginMicroTickScope() && endMicroTickScope();
}

function beginMicroTickScope() {
  var wasRootExec = isOutsideMicroTick;
  isOutsideMicroTick = false;
  needsNewPhysicalTick = false;
  return wasRootExec;
}

function endMicroTickScope() {
  var callbacks, i, l;

  do {
    while (microtickQueue.length > 0) {
      callbacks = microtickQueue;
      microtickQueue = [];
      l = callbacks.length;

      for (i = 0; i < l; ++i) {
        var item = callbacks[i];
        item[0].apply(null, item[1]);
      }
    }
  } while (microtickQueue.length > 0);

  isOutsideMicroTick = true;
  needsNewPhysicalTick = true;
}

function finalizePhysicalTick() {
  var unhandledErrs = unhandledErrors;
  unhandledErrors = [];
  unhandledErrs.forEach(function (p) {
    p._PSD.onunhandled.call(null, p._value, p);
  });
  var finalizers = tickFinalizers.slice(0);
  var i = finalizers.length;

  while (i) {
    finalizers[--i]();
  }
}

function run_at_end_of_this_or_next_physical_tick(fn) {
  function finalizer() {
    fn();
    tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
  }

  tickFinalizers.push(finalizer);
  ++numScheduledCalls;
  asap$1(function () {
    if (--numScheduledCalls === 0) finalizePhysicalTick();
  }, []);
}

function addPossiblyUnhandledError(promise) {
  if (!unhandledErrors.some(function (p) {
    return p._value === promise._value;
  })) unhandledErrors.push(promise);
}

function markErrorAsHandled(promise) {
  var i = unhandledErrors.length;

  while (i) {
    if (unhandledErrors[--i]._value === promise._value) {
      unhandledErrors.splice(i, 1);
      return;
    }
  }
}

function PromiseReject(reason) {
  return new DexiePromise(INTERNAL, false, reason);
}

function wrap(fn, errorCatcher) {
  var psd = PSD;
  return function () {
    var wasRootExec = beginMicroTickScope(),
        outerScope = PSD;

    try {
      switchToZone(psd, true);
      return fn.apply(this, arguments);
    } catch (e) {
      errorCatcher && errorCatcher(e);
    } finally {
      switchToZone(outerScope, false);
      if (wasRootExec) endMicroTickScope();
    }
  };
}

var task = {
  awaits: 0,
  echoes: 0,
  id: 0
};
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;

function newScope(fn, props$$1, a1, a2) {
  var parent = PSD,
      psd = Object.create(parent);
  psd.parent = parent;
  psd.ref = 0;
  psd.global = false;
  psd.id = ++zone_id_counter;
  var globalEnv = globalPSD.env;
  psd.env = patchGlobalPromise ? {
    Promise: DexiePromise,
    PromiseProp: {
      value: DexiePromise,
      configurable: true,
      writable: true
    },
    all: DexiePromise.all,
    race: DexiePromise.race,
    allSettled: DexiePromise.allSettled,
    any: DexiePromise.any,
    resolve: DexiePromise.resolve,
    reject: DexiePromise.reject,
    nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
    gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
  } : {};
  if (props$$1) extend(psd, props$$1);
  ++parent.ref;

  psd.finalize = function () {
    --this.parent.ref || this.parent.finalize();
  };

  var rv = usePSD(psd, fn, a1, a2);
  if (psd.ref === 0) psd.finalize();
  return rv;
}

function incrementExpectedAwaits() {
  if (!task.id) task.id = ++taskCounter;
  ++task.awaits;
  task.echoes += ZONE_ECHO_LIMIT;
  return task.id;
}

function decrementExpectedAwaits() {
  if (!task.awaits) return false;
  if (--task.awaits === 0) task.id = 0;
  task.echoes = task.awaits * ZONE_ECHO_LIMIT;
  return true;
}

if (('' + nativePromiseThen).indexOf('[native code]') === -1) {
  incrementExpectedAwaits = decrementExpectedAwaits = nop;
}

function onPossibleParallellAsync(possiblePromise) {
  if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
    incrementExpectedAwaits();
    return possiblePromise.then(function (x) {
      decrementExpectedAwaits();
      return x;
    }, function (e) {
      decrementExpectedAwaits();
      return rejection(e);
    });
  }

  return possiblePromise;
}

function zoneEnterEcho(targetZone) {
  ++totalEchoes;

  if (!task.echoes || --task.echoes === 0) {
    task.echoes = task.id = 0;
  }

  zoneStack.push(PSD);
  switchToZone(targetZone, true);
}

function zoneLeaveEcho() {
  var zone = zoneStack[zoneStack.length - 1];
  zoneStack.pop();
  switchToZone(zone, false);
}

function switchToZone(targetZone, bEnteringZone) {
  var currentZone = PSD;

  if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (! --zoneEchoes || targetZone !== PSD)) {
    enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
  }

  if (targetZone === PSD) return;
  PSD = targetZone;
  if (currentZone === globalPSD) globalPSD.env = snapShot();

  if (patchGlobalPromise) {
    var GlobalPromise_1 = globalPSD.env.Promise;
    var targetEnv = targetZone.env;
    nativePromiseProto.then = targetEnv.nthen;
    GlobalPromise_1.prototype.then = targetEnv.gthen;

    if (currentZone.global || targetZone.global) {
      Object.defineProperty(_global, 'Promise', targetEnv.PromiseProp);
      GlobalPromise_1.all = targetEnv.all;
      GlobalPromise_1.race = targetEnv.race;
      GlobalPromise_1.resolve = targetEnv.resolve;
      GlobalPromise_1.reject = targetEnv.reject;
      if (targetEnv.allSettled) GlobalPromise_1.allSettled = targetEnv.allSettled;
      if (targetEnv.any) GlobalPromise_1.any = targetEnv.any;
    }
  }
}

function snapShot() {
  var GlobalPromise = _global.Promise;
  return patchGlobalPromise ? {
    Promise: GlobalPromise,
    PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
    all: GlobalPromise.all,
    race: GlobalPromise.race,
    allSettled: GlobalPromise.allSettled,
    any: GlobalPromise.any,
    resolve: GlobalPromise.resolve,
    reject: GlobalPromise.reject,
    nthen: nativePromiseProto.then,
    gthen: GlobalPromise.prototype.then
  } : {};
}

function usePSD(psd, fn, a1, a2, a3) {
  var outerScope = PSD;

  try {
    switchToZone(psd, true);
    return fn(a1, a2, a3);
  } finally {
    switchToZone(outerScope, false);
  }
}

function enqueueNativeMicroTask(job) {
  nativePromiseThen.call(resolvedNativePromise, job);
}

function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
  return typeof fn !== 'function' ? fn : function () {
    var outerZone = PSD;
    if (possibleAwait) incrementExpectedAwaits();
    switchToZone(zone, true);

    try {
      return fn.apply(this, arguments);
    } finally {
      switchToZone(outerZone, false);
      if (cleanup) enqueueNativeMicroTask(decrementExpectedAwaits);
    }
  };
}

function getPatchedPromiseThen(origThen, zone) {
  return function (onResolved, onRejected) {
    return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
  };
}

var UNHANDLEDREJECTION = "unhandledrejection";

function globalError(err, promise) {
  var rv;

  try {
    rv = promise.onuncatched(err);
  } catch (e) {}

  if (rv !== false) try {
    var event,
        eventData = {
      promise: promise,
      reason: err
    };

    if (_global.document && document.createEvent) {
      event = document.createEvent('Event');
      event.initEvent(UNHANDLEDREJECTION, true, true);
      extend(event, eventData);
    } else if (_global.CustomEvent) {
      event = new CustomEvent(UNHANDLEDREJECTION, {
        detail: eventData
      });
      extend(event, eventData);
    }

    if (event && _global.dispatchEvent) {
      dispatchEvent(event);
      if (!_global.PromiseRejectionEvent && _global.onunhandledrejection) try {
        _global.onunhandledrejection(event);
      } catch (_) {}
    }

    if (debug && event && !event.defaultPrevented) {
      console.warn("Unhandled rejection: " + (err.stack || err));
    }
  } catch (e) {}
}

var rejection = DexiePromise.reject;

function tempTransaction(db, mode, storeNames, fn) {
  if (!db._state.openComplete && !PSD.letThrough) {
    if (!db._state.isBeingOpened) {
      if (!db._options.autoOpen) return rejection(new exceptions.DatabaseClosed());
      db.open().catch(nop);
    }

    return db._state.dbReadyPromise.then(function () {
      return tempTransaction(db, mode, storeNames, fn);
    });
  } else {
    var trans = db._createTransaction(mode, storeNames, db._dbSchema);

    try {
      trans.create();
    } catch (ex) {
      return rejection(ex);
    }

    return trans._promise(mode, function (resolve, reject) {
      return newScope(function () {
        PSD.trans = trans;
        return fn(resolve, reject, trans);
      });
    }).then(function (result) {
      return trans._completion.then(function () {
        return result;
      });
    });
  }
}

var DEXIE_VERSION = '3.0.3';
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== 'undefined' && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;

var dexieStackFrameFilter = function dexieStackFrameFilter(frame) {
  return !/(dexie\.js|dexie\.min\.js)/.test(frame);
};

var DBNAMES_DB = '__dbnames';
var READONLY = 'readonly';
var READWRITE = 'readwrite';

function combine(filter1, filter2) {
  return filter1 ? filter2 ? function () {
    return filter1.apply(this, arguments) && filter2.apply(this, arguments);
  } : filter1 : filter2;
}

var AnyRange = {
  type: 3,
  lower: -Infinity,
  lowerOpen: false,
  upper: [[]],
  upperOpen: false
};

function workaroundForUndefinedPrimKey(keyPath) {
  return function (obj) {
    if (getByKeyPath(obj, keyPath) === undefined) {
      obj = deepClone(obj);
      delByKeyPath(obj, keyPath);
    }

    return obj;
  };
}

var Table = function () {
  function Table() {}

  Table.prototype._trans = function (mode, fn, writeLocked) {
    var trans = this._tx || PSD.trans;
    var tableName = this.name;

    function checkTableInTransaction(resolve, reject, trans) {
      if (!trans.schema[tableName]) throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
      return fn(trans.idbtrans, trans);
    }

    var wasRootExec = beginMicroTickScope();

    try {
      return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function () {
        return trans._promise(mode, checkTableInTransaction, writeLocked);
      }, {
        trans: trans,
        transless: PSD.transless || PSD
      }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
    } finally {
      if (wasRootExec) endMicroTickScope();
    }
  };

  Table.prototype.get = function (keyOrCrit, cb) {
    var _this = this;

    if (keyOrCrit && keyOrCrit.constructor === Object) return this.where(keyOrCrit).first(cb);
    return this._trans('readonly', function (trans) {
      return _this.core.get({
        trans: trans,
        key: keyOrCrit
      }).then(function (res) {
        return _this.hook.reading.fire(res);
      });
    }).then(cb);
  };

  Table.prototype.where = function (indexOrCrit) {
    if (typeof indexOrCrit === 'string') return new this.db.WhereClause(this, indexOrCrit);
    if (isArray(indexOrCrit)) return new this.db.WhereClause(this, "[" + indexOrCrit.join('+') + "]");
    var keyPaths = keys(indexOrCrit);
    if (keyPaths.length === 1) return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
    var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function (ix) {
      return ix.compound && keyPaths.every(function (keyPath) {
        return ix.keyPath.indexOf(keyPath) >= 0;
      }) && ix.keyPath.every(function (keyPath) {
        return keyPaths.indexOf(keyPath) >= 0;
      });
    })[0];
    if (compoundIndex && this.db._maxKey !== maxString) return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map(function (kp) {
      return indexOrCrit[kp];
    }));
    if (!compoundIndex && debug) console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " + ("compound index [" + keyPaths.join('+') + "]"));
    var idxByName = this.schema.idxByName;
    var idb = this.db._deps.indexedDB;

    function equals(a, b) {
      try {
        return idb.cmp(a, b) === 0;
      } catch (e) {
        return false;
      }
    }

    var _a = keyPaths.reduce(function (_a, keyPath) {
      var prevIndex = _a[0],
          prevFilterFn = _a[1];
      var index = idxByName[keyPath];
      var value = indexOrCrit[keyPath];
      return [prevIndex || index, prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function (x) {
        var prop = getByKeyPath(x, keyPath);
        return isArray(prop) && prop.some(function (item) {
          return equals(value, item);
        });
      } : function (x) {
        return equals(value, getByKeyPath(x, keyPath));
      }) : prevFilterFn];
    }, [null, null]),
        idx = _a[0],
        filterFunction = _a[1];

    return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals('');
  };

  Table.prototype.filter = function (filterFunction) {
    return this.toCollection().and(filterFunction);
  };

  Table.prototype.count = function (thenShortcut) {
    return this.toCollection().count(thenShortcut);
  };

  Table.prototype.offset = function (offset) {
    return this.toCollection().offset(offset);
  };

  Table.prototype.limit = function (numRows) {
    return this.toCollection().limit(numRows);
  };

  Table.prototype.each = function (callback) {
    return this.toCollection().each(callback);
  };

  Table.prototype.toArray = function (thenShortcut) {
    return this.toCollection().toArray(thenShortcut);
  };

  Table.prototype.toCollection = function () {
    return new this.db.Collection(new this.db.WhereClause(this));
  };

  Table.prototype.orderBy = function (index) {
    return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? "[" + index.join('+') + "]" : index));
  };

  Table.prototype.reverse = function () {
    return this.toCollection().reverse();
  };

  Table.prototype.mapToClass = function (constructor) {
    this.schema.mappedClass = constructor;

    var readHook = function readHook(obj) {
      if (!obj) return obj;
      var res = Object.create(constructor.prototype);

      for (var m in obj) {
        if (hasOwn(obj, m)) try {
          res[m] = obj[m];
        } catch (_) {}
      }

      return res;
    };

    if (this.schema.readHook) {
      this.hook.reading.unsubscribe(this.schema.readHook);
    }

    this.schema.readHook = readHook;
    this.hook("reading", readHook);
    return constructor;
  };

  Table.prototype.defineClass = function () {
    function Class(content) {
      extend(this, content);
    }

    return this.mapToClass(Class);
  };

  Table.prototype.add = function (obj, key) {
    var _this = this;

    var _a = this.schema.primKey,
        auto = _a.auto,
        keyPath = _a.keyPath;
    var objToAdd = obj;

    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }

    return this._trans('readwrite', function (trans) {
      return _this.core.mutate({
        trans: trans,
        type: 'add',
        keys: key != null ? [key] : null,
        values: [objToAdd]
      });
    }).then(function (res) {
      return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
    }).then(function (lastResult) {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {}
      }

      return lastResult;
    });
  };

  Table.prototype.update = function (keyOrObject, modifications) {
    if (_typeof(modifications) !== 'object' || isArray(modifications)) throw new exceptions.InvalidArgument("Modifications must be an object.");

    if (_typeof(keyOrObject) === 'object' && !isArray(keyOrObject)) {
      keys(modifications).forEach(function (keyPath) {
        setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
      });
      var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
      if (key === undefined) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
      return this.where(":id").equals(key).modify(modifications);
    } else {
      return this.where(":id").equals(keyOrObject).modify(modifications);
    }
  };

  Table.prototype.put = function (obj, key) {
    var _this = this;

    var _a = this.schema.primKey,
        auto = _a.auto,
        keyPath = _a.keyPath;
    var objToAdd = obj;

    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }

    return this._trans('readwrite', function (trans) {
      return _this.core.mutate({
        trans: trans,
        type: 'put',
        values: [objToAdd],
        keys: key != null ? [key] : null
      });
    }).then(function (res) {
      return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
    }).then(function (lastResult) {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {}
      }

      return lastResult;
    });
  };

  Table.prototype.delete = function (key) {
    var _this = this;

    return this._trans('readwrite', function (trans) {
      return _this.core.mutate({
        trans: trans,
        type: 'delete',
        keys: [key]
      });
    }).then(function (res) {
      return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined;
    });
  };

  Table.prototype.clear = function () {
    var _this = this;

    return this._trans('readwrite', function (trans) {
      return _this.core.mutate({
        trans: trans,
        type: 'deleteRange',
        range: AnyRange
      });
    }).then(function (res) {
      return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined;
    });
  };

  Table.prototype.bulkGet = function (keys$$1) {
    var _this = this;

    return this._trans('readonly', function (trans) {
      return _this.core.getMany({
        keys: keys$$1,
        trans: trans
      }).then(function (result) {
        return result.map(function (res) {
          return _this.hook.reading.fire(res);
        });
      });
    });
  };

  Table.prototype.bulkAdd = function (objects, keysOrOptions, options) {
    var _this = this;

    var keys$$1 = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
    options = options || (keys$$1 ? undefined : keysOrOptions);
    var wantResults = options ? options.allKeys : undefined;
    return this._trans('readwrite', function (trans) {
      var _a = _this.schema.primKey,
          auto = _a.auto,
          keyPath = _a.keyPath;
      if (keyPath && keys$$1) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
      if (keys$$1 && keys$$1.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      var numObjects = objects.length;
      var objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return _this.core.mutate({
        trans: trans,
        type: 'add',
        keys: keys$$1,
        values: objectsToAdd,
        wantResults: wantResults
      }).then(function (_a) {
        var numFailures = _a.numFailures,
            results = _a.results,
            lastResult = _a.lastResult,
            failures = _a.failures;
        var result = wantResults ? results : lastResult;
        if (numFailures === 0) return result;
        throw new BulkError(_this.name + ".bulkAdd(): " + numFailures + " of " + numObjects + " operations failed", Object.keys(failures).map(function (pos) {
          return failures[pos];
        }));
      });
    });
  };

  Table.prototype.bulkPut = function (objects, keysOrOptions, options) {
    var _this = this;

    var keys$$1 = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
    options = options || (keys$$1 ? undefined : keysOrOptions);
    var wantResults = options ? options.allKeys : undefined;
    return this._trans('readwrite', function (trans) {
      var _a = _this.schema.primKey,
          auto = _a.auto,
          keyPath = _a.keyPath;
      if (keyPath && keys$$1) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
      if (keys$$1 && keys$$1.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      var numObjects = objects.length;
      var objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return _this.core.mutate({
        trans: trans,
        type: 'put',
        keys: keys$$1,
        values: objectsToPut,
        wantResults: wantResults
      }).then(function (_a) {
        var numFailures = _a.numFailures,
            results = _a.results,
            lastResult = _a.lastResult,
            failures = _a.failures;
        var result = wantResults ? results : lastResult;
        if (numFailures === 0) return result;
        throw new BulkError(_this.name + ".bulkPut(): " + numFailures + " of " + numObjects + " operations failed", Object.keys(failures).map(function (pos) {
          return failures[pos];
        }));
      });
    });
  };

  Table.prototype.bulkDelete = function (keys$$1) {
    var _this = this;

    var numKeys = keys$$1.length;
    return this._trans('readwrite', function (trans) {
      return _this.core.mutate({
        trans: trans,
        type: 'delete',
        keys: keys$$1
      });
    }).then(function (_a) {
      var numFailures = _a.numFailures,
          lastResult = _a.lastResult,
          failures = _a.failures;
      if (numFailures === 0) return lastResult;
      throw new BulkError(_this.name + ".bulkDelete(): " + numFailures + " of " + numKeys + " operations failed", failures);
    });
  };

  return Table;
}();

function Events(ctx) {
  var evs = {};

  var rv = function rv(eventName, subscriber) {
    if (subscriber) {
      var i = arguments.length,
          args = new Array(i - 1);

      while (--i) {
        args[i - 1] = arguments[i];
      }

      evs[eventName].subscribe.apply(null, args);
      return ctx;
    } else if (typeof eventName === 'string') {
      return evs[eventName];
    }
  };

  rv.addEventType = add;

  for (var i = 1, l = arguments.length; i < l; ++i) {
    add(arguments[i]);
  }

  return rv;

  function add(eventName, chainFunction, defaultFunction) {
    if (_typeof(eventName) === 'object') return addConfiguredEvents(eventName);
    if (!chainFunction) chainFunction = reverseStoppableEventChain;
    if (!defaultFunction) defaultFunction = nop;
    var context = {
      subscribers: [],
      fire: defaultFunction,
      subscribe: function subscribe(cb) {
        if (context.subscribers.indexOf(cb) === -1) {
          context.subscribers.push(cb);
          context.fire = chainFunction(context.fire, cb);
        }
      },
      unsubscribe: function unsubscribe(cb) {
        context.subscribers = context.subscribers.filter(function (fn) {
          return fn !== cb;
        });
        context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
      }
    };
    evs[eventName] = rv[eventName] = context;
    return context;
  }

  function addConfiguredEvents(cfg) {
    keys(cfg).forEach(function (eventName) {
      var args = cfg[eventName];

      if (isArray(args)) {
        add(eventName, cfg[eventName][0], cfg[eventName][1]);
      } else if (args === 'asap') {
        var context = add(eventName, mirror, function fire() {
          var i = arguments.length,
              args = new Array(i);

          while (i--) {
            args[i] = arguments[i];
          }

          context.subscribers.forEach(function (fn) {
            asap(function fireEvent() {
              fn.apply(null, args);
            });
          });
        });
      } else throw new exceptions.InvalidArgument("Invalid event config");
    });
  }
}

function makeClassConstructor(prototype, constructor) {
  derive(constructor).from({
    prototype: prototype
  });
  return constructor;
}

function createTableConstructor(db) {
  return makeClassConstructor(Table.prototype, function Table$$1(name, tableSchema, trans) {
    this.db = db;
    this._tx = trans;
    this.name = name;
    this.schema = tableSchema;
    this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
      "creating": [hookCreatingChain, nop],
      "reading": [pureFunctionChain, mirror],
      "updating": [hookUpdatingChain, nop],
      "deleting": [hookDeletingChain, nop]
    });
  });
}

function isPlainKeyRange(ctx, ignoreLimitFilter) {
  return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}

function addFilter(ctx, fn) {
  ctx.filter = combine(ctx.filter, fn);
}

function addReplayFilter(ctx, factory, isLimitFilter) {
  var curr = ctx.replayFilter;
  ctx.replayFilter = curr ? function () {
    return combine(curr(), factory());
  } : factory;
  ctx.justLimit = isLimitFilter && !curr;
}

function addMatchFilter(ctx, fn) {
  ctx.isMatch = combine(ctx.isMatch, fn);
}

function getIndexOrStore(ctx, coreSchema) {
  if (ctx.isPrimKey) return coreSchema.primaryKey;
  var index = coreSchema.getIndexByKeyPath(ctx.index);
  if (!index) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
  return index;
}

function openCursor(ctx, coreTable, trans) {
  var index = getIndexOrStore(ctx, coreTable.schema);
  return coreTable.openCursor({
    trans: trans,
    values: !ctx.keysOnly,
    reverse: ctx.dir === 'prev',
    unique: !!ctx.unique,
    query: {
      index: index,
      range: ctx.range
    }
  });
}

function iter(ctx, fn, coreTrans, coreTable) {
  var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;

  if (!ctx.or) {
    return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
  } else {
    var set_1 = {};

    var union = function union(item, cursor, advance) {
      if (!filter || filter(cursor, advance, function (result) {
        return cursor.stop(result);
      }, function (err) {
        return cursor.fail(err);
      })) {
        var primaryKey = cursor.primaryKey;
        var key = '' + primaryKey;
        if (key === '[object ArrayBuffer]') key = '' + new Uint8Array(primaryKey);

        if (!hasOwn(set_1, key)) {
          set_1[key] = true;
          fn(item, cursor, advance);
        }
      }
    };

    return Promise.all([ctx.or._iterate(union, coreTrans), iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)]);
  }
}

function iterate(cursorPromise, filter, fn, valueMapper) {
  var mappedFn = valueMapper ? function (x, c, a) {
    return fn(valueMapper(x), c, a);
  } : fn;
  var wrappedFn = wrap(mappedFn);
  return cursorPromise.then(function (cursor) {
    if (cursor) {
      return cursor.start(function () {
        var c = function c() {
          return cursor.continue();
        };

        if (!filter || filter(cursor, function (advancer) {
          return c = advancer;
        }, function (val) {
          cursor.stop(val);
          c = nop;
        }, function (e) {
          cursor.fail(e);
          c = nop;
        })) wrappedFn(cursor.value, cursor, function (advancer) {
          return c = advancer;
        });
        c();
      });
    }
  });
}

var Collection = function () {
  function Collection() {}

  Collection.prototype._read = function (fn, cb) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans('readonly', fn).then(cb);
  };

  Collection.prototype._write = function (fn) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans('readwrite', fn, "locked");
  };

  Collection.prototype._addAlgorithm = function (fn) {
    var ctx = this._ctx;
    ctx.algorithm = combine(ctx.algorithm, fn);
  };

  Collection.prototype._iterate = function (fn, coreTrans) {
    return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
  };

  Collection.prototype.clone = function (props$$1) {
    var rv = Object.create(this.constructor.prototype),
        ctx = Object.create(this._ctx);
    if (props$$1) extend(ctx, props$$1);
    rv._ctx = ctx;
    return rv;
  };

  Collection.prototype.raw = function () {
    this._ctx.valueMapper = null;
    return this;
  };

  Collection.prototype.each = function (fn) {
    var ctx = this._ctx;
    return this._read(function (trans) {
      return iter(ctx, fn, trans, ctx.table.core);
    });
  };

  Collection.prototype.count = function (cb) {
    var _this = this;

    return this._read(function (trans) {
      var ctx = _this._ctx;
      var coreTable = ctx.table.core;

      if (isPlainKeyRange(ctx, true)) {
        return coreTable.count({
          trans: trans,
          query: {
            index: getIndexOrStore(ctx, coreTable.schema),
            range: ctx.range
          }
        }).then(function (count) {
          return Math.min(count, ctx.limit);
        });
      } else {
        var count = 0;
        return iter(ctx, function () {
          ++count;
          return false;
        }, trans, coreTable).then(function () {
          return count;
        });
      }
    }).then(cb);
  };

  Collection.prototype.sortBy = function (keyPath, cb) {
    var parts = keyPath.split('.').reverse(),
        lastPart = parts[0],
        lastIndex = parts.length - 1;

    function getval(obj, i) {
      if (i) return getval(obj[parts[i]], i - 1);
      return obj[lastPart];
    }

    var order = this._ctx.dir === "next" ? 1 : -1;

    function sorter(a, b) {
      var aVal = getval(a, lastIndex),
          bVal = getval(b, lastIndex);
      return aVal < bVal ? -order : aVal > bVal ? order : 0;
    }

    return this.toArray(function (a) {
      return a.sort(sorter);
    }).then(cb);
  };

  Collection.prototype.toArray = function (cb) {
    var _this = this;

    return this._read(function (trans) {
      var ctx = _this._ctx;

      if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
        var valueMapper_1 = ctx.valueMapper;
        var index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans: trans,
          limit: ctx.limit,
          values: true,
          query: {
            index: index,
            range: ctx.range
          }
        }).then(function (_a) {
          var result = _a.result;
          return valueMapper_1 ? result.map(valueMapper_1) : result;
        });
      } else {
        var a_1 = [];
        return iter(ctx, function (item) {
          return a_1.push(item);
        }, trans, ctx.table.core).then(function () {
          return a_1;
        });
      }
    }, cb);
  };

  Collection.prototype.offset = function (offset) {
    var ctx = this._ctx;
    if (offset <= 0) return this;
    ctx.offset += offset;

    if (isPlainKeyRange(ctx)) {
      addReplayFilter(ctx, function () {
        var offsetLeft = offset;
        return function (cursor, advance) {
          if (offsetLeft === 0) return true;

          if (offsetLeft === 1) {
            --offsetLeft;
            return false;
          }

          advance(function () {
            cursor.advance(offsetLeft);
            offsetLeft = 0;
          });
          return false;
        };
      });
    } else {
      addReplayFilter(ctx, function () {
        var offsetLeft = offset;
        return function () {
          return --offsetLeft < 0;
        };
      });
    }

    return this;
  };

  Collection.prototype.limit = function (numRows) {
    this._ctx.limit = Math.min(this._ctx.limit, numRows);
    addReplayFilter(this._ctx, function () {
      var rowsLeft = numRows;
      return function (cursor, advance, resolve) {
        if (--rowsLeft <= 0) advance(resolve);
        return rowsLeft >= 0;
      };
    }, true);
    return this;
  };

  Collection.prototype.until = function (filterFunction, bIncludeStopEntry) {
    addFilter(this._ctx, function (cursor, advance, resolve) {
      if (filterFunction(cursor.value)) {
        advance(resolve);
        return bIncludeStopEntry;
      } else {
        return true;
      }
    });
    return this;
  };

  Collection.prototype.first = function (cb) {
    return this.limit(1).toArray(function (a) {
      return a[0];
    }).then(cb);
  };

  Collection.prototype.last = function (cb) {
    return this.reverse().first(cb);
  };

  Collection.prototype.filter = function (filterFunction) {
    addFilter(this._ctx, function (cursor) {
      return filterFunction(cursor.value);
    });
    addMatchFilter(this._ctx, filterFunction);
    return this;
  };

  Collection.prototype.and = function (filter) {
    return this.filter(filter);
  };

  Collection.prototype.or = function (indexName) {
    return new this.db.WhereClause(this._ctx.table, indexName, this);
  };

  Collection.prototype.reverse = function () {
    this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
    if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
    return this;
  };

  Collection.prototype.desc = function () {
    return this.reverse();
  };

  Collection.prototype.eachKey = function (cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.key, cursor);
    });
  };

  Collection.prototype.eachUniqueKey = function (cb) {
    this._ctx.unique = "unique";
    return this.eachKey(cb);
  };

  Collection.prototype.eachPrimaryKey = function (cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.primaryKey, cursor);
    });
  };

  Collection.prototype.keys = function (cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.key);
    }).then(function () {
      return a;
    }).then(cb);
  };

  Collection.prototype.primaryKeys = function (cb) {
    var ctx = this._ctx;

    if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
      return this._read(function (trans) {
        var index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans: trans,
          values: false,
          limit: ctx.limit,
          query: {
            index: index,
            range: ctx.range
          }
        });
      }).then(function (_a) {
        var result = _a.result;
        return result;
      }).then(cb);
    }

    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.primaryKey);
    }).then(function () {
      return a;
    }).then(cb);
  };

  Collection.prototype.uniqueKeys = function (cb) {
    this._ctx.unique = "unique";
    return this.keys(cb);
  };

  Collection.prototype.firstKey = function (cb) {
    return this.limit(1).keys(function (a) {
      return a[0];
    }).then(cb);
  };

  Collection.prototype.lastKey = function (cb) {
    return this.reverse().firstKey(cb);
  };

  Collection.prototype.distinct = function () {
    var ctx = this._ctx,
        idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
    if (!idx || !idx.multi) return this;
    var set = {};
    addFilter(this._ctx, function (cursor) {
      var strKey = cursor.primaryKey.toString();
      var found = hasOwn(set, strKey);
      set[strKey] = true;
      return !found;
    });
    return this;
  };

  Collection.prototype.modify = function (changes) {
    var _this = this;

    var ctx = this._ctx;
    return this._write(function (trans) {
      var modifyer;

      if (typeof changes === 'function') {
        modifyer = changes;
      } else {
        var keyPaths = keys(changes);
        var numKeys = keyPaths.length;

        modifyer = function modifyer(item) {
          var anythingModified = false;

          for (var i = 0; i < numKeys; ++i) {
            var keyPath = keyPaths[i],
                val = changes[keyPath];

            if (getByKeyPath(item, keyPath) !== val) {
              setByKeyPath(item, keyPath, val);
              anythingModified = true;
            }
          }

          return anythingModified;
        };
      }

      var coreTable = ctx.table.core;
      var _a = coreTable.schema.primaryKey,
          outbound = _a.outbound,
          extractKey = _a.extractKey;
      var limit = 'testmode' in Dexie ? 1 : 2000;
      var cmp = _this.db.core.cmp;
      var totalFailures = [];
      var successCount = 0;
      var failedKeys = [];

      var applyMutateResult = function applyMutateResult(expectedCount, res) {
        var failures = res.failures,
            numFailures = res.numFailures;
        successCount += expectedCount - numFailures;

        for (var _i = 0, _a = keys(failures); _i < _a.length; _i++) {
          var pos = _a[_i];
          totalFailures.push(failures[pos]);
        }
      };

      return _this.clone().primaryKeys().then(function (keys$$1) {
        var nextChunk = function nextChunk(offset) {
          var count = Math.min(limit, keys$$1.length - offset);
          return coreTable.getMany({
            trans: trans,
            keys: keys$$1.slice(offset, offset + count)
          }).then(function (values) {
            var addValues = [];
            var putValues = [];
            var putKeys = outbound ? [] : null;
            var deleteKeys = [];

            for (var i = 0; i < count; ++i) {
              var origValue = values[i];
              var ctx_1 = {
                value: deepClone(origValue),
                primKey: keys$$1[offset + i]
              };

              if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                if (ctx_1.value == null) {
                  deleteKeys.push(keys$$1[offset + i]);
                } else if (!outbound && cmp(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                  deleteKeys.push(keys$$1[offset + i]);
                  addValues.push(ctx_1.value);
                } else {
                  putValues.push(ctx_1.value);
                  if (outbound) putKeys.push(keys$$1[offset + i]);
                }
              }
            }

            return Promise.resolve(addValues.length > 0 && coreTable.mutate({
              trans: trans,
              type: 'add',
              values: addValues
            }).then(function (res) {
              for (var pos in res.failures) {
                deleteKeys.splice(parseInt(pos), 1);
              }

              applyMutateResult(addValues.length, res);
            })).then(function (res) {
              return putValues.length > 0 && coreTable.mutate({
                trans: trans,
                type: 'put',
                keys: putKeys,
                values: putValues
              }).then(function (res) {
                return applyMutateResult(putValues.length, res);
              });
            }).then(function () {
              return deleteKeys.length > 0 && coreTable.mutate({
                trans: trans,
                type: 'delete',
                keys: deleteKeys
              }).then(function (res) {
                return applyMutateResult(deleteKeys.length, res);
              });
            }).then(function () {
              return keys$$1.length > offset + count && nextChunk(offset + limit);
            });
          });
        };

        return nextChunk(0).then(function () {
          if (totalFailures.length > 0) throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
          return keys$$1.length;
        });
      });
    });
  };

  Collection.prototype.delete = function () {
    var ctx = this._ctx,
        range = ctx.range;

    if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) {
      return this._write(function (trans) {
        var primaryKey = ctx.table.core.schema.primaryKey;
        var coreRange = range;
        return ctx.table.core.count({
          trans: trans,
          query: {
            index: primaryKey,
            range: coreRange
          }
        }).then(function (count) {
          return ctx.table.core.mutate({
            trans: trans,
            type: 'deleteRange',
            range: coreRange
          }).then(function (_a) {
            var failures = _a.failures,
                lastResult = _a.lastResult,
                results = _a.results,
                numFailures = _a.numFailures;
            if (numFailures) throw new ModifyError("Could not delete some values", Object.keys(failures).map(function (pos) {
              return failures[pos];
            }), count - numFailures);
            return count - numFailures;
          });
        });
      });
    }

    return this.modify(function (value, ctx) {
      return ctx.value = null;
    });
  };

  return Collection;
}();

function createCollectionConstructor(db) {
  return makeClassConstructor(Collection.prototype, function Collection$$1(whereClause, keyRangeGenerator) {
    this.db = db;
    var keyRange = AnyRange,
        error = null;
    if (keyRangeGenerator) try {
      keyRange = keyRangeGenerator();
    } catch (ex) {
      error = ex;
    }
    var whereCtx = whereClause._ctx;
    var table = whereCtx.table;
    var readingHook = table.hook.reading.fire;
    this._ctx = {
      table: table,
      index: whereCtx.index,
      isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
      range: keyRange,
      keysOnly: false,
      dir: "next",
      unique: "",
      algorithm: null,
      filter: null,
      replayFilter: null,
      justLimit: true,
      isMatch: null,
      offset: 0,
      limit: Infinity,
      error: error,
      or: whereCtx.or,
      valueMapper: readingHook !== mirror ? readingHook : null
    };
  });
}

function simpleCompare(a, b) {
  return a < b ? -1 : a === b ? 0 : 1;
}

function simpleCompareReverse(a, b) {
  return a > b ? -1 : a === b ? 0 : 1;
}

function fail(collectionOrWhereClause, err, T) {
  var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
  collection._ctx.error = T ? new T(err) : new TypeError(err);
  return collection;
}

function emptyCollection(whereClause) {
  return new whereClause.Collection(whereClause, function () {
    return rangeEqual("");
  }).limit(0);
}

function upperFactory(dir) {
  return dir === "next" ? function (s) {
    return s.toUpperCase();
  } : function (s) {
    return s.toLowerCase();
  };
}

function lowerFactory(dir) {
  return dir === "next" ? function (s) {
    return s.toLowerCase();
  } : function (s) {
    return s.toUpperCase();
  };
}

function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
  var length = Math.min(key.length, lowerNeedle.length);
  var llp = -1;

  for (var i = 0; i < length; ++i) {
    var lwrKeyChar = lowerKey[i];

    if (lwrKeyChar !== lowerNeedle[i]) {
      if (cmp(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
      if (cmp(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
      if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
      return null;
    }

    if (cmp(key[i], lwrKeyChar) < 0) llp = i;
  }

  if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
  if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
  return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
}

function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
  var upper,
      lower,
      compare,
      upperNeedles,
      lowerNeedles,
      direction,
      nextKeySuffix,
      needlesLen = needles.length;

  if (!needles.every(function (s) {
    return typeof s === 'string';
  })) {
    return fail(whereClause, STRING_EXPECTED);
  }

  function initDirection(dir) {
    upper = upperFactory(dir);
    lower = lowerFactory(dir);
    compare = dir === "next" ? simpleCompare : simpleCompareReverse;
    var needleBounds = needles.map(function (needle) {
      return {
        lower: lower(needle),
        upper: upper(needle)
      };
    }).sort(function (a, b) {
      return compare(a.lower, b.lower);
    });
    upperNeedles = needleBounds.map(function (nb) {
      return nb.upper;
    });
    lowerNeedles = needleBounds.map(function (nb) {
      return nb.lower;
    });
    direction = dir;
    nextKeySuffix = dir === "next" ? "" : suffix;
  }

  initDirection("next");
  var c = new whereClause.Collection(whereClause, function () {
    return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
  });

  c._ondirectionchange = function (direction) {
    initDirection(direction);
  };

  var firstPossibleNeedle = 0;

  c._addAlgorithm(function (cursor, advance, resolve) {
    var key = cursor.key;
    if (typeof key !== 'string') return false;
    var lowerKey = lower(key);

    if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
      return true;
    } else {
      var lowestPossibleCasing = null;

      for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
        var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
        if (casing === null && lowestPossibleCasing === null) firstPossibleNeedle = i + 1;else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
          lowestPossibleCasing = casing;
        }
      }

      if (lowestPossibleCasing !== null) {
        advance(function () {
          cursor.continue(lowestPossibleCasing + nextKeySuffix);
        });
      } else {
        advance(resolve);
      }

      return false;
    }
  });

  return c;
}

function createRange(lower, upper, lowerOpen, upperOpen) {
  return {
    type: 2,
    lower: lower,
    upper: upper,
    lowerOpen: lowerOpen,
    upperOpen: upperOpen
  };
}

function rangeEqual(value) {
  return {
    type: 1,
    lower: value,
    upper: value
  };
}

var WhereClause = function () {
  function WhereClause() {}

  Object.defineProperty(WhereClause.prototype, "Collection", {
    get: function get() {
      return this._ctx.table.db.Collection;
    },
    enumerable: true,
    configurable: true
  });

  WhereClause.prototype.between = function (lower, upper, includeLower, includeUpper) {
    includeLower = includeLower !== false;
    includeUpper = includeUpper === true;

    try {
      if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)) return emptyCollection(this);
      return new this.Collection(this, function () {
        return createRange(lower, upper, !includeLower, !includeUpper);
      });
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
  };

  WhereClause.prototype.equals = function (value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function () {
      return rangeEqual(value);
    });
  };

  WhereClause.prototype.above = function (value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function () {
      return createRange(value, undefined, true);
    });
  };

  WhereClause.prototype.aboveOrEqual = function (value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function () {
      return createRange(value, undefined, false);
    });
  };

  WhereClause.prototype.below = function (value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function () {
      return createRange(undefined, value, false, true);
    });
  };

  WhereClause.prototype.belowOrEqual = function (value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, function () {
      return createRange(undefined, value);
    });
  };

  WhereClause.prototype.startsWith = function (str) {
    if (typeof str !== 'string') return fail(this, STRING_EXPECTED);
    return this.between(str, str + maxString, true, true);
  };

  WhereClause.prototype.startsWithIgnoreCase = function (str) {
    if (str === "") return this.startsWith(str);
    return addIgnoreCaseAlgorithm(this, function (x, a) {
      return x.indexOf(a[0]) === 0;
    }, [str], maxString);
  };

  WhereClause.prototype.equalsIgnoreCase = function (str) {
    return addIgnoreCaseAlgorithm(this, function (x, a) {
      return x === a[0];
    }, [str], "");
  };

  WhereClause.prototype.anyOfIgnoreCase = function () {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, function (x, a) {
      return a.indexOf(x) !== -1;
    }, set, "");
  };

  WhereClause.prototype.startsWithAnyOfIgnoreCase = function () {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, function (x, a) {
      return a.some(function (n) {
        return x.indexOf(n) === 0;
      });
    }, set, maxString);
  };

  WhereClause.prototype.anyOf = function () {
    var _this = this;

    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    var compare = this._cmp;

    try {
      set.sort(compare);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }

    if (set.length === 0) return emptyCollection(this);
    var c = new this.Collection(this, function () {
      return createRange(set[0], set[set.length - 1]);
    });

    c._ondirectionchange = function (direction) {
      compare = direction === "next" ? _this._ascending : _this._descending;
      set.sort(compare);
    };

    var i = 0;

    c._addAlgorithm(function (cursor, advance, resolve) {
      var key = cursor.key;

      while (compare(key, set[i]) > 0) {
        ++i;

        if (i === set.length) {
          advance(resolve);
          return false;
        }
      }

      if (compare(key, set[i]) === 0) {
        return true;
      } else {
        advance(function () {
          cursor.continue(set[i]);
        });
        return false;
      }
    });

    return c;
  };

  WhereClause.prototype.notEqual = function (value) {
    return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], {
      includeLowers: false,
      includeUppers: false
    });
  };

  WhereClause.prototype.noneOf = function () {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return new this.Collection(this);

    try {
      set.sort(this._ascending);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }

    var ranges = set.reduce(function (res, val) {
      return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]];
    }, null);
    ranges.push([set[set.length - 1], this.db._maxKey]);
    return this.inAnyRange(ranges, {
      includeLowers: false,
      includeUppers: false
    });
  };

  WhereClause.prototype.inAnyRange = function (ranges, options) {
    var _this = this;

    var cmp = this._cmp,
        ascending = this._ascending,
        descending = this._descending,
        min = this._min,
        max = this._max;
    if (ranges.length === 0) return emptyCollection(this);

    if (!ranges.every(function (range) {
      return range[0] !== undefined && range[1] !== undefined && ascending(range[0], range[1]) <= 0;
    })) {
      return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
    }

    var includeLowers = !options || options.includeLowers !== false;
    var includeUppers = options && options.includeUppers === true;

    function addRange(ranges, newRange) {
      var i = 0,
          l = ranges.length;

      for (; i < l; ++i) {
        var range = ranges[i];

        if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
          range[0] = min(range[0], newRange[0]);
          range[1] = max(range[1], newRange[1]);
          break;
        }
      }

      if (i === l) ranges.push(newRange);
      return ranges;
    }

    var sortDirection = ascending;

    function rangeSorter(a, b) {
      return sortDirection(a[0], b[0]);
    }

    var set;

    try {
      set = ranges.reduce(addRange, []);
      set.sort(rangeSorter);
    } catch (ex) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }

    var rangePos = 0;
    var keyIsBeyondCurrentEntry = includeUppers ? function (key) {
      return ascending(key, set[rangePos][1]) > 0;
    } : function (key) {
      return ascending(key, set[rangePos][1]) >= 0;
    };
    var keyIsBeforeCurrentEntry = includeLowers ? function (key) {
      return descending(key, set[rangePos][0]) > 0;
    } : function (key) {
      return descending(key, set[rangePos][0]) >= 0;
    };

    function keyWithinCurrentRange(key) {
      return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
    }

    var checkKey = keyIsBeyondCurrentEntry;
    var c = new this.Collection(this, function () {
      return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
    });

    c._ondirectionchange = function (direction) {
      if (direction === "next") {
        checkKey = keyIsBeyondCurrentEntry;
        sortDirection = ascending;
      } else {
        checkKey = keyIsBeforeCurrentEntry;
        sortDirection = descending;
      }

      set.sort(rangeSorter);
    };

    c._addAlgorithm(function (cursor, advance, resolve) {
      var key = cursor.key;

      while (checkKey(key)) {
        ++rangePos;

        if (rangePos === set.length) {
          advance(resolve);
          return false;
        }
      }

      if (keyWithinCurrentRange(key)) {
        return true;
      } else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
        return false;
      } else {
        advance(function () {
          if (sortDirection === ascending) cursor.continue(set[rangePos][0]);else cursor.continue(set[rangePos][1]);
        });
        return false;
      }
    });

    return c;
  };

  WhereClause.prototype.startsWithAnyOf = function () {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);

    if (!set.every(function (s) {
      return typeof s === 'string';
    })) {
      return fail(this, "startsWithAnyOf() only works with strings");
    }

    if (set.length === 0) return emptyCollection(this);
    return this.inAnyRange(set.map(function (str) {
      return [str, str + maxString];
    }));
  };

  return WhereClause;
}();

function createWhereClauseConstructor(db) {
  return makeClassConstructor(WhereClause.prototype, function WhereClause$$1(table, index, orCollection) {
    this.db = db;
    this._ctx = {
      table: table,
      index: index === ":id" ? null : index,
      or: orCollection
    };
    var indexedDB = db._deps.indexedDB;
    if (!indexedDB) throw new exceptions.MissingAPI("indexedDB API missing");
    this._cmp = this._ascending = indexedDB.cmp.bind(indexedDB);

    this._descending = function (a, b) {
      return indexedDB.cmp(b, a);
    };

    this._max = function (a, b) {
      return indexedDB.cmp(a, b) > 0 ? a : b;
    };

    this._min = function (a, b) {
      return indexedDB.cmp(a, b) < 0 ? a : b;
    };

    this._IDBKeyRange = db._deps.IDBKeyRange;
  });
}

function safariMultiStoreFix(storeNames) {
  return storeNames.length === 1 ? storeNames[0] : storeNames;
}

function getMaxKey(IdbKeyRange) {
  try {
    IdbKeyRange.only([[]]);
    return [[]];
  } catch (e) {
    return maxString;
  }
}

function eventRejectHandler(reject) {
  return wrap(function (event) {
    preventDefault(event);
    reject(event.target.error);
    return false;
  });
}

function preventDefault(event) {
  if (event.stopPropagation) event.stopPropagation();
  if (event.preventDefault) event.preventDefault();
}

var Transaction = function () {
  function Transaction() {}

  Transaction.prototype._lock = function () {
    assert(!PSD.global);
    ++this._reculock;
    if (this._reculock === 1 && !PSD.global) PSD.lockOwnerFor = this;
    return this;
  };

  Transaction.prototype._unlock = function () {
    assert(!PSD.global);

    if (--this._reculock === 0) {
      if (!PSD.global) PSD.lockOwnerFor = null;

      while (this._blockedFuncs.length > 0 && !this._locked()) {
        var fnAndPSD = this._blockedFuncs.shift();

        try {
          usePSD(fnAndPSD[1], fnAndPSD[0]);
        } catch (e) {}
      }
    }

    return this;
  };

  Transaction.prototype._locked = function () {
    return this._reculock && PSD.lockOwnerFor !== this;
  };

  Transaction.prototype.create = function (idbtrans) {
    var _this = this;

    if (!this.mode) return this;
    var idbdb = this.db.idbdb;
    var dbOpenError = this.db._state.dbOpenError;
    assert(!this.idbtrans);

    if (!idbtrans && !idbdb) {
      switch (dbOpenError && dbOpenError.name) {
        case "DatabaseClosedError":
          throw new exceptions.DatabaseClosed(dbOpenError);

        case "MissingAPIError":
          throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);

        default:
          throw new exceptions.OpenFailed(dbOpenError);
      }
    }

    if (!this.active) throw new exceptions.TransactionInactive();
    assert(this._completion._state === null);
    idbtrans = this.idbtrans = idbtrans || idbdb.transaction(safariMultiStoreFix(this.storeNames), this.mode);
    idbtrans.onerror = wrap(function (ev) {
      preventDefault(ev);

      _this._reject(idbtrans.error);
    });
    idbtrans.onabort = wrap(function (ev) {
      preventDefault(ev);
      _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
      _this.active = false;

      _this.on("abort").fire(ev);
    });
    idbtrans.oncomplete = wrap(function () {
      _this.active = false;

      _this._resolve();
    });
    return this;
  };

  Transaction.prototype._promise = function (mode, fn, bWriteLock) {
    var _this = this;

    if (mode === 'readwrite' && this.mode !== 'readwrite') return rejection(new exceptions.ReadOnly("Transaction is readonly"));
    if (!this.active) return rejection(new exceptions.TransactionInactive());

    if (this._locked()) {
      return new DexiePromise(function (resolve, reject) {
        _this._blockedFuncs.push([function () {
          _this._promise(mode, fn, bWriteLock).then(resolve, reject);
        }, PSD]);
      });
    } else if (bWriteLock) {
      return newScope(function () {
        var p = new DexiePromise(function (resolve, reject) {
          _this._lock();

          var rv = fn(resolve, reject, _this);
          if (rv && rv.then) rv.then(resolve, reject);
        });
        p.finally(function () {
          return _this._unlock();
        });
        p._lib = true;
        return p;
      });
    } else {
      var p = new DexiePromise(function (resolve, reject) {
        var rv = fn(resolve, reject, _this);
        if (rv && rv.then) rv.then(resolve, reject);
      });
      p._lib = true;
      return p;
    }
  };

  Transaction.prototype._root = function () {
    return this.parent ? this.parent._root() : this;
  };

  Transaction.prototype.waitFor = function (promiseLike) {
    var root = this._root();

    var promise = DexiePromise.resolve(promiseLike);

    if (root._waitingFor) {
      root._waitingFor = root._waitingFor.then(function () {
        return promise;
      });
    } else {
      root._waitingFor = promise;
      root._waitingQueue = [];
      var store = root.idbtrans.objectStore(root.storeNames[0]);

      (function spin() {
        ++root._spinCount;

        while (root._waitingQueue.length) {
          root._waitingQueue.shift()();
        }

        if (root._waitingFor) store.get(-Infinity).onsuccess = spin;
      })();
    }

    var currentWaitPromise = root._waitingFor;
    return new DexiePromise(function (resolve, reject) {
      promise.then(function (res) {
        return root._waitingQueue.push(wrap(resolve.bind(null, res)));
      }, function (err) {
        return root._waitingQueue.push(wrap(reject.bind(null, err)));
      }).finally(function () {
        if (root._waitingFor === currentWaitPromise) {
          root._waitingFor = null;
        }
      });
    });
  };

  Transaction.prototype.abort = function () {
    this.active && this._reject(new exceptions.Abort());
    this.active = false;
  };

  Transaction.prototype.table = function (tableName) {
    var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
    if (hasOwn(memoizedTables, tableName)) return memoizedTables[tableName];
    var tableSchema = this.schema[tableName];

    if (!tableSchema) {
      throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
    }

    var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
    transactionBoundTable.core = this.db.core.table(tableName);
    memoizedTables[tableName] = transactionBoundTable;
    return transactionBoundTable;
  };

  return Transaction;
}();

function createTransactionConstructor(db) {
  return makeClassConstructor(Transaction.prototype, function Transaction$$1(mode, storeNames, dbschema, parent) {
    var _this = this;

    this.db = db;
    this.mode = mode;
    this.storeNames = storeNames;
    this.schema = dbschema;
    this.idbtrans = null;
    this.on = Events(this, "complete", "error", "abort");
    this.parent = parent || null;
    this.active = true;
    this._reculock = 0;
    this._blockedFuncs = [];
    this._resolve = null;
    this._reject = null;
    this._waitingFor = null;
    this._waitingQueue = null;
    this._spinCount = 0;
    this._completion = new DexiePromise(function (resolve, reject) {
      _this._resolve = resolve;
      _this._reject = reject;
    });

    this._completion.then(function () {
      _this.active = false;

      _this.on.complete.fire();
    }, function (e) {
      var wasActive = _this.active;
      _this.active = false;

      _this.on.error.fire(e);

      _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort();
      return rejection(e);
    });
  });
}

function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
  return {
    name: name,
    keyPath: keyPath,
    unique: unique,
    multi: multi,
    auto: auto,
    compound: compound,
    src: (unique && !isPrimKey ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + nameFromKeyPath(keyPath)
  };
}

function nameFromKeyPath(keyPath) {
  return typeof keyPath === 'string' ? keyPath : keyPath ? '[' + [].join.call(keyPath, '+') + ']' : "";
}

function createTableSchema(name, primKey, indexes) {
  return {
    name: name,
    primKey: primKey,
    indexes: indexes,
    mappedClass: null,
    idxByName: arrayToObject(indexes, function (index) {
      return [index.name, index];
    })
  };
}

function getKeyExtractor(keyPath) {
  if (keyPath == null) {
    return function () {
      return undefined;
    };
  } else if (typeof keyPath === 'string') {
    return getSinglePathKeyExtractor(keyPath);
  } else {
    return function (obj) {
      return getByKeyPath(obj, keyPath);
    };
  }
}

function getSinglePathKeyExtractor(keyPath) {
  var split = keyPath.split('.');

  if (split.length === 1) {
    return function (obj) {
      return obj[keyPath];
    };
  } else {
    return function (obj) {
      return getByKeyPath(obj, keyPath);
    };
  }
}

function getEffectiveKeys(primaryKey, req) {
  if (req.type === 'delete') return req.keys;
  return req.keys || req.values.map(primaryKey.extractKey);
}

function getExistingValues(table, req, effectiveKeys) {
  return req.type === 'add' ? Promise.resolve(new Array(req.values.length)) : table.getMany({
    trans: req.trans,
    keys: effectiveKeys
  });
}

function arrayify(arrayLike) {
  return [].slice.call(arrayLike);
}

var _id_counter = 0;

function getKeyPathAlias(keyPath) {
  return keyPath == null ? ":id" : typeof keyPath === 'string' ? keyPath : "[" + keyPath.join('+') + "]";
}

function createDBCore(db, indexedDB, IdbKeyRange, tmpTrans) {
  var cmp = indexedDB.cmp.bind(indexedDB);

  function extractSchema(db, trans) {
    var tables = arrayify(db.objectStoreNames);
    return {
      schema: {
        name: db.name,
        tables: tables.map(function (table) {
          return trans.objectStore(table);
        }).map(function (store) {
          var keyPath = store.keyPath,
              autoIncrement = store.autoIncrement;
          var compound = isArray(keyPath);
          var outbound = keyPath == null;
          var indexByKeyPath = {};
          var result = {
            name: store.name,
            primaryKey: {
              name: null,
              isPrimaryKey: true,
              outbound: outbound,
              compound: compound,
              keyPath: keyPath,
              autoIncrement: autoIncrement,
              unique: true,
              extractKey: getKeyExtractor(keyPath)
            },
            indexes: arrayify(store.indexNames).map(function (indexName) {
              return store.index(indexName);
            }).map(function (index) {
              var name = index.name,
                  unique = index.unique,
                  multiEntry = index.multiEntry,
                  keyPath = index.keyPath;
              var compound = isArray(keyPath);
              var result = {
                name: name,
                compound: compound,
                keyPath: keyPath,
                unique: unique,
                multiEntry: multiEntry,
                extractKey: getKeyExtractor(keyPath)
              };
              indexByKeyPath[getKeyPathAlias(keyPath)] = result;
              return result;
            }),
            getIndexByKeyPath: function getIndexByKeyPath(keyPath) {
              return indexByKeyPath[getKeyPathAlias(keyPath)];
            }
          };
          indexByKeyPath[":id"] = result.primaryKey;

          if (keyPath != null) {
            indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
          }

          return result;
        })
      },
      hasGetAll: tables.length > 0 && 'getAll' in trans.objectStore(tables[0]) && !(typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
    };
  }

  function makeIDBKeyRange(range) {
    if (range.type === 3) return null;
    if (range.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
    var lower = range.lower,
        upper = range.upper,
        lowerOpen = range.lowerOpen,
        upperOpen = range.upperOpen;
    var idbRange = lower === undefined ? upper === undefined ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === undefined ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
    return idbRange;
  }

  function createDbCoreTable(tableSchema) {
    var tableName = tableSchema.name;

    function mutate(_a) {
      var trans = _a.trans,
          type = _a.type,
          keys$$1 = _a.keys,
          values = _a.values,
          range = _a.range,
          wantResults = _a.wantResults;
      return new Promise(function (resolve, reject) {
        resolve = wrap(resolve);
        var store = trans.objectStore(tableName);
        var outbound = store.keyPath == null;
        var isAddOrPut = type === "put" || type === "add";
        if (!isAddOrPut && type !== 'delete' && type !== 'deleteRange') throw new Error("Invalid operation type: " + type);
        var length = (keys$$1 || values || {
          length: 1
        }).length;

        if (keys$$1 && values && keys$$1.length !== values.length) {
          throw new Error("Given keys array must have same length as given values array.");
        }

        if (length === 0) return resolve({
          numFailures: 0,
          failures: {},
          results: [],
          lastResult: undefined
        });

        var results = wantResults && __spreadArrays(keys$$1 ? keys$$1 : getEffectiveKeys(tableSchema.primaryKey, {
          type: type,
          keys: keys$$1,
          values: values
        }));

        var req;
        var failures = [];
        var numFailures = 0;

        var errorHandler = function errorHandler(event) {
          ++numFailures;
          preventDefault(event);
          if (results) results[event.target._reqno] = undefined;
          failures[event.target._reqno] = event.target.error;
        };

        var setResult = function setResult(_a) {
          var target = _a.target;
          results[target._reqno] = target.result;
        };

        if (type === 'deleteRange') {
          if (range.type === 4) return resolve({
            numFailures: numFailures,
            failures: failures,
            results: results,
            lastResult: undefined
          });
          if (range.type === 3) req = store.clear();else req = store.delete(makeIDBKeyRange(range));
        } else {
          var _a = isAddOrPut ? outbound ? [values, keys$$1] : [values, null] : [keys$$1, null],
              args1 = _a[0],
              args2 = _a[1];

          if (isAddOrPut) {
            for (var i = 0; i < length; ++i) {
              req = args2 && args2[i] !== undefined ? store[type](args1[i], args2[i]) : store[type](args1[i]);
              req._reqno = i;

              if (results && results[i] === undefined) {
                req.onsuccess = setResult;
              }

              req.onerror = errorHandler;
            }
          } else {
            for (var i = 0; i < length; ++i) {
              req = store[type](args1[i]);
              req._reqno = i;
              req.onerror = errorHandler;
            }
          }
        }

        var done = function done(event) {
          var lastResult = event.target.result;
          if (results) results[length - 1] = lastResult;
          resolve({
            numFailures: numFailures,
            failures: failures,
            results: results,
            lastResult: lastResult
          });
        };

        req.onerror = function (event) {
          errorHandler(event);
          done(event);
        };

        req.onsuccess = done;
      });
    }

    function openCursor(_a) {
      var trans = _a.trans,
          values = _a.values,
          query = _a.query,
          reverse = _a.reverse,
          unique = _a.unique;
      return new Promise(function (resolve, reject) {
        resolve = wrap(resolve);
        var index = query.index,
            range = query.range;
        var store = trans.objectStore(tableName);
        var source = index.isPrimaryKey ? store : store.index(index.name);
        var direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
        var req = values || !('openKeyCursor' in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
        req.onerror = eventRejectHandler(reject);
        req.onsuccess = wrap(function (ev) {
          var cursor = req.result;

          if (!cursor) {
            resolve(null);
            return;
          }

          cursor.___id = ++_id_counter;
          cursor.done = false;

          var _cursorContinue = cursor.continue.bind(cursor);

          var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
          if (_cursorContinuePrimaryKey) _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);

          var _cursorAdvance = cursor.advance.bind(cursor);

          var doThrowCursorIsNotStarted = function doThrowCursorIsNotStarted() {
            throw new Error("Cursor not started");
          };

          var doThrowCursorIsStopped = function doThrowCursorIsStopped() {
            throw new Error("Cursor not stopped");
          };

          cursor.trans = trans;
          cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
          cursor.fail = wrap(reject);

          cursor.next = function () {
            var _this = this;

            var gotOne = 1;
            return this.start(function () {
              return gotOne-- ? _this.continue() : _this.stop();
            }).then(function () {
              return _this;
            });
          };

          cursor.start = function (callback) {
            var iterationPromise = new Promise(function (resolveIteration, rejectIteration) {
              resolveIteration = wrap(resolveIteration);
              req.onerror = eventRejectHandler(rejectIteration);
              cursor.fail = rejectIteration;

              cursor.stop = function (value) {
                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                resolveIteration(value);
              };
            });

            var guardedCallback = function guardedCallback() {
              if (req.result) {
                try {
                  callback();
                } catch (err) {
                  cursor.fail(err);
                }
              } else {
                cursor.done = true;

                cursor.start = function () {
                  throw new Error("Cursor behind last entry");
                };

                cursor.stop();
              }
            };

            req.onsuccess = wrap(function (ev) {
              req.onsuccess = guardedCallback;
              guardedCallback();
            });
            cursor.continue = _cursorContinue;
            cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
            cursor.advance = _cursorAdvance;
            guardedCallback();
            return iterationPromise;
          };

          resolve(cursor);
        }, reject);
      });
    }

    function query(hasGetAll) {
      return function (request) {
        return new Promise(function (resolve, reject) {
          resolve = wrap(resolve);
          var trans = request.trans,
              values = request.values,
              limit = request.limit,
              query = request.query;
          var nonInfinitLimit = limit === Infinity ? undefined : limit;
          var index = query.index,
              range = query.range;
          var store = trans.objectStore(tableName);
          var source = index.isPrimaryKey ? store : store.index(index.name);
          var idbKeyRange = makeIDBKeyRange(range);
          if (limit === 0) return resolve({
            result: []
          });

          if (hasGetAll) {
            var req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);

            req.onsuccess = function (event) {
              return resolve({
                result: event.target.result
              });
            };

            req.onerror = eventRejectHandler(reject);
          } else {
            var count_1 = 0;
            var req_1 = values || !('openKeyCursor' in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
            var result_1 = [];

            req_1.onsuccess = function (event) {
              var cursor = req_1.result;
              if (!cursor) return resolve({
                result: result_1
              });
              result_1.push(values ? cursor.value : cursor.primaryKey);
              if (++count_1 === limit) return resolve({
                result: result_1
              });
              cursor.continue();
            };

            req_1.onerror = eventRejectHandler(reject);
          }
        });
      };
    }

    return {
      name: tableName,
      schema: tableSchema,
      mutate: mutate,
      getMany: function getMany(_a) {
        var trans = _a.trans,
            keys$$1 = _a.keys;
        return new Promise(function (resolve, reject) {
          resolve = wrap(resolve);
          var store = trans.objectStore(tableName);
          var length = keys$$1.length;
          var result = new Array(length);
          var keyCount = 0;
          var callbackCount = 0;
          var req;

          var successHandler = function successHandler(event) {
            var req = event.target;
            if ((result[req._pos] = req.result) != null) ;
            if (++callbackCount === keyCount) resolve(result);
          };

          var errorHandler = eventRejectHandler(reject);

          for (var i = 0; i < length; ++i) {
            var key = keys$$1[i];

            if (key != null) {
              req = store.get(keys$$1[i]);
              req._pos = i;
              req.onsuccess = successHandler;
              req.onerror = errorHandler;
              ++keyCount;
            }
          }

          if (keyCount === 0) resolve(result);
        });
      },
      get: function get(_a) {
        var trans = _a.trans,
            key = _a.key;
        return new Promise(function (resolve, reject) {
          resolve = wrap(resolve);
          var store = trans.objectStore(tableName);
          var req = store.get(key);

          req.onsuccess = function (event) {
            return resolve(event.target.result);
          };

          req.onerror = eventRejectHandler(reject);
        });
      },
      query: query(hasGetAll),
      openCursor: openCursor,
      count: function count(_a) {
        var query = _a.query,
            trans = _a.trans;
        var index = query.index,
            range = query.range;
        return new Promise(function (resolve, reject) {
          var store = trans.objectStore(tableName);
          var source = index.isPrimaryKey ? store : store.index(index.name);
          var idbKeyRange = makeIDBKeyRange(range);
          var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
          req.onsuccess = wrap(function (ev) {
            return resolve(ev.target.result);
          });
          req.onerror = eventRejectHandler(reject);
        });
      }
    };
  }

  var _a = extractSchema(db, tmpTrans),
      schema = _a.schema,
      hasGetAll = _a.hasGetAll;

  var tables = schema.tables.map(function (tableSchema) {
    return createDbCoreTable(tableSchema);
  });
  var tableMap = {};
  tables.forEach(function (table) {
    return tableMap[table.name] = table;
  });
  return {
    stack: "dbcore",
    transaction: db.transaction.bind(db),
    table: function table(name) {
      var result = tableMap[name];
      if (!result) throw new Error("Table '" + name + "' not found");
      return tableMap[name];
    },
    cmp: cmp,
    MIN_KEY: -Infinity,
    MAX_KEY: getMaxKey(IdbKeyRange),
    schema: schema
  };
}

function createMiddlewareStack(stackImpl, middlewares) {
  return middlewares.reduce(function (down, _a) {
    var create = _a.create;
    return _assign(_assign({}, down), create(down));
  }, stackImpl);
}

function createMiddlewareStacks(middlewares, idbdb, _a, tmpTrans) {
  var IDBKeyRange = _a.IDBKeyRange,
      indexedDB = _a.indexedDB;
  var dbcore = createMiddlewareStack(createDBCore(idbdb, indexedDB, IDBKeyRange, tmpTrans), middlewares.dbcore);
  return {
    dbcore: dbcore
  };
}

function generateMiddlewareStacks(db, tmpTrans) {
  var idbdb = tmpTrans.db;
  var stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
  db.core = stacks.dbcore;
  db.tables.forEach(function (table) {
    var tableName = table.name;

    if (db.core.schema.tables.some(function (tbl) {
      return tbl.name === tableName;
    })) {
      table.core = db.core.table(tableName);

      if (db[tableName] instanceof db.Table) {
        db[tableName].core = table.core;
      }
    }
  });
}

function setApiOnPlace(db, objs, tableNames, dbschema) {
  tableNames.forEach(function (tableName) {
    var schema = dbschema[tableName];
    objs.forEach(function (obj) {
      var propDesc = getPropertyDescriptor(obj, tableName);

      if (!propDesc || "value" in propDesc && propDesc.value === undefined) {
        if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
          setProp(obj, tableName, {
            get: function get() {
              return this.table(tableName);
            },
            set: function set(value) {
              defineProperty(this, tableName, {
                value: value,
                writable: true,
                configurable: true,
                enumerable: true
              });
            }
          });
        } else {
          obj[tableName] = new db.Table(tableName, schema);
        }
      }
    });
  });
}

function removeTablesApi(db, objs) {
  objs.forEach(function (obj) {
    for (var key in obj) {
      if (obj[key] instanceof db.Table) delete obj[key];
    }
  });
}

function lowerVersionFirst(a, b) {
  return a._cfg.version - b._cfg.version;
}

function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
  var globalSchema = db._dbSchema;

  var trans = db._createTransaction('readwrite', db._storeNames, globalSchema);

  trans.create(idbUpgradeTrans);

  trans._completion.catch(reject);

  var rejectTransaction = trans._reject.bind(trans);

  var transless = PSD.transless || PSD;
  newScope(function () {
    PSD.trans = trans;
    PSD.transless = transless;

    if (oldVersion === 0) {
      keys(globalSchema).forEach(function (tableName) {
        createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
      });
      generateMiddlewareStacks(db, idbUpgradeTrans);
      DexiePromise.follow(function () {
        return db.on.populate.fire(trans);
      }).catch(rejectTransaction);
    } else updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
  });
}

function updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans) {
  var queue = [];
  var versions = db._versions;
  var globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
  var anyContentUpgraderHasRun = false;
  var versToRun = versions.filter(function (v) {
    return v._cfg.version >= oldVersion;
  });
  versToRun.forEach(function (version) {
    queue.push(function () {
      var oldSchema = globalSchema;
      var newSchema = version._cfg.dbschema;
      adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
      adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
      globalSchema = db._dbSchema = newSchema;
      var diff = getSchemaDiff(oldSchema, newSchema);
      diff.add.forEach(function (tuple) {
        createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
      });
      diff.change.forEach(function (change) {
        if (change.recreate) {
          throw new exceptions.Upgrade("Not yet support for changing primary key");
        } else {
          var store_1 = idbUpgradeTrans.objectStore(change.name);
          change.add.forEach(function (idx) {
            return addIndex(store_1, idx);
          });
          change.change.forEach(function (idx) {
            store_1.deleteIndex(idx.name);
            addIndex(store_1, idx);
          });
          change.del.forEach(function (idxName) {
            return store_1.deleteIndex(idxName);
          });
        }
      });
      var contentUpgrade = version._cfg.contentUpgrade;

      if (contentUpgrade && version._cfg.version > oldVersion) {
        generateMiddlewareStacks(db, idbUpgradeTrans);
        trans._memoizedTables = {};
        anyContentUpgraderHasRun = true;
        var upgradeSchema_1 = shallowClone(newSchema);
        diff.del.forEach(function (table) {
          upgradeSchema_1[table] = oldSchema[table];
        });
        removeTablesApi(db, [db.Transaction.prototype]);
        setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1);
        trans.schema = upgradeSchema_1;
        var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);

        if (contentUpgradeIsAsync_1) {
          incrementExpectedAwaits();
        }

        var returnValue_1;
        var promiseFollowed = DexiePromise.follow(function () {
          returnValue_1 = contentUpgrade(trans);

          if (returnValue_1) {
            if (contentUpgradeIsAsync_1) {
              var decrementor = decrementExpectedAwaits.bind(null, null);
              returnValue_1.then(decrementor, decrementor);
            }
          }
        });
        return returnValue_1 && typeof returnValue_1.then === 'function' ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function () {
          return returnValue_1;
        });
      }
    });
    queue.push(function (idbtrans) {
      if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
        var newSchema = version._cfg.dbschema;
        deleteRemovedTables(newSchema, idbtrans);
      }

      removeTablesApi(db, [db.Transaction.prototype]);
      setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
      trans.schema = db._dbSchema;
    });
  });

  function runQueue() {
    return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
  }

  return runQueue().then(function () {
    createMissingTables(globalSchema, idbUpgradeTrans);
  });
}

function getSchemaDiff(oldSchema, newSchema) {
  var diff = {
    del: [],
    add: [],
    change: []
  };
  var table;

  for (table in oldSchema) {
    if (!newSchema[table]) diff.del.push(table);
  }

  for (table in newSchema) {
    var oldDef = oldSchema[table],
        newDef = newSchema[table];

    if (!oldDef) {
      diff.add.push([table, newDef]);
    } else {
      var change = {
        name: table,
        def: newDef,
        recreate: false,
        del: [],
        add: [],
        change: []
      };

      if ('' + (oldDef.primKey.keyPath || '') !== '' + (newDef.primKey.keyPath || '') || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) {
        change.recreate = true;
        diff.change.push(change);
      } else {
        var oldIndexes = oldDef.idxByName;
        var newIndexes = newDef.idxByName;
        var idxName = void 0;

        for (idxName in oldIndexes) {
          if (!newIndexes[idxName]) change.del.push(idxName);
        }

        for (idxName in newIndexes) {
          var oldIdx = oldIndexes[idxName],
              newIdx = newIndexes[idxName];
          if (!oldIdx) change.add.push(newIdx);else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
        }

        if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
          diff.change.push(change);
        }
      }
    }
  }

  return diff;
}

function createTable(idbtrans, tableName, primKey, indexes) {
  var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? {
    keyPath: primKey.keyPath,
    autoIncrement: primKey.auto
  } : {
    autoIncrement: primKey.auto
  });
  indexes.forEach(function (idx) {
    return addIndex(store, idx);
  });
  return store;
}

function createMissingTables(newSchema, idbtrans) {
  keys(newSchema).forEach(function (tableName) {
    if (!idbtrans.db.objectStoreNames.contains(tableName)) {
      createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
    }
  });
}

function deleteRemovedTables(newSchema, idbtrans) {
  for (var i = 0; i < idbtrans.db.objectStoreNames.length; ++i) {
    var storeName = idbtrans.db.objectStoreNames[i];

    if (newSchema[storeName] == null) {
      idbtrans.db.deleteObjectStore(storeName);
    }
  }
}

function addIndex(store, idx) {
  store.createIndex(idx.name, idx.keyPath, {
    unique: idx.unique,
    multiEntry: idx.multi
  });
}

function buildGlobalSchema(db, idbdb, tmpTrans) {
  var globalSchema = {};
  var dbStoreNames = slice(idbdb.objectStoreNames, 0);
  dbStoreNames.forEach(function (storeName) {
    var store = tmpTrans.objectStore(storeName);
    var keyPath = store.keyPath;
    var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
    var indexes = [];

    for (var j = 0; j < store.indexNames.length; ++j) {
      var idbindex = store.index(store.indexNames[j]);
      keyPath = idbindex.keyPath;
      var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
      indexes.push(index);
    }

    globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
  });
  return globalSchema;
}

function readGlobalSchema(db, idbdb, tmpTrans) {
  db.verno = idbdb.version / 10;
  var globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
  db._storeNames = slice(idbdb.objectStoreNames, 0);
  setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
}

function verifyInstalledSchema(db, tmpTrans) {
  var installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
  var diff = getSchemaDiff(installedSchema, db._dbSchema);
  return !(diff.add.length || diff.change.some(function (ch) {
    return ch.add.length || ch.change.length;
  }));
}

function adjustToExistingIndexNames(db, schema, idbtrans) {
  var storeNames = idbtrans.db.objectStoreNames;

  for (var i = 0; i < storeNames.length; ++i) {
    var storeName = storeNames[i];
    var store = idbtrans.objectStore(storeName);
    db._hasGetAll = 'getAll' in store;

    for (var j = 0; j < store.indexNames.length; ++j) {
      var indexName = store.indexNames[j];
      var keyPath = store.index(indexName).keyPath;
      var dexieName = typeof keyPath === 'string' ? keyPath : "[" + slice(keyPath).join('+') + "]";

      if (schema[storeName]) {
        var indexSpec = schema[storeName].idxByName[dexieName];

        if (indexSpec) {
          indexSpec.name = indexName;
          delete schema[storeName].idxByName[dexieName];
          schema[storeName].idxByName[indexName] = indexSpec;
        }
      }
    }
  }

  if (typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
    db._hasGetAll = false;
  }
}

function parseIndexSyntax(primKeyAndIndexes) {
  return primKeyAndIndexes.split(',').map(function (index, indexNum) {
    index = index.trim();
    var name = index.replace(/([&*]|\+\+)/g, "");
    var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split('+') : name;
    return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
  });
}

var Version = function () {
  function Version() {}

  Version.prototype._parseStoresSpec = function (stores, outSchema) {
    keys(stores).forEach(function (tableName) {
      if (stores[tableName] !== null) {
        var indexes = parseIndexSyntax(stores[tableName]);
        var primKey = indexes.shift();
        if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
        indexes.forEach(function (idx) {
          if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
          if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
        });
        outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
      }
    });
  };

  Version.prototype.stores = function (stores) {
    var db = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
    var versions = db._versions;
    var storesSpec = {};
    var dbschema = {};
    versions.forEach(function (version) {
      extend(storesSpec, version._cfg.storesSource);
      dbschema = version._cfg.dbschema = {};

      version._parseStoresSpec(storesSpec, dbschema);
    });
    db._dbSchema = dbschema;
    removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
    setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
    db._storeNames = keys(dbschema);
    return this;
  };

  Version.prototype.upgrade = function (upgradeFunction) {
    this._cfg.contentUpgrade = upgradeFunction;
    return this;
  };

  return Version;
}();

function createVersionConstructor(db) {
  return makeClassConstructor(Version.prototype, function Version$$1(versionNumber) {
    this.db = db;
    this._cfg = {
      version: versionNumber,
      storesSource: null,
      dbschema: {},
      tables: {},
      contentUpgrade: null
    };
  });
}

var databaseEnumerator;

function DatabaseEnumerator(indexedDB) {
  var hasDatabasesNative = indexedDB && typeof indexedDB.databases === 'function';
  var dbNamesTable;

  if (!hasDatabasesNative) {
    var db = new Dexie(DBNAMES_DB, {
      addons: []
    });
    db.version(1).stores({
      dbnames: 'name'
    });
    dbNamesTable = db.table('dbnames');
  }

  return {
    getDatabaseNames: function getDatabaseNames() {
      return hasDatabasesNative ? DexiePromise.resolve(indexedDB.databases()).then(function (infos) {
        return infos.map(function (info) {
          return info.name;
        }).filter(function (name) {
          return name !== DBNAMES_DB;
        });
      }) : dbNamesTable.toCollection().primaryKeys();
    },
    add: function add(name) {
      return !hasDatabasesNative && name !== DBNAMES_DB && dbNamesTable.put({
        name: name
      }).catch(nop);
    },
    remove: function remove(name) {
      return !hasDatabasesNative && name !== DBNAMES_DB && dbNamesTable.delete(name).catch(nop);
    }
  };
}

function initDatabaseEnumerator(indexedDB) {
  try {
    databaseEnumerator = DatabaseEnumerator(indexedDB);
  } catch (e) {}
}

function vip(fn) {
  return newScope(function () {
    PSD.letThrough = true;
    return fn();
  });
}

function dexieOpen(db) {
  var state = db._state;
  var indexedDB = db._deps.indexedDB;
  if (state.isBeingOpened || db.idbdb) return state.dbReadyPromise.then(function () {
    return state.dbOpenError ? rejection(state.dbOpenError) : db;
  });
  debug && (state.openCanceller._stackHolder = getErrorWithStack());
  state.isBeingOpened = true;
  state.dbOpenError = null;
  state.openComplete = false;
  var resolveDbReady = state.dbReadyResolve,
      upgradeTransaction = null;
  return DexiePromise.race([state.openCanceller, new DexiePromise(function (resolve, reject) {
    if (!indexedDB) throw new exceptions.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL " + "(not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
    var dbName = db.name;
    var req = state.autoSchema ? indexedDB.open(dbName) : indexedDB.open(dbName, Math.round(db.verno * 10));
    if (!req) throw new exceptions.MissingAPI("IndexedDB API not available");
    req.onerror = eventRejectHandler(reject);
    req.onblocked = wrap(db._fireOnBlocked);
    req.onupgradeneeded = wrap(function (e) {
      upgradeTransaction = req.transaction;

      if (state.autoSchema && !db._options.allowEmptyDB) {
        req.onerror = preventDefault;
        upgradeTransaction.abort();
        req.result.close();
        var delreq = indexedDB.deleteDatabase(dbName);
        delreq.onsuccess = delreq.onerror = wrap(function () {
          reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
        });
      } else {
        upgradeTransaction.onerror = eventRejectHandler(reject);
        var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
        db.idbdb = req.result;
        runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
      }
    }, reject);
    req.onsuccess = wrap(function () {
      upgradeTransaction = null;
      var idbdb = db.idbdb = req.result;
      var objectStoreNames = slice(idbdb.objectStoreNames);
      if (objectStoreNames.length > 0) try {
        var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), 'readonly');
        if (state.autoSchema) readGlobalSchema(db, idbdb, tmpTrans);else {
          adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);

          if (!verifyInstalledSchema(db, tmpTrans)) {
            console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.");
          }
        }
        generateMiddlewareStacks(db, tmpTrans);
      } catch (e) {}
      connections.push(db);
      idbdb.onversionchange = wrap(function (ev) {
        state.vcFired = true;
        db.on("versionchange").fire(ev);
      });
      databaseEnumerator.add(dbName);
      resolve();
    }, reject);
  })]).then(function () {
    state.onReadyBeingFired = [];
    return DexiePromise.resolve(vip(db.on.ready.fire)).then(function fireRemainders() {
      if (state.onReadyBeingFired.length > 0) {
        var remainders = state.onReadyBeingFired.reduce(promisableChain, nop);
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(remainders)).then(fireRemainders);
      }
    });
  }).finally(function () {
    state.onReadyBeingFired = null;
  }).then(function () {
    state.isBeingOpened = false;
    return db;
  }).catch(function (err) {
    try {
      upgradeTransaction && upgradeTransaction.abort();
    } catch (e) {}

    state.isBeingOpened = false;
    db.close();
    state.dbOpenError = err;
    return rejection(state.dbOpenError);
  }).finally(function () {
    state.openComplete = true;
    resolveDbReady();
  });
}

function awaitIterator(iterator) {
  var callNext = function callNext(result) {
    return iterator.next(result);
  },
      doThrow = function doThrow(error) {
    return iterator.throw(error);
  },
      onSuccess = step(callNext),
      onError = step(doThrow);

  function step(getNext) {
    return function (val) {
      var next = getNext(val),
          value = next.value;
      return next.done ? value : !value || typeof value.then !== 'function' ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
    };
  }

  return step(callNext)();
}

function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
  var i = arguments.length;
  if (i < 2) throw new exceptions.InvalidArgument("Too few arguments");
  var args = new Array(i - 1);

  while (--i) {
    args[i - 1] = arguments[i];
  }

  scopeFunc = args.pop();
  var tables = flatten(args);
  return [mode, tables, scopeFunc];
}

function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
  return DexiePromise.resolve().then(function () {
    var transless = PSD.transless || PSD;

    var trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);

    var zoneProps = {
      trans: trans,
      transless: transless
    };

    if (parentTransaction) {
      trans.idbtrans = parentTransaction.idbtrans;
    } else {
      trans.create();
    }

    var scopeFuncIsAsync = isAsyncFunction(scopeFunc);

    if (scopeFuncIsAsync) {
      incrementExpectedAwaits();
    }

    var returnValue;
    var promiseFollowed = DexiePromise.follow(function () {
      returnValue = scopeFunc.call(trans, trans);

      if (returnValue) {
        if (scopeFuncIsAsync) {
          var decrementor = decrementExpectedAwaits.bind(null, null);
          returnValue.then(decrementor, decrementor);
        } else if (typeof returnValue.next === 'function' && typeof returnValue.throw === 'function') {
          returnValue = awaitIterator(returnValue);
        }
      }
    }, zoneProps);
    return (returnValue && typeof returnValue.then === 'function' ? DexiePromise.resolve(returnValue).then(function (x) {
      return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
    }) : promiseFollowed.then(function () {
      return returnValue;
    })).then(function (x) {
      if (parentTransaction) trans._resolve();
      return trans._completion.then(function () {
        return x;
      });
    }).catch(function (e) {
      trans._reject(e);

      return rejection(e);
    });
  });
}

function pad(a, value, count) {
  var result = isArray(a) ? a.slice() : [a];

  for (var i = 0; i < count; ++i) {
    result.push(value);
  }

  return result;
}

function createVirtualIndexMiddleware(down) {
  return _assign(_assign({}, down), {
    table: function table(tableName) {
      var table = down.table(tableName);
      var schema = table.schema;
      var indexLookup = {};
      var allVirtualIndexes = [];

      function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
        var keyPathAlias = getKeyPathAlias(keyPath);
        var indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
        var keyLength = keyPath == null ? 0 : typeof keyPath === 'string' ? 1 : keyPath.length;
        var isVirtual = keyTail > 0;

        var virtualIndex = _assign(_assign({}, lowLevelIndex), {
          isVirtual: isVirtual,
          isPrimaryKey: !isVirtual && lowLevelIndex.isPrimaryKey,
          keyTail: keyTail,
          keyLength: keyLength,
          extractKey: getKeyExtractor(keyPath),
          unique: !isVirtual && lowLevelIndex.unique
        });

        indexList.push(virtualIndex);

        if (!virtualIndex.isPrimaryKey) {
          allVirtualIndexes.push(virtualIndex);
        }

        if (keyLength > 1) {
          var virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
          addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
        }

        indexList.sort(function (a, b) {
          return a.keyTail - b.keyTail;
        });
        return virtualIndex;
      }

      var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
      indexLookup[":id"] = [primaryKey];

      for (var _i = 0, _a = schema.indexes; _i < _a.length; _i++) {
        var index = _a[_i];
        addVirtualIndexes(index.keyPath, 0, index);
      }

      function findBestIndex(keyPath) {
        var result = indexLookup[getKeyPathAlias(keyPath)];
        return result && result[0];
      }

      function translateRange(range, keyTail) {
        return {
          type: range.type === 1 ? 2 : range.type,
          lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
          lowerOpen: true,
          upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
          upperOpen: true
        };
      }

      function translateRequest(req) {
        var index = req.query.index;
        return index.isVirtual ? _assign(_assign({}, req), {
          query: {
            index: index,
            range: translateRange(req.query.range, index.keyTail)
          }
        }) : req;
      }

      var result = _assign(_assign({}, table), {
        schema: _assign(_assign({}, schema), {
          primaryKey: primaryKey,
          indexes: allVirtualIndexes,
          getIndexByKeyPath: findBestIndex
        }),
        count: function count(req) {
          return table.count(translateRequest(req));
        },
        query: function query(req) {
          return table.query(translateRequest(req));
        },
        openCursor: function openCursor(req) {
          var _a = req.query.index,
              keyTail = _a.keyTail,
              isVirtual = _a.isVirtual,
              keyLength = _a.keyLength;
          if (!isVirtual) return table.openCursor(req);

          function createVirtualCursor(cursor) {
            function _continue(key) {
              key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(pad(cursor.key, req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
            }

            var virtualCursor = Object.create(cursor, {
              continue: {
                value: _continue
              },
              continuePrimaryKey: {
                value: function value(key, primaryKey) {
                  cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey);
                }
              },
              key: {
                get: function get() {
                  var key = cursor.key;
                  return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                }
              },
              value: {
                get: function get() {
                  return cursor.value;
                }
              }
            });
            return virtualCursor;
          }

          return table.openCursor(translateRequest(req)).then(function (cursor) {
            return cursor && createVirtualCursor(cursor);
          });
        }
      });

      return result;
    }
  });
}

var virtualIndexMiddleware = {
  stack: "dbcore",
  name: "VirtualIndexMiddleware",
  level: 1,
  create: createVirtualIndexMiddleware
};
var hooksMiddleware = {
  stack: "dbcore",
  name: "HooksMiddleware",
  level: 2,
  create: function create(downCore) {
    return _assign(_assign({}, downCore), {
      table: function table(tableName) {
        var downTable = downCore.table(tableName);
        var primaryKey = downTable.schema.primaryKey;

        var tableMiddleware = _assign(_assign({}, downTable), {
          mutate: function mutate(req) {
            var dxTrans = PSD.trans;
            var _a = dxTrans.table(tableName).hook,
                deleting = _a.deleting,
                creating = _a.creating,
                updating = _a.updating;

            switch (req.type) {
              case 'add':
                if (creating.fire === nop) break;
                return dxTrans._promise('readwrite', function () {
                  return addPutOrDelete(req);
                }, true);

              case 'put':
                if (creating.fire === nop && updating.fire === nop) break;
                return dxTrans._promise('readwrite', function () {
                  return addPutOrDelete(req);
                }, true);

              case 'delete':
                if (deleting.fire === nop) break;
                return dxTrans._promise('readwrite', function () {
                  return addPutOrDelete(req);
                }, true);

              case 'deleteRange':
                if (deleting.fire === nop) break;
                return dxTrans._promise('readwrite', function () {
                  return deleteRange(req);
                }, true);
            }

            return downTable.mutate(req);

            function addPutOrDelete(req) {
              var dxTrans = PSD.trans;
              var keys$$1 = req.keys || getEffectiveKeys(primaryKey, req);
              if (!keys$$1) throw new Error("Keys missing");
              req = req.type === 'add' || req.type === 'put' ? _assign(_assign({}, req), {
                keys: keys$$1,
                wantResults: true
              }) : _assign({}, req);
              if (req.type !== 'delete') req.values = __spreadArrays(req.values);
              if (req.keys) req.keys = __spreadArrays(req.keys);
              return getExistingValues(downTable, req, keys$$1).then(function (existingValues) {
                var contexts = keys$$1.map(function (key, i) {
                  var existingValue = existingValues[i];
                  var ctx = {
                    onerror: null,
                    onsuccess: null
                  };

                  if (req.type === 'delete') {
                    deleting.fire.call(ctx, key, existingValue, dxTrans);
                  } else if (req.type === 'add' || existingValue === undefined) {
                    var generatedPrimaryKey = creating.fire.call(ctx, key, req.values[i], dxTrans);

                    if (key == null && generatedPrimaryKey != null) {
                      key = generatedPrimaryKey;
                      req.keys[i] = key;

                      if (!primaryKey.outbound) {
                        setByKeyPath(req.values[i], primaryKey.keyPath, key);
                      }
                    }
                  } else {
                    var objectDiff = getObjectDiff(existingValue, req.values[i]);
                    var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans);

                    if (additionalChanges_1) {
                      var requestedValue_1 = req.values[i];
                      Object.keys(additionalChanges_1).forEach(function (keyPath) {
                        if (hasOwn(requestedValue_1, keyPath)) {
                          requestedValue_1[keyPath] = additionalChanges_1[keyPath];
                        } else {
                          setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                        }
                      });
                    }
                  }

                  return ctx;
                });
                return downTable.mutate(req).then(function (_a) {
                  var failures = _a.failures,
                      results = _a.results,
                      numFailures = _a.numFailures,
                      lastResult = _a.lastResult;

                  for (var i = 0; i < keys$$1.length; ++i) {
                    var primKey = results ? results[i] : keys$$1[i];
                    var ctx = contexts[i];

                    if (primKey == null) {
                      ctx.onerror && ctx.onerror(failures[i]);
                    } else {
                      ctx.onsuccess && ctx.onsuccess(req.type === 'put' && existingValues[i] ? req.values[i] : primKey);
                    }
                  }

                  return {
                    failures: failures,
                    results: results,
                    numFailures: numFailures,
                    lastResult: lastResult
                  };
                }).catch(function (error) {
                  contexts.forEach(function (ctx) {
                    return ctx.onerror && ctx.onerror(error);
                  });
                  return Promise.reject(error);
                });
              });
            }

            function deleteRange(req) {
              return deleteNextChunk(req.trans, req.range, 10000);
            }

            function deleteNextChunk(trans, range, limit) {
              return downTable.query({
                trans: trans,
                values: false,
                query: {
                  index: primaryKey,
                  range: range
                },
                limit: limit
              }).then(function (_a) {
                var result = _a.result;
                return addPutOrDelete({
                  type: 'delete',
                  keys: result,
                  trans: trans
                }).then(function (res) {
                  if (res.numFailures > 0) return Promise.reject(res.failures[0]);

                  if (result.length < limit) {
                    return {
                      failures: [],
                      numFailures: 0,
                      lastResult: undefined
                    };
                  } else {
                    return deleteNextChunk(trans, _assign(_assign({}, range), {
                      lower: result[result.length - 1],
                      lowerOpen: true
                    }), limit);
                  }
                });
              });
            }
          }
        });

        return tableMiddleware;
      }
    });
  }
};

var Dexie = function () {
  function Dexie(name, options) {
    var _this = this;

    this._middlewares = {};
    this.verno = 0;
    var deps = Dexie.dependencies;
    this._options = options = _assign({
      addons: Dexie.addons,
      autoOpen: true,
      indexedDB: deps.indexedDB,
      IDBKeyRange: deps.IDBKeyRange
    }, options);
    this._deps = {
      indexedDB: options.indexedDB,
      IDBKeyRange: options.IDBKeyRange
    };
    var addons = options.addons;
    this._dbSchema = {};
    this._versions = [];
    this._storeNames = [];
    this._allTables = {};
    this.idbdb = null;
    var state = {
      dbOpenError: null,
      isBeingOpened: false,
      onReadyBeingFired: null,
      openComplete: false,
      dbReadyResolve: nop,
      dbReadyPromise: null,
      cancelOpen: nop,
      openCanceller: null,
      autoSchema: true
    };
    state.dbReadyPromise = new DexiePromise(function (resolve) {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise(function (_, reject) {
      state.cancelOpen = reject;
    });
    this._state = state;
    this.name = name;
    this.on = Events(this, "populate", "blocked", "versionchange", {
      ready: [promisableChain, nop]
    });
    this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
      return function (subscriber, bSticky) {
        Dexie.vip(function () {
          var state = _this._state;

          if (state.openComplete) {
            if (!state.dbOpenError) DexiePromise.resolve().then(subscriber);
            if (bSticky) subscribe(subscriber);
          } else if (state.onReadyBeingFired) {
            state.onReadyBeingFired.push(subscriber);
            if (bSticky) subscribe(subscriber);
          } else {
            subscribe(subscriber);
            var db_1 = _this;
            if (!bSticky) subscribe(function unsubscribe() {
              db_1.on.ready.unsubscribe(subscriber);
              db_1.on.ready.unsubscribe(unsubscribe);
            });
          }
        });
      };
    });
    this.Collection = createCollectionConstructor(this);
    this.Table = createTableConstructor(this);
    this.Transaction = createTransactionConstructor(this);
    this.Version = createVersionConstructor(this);
    this.WhereClause = createWhereClauseConstructor(this);
    this.on("versionchange", function (ev) {
      if (ev.newVersion > 0) console.warn("Another connection wants to upgrade database '" + _this.name + "'. Closing db now to resume the upgrade.");else console.warn("Another connection wants to delete database '" + _this.name + "'. Closing db now to resume the delete request.");

      _this.close();
    });
    this.on("blocked", function (ev) {
      if (!ev.newVersion || ev.newVersion < ev.oldVersion) console.warn("Dexie.delete('" + _this.name + "') was blocked");else console.warn("Upgrade '" + _this.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
    });
    this._maxKey = getMaxKey(options.IDBKeyRange);

    this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) {
      return new _this.Transaction(mode, storeNames, dbschema, parentTransaction);
    };

    this._fireOnBlocked = function (ev) {
      _this.on("blocked").fire(ev);

      connections.filter(function (c) {
        return c.name === _this.name && c !== _this && !c._state.vcFired;
      }).map(function (c) {
        return c.on("versionchange").fire(ev);
      });
    };

    this.use(virtualIndexMiddleware);
    this.use(hooksMiddleware);
    addons.forEach(function (addon) {
      return addon(_this);
    });
  }

  Dexie.prototype.version = function (versionNumber) {
    if (isNaN(versionNumber) || versionNumber < 0.1) throw new exceptions.Type("Given version is not a positive number");
    versionNumber = Math.round(versionNumber * 10) / 10;
    if (this.idbdb || this._state.isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
    this.verno = Math.max(this.verno, versionNumber);
    var versions = this._versions;
    var versionInstance = versions.filter(function (v) {
      return v._cfg.version === versionNumber;
    })[0];
    if (versionInstance) return versionInstance;
    versionInstance = new this.Version(versionNumber);
    versions.push(versionInstance);
    versions.sort(lowerVersionFirst);
    versionInstance.stores({});
    this._state.autoSchema = false;
    return versionInstance;
  };

  Dexie.prototype._whenReady = function (fn) {
    var _this = this;

    return this._state.openComplete || PSD.letThrough ? fn() : new DexiePromise(function (resolve, reject) {
      if (!_this._state.isBeingOpened) {
        if (!_this._options.autoOpen) {
          reject(new exceptions.DatabaseClosed());
          return;
        }

        _this.open().catch(nop);
      }

      _this._state.dbReadyPromise.then(resolve, reject);
    }).then(fn);
  };

  Dexie.prototype.use = function (_a) {
    var stack = _a.stack,
        create = _a.create,
        level = _a.level,
        name = _a.name;
    if (name) this.unuse({
      stack: stack,
      name: name
    });
    var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
    middlewares.push({
      stack: stack,
      create: create,
      level: level == null ? 10 : level,
      name: name
    });
    middlewares.sort(function (a, b) {
      return a.level - b.level;
    });
    return this;
  };

  Dexie.prototype.unuse = function (_a) {
    var stack = _a.stack,
        name = _a.name,
        create = _a.create;

    if (stack && this._middlewares[stack]) {
      this._middlewares[stack] = this._middlewares[stack].filter(function (mw) {
        return create ? mw.create !== create : name ? mw.name !== name : false;
      });
    }

    return this;
  };

  Dexie.prototype.open = function () {
    return dexieOpen(this);
  };

  Dexie.prototype.close = function () {
    var idx = connections.indexOf(this),
        state = this._state;
    if (idx >= 0) connections.splice(idx, 1);

    if (this.idbdb) {
      try {
        this.idbdb.close();
      } catch (e) {}

      this.idbdb = null;
    }

    this._options.autoOpen = false;
    state.dbOpenError = new exceptions.DatabaseClosed();
    if (state.isBeingOpened) state.cancelOpen(state.dbOpenError);
    state.dbReadyPromise = new DexiePromise(function (resolve) {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise(function (_, reject) {
      state.cancelOpen = reject;
    });
  };

  Dexie.prototype.delete = function () {
    var _this = this;

    var hasArguments = arguments.length > 0;
    var state = this._state;
    return new DexiePromise(function (resolve, reject) {
      var doDelete = function doDelete() {
        _this.close();

        var req = _this._deps.indexedDB.deleteDatabase(_this.name);

        req.onsuccess = wrap(function () {
          databaseEnumerator.remove(_this.name);
          resolve();
        });
        req.onerror = eventRejectHandler(reject);
        req.onblocked = _this._fireOnBlocked;
      };

      if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");

      if (state.isBeingOpened) {
        state.dbReadyPromise.then(doDelete);
      } else {
        doDelete();
      }
    });
  };

  Dexie.prototype.backendDB = function () {
    return this.idbdb;
  };

  Dexie.prototype.isOpen = function () {
    return this.idbdb !== null;
  };

  Dexie.prototype.hasBeenClosed = function () {
    var dbOpenError = this._state.dbOpenError;
    return dbOpenError && dbOpenError.name === 'DatabaseClosed';
  };

  Dexie.prototype.hasFailed = function () {
    return this._state.dbOpenError !== null;
  };

  Dexie.prototype.dynamicallyOpened = function () {
    return this._state.autoSchema;
  };

  Object.defineProperty(Dexie.prototype, "tables", {
    get: function get() {
      var _this = this;

      return keys(this._allTables).map(function (name) {
        return _this._allTables[name];
      });
    },
    enumerable: true,
    configurable: true
  });

  Dexie.prototype.transaction = function () {
    var args = extractTransactionArgs.apply(this, arguments);
    return this._transaction.apply(this, args);
  };

  Dexie.prototype._transaction = function (mode, tables, scopeFunc) {
    var _this = this;

    var parentTransaction = PSD.trans;
    if (!parentTransaction || parentTransaction.db !== this || mode.indexOf('!') !== -1) parentTransaction = null;
    var onlyIfCompatible = mode.indexOf('?') !== -1;
    mode = mode.replace('!', '').replace('?', '');
    var idbMode, storeNames;

    try {
      storeNames = tables.map(function (table) {
        var storeName = table instanceof _this.Table ? table.name : table;
        if (typeof storeName !== 'string') throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return storeName;
      });
      if (mode == "r" || mode === READONLY) idbMode = READONLY;else if (mode == "rw" || mode == READWRITE) idbMode = READWRITE;else throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);

      if (parentTransaction) {
        if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
          if (onlyIfCompatible) {
            parentTransaction = null;
          } else throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
        }

        if (parentTransaction) {
          storeNames.forEach(function (storeName) {
            if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
              if (onlyIfCompatible) {
                parentTransaction = null;
              } else throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
            }
          });
        }

        if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
          parentTransaction = null;
        }
      }
    } catch (e) {
      return parentTransaction ? parentTransaction._promise(null, function (_, reject) {
        reject(e);
      }) : rejection(e);
    }

    var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
    return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function () {
      return _this._whenReady(enterTransaction);
    }) : this._whenReady(enterTransaction);
  };

  Dexie.prototype.table = function (tableName) {
    if (!hasOwn(this._allTables, tableName)) {
      throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
    }

    return this._allTables[tableName];
  };

  return Dexie;
}();

var Dexie$1 = Dexie;
props(Dexie$1, _assign(_assign({}, fullNameExceptions), {
  delete: function _delete(databaseName) {
    var db = new Dexie$1(databaseName);
    return db.delete();
  },
  exists: function exists(name) {
    return new Dexie$1(name, {
      addons: []
    }).open().then(function (db) {
      db.close();
      return true;
    }).catch('NoSuchDatabaseError', function () {
      return false;
    });
  },
  getDatabaseNames: function getDatabaseNames(cb) {
    return databaseEnumerator ? databaseEnumerator.getDatabaseNames().then(cb) : DexiePromise.resolve([]);
  },
  defineClass: function defineClass() {
    function Class(content) {
      extend(this, content);
    }

    return Class;
  },
  ignoreTransaction: function ignoreTransaction(scopeFunc) {
    return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
  },
  vip: vip,
  async: function async(generatorFn) {
    return function () {
      try {
        var rv = awaitIterator(generatorFn.apply(this, arguments));
        if (!rv || typeof rv.then !== 'function') return DexiePromise.resolve(rv);
        return rv;
      } catch (e) {
        return rejection(e);
      }
    };
  },
  spawn: function spawn(generatorFn, args, thiz) {
    try {
      var rv = awaitIterator(generatorFn.apply(thiz, args || []));
      if (!rv || typeof rv.then !== 'function') return DexiePromise.resolve(rv);
      return rv;
    } catch (e) {
      return rejection(e);
    }
  },
  currentTransaction: {
    get: function get() {
      return PSD.trans || null;
    }
  },
  waitFor: function waitFor(promiseOrFunction, optionalTimeout) {
    var promise = DexiePromise.resolve(typeof promiseOrFunction === 'function' ? Dexie$1.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 60000);
    return PSD.trans ? PSD.trans.waitFor(promise) : promise;
  },
  Promise: DexiePromise,
  debug: {
    get: function get() {
      return debug;
    },
    set: function set(value) {
      setDebug(value, value === 'dexie' ? function () {
        return true;
      } : dexieStackFrameFilter);
    }
  },
  derive: derive,
  extend: extend,
  props: props,
  override: override,
  Events: Events,
  getByKeyPath: getByKeyPath,
  setByKeyPath: setByKeyPath,
  delByKeyPath: delByKeyPath,
  shallowClone: shallowClone,
  deepClone: deepClone,
  getObjectDiff: getObjectDiff,
  asap: asap,
  minKey: minKey,
  addons: [],
  connections: connections,
  errnames: errnames,
  dependencies: function () {
    try {
      return {
        indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
        IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
      };
    } catch (e) {
      return {
        indexedDB: null,
        IDBKeyRange: null
      };
    }
  }(),
  semVer: DEXIE_VERSION,
  version: DEXIE_VERSION.split('.').map(function (n) {
    return parseInt(n);
  }).reduce(function (p, c, i) {
    return p + c / Math.pow(10, i * 2);
  }),
  default: Dexie$1,
  Dexie: Dexie$1
}));
Dexie$1.maxKey = getMaxKey(Dexie$1.dependencies.IDBKeyRange);
initDatabaseEnumerator(Dexie.dependencies.indexedDB);
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);

var luxon = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o) {
    var i = 0;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    i = o[Symbol.iterator]();
    return i.next.bind(i);
  } // these aren't really private, but nor are they really useful to document

  /**
   * @private
   */


  var LuxonError = /*#__PURE__*/function (_Error) {
    _inheritsLoose(LuxonError, _Error);

    function LuxonError() {
      return _Error.apply(this, arguments) || this;
    }

    return LuxonError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  /**
   * @private
   */


  var InvalidDateTimeError = /*#__PURE__*/function (_LuxonError) {
    _inheritsLoose(InvalidDateTimeError, _LuxonError);

    function InvalidDateTimeError(reason) {
      return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
    }

    return InvalidDateTimeError;
  }(LuxonError);
  /**
   * @private
   */


  var InvalidIntervalError = /*#__PURE__*/function (_LuxonError2) {
    _inheritsLoose(InvalidIntervalError, _LuxonError2);

    function InvalidIntervalError(reason) {
      return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
    }

    return InvalidIntervalError;
  }(LuxonError);
  /**
   * @private
   */


  var InvalidDurationError = /*#__PURE__*/function (_LuxonError3) {
    _inheritsLoose(InvalidDurationError, _LuxonError3);

    function InvalidDurationError(reason) {
      return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
    }

    return InvalidDurationError;
  }(LuxonError);
  /**
   * @private
   */


  var ConflictingSpecificationError = /*#__PURE__*/function (_LuxonError4) {
    _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

    function ConflictingSpecificationError() {
      return _LuxonError4.apply(this, arguments) || this;
    }

    return ConflictingSpecificationError;
  }(LuxonError);
  /**
   * @private
   */


  var InvalidUnitError = /*#__PURE__*/function (_LuxonError5) {
    _inheritsLoose(InvalidUnitError, _LuxonError5);

    function InvalidUnitError(unit) {
      return _LuxonError5.call(this, "Invalid unit " + unit) || this;
    }

    return InvalidUnitError;
  }(LuxonError);
  /**
   * @private
   */


  var InvalidArgumentError = /*#__PURE__*/function (_LuxonError6) {
    _inheritsLoose(InvalidArgumentError, _LuxonError6);

    function InvalidArgumentError() {
      return _LuxonError6.apply(this, arguments) || this;
    }

    return InvalidArgumentError;
  }(LuxonError);
  /**
   * @private
   */


  var ZoneIsAbstractError = /*#__PURE__*/function (_LuxonError7) {
    _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

    function ZoneIsAbstractError() {
      return _LuxonError7.call(this, "Zone is an abstract class") || this;
    }

    return ZoneIsAbstractError;
  }(LuxonError);
  /**
   * @private
   */


  var n = "numeric",
      s = "short",
      l = "long";
  var DATE_SHORT = {
    year: n,
    month: n,
    day: n
  };
  var DATE_MED = {
    year: n,
    month: s,
    day: n
  };
  var DATE_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s
  };
  var DATE_FULL = {
    year: n,
    month: l,
    day: n
  };
  var DATE_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l
  };
  var TIME_SIMPLE = {
    hour: n,
    minute: n
  };
  var TIME_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n
  };
  var TIME_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
  };
  var TIME_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
  };
  var TIME_24_SIMPLE = {
    hour: n,
    minute: n,
    hour12: false
  };
  /**
   * {@link toLocaleString}; format like '09:30:23', always 24-hour.
   */

  var TIME_24_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n,
    hour12: false
  };
  /**
   * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
   */

  var TIME_24_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hour12: false,
    timeZoneName: s
  };
  /**
   * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
   */

  var TIME_24_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hour12: false,
    timeZoneName: l
  };
  /**
   * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   */

  var DATETIME_SHORT = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n
  };
  /**
   * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   */

  var DATETIME_SHORT_WITH_SECONDS = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n,
    second: n
  };
  var DATETIME_MED = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n
  };
  var DATETIME_MED_WITH_SECONDS = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n,
    second: n
  };
  var DATETIME_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s,
    hour: n,
    minute: n
  };
  var DATETIME_FULL = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    timeZoneName: s
  };
  var DATETIME_FULL_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
  };
  var DATETIME_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    timeZoneName: l
  };
  var DATETIME_HUGE_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
  };
  /*
    This is just a junk drawer, containing anything used across multiple classes.
    Because Luxon is small(ish), this should stay small and we won't worry about splitting
    it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
  */

  /**
   * @private
   */
  // TYPES

  function isUndefined(o) {
    return typeof o === "undefined";
  }

  function isNumber(o) {
    return typeof o === "number";
  }

  function isInteger(o) {
    return typeof o === "number" && o % 1 === 0;
  }

  function isString(o) {
    return typeof o === "string";
  }

  function isDate(o) {
    return Object.prototype.toString.call(o) === "[object Date]";
  } // CAPABILITIES


  function hasIntl() {
    try {
      return typeof Intl !== "undefined" && Intl.DateTimeFormat;
    } catch (e) {
      return false;
    }
  }

  function hasFormatToParts() {
    return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
  }

  function hasRelative() {
    try {
      return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e) {
      return false;
    }
  } // OBJECTS AND ARRAYS


  function maybeArray(thing) {
    return Array.isArray(thing) ? thing : [thing];
  }

  function bestBy(arr, by, compare) {
    if (arr.length === 0) {
      return undefined;
    }

    return arr.reduce(function (best, next) {
      var pair = [by(next), next];

      if (!best) {
        return pair;
      } else if (compare(best[0], pair[0]) === best[0]) {
        return best;
      } else {
        return pair;
      }
    }, null)[1];
  }

  function pick(obj, keys) {
    return keys.reduce(function (a, k) {
      a[k] = obj[k];
      return a;
    }, {});
  }

  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  } // NUMBERS AND STRINGS


  function integerBetween(thing, bottom, top) {
    return isInteger(thing) && thing >= bottom && thing <= top;
  } // x % n but takes the sign of n instead of x


  function floorMod(x, n) {
    return x - n * Math.floor(x / n);
  }

  function padStart(input, n) {
    if (n === void 0) {
      n = 2;
    }

    var minus = input < 0 ? "-" : "";
    var target = minus ? input * -1 : input;
    var result;

    if (target.toString().length < n) {
      result = ("0".repeat(n) + target).slice(-n);
    } else {
      result = target.toString();
    }

    return "" + minus + result;
  }

  function parseInteger(string) {
    if (isUndefined(string) || string === null || string === "") {
      return undefined;
    } else {
      return parseInt(string, 10);
    }
  }

  function parseMillis(fraction) {
    // Return undefined (instead of 0) in these cases, where fraction is not set
    if (isUndefined(fraction) || fraction === null || fraction === "") {
      return undefined;
    } else {
      var f = parseFloat("0." + fraction) * 1000;
      return Math.floor(f);
    }
  }

  function roundTo(number, digits, towardZero) {
    if (towardZero === void 0) {
      towardZero = false;
    }

    var factor = Math.pow(10, digits),
        rounder = towardZero ? Math.trunc : Math.round;
    return rounder(number * factor) / factor;
  } // DATE BASICS


  function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }

  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  function daysInMonth(year, month) {
    var modMonth = floorMod(month - 1, 12) + 1,
        modYear = year + (month - modMonth) / 12;

    if (modMonth === 2) {
      return isLeapYear(modYear) ? 29 : 28;
    } else {
      return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
    }
  } // covert a calendar object to a local timestamp (epoch, but with the offset baked in)


  function objToLocalTS(obj) {
    var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

    if (obj.year < 100 && obj.year >= 0) {
      d = new Date(d);
      d.setUTCFullYear(d.getUTCFullYear() - 1900);
    }

    return +d;
  }

  function weeksInWeekYear(weekYear) {
    var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
        last = weekYear - 1,
        p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
    return p1 === 4 || p2 === 3 ? 53 : 52;
  }

  function untruncateYear(year) {
    if (year > 99) {
      return year;
    } else return year > 60 ? 1900 + year : 2000 + year;
  } // PARSING


  function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
    if (timeZone === void 0) {
      timeZone = null;
    }

    var date = new Date(ts),
        intlOpts = {
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };

    if (timeZone) {
      intlOpts.timeZone = timeZone;
    }

    var modified = Object.assign({
      timeZoneName: offsetFormat
    }, intlOpts),
        intl = hasIntl();

    if (intl && hasFormatToParts()) {
      var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
        return m.type.toLowerCase() === "timezonename";
      });
      return parsed ? parsed.value : null;
    } else if (intl) {
      // this probably doesn't work for all locales
      var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
          included = new Intl.DateTimeFormat(locale, modified).format(date),
          diffed = included.substring(without.length),
          trimmed = diffed.replace(/^[, \u200e]+/, "");
      return trimmed;
    } else {
      return null;
    }
  } // signedOffset('-5', '30') -> -330


  function signedOffset(offHourStr, offMinuteStr) {
    var offHour = parseInt(offHourStr, 10); // don't || this because we want to preserve -0

    if (Number.isNaN(offHour)) {
      offHour = 0;
    }

    var offMin = parseInt(offMinuteStr, 10) || 0,
        offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
    return offHour * 60 + offMinSigned;
  } // COERCION


  function asNumber(value) {
    var numericValue = Number(value);
    if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
    return numericValue;
  }

  function normalizeObject(obj, normalizer, nonUnitKeys) {
    var normalized = {};

    for (var u in obj) {
      if (hasOwnProperty(obj, u)) {
        if (nonUnitKeys.indexOf(u) >= 0) continue;
        var v = obj[u];
        if (v === undefined || v === null) continue;
        normalized[normalizer(u)] = asNumber(v);
      }
    }

    return normalized;
  }

  function formatOffset(offset, format) {
    var hours = Math.trunc(Math.abs(offset / 60)),
        minutes = Math.trunc(Math.abs(offset % 60)),
        sign = offset >= 0 ? "+" : "-";

    switch (format) {
      case "short":
        return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);

      case "narrow":
        return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");

      case "techie":
        return "" + sign + padStart(hours, 2) + padStart(minutes, 2);

      default:
        throw new RangeError("Value format " + format + " is out of range for property format");
    }
  }

  function timeObject(obj) {
    return pick(obj, ["hour", "minute", "second", "millisecond"]);
  }

  var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;

  function stringify(obj) {
    return JSON.stringify(obj, Object.keys(obj).sort());
  }
  /**
   * @private
   */


  var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

  function months(length) {
    switch (length) {
      case "narrow":
        return monthsNarrow;

      case "short":
        return monthsShort;

      case "long":
        return monthsLong;

      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

      case "2-digit":
        return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

      default:
        return null;
    }
  }

  var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];

  function weekdays(length) {
    switch (length) {
      case "narrow":
        return weekdaysNarrow;

      case "short":
        return weekdaysShort;

      case "long":
        return weekdaysLong;

      case "numeric":
        return ["1", "2", "3", "4", "5", "6", "7"];

      default:
        return null;
    }
  }

  var meridiems = ["AM", "PM"];
  var erasLong = ["Before Christ", "Anno Domini"];
  var erasShort = ["BC", "AD"];
  var erasNarrow = ["B", "A"];

  function eras(length) {
    switch (length) {
      case "narrow":
        return erasNarrow;

      case "short":
        return erasShort;

      case "long":
        return erasLong;

      default:
        return null;
    }
  }

  function meridiemForDateTime(dt) {
    return meridiems[dt.hour < 12 ? 0 : 1];
  }

  function weekdayForDateTime(dt, length) {
    return weekdays(length)[dt.weekday - 1];
  }

  function monthForDateTime(dt, length) {
    return months(length)[dt.month - 1];
  }

  function eraForDateTime(dt, length) {
    return eras(length)[dt.year < 0 ? 0 : 1];
  }

  function formatRelativeTime(unit, count, numeric, narrow) {
    if (numeric === void 0) {
      numeric = "always";
    }

    if (narrow === void 0) {
      narrow = false;
    }

    var units = {
      years: ["year", "yr."],
      quarters: ["quarter", "qtr."],
      months: ["month", "mo."],
      weeks: ["week", "wk."],
      days: ["day", "day", "days"],
      hours: ["hour", "hr."],
      minutes: ["minute", "min."],
      seconds: ["second", "sec."]
    };
    var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;

    if (numeric === "auto" && lastable) {
      var isDay = unit === "days";

      switch (count) {
        case 1:
          return isDay ? "tomorrow" : "next " + units[unit][0];

        case -1:
          return isDay ? "yesterday" : "last " + units[unit][0];

        case 0:
          return isDay ? "today" : "this " + units[unit][0];
      }
    }

    var isInPast = Object.is(count, -0) || count < 0,
        fmtValue = Math.abs(count),
        singular = fmtValue === 1,
        lilUnits = units[unit],
        fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
    return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
  }

  function formatString(knownFormat) {
    // these all have the offsets removed because we don't have access to them
    // without all the intl stuff this is backfilling
    var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
        key = stringify(filtered),
        dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

    switch (key) {
      case stringify(DATE_SHORT):
        return "M/d/yyyy";

      case stringify(DATE_MED):
        return "LLL d, yyyy";

      case stringify(DATE_MED_WITH_WEEKDAY):
        return "EEE, LLL d, yyyy";

      case stringify(DATE_FULL):
        return "LLLL d, yyyy";

      case stringify(DATE_HUGE):
        return "EEEE, LLLL d, yyyy";

      case stringify(TIME_SIMPLE):
        return "h:mm a";

      case stringify(TIME_WITH_SECONDS):
        return "h:mm:ss a";

      case stringify(TIME_WITH_SHORT_OFFSET):
        return "h:mm a";

      case stringify(TIME_WITH_LONG_OFFSET):
        return "h:mm a";

      case stringify(TIME_24_SIMPLE):
        return "HH:mm";

      case stringify(TIME_24_WITH_SECONDS):
        return "HH:mm:ss";

      case stringify(TIME_24_WITH_SHORT_OFFSET):
        return "HH:mm";

      case stringify(TIME_24_WITH_LONG_OFFSET):
        return "HH:mm";

      case stringify(DATETIME_SHORT):
        return "M/d/yyyy, h:mm a";

      case stringify(DATETIME_MED):
        return "LLL d, yyyy, h:mm a";

      case stringify(DATETIME_FULL):
        return "LLLL d, yyyy, h:mm a";

      case stringify(DATETIME_HUGE):
        return dateTimeHuge;

      case stringify(DATETIME_SHORT_WITH_SECONDS):
        return "M/d/yyyy, h:mm:ss a";

      case stringify(DATETIME_MED_WITH_SECONDS):
        return "LLL d, yyyy, h:mm:ss a";

      case stringify(DATETIME_MED_WITH_WEEKDAY):
        return "EEE, d LLL yyyy, h:mm a";

      case stringify(DATETIME_FULL_WITH_SECONDS):
        return "LLLL d, yyyy, h:mm:ss a";

      case stringify(DATETIME_HUGE_WITH_SECONDS):
        return "EEEE, LLLL d, yyyy, h:mm:ss a";

      default:
        return dateTimeHuge;
    }
  }

  function stringifyTokens(splits, tokenToString) {
    var s = "";

    for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done;) {
      var token = _step.value;

      if (token.literal) {
        s += token.val;
      } else {
        s += tokenToString(token.val);
      }
    }

    return s;
  }

  var _macroTokenToFormatOpts = {
    D: DATE_SHORT,
    DD: DATE_MED,
    DDD: DATE_FULL,
    DDDD: DATE_HUGE,
    t: TIME_SIMPLE,
    tt: TIME_WITH_SECONDS,
    ttt: TIME_WITH_SHORT_OFFSET,
    tttt: TIME_WITH_LONG_OFFSET,
    T: TIME_24_SIMPLE,
    TT: TIME_24_WITH_SECONDS,
    TTT: TIME_24_WITH_SHORT_OFFSET,
    TTTT: TIME_24_WITH_LONG_OFFSET,
    f: DATETIME_SHORT,
    ff: DATETIME_MED,
    fff: DATETIME_FULL,
    ffff: DATETIME_HUGE,
    F: DATETIME_SHORT_WITH_SECONDS,
    FF: DATETIME_MED_WITH_SECONDS,
    FFF: DATETIME_FULL_WITH_SECONDS,
    FFFF: DATETIME_HUGE_WITH_SECONDS
  };
  /**
   * @private
   */

  var Formatter = /*#__PURE__*/function () {
    Formatter.create = function create(locale, opts) {
      if (opts === void 0) {
        opts = {};
      }

      return new Formatter(locale, opts);
    };

    Formatter.parseFormat = function parseFormat(fmt) {
      var current = null,
          currentFull = "",
          bracketed = false;
      var splits = [];

      for (var i = 0; i < fmt.length; i++) {
        var c = fmt.charAt(i);

        if (c === "'") {
          if (currentFull.length > 0) {
            splits.push({
              literal: bracketed,
              val: currentFull
            });
          }

          current = null;
          currentFull = "";
          bracketed = !bracketed;
        } else if (bracketed) {
          currentFull += c;
        } else if (c === current) {
          currentFull += c;
        } else {
          if (currentFull.length > 0) {
            splits.push({
              literal: false,
              val: currentFull
            });
          }

          currentFull = c;
          current = c;
        }
      }

      if (currentFull.length > 0) {
        splits.push({
          literal: bracketed,
          val: currentFull
        });
      }

      return splits;
    };

    Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
      return _macroTokenToFormatOpts[token];
    };

    function Formatter(locale, formatOpts) {
      this.opts = formatOpts;
      this.loc = locale;
      this.systemLoc = null;
    }

    var _proto = Formatter.prototype;

    _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
      if (this.systemLoc === null) {
        this.systemLoc = this.loc.redefaultToSystem();
      }

      var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.format();
    };

    _proto.formatDateTime = function formatDateTime(dt, opts) {
      if (opts === void 0) {
        opts = {};
      }

      var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.format();
    };

    _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
      if (opts === void 0) {
        opts = {};
      }

      var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.formatToParts();
    };

    _proto.resolvedOptions = function resolvedOptions(dt, opts) {
      if (opts === void 0) {
        opts = {};
      }

      var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
      return df.resolvedOptions();
    };

    _proto.num = function num(n, p) {
      if (p === void 0) {
        p = 0;
      } // we get some perf out of doing this here, annoyingly


      if (this.opts.forceSimple) {
        return padStart(n, p);
      }

      var opts = Object.assign({}, this.opts);

      if (p > 0) {
        opts.padTo = p;
      }

      return this.loc.numberFormatter(opts).format(n);
    };

    _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
      var _this = this;

      var knownEnglish = this.loc.listingMode() === "en",
          useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && hasFormatToParts(),
          string = function string(opts, extract) {
        return _this.loc.extract(dt, opts, extract);
      },
          formatOffset = function formatOffset(opts) {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }

        return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
      },
          meridiem = function meridiem() {
        return knownEnglish ? meridiemForDateTime(dt) : string({
          hour: "numeric",
          hour12: true
        }, "dayperiod");
      },
          month = function month(length, standalone) {
        return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
          month: length
        } : {
          month: length,
          day: "numeric"
        }, "month");
      },
          weekday = function weekday(length, standalone) {
        return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
          weekday: length
        } : {
          weekday: length,
          month: "long",
          day: "numeric"
        }, "weekday");
      },
          maybeMacro = function maybeMacro(token) {
        var formatOpts = Formatter.macroTokenToFormatOpts(token);

        if (formatOpts) {
          return _this.formatWithSystemDefault(dt, formatOpts);
        } else {
          return token;
        }
      },
          era = function era(length) {
        return knownEnglish ? eraForDateTime(dt, length) : string({
          era: length
        }, "era");
      },
          tokenToString = function tokenToString(token) {
        // Where possible: http://cldr.unicode.org/translation/date-time-1/date-time#TOC-Standalone-vs.-Format-Styles
        switch (token) {
          // ms
          case "S":
            return _this.num(dt.millisecond);

          case "u": // falls through

          case "SSS":
            return _this.num(dt.millisecond, 3);
          // seconds

          case "s":
            return _this.num(dt.second);

          case "ss":
            return _this.num(dt.second, 2);
          // minutes

          case "m":
            return _this.num(dt.minute);

          case "mm":
            return _this.num(dt.minute, 2);
          // hours

          case "h":
            return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

          case "hh":
            return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

          case "H":
            return _this.num(dt.hour);

          case "HH":
            return _this.num(dt.hour, 2);
          // offset

          case "Z":
            // like +6
            return formatOffset({
              format: "narrow",
              allowZ: _this.opts.allowZ
            });

          case "ZZ":
            // like +06:00
            return formatOffset({
              format: "short",
              allowZ: _this.opts.allowZ
            });

          case "ZZZ":
            // like +0600
            return formatOffset({
              format: "techie",
              allowZ: _this.opts.allowZ
            });

          case "ZZZZ":
            // like EST
            return dt.zone.offsetName(dt.ts, {
              format: "short",
              locale: _this.loc.locale
            });

          case "ZZZZZ":
            // like Eastern Standard Time
            return dt.zone.offsetName(dt.ts, {
              format: "long",
              locale: _this.loc.locale
            });
          // zone

          case "z":
            // like America/New_York
            return dt.zoneName;
          // meridiems

          case "a":
            return meridiem();
          // dates

          case "d":
            return useDateTimeFormatter ? string({
              day: "numeric"
            }, "day") : _this.num(dt.day);

          case "dd":
            return useDateTimeFormatter ? string({
              day: "2-digit"
            }, "day") : _this.num(dt.day, 2);
          // weekdays - standalone

          case "c":
            // like 1
            return _this.num(dt.weekday);

          case "ccc":
            // like 'Tues'
            return weekday("short", true);

          case "cccc":
            // like 'Tuesday'
            return weekday("long", true);

          case "ccccc":
            // like 'T'
            return weekday("narrow", true);
          // weekdays - format

          case "E":
            // like 1
            return _this.num(dt.weekday);

          case "EEE":
            // like 'Tues'
            return weekday("short", false);

          case "EEEE":
            // like 'Tuesday'
            return weekday("long", false);

          case "EEEEE":
            // like 'T'
            return weekday("narrow", false);
          // months - standalone

          case "L":
            // like 1
            return useDateTimeFormatter ? string({
              month: "numeric",
              day: "numeric"
            }, "month") : _this.num(dt.month);

          case "LL":
            // like 01, doesn't seem to work
            return useDateTimeFormatter ? string({
              month: "2-digit",
              day: "numeric"
            }, "month") : _this.num(dt.month, 2);

          case "LLL":
            // like Jan
            return month("short", true);

          case "LLLL":
            // like January
            return month("long", true);

          case "LLLLL":
            // like J
            return month("narrow", true);
          // months - format

          case "M":
            // like 1
            return useDateTimeFormatter ? string({
              month: "numeric"
            }, "month") : _this.num(dt.month);

          case "MM":
            // like 01
            return useDateTimeFormatter ? string({
              month: "2-digit"
            }, "month") : _this.num(dt.month, 2);

          case "MMM":
            // like Jan
            return month("short", false);

          case "MMMM":
            // like January
            return month("long", false);

          case "MMMMM":
            // like J
            return month("narrow", false);
          // years

          case "y":
            // like 2014
            return useDateTimeFormatter ? string({
              year: "numeric"
            }, "year") : _this.num(dt.year);

          case "yy":
            // like 14
            return useDateTimeFormatter ? string({
              year: "2-digit"
            }, "year") : _this.num(dt.year.toString().slice(-2), 2);

          case "yyyy":
            // like 0012
            return useDateTimeFormatter ? string({
              year: "numeric"
            }, "year") : _this.num(dt.year, 4);

          case "yyyyyy":
            // like 000012
            return useDateTimeFormatter ? string({
              year: "numeric"
            }, "year") : _this.num(dt.year, 6);
          // eras

          case "G":
            // like AD
            return era("short");

          case "GG":
            // like Anno Domini
            return era("long");

          case "GGGGG":
            return era("narrow");

          case "kk":
            return _this.num(dt.weekYear.toString().slice(-2), 2);

          case "kkkk":
            return _this.num(dt.weekYear, 4);

          case "W":
            return _this.num(dt.weekNumber);

          case "WW":
            return _this.num(dt.weekNumber, 2);

          case "o":
            return _this.num(dt.ordinal);

          case "ooo":
            return _this.num(dt.ordinal, 3);

          case "q":
            // like 1
            return _this.num(dt.quarter);

          case "qq":
            // like 01
            return _this.num(dt.quarter, 2);

          case "X":
            return _this.num(Math.floor(dt.ts / 1000));

          case "x":
            return _this.num(dt.ts);

          default:
            return maybeMacro(token);
        }
      };

      return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
    };

    _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
      var _this2 = this;

      var tokenToField = function tokenToField(token) {
        switch (token[0]) {
          case "S":
            return "millisecond";

          case "s":
            return "second";

          case "m":
            return "minute";

          case "h":
            return "hour";

          case "d":
            return "day";

          case "M":
            return "month";

          case "y":
            return "year";

          default:
            return null;
        }
      },
          tokenToString = function tokenToString(lildur) {
        return function (token) {
          var mapped = tokenToField(token);

          if (mapped) {
            return _this2.num(lildur.get(mapped), token.length);
          } else {
            return token;
          }
        };
      },
          tokens = Formatter.parseFormat(fmt),
          realTokens = tokens.reduce(function (found, _ref) {
        var literal = _ref.literal,
            val = _ref.val;
        return literal ? found : found.concat(val);
      }, []),
          collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
        return t;
      }));

      return stringifyTokens(tokens, tokenToString(collapsed));
    };

    return Formatter;
  }();

  var Invalid = /*#__PURE__*/function () {
    function Invalid(reason, explanation) {
      this.reason = reason;
      this.explanation = explanation;
    }

    var _proto = Invalid.prototype;

    _proto.toMessage = function toMessage() {
      if (this.explanation) {
        return this.reason + ": " + this.explanation;
      } else {
        return this.reason;
      }
    };

    return Invalid;
  }();
  /**
   * @interface
   */


  var Zone = /*#__PURE__*/function () {
    function Zone() {}

    var _proto = Zone.prototype;
    /**
     * Returns the offset's common name (such as EST) at the specified timestamp
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the name
     * @param {Object} opts - Options to affect the format
     * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
     * @param {string} opts.locale - What locale to return the offset name in.
     * @return {string}
     */

    _proto.offsetName = function offsetName(ts, opts) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns the offset's value as a string
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to get the offset
     * @param {string} format - What style of offset to return.
     *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
     * @return {string}
     */
    ;

    _proto.formatOffset = function formatOffset(ts, format) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Return the offset in minutes for this zone at the specified timestamp.
     * @abstract
     * @param {number} ts - Epoch milliseconds for which to compute the offset
     * @return {number}
     */
    ;

    _proto.offset = function offset(ts) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Return whether this Zone is equal to another zone
     * @abstract
     * @param {Zone} otherZone - the zone to compare
     * @return {boolean}
     */
    ;

    _proto.equals = function equals(otherZone) {
      throw new ZoneIsAbstractError();
    }
    /**
     * Return whether this Zone is valid.
     * @abstract
     * @type {boolean}
     */
    ;

    _createClass(Zone, [{
      key: "type",

      /**
       * The type of zone
       * @abstract
       * @type {string}
       */
      get: function get() {
        throw new ZoneIsAbstractError();
      }
      /**
       * The name of this zone.
       * @abstract
       * @type {string}
       */

    }, {
      key: "name",
      get: function get() {
        throw new ZoneIsAbstractError();
      }
      /**
       * Returns whether the offset is known to be fixed for the whole year.
       * @abstract
       * @type {boolean}
       */

    }, {
      key: "universal",
      get: function get() {
        throw new ZoneIsAbstractError();
      }
    }, {
      key: "isValid",
      get: function get() {
        throw new ZoneIsAbstractError();
      }
    }]);

    return Zone;
  }();

  var singleton = null;
  /**
   * Represents the local zone for this JavaScript environment.
   * @implements {Zone}
   */

  var LocalZone = /*#__PURE__*/function (_Zone) {
    _inheritsLoose(LocalZone, _Zone);

    function LocalZone() {
      return _Zone.apply(this, arguments) || this;
    }

    var _proto = LocalZone.prototype;
    /** @override **/

    _proto.offsetName = function offsetName(ts, _ref) {
      var format = _ref.format,
          locale = _ref.locale;
      return parseZoneInfo(ts, format, locale);
    }
    /** @override **/
    ;

    _proto.formatOffset = function formatOffset$1(ts, format) {
      return formatOffset(this.offset(ts), format);
    }
    /** @override **/
    ;

    _proto.offset = function offset(ts) {
      return -new Date(ts).getTimezoneOffset();
    }
    /** @override **/
    ;

    _proto.equals = function equals(otherZone) {
      return otherZone.type === "local";
    }
    /** @override **/
    ;

    _createClass(LocalZone, [{
      key: "type",

      /** @override **/
      get: function get() {
        return "local";
      }
      /** @override **/

    }, {
      key: "name",
      get: function get() {
        if (hasIntl()) {
          return new Intl.DateTimeFormat().resolvedOptions().timeZone;
        } else return "local";
      }
      /** @override **/

    }, {
      key: "universal",
      get: function get() {
        return false;
      }
    }, {
      key: "isValid",
      get: function get() {
        return true;
      }
    }], [{
      key: "instance",

      /**
       * Get a singleton instance of the local zone
       * @return {LocalZone}
       */
      get: function get() {
        if (singleton === null) {
          singleton = new LocalZone();
        }

        return singleton;
      }
    }]);

    return LocalZone;
  }(Zone);

  var matchingRegex = RegExp("^" + ianaRegex.source + "$");
  var dtfCache = {};

  function makeDTF(zone) {
    if (!dtfCache[zone]) {
      dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
        hour12: false,
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    }

    return dtfCache[zone];
  }

  var typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
  };

  function hackyOffset(dtf, date) {
    var formatted = dtf.format(date).replace(/\u200E/g, ""),
        parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
        fMonth = parsed[1],
        fDay = parsed[2],
        fYear = parsed[3],
        fHour = parsed[4],
        fMinute = parsed[5],
        fSecond = parsed[6];
    return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
  }

  function partsOffset(dtf, date) {
    var formatted = dtf.formatToParts(date),
        filled = [];

    for (var i = 0; i < formatted.length; i++) {
      var _formatted$i = formatted[i],
          type = _formatted$i.type,
          value = _formatted$i.value,
          pos = typeToPos[type];

      if (!isUndefined(pos)) {
        filled[pos] = parseInt(value, 10);
      }
    }

    return filled;
  }

  var ianaZoneCache = {};
  /**
   * A zone identified by an IANA identifier, like America/New_York
   * @implements {Zone}
   */

  var IANAZone = /*#__PURE__*/function (_Zone) {
    _inheritsLoose(IANAZone, _Zone);
    /**
     * @param {string} name - Zone name
     * @return {IANAZone}
     */


    IANAZone.create = function create(name) {
      if (!ianaZoneCache[name]) {
        ianaZoneCache[name] = new IANAZone(name);
      }

      return ianaZoneCache[name];
    }
    /**
     * Reset local caches. Should only be necessary in testing scenarios.
     * @return {void}
     */
    ;

    IANAZone.resetCache = function resetCache() {
      ianaZoneCache = {};
      dtfCache = {};
    }
    /**
     * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
     * @param {string} s - The string to check validity on
     * @example IANAZone.isValidSpecifier("America/New_York") //=> true
     * @example IANAZone.isValidSpecifier("Fantasia/Castle") //=> true
     * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
     * @return {boolean}
     */
    ;

    IANAZone.isValidSpecifier = function isValidSpecifier(s) {
      return !!(s && s.match(matchingRegex));
    }
    /**
     * Returns whether the provided string identifies a real zone
     * @param {string} zone - The string to check
     * @example IANAZone.isValidZone("America/New_York") //=> true
     * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
     * @example IANAZone.isValidZone("Sport~~blorp") //=> false
     * @return {boolean}
     */
    ;

    IANAZone.isValidZone = function isValidZone(zone) {
      try {
        new Intl.DateTimeFormat("en-US", {
          timeZone: zone
        }).format();
        return true;
      } catch (e) {
        return false;
      }
    } // Etc/GMT+8 -> -480

    /** @ignore */
    ;

    IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
      if (specifier) {
        var match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);

        if (match) {
          return -60 * parseInt(match[1]);
        }
      }

      return null;
    };

    function IANAZone(name) {
      var _this;

      _this = _Zone.call(this) || this;
      /** @private **/

      _this.zoneName = name;
      /** @private **/

      _this.valid = IANAZone.isValidZone(name);
      return _this;
    }
    /** @override **/


    var _proto = IANAZone.prototype;
    /** @override **/

    _proto.offsetName = function offsetName(ts, _ref) {
      var format = _ref.format,
          locale = _ref.locale;
      return parseZoneInfo(ts, format, locale, this.name);
    }
    /** @override **/
    ;

    _proto.formatOffset = function formatOffset$1(ts, format) {
      return formatOffset(this.offset(ts), format);
    }
    /** @override **/
    ;

    _proto.offset = function offset(ts) {
      var date = new Date(ts),
          dtf = makeDTF(this.name),
          _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
          year = _ref2[0],
          month = _ref2[1],
          day = _ref2[2],
          hour = _ref2[3],
          minute = _ref2[4],
          second = _ref2[5],
          adjustedHour = hour === 24 ? 0 : hour;

      var asUTC = objToLocalTS({
        year: year,
        month: month,
        day: day,
        hour: adjustedHour,
        minute: minute,
        second: second,
        millisecond: 0
      });
      var asTS = +date;
      var over = asTS % 1000;
      asTS -= over >= 0 ? over : 1000 + over;
      return (asUTC - asTS) / (60 * 1000);
    }
    /** @override **/
    ;

    _proto.equals = function equals(otherZone) {
      return otherZone.type === "iana" && otherZone.name === this.name;
    }
    /** @override **/
    ;

    _createClass(IANAZone, [{
      key: "type",
      get: function get() {
        return "iana";
      }
      /** @override **/

    }, {
      key: "name",
      get: function get() {
        return this.zoneName;
      }
      /** @override **/

    }, {
      key: "universal",
      get: function get() {
        return false;
      }
    }, {
      key: "isValid",
      get: function get() {
        return this.valid;
      }
    }]);

    return IANAZone;
  }(Zone);

  var singleton$1 = null;
  /**
   * A zone with a fixed offset (meaning no DST)
   * @implements {Zone}
   */

  var FixedOffsetZone = /*#__PURE__*/function (_Zone) {
    _inheritsLoose(FixedOffsetZone, _Zone);
    /**
     * Get an instance with a specified offset
     * @param {number} offset - The offset in minutes
     * @return {FixedOffsetZone}
     */


    FixedOffsetZone.instance = function instance(offset) {
      return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
    }
    /**
     * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
     * @param {string} s - The offset string to parse
     * @example FixedOffsetZone.parseSpecifier("UTC+6")
     * @example FixedOffsetZone.parseSpecifier("UTC+06")
     * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
     * @return {FixedOffsetZone}
     */
    ;

    FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
      if (s) {
        var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

        if (r) {
          return new FixedOffsetZone(signedOffset(r[1], r[2]));
        }
      }

      return null;
    };

    _createClass(FixedOffsetZone, null, [{
      key: "utcInstance",

      /**
       * Get a singleton instance of UTC
       * @return {FixedOffsetZone}
       */
      get: function get() {
        if (singleton$1 === null) {
          singleton$1 = new FixedOffsetZone(0);
        }

        return singleton$1;
      }
    }]);

    function FixedOffsetZone(offset) {
      var _this;

      _this = _Zone.call(this) || this;
      /** @private **/

      _this.fixed = offset;
      return _this;
    }
    /** @override **/


    var _proto = FixedOffsetZone.prototype;
    /** @override **/

    _proto.offsetName = function offsetName() {
      return this.name;
    }
    /** @override **/
    ;

    _proto.formatOffset = function formatOffset$1(ts, format) {
      return formatOffset(this.fixed, format);
    }
    /** @override **/
    ;
    /** @override **/


    _proto.offset = function offset() {
      return this.fixed;
    }
    /** @override **/
    ;

    _proto.equals = function equals(otherZone) {
      return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    }
    /** @override **/
    ;

    _createClass(FixedOffsetZone, [{
      key: "type",
      get: function get() {
        return "fixed";
      }
      /** @override **/

    }, {
      key: "name",
      get: function get() {
        return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
      }
    }, {
      key: "universal",
      get: function get() {
        return true;
      }
    }, {
      key: "isValid",
      get: function get() {
        return true;
      }
    }]);

    return FixedOffsetZone;
  }(Zone);
  /**
   * A zone that failed to parse. You should never need to instantiate this.
   * @implements {Zone}
   */


  var InvalidZone = /*#__PURE__*/function (_Zone) {
    _inheritsLoose(InvalidZone, _Zone);

    function InvalidZone(zoneName) {
      var _this;

      _this = _Zone.call(this) || this;
      /**  @private */

      _this.zoneName = zoneName;
      return _this;
    }
    /** @override **/


    var _proto = InvalidZone.prototype;
    /** @override **/

    _proto.offsetName = function offsetName() {
      return null;
    }
    /** @override **/
    ;

    _proto.formatOffset = function formatOffset() {
      return "";
    }
    /** @override **/
    ;

    _proto.offset = function offset() {
      return NaN;
    }
    /** @override **/
    ;

    _proto.equals = function equals() {
      return false;
    }
    /** @override **/
    ;

    _createClass(InvalidZone, [{
      key: "type",
      get: function get() {
        return "invalid";
      }
      /** @override **/

    }, {
      key: "name",
      get: function get() {
        return this.zoneName;
      }
      /** @override **/

    }, {
      key: "universal",
      get: function get() {
        return false;
      }
    }, {
      key: "isValid",
      get: function get() {
        return false;
      }
    }]);

    return InvalidZone;
  }(Zone);
  /**
   * @private
   */


  function normalizeZone(input, defaultZone) {
    var offset;

    if (isUndefined(input) || input === null) {
      return defaultZone;
    } else if (input instanceof Zone) {
      return input;
    } else if (isString(input)) {
      var lowered = input.toLowerCase();
      if (lowered === "local") return defaultZone;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
        // handle Etc/GMT-4, which V8 chokes on
        return FixedOffsetZone.instance(offset);
      } else if (IANAZone.isValidSpecifier(lowered)) return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
    } else if (isNumber(input)) {
      return FixedOffsetZone.instance(input);
    } else if (_typeof(input) === "object" && input.offset && typeof input.offset === "number") {
      // This is dumb, but the instanceof check above doesn't seem to really work
      // so we're duck checking it
      return input;
    } else {
      return new InvalidZone(input);
    }
  }

  var now = function now() {
    return Date.now();
  },
      defaultZone = null,
      // not setting this directly to LocalZone.instance bc loading order issues
  defaultLocale = null,
      defaultNumberingSystem = null,
      defaultOutputCalendar = null,
      throwOnInvalid = false;
  /**
   * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
   */


  var Settings = /*#__PURE__*/function () {
    function Settings() {}
    /**
     * Reset Luxon's global caches. Should only be necessary in testing scenarios.
     * @return {void}
     */


    Settings.resetCaches = function resetCaches() {
      Locale.resetCache();
      IANAZone.resetCache();
    };

    _createClass(Settings, null, [{
      key: "now",

      /**
       * Get the callback for returning the current timestamp.
       * @type {function}
       */
      get: function get() {
        return now;
      }
      /**
       * Set the callback for returning the current timestamp.
       * The function should return a number, which will be interpreted as an Epoch millisecond count
       * @type {function}
       * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
       * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
       */
      ,
      set: function set(n) {
        now = n;
      }
      /**
       * Get the default time zone to create DateTimes in.
       * @type {string}
       */

    }, {
      key: "defaultZoneName",
      get: function get() {
        return Settings.defaultZone.name;
      }
      /**
       * Set the default time zone to create DateTimes in. Does not affect existing instances.
       * @type {string}
       */
      ,
      set: function set(z) {
        if (!z) {
          defaultZone = null;
        } else {
          defaultZone = normalizeZone(z);
        }
      }
      /**
       * Get the default time zone object to create DateTimes in. Does not affect existing instances.
       * @type {Zone}
       */

    }, {
      key: "defaultZone",
      get: function get() {
        return defaultZone || LocalZone.instance;
      }
      /**
       * Get the default locale to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */

    }, {
      key: "defaultLocale",
      get: function get() {
        return defaultLocale;
      }
      /**
       * Set the default locale to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      ,
      set: function set(locale) {
        defaultLocale = locale;
      }
      /**
       * Get the default numbering system to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */

    }, {
      key: "defaultNumberingSystem",
      get: function get() {
        return defaultNumberingSystem;
      }
      /**
       * Set the default numbering system to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      ,
      set: function set(numberingSystem) {
        defaultNumberingSystem = numberingSystem;
      }
      /**
       * Get the default output calendar to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */

    }, {
      key: "defaultOutputCalendar",
      get: function get() {
        return defaultOutputCalendar;
      }
      /**
       * Set the default output calendar to create DateTimes with. Does not affect existing instances.
       * @type {string}
       */
      ,
      set: function set(outputCalendar) {
        defaultOutputCalendar = outputCalendar;
      }
      /**
       * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
       * @type {boolean}
       */

    }, {
      key: "throwOnInvalid",
      get: function get() {
        return throwOnInvalid;
      }
      /**
       * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
       * @type {boolean}
       */
      ,
      set: function set(t) {
        throwOnInvalid = t;
      }
    }]);

    return Settings;
  }();

  var intlDTCache = {};

  function getCachedDTF(locString, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var key = JSON.stringify([locString, opts]);
    var dtf = intlDTCache[key];

    if (!dtf) {
      dtf = new Intl.DateTimeFormat(locString, opts);
      intlDTCache[key] = dtf;
    }

    return dtf;
  }

  var intlNumCache = {};

  function getCachedINF(locString, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var key = JSON.stringify([locString, opts]);
    var inf = intlNumCache[key];

    if (!inf) {
      inf = new Intl.NumberFormat(locString, opts);
      intlNumCache[key] = inf;
    }

    return inf;
  }

  var intlRelCache = {};

  function getCachedRTF(locString, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _opts = opts,
        base = _opts.base,
        cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, ["base"]); // exclude `base` from the options


    var key = JSON.stringify([locString, cacheKeyOpts]);
    var inf = intlRelCache[key];

    if (!inf) {
      inf = new Intl.RelativeTimeFormat(locString, opts);
      intlRelCache[key] = inf;
    }

    return inf;
  }

  var sysLocaleCache = null;

  function systemLocale() {
    if (sysLocaleCache) {
      return sysLocaleCache;
    } else if (hasIntl()) {
      var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

      sysLocaleCache = !computedSys || computedSys === "und" ? "en-US" : computedSys;
      return sysLocaleCache;
    } else {
      sysLocaleCache = "en-US";
      return sysLocaleCache;
    }
  }

  function parseLocaleString(localeStr) {
    // I really want to avoid writing a BCP 47 parser
    // see, e.g. https://github.com/wooorm/bcp-47
    // Instead, we'll do this:
    // a) if the string has no -u extensions, just leave it alone
    // b) if it does, use Intl to resolve everything
    // c) if Intl fails, try again without the -u
    var uIndex = localeStr.indexOf("-u-");

    if (uIndex === -1) {
      return [localeStr];
    } else {
      var options;
      var smaller = localeStr.substring(0, uIndex);

      try {
        options = getCachedDTF(localeStr).resolvedOptions();
      } catch (e) {
        options = getCachedDTF(smaller).resolvedOptions();
      }

      var _options = options,
          numberingSystem = _options.numberingSystem,
          calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

      return [smaller, numberingSystem, calendar];
    }
  }

  function intlConfigString(localeStr, numberingSystem, outputCalendar) {
    if (hasIntl()) {
      if (outputCalendar || numberingSystem) {
        localeStr += "-u";

        if (outputCalendar) {
          localeStr += "-ca-" + outputCalendar;
        }

        if (numberingSystem) {
          localeStr += "-nu-" + numberingSystem;
        }

        return localeStr;
      } else {
        return localeStr;
      }
    } else {
      return [];
    }
  }

  function mapMonths(f) {
    var ms = [];

    for (var i = 1; i <= 12; i++) {
      var dt = DateTime.utc(2016, i, 1);
      ms.push(f(dt));
    }

    return ms;
  }

  function mapWeekdays(f) {
    var ms = [];

    for (var i = 1; i <= 7; i++) {
      var dt = DateTime.utc(2016, 11, 13 + i);
      ms.push(f(dt));
    }

    return ms;
  }

  function listStuff(loc, length, defaultOK, englishFn, intlFn) {
    var mode = loc.listingMode(defaultOK);

    if (mode === "error") {
      return null;
    } else if (mode === "en") {
      return englishFn(length);
    } else {
      return intlFn(length);
    }
  }

  function supportsFastNumbers(loc) {
    if (loc.numberingSystem && loc.numberingSystem !== "latn") {
      return false;
    } else {
      return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
    }
  }
  /**
   * @private
   */


  var PolyNumberFormatter = /*#__PURE__*/function () {
    function PolyNumberFormatter(intl, forceSimple, opts) {
      this.padTo = opts.padTo || 0;
      this.floor = opts.floor || false;

      if (!forceSimple && hasIntl()) {
        var intlOpts = {
          useGrouping: false
        };
        if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
        this.inf = getCachedINF(intl, intlOpts);
      }
    }

    var _proto = PolyNumberFormatter.prototype;

    _proto.format = function format(i) {
      if (this.inf) {
        var fixed = this.floor ? Math.floor(i) : i;
        return this.inf.format(fixed);
      } else {
        // to match the browser's numberformatter defaults
        var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);

        return padStart(_fixed, this.padTo);
      }
    };

    return PolyNumberFormatter;
  }();
  /**
   * @private
   */


  var PolyDateFormatter = /*#__PURE__*/function () {
    function PolyDateFormatter(dt, intl, opts) {
      this.opts = opts;
      this.hasIntl = hasIntl();
      var z;

      if (dt.zone.universal && this.hasIntl) {
        // UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
        // That is why fixed-offset TZ is set to that unless it is:
        // 1. Outside of the supported range Etc/GMT-14 to Etc/GMT+12.
        // 2. Not a whole hour, e.g. UTC+4:30.
        var gmtOffset = -1 * (dt.offset / 60);

        if (gmtOffset >= -14 && gmtOffset <= 12 && gmtOffset % 1 === 0) {
          z = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
          this.dt = dt;
        } else {
          // Not all fixed-offset zones like Etc/+4:30 are present in tzdata.
          // So we have to make do. Two cases:
          // 1. The format options tell us to show the zone. We can't do that, so the best
          // we can do is format the date in UTC.
          // 2. The format options don't tell us to show the zone. Then we can adjust them
          // the time and tell the formatter to show it to us in UTC, so that the time is right
          // and the bad zone doesn't show up.
          z = "UTC";

          if (opts.timeZoneName) {
            this.dt = dt;
          } else {
            this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
          }
        }
      } else if (dt.zone.type === "local") {
        this.dt = dt;
      } else {
        this.dt = dt;
        z = dt.zone.name;
      }

      if (this.hasIntl) {
        var intlOpts = Object.assign({}, this.opts);

        if (z) {
          intlOpts.timeZone = z;
        }

        this.dtf = getCachedDTF(intl, intlOpts);
      }
    }

    var _proto2 = PolyDateFormatter.prototype;

    _proto2.format = function format() {
      if (this.hasIntl) {
        return this.dtf.format(this.dt.toJSDate());
      } else {
        var tokenFormat = formatString(this.opts),
            loc = Locale.create("en-US");
        return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
      }
    };

    _proto2.formatToParts = function formatToParts() {
      if (this.hasIntl && hasFormatToParts()) {
        return this.dtf.formatToParts(this.dt.toJSDate());
      } else {
        // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
        // and IMO it's too weird to have an uncanny valley like that
        return [];
      }
    };

    _proto2.resolvedOptions = function resolvedOptions() {
      if (this.hasIntl) {
        return this.dtf.resolvedOptions();
      } else {
        return {
          locale: "en-US",
          numberingSystem: "latn",
          outputCalendar: "gregory"
        };
      }
    };

    return PolyDateFormatter;
  }();
  /**
   * @private
   */


  var PolyRelFormatter = /*#__PURE__*/function () {
    function PolyRelFormatter(intl, isEnglish, opts) {
      this.opts = Object.assign({
        style: "long"
      }, opts);

      if (!isEnglish && hasRelative()) {
        this.rtf = getCachedRTF(intl, opts);
      }
    }

    var _proto3 = PolyRelFormatter.prototype;

    _proto3.format = function format(count, unit) {
      if (this.rtf) {
        return this.rtf.format(count, unit);
      } else {
        return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
      }
    };

    _proto3.formatToParts = function formatToParts(count, unit) {
      if (this.rtf) {
        return this.rtf.formatToParts(count, unit);
      } else {
        return [];
      }
    };

    return PolyRelFormatter;
  }();
  /**
   * @private
   */


  var Locale = /*#__PURE__*/function () {
    Locale.fromOpts = function fromOpts(opts) {
      return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
    };

    Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
      if (defaultToEN === void 0) {
        defaultToEN = false;
      }

      var specifiedLocale = locale || Settings.defaultLocale,
          // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
      localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
          numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
          outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
      return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
    };

    Locale.resetCache = function resetCache() {
      sysLocaleCache = null;
      intlDTCache = {};
      intlNumCache = {};
      intlRelCache = {};
    };

    Locale.fromObject = function fromObject(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          locale = _ref.locale,
          numberingSystem = _ref.numberingSystem,
          outputCalendar = _ref.outputCalendar;

      return Locale.create(locale, numberingSystem, outputCalendar);
    };

    function Locale(locale, numbering, outputCalendar, specifiedLocale) {
      var _parseLocaleString = parseLocaleString(locale),
          parsedLocale = _parseLocaleString[0],
          parsedNumberingSystem = _parseLocaleString[1],
          parsedOutputCalendar = _parseLocaleString[2];

      this.locale = parsedLocale;
      this.numberingSystem = numbering || parsedNumberingSystem || null;
      this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
      this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
      this.weekdaysCache = {
        format: {},
        standalone: {}
      };
      this.monthsCache = {
        format: {},
        standalone: {}
      };
      this.meridiemCache = null;
      this.eraCache = {};
      this.specifiedLocale = specifiedLocale;
      this.fastNumbersCached = null;
    }

    var _proto4 = Locale.prototype;

    _proto4.listingMode = function listingMode(defaultOK) {
      if (defaultOK === void 0) {
        defaultOK = true;
      }

      var intl = hasIntl(),
          hasFTP = intl && hasFormatToParts(),
          isActuallyEn = this.isEnglish(),
          hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

      if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
        return "error";
      } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
        return "en";
      } else {
        return "intl";
      }
    };

    _proto4.clone = function clone(alts) {
      if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
        return this;
      } else {
        return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
      }
    };

    _proto4.redefaultToEN = function redefaultToEN(alts) {
      if (alts === void 0) {
        alts = {};
      }

      return this.clone(Object.assign({}, alts, {
        defaultToEN: true
      }));
    };

    _proto4.redefaultToSystem = function redefaultToSystem(alts) {
      if (alts === void 0) {
        alts = {};
      }

      return this.clone(Object.assign({}, alts, {
        defaultToEN: false
      }));
    };

    _proto4.months = function months$1(length, format, defaultOK) {
      var _this = this;

      if (format === void 0) {
        format = false;
      }

      if (defaultOK === void 0) {
        defaultOK = true;
      }

      return listStuff(this, length, defaultOK, months, function () {
        var intl = format ? {
          month: length,
          day: "numeric"
        } : {
          month: length
        },
            formatStr = format ? "format" : "standalone";

        if (!_this.monthsCache[formatStr][length]) {
          _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
            return _this.extract(dt, intl, "month");
          });
        }

        return _this.monthsCache[formatStr][length];
      });
    };

    _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
      var _this2 = this;

      if (format === void 0) {
        format = false;
      }

      if (defaultOK === void 0) {
        defaultOK = true;
      }

      return listStuff(this, length, defaultOK, weekdays, function () {
        var intl = format ? {
          weekday: length,
          year: "numeric",
          month: "long",
          day: "numeric"
        } : {
          weekday: length
        },
            formatStr = format ? "format" : "standalone";

        if (!_this2.weekdaysCache[formatStr][length]) {
          _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
            return _this2.extract(dt, intl, "weekday");
          });
        }

        return _this2.weekdaysCache[formatStr][length];
      });
    };

    _proto4.meridiems = function meridiems$1(defaultOK) {
      var _this3 = this;

      if (defaultOK === void 0) {
        defaultOK = true;
      }

      return listStuff(this, undefined, defaultOK, function () {
        return meridiems;
      }, function () {
        // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
        // for AM and PM. This is probably wrong, but it's makes parsing way easier.
        if (!_this3.meridiemCache) {
          var intl = {
            hour: "numeric",
            hour12: true
          };
          _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
            return _this3.extract(dt, intl, "dayperiod");
          });
        }

        return _this3.meridiemCache;
      });
    };

    _proto4.eras = function eras$1(length, defaultOK) {
      var _this4 = this;

      if (defaultOK === void 0) {
        defaultOK = true;
      }

      return listStuff(this, length, defaultOK, eras, function () {
        var intl = {
          era: length
        }; // This is problematic. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
        // to definitely enumerate them.

        if (!_this4.eraCache[length]) {
          _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
            return _this4.extract(dt, intl, "era");
          });
        }

        return _this4.eraCache[length];
      });
    };

    _proto4.extract = function extract(dt, intlOpts, field) {
      var df = this.dtFormatter(dt, intlOpts),
          results = df.formatToParts(),
          matching = results.find(function (m) {
        return m.type.toLowerCase() === field;
      });
      return matching ? matching.value : null;
    };

    _proto4.numberFormatter = function numberFormatter(opts) {
      if (opts === void 0) {
        opts = {};
      } // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
      // (in contrast, the rest of the condition is used heavily)


      return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    };

    _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
      if (intlOpts === void 0) {
        intlOpts = {};
      }

      return new PolyDateFormatter(dt, this.intl, intlOpts);
    };

    _proto4.relFormatter = function relFormatter(opts) {
      if (opts === void 0) {
        opts = {};
      }

      return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
    };

    _proto4.isEnglish = function isEnglish() {
      return this.locale === "en" || this.locale.toLowerCase() === "en-us" || hasIntl() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
    };

    _proto4.equals = function equals(other) {
      return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    };

    _createClass(Locale, [{
      key: "fastNumbers",
      get: function get() {
        if (this.fastNumbersCached == null) {
          this.fastNumbersCached = supportsFastNumbers(this);
        }

        return this.fastNumbersCached;
      }
    }]);

    return Locale;
  }();
  /*
   * This file handles parsing for well-specified formats. Here's how it works:
   * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
   * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
   * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
   * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
   * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
   * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
   */


  function combineRegexes() {
    for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
      regexes[_key] = arguments[_key];
    }

    var full = regexes.reduce(function (f, r) {
      return f + r.source;
    }, "");
    return RegExp("^" + full + "$");
  }

  function combineExtractors() {
    for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      extractors[_key2] = arguments[_key2];
    }

    return function (m) {
      return extractors.reduce(function (_ref, ex) {
        var mergedVals = _ref[0],
            mergedZone = _ref[1],
            cursor = _ref[2];

        var _ex = ex(m, cursor),
            val = _ex[0],
            zone = _ex[1],
            next = _ex[2];

        return [Object.assign(mergedVals, val), mergedZone || zone, next];
      }, [{}, null, 1]).slice(0, 2);
    };
  }

  function parse(s) {
    if (s == null) {
      return [null, null];
    }

    for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      patterns[_key3 - 1] = arguments[_key3];
    }

    for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
      var _patterns$_i = _patterns[_i],
          regex = _patterns$_i[0],
          extractor = _patterns$_i[1];
      var m = regex.exec(s);

      if (m) {
        return extractor(m);
      }
    }

    return [null, null];
  }

  function simpleParse() {
    for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      keys[_key4] = arguments[_key4];
    }

    return function (match, cursor) {
      var ret = {};
      var i;

      for (i = 0; i < keys.length; i++) {
        ret[keys[i]] = parseInteger(match[cursor + i]);
      }

      return [ret, null, cursor + i];
    };
  } // ISO and SQL parsing


  var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
      isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
      isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
      isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
      isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
      isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
      isoOrdinalRegex = /(\d{4})-?(\d{3})/,
      extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
      extractISOOrdinalData = simpleParse("year", "ordinal"),
      sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
      // dumbed-down version of the ISO one
  sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?"),
      sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

  function int(match, pos, fallback) {
    var m = match[pos];
    return isUndefined(m) ? fallback : parseInteger(m);
  }

  function extractISOYmd(match, cursor) {
    var item = {
      year: int(match, cursor),
      month: int(match, cursor + 1, 1),
      day: int(match, cursor + 2, 1)
    };
    return [item, null, cursor + 3];
  }

  function extractISOTime(match, cursor) {
    var item = {
      hours: int(match, cursor, 0),
      minutes: int(match, cursor + 1, 0),
      seconds: int(match, cursor + 2, 0),
      milliseconds: parseMillis(match[cursor + 3])
    };
    return [item, null, cursor + 4];
  }

  function extractISOOffset(match, cursor) {
    var local = !match[cursor] && !match[cursor + 1],
        fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
        zone = local ? null : FixedOffsetZone.instance(fullOffset);
    return [{}, zone, cursor + 3];
  }

  function extractIANAZone(match, cursor) {
    var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
    return [{}, zone, cursor + 1];
  } // ISO time parsing


  var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$"); // ISO duration parsing

  var isoDuration = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;

  function extractISODuration(match) {
    var s = match[0],
        yearStr = match[1],
        monthStr = match[2],
        weekStr = match[3],
        dayStr = match[4],
        hourStr = match[5],
        minuteStr = match[6],
        secondStr = match[7],
        millisecondsStr = match[8];
    var hasNegativePrefix = s[0] === "-";

    var maybeNegate = function maybeNegate(num) {
      return num && hasNegativePrefix ? -num : num;
    };

    return [{
      years: maybeNegate(parseInteger(yearStr)),
      months: maybeNegate(parseInteger(monthStr)),
      weeks: maybeNegate(parseInteger(weekStr)),
      days: maybeNegate(parseInteger(dayStr)),
      hours: maybeNegate(parseInteger(hourStr)),
      minutes: maybeNegate(parseInteger(minuteStr)),
      seconds: maybeNegate(parseInteger(secondStr)),
      milliseconds: maybeNegate(parseMillis(millisecondsStr))
    }];
  } // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
  // and not just that we're in -240 *right now*. But since I don't think these are used that often
  // I'm just going to ignore that


  var obsOffsets = {
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };

  function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = {
      year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
      month: monthsShort.indexOf(monthStr) + 1,
      day: parseInteger(dayStr),
      hour: parseInteger(hourStr),
      minute: parseInteger(minuteStr)
    };
    if (secondStr) result.second = parseInteger(secondStr);

    if (weekdayStr) {
      result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
    }

    return result;
  } // RFC 2822/5322


  var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

  function extractRFC2822(match) {
    var weekdayStr = match[1],
        dayStr = match[2],
        monthStr = match[3],
        yearStr = match[4],
        hourStr = match[5],
        minuteStr = match[6],
        secondStr = match[7],
        obsOffset = match[8],
        milOffset = match[9],
        offHourStr = match[10],
        offMinuteStr = match[11],
        result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    var offset;

    if (obsOffset) {
      offset = obsOffsets[obsOffset];
    } else if (milOffset) {
      offset = 0;
    } else {
      offset = signedOffset(offHourStr, offMinuteStr);
    }

    return [result, new FixedOffsetZone(offset)];
  }

  function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
  } // http date


  var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
      rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
      ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

  function extractRFC1123Or850(match) {
    var weekdayStr = match[1],
        dayStr = match[2],
        monthStr = match[3],
        yearStr = match[4],
        hourStr = match[5],
        minuteStr = match[6],
        secondStr = match[7],
        result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [result, FixedOffsetZone.utcInstance];
  }

  function extractASCII(match) {
    var weekdayStr = match[1],
        monthStr = match[2],
        dayStr = match[3],
        hourStr = match[4],
        minuteStr = match[5],
        secondStr = match[6],
        yearStr = match[7],
        result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [result, FixedOffsetZone.utcInstance];
  }

  var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
  var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
  var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
  var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
  var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
  var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
  var extractISOOrdinalDataAndTime = combineExtractors(extractISOOrdinalData, extractISOTime);
  var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
  /**
   * @private
   */

  function parseISODate(s) {
    return parse(s, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDataAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
  }

  function parseRFC2822Date(s) {
    return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
  }

  function parseHTTPDate(s) {
    return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
  }

  function parseISODuration(s) {
    return parse(s, [isoDuration, extractISODuration]);
  }

  var extractISOTimeOnly = combineExtractors(extractISOTime);

  function parseISOTimeOnly(s) {
    return parse(s, [isoTimeOnly, extractISOTimeOnly]);
  }

  var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
  var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
  var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
  var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);

  function parseSQL(s) {
    return parse(s, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
  }

  var INVALID = "Invalid Duration"; // unit conversion constants

  var lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1000
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1000
    },
    hours: {
      minutes: 60,
      seconds: 60 * 60,
      milliseconds: 60 * 60 * 1000
    },
    minutes: {
      seconds: 60,
      milliseconds: 60 * 1000
    },
    seconds: {
      milliseconds: 1000
    }
  },
      casualMatrix = Object.assign({
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1000
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1000
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1000
    }
  }, lowOrderMatrix),
      daysInYearAccurate = 146097.0 / 400,
      daysInMonthAccurate = 146097.0 / 4800,
      accurateMatrix = Object.assign({
    years: {
      quarters: 4,
      months: 12,
      weeks: daysInYearAccurate / 7,
      days: daysInYearAccurate,
      hours: daysInYearAccurate * 24,
      minutes: daysInYearAccurate * 24 * 60,
      seconds: daysInYearAccurate * 24 * 60 * 60,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
    },
    quarters: {
      months: 3,
      weeks: daysInYearAccurate / 28,
      days: daysInYearAccurate / 4,
      hours: daysInYearAccurate * 24 / 4,
      minutes: daysInYearAccurate * 24 * 60 / 4,
      seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
    },
    months: {
      weeks: daysInMonthAccurate / 7,
      days: daysInMonthAccurate,
      hours: daysInMonthAccurate * 24,
      minutes: daysInMonthAccurate * 24 * 60,
      seconds: daysInMonthAccurate * 24 * 60 * 60,
      milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
    }
  }, lowOrderMatrix); // units ordered by size

  var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
  var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

  function clone(dur, alts, clear) {
    if (clear === void 0) {
      clear = false;
    } // deep merge for vals


    var conf = {
      values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
      loc: dur.loc.clone(alts.loc),
      conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
    };
    return new Duration(conf);
  }

  function antiTrunc(n) {
    return n < 0 ? Math.floor(n) : Math.ceil(n);
  } // NB: mutates parameters


  function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
    var conv = matrix[toUnit][fromUnit],
        raw = fromMap[fromUnit] / conv,
        sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
        // ok, so this is wild, but see the matrix in the tests
    added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
    toMap[toUnit] += added;
    fromMap[fromUnit] -= added * conv;
  } // NB: mutates parameters


  function normalizeValues(matrix, vals) {
    reverseUnits.reduce(function (previous, current) {
      if (!isUndefined(vals[current])) {
        if (previous) {
          convert(matrix, vals, previous, vals, current);
        }

        return current;
      } else {
        return previous;
      }
    }, null);
  }
  /**
   * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
   *
   * Here is a brief overview of commonly used methods and getters in Duration:
   *
   * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
   * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
   * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
   * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
   * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
   *
   * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
   */


  var Duration = /*#__PURE__*/function () {
    /**
     * @private
     */
    function Duration(config) {
      var accurate = config.conversionAccuracy === "longterm" || false;
      /**
       * @access private
       */

      this.values = config.values;
      /**
       * @access private
       */

      this.loc = config.loc || Locale.create();
      /**
       * @access private
       */

      this.conversionAccuracy = accurate ? "longterm" : "casual";
      /**
       * @access private
       */

      this.invalid = config.invalid || null;
      /**
       * @access private
       */

      this.matrix = accurate ? accurateMatrix : casualMatrix;
      /**
       * @access private
       */

      this.isLuxonDuration = true;
    }
    /**
     * Create Duration from a number of milliseconds.
     * @param {number} count of milliseconds
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */


    Duration.fromMillis = function fromMillis(count, opts) {
      return Duration.fromObject(Object.assign({
        milliseconds: count
      }, opts));
    }
    /**
     * Create a Duration from a JavaScript object with keys like 'years' and 'hours.
     * If this object is empty then a zero milliseconds duration is returned.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.years
     * @param {number} obj.quarters
     * @param {number} obj.months
     * @param {number} obj.weeks
     * @param {number} obj.days
     * @param {number} obj.hours
     * @param {number} obj.minutes
     * @param {number} obj.seconds
     * @param {number} obj.milliseconds
     * @param {string} [obj.locale='en-US'] - the locale to use
     * @param {string} obj.numberingSystem - the numbering system to use
     * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */
    ;

    Duration.fromObject = function fromObject(obj) {
      if (obj == null || _typeof(obj) !== "object") {
        throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : _typeof(obj)));
      }

      return new Duration({
        values: normalizeObject(obj, Duration.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone" // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
        ]),
        loc: Locale.fromObject(obj),
        conversionAccuracy: obj.conversionAccuracy
      });
    }
    /**
     * Create a Duration from an ISO 8601 duration string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
     * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
     * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
     * @return {Duration}
     */
    ;

    Duration.fromISO = function fromISO(text, opts) {
      var _parseISODuration = parseISODuration(text),
          parsed = _parseISODuration[0];

      if (parsed) {
        var obj = Object.assign(parsed, opts);
        return Duration.fromObject(obj);
      } else {
        return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
      }
    }
    /**
     * Create a Duration from an ISO 8601 time string.
     * @param {string} text - text to parse
     * @param {Object} opts - options for parsing
     * @param {string} [opts.locale='en-US'] - the locale to use
     * @param {string} opts.numberingSystem - the numbering system to use
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
     * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
     * @return {Duration}
     */
    ;

    Duration.fromISOTime = function fromISOTime(text, opts) {
      var _parseISOTimeOnly = parseISOTimeOnly(text),
          parsed = _parseISOTimeOnly[0];

      if (parsed) {
        var obj = Object.assign(parsed, opts);
        return Duration.fromObject(obj);
      } else {
        return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
      }
    }
    /**
     * Create an invalid Duration.
     * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {Duration}
     */
    ;

    Duration.invalid = function invalid(reason, explanation) {
      if (explanation === void 0) {
        explanation = null;
      }

      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
      }

      var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

      if (Settings.throwOnInvalid) {
        throw new InvalidDurationError(invalid);
      } else {
        return new Duration({
          invalid: invalid
        });
      }
    }
    /**
     * @private
     */
    ;

    Duration.normalizeUnit = function normalizeUnit(unit) {
      var normalized = {
        year: "years",
        years: "years",
        quarter: "quarters",
        quarters: "quarters",
        month: "months",
        months: "months",
        week: "weeks",
        weeks: "weeks",
        day: "days",
        days: "days",
        hour: "hours",
        hours: "hours",
        minute: "minutes",
        minutes: "minutes",
        second: "seconds",
        seconds: "seconds",
        millisecond: "milliseconds",
        milliseconds: "milliseconds"
      }[unit ? unit.toLowerCase() : unit];
      if (!normalized) throw new InvalidUnitError(unit);
      return normalized;
    }
    /**
     * Check if an object is a Duration. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    ;

    Duration.isDuration = function isDuration(o) {
      return o && o.isLuxonDuration || false;
    }
    /**
     * Get  the locale of a Duration, such 'en-GB'
     * @type {string}
     */
    ;

    var _proto = Duration.prototype;
    /**
     * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
     * * `S` for milliseconds
     * * `s` for seconds
     * * `m` for minutes
     * * `h` for hours
     * * `d` for days
     * * `M` for months
     * * `y` for years
     * Notes:
     * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
     * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
     * @param {string} fmt - the format string
     * @param {Object} opts - options
     * @param {boolean} [opts.floor=true] - floor numerical values
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
     * @return {string}
     */

    _proto.toFormat = function toFormat(fmt, opts) {
      if (opts === void 0) {
        opts = {};
      } // reverse-compat since 1.2; we always round down now, never up, and we do it by default


      var fmtOpts = Object.assign({}, opts, {
        floor: opts.round !== false && opts.floor !== false
      });
      return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
    }
    /**
     * Returns a JavaScript object with this Duration's values.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
     * @return {Object}
     */
    ;

    _proto.toObject = function toObject(opts) {
      if (opts === void 0) {
        opts = {};
      }

      if (!this.isValid) return {};
      var base = Object.assign({}, this.values);

      if (opts.includeConfig) {
        base.conversionAccuracy = this.conversionAccuracy;
        base.numberingSystem = this.loc.numberingSystem;
        base.locale = this.loc.locale;
      }

      return base;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Duration.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
     * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
     * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
     * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
     * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
     * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
     * @return {string}
     */
    ;

    _proto.toISO = function toISO() {
      // we could use the formatter, but this is an easier way to get the minimum string
      if (!this.isValid) return null;
      var s = "P";
      if (this.years !== 0) s += this.years + "Y";
      if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
      if (this.weeks !== 0) s += this.weeks + "W";
      if (this.days !== 0) s += this.days + "D";
      if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
      if (this.hours !== 0) s += this.hours + "H";
      if (this.minutes !== 0) s += this.minutes + "M";
      if (this.seconds !== 0 || this.milliseconds !== 0) // this will handle "floating point madness" by removing extra decimal places
        // https://stackoverflow.com/questions/588004/is-floating-point-math-broken
        s += roundTo(this.seconds + this.milliseconds / 1000, 3) + "S";
      if (s === "P") s += "T0S";
      return s;
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
     * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Times
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
     * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
     * @return {string}
     */
    ;

    _proto.toISOTime = function toISOTime(opts) {
      if (opts === void 0) {
        opts = {};
      }

      if (!this.isValid) return null;
      var millis = this.toMillis();
      if (millis < 0 || millis >= 86400000) return null;
      opts = Object.assign({
        suppressMilliseconds: false,
        suppressSeconds: false,
        includePrefix: false,
        format: "extended"
      }, opts);
      var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
      var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";

      if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
        fmt += opts.format === "basic" ? "ss" : ":ss";

        if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
          fmt += ".SSS";
        }
      }

      var str = value.toFormat(fmt);

      if (opts.includePrefix) {
        str = "T" + str;
      }

      return str;
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
     * @return {string}
     */
    ;

    _proto.toJSON = function toJSON() {
      return this.toISO();
    }
    /**
     * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
     * @return {string}
     */
    ;

    _proto.toString = function toString() {
      return this.toISO();
    }
    /**
     * Returns an milliseconds value of this Duration.
     * @return {number}
     */
    ;

    _proto.toMillis = function toMillis() {
      return this.as("milliseconds");
    }
    /**
     * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
     * @return {number}
     */
    ;

    _proto.valueOf = function valueOf() {
      return this.toMillis();
    }
    /**
     * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */
    ;

    _proto.plus = function plus(duration) {
      if (!this.isValid) return this;
      var dur = friendlyDuration(duration),
          result = {};

      for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done;) {
        var k = _step.value;

        if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
          result[k] = dur.get(k) + this.get(k);
        }
      }

      return clone(this, {
        values: result
      }, true);
    }
    /**
     * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @return {Duration}
     */
    ;

    _proto.minus = function minus(duration) {
      if (!this.isValid) return this;
      var dur = friendlyDuration(duration);
      return this.plus(dur.negate());
    }
    /**
     * Scale this Duration by the specified amount. Return a newly-constructed Duration.
     * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
     * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit(x => x * 2) //=> { hours: 2, minutes: 60 }
     * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnit((x, u) => u === "hour" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
     * @return {Duration}
     */
    ;

    _proto.mapUnits = function mapUnits(fn) {
      if (!this.isValid) return this;
      var result = {};

      for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
        var k = _Object$keys[_i];
        result[k] = asNumber(fn(this.values[k], k));
      }

      return clone(this, {
        values: result
      }, true);
    }
    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
     * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
     * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
     * @return {number}
     */
    ;

    _proto.get = function get(unit) {
      return this[Duration.normalizeUnit(unit)];
    }
    /**
     * "Set" the values of specified units. Return a newly-constructed Duration.
     * @param {Object} values - a mapping of units to numbers
     * @example dur.set({ years: 2017 })
     * @example dur.set({ hours: 8, minutes: 30 })
     * @return {Duration}
     */
    ;

    _proto.set = function set(values) {
      if (!this.isValid) return this;
      var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit, []));
      return clone(this, {
        values: mixed
      });
    }
    /**
     * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
     * @example dur.reconfigure({ locale: 'en-GB' })
     * @return {Duration}
     */
    ;

    _proto.reconfigure = function reconfigure(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          locale = _ref.locale,
          numberingSystem = _ref.numberingSystem,
          conversionAccuracy = _ref.conversionAccuracy;

      var loc = this.loc.clone({
        locale: locale,
        numberingSystem: numberingSystem
      }),
          opts = {
        loc: loc
      };

      if (conversionAccuracy) {
        opts.conversionAccuracy = conversionAccuracy;
      }

      return clone(this, opts);
    }
    /**
     * Return the length of the duration in the specified unit.
     * @param {string} unit - a unit such as 'minutes' or 'days'
     * @example Duration.fromObject({years: 1}).as('days') //=> 365
     * @example Duration.fromObject({years: 1}).as('months') //=> 12
     * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
     * @return {number}
     */
    ;

    _proto.as = function as(unit) {
      return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    }
    /**
     * Reduce this Duration to its canonical representation in its current units.
     * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
     * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
     * @return {Duration}
     */
    ;

    _proto.normalize = function normalize() {
      if (!this.isValid) return this;
      var vals = this.toObject();
      normalizeValues(this.matrix, vals);
      return clone(this, {
        values: vals
      }, true);
    }
    /**
     * Convert this Duration into its representation in a different set of units.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
     * @return {Duration}
     */
    ;

    _proto.shiftTo = function shiftTo() {
      for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
        units[_key] = arguments[_key];
      }

      if (!this.isValid) return this;

      if (units.length === 0) {
        return this;
      }

      units = units.map(function (u) {
        return Duration.normalizeUnit(u);
      });
      var built = {},
          accumulated = {},
          vals = this.toObject();
      var lastUnit;

      for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits), _step2; !(_step2 = _iterator2()).done;) {
        var k = _step2.value;

        if (units.indexOf(k) >= 0) {
          lastUnit = k;
          var own = 0; // anything we haven't boiled down yet should get boiled to this unit

          for (var ak in accumulated) {
            own += this.matrix[ak][k] * accumulated[ak];
            accumulated[ak] = 0;
          } // plus anything that's already in this unit


          if (isNumber(vals[k])) {
            own += vals[k];
          }

          var i = Math.trunc(own);
          built[k] = i;
          accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
          // plus anything further down the chain that should be rolled up in to this

          for (var down in vals) {
            if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
              convert(this.matrix, vals, down, built, k);
            }
          } // otherwise, keep it in the wings to boil it later

        } else if (isNumber(vals[k])) {
          accumulated[k] = vals[k];
        }
      } // anything leftover becomes the decimal for the last unit
      // lastUnit must be defined since units is not empty


      for (var key in accumulated) {
        if (accumulated[key] !== 0) {
          built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
        }
      }

      return clone(this, {
        values: built
      }, true).normalize();
    }
    /**
     * Return the negative of this Duration.
     * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
     * @return {Duration}
     */
    ;

    _proto.negate = function negate() {
      if (!this.isValid) return this;
      var negated = {};

      for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
        var k = _Object$keys2[_i2];
        negated[k] = -this.values[k];
      }

      return clone(this, {
        values: negated
      }, true);
    }
    /**
     * Get the years.
     * @type {number}
     */
    ;
    /**
     * Equality check
     * Two Durations are equal iff they have the same units and the same values for each unit.
     * @param {Duration} other
     * @return {boolean}
     */


    _proto.equals = function equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }

      if (!this.loc.equals(other.loc)) {
        return false;
      }

      function eq(v1, v2) {
        // Consider 0 and undefined as equal
        if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
        return v1 === v2;
      }

      for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits), _step3; !(_step3 = _iterator3()).done;) {
        var u = _step3.value;

        if (!eq(this.values[u], other.values[u])) {
          return false;
        }
      }

      return true;
    };

    _createClass(Duration, [{
      key: "locale",
      get: function get() {
        return this.isValid ? this.loc.locale : null;
      }
      /**
       * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
       *
       * @type {string}
       */

    }, {
      key: "numberingSystem",
      get: function get() {
        return this.isValid ? this.loc.numberingSystem : null;
      }
    }, {
      key: "years",
      get: function get() {
        return this.isValid ? this.values.years || 0 : NaN;
      }
      /**
       * Get the quarters.
       * @type {number}
       */

    }, {
      key: "quarters",
      get: function get() {
        return this.isValid ? this.values.quarters || 0 : NaN;
      }
      /**
       * Get the months.
       * @type {number}
       */

    }, {
      key: "months",
      get: function get() {
        return this.isValid ? this.values.months || 0 : NaN;
      }
      /**
       * Get the weeks
       * @type {number}
       */

    }, {
      key: "weeks",
      get: function get() {
        return this.isValid ? this.values.weeks || 0 : NaN;
      }
      /**
       * Get the days.
       * @type {number}
       */

    }, {
      key: "days",
      get: function get() {
        return this.isValid ? this.values.days || 0 : NaN;
      }
      /**
       * Get the hours.
       * @type {number}
       */

    }, {
      key: "hours",
      get: function get() {
        return this.isValid ? this.values.hours || 0 : NaN;
      }
      /**
       * Get the minutes.
       * @type {number}
       */

    }, {
      key: "minutes",
      get: function get() {
        return this.isValid ? this.values.minutes || 0 : NaN;
      }
      /**
       * Get the seconds.
       * @return {number}
       */

    }, {
      key: "seconds",
      get: function get() {
        return this.isValid ? this.values.seconds || 0 : NaN;
      }
      /**
       * Get the milliseconds.
       * @return {number}
       */

    }, {
      key: "milliseconds",
      get: function get() {
        return this.isValid ? this.values.milliseconds || 0 : NaN;
      }
      /**
       * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
       * on invalid DateTimes or Intervals.
       * @return {boolean}
       */

    }, {
      key: "isValid",
      get: function get() {
        return this.invalid === null;
      }
      /**
       * Returns an error code if this Duration became invalid, or null if the Duration is valid
       * @return {string}
       */

    }, {
      key: "invalidReason",
      get: function get() {
        return this.invalid ? this.invalid.reason : null;
      }
      /**
       * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
       * @type {string}
       */

    }, {
      key: "invalidExplanation",
      get: function get() {
        return this.invalid ? this.invalid.explanation : null;
      }
    }]);

    return Duration;
  }();

  function friendlyDuration(durationish) {
    if (isNumber(durationish)) {
      return Duration.fromMillis(durationish);
    } else if (Duration.isDuration(durationish)) {
      return durationish;
    } else if (_typeof(durationish) === "object") {
      return Duration.fromObject(durationish);
    } else {
      throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + _typeof(durationish));
    }
  }

  var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

  function validateStartEnd(start, end) {
    if (!start || !start.isValid) {
      return Interval.invalid("missing or invalid start");
    } else if (!end || !end.isValid) {
      return Interval.invalid("missing or invalid end");
    } else if (end < start) {
      return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
    } else {
      return null;
    }
  }
  /**
   * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
   *
   * Here is a brief overview of the most commonly used methods and getters in Interval:
   *
   * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
   * * **Accessors** Use {@link start} and {@link end} to get the start and end.
   * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
   * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
   * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}.
   * * **Output** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toISODate}, {@link toISOTime}, {@link toFormat}, and {@link toDuration}.
   */


  var Interval = /*#__PURE__*/function () {
    /**
     * @private
     */
    function Interval(config) {
      /**
       * @access private
       */
      this.s = config.start;
      /**
       * @access private
       */

      this.e = config.end;
      /**
       * @access private
       */

      this.invalid = config.invalid || null;
      /**
       * @access private
       */

      this.isLuxonInterval = true;
    }
    /**
     * Create an invalid Interval.
     * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {Interval}
     */


    Interval.invalid = function invalid(reason, explanation) {
      if (explanation === void 0) {
        explanation = null;
      }

      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
      }

      var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

      if (Settings.throwOnInvalid) {
        throw new InvalidIntervalError(invalid);
      } else {
        return new Interval({
          invalid: invalid
        });
      }
    }
    /**
     * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
     * @param {DateTime|Date|Object} start
     * @param {DateTime|Date|Object} end
     * @return {Interval}
     */
    ;

    Interval.fromDateTimes = function fromDateTimes(start, end) {
      var builtStart = friendlyDateTime(start),
          builtEnd = friendlyDateTime(end);
      var validateError = validateStartEnd(builtStart, builtEnd);

      if (validateError == null) {
        return new Interval({
          start: builtStart,
          end: builtEnd
        });
      } else {
        return validateError;
      }
    }
    /**
     * Create an Interval from a start DateTime and a Duration to extend to.
     * @param {DateTime|Date|Object} start
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
    ;

    Interval.after = function after(start, duration) {
      var dur = friendlyDuration(duration),
          dt = friendlyDateTime(start);
      return Interval.fromDateTimes(dt, dt.plus(dur));
    }
    /**
     * Create an Interval from an end DateTime and a Duration to extend backwards to.
     * @param {DateTime|Date|Object} end
     * @param {Duration|Object|number} duration - the length of the Interval.
     * @return {Interval}
     */
    ;

    Interval.before = function before(end, duration) {
      var dur = friendlyDuration(duration),
          dt = friendlyDateTime(end);
      return Interval.fromDateTimes(dt.minus(dur), dt);
    }
    /**
     * Create an Interval from an ISO 8601 string.
     * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
     * @param {string} text - the ISO string to parse
     * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {Interval}
     */
    ;

    Interval.fromISO = function fromISO(text, opts) {
      var _split = (text || "").split("/", 2),
          s = _split[0],
          e = _split[1];

      if (s && e) {
        var start, startIsValid;

        try {
          start = DateTime.fromISO(s, opts);
          startIsValid = start.isValid;
        } catch (e) {
          startIsValid = false;
        }

        var end, endIsValid;

        try {
          end = DateTime.fromISO(e, opts);
          endIsValid = end.isValid;
        } catch (e) {
          endIsValid = false;
        }

        if (startIsValid && endIsValid) {
          return Interval.fromDateTimes(start, end);
        }

        if (startIsValid) {
          var dur = Duration.fromISO(e, opts);

          if (dur.isValid) {
            return Interval.after(start, dur);
          }
        } else if (endIsValid) {
          var _dur = Duration.fromISO(s, opts);

          if (_dur.isValid) {
            return Interval.before(end, _dur);
          }
        }
      }

      return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
    /**
     * Check if an object is an Interval. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    ;

    Interval.isInterval = function isInterval(o) {
      return o && o.isLuxonInterval || false;
    }
    /**
     * Returns the start of the Interval
     * @type {DateTime}
     */
    ;

    var _proto = Interval.prototype;
    /**
     * Returns the length of the Interval in the specified unit.
     * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
     * @return {number}
     */

    _proto.length = function length(unit) {
      if (unit === void 0) {
        unit = "milliseconds";
      }

      return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
    }
    /**
     * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
     * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
     * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
     * @param {string} [unit='milliseconds'] - the unit of time to count.
     * @return {number}
     */
    ;

    _proto.count = function count(unit) {
      if (unit === void 0) {
        unit = "milliseconds";
      }

      if (!this.isValid) return NaN;
      var start = this.start.startOf(unit),
          end = this.end.startOf(unit);
      return Math.floor(end.diff(start, unit).get(unit)) + 1;
    }
    /**
     * Returns whether this Interval's start and end are both in the same unit of time
     * @param {string} unit - the unit of time to check sameness on
     * @return {boolean}
     */
    ;

    _proto.hasSame = function hasSame(unit) {
      return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
    }
    /**
     * Return whether this Interval has the same start and end DateTimes.
     * @return {boolean}
     */
    ;

    _proto.isEmpty = function isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    }
    /**
     * Return whether this Interval's start is after the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    ;

    _proto.isAfter = function isAfter(dateTime) {
      if (!this.isValid) return false;
      return this.s > dateTime;
    }
    /**
     * Return whether this Interval's end is before the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    ;

    _proto.isBefore = function isBefore(dateTime) {
      if (!this.isValid) return false;
      return this.e <= dateTime;
    }
    /**
     * Return whether this Interval contains the specified DateTime.
     * @param {DateTime} dateTime
     * @return {boolean}
     */
    ;

    _proto.contains = function contains(dateTime) {
      if (!this.isValid) return false;
      return this.s <= dateTime && this.e > dateTime;
    }
    /**
     * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
     * @param {Object} values - the values to set
     * @param {DateTime} values.start - the starting DateTime
     * @param {DateTime} values.end - the ending DateTime
     * @return {Interval}
     */
    ;

    _proto.set = function set(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          start = _ref.start,
          end = _ref.end;

      if (!this.isValid) return this;
      return Interval.fromDateTimes(start || this.s, end || this.e);
    }
    /**
     * Split this Interval at each of the specified DateTimes
     * @param {...[DateTime]} dateTimes - the unit of time to count.
     * @return {[Interval]}
     */
    ;

    _proto.splitAt = function splitAt() {
      var _this = this;

      if (!this.isValid) return [];

      for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
        dateTimes[_key] = arguments[_key];
      }

      var sorted = dateTimes.map(friendlyDateTime).filter(function (d) {
        return _this.contains(d);
      }).sort(),
          results = [];
      var s = this.s,
          i = 0;

      while (s < this.e) {
        var added = sorted[i] || this.e,
            next = +added > +this.e ? this.e : added;
        results.push(Interval.fromDateTimes(s, next));
        s = next;
        i += 1;
      }

      return results;
    }
    /**
     * Split this Interval into smaller Intervals, each of the specified length.
     * Left over time is grouped into a smaller interval
     * @param {Duration|Object|number} duration - The length of each resulting interval.
     * @return {[Interval]}
     */
    ;

    _proto.splitBy = function splitBy(duration) {
      var dur = friendlyDuration(duration);

      if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
        return [];
      }

      var s = this.s,
          added,
          next;
      var results = [];

      while (s < this.e) {
        added = s.plus(dur);
        next = +added > +this.e ? this.e : added;
        results.push(Interval.fromDateTimes(s, next));
        s = next;
      }

      return results;
    }
    /**
     * Split this Interval into the specified number of smaller intervals.
     * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
     * @return {[Interval]}
     */
    ;

    _proto.divideEqually = function divideEqually(numberOfParts) {
      if (!this.isValid) return [];
      return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    }
    /**
     * Return whether this Interval overlaps with the specified Interval
     * @param {Interval} other
     * @return {boolean}
     */
    ;

    _proto.overlaps = function overlaps(other) {
      return this.e > other.s && this.s < other.e;
    }
    /**
     * Return whether this Interval's end is adjacent to the specified Interval's start.
     * @param {Interval} other
     * @return {boolean}
     */
    ;

    _proto.abutsStart = function abutsStart(other) {
      if (!this.isValid) return false;
      return +this.e === +other.s;
    }
    /**
     * Return whether this Interval's start is adjacent to the specified Interval's end.
     * @param {Interval} other
     * @return {boolean}
     */
    ;

    _proto.abutsEnd = function abutsEnd(other) {
      if (!this.isValid) return false;
      return +other.e === +this.s;
    }
    /**
     * Return whether this Interval engulfs the start and end of the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */
    ;

    _proto.engulfs = function engulfs(other) {
      if (!this.isValid) return false;
      return this.s <= other.s && this.e >= other.e;
    }
    /**
     * Return whether this Interval has the same start and end as the specified Interval.
     * @param {Interval} other
     * @return {boolean}
     */
    ;

    _proto.equals = function equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }

      return this.s.equals(other.s) && this.e.equals(other.e);
    }
    /**
     * Return an Interval representing the intersection of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
     * Returns null if the intersection is empty, meaning, the intervals don't intersect.
     * @param {Interval} other
     * @return {Interval}
     */
    ;

    _proto.intersection = function intersection(other) {
      if (!this.isValid) return this;
      var s = this.s > other.s ? this.s : other.s,
          e = this.e < other.e ? this.e : other.e;

      if (s > e) {
        return null;
      } else {
        return Interval.fromDateTimes(s, e);
      }
    }
    /**
     * Return an Interval representing the union of this Interval and the specified Interval.
     * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
     * @param {Interval} other
     * @return {Interval}
     */
    ;

    _proto.union = function union(other) {
      if (!this.isValid) return this;
      var s = this.s < other.s ? this.s : other.s,
          e = this.e > other.e ? this.e : other.e;
      return Interval.fromDateTimes(s, e);
    }
    /**
     * Merge an array of Intervals into a equivalent minimal set of Intervals.
     * Combines overlapping and adjacent Intervals.
     * @param {[Interval]} intervals
     * @return {[Interval]}
     */
    ;

    Interval.merge = function merge(intervals) {
      var _intervals$sort$reduc = intervals.sort(function (a, b) {
        return a.s - b.s;
      }).reduce(function (_ref2, item) {
        var sofar = _ref2[0],
            current = _ref2[1];

        if (!current) {
          return [sofar, item];
        } else if (current.overlaps(item) || current.abutsStart(item)) {
          return [sofar, current.union(item)];
        } else {
          return [sofar.concat([current]), item];
        }
      }, [[], null]),
          found = _intervals$sort$reduc[0],
          final = _intervals$sort$reduc[1];

      if (final) {
        found.push(final);
      }

      return found;
    }
    /**
     * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
     * @param {[Interval]} intervals
     * @return {[Interval]}
     */
    ;

    Interval.xor = function xor(intervals) {
      var _Array$prototype;

      var start = null,
          currentCount = 0;

      var results = [],
          ends = intervals.map(function (i) {
        return [{
          time: i.s,
          type: "s"
        }, {
          time: i.e,
          type: "e"
        }];
      }),
          flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
          arr = flattened.sort(function (a, b) {
        return a.time - b.time;
      });

      for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
        var i = _step.value;
        currentCount += i.type === "s" ? 1 : -1;

        if (currentCount === 1) {
          start = i.time;
        } else {
          if (start && +start !== +i.time) {
            results.push(Interval.fromDateTimes(start, i.time));
          }

          start = null;
        }
      }

      return Interval.merge(results);
    }
    /**
     * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
     * @param {...Interval} intervals
     * @return {[Interval]}
     */
    ;

    _proto.difference = function difference() {
      var _this2 = this;

      for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        intervals[_key2] = arguments[_key2];
      }

      return Interval.xor([this].concat(intervals)).map(function (i) {
        return _this2.intersection(i);
      }).filter(function (i) {
        return i && !i.isEmpty();
      });
    }
    /**
     * Returns a string representation of this Interval appropriate for debugging.
     * @return {string}
     */
    ;

    _proto.toString = function toString() {
      if (!this.isValid) return INVALID$1;
      return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
    }
    /**
     * Returns an ISO 8601-compliant string representation of this Interval.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime.toISO}
     * @return {string}
     */
    ;

    _proto.toISO = function toISO(opts) {
      if (!this.isValid) return INVALID$1;
      return this.s.toISO(opts) + "/" + this.e.toISO(opts);
    }
    /**
     * Returns an ISO 8601-compliant string representation of date of this Interval.
     * The time components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @return {string}
     */
    ;

    _proto.toISODate = function toISODate() {
      if (!this.isValid) return INVALID$1;
      return this.s.toISODate() + "/" + this.e.toISODate();
    }
    /**
     * Returns an ISO 8601-compliant string representation of time of this Interval.
     * The date components are ignored.
     * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
     * @param {Object} opts - The same options as {@link DateTime.toISO}
     * @return {string}
     */
    ;

    _proto.toISOTime = function toISOTime(opts) {
      if (!this.isValid) return INVALID$1;
      return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
    }
    /**
     * Returns a string representation of this Interval formatted according to the specified format string.
     * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
     * @param {Object} opts - options
     * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
     * @return {string}
     */
    ;

    _proto.toFormat = function toFormat(dateFormat, _temp2) {
      var _ref3 = _temp2 === void 0 ? {} : _temp2,
          _ref3$separator = _ref3.separator,
          separator = _ref3$separator === void 0 ? " – " : _ref3$separator;

      if (!this.isValid) return INVALID$1;
      return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
    }
    /**
     * Return a Duration representing the time spanned by this interval.
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
     * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
     * @return {Duration}
     */
    ;

    _proto.toDuration = function toDuration(unit, opts) {
      if (!this.isValid) {
        return Duration.invalid(this.invalidReason);
      }

      return this.e.diff(this.s, unit, opts);
    }
    /**
     * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
     * @param {function} mapFn
     * @return {Interval}
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
     * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
     */
    ;

    _proto.mapEndpoints = function mapEndpoints(mapFn) {
      return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
    };

    _createClass(Interval, [{
      key: "start",
      get: function get() {
        return this.isValid ? this.s : null;
      }
      /**
       * Returns the end of the Interval
       * @type {DateTime}
       */

    }, {
      key: "end",
      get: function get() {
        return this.isValid ? this.e : null;
      }
      /**
       * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
       * @type {boolean}
       */

    }, {
      key: "isValid",
      get: function get() {
        return this.invalidReason === null;
      }
      /**
       * Returns an error code if this Interval is invalid, or null if the Interval is valid
       * @type {string}
       */

    }, {
      key: "invalidReason",
      get: function get() {
        return this.invalid ? this.invalid.reason : null;
      }
      /**
       * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
       * @type {string}
       */

    }, {
      key: "invalidExplanation",
      get: function get() {
        return this.invalid ? this.invalid.explanation : null;
      }
    }]);

    return Interval;
  }();
  /**
   * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
   */


  var Info = /*#__PURE__*/function () {
    function Info() {}
    /**
     * Return whether the specified zone contains a DST.
     * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
     * @return {boolean}
     */


    Info.hasDST = function hasDST(zone) {
      if (zone === void 0) {
        zone = Settings.defaultZone;
      }

      var proto = DateTime.now().setZone(zone).set({
        month: 12
      });
      return !zone.universal && proto.offset !== proto.set({
        month: 6
      }).offset;
    }
    /**
     * Return whether the specified zone is a valid IANA specifier.
     * @param {string} zone - Zone to check
     * @return {boolean}
     */
    ;

    Info.isValidIANAZone = function isValidIANAZone(zone) {
      return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
    }
    /**
     * Converts the input into a {@link Zone} instance.
     *
     * * If `input` is already a Zone instance, it is returned unchanged.
     * * If `input` is a string containing a valid time zone name, a Zone instance
     *   with that name is returned.
     * * If `input` is a string that doesn't refer to a known time zone, a Zone
     *   instance with {@link Zone.isValid} == false is returned.
     * * If `input is a number, a Zone instance with the specified fixed offset
     *   in minutes is returned.
     * * If `input` is `null` or `undefined`, the default zone is returned.
     * @param {string|Zone|number} [input] - the value to be converted
     * @return {Zone}
     */
    ;

    Info.normalizeZone = function normalizeZone$1(input) {
      return normalizeZone(input, Settings.defaultZone);
    }
    /**
     * Return an array of standalone month names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @example Info.months()[0] //=> 'January'
     * @example Info.months('short')[0] //=> 'Jan'
     * @example Info.months('numeric')[0] //=> '1'
     * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
     * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
     * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
     * @return {[string]}
     */
    ;

    Info.months = function months(length, _temp) {
      if (length === void 0) {
        length = "long";
      }

      var _ref = _temp === void 0 ? {} : _temp,
          _ref$locale = _ref.locale,
          locale = _ref$locale === void 0 ? null : _ref$locale,
          _ref$numberingSystem = _ref.numberingSystem,
          numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
          _ref$outputCalendar = _ref.outputCalendar,
          outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

      return Locale.create(locale, numberingSystem, outputCalendar).months(length);
    }
    /**
     * Return an array of format month names.
     * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
     * changes the string.
     * See {@link months}
     * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @param {string} [opts.outputCalendar='gregory'] - the calendar
     * @return {[string]}
     */
    ;

    Info.monthsFormat = function monthsFormat(length, _temp2) {
      if (length === void 0) {
        length = "long";
      }

      var _ref2 = _temp2 === void 0 ? {} : _temp2,
          _ref2$locale = _ref2.locale,
          locale = _ref2$locale === void 0 ? null : _ref2$locale,
          _ref2$numberingSystem = _ref2.numberingSystem,
          numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
          _ref2$outputCalendar = _ref2.outputCalendar,
          outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

      return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
    }
    /**
     * Return an array of standalone week names.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @example Info.weekdays()[0] //=> 'Monday'
     * @example Info.weekdays('short')[0] //=> 'Mon'
     * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
     * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
     * @return {[string]}
     */
    ;

    Info.weekdays = function weekdays(length, _temp3) {
      if (length === void 0) {
        length = "long";
      }

      var _ref3 = _temp3 === void 0 ? {} : _temp3,
          _ref3$locale = _ref3.locale,
          locale = _ref3$locale === void 0 ? null : _ref3$locale,
          _ref3$numberingSystem = _ref3.numberingSystem,
          numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem;

      return Locale.create(locale, numberingSystem, null).weekdays(length);
    }
    /**
     * Return an array of format week names.
     * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
     * changes the string.
     * See {@link weekdays}
     * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale=null] - the locale code
     * @param {string} [opts.numberingSystem=null] - the numbering system
     * @return {[string]}
     */
    ;

    Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
      if (length === void 0) {
        length = "long";
      }

      var _ref4 = _temp4 === void 0 ? {} : _temp4,
          _ref4$locale = _ref4.locale,
          locale = _ref4$locale === void 0 ? null : _ref4$locale,
          _ref4$numberingSystem = _ref4.numberingSystem,
          numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem;

      return Locale.create(locale, numberingSystem, null).weekdays(length, true);
    }
    /**
     * Return an array of meridiems.
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.meridiems() //=> [ 'AM', 'PM' ]
     * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
     * @return {[string]}
     */
    ;

    Info.meridiems = function meridiems(_temp5) {
      var _ref5 = _temp5 === void 0 ? {} : _temp5,
          _ref5$locale = _ref5.locale,
          locale = _ref5$locale === void 0 ? null : _ref5$locale;

      return Locale.create(locale).meridiems();
    }
    /**
     * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
     * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
     * @param {Object} opts - options
     * @param {string} [opts.locale] - the locale code
     * @example Info.eras() //=> [ 'BC', 'AD' ]
     * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
     * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
     * @return {[string]}
     */
    ;

    Info.eras = function eras(length, _temp6) {
      if (length === void 0) {
        length = "short";
      }

      var _ref6 = _temp6 === void 0 ? {} : _temp6,
          _ref6$locale = _ref6.locale,
          locale = _ref6$locale === void 0 ? null : _ref6$locale;

      return Locale.create(locale, null, "gregory").eras(length);
    }
    /**
     * Return the set of available features in this environment.
     * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
     * Keys:
     * * `zones`: whether this environment supports IANA timezones
     * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
     * * `intl`: whether this environment supports general internationalization
     * * `relative`: whether this environment supports relative time formatting
     * @example Info.features() //=> { intl: true, intlTokens: false, zones: true, relative: false }
     * @return {Object}
     */
    ;

    Info.features = function features() {
      var intl = false,
          intlTokens = false,
          zones = false,
          relative = false;

      if (hasIntl()) {
        intl = true;
        intlTokens = hasFormatToParts();
        relative = hasRelative();

        try {
          zones = new Intl.DateTimeFormat("en", {
            timeZone: "America/New_York"
          }).resolvedOptions().timeZone === "America/New_York";
        } catch (e) {
          zones = false;
        }
      }

      return {
        intl: intl,
        intlTokens: intlTokens,
        zones: zones,
        relative: relative
      };
    };

    return Info;
  }();

  function dayDiff(earlier, later) {
    var utcDayStart = function utcDayStart(dt) {
      return dt.toUTC(0, {
        keepLocalTime: true
      }).startOf("day").valueOf();
    },
        ms = utcDayStart(later) - utcDayStart(earlier);

    return Math.floor(Duration.fromMillis(ms).as("days"));
  }

  function highOrderDiffs(cursor, later, units) {
    var differs = [["years", function (a, b) {
      return b.year - a.year;
    }], ["quarters", function (a, b) {
      return b.quarter - a.quarter;
    }], ["months", function (a, b) {
      return b.month - a.month + (b.year - a.year) * 12;
    }], ["weeks", function (a, b) {
      var days = dayDiff(a, b);
      return (days - days % 7) / 7;
    }], ["days", dayDiff]];
    var results = {};
    var lowestOrder, highWater;

    for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
      var _differs$_i = _differs[_i],
          unit = _differs$_i[0],
          differ = _differs$_i[1];

      if (units.indexOf(unit) >= 0) {
        var _cursor$plus;

        lowestOrder = unit;
        var delta = differ(cursor, later);
        highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

        if (highWater > later) {
          var _cursor$plus2;

          cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
          delta -= 1;
        } else {
          cursor = highWater;
        }

        results[unit] = delta;
      }
    }

    return [cursor, results, highWater, lowestOrder];
  }

  function _diff(earlier, later, units, opts) {
    var _highOrderDiffs = highOrderDiffs(earlier, later, units),
        cursor = _highOrderDiffs[0],
        results = _highOrderDiffs[1],
        highWater = _highOrderDiffs[2],
        lowestOrder = _highOrderDiffs[3];

    var remainingMillis = later - cursor;
    var lowerOrderUnits = units.filter(function (u) {
      return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
    });

    if (lowerOrderUnits.length === 0) {
      if (highWater < later) {
        var _cursor$plus3;

        highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
      }

      if (highWater !== cursor) {
        results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
      }
    }

    var duration = Duration.fromObject(Object.assign(results, opts));

    if (lowerOrderUnits.length > 0) {
      var _Duration$fromMillis;

      return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
    } else {
      return duration;
    }
  }

  var numberingSystems = {
    arab: "[\u0660-\u0669]",
    arabext: "[\u06F0-\u06F9]",
    bali: "[\u1B50-\u1B59]",
    beng: "[\u09E6-\u09EF]",
    deva: "[\u0966-\u096F]",
    fullwide: "[\uFF10-\uFF19]",
    gujr: "[\u0AE6-\u0AEF]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[\u17E0-\u17E9]",
    knda: "[\u0CE6-\u0CEF]",
    laoo: "[\u0ED0-\u0ED9]",
    limb: "[\u1946-\u194F]",
    mlym: "[\u0D66-\u0D6F]",
    mong: "[\u1810-\u1819]",
    mymr: "[\u1040-\u1049]",
    orya: "[\u0B66-\u0B6F]",
    tamldec: "[\u0BE6-\u0BEF]",
    telu: "[\u0C66-\u0C6F]",
    thai: "[\u0E50-\u0E59]",
    tibt: "[\u0F20-\u0F29]",
    latn: "\\d"
  };
  var numberingSystemsUTF16 = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881]
  }; // eslint-disable-next-line

  var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");

  function parseDigits(str) {
    var value = parseInt(str, 10);

    if (isNaN(value)) {
      value = "";

      for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);

        if (str[i].search(numberingSystems.hanidec) !== -1) {
          value += hanidecChars.indexOf(str[i]);
        } else {
          for (var key in numberingSystemsUTF16) {
            var _numberingSystemsUTF = numberingSystemsUTF16[key],
                min = _numberingSystemsUTF[0],
                max = _numberingSystemsUTF[1];

            if (code >= min && code <= max) {
              value += code - min;
            }
          }
        }
      }

      return parseInt(value, 10);
    } else {
      return value;
    }
  }

  function digitRegex(_ref, append) {
    var numberingSystem = _ref.numberingSystem;

    if (append === void 0) {
      append = "";
    }

    return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
  }

  var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

  function intUnit(regex, post) {
    if (post === void 0) {
      post = function post(i) {
        return i;
      };
    }

    return {
      regex: regex,
      deser: function deser(_ref) {
        var s = _ref[0];
        return post(parseDigits(s));
      }
    };
  }

  var NBSP = String.fromCharCode(160);
  var spaceOrNBSP = "( |" + NBSP + ")";
  var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");

  function fixListRegex(s) {
    // make dots optional and also make them literal
    // make space and non breakable space characters interchangeable
    return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
  }

  function stripInsensitivities(s) {
    return s.replace(/\./g, "") // ignore dots that were made optional
    .replace(spaceOrNBSPRegExp, " ") // interchange space and nbsp
    .toLowerCase();
  }

  function oneOf(strings, startIndex) {
    if (strings === null) {
      return null;
    } else {
      return {
        regex: RegExp(strings.map(fixListRegex).join("|")),
        deser: function deser(_ref2) {
          var s = _ref2[0];
          return strings.findIndex(function (i) {
            return stripInsensitivities(s) === stripInsensitivities(i);
          }) + startIndex;
        }
      };
    }
  }

  function offset(regex, groups) {
    return {
      regex: regex,
      deser: function deser(_ref3) {
        var h = _ref3[1],
            m = _ref3[2];
        return signedOffset(h, m);
      },
      groups: groups
    };
  }

  function simple(regex) {
    return {
      regex: regex,
      deser: function deser(_ref4) {
        var s = _ref4[0];
        return s;
      }
    };
  }

  function escapeToken(value) {
    // eslint-disable-next-line no-useless-escape
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  function unitForToken(token, loc) {
    var one = digitRegex(loc),
        two = digitRegex(loc, "{2}"),
        three = digitRegex(loc, "{3}"),
        four = digitRegex(loc, "{4}"),
        six = digitRegex(loc, "{6}"),
        oneOrTwo = digitRegex(loc, "{1,2}"),
        oneToThree = digitRegex(loc, "{1,3}"),
        oneToSix = digitRegex(loc, "{1,6}"),
        oneToNine = digitRegex(loc, "{1,9}"),
        twoToFour = digitRegex(loc, "{2,4}"),
        fourToSix = digitRegex(loc, "{4,6}"),
        literal = function literal(t) {
      return {
        regex: RegExp(escapeToken(t.val)),
        deser: function deser(_ref5) {
          var s = _ref5[0];
          return s;
        },
        literal: true
      };
    },
        unitate = function unitate(t) {
      if (token.literal) {
        return literal(t);
      }

      switch (t.val) {
        // era
        case "G":
          return oneOf(loc.eras("short", false), 0);

        case "GG":
          return oneOf(loc.eras("long", false), 0);
        // years

        case "y":
          return intUnit(oneToSix);

        case "yy":
          return intUnit(twoToFour, untruncateYear);

        case "yyyy":
          return intUnit(four);

        case "yyyyy":
          return intUnit(fourToSix);

        case "yyyyyy":
          return intUnit(six);
        // months

        case "M":
          return intUnit(oneOrTwo);

        case "MM":
          return intUnit(two);

        case "MMM":
          return oneOf(loc.months("short", true, false), 1);

        case "MMMM":
          return oneOf(loc.months("long", true, false), 1);

        case "L":
          return intUnit(oneOrTwo);

        case "LL":
          return intUnit(two);

        case "LLL":
          return oneOf(loc.months("short", false, false), 1);

        case "LLLL":
          return oneOf(loc.months("long", false, false), 1);
        // dates

        case "d":
          return intUnit(oneOrTwo);

        case "dd":
          return intUnit(two);
        // ordinals

        case "o":
          return intUnit(oneToThree);

        case "ooo":
          return intUnit(three);
        // time

        case "HH":
          return intUnit(two);

        case "H":
          return intUnit(oneOrTwo);

        case "hh":
          return intUnit(two);

        case "h":
          return intUnit(oneOrTwo);

        case "mm":
          return intUnit(two);

        case "m":
          return intUnit(oneOrTwo);

        case "q":
          return intUnit(oneOrTwo);

        case "qq":
          return intUnit(two);

        case "s":
          return intUnit(oneOrTwo);

        case "ss":
          return intUnit(two);

        case "S":
          return intUnit(oneToThree);

        case "SSS":
          return intUnit(three);

        case "u":
          return simple(oneToNine);
        // meridiem

        case "a":
          return oneOf(loc.meridiems(), 0);
        // weekYear (k)

        case "kkkk":
          return intUnit(four);

        case "kk":
          return intUnit(twoToFour, untruncateYear);
        // weekNumber (W)

        case "W":
          return intUnit(oneOrTwo);

        case "WW":
          return intUnit(two);
        // weekdays

        case "E":
        case "c":
          return intUnit(one);

        case "EEE":
          return oneOf(loc.weekdays("short", false, false), 1);

        case "EEEE":
          return oneOf(loc.weekdays("long", false, false), 1);

        case "ccc":
          return oneOf(loc.weekdays("short", true, false), 1);

        case "cccc":
          return oneOf(loc.weekdays("long", true, false), 1);
        // offset/zone

        case "Z":
        case "ZZ":
          return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

        case "ZZZ":
          return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
        // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
        // because we don't have any way to figure out what they are

        case "z":
          return simple(/[a-z_+-/]{1,256}?/i);

        default:
          return literal(t);
      }
    };

    var unit = unitate(token) || {
      invalidReason: MISSING_FTP
    };
    unit.token = token;
    return unit;
  }

  var partTypeStyleToTokenVal = {
    year: {
      "2-digit": "yy",
      numeric: "yyyyy"
    },
    month: {
      numeric: "M",
      "2-digit": "MM",
      short: "MMM",
      long: "MMMM"
    },
    day: {
      numeric: "d",
      "2-digit": "dd"
    },
    weekday: {
      short: "EEE",
      long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour: {
      numeric: "h",
      "2-digit": "hh"
    },
    minute: {
      numeric: "m",
      "2-digit": "mm"
    },
    second: {
      numeric: "s",
      "2-digit": "ss"
    }
  };

  function tokenForPart(part, locale, formatOpts) {
    var type = part.type,
        value = part.value;

    if (type === "literal") {
      return {
        literal: true,
        val: value
      };
    }

    var style = formatOpts[type];
    var val = partTypeStyleToTokenVal[type];

    if (_typeof(val) === "object") {
      val = val[style];
    }

    if (val) {
      return {
        literal: false,
        val: val
      };
    }

    return undefined;
  }

  function buildRegex(units) {
    var re = units.map(function (u) {
      return u.regex;
    }).reduce(function (f, r) {
      return f + "(" + r.source + ")";
    }, "");
    return ["^" + re + "$", units];
  }

  function match(input, regex, handlers) {
    var matches = input.match(regex);

    if (matches) {
      var all = {};
      var matchIndex = 1;

      for (var i in handlers) {
        if (hasOwnProperty(handlers, i)) {
          var h = handlers[i],
              groups = h.groups ? h.groups + 1 : 1;

          if (!h.literal && h.token) {
            all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
          }

          matchIndex += groups;
        }
      }

      return [matches, all];
    } else {
      return [matches, {}];
    }
  }

  function dateTimeFromMatches(matches) {
    var toField = function toField(token) {
      switch (token) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
        case "H":
          return "hour";

        case "d":
          return "day";

        case "o":
          return "ordinal";

        case "L":
        case "M":
          return "month";

        case "y":
          return "year";

        case "E":
        case "c":
          return "weekday";

        case "W":
          return "weekNumber";

        case "k":
          return "weekYear";

        case "q":
          return "quarter";

        default:
          return null;
      }
    };

    var zone;

    if (!isUndefined(matches.Z)) {
      zone = new FixedOffsetZone(matches.Z);
    } else if (!isUndefined(matches.z)) {
      zone = IANAZone.create(matches.z);
    } else {
      zone = null;
    }

    if (!isUndefined(matches.q)) {
      matches.M = (matches.q - 1) * 3 + 1;
    }

    if (!isUndefined(matches.h)) {
      if (matches.h < 12 && matches.a === 1) {
        matches.h += 12;
      } else if (matches.h === 12 && matches.a === 0) {
        matches.h = 0;
      }
    }

    if (matches.G === 0 && matches.y) {
      matches.y = -matches.y;
    }

    if (!isUndefined(matches.u)) {
      matches.S = parseMillis(matches.u);
    }

    var vals = Object.keys(matches).reduce(function (r, k) {
      var f = toField(k);

      if (f) {
        r[f] = matches[k];
      }

      return r;
    }, {});
    return [vals, zone];
  }

  var dummyDateTimeCache = null;

  function getDummyDateTime() {
    if (!dummyDateTimeCache) {
      dummyDateTimeCache = DateTime.fromMillis(1555555555555);
    }

    return dummyDateTimeCache;
  }

  function maybeExpandMacroToken(token, locale) {
    if (token.literal) {
      return token;
    }

    var formatOpts = Formatter.macroTokenToFormatOpts(token.val);

    if (!formatOpts) {
      return token;
    }

    var formatter = Formatter.create(locale, formatOpts);
    var parts = formatter.formatDateTimeParts(getDummyDateTime());
    var tokens = parts.map(function (p) {
      return tokenForPart(p, locale, formatOpts);
    });

    if (tokens.includes(undefined)) {
      return token;
    }

    return tokens;
  }

  function expandMacroTokens(tokens, locale) {
    var _Array$prototype;

    return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function (t) {
      return maybeExpandMacroToken(t, locale);
    }));
  }
  /**
   * @private
   */


  function explainFromTokens(locale, input, format) {
    var tokens = expandMacroTokens(Formatter.parseFormat(format), locale),
        units = tokens.map(function (t) {
      return unitForToken(t, locale);
    }),
        disqualifyingUnit = units.find(function (t) {
      return t.invalidReason;
    });

    if (disqualifyingUnit) {
      return {
        input: input,
        tokens: tokens,
        invalidReason: disqualifyingUnit.invalidReason
      };
    } else {
      var _buildRegex = buildRegex(units),
          regexString = _buildRegex[0],
          handlers = _buildRegex[1],
          regex = RegExp(regexString, "i"),
          _match = match(input, regex, handlers),
          rawMatches = _match[0],
          matches = _match[1],
          _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
          result = _ref6[0],
          zone = _ref6[1];

      if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
        throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
      }

      return {
        input: input,
        tokens: tokens,
        regex: regex,
        rawMatches: rawMatches,
        matches: matches,
        result: result,
        zone: zone
      };
    }
  }

  function parseFromTokens(locale, input, format) {
    var _explainFromTokens = explainFromTokens(locale, input, format),
        result = _explainFromTokens.result,
        zone = _explainFromTokens.zone,
        invalidReason = _explainFromTokens.invalidReason;

    return [result, zone, invalidReason];
  }

  var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
      leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

  function unitOutOfRange(unit, value) {
    return new Invalid("unit out of range", "you specified " + value + " (of type " + _typeof(value) + ") as a " + unit + ", which is invalid");
  }

  function dayOfWeek(year, month, day) {
    var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
    return js === 0 ? 7 : js;
  }

  function computeOrdinal(year, month, day) {
    return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
  }

  function uncomputeOrdinal(year, ordinal) {
    var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
        month0 = table.findIndex(function (i) {
      return i < ordinal;
    }),
        day = ordinal - table[month0];
    return {
      month: month0 + 1,
      day: day
    };
  }
  /**
   * @private
   */


  function gregorianToWeek(gregObj) {
    var year = gregObj.year,
        month = gregObj.month,
        day = gregObj.day,
        ordinal = computeOrdinal(year, month, day),
        weekday = dayOfWeek(year, month, day);
    var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
        weekYear;

    if (weekNumber < 1) {
      weekYear = year - 1;
      weekNumber = weeksInWeekYear(weekYear);
    } else if (weekNumber > weeksInWeekYear(year)) {
      weekYear = year + 1;
      weekNumber = 1;
    } else {
      weekYear = year;
    }

    return Object.assign({
      weekYear: weekYear,
      weekNumber: weekNumber,
      weekday: weekday
    }, timeObject(gregObj));
  }

  function weekToGregorian(weekData) {
    var weekYear = weekData.weekYear,
        weekNumber = weekData.weekNumber,
        weekday = weekData.weekday,
        weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
        yearInDays = daysInYear(weekYear);
    var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
        year;

    if (ordinal < 1) {
      year = weekYear - 1;
      ordinal += daysInYear(year);
    } else if (ordinal > yearInDays) {
      year = weekYear + 1;
      ordinal -= daysInYear(weekYear);
    } else {
      year = weekYear;
    }

    var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
        month = _uncomputeOrdinal.month,
        day = _uncomputeOrdinal.day;

    return Object.assign({
      year: year,
      month: month,
      day: day
    }, timeObject(weekData));
  }

  function gregorianToOrdinal(gregData) {
    var year = gregData.year,
        month = gregData.month,
        day = gregData.day,
        ordinal = computeOrdinal(year, month, day);
    return Object.assign({
      year: year,
      ordinal: ordinal
    }, timeObject(gregData));
  }

  function ordinalToGregorian(ordinalData) {
    var year = ordinalData.year,
        ordinal = ordinalData.ordinal,
        _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
        month = _uncomputeOrdinal2.month,
        day = _uncomputeOrdinal2.day;

    return Object.assign({
      year: year,
      month: month,
      day: day
    }, timeObject(ordinalData));
  }

  function hasInvalidWeekData(obj) {
    var validYear = isInteger(obj.weekYear),
        validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
        validWeekday = integerBetween(obj.weekday, 1, 7);

    if (!validYear) {
      return unitOutOfRange("weekYear", obj.weekYear);
    } else if (!validWeek) {
      return unitOutOfRange("week", obj.week);
    } else if (!validWeekday) {
      return unitOutOfRange("weekday", obj.weekday);
    } else return false;
  }

  function hasInvalidOrdinalData(obj) {
    var validYear = isInteger(obj.year),
        validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));

    if (!validYear) {
      return unitOutOfRange("year", obj.year);
    } else if (!validOrdinal) {
      return unitOutOfRange("ordinal", obj.ordinal);
    } else return false;
  }

  function hasInvalidGregorianData(obj) {
    var validYear = isInteger(obj.year),
        validMonth = integerBetween(obj.month, 1, 12),
        validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

    if (!validYear) {
      return unitOutOfRange("year", obj.year);
    } else if (!validMonth) {
      return unitOutOfRange("month", obj.month);
    } else if (!validDay) {
      return unitOutOfRange("day", obj.day);
    } else return false;
  }

  function hasInvalidTimeData(obj) {
    var hour = obj.hour,
        minute = obj.minute,
        second = obj.second,
        millisecond = obj.millisecond;
    var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0,
        validMinute = integerBetween(minute, 0, 59),
        validSecond = integerBetween(second, 0, 59),
        validMillisecond = integerBetween(millisecond, 0, 999);

    if (!validHour) {
      return unitOutOfRange("hour", hour);
    } else if (!validMinute) {
      return unitOutOfRange("minute", minute);
    } else if (!validSecond) {
      return unitOutOfRange("second", second);
    } else if (!validMillisecond) {
      return unitOutOfRange("millisecond", millisecond);
    } else return false;
  }

  var INVALID$2 = "Invalid DateTime";
  var MAX_DATE = 8.64e15;

  function unsupportedZone(zone) {
    return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
  } // we cache week data on the DT object and this intermediates the cache


  function possiblyCachedWeekData(dt) {
    if (dt.weekData === null) {
      dt.weekData = gregorianToWeek(dt.c);
    }

    return dt.weekData;
  } // clone really means, "make a new object with these modifications". all "setters" really use this
  // to create a new object while only changing some of the properties


  function clone$1(inst, alts) {
    var current = {
      ts: inst.ts,
      zone: inst.zone,
      c: inst.c,
      o: inst.o,
      loc: inst.loc,
      invalid: inst.invalid
    };
    return new DateTime(Object.assign({}, current, alts, {
      old: current
    }));
  } // find the right offset a given local time. The o input is our guess, which determines which
  // offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


  function fixOffset(localTS, o, tz) {
    // Our UTC time is just a guess because our offset is just a guess
    var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

    var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

    if (o === o2) {
      return [utcGuess, o];
    } // If not, change the ts by the difference in the offset


    utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

    var o3 = tz.offset(utcGuess);

    if (o2 === o3) {
      return [utcGuess, o2];
    } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


    return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
  } // convert an epoch timestamp into a calendar object with the given offset


  function tsToObj(ts, offset) {
    ts += offset * 60 * 1000;
    var d = new Date(ts);
    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      day: d.getUTCDate(),
      hour: d.getUTCHours(),
      minute: d.getUTCMinutes(),
      second: d.getUTCSeconds(),
      millisecond: d.getUTCMilliseconds()
    };
  } // convert a calendar object to a epoch timestamp


  function objToTS(obj, offset, zone) {
    return fixOffset(objToLocalTS(obj), offset, zone);
  } // create a new DT instance by adding a duration, adjusting for DSTs


  function adjustTime(inst, dur) {
    var oPre = inst.o,
        year = inst.c.year + Math.trunc(dur.years),
        month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3,
        c = Object.assign({}, inst.c, {
      year: year,
      month: month,
      day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
    }),
        millisToAdd = Duration.fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds
    }).as("milliseconds"),
        localTS = objToLocalTS(c);

    var _fixOffset = fixOffset(localTS, oPre, inst.zone),
        ts = _fixOffset[0],
        o = _fixOffset[1];

    if (millisToAdd !== 0) {
      ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

      o = inst.zone.offset(ts);
    }

    return {
      ts: ts,
      o: o
    };
  } // helper useful in turning the results of parsing into real dates
  // by handling the zone options


  function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
    var setZone = opts.setZone,
        zone = opts.zone;

    if (parsed && Object.keys(parsed).length !== 0) {
      var interpretationZone = parsedZone || zone,
          inst = DateTime.fromObject(Object.assign(parsed, opts, {
        zone: interpretationZone,
        // setZone is a valid option in the calling methods, but not in fromObject
        setZone: undefined
      }));
      return setZone ? inst : inst.setZone(zone);
    } else {
      return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
    }
  } // if you want to output a technical format (e.g. RFC 2822), this helper
  // helps handle the details


  function toTechFormat(dt, format, allowZ) {
    if (allowZ === void 0) {
      allowZ = true;
    }

    return dt.isValid ? Formatter.create(Locale.create("en-US"), {
      allowZ: allowZ,
      forceSimple: true
    }).formatDateTimeFromString(dt, format) : null;
  } // technical time formats (e.g. the time part of ISO 8601), take some options
  // and this commonizes their handling


  function toTechTimeFormat(dt, _ref) {
    var _ref$suppressSeconds = _ref.suppressSeconds,
        suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
        _ref$suppressMillisec = _ref.suppressMilliseconds,
        suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
        includeOffset = _ref.includeOffset,
        _ref$includePrefix = _ref.includePrefix,
        includePrefix = _ref$includePrefix === void 0 ? false : _ref$includePrefix,
        _ref$includeZone = _ref.includeZone,
        includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
        _ref$spaceZone = _ref.spaceZone,
        spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone,
        _ref$format = _ref.format,
        format = _ref$format === void 0 ? "extended" : _ref$format;
    var fmt = format === "basic" ? "HHmm" : "HH:mm";

    if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
      fmt += format === "basic" ? "ss" : ":ss";

      if (!suppressMilliseconds || dt.millisecond !== 0) {
        fmt += ".SSS";
      }
    }

    if ((includeZone || includeOffset) && spaceZone) {
      fmt += " ";
    }

    if (includeZone) {
      fmt += "z";
    } else if (includeOffset) {
      fmt += format === "basic" ? "ZZZ" : "ZZ";
    }

    var str = toTechFormat(dt, fmt);

    if (includePrefix) {
      str = "T" + str;
    }

    return str;
  } // defaults for unspecified units in the supported calendars


  var defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  },
      defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  },
      defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }; // Units in the supported calendars, sorted by bigness

  var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
      orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
      orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

  function normalizeUnit(unit) {
    var normalized = {
      year: "year",
      years: "year",
      month: "month",
      months: "month",
      day: "day",
      days: "day",
      hour: "hour",
      hours: "hour",
      minute: "minute",
      minutes: "minute",
      quarter: "quarter",
      quarters: "quarter",
      second: "second",
      seconds: "second",
      millisecond: "millisecond",
      milliseconds: "millisecond",
      weekday: "weekday",
      weekdays: "weekday",
      weeknumber: "weekNumber",
      weeksnumber: "weekNumber",
      weeknumbers: "weekNumber",
      weekyear: "weekYear",
      weekyears: "weekYear",
      ordinal: "ordinal"
    }[unit.toLowerCase()];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  } // this is a dumbed down version of fromObject() that runs about 60% faster
  // but doesn't do any validation, makes a bunch of assumptions about what units
  // are present, and so on.


  function quickDT(obj, zone) {
    // assume we have the higher-order units
    for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done;) {
      var u = _step.value;

      if (isUndefined(obj[u])) {
        obj[u] = defaultUnitValues[u];
      }
    }

    var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

    if (invalid) {
      return DateTime.invalid(invalid);
    }

    var tsNow = Settings.now(),
        offsetProvis = zone.offset(tsNow),
        _objToTS = objToTS(obj, offsetProvis, zone),
        ts = _objToTS[0],
        o = _objToTS[1];

    return new DateTime({
      ts: ts,
      zone: zone,
      o: o
    });
  }

  function diffRelative(start, end, opts) {
    var round = isUndefined(opts.round) ? true : opts.round,
        format = function format(c, unit) {
      c = roundTo(c, round || opts.calendary ? 0 : 2, true);
      var formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    },
        differ = function differ(unit) {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };

    if (opts.unit) {
      return format(differ(opts.unit), opts.unit);
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done;) {
      var unit = _step2.value;
      var count = differ(unit);

      if (Math.abs(count) >= 1) {
        return format(count, unit);
      }
    }

    return format(0, opts.units[opts.units.length - 1]);
  }
  /**
   * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
   *
   * A DateTime comprises of:
   * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
   * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
   * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
   *
   * Here is a brief overview of the most commonly used functionality it provides:
   *
   * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
   * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
   * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
   * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
   * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
   * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
   * * **Output**: To convert the DateTime to other representations, use the {@link toRelative}, {@link toRelativeCalendar}, {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
   *
   * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
   */


  var DateTime = /*#__PURE__*/function () {
    /**
     * @access private
     */
    function DateTime(config) {
      var zone = config.zone || Settings.defaultZone;
      var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
      /**
       * @access private
       */

      this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
      var c = null,
          o = null;

      if (!invalid) {
        var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);

        if (unchanged) {
          var _ref2 = [config.old.c, config.old.o];
          c = _ref2[0];
          o = _ref2[1];
        } else {
          var ot = zone.offset(this.ts);
          c = tsToObj(this.ts, ot);
          invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
          c = invalid ? null : c;
          o = invalid ? null : ot;
        }
      }
      /**
       * @access private
       */


      this._zone = zone;
      /**
       * @access private
       */

      this.loc = config.loc || Locale.create();
      /**
       * @access private
       */

      this.invalid = invalid;
      /**
       * @access private
       */

      this.weekData = null;
      /**
       * @access private
       */

      this.c = c;
      /**
       * @access private
       */

      this.o = o;
      /**
       * @access private
       */

      this.isLuxonDateTime = true;
    } // CONSTRUCT

    /**
     * Create a DateTime for the current instant, in the system's time zone.
     *
     * Use Settings to override these default values if needed.
     * @example DateTime.now().toISO() //~> now in the ISO format
     * @return {DateTime}
     */


    DateTime.now = function now() {
      return new DateTime({});
    }
    /**
     * Create a local DateTime
     * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month, 1-indexed
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @example DateTime.local()                            //~> now
     * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
     * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
     * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
     * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
     * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
     * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
     * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
     * @return {DateTime}
     */
    ;

    DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
      if (isUndefined(year)) {
        return new DateTime({});
      } else {
        return quickDT({
          year: year,
          month: month,
          day: day,
          hour: hour,
          minute: minute,
          second: second,
          millisecond: millisecond
        }, Settings.defaultZone);
      }
    }
    /**
     * Create a DateTime in UTC
     * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
     * @param {number} [month=1] - The month, 1-indexed
     * @param {number} [day=1] - The day of the month
     * @param {number} [hour=0] - The hour of the day, in 24-hour time
     * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
     * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
     * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
     * @example DateTime.utc()                            //~> now
     * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
     * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
     * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
     * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
     * @return {DateTime}
     */
    ;

    DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
      if (isUndefined(year)) {
        return new DateTime({
          ts: Settings.now(),
          zone: FixedOffsetZone.utcInstance
        });
      } else {
        return quickDT({
          year: year,
          month: month,
          day: day,
          hour: hour,
          minute: minute,
          second: second,
          millisecond: millisecond
        }, FixedOffsetZone.utcInstance);
      }
    }
    /**
     * Create a DateTime from a JavaScript Date object. Uses the default zone.
     * @param {Date} date - a JavaScript Date object
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @return {DateTime}
     */
    ;

    DateTime.fromJSDate = function fromJSDate(date, options) {
      if (options === void 0) {
        options = {};
      }

      var ts = isDate(date) ? date.valueOf() : NaN;

      if (Number.isNaN(ts)) {
        return DateTime.invalid("invalid input");
      }

      var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);

      if (!zoneToUse.isValid) {
        return DateTime.invalid(unsupportedZone(zoneToUse));
      }

      return new DateTime({
        ts: ts,
        zone: zoneToUse,
        loc: Locale.fromObject(options)
      });
    }
    /**
     * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} milliseconds - a number of milliseconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @return {DateTime}
     */
    ;

    DateTime.fromMillis = function fromMillis(milliseconds, options) {
      if (options === void 0) {
        options = {};
      }

      if (!isNumber(milliseconds)) {
        throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + _typeof(milliseconds) + " with value " + milliseconds);
      } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
        // this isn't perfect because because we can still end up out of range because of additional shifting, but it's a start
        return DateTime.invalid("Timestamp out of range");
      } else {
        return new DateTime({
          ts: milliseconds,
          zone: normalizeZone(options.zone, Settings.defaultZone),
          loc: Locale.fromObject(options)
        });
      }
    }
    /**
     * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
     * @param {number} seconds - a number of seconds since 1970 UTC
     * @param {Object} options - configuration options for the DateTime
     * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
     * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
     * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @return {DateTime}
     */
    ;

    DateTime.fromSeconds = function fromSeconds(seconds, options) {
      if (options === void 0) {
        options = {};
      }

      if (!isNumber(seconds)) {
        throw new InvalidArgumentError("fromSeconds requires a numerical input");
      } else {
        return new DateTime({
          ts: seconds * 1000,
          zone: normalizeZone(options.zone, Settings.defaultZone),
          loc: Locale.fromObject(options)
        });
      }
    }
    /**
     * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
     * @param {Object} obj - the object to create the DateTime from
     * @param {number} obj.year - a year, such as 1987
     * @param {number} obj.month - a month, 1-12
     * @param {number} obj.day - a day of the month, 1-31, depending on the month
     * @param {number} obj.ordinal - day of the year, 1-365 or 366
     * @param {number} obj.weekYear - an ISO week year
     * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
     * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
     * @param {number} obj.hour - hour of the day, 0-23
     * @param {number} obj.minute - minute of the hour, 0-59
     * @param {number} obj.second - second of the minute, 0-59
     * @param {number} obj.millisecond - millisecond of the second, 0-999
     * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
     * @param {string} [obj.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
     * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
     * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
     * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
     * @return {DateTime}
     */
    ;

    DateTime.fromObject = function fromObject(obj) {
      var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);

      if (!zoneToUse.isValid) {
        return DateTime.invalid(unsupportedZone(zoneToUse));
      }

      var tsNow = Settings.now(),
          offsetProvis = zoneToUse.offset(tsNow),
          normalized = normalizeObject(obj, normalizeUnit, ["zone", "locale", "outputCalendar", "numberingSystem"]),
          containsOrdinal = !isUndefined(normalized.ordinal),
          containsGregorYear = !isUndefined(normalized.year),
          containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
          containsGregor = containsGregorYear || containsGregorMD,
          definiteWeekDef = normalized.weekYear || normalized.weekNumber,
          loc = Locale.fromObject(obj); // cases:
      // just a weekday -> this week's instance of that weekday, no worries
      // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
      // (gregorian month or day) + ordinal -> error
      // otherwise just use weeks or ordinals or gregorian, depending on what's specified

      if ((containsGregor || containsOrdinal) && definiteWeekDef) {
        throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      }

      if (containsGregorMD && containsOrdinal) {
        throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
      }

      var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

      var units,
          defaultValues,
          objNow = tsToObj(tsNow, offsetProvis);

      if (useWeekData) {
        units = orderedWeekUnits;
        defaultValues = defaultWeekUnitValues;
        objNow = gregorianToWeek(objNow);
      } else if (containsOrdinal) {
        units = orderedOrdinalUnits;
        defaultValues = defaultOrdinalUnitValues;
        objNow = gregorianToOrdinal(objNow);
      } else {
        units = orderedUnits$1;
        defaultValues = defaultUnitValues;
      } // set default values for missing stuff


      var foundFirst = false;

      for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done;) {
        var u = _step3.value;
        var v = normalized[u];

        if (!isUndefined(v)) {
          foundFirst = true;
        } else if (foundFirst) {
          normalized[u] = defaultValues[u];
        } else {
          normalized[u] = objNow[u];
        }
      } // make sure the values we have are in range


      var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
          invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

      if (invalid) {
        return DateTime.invalid(invalid);
      } // compute the actual time


      var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
          _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
          tsFinal = _objToTS2[0],
          offsetFinal = _objToTS2[1],
          inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc: loc
      }); // gregorian data + weekday serves only to validate


      if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
        return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
      }

      return inst;
    }
    /**
     * Create a DateTime from an ISO 8601 string
     * @param {string} text - the ISO string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromISO('2016-05-25T09:08:34.123')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
     * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
     * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
     * @example DateTime.fromISO('2016-W05-4')
     * @return {DateTime}
     */
    ;

    DateTime.fromISO = function fromISO(text, opts) {
      if (opts === void 0) {
        opts = {};
      }

      var _parseISODate = parseISODate(text),
          vals = _parseISODate[0],
          parsedZone = _parseISODate[1];

      return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
    }
    /**
     * Create a DateTime from an RFC 2822 string
     * @param {string} text - the RFC 2822 string
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
     * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
     * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
     * @return {DateTime}
     */
    ;

    DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
      if (opts === void 0) {
        opts = {};
      }

      var _parseRFC2822Date = parseRFC2822Date(text),
          vals = _parseRFC2822Date[0],
          parsedZone = _parseRFC2822Date[1];

      return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
    }
    /**
     * Create a DateTime from an HTTP header date
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @param {string} text - the HTTP header date
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
     * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
     * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
     * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
     * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
     * @return {DateTime}
     */
    ;

    DateTime.fromHTTP = function fromHTTP(text, opts) {
      if (opts === void 0) {
        opts = {};
      }

      var _parseHTTPDate = parseHTTPDate(text),
          vals = _parseHTTPDate[0],
          parsedZone = _parseHTTPDate[1];

      return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
    }
    /**
     * Create a DateTime from an input string and format string.
     * Defaults to en-US if no locale has been specified, regardless of the system's locale.
     * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @return {DateTime}
     */
    ;

    DateTime.fromFormat = function fromFormat(text, fmt, opts) {
      if (opts === void 0) {
        opts = {};
      }

      if (isUndefined(text) || isUndefined(fmt)) {
        throw new InvalidArgumentError("fromFormat requires an input string and a format");
      }

      var _opts = opts,
          _opts$locale = _opts.locale,
          locale = _opts$locale === void 0 ? null : _opts$locale,
          _opts$numberingSystem = _opts.numberingSystem,
          numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
          localeToUse = Locale.fromOpts({
        locale: locale,
        numberingSystem: numberingSystem,
        defaultToEN: true
      }),
          _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
          vals = _parseFromTokens[0],
          parsedZone = _parseFromTokens[1],
          invalid = _parseFromTokens[2];

      if (invalid) {
        return DateTime.invalid(invalid);
      } else {
        return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
      }
    }
    /**
     * @deprecated use fromFormat instead
     */
    ;

    DateTime.fromString = function fromString(text, fmt, opts) {
      if (opts === void 0) {
        opts = {};
      }

      return DateTime.fromFormat(text, fmt, opts);
    }
    /**
     * Create a DateTime from a SQL date, time, or datetime
     * Defaults to en-US if no locale has been specified, regardless of the system's locale
     * @param {string} text - the string to parse
     * @param {Object} opts - options to affect the creation
     * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
     * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
     * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
     * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
     * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
     * @example DateTime.fromSQL('2017-05-15')
     * @example DateTime.fromSQL('2017-05-15 09:12:34')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
     * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
     * @example DateTime.fromSQL('09:12:34.342')
     * @return {DateTime}
     */
    ;

    DateTime.fromSQL = function fromSQL(text, opts) {
      if (opts === void 0) {
        opts = {};
      }

      var _parseSQL = parseSQL(text),
          vals = _parseSQL[0],
          parsedZone = _parseSQL[1];

      return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
    }
    /**
     * Create an invalid DateTime.
     * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
     * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
     * @return {DateTime}
     */
    ;

    DateTime.invalid = function invalid(reason, explanation) {
      if (explanation === void 0) {
        explanation = null;
      }

      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
      }

      var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

      if (Settings.throwOnInvalid) {
        throw new InvalidDateTimeError(invalid);
      } else {
        return new DateTime({
          invalid: invalid
        });
      }
    }
    /**
     * Check if an object is a DateTime. Works across context boundaries
     * @param {object} o
     * @return {boolean}
     */
    ;

    DateTime.isDateTime = function isDateTime(o) {
      return o && o.isLuxonDateTime || false;
    } // INFO

    /**
     * Get the value of unit.
     * @param {string} unit - a unit such as 'minute' or 'day'
     * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
     * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
     * @return {number}
     */
    ;

    var _proto = DateTime.prototype;

    _proto.get = function get(unit) {
      return this[unit];
    }
    /**
     * Returns whether the DateTime is valid. Invalid DateTimes occur when:
     * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
     * * The DateTime was created by an operation on another invalid date
     * @type {boolean}
     */
    ;
    /**
     * Returns the resolved Intl options for this DateTime.
     * This is useful in understanding the behavior of formatting methods
     * @param {Object} opts - the same options as toLocaleString
     * @return {Object}
     */


    _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
      if (opts === void 0) {
        opts = {};
      }

      var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
          locale = _Formatter$create$res.locale,
          numberingSystem = _Formatter$create$res.numberingSystem,
          calendar = _Formatter$create$res.calendar;

      return {
        locale: locale,
        numberingSystem: numberingSystem,
        outputCalendar: calendar
      };
    } // TRANSFORM

    /**
     * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
     *
     * Equivalent to {@link setZone}('utc')
     * @param {number} [offset=0] - optionally, an offset from UTC in minutes
     * @param {Object} [opts={}] - options to pass to `setZone()`
     * @return {DateTime}
     */
    ;

    _proto.toUTC = function toUTC(offset, opts) {
      if (offset === void 0) {
        offset = 0;
      }

      if (opts === void 0) {
        opts = {};
      }

      return this.setZone(FixedOffsetZone.instance(offset), opts);
    }
    /**
     * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
     *
     * Equivalent to `setZone('local')`
     * @return {DateTime}
     */
    ;

    _proto.toLocal = function toLocal() {
      return this.setZone(Settings.defaultZone);
    }
    /**
     * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
     *
     * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
     * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
     * @param {Object} opts - options
     * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
     * @return {DateTime}
     */
    ;

    _proto.setZone = function setZone(zone, _temp) {
      var _ref3 = _temp === void 0 ? {} : _temp,
          _ref3$keepLocalTime = _ref3.keepLocalTime,
          keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime,
          _ref3$keepCalendarTim = _ref3.keepCalendarTime,
          keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;

      zone = normalizeZone(zone, Settings.defaultZone);

      if (zone.equals(this.zone)) {
        return this;
      } else if (!zone.isValid) {
        return DateTime.invalid(unsupportedZone(zone));
      } else {
        var newTS = this.ts;

        if (keepLocalTime || keepCalendarTime) {
          var offsetGuess = zone.offset(this.ts);
          var asObj = this.toObject();

          var _objToTS3 = objToTS(asObj, offsetGuess, zone);

          newTS = _objToTS3[0];
        }

        return clone$1(this, {
          ts: newTS,
          zone: zone
        });
      }
    }
    /**
     * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
     * @param {Object} properties - the properties to set
     * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
     * @return {DateTime}
     */
    ;

    _proto.reconfigure = function reconfigure(_temp2) {
      var _ref4 = _temp2 === void 0 ? {} : _temp2,
          locale = _ref4.locale,
          numberingSystem = _ref4.numberingSystem,
          outputCalendar = _ref4.outputCalendar;

      var loc = this.loc.clone({
        locale: locale,
        numberingSystem: numberingSystem,
        outputCalendar: outputCalendar
      });
      return clone$1(this, {
        loc: loc
      });
    }
    /**
     * "Set" the locale. Returns a newly-constructed DateTime.
     * Just a convenient alias for reconfigure({ locale })
     * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
     * @return {DateTime}
     */
    ;

    _proto.setLocale = function setLocale(locale) {
      return this.reconfigure({
        locale: locale
      });
    }
    /**
     * "Set" the values of specified units. Returns a newly-constructed DateTime.
     * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
     * @param {Object} values - a mapping of units to numbers
     * @example dt.set({ year: 2017 })
     * @example dt.set({ hour: 8, minute: 30 })
     * @example dt.set({ weekday: 5 })
     * @example dt.set({ year: 2005, ordinal: 234 })
     * @return {DateTime}
     */
    ;

    _proto.set = function set(values) {
      if (!this.isValid) return this;
      var normalized = normalizeObject(values, normalizeUnit, []),
          settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);
      var mixed;

      if (settingWeekStuff) {
        mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
      } else if (!isUndefined(normalized.ordinal)) {
        mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
      } else {
        mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
        // use the last day of the right month

        if (isUndefined(normalized.day)) {
          mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
        }
      }

      var _objToTS4 = objToTS(mixed, this.o, this.zone),
          ts = _objToTS4[0],
          o = _objToTS4[1];

      return clone$1(this, {
        ts: ts,
        o: o
      });
    }
    /**
     * Add a period of time to this DateTime and return the resulting DateTime
     *
     * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
     * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     * @example DateTime.now().plus(123) //~> in 123 milliseconds
     * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
     * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
     * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
     * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
     * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
     * @return {DateTime}
     */
    ;

    _proto.plus = function plus(duration) {
      if (!this.isValid) return this;
      var dur = friendlyDuration(duration);
      return clone$1(this, adjustTime(this, dur));
    }
    /**
     * Subtract a period of time to this DateTime and return the resulting DateTime
     * See {@link plus}
     * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
     @return {DateTime}
    */
    ;

    _proto.minus = function minus(duration) {
      if (!this.isValid) return this;
      var dur = friendlyDuration(duration).negate();
      return clone$1(this, adjustTime(this, dur));
    }
    /**
     * "Set" this DateTime to the beginning of a unit of time.
     * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
     * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
     * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
     * @return {DateTime}
     */
    ;

    _proto.startOf = function startOf(unit) {
      if (!this.isValid) return this;
      var o = {},
          normalizedUnit = Duration.normalizeUnit(unit);

      switch (normalizedUnit) {
        case "years":
          o.month = 1;
        // falls through

        case "quarters":
        case "months":
          o.day = 1;
        // falls through

        case "weeks":
        case "days":
          o.hour = 0;
        // falls through

        case "hours":
          o.minute = 0;
        // falls through

        case "minutes":
          o.second = 0;
        // falls through

        case "seconds":
          o.millisecond = 0;
          break;
        // no default, invalid units throw in normalizeUnit()
      }

      if (normalizedUnit === "weeks") {
        o.weekday = 1;
      }

      if (normalizedUnit === "quarters") {
        var q = Math.ceil(this.month / 3);
        o.month = (q - 1) * 3 + 1;
      }

      return this.set(o);
    }
    /**
     * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
     * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
     * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
     * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
     * @return {DateTime}
     */
    ;

    _proto.endOf = function endOf(unit) {
      var _this$plus;

      return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
    } // OUTPUT

    /**
     * Returns a string representation of this DateTime formatted according to the specified format string.
     * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
     * Defaults to en-US if no locale has been specified, regardless of the system's locale.
     * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
     * @param {string} fmt - the format string
     * @param {Object} opts - opts to override the configuration options
     * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
     * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
     * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
     * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
     * @return {string}
     */
    ;

    _proto.toFormat = function toFormat(fmt, opts) {
      if (opts === void 0) {
        opts = {};
      }

      return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID$2;
    }
    /**
     * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
     * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
     * of the DateTime in the assigned locale.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @param opts {Object} - Intl.DateTimeFormat constructor options and configuration options
     * @example DateTime.now().toLocaleString(); //=> 4/20/2017
     * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
     * @example DateTime.now().toLocaleString({ locale: 'en-gb' }); //=> '20/04/2017'
     * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
     * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
     * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
     * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
     * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
     * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hour12: false }); //=> '11:32'
     * @return {string}
     */
    ;

    _proto.toLocaleString = function toLocaleString(opts) {
      if (opts === void 0) {
        opts = DATE_SHORT;
      }

      return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
    }
    /**
     * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
     * Defaults to the system's locale if no locale has been specified
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
     * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
     * @example DateTime.now().toLocaleParts(); //=> [
     *                                   //=>   { type: 'day', value: '25' },
     *                                   //=>   { type: 'literal', value: '/' },
     *                                   //=>   { type: 'month', value: '05' },
     *                                   //=>   { type: 'literal', value: '/' },
     *                                   //=>   { type: 'year', value: '1982' }
     *                                   //=> ]
     */
    ;

    _proto.toLocaleParts = function toLocaleParts(opts) {
      if (opts === void 0) {
        opts = {};
      }

      return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
     * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
     * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
     * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
     * @return {string}
     */
    ;

    _proto.toISO = function toISO(opts) {
      if (opts === void 0) {
        opts = {};
      }

      if (!this.isValid) {
        return null;
      }

      return this.toISODate(opts) + "T" + this.toISOTime(opts);
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's date component
     * @param {Object} opts - options
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
     * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
     * @return {string}
     */
    ;

    _proto.toISODate = function toISODate(_temp3) {
      var _ref5 = _temp3 === void 0 ? {} : _temp3,
          _ref5$format = _ref5.format,
          format = _ref5$format === void 0 ? "extended" : _ref5$format;

      var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";

      if (this.year > 9999) {
        fmt = "+" + fmt;
      }

      return toTechFormat(this, fmt);
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's week date
     * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
     * @return {string}
     */
    ;

    _proto.toISOWeekDate = function toISOWeekDate() {
      return toTechFormat(this, "kkkk-'W'WW-c");
    }
    /**
     * Returns an ISO 8601-compliant string representation of this DateTime's time component
     * @param {Object} opts - options
     * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
     * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
     * @param {string} [opts.format='extended'] - choose between the basic and extended format
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
     * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
     * @return {string}
     */
    ;

    _proto.toISOTime = function toISOTime(_temp4) {
      var _ref6 = _temp4 === void 0 ? {} : _temp4,
          _ref6$suppressMillise = _ref6.suppressMilliseconds,
          suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise,
          _ref6$suppressSeconds = _ref6.suppressSeconds,
          suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds,
          _ref6$includeOffset = _ref6.includeOffset,
          includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
          _ref6$includePrefix = _ref6.includePrefix,
          includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix,
          _ref6$format = _ref6.format,
          format = _ref6$format === void 0 ? "extended" : _ref6$format;

      return toTechTimeFormat(this, {
        suppressSeconds: suppressSeconds,
        suppressMilliseconds: suppressMilliseconds,
        includeOffset: includeOffset,
        includePrefix: includePrefix,
        format: format
      });
    }
    /**
     * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
     * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
     * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
     * @return {string}
     */
    ;

    _proto.toRFC2822 = function toRFC2822() {
      return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in HTTP headers.
     * Specifically, the string conforms to RFC 1123.
     * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
     * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
     * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
     * @return {string}
     */
    ;

    _proto.toHTTP = function toHTTP() {
      return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Date
     * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
     * @return {string}
     */
    ;

    _proto.toSQLDate = function toSQLDate() {
      return toTechFormat(this, "yyyy-MM-dd");
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL Time
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @example DateTime.utc().toSQL() //=> '05:15:16.345'
     * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
     * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
     * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
     * @return {string}
     */
    ;

    _proto.toSQLTime = function toSQLTime(_temp5) {
      var _ref7 = _temp5 === void 0 ? {} : _temp5,
          _ref7$includeOffset = _ref7.includeOffset,
          includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset,
          _ref7$includeZone = _ref7.includeZone,
          includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;

      return toTechTimeFormat(this, {
        includeOffset: includeOffset,
        includeZone: includeZone,
        spaceZone: true
      });
    }
    /**
     * Returns a string representation of this DateTime appropriate for use in SQL DateTime
     * @param {Object} opts - options
     * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
     * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
     * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
     * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
     * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
     * @return {string}
     */
    ;

    _proto.toSQL = function toSQL(opts) {
      if (opts === void 0) {
        opts = {};
      }

      if (!this.isValid) {
        return null;
      }

      return this.toSQLDate() + " " + this.toSQLTime(opts);
    }
    /**
     * Returns a string representation of this DateTime appropriate for debugging
     * @return {string}
     */
    ;

    _proto.toString = function toString() {
      return this.isValid ? this.toISO() : INVALID$2;
    }
    /**
     * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
     * @return {number}
     */
    ;

    _proto.valueOf = function valueOf() {
      return this.toMillis();
    }
    /**
     * Returns the epoch milliseconds of this DateTime.
     * @return {number}
     */
    ;

    _proto.toMillis = function toMillis() {
      return this.isValid ? this.ts : NaN;
    }
    /**
     * Returns the epoch seconds of this DateTime.
     * @return {number}
     */
    ;

    _proto.toSeconds = function toSeconds() {
      return this.isValid ? this.ts / 1000 : NaN;
    }
    /**
     * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
     * @return {string}
     */
    ;

    _proto.toJSON = function toJSON() {
      return this.toISO();
    }
    /**
     * Returns a BSON serializable equivalent to this DateTime.
     * @return {Date}
     */
    ;

    _proto.toBSON = function toBSON() {
      return this.toJSDate();
    }
    /**
     * Returns a JavaScript object with this DateTime's year, month, day, and so on.
     * @param opts - options for generating the object
     * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
     * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
     * @return {Object}
     */
    ;

    _proto.toObject = function toObject(opts) {
      if (opts === void 0) {
        opts = {};
      }

      if (!this.isValid) return {};
      var base = Object.assign({}, this.c);

      if (opts.includeConfig) {
        base.outputCalendar = this.outputCalendar;
        base.numberingSystem = this.loc.numberingSystem;
        base.locale = this.loc.locale;
      }

      return base;
    }
    /**
     * Returns a JavaScript Date equivalent to this DateTime.
     * @return {Date}
     */
    ;

    _proto.toJSDate = function toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    } // COMPARE

    /**
     * Return the difference between two DateTimes as a Duration.
     * @param {DateTime} otherDateTime - the DateTime to compare this one to
     * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @example
     * var i1 = DateTime.fromISO('1982-05-25T09:45'),
     *     i2 = DateTime.fromISO('1983-10-14T10:30');
     * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
     * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
     * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
     * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
     * @return {Duration}
     */
    ;

    _proto.diff = function diff(otherDateTime, unit, opts) {
      if (unit === void 0) {
        unit = "milliseconds";
      }

      if (opts === void 0) {
        opts = {};
      }

      if (!this.isValid || !otherDateTime.isValid) {
        return Duration.invalid(this.invalid || otherDateTime.invalid, "created by diffing an invalid DateTime");
      }

      var durOpts = Object.assign({
        locale: this.locale,
        numberingSystem: this.numberingSystem
      }, opts);

      var units = maybeArray(unit).map(Duration.normalizeUnit),
          otherIsLater = otherDateTime.valueOf() > this.valueOf(),
          earlier = otherIsLater ? this : otherDateTime,
          later = otherIsLater ? otherDateTime : this,
          diffed = _diff(earlier, later, units, durOpts);

      return otherIsLater ? diffed.negate() : diffed;
    }
    /**
     * Return the difference between this DateTime and right now.
     * See {@link diff}
     * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
     * @param {Object} opts - options that affect the creation of the Duration
     * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
     * @return {Duration}
     */
    ;

    _proto.diffNow = function diffNow(unit, opts) {
      if (unit === void 0) {
        unit = "milliseconds";
      }

      if (opts === void 0) {
        opts = {};
      }

      return this.diff(DateTime.now(), unit, opts);
    }
    /**
     * Return an Interval spanning between this DateTime and another DateTime
     * @param {DateTime} otherDateTime - the other end point of the Interval
     * @return {Interval}
     */
    ;

    _proto.until = function until(otherDateTime) {
      return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
    }
    /**
     * Return whether this DateTime is in the same unit of time as another DateTime.
     * Higher-order units must also be identical for this function to return `true`.
     * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link setZone} to convert one of the dates if needed.
     * @param {DateTime} otherDateTime - the other DateTime
     * @param {string} unit - the unit of time to check sameness on
     * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
     * @return {boolean}
     */
    ;

    _proto.hasSame = function hasSame(otherDateTime, unit) {
      if (!this.isValid) return false;
      var inputMs = otherDateTime.valueOf();
      var otherZoneDateTime = this.setZone(otherDateTime.zone, {
        keepLocalTime: true
      });
      return otherZoneDateTime.startOf(unit) <= inputMs && inputMs <= otherZoneDateTime.endOf(unit);
    }
    /**
     * Equality check
     * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
     * To compare just the millisecond values, use `+dt1 === +dt2`.
     * @param {DateTime} other - the other DateTime
     * @return {boolean}
     */
    ;

    _proto.equals = function equals(other) {
      return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
    }
    /**
     * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
     * platform supports Intl.RelativeTimeFormat. Rounds down by default.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
     * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
     * @param {boolean} [options.round=true] - whether to round the numbers in the output.
     * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
     * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
     * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
     * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
     * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
     * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
     */
    ;

    _proto.toRelative = function toRelative(options) {
      if (options === void 0) {
        options = {};
      }

      if (!this.isValid) return null;
      var base = options.base || DateTime.fromObject({
        zone: this.zone
      }),
          padding = options.padding ? this < base ? -options.padding : options.padding : 0;
      return diffRelative(base, this.plus(padding), Object.assign(options, {
        numeric: "always",
        units: ["years", "months", "days", "hours", "minutes", "seconds"]
      }));
    }
    /**
     * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
     * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
     * @param {Object} options - options that affect the output
     * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
     * @param {string} options.locale - override the locale of this DateTime
     * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
     * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
     * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
     * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
     * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
     * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
     */
    ;

    _proto.toRelativeCalendar = function toRelativeCalendar(options) {
      if (options === void 0) {
        options = {};
      }

      if (!this.isValid) return null;
      return diffRelative(options.base || DateTime.fromObject({
        zone: this.zone
      }), this, Object.assign(options, {
        numeric: "auto",
        units: ["years", "months", "days"],
        calendary: true
      }));
    }
    /**
     * Return the min of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
     * @return {DateTime} the min DateTime, or undefined if called with no argument
     */
    ;

    DateTime.min = function min() {
      for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
        dateTimes[_key] = arguments[_key];
      }

      if (!dateTimes.every(DateTime.isDateTime)) {
        throw new InvalidArgumentError("min requires all arguments be DateTimes");
      }

      return bestBy(dateTimes, function (i) {
        return i.valueOf();
      }, Math.min);
    }
    /**
     * Return the max of several date times
     * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
     * @return {DateTime} the max DateTime, or undefined if called with no argument
     */
    ;

    DateTime.max = function max() {
      for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        dateTimes[_key2] = arguments[_key2];
      }

      if (!dateTimes.every(DateTime.isDateTime)) {
        throw new InvalidArgumentError("max requires all arguments be DateTimes");
      }

      return bestBy(dateTimes, function (i) {
        return i.valueOf();
      }, Math.max);
    } // MISC

    /**
     * Explain how a string would be parsed by fromFormat()
     * @param {string} text - the string to parse
     * @param {string} fmt - the format the string is expected to be in (see description)
     * @param {Object} options - options taken by fromFormat()
     * @return {Object}
     */
    ;

    DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
      if (options === void 0) {
        options = {};
      }

      var _options = options,
          _options$locale = _options.locale,
          locale = _options$locale === void 0 ? null : _options$locale,
          _options$numberingSys = _options.numberingSystem,
          numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
          localeToUse = Locale.fromOpts({
        locale: locale,
        numberingSystem: numberingSystem,
        defaultToEN: true
      });
      return explainFromTokens(localeToUse, text, fmt);
    }
    /**
     * @deprecated use fromFormatExplain instead
     */
    ;

    DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
      if (options === void 0) {
        options = {};
      }

      return DateTime.fromFormatExplain(text, fmt, options);
    } // FORMAT PRESETS

    /**
     * {@link toLocaleString} format like 10/14/1983
     * @type {Object}
     */
    ;

    _createClass(DateTime, [{
      key: "isValid",
      get: function get() {
        return this.invalid === null;
      }
      /**
       * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
       * @type {string}
       */

    }, {
      key: "invalidReason",
      get: function get() {
        return this.invalid ? this.invalid.reason : null;
      }
      /**
       * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
       * @type {string}
       */

    }, {
      key: "invalidExplanation",
      get: function get() {
        return this.invalid ? this.invalid.explanation : null;
      }
      /**
       * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
       *
       * @type {string}
       */

    }, {
      key: "locale",
      get: function get() {
        return this.isValid ? this.loc.locale : null;
      }
      /**
       * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
       *
       * @type {string}
       */

    }, {
      key: "numberingSystem",
      get: function get() {
        return this.isValid ? this.loc.numberingSystem : null;
      }
      /**
       * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
       *
       * @type {string}
       */

    }, {
      key: "outputCalendar",
      get: function get() {
        return this.isValid ? this.loc.outputCalendar : null;
      }
      /**
       * Get the time zone associated with this DateTime.
       * @type {Zone}
       */

    }, {
      key: "zone",
      get: function get() {
        return this._zone;
      }
      /**
       * Get the name of the time zone.
       * @type {string}
       */

    }, {
      key: "zoneName",
      get: function get() {
        return this.isValid ? this.zone.name : null;
      }
      /**
       * Get the year
       * @example DateTime.local(2017, 5, 25).year //=> 2017
       * @type {number}
       */

    }, {
      key: "year",
      get: function get() {
        return this.isValid ? this.c.year : NaN;
      }
      /**
       * Get the quarter
       * @example DateTime.local(2017, 5, 25).quarter //=> 2
       * @type {number}
       */

    }, {
      key: "quarter",
      get: function get() {
        return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
      }
      /**
       * Get the month (1-12).
       * @example DateTime.local(2017, 5, 25).month //=> 5
       * @type {number}
       */

    }, {
      key: "month",
      get: function get() {
        return this.isValid ? this.c.month : NaN;
      }
      /**
       * Get the day of the month (1-30ish).
       * @example DateTime.local(2017, 5, 25).day //=> 25
       * @type {number}
       */

    }, {
      key: "day",
      get: function get() {
        return this.isValid ? this.c.day : NaN;
      }
      /**
       * Get the hour of the day (0-23).
       * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
       * @type {number}
       */

    }, {
      key: "hour",
      get: function get() {
        return this.isValid ? this.c.hour : NaN;
      }
      /**
       * Get the minute of the hour (0-59).
       * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
       * @type {number}
       */

    }, {
      key: "minute",
      get: function get() {
        return this.isValid ? this.c.minute : NaN;
      }
      /**
       * Get the second of the minute (0-59).
       * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
       * @type {number}
       */

    }, {
      key: "second",
      get: function get() {
        return this.isValid ? this.c.second : NaN;
      }
      /**
       * Get the millisecond of the second (0-999).
       * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
       * @type {number}
       */

    }, {
      key: "millisecond",
      get: function get() {
        return this.isValid ? this.c.millisecond : NaN;
      }
      /**
       * Get the week year
       * @see https://en.wikipedia.org/wiki/ISO_week_date
       * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
       * @type {number}
       */

    }, {
      key: "weekYear",
      get: function get() {
        return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
      }
      /**
       * Get the week number of the week year (1-52ish).
       * @see https://en.wikipedia.org/wiki/ISO_week_date
       * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
       * @type {number}
       */

    }, {
      key: "weekNumber",
      get: function get() {
        return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
      }
      /**
       * Get the day of the week.
       * 1 is Monday and 7 is Sunday
       * @see https://en.wikipedia.org/wiki/ISO_week_date
       * @example DateTime.local(2014, 11, 31).weekday //=> 4
       * @type {number}
       */

    }, {
      key: "weekday",
      get: function get() {
        return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
      }
      /**
       * Get the ordinal (meaning the day of the year)
       * @example DateTime.local(2017, 5, 25).ordinal //=> 145
       * @type {number|DateTime}
       */

    }, {
      key: "ordinal",
      get: function get() {
        return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
      }
      /**
       * Get the human readable short month name, such as 'Oct'.
       * Defaults to the system's locale if no locale has been specified
       * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
       * @type {string}
       */

    }, {
      key: "monthShort",
      get: function get() {
        return this.isValid ? Info.months("short", {
          locale: this.locale
        })[this.month - 1] : null;
      }
      /**
       * Get the human readable long month name, such as 'October'.
       * Defaults to the system's locale if no locale has been specified
       * @example DateTime.local(2017, 10, 30).monthLong //=> October
       * @type {string}
       */

    }, {
      key: "monthLong",
      get: function get() {
        return this.isValid ? Info.months("long", {
          locale: this.locale
        })[this.month - 1] : null;
      }
      /**
       * Get the human readable short weekday, such as 'Mon'.
       * Defaults to the system's locale if no locale has been specified
       * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
       * @type {string}
       */

    }, {
      key: "weekdayShort",
      get: function get() {
        return this.isValid ? Info.weekdays("short", {
          locale: this.locale
        })[this.weekday - 1] : null;
      }
      /**
       * Get the human readable long weekday, such as 'Monday'.
       * Defaults to the system's locale if no locale has been specified
       * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
       * @type {string}
       */

    }, {
      key: "weekdayLong",
      get: function get() {
        return this.isValid ? Info.weekdays("long", {
          locale: this.locale
        })[this.weekday - 1] : null;
      }
      /**
       * Get the UTC offset of this DateTime in minutes
       * @example DateTime.now().offset //=> -240
       * @example DateTime.utc().offset //=> 0
       * @type {number}
       */

    }, {
      key: "offset",
      get: function get() {
        return this.isValid ? +this.o : NaN;
      }
      /**
       * Get the short human name for the zone's current offset, for example "EST" or "EDT".
       * Defaults to the system's locale if no locale has been specified
       * @type {string}
       */

    }, {
      key: "offsetNameShort",
      get: function get() {
        if (this.isValid) {
          return this.zone.offsetName(this.ts, {
            format: "short",
            locale: this.locale
          });
        } else {
          return null;
        }
      }
      /**
       * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
       * Defaults to the system's locale if no locale has been specified
       * @type {string}
       */

    }, {
      key: "offsetNameLong",
      get: function get() {
        if (this.isValid) {
          return this.zone.offsetName(this.ts, {
            format: "long",
            locale: this.locale
          });
        } else {
          return null;
        }
      }
      /**
       * Get whether this zone's offset ever changes, as in a DST.
       * @type {boolean}
       */

    }, {
      key: "isOffsetFixed",
      get: function get() {
        return this.isValid ? this.zone.universal : null;
      }
      /**
       * Get whether the DateTime is in a DST.
       * @type {boolean}
       */

    }, {
      key: "isInDST",
      get: function get() {
        if (this.isOffsetFixed) {
          return false;
        } else {
          return this.offset > this.set({
            month: 1
          }).offset || this.offset > this.set({
            month: 5
          }).offset;
        }
      }
      /**
       * Returns true if this DateTime is in a leap year, false otherwise
       * @example DateTime.local(2016).isInLeapYear //=> true
       * @example DateTime.local(2013).isInLeapYear //=> false
       * @type {boolean}
       */

    }, {
      key: "isInLeapYear",
      get: function get() {
        return isLeapYear(this.year);
      }
      /**
       * Returns the number of days in this DateTime's month
       * @example DateTime.local(2016, 2).daysInMonth //=> 29
       * @example DateTime.local(2016, 3).daysInMonth //=> 31
       * @type {number}
       */

    }, {
      key: "daysInMonth",
      get: function get() {
        return daysInMonth(this.year, this.month);
      }
      /**
       * Returns the number of days in this DateTime's year
       * @example DateTime.local(2016).daysInYear //=> 366
       * @example DateTime.local(2013).daysInYear //=> 365
       * @type {number}
       */

    }, {
      key: "daysInYear",
      get: function get() {
        return this.isValid ? daysInYear(this.year) : NaN;
      }
      /**
       * Returns the number of weeks in this DateTime's year
       * @see https://en.wikipedia.org/wiki/ISO_week_date
       * @example DateTime.local(2004).weeksInWeekYear //=> 53
       * @example DateTime.local(2013).weeksInWeekYear //=> 52
       * @type {number}
       */

    }, {
      key: "weeksInWeekYear",
      get: function get() {
        return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
      }
    }], [{
      key: "DATE_SHORT",
      get: function get() {
        return DATE_SHORT;
      }
      /**
       * {@link toLocaleString} format like 'Oct 14, 1983'
       * @type {Object}
       */

    }, {
      key: "DATE_MED",
      get: function get() {
        return DATE_MED;
      }
      /**
       * {@link toLocaleString} format like 'Fri, Oct 14, 1983'
       * @type {Object}
       */

    }, {
      key: "DATE_MED_WITH_WEEKDAY",
      get: function get() {
        return DATE_MED_WITH_WEEKDAY;
      }
      /**
       * {@link toLocaleString} format like 'October 14, 1983'
       * @type {Object}
       */

    }, {
      key: "DATE_FULL",
      get: function get() {
        return DATE_FULL;
      }
      /**
       * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
       * @type {Object}
       */

    }, {
      key: "DATE_HUGE",
      get: function get() {
        return DATE_HUGE;
      }
      /**
       * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "TIME_SIMPLE",
      get: function get() {
        return TIME_SIMPLE;
      }
      /**
       * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "TIME_WITH_SECONDS",
      get: function get() {
        return TIME_WITH_SECONDS;
      }
      /**
       * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "TIME_WITH_SHORT_OFFSET",
      get: function get() {
        return TIME_WITH_SHORT_OFFSET;
      }
      /**
       * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "TIME_WITH_LONG_OFFSET",
      get: function get() {
        return TIME_WITH_LONG_OFFSET;
      }
      /**
       * {@link toLocaleString} format like '09:30', always 24-hour.
       * @type {Object}
       */

    }, {
      key: "TIME_24_SIMPLE",
      get: function get() {
        return TIME_24_SIMPLE;
      }
      /**
       * {@link toLocaleString} format like '09:30:23', always 24-hour.
       * @type {Object}
       */

    }, {
      key: "TIME_24_WITH_SECONDS",
      get: function get() {
        return TIME_24_WITH_SECONDS;
      }
      /**
       * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
       * @type {Object}
       */

    }, {
      key: "TIME_24_WITH_SHORT_OFFSET",
      get: function get() {
        return TIME_24_WITH_SHORT_OFFSET;
      }
      /**
       * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
       * @type {Object}
       */

    }, {
      key: "TIME_24_WITH_LONG_OFFSET",
      get: function get() {
        return TIME_24_WITH_LONG_OFFSET;
      }
      /**
       * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "DATETIME_SHORT",
      get: function get() {
        return DATETIME_SHORT;
      }
      /**
       * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "DATETIME_SHORT_WITH_SECONDS",
      get: function get() {
        return DATETIME_SHORT_WITH_SECONDS;
      }
      /**
       * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "DATETIME_MED",
      get: function get() {
        return DATETIME_MED;
      }
      /**
       * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "DATETIME_MED_WITH_SECONDS",
      get: function get() {
        return DATETIME_MED_WITH_SECONDS;
      }
      /**
       * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "DATETIME_MED_WITH_WEEKDAY",
      get: function get() {
        return DATETIME_MED_WITH_WEEKDAY;
      }
      /**
       * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "DATETIME_FULL",
      get: function get() {
        return DATETIME_FULL;
      }
      /**
       * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "DATETIME_FULL_WITH_SECONDS",
      get: function get() {
        return DATETIME_FULL_WITH_SECONDS;
      }
      /**
       * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "DATETIME_HUGE",
      get: function get() {
        return DATETIME_HUGE;
      }
      /**
       * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
       * @type {Object}
       */

    }, {
      key: "DATETIME_HUGE_WITH_SECONDS",
      get: function get() {
        return DATETIME_HUGE_WITH_SECONDS;
      }
    }]);

    return DateTime;
  }();

  function friendlyDateTime(dateTimeish) {
    if (DateTime.isDateTime(dateTimeish)) {
      return dateTimeish;
    } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
      return DateTime.fromJSDate(dateTimeish);
    } else if (dateTimeish && _typeof(dateTimeish) === "object") {
      return DateTime.fromObject(dateTimeish);
    } else {
      throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + _typeof(dateTimeish));
    }
  }

  var VERSION = "1.26.0";
  exports.DateTime = DateTime;
  exports.Duration = Duration;
  exports.FixedOffsetZone = FixedOffsetZone;
  exports.IANAZone = IANAZone;
  exports.Info = Info;
  exports.Interval = Interval;
  exports.InvalidZone = InvalidZone;
  exports.LocalZone = LocalZone;
  exports.Settings = Settings;
  exports.VERSION = VERSION;
  exports.Zone = Zone;
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var envelopes = writable([]);
var db;

var refreshEnvelopes = function refreshEnvelopes() {
  return db.envelopes.orderBy('order').toArray().then(function (dbEnvelopes) {
    envelopes.set(dbEnvelopes);
  });
};

if (isClient()) {
  db = new Dexie('lopy');
  db.version(1).stores({
    envelopes: '_id,order',
    transactions: '_id,envelopeId,date'
  }); // Log current db content

  console.log('db', db);
  db.envelopes.toCollection().toArray().then(function (result) {
    return console.log('envelopes', result);
  });
  db.transactions.toCollection().toArray().then(function (result) {
    return console.log('transactions', result);
  });
  refreshEnvelopes();
}

var actions = readable(isClient() && {
  saveEnvelope: function () {
    var _saveEnvelope = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(_ref) {
      var _id, envelope, envelopeCount;

      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _id = _ref._id, envelope = _objectWithoutProperties(_ref, ["_id"]);
              _context.next = 3;
              return db.envelopes.count();

            case 3:
              envelopeCount = _context.sent;
              return _context.abrupt("return", _id ? db.envelopes.update(_id, envelope) : db.envelopes.add(_objectSpread({
                _id: v4(),
                order: envelopeCount,
                value: 0
              }, envelope)).then(refreshEnvelopes));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function saveEnvelope(_x) {
      return _saveEnvelope.apply(this, arguments);
    }

    return saveEnvelope;
  }(),
  deleteEnvelope: function deleteEnvelope(_ref2) {
    var _id = _ref2._id;
    return db.envelopes.where({
      _id: _id
    }).delete().then(refreshEnvelopes);
  },
  reorderEnvelopes: function () {
    var _reorderEnvelopes = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3(orderedEnvelopes) {
      return regenerator.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              db.transaction('rw', db.envelopes, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
                return regenerator.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        return _context2.abrupt("return", orderedEnvelopes.map(function (_ref4, index) {
                          var _id = _ref4._id;
                          return db.envelopes.update(_id, {
                            order: index
                          });
                        }));

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }))).then(refreshEnvelopes);

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function reorderEnvelopes(_x2) {
      return _reorderEnvelopes.apply(this, arguments);
    }

    return reorderEnvelopes;
  }(),
  saveTransaction: function saveTransaction(transaction, envelopeId) {
    console.log('saving transaction', transaction);
    return db.transaction('rw', db.transactions, db.envelopes, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4() {
      var dbEnvelope;
      return regenerator.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return db.envelopes.get(envelopeId);

            case 2:
              dbEnvelope = _context4.sent;
              _context4.next = 5;
              return db.transactions.add(_objectSpread({
                _id: v4(),
                envelopeId: envelopeId,
                date: luxon.DateTime.now().toSeconds()
              }, transaction));

            case 5:
              _context4.next = 7;
              return db.envelopes.update(envelopeId, {
                value: dbEnvelope.value + transaction.value
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))).then(refreshEnvelopes);
  },
  // TODO actually make it paginated...
  getTransactionsPaginated: function getTransactionsPaginated(_ref6) {
    var actions = _ref6.actions,
        envelopeId = _ref6.envelopeId,
        limit = _ref6.limit,
        offset = _ref6.offset;
    console.log('db.transactions', db.transactions);
    return {
      transactions: db.transactions.where({
        envelopeId: envelopeId
      }).reverse().sortBy('date'),
      previous: function previous() {},
      next: function next() {},
      refresh: function () {
        var _refresh = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5() {
          var result, transactions;
          return regenerator.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  result = actions.getTransactionsPaginated({
                    actions: actions,
                    envelopeId: envelopeId,
                    limit: limit,
                    offset: offset
                  });
                  _context5.next = 3;
                  return result.transactions;

                case 3:
                  transactions = _context5.sent;
                  return _context5.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
                    transactions: transactions
                  }));

                case 5:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        function refresh() {
          return _refresh.apply(this, arguments);
        }

        return refresh;
      }()
    };
  },
  deleteTransactions: function () {
    var _deleteTransactions = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee7(transactionIds, envelopeId) {
      return regenerator.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", db.transaction('rw', db.transactions, db.envelopes, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee6() {
                var dbEnvelope, transactionsCollection, dbTransactions, newEnvelopeValue;
                return regenerator.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        console.log('transactionIds', transactionIds);
                        _context6.next = 3;
                        return db.envelopes.get(envelopeId);

                      case 3:
                        dbEnvelope = _context6.sent;
                        transactionsCollection = db.transactions.where('_id').anyOf(transactionIds);
                        _context6.next = 7;
                        return transactionsCollection.toArray();

                      case 7:
                        dbTransactions = _context6.sent;
                        console.log('dbTransactions', dbTransactions);
                        newEnvelopeValue = dbTransactions.reduce(function (acc, _ref8) {
                          var value = _ref8.value;
                          return acc - value;
                        }, dbEnvelope.value);
                        _context6.next = 12;
                        return db.envelopes.update(envelopeId, {
                          value: newEnvelopeValue
                        });

                      case 12:
                        _context6.next = 14;
                        return db.transactions.bulkDelete(transactionIds).then(function (num) {
                          return console.log('transactions deleted', num);
                        });

                      case 14:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }))).then(refreshEnvelopes));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function deleteTransactions(_x3, _x4) {
      return _deleteTransactions.apply(this, arguments);
    }

    return deleteTransactions;
  }()
});

function cubicOut(t) {
  var f = t - 1.0;
  return f * f * f + 1.0;
}

function expoIn(t) {
  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
}

function expoOut(t) {
  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
}

function quintOut(t) {
  return --t * t * t * t * t + 1;
}

function scale(node, _ref5) {
  var _ref5$delay = _ref5.delay,
      delay = _ref5$delay === void 0 ? 0 : _ref5$delay,
      _ref5$duration = _ref5.duration,
      duration = _ref5$duration === void 0 ? 400 : _ref5$duration,
      _ref5$easing = _ref5.easing,
      easing = _ref5$easing === void 0 ? cubicOut : _ref5$easing,
      _ref5$start = _ref5.start,
      start = _ref5$start === void 0 ? 0 : _ref5$start,
      _ref5$opacity = _ref5.opacity,
      opacity = _ref5$opacity === void 0 ? 0 : _ref5$opacity;
  var style = getComputedStyle(node);
  var target_opacity = +style.opacity;
  var transform = style.transform === 'none' ? '' : style.transform;
  var sd = 1 - start;
  var od = target_opacity * (1 - opacity);
  return {
    delay: delay,
    duration: duration,
    easing: easing,
    css: function css(_t, u) {
      return "\n\t\t\ttransform: ".concat(transform, " scale(").concat(1 - sd * u, ");\n\t\t\topacity: ").concat(target_opacity - od * u, "\n\t\t");
    }
  };
}

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/Page.svelte";

function create_fragment$1(ctx) {
  var div;
  var div_intro;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[1].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[0], null);
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "relative max-w-md min-h-full flex-grow mx-auto flex flex-col");
      add_location(div, file$1, 5, 0, 109);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }

      current = true;
    },
    p: function update(new_ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      ctx = new_ctx;

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[0], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);

      if (!div_intro) {
        add_render_callback(function () {
          div_intro = create_in_transition(div, scale, {
            y: -1000,
            duration: 800,
            start: 0.95,
            easing: quintOut
          });
          div_intro.start();
        });
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Page", slots, ['default']);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Page> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      scale: scale,
      quintOut: quintOut
    };
  };

  return [$$scope, slots];
}

var Page = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Page, _SvelteComponentDev);

  var _super = _createSuper$1(Page);

  function Page(options) {
    var _this;

    _classCallCheck(this, Page);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Page",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Page;
}(SvelteComponentDev);

export { Page as P, TopBar as T, _objectWithoutProperties as _, actions as a, _asyncToGenerator as b, cubicOut as c, stripNonDigits as d, envelopes as e, formatMoney as f, expoOut as g, expoIn as h, isClient as i, luxon as l, scale as s };
