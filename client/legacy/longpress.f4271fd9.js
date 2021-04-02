import { F as _inherits, G as _getPrototypeOf, H as _possibleConstructorReturn, J as _classCallCheck, K as init, L as safe_not_equal, M as _assertThisInitialized, N as dispatch_dev, O as _createClass, P as SvelteComponentDev, Q as validate_slots, aD as svg_element, W as claim_element, X as children, Z as detach_dev, a0 as attr_dev, a1 as add_location, a2 as insert_dev, a3 as append_dev, ac as _slicedToArray, a5 as noop } from './client.19b90b2b.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "node_modules/svelte-feather-icons/src/icons/PlusIcon.svelte";

function create_fragment(ctx) {
  var svg;
  var line0;
  var line1;
  var svg_class_value;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      line0 = svg_element("line");
      line1 = svg_element("line");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        fill: true,
        viewBox: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        class: true
      }, 1);
      var svg_nodes = children(svg);
      line0 = claim_element(svg_nodes, "line", {
        x1: true,
        y1: true,
        x2: true,
        y2: true
      }, 1);
      children(line0).forEach(detach_dev);
      line1 = claim_element(svg_nodes, "line", {
        x1: true,
        y1: true,
        x2: true,
        y2: true
      }, 1);
      children(line1).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(line0, "x1", "12");
      attr_dev(line0, "y1", "5");
      attr_dev(line0, "x2", "12");
      attr_dev(line0, "y2", "19");
      add_location(line0, file, 13, 241, 527);
      attr_dev(line1, "x1", "5");
      attr_dev(line1, "y1", "12");
      attr_dev(line1, "x2", "19");
      attr_dev(line1, "y2", "12");
      add_location(line1, file, 13, 285, 571);
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "width",
      /*size*/
      ctx[0]);
      attr_dev(svg, "height",
      /*size*/
      ctx[0]);
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "viewBox", "0 0 24 24");
      attr_dev(svg, "stroke", "currentColor");
      attr_dev(svg, "stroke-width",
      /*strokeWidth*/
      ctx[1]);
      attr_dev(svg, "stroke-linecap", "round");
      attr_dev(svg, "stroke-linejoin", "round");
      attr_dev(svg, "class", svg_class_value = "feather feather-plus " +
      /*customClass*/
      ctx[2]);
      add_location(svg, file, 13, 0, 286);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, line0);
      append_dev(svg, line1);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*size*/
      1) {
        attr_dev(svg, "width",
        /*size*/
        ctx[0]);
      }

      if (dirty &
      /*size*/
      1) {
        attr_dev(svg, "height",
        /*size*/
        ctx[0]);
      }

      if (dirty &
      /*strokeWidth*/
      2) {
        attr_dev(svg, "stroke-width",
        /*strokeWidth*/
        ctx[1]);
      }

      if (dirty &
      /*customClass*/
      4 && svg_class_value !== (svg_class_value = "feather feather-plus " +
      /*customClass*/
      ctx[2])) {
        attr_dev(svg, "class", svg_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
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
  validate_slots("PlusIcon", slots, []);
  var _$$props$size = $$props.size,
      size = _$$props$size === void 0 ? "100%" : _$$props$size;
  var _$$props$strokeWidth = $$props.strokeWidth,
      strokeWidth = _$$props$strokeWidth === void 0 ? 2 : _$$props$strokeWidth;
  var _$$props$class = $$props.class,
      customClass = _$$props$class === void 0 ? "" : _$$props$class;

  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }

  var writable_props = ["size", "strokeWidth", "class"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<PlusIcon> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("size" in $$props) $$invalidate(0, size = $$props.size);
    if ("strokeWidth" in $$props) $$invalidate(1, strokeWidth = $$props.strokeWidth);
    if ("class" in $$props) $$invalidate(2, customClass = $$props.class);
  };

  $$self.$capture_state = function () {
    return {
      size: size,
      strokeWidth: strokeWidth,
      customClass: customClass
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("size" in $$props) $$invalidate(0, size = $$props.size);
    if ("strokeWidth" in $$props) $$invalidate(1, strokeWidth = $$props.strokeWidth);
    if ("customClass" in $$props) $$invalidate(2, customClass = $$props.customClass);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [size, strokeWidth, customClass];
}

var PlusIcon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(PlusIcon, _SvelteComponentDev);

  var _super = _createSuper(PlusIcon);

  function PlusIcon(options) {
    var _this;

    _classCallCheck(this, PlusIcon);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      size: 0,
      strokeWidth: 1,
      class: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PlusIcon",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(PlusIcon, [{
    key: "size",
    get: function get() {
      throw new Error("<PlusIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PlusIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "strokeWidth",
    get: function get() {
      throw new Error("<PlusIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PlusIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<PlusIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PlusIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return PlusIcon;
}(SvelteComponentDev);

var MOVE_TOLERANCE = 50;
function longpress(node) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
  var timer;
  var startPosition;

  var handleMouseup = function handleMouseup() {
    clearTimeout(timer);
  };

  var handleMouseMove = function handleMouseMove(event) {
    var c = event.touches ? event.touches[0] : event;
    var position = {
      x: c.clientX,
      y: c.clientY
    };
    var dx = position.x - startPosition.x;
    var dy = position.y - startPosition.y;
    var distSqr = dx * dx + dy * dy;

    if (distSqr > MOVE_TOLERANCE) {
      clearTimeout(timer);
    }
  };

  var handleMousedown = function handleMousedown(event) {
    var c = event.touches ? event.touches[0] : event;
    startPosition = {
      x: c.clientX,
      y: c.clientY
    };
    timer = setTimeout(function () {
      node.dispatchEvent(new CustomEvent('longpress', {
        detail: {
          startDragPosition: startPosition
        }
      }));
    }, duration);
    node.addEventListener('mouseup', handleMouseup);
    node.addEventListener('mousemove', handleMouseMove);
    node.addEventListener('touchend', handleMouseup);
    node.addEventListener('touchmove', handleMouseMove);
  };

  node.addEventListener('mousedown', handleMousedown);
  node.addEventListener('touchstart', handleMousedown);
  return {
    update: function update(newDuration) {
      duration = newDuration;
    },
    destroy: function destroy() {
      node.removeEventListener('mousedown', handleMousedown);
      node.removeEventListener('mouseup', handleMouseup);
      node.removeEventListener('mousemove', handleMouseMove);
    }
  };
}

export { PlusIcon as P, longpress as l };
