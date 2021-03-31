import { G as _inherits, H as _getPrototypeOf, J as _possibleConstructorReturn, K as _classCallCheck, L as init, M as safe_not_equal, N as _assertThisInitialized, O as dispatch_dev, P as _createClass, Q as SvelteComponentDev, R as validate_slots, aE as svg_element, X as claim_element, Y as children, $ as detach_dev, a1 as attr_dev, a2 as add_location, a3 as insert_dev, a4 as append_dev, a6 as _slicedToArray, a8 as noop, as as is_function, aa as validate_each_argument, ab as validate_each_keys, U as element, V as text, W as space, Z as claim_text, a0 as claim_space, aJ as toggle_class, ao as action_destroyer, a5 as listen_dev, a7 as set_data_dev, af as transition_in, ap as group_outros, ag as transition_out, ar as check_outros, aR as fix_position, aS as add_transform, aT as create_animation, aC as add_render_callback, aD as create_in_transition, aU as create_out_transition, at as run_all, aq as update_keyed_each, aV as fix_and_outro_and_destroy_block, F as _typeof, aW as create_bidirectional_transition, aK as binding_callbacks, aL as bind, aX as createEventDispatcher, ac as create_component, ad as claim_component, ae as mount_component, aM as add_flush_callback, ah as destroy_component, aF as globals, aB as regenerator, aY as handle_promise, ai as validate_store, aj as component_subscribe, ak as goto, aH as empty } from './client.b58c66b9.js';
import { c as cubicOut, f as formatMoney, s as scale, l as luxon, _ as _objectWithoutProperties, d as stripNonDigits, g as expoOut, h as expoIn, P as Page, b as _asyncToGenerator, T as TopBar, a as actions, i as isClient, R as ROUTES } from './constants.ec670907.js';
import { P as PlusIcon } from './PlusIcon.b74f84c3.js';
import { T as TextField, B as Button, a as TrashIcon } from './Button.5d631003.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "node_modules/svelte-feather-icons/src/icons/Edit2Icon.svelte";

function create_fragment(ctx) {
  var svg;
  var path;
  var svg_class_value;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      path = svg_element("path");
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
      path = claim_element(svg_nodes, "path", {
        d: true
      }, 1);
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path, "d", "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z");
      add_location(path, file, 13, 243, 529);
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
      attr_dev(svg, "class", svg_class_value = "feather feather-edit-2 " +
      /*customClass*/
      ctx[2]);
      add_location(svg, file, 13, 0, 286);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path);
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
      4 && svg_class_value !== (svg_class_value = "feather feather-edit-2 " +
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
  validate_slots("Edit2Icon", slots, []);
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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Edit2Icon> was created with unknown prop '".concat(key, "'"));
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

var Edit2Icon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Edit2Icon, _SvelteComponentDev);

  var _super = _createSuper(Edit2Icon);

  function Edit2Icon(options) {
    var _this;

    _classCallCheck(this, Edit2Icon);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      size: 0,
      strokeWidth: 1,
      class: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Edit2Icon",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Edit2Icon, [{
    key: "size",
    get: function get() {
      throw new Error("<Edit2Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Edit2Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "strokeWidth",
    get: function get() {
      throw new Error("<Edit2Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Edit2Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<Edit2Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Edit2Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Edit2Icon;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "node_modules/svelte-feather-icons/src/icons/MinusIcon.svelte";

function create_fragment$1(ctx) {
  var svg;
  var line;
  var svg_class_value;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      line = svg_element("line");
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
      line = claim_element(svg_nodes, "line", {
        x1: true,
        y1: true,
        x2: true,
        y2: true
      }, 1);
      children(line).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(line, "x1", "5");
      attr_dev(line, "y1", "12");
      attr_dev(line, "x2", "19");
      attr_dev(line, "y2", "12");
      add_location(line, file$1, 13, 242, 528);
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
      attr_dev(svg, "class", svg_class_value = "feather feather-minus " +
      /*customClass*/
      ctx[2]);
      add_location(svg, file$1, 13, 0, 286);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, line);
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
      4 && svg_class_value !== (svg_class_value = "feather feather-minus " +
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
  validate_slots("MinusIcon", slots, []);
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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<MinusIcon> was created with unknown prop '".concat(key, "'"));
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

var MinusIcon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(MinusIcon, _SvelteComponentDev);

  var _super = _createSuper$1(MinusIcon);

  function MinusIcon(options) {
    var _this;

    _classCallCheck(this, MinusIcon);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      size: 0,
      strokeWidth: 1,
      class: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "MinusIcon",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(MinusIcon, [{
    key: "size",
    get: function get() {
      throw new Error("<MinusIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<MinusIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "strokeWidth",
    get: function get() {
      throw new Error("<MinusIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<MinusIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<MinusIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<MinusIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return MinusIcon;
}(SvelteComponentDev);

function longpress(node, duration) {
  var timer;

  var handleMousedown = function handleMousedown() {
    timer = setTimeout(function () {
      node.dispatchEvent(new CustomEvent('longpress'));
    }, duration);
  };

  var handleMouseup = function handleMouseup() {
    clearTimeout(timer);
  };

  node.addEventListener('mousedown', handleMousedown);
  node.addEventListener('mouseup', handleMouseup);
  return {
    update: function update(newDuration) {
      duration = newDuration;
    },
    destroy: function destroy() {
      node.removeEventListener('mousedown', handleMousedown);
      node.removeEventListener('mouseup', handleMouseup);
    }
  };
}

function flip(node, animation, params) {
  var style = getComputedStyle(node);
  var transform = style.transform === 'none' ? '' : style.transform;
  var scaleX = animation.from.width / node.clientWidth;
  var scaleY = animation.from.height / node.clientHeight;
  var dx = (animation.from.left - animation.to.left) / scaleX;
  var dy = (animation.from.top - animation.to.top) / scaleY;
  var d = Math.sqrt(dx * dx + dy * dy);
  var _params$delay = params.delay,
      delay = _params$delay === void 0 ? 0 : _params$delay,
      _params$duration = params.duration,
      duration = _params$duration === void 0 ? function (d) {
    return Math.sqrt(d) * 120;
  } : _params$duration,
      _params$easing = params.easing,
      easing = _params$easing === void 0 ? cubicOut : _params$easing;
  return {
    delay: delay,
    duration: is_function(duration) ? duration(d) : duration,
    easing: easing,
    css: function css(_t, u) {
      return "transform: ".concat(transform, " translate(").concat(u * dx, "px, ").concat(u * dy, "px);");
    }
  };
}

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var file$2 = "src/components/EnvelopeTransactions.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (49:6) {#if selectedTransactionsById[transaction._id]}


function create_if_block(ctx) {
  var span;
  var span_transition;
  var current;
  var block = {
    c: function create() {
      span = element("span");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      children(span).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "bg-background absolute right-2 top-2 w-4 h-4 rounded-full");
      add_location(span, file$2, 49, 8, 1669);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      add_render_callback(function () {
        if (!span_transition) span_transition = create_bidirectional_transition(span, scale, {}, true);
        span_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      if (!span_transition) span_transition = create_bidirectional_transition(span, scale, {}, false);
      span_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      if (detaching && span_transition) span_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(49:6) {#if selectedTransactionsById[transaction._id]}",
    ctx: ctx
  });
  return block;
} // (14:2) {#each transactions as transaction (transaction._id)}


function create_each_block(key_1, ctx) {
  var div2;
  var div0;
  var t0_value =
  /*transaction*/
  ctx[3].comment + "";
  var t0;
  var t1;
  var div1;
  var span0;
  var t2_value = formatMoney(
  /*transaction*/
  ctx[3].value, {
    showSign: false
  }) + "";
  var t2;
  var t3;
  var span1;
  var t4_value = luxon.DateTime.fromSeconds(
  /*transaction*/
  ctx[3].date).toLocaleString(luxon.DateTime.DATETIME_MED) + "";
  var t4;
  var t5;
  var t6;
  var div2_intro;
  var div2_outro;
  var rect;
  var stop_animation = noop;
  var current;
  var mounted;
  var dispose;
  var if_block =
  /*selectedTransactionsById*/
  ctx[0][
  /*transaction*/
  ctx[3]._id] && create_if_block(ctx);

  function longpress_handler() {
    return (
      /*longpress_handler*/
      ctx[2](
      /*transaction*/
      ctx[3])
    );
  }

  var block = {
    key: key_1,
    first: null,
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      span0 = element("span");
      t2 = text(t2_value);
      t3 = space();
      span1 = element("span");
      t4 = text(t4_value);
      t5 = space();
      if (if_block) if_block.c();
      t6 = space();
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, t0_value);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      span0 = claim_element(div1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t2 = claim_text(span0_nodes, t2_value);
      span0_nodes.forEach(detach_dev);
      t3 = claim_space(div1_nodes);
      span1 = claim_element(div1_nodes, "SPAN", {});
      var span1_nodes = children(span1);
      t4 = claim_text(span1_nodes, t4_value);
      span1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div2_nodes);
      if (if_block) if_block.l(div2_nodes);
      t6 = claim_space(div2_nodes);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "whitespace-pre-wrap");
      toggle_class(div0, "hidden", !
      /*transaction*/
      ctx[3].comment);
      add_location(div0, file$2, 35, 6, 1181);
      attr_dev(span0, "class", "font-mono");
      add_location(span0, file$2, 39, 8, 1345);
      add_location(span1, file$2, 42, 8, 1458);
      attr_dev(div1, "class", "flex justify-between");
      add_location(div1, file$2, 38, 6, 1302);
      attr_dev(div2, "class", "transaction relative svelte-zsrthm");
      toggle_class(div2, "in",
      /*transaction*/
      ctx[3].value >= 0);
      toggle_class(div2, "out",
      /*transaction*/
      ctx[3].value < 0);
      toggle_class(div2, "selected",
      /*selectedTransactionsById*/
      ctx[0][
      /*transaction*/
      ctx[3]._id]);
      add_location(div2, file$2, 14, 4, 476);
      this.first = div2;
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      append_dev(div0, t0);
      append_dev(div2, t1);
      append_dev(div2, div1);
      append_dev(div1, span0);
      append_dev(span0, t2);
      append_dev(div1, t3);
      append_dev(div1, span1);
      append_dev(span1, t4);
      append_dev(div2, t5);
      if (if_block) if_block.m(div2, null);
      append_dev(div2, t6);
      current = true;

      if (!mounted) {
        dispose = [action_destroyer(longpress.call(null, div2, 300)), listen_dev(div2, "longpress", longpress_handler, false, false, false)];
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty &
      /*transactions*/
      2) && t0_value !== (t0_value =
      /*transaction*/
      ctx[3].comment + "")) set_data_dev(t0, t0_value);

      if (dirty &
      /*transactions*/
      2) {
        toggle_class(div0, "hidden", !
        /*transaction*/
        ctx[3].comment);
      }

      if ((!current || dirty &
      /*transactions*/
      2) && t2_value !== (t2_value = formatMoney(
      /*transaction*/
      ctx[3].value, {
        showSign: false
      }) + "")) set_data_dev(t2, t2_value);
      if ((!current || dirty &
      /*transactions*/
      2) && t4_value !== (t4_value = luxon.DateTime.fromSeconds(
      /*transaction*/
      ctx[3].date).toLocaleString(luxon.DateTime.DATETIME_MED) + "")) set_data_dev(t4, t4_value);

      if (
      /*selectedTransactionsById*/
      ctx[0][
      /*transaction*/
      ctx[3]._id]) {
        if (if_block) {
          if (dirty &
          /*selectedTransactionsById, transactions*/
          3) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div2, t6);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }

      if (dirty &
      /*transactions*/
      2) {
        toggle_class(div2, "in",
        /*transaction*/
        ctx[3].value >= 0);
      }

      if (dirty &
      /*transactions*/
      2) {
        toggle_class(div2, "out",
        /*transaction*/
        ctx[3].value < 0);
      }

      if (dirty &
      /*selectedTransactionsById, transactions*/
      3) {
        toggle_class(div2, "selected",
        /*selectedTransactionsById*/
        ctx[0][
        /*transaction*/
        ctx[3]._id]);
      }
    },
    r: function measure() {
      rect = div2.getBoundingClientRect();
    },
    f: function fix() {
      fix_position(div2);
      stop_animation();
      add_transform(div2, rect);
    },
    a: function animate() {
      stop_animation();
      stop_animation = create_animation(div2, rect, flip, {});
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);

      if (local) {
        add_render_callback(function () {
          if (div2_outro) div2_outro.end(1);
          if (!div2_intro) div2_intro = create_in_transition(div2, scale, {
            easing: cubicOut
          });
          div2_intro.start();
        });
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      if (div2_intro) div2_intro.invalidate();

      if (local) {
        div2_outro = create_out_transition(div2, scale, {
          easing: cubicOut
        });
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div2);
      if (if_block) if_block.d();
      if (detaching && div2_outro) div2_outro.end();
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(14:2) {#each transactions as transaction (transaction._id)}",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var div;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var current;
  var each_value =
  /*transactions*/
  ctx[1];
  validate_each_argument(each_value);

  var get_key = function get_key(ctx) {
    return (
      /*transaction*/
      ctx[3]._id
    );
  };

  validate_each_keys(ctx, each_value, get_each_context, get_key);

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  var block = {
    c: function create() {
      div = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div_nodes);
      }

      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "flex flex-col space-y-2 text-dark w-full p-4");
      add_location(div, file$2, 12, 0, 357);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*cubicOut, transactions, selectedTransactionsById, DateTime, formatMoney*/
      3) {
        each_value =
        /*transactions*/
        ctx[1];
        validate_each_argument(each_value);
        group_outros();

        for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].r();
        }

        validate_each_keys(ctx, each_value, get_each_context, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, fix_and_outro_and_destroy_block, create_each_block, null, get_each_context);

        for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
          each_blocks[_i5].a();
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i6 = 0; _i6 < each_value.length; _i6 += 1) {
        transition_in(each_blocks[_i6]);
      }

      current = true;
    },
    o: function outro(local) {
      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        transition_out(each_blocks[_i7]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);

      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].d();
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("EnvelopeTransactions", slots, []);
  var _$$props$transactions = $$props.transactions,
      transactions = _$$props$transactions === void 0 ? [] : _$$props$transactions;
  var _$$props$selectedTran = $$props.selectedTransactionsById,
      selectedTransactionsById = _$$props$selectedTran === void 0 ? {} : _$$props$selectedTran;
  var writable_props = ["transactions", "selectedTransactionsById"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<EnvelopeTransactions> was created with unknown prop '".concat(key, "'"));
  });

  var longpress_handler = function longpress_handler(transaction) {
    if (!selectedTransactionsById[transaction._id]) {
      $$invalidate(0, selectedTransactionsById[transaction._id] = transaction, selectedTransactionsById);
      return;
    }

    var _selectedTransactions = selectedTransactionsById,
        _transaction$_id = transaction._id,
        removedKey = _selectedTransactions[_transaction$_id],
        newSelection = _objectWithoutProperties(_selectedTransactions, [_transaction$_id].map(_toPropertyKey));

    $$invalidate(0, selectedTransactionsById = newSelection);
  };

  $$self.$$set = function ($$props) {
    if ("transactions" in $$props) $$invalidate(1, transactions = $$props.transactions);
    if ("selectedTransactionsById" in $$props) $$invalidate(0, selectedTransactionsById = $$props.selectedTransactionsById);
  };

  $$self.$capture_state = function () {
    return {
      formatMoney: formatMoney,
      longpress: longpress,
      scale: scale,
      cubicOut: cubicOut,
      flip: flip,
      DateTime: luxon.DateTime,
      transactions: transactions,
      selectedTransactionsById: selectedTransactionsById
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("transactions" in $$props) $$invalidate(1, transactions = $$props.transactions);
    if ("selectedTransactionsById" in $$props) $$invalidate(0, selectedTransactionsById = $$props.selectedTransactionsById);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [selectedTransactionsById, transactions, longpress_handler];
}

var EnvelopeTransactions = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(EnvelopeTransactions, _SvelteComponentDev);

  var _super = _createSuper$2(EnvelopeTransactions);

  function EnvelopeTransactions(options) {
    var _this;

    _classCallCheck(this, EnvelopeTransactions);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      transactions: 1,
      selectedTransactionsById: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "EnvelopeTransactions",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  _createClass(EnvelopeTransactions, [{
    key: "transactions",
    get: function get() {
      throw new Error("<EnvelopeTransactions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<EnvelopeTransactions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "selectedTransactionsById",
    get: function get() {
      throw new Error("<EnvelopeTransactions>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<EnvelopeTransactions>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return EnvelopeTransactions;
}(SvelteComponentDev);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$3 = "src/components/form/MoneyField.svelte"; // (44:4) {:else}

function create_else_block(ctx) {
  var span;
  var plusicon;
  var span_transition;
  var current;
  plusicon = new PlusIcon({
    props: {
      size: "24"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      create_component(plusicon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      claim_component(plusicon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "absolute");
      add_location(span, file$3, 44, 6, 1317);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(plusicon, span, null);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(plusicon.$$.fragment, local);

      if (local) {
        add_render_callback(function () {
          if (!span_transition) span_transition = create_bidirectional_transition(span, scale, {}, true);
          span_transition.run(1);
        });
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(plusicon.$$.fragment, local);

      if (local) {
        if (!span_transition) span_transition = create_bidirectional_transition(span, scale, {}, false);
        span_transition.run(0);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      destroy_component(plusicon);
      if (detaching && span_transition) span_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(44:4) {:else}",
    ctx: ctx
  });
  return block;
} // (40:4) {#if isNegative}


function create_if_block$1(ctx) {
  var span;
  var minusicon;
  var span_transition;
  var current;
  minusicon = new MinusIcon({
    props: {
      size: "24"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      create_component(minusicon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      claim_component(minusicon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "absolute");
      add_location(span, file$3, 40, 6, 1206);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(minusicon, span, null);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(minusicon.$$.fragment, local);

      if (local) {
        add_render_callback(function () {
          if (!span_transition) span_transition = create_bidirectional_transition(span, scale, {}, true);
          span_transition.run(1);
        });
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(minusicon.$$.fragment, local);

      if (local) {
        if (!span_transition) span_transition = create_bidirectional_transition(span, scale, {}, false);
        span_transition.run(0);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      destroy_component(minusicon);
      if (detaching && span_transition) span_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(40:4) {#if isNegative}",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var div1;
  var div0;
  var current_block_type_index;
  var if_block;
  var t;
  var textfield;
  var updating_inputRef;
  var current;
  var mounted;
  var dispose;
  var if_block_creators = [create_if_block$1, create_else_block];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*isNegative*/
    ctx[2]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

  function textfield_inputRef_binding(value) {
    /*textfield_inputRef_binding*/
    ctx[6].call(null, value);
  }

  var textfield_props = {
    class: "w-full pl-2 py-2 h-full bg-background border-none rounded-r-full outline-none ring-0 text-light font-mono",
    value: formatMoney(Math.abs(
    /*value*/
    ctx[1])),
    inputmode: "numeric",
    autofocus: true
  };

  if (
  /*inputRef*/
  ctx[0] !== void 0) {
    textfield_props.inputRef =
    /*inputRef*/
    ctx[0];
  }

  textfield = new TextField({
    props: textfield_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(textfield, "inputRef", textfield_inputRef_binding);
  });
  textfield.$on("input",
  /*handleChange*/
  ctx[4]);
  textfield.$on("keyup",
  /*onKeyUp*/
  ctx[3]);
  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      if_block.c();
      t = space();
      create_component(textfield.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      if_block.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t = claim_space(div1_nodes);
      claim_component(textfield.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "relative cursor-pointer w-6 flex items-center");
      add_location(div0, file$3, 31, 2, 962);
      attr_dev(div1, "class", "flex space-x-2 items-stretch h-8 pl-2 text-dark w-full border border-dark rounded-2xl");
      add_location(div1, file$3, 28, 0, 857);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      if_blocks[current_block_type_index].m(div0, null);
      append_dev(div1, t);
      mount_component(textfield, div1, null);
      current = true;

      if (!mounted) {
        dispose = listen_dev(div0, "click",
        /*click_handler*/
        ctx[5], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx);

      if (current_block_type_index !== previous_block_index) {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(div0, null);
      }

      var textfield_changes = {};
      if (dirty &
      /*value*/
      2) textfield_changes.value = formatMoney(Math.abs(
      /*value*/
      ctx[1]));

      if (!updating_inputRef && dirty &
      /*inputRef*/
      1) {
        updating_inputRef = true;
        textfield_changes.inputRef =
        /*inputRef*/
        ctx[0];
        add_flush_callback(function () {
          return updating_inputRef = false;
        });
      }

      textfield.$set(textfield_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      transition_in(textfield.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      transition_out(textfield.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      if_blocks[current_block_type_index].d();
      destroy_component(textfield);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var transitionDuration = 200;

function instance$3($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("MoneyField", slots, []);
  var inputRef = $$props.inputRef;
  var _$$props$value = $$props.value,
      value = _$$props$value === void 0 ? 0 : _$$props$value;
  var _$$props$isNegative = $$props.isNegative,
      isNegative = _$$props$isNegative === void 0 ? false : _$$props$isNegative;
  var dispatch = createEventDispatcher();

  var onKeyUp = function onKeyUp(_ref3) {
    var key = _ref3.key;

    if (key === "Enter") {
      dispatch("enterPressed");
    }
  };

  var handleChange = function handleChange(event) {
    event.preventDefault();
    var newValue = +"".concat(stripNonDigits(event.target.value));
    $$invalidate(1, value = isNegative ? -newValue : newValue);
    event.target.value = formatMoney(Math.abs(value), {
      showSign: false
    });
  };

  var writable_props = ["inputRef", "value", "isNegative"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<MoneyField> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    $$invalidate(2, isNegative = !isNegative);
    $$invalidate(1, value = isNegative ? -Math.abs(value) : Math.abs(value));
    inputRef.focus();
  };

  function textfield_inputRef_binding(value) {
    inputRef = value;
    $$invalidate(0, inputRef);
  }

  $$self.$$set = function ($$props) {
    if ("inputRef" in $$props) $$invalidate(0, inputRef = $$props.inputRef);
    if ("value" in $$props) $$invalidate(1, value = $$props.value);
    if ("isNegative" in $$props) $$invalidate(2, isNegative = $$props.isNegative);
  };

  $$self.$capture_state = function () {
    return {
      formatMoney: formatMoney,
      stripNonDigits: stripNonDigits,
      createEventDispatcher: createEventDispatcher,
      PlusIcon: PlusIcon,
      MinusIcon: MinusIcon,
      TextField: TextField,
      scale: scale,
      expoOut: expoOut,
      expoIn: expoIn,
      inputRef: inputRef,
      value: value,
      isNegative: isNegative,
      transitionDuration: transitionDuration,
      dispatch: dispatch,
      onKeyUp: onKeyUp,
      handleChange: handleChange
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("inputRef" in $$props) $$invalidate(0, inputRef = $$props.inputRef);
    if ("value" in $$props) $$invalidate(1, value = $$props.value);
    if ("isNegative" in $$props) $$invalidate(2, isNegative = $$props.isNegative);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [inputRef, value, isNegative, onKeyUp, handleChange, click_handler, textfield_inputRef_binding];
}

var MoneyField = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(MoneyField, _SvelteComponentDev);

  var _super = _createSuper$3(MoneyField);

  function MoneyField(options) {
    var _this;

    _classCallCheck(this, MoneyField);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      inputRef: 0,
      value: 1,
      isNegative: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "MoneyField",
      options: options,
      id: create_fragment$3.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*inputRef*/
    ctx[0] === undefined && !("inputRef" in props)) {
      console.warn("<MoneyField> was created without expected prop 'inputRef'");
    }

    return _this;
  }

  _createClass(MoneyField, [{
    key: "inputRef",
    get: function get() {
      throw new Error("<MoneyField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<MoneyField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<MoneyField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<MoneyField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "isNegative",
    get: function get() {
      throw new Error("<MoneyField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<MoneyField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return MoneyField;
}(SvelteComponentDev);

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Object_1 = globals.Object,
    console_1 = globals.console;
var file$4 = "src/routes/envelope/[id].svelte"; // (72:4) {:else}

function create_else_block_1(ctx) {
  var span;
  var edit2icon;
  var current;
  var mounted;
  var dispose;
  edit2icon = new Edit2Icon({
    props: {
      size: "20"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      create_component(edit2icon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      claim_component(edit2icon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "cursor-pointer flex space-x-2 items-end");
      add_location(span, file$4, 72, 6, 2059);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(edit2icon, span, null);
      current = true;

      if (!mounted) {
        dispose = listen_dev(span, "click",
        /*click_handler*/
        ctx[9], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(edit2icon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(edit2icon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      destroy_component(edit2icon);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block_1.name,
    type: "else",
    source: "(72:4) {:else}",
    ctx: ctx
  });
  return block;
} // (68:4) {#if Object.keys(selectedTransactionsById).length >= 1}


function create_if_block_1(ctx) {
  var span;
  var trashicon;
  var current;
  var mounted;
  var dispose;
  trashicon = new TrashIcon({
    props: {
      size: "20"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      create_component(trashicon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {});
      var span_nodes = children(span);
      claim_component(trashicon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(span, file$4, 68, 6, 1962);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(trashicon, span, null);
      current = true;

      if (!mounted) {
        dispose = listen_dev(span, "click",
        /*handleDelete*/
        ctx[7], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(trashicon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(trashicon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      destroy_component(trashicon);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(68:4) {#if Object.keys(selectedTransactionsById).length >= 1}",
    ctx: ctx
  });
  return block;
} // (66:2) <TopBar>


function create_default_slot_3(ctx) {
  var t;
  var show_if;
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block_1, create_else_block_1];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (dirty &
    /*selectedTransactionsById*/
    16) show_if = !!(Object.keys(
    /*selectedTransactionsById*/
    ctx[4]).length >= 1);
    if (show_if) return 0;
    return 1;
  }

  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      t = text("LOPY\n    ");
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "LOPY\n    ");
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx, dirty);

      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        } else {
          if_block.p(ctx, dirty);
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_3.name,
    type: "slot",
    source: "(66:2) <TopBar>",
    ctx: ctx
  });
  return block;
} // (1:0) <script context="module">   export const preload = async ({ params }


function create_catch_block(ctx) {
  var block = {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_catch_block.name,
    type: "catch",
    source: "(1:0) <script context=\\\"module\\\">   export const preload = async ({ params }",
    ctx: ctx
  });
  return block;
} // (82:63)      <EnvelopeTransactions       transactions="{transactions}


function create_then_block(ctx) {
  var envelopetransactions;
  var updating_selectedTransactionsById;
  var current;

  function envelopetransactions_selectedTransactionsById_binding(value) {
    /*envelopetransactions_selectedTransactionsById_binding*/
    ctx[10].call(null, value);
  }

  var envelopetransactions_props = {
    transactions:
    /*transactions*/
    ctx[17]
  };

  if (
  /*selectedTransactionsById*/
  ctx[4] !== void 0) {
    envelopetransactions_props.selectedTransactionsById =
    /*selectedTransactionsById*/
    ctx[4];
  }

  envelopetransactions = new EnvelopeTransactions({
    props: envelopetransactions_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(envelopetransactions, "selectedTransactionsById", envelopetransactions_selectedTransactionsById_binding);
  });
  var block = {
    c: function create() {
      create_component(envelopetransactions.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(envelopetransactions.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(envelopetransactions, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var envelopetransactions_changes = {};
      if (dirty &
      /*transactionsPaginated*/
      8) envelopetransactions_changes.transactions =
      /*transactions*/
      ctx[17];

      if (!updating_selectedTransactionsById && dirty &
      /*selectedTransactionsById*/
      16) {
        updating_selectedTransactionsById = true;
        envelopetransactions_changes.selectedTransactionsById =
        /*selectedTransactionsById*/
        ctx[4];
        add_flush_callback(function () {
          return updating_selectedTransactionsById = false;
        });
      }

      envelopetransactions.$set(envelopetransactions_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(envelopetransactions.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(envelopetransactions.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(envelopetransactions, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_then_block.name,
    type: "then",
    source: "(82:63)      <EnvelopeTransactions       transactions=\\\"{transactions}",
    ctx: ctx
  });
  return block;
} // (1:0) <script context="module">   export const preload = async ({ params }


function create_pending_block(ctx) {
  var block = {
    c: noop,
    l: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_pending_block.name,
    type: "pending",
    source: "(1:0) <script context=\\\"module\\\">   export const preload = async ({ params }",
    ctx: ctx
  });
  return block;
} // (105:6) <Button         class="w-20"         on:click="{() => {           goto(ROUTES.HOME);         }}"       >


function create_default_slot_2(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Back");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Back");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_2.name,
    type: "slot",
    source: "(105:6) <Button         class=\\\"w-20\\\"         on:click=\\\"{() => {           goto(ROUTES.HOME);         }}\\\"       >",
    ctx: ctx
  });
  return block;
} // (119:8) {:else}


function create_else_block$1(ctx) {
  var span;
  var t;
  var span_transition;
  var current;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Save");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Save");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "absolute inset-0 transform translate-y-1/2 top-0 inset-y-1/2");
      add_location(span, file$4, 119, 10, 3416);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
      current = true;
    },
    i: function intro(local) {
      if (current) return;

      if (local) {
        add_render_callback(function () {
          if (!span_transition) span_transition = create_bidirectional_transition(span, scale, {}, true);
          span_transition.run(1);
        });
      }

      current = true;
    },
    o: function outro(local) {
      if (local) {
        if (!span_transition) span_transition = create_bidirectional_transition(span, scale, {}, false);
        span_transition.run(0);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      if (detaching && span_transition) span_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block$1.name,
    type: "else",
    source: "(119:8) {:else}",
    ctx: ctx
  });
  return block;
} // (114:8) {#if isNegative}


function create_if_block$2(ctx) {
  var span;
  var t;
  var span_transition;
  var current;
  var block = {
    c: function create() {
      span = element("span");
      t = text("Spend");
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t = claim_text(span_nodes, "Spend");
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "absolute inset-0 transform translate-y-1/2 top-0 inset-y-1/2");
      add_location(span, file$4, 114, 10, 3244);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      append_dev(span, t);
      current = true;
    },
    i: function intro(local) {
      if (current) return;

      if (local) {
        add_render_callback(function () {
          if (!span_transition) span_transition = create_bidirectional_transition(span, scale, {}, true);
          span_transition.run(1);
        });
      }

      current = true;
    },
    o: function outro(local) {
      if (local) {
        if (!span_transition) span_transition = create_bidirectional_transition(span, scale, {}, false);
        span_transition.run(0);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      if (detaching && span_transition) span_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$2.name,
    type: "if",
    source: "(114:8) {#if isNegative}",
    ctx: ctx
  });
  return block;
} // (113:6) <Button class="w-20 relative" on:click="{handleSaveTransaction}">


function create_default_slot_1(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var if_block_creators = [create_if_block$2, create_else_block$1];
  var if_blocks = [];

  function select_block_type_1(ctx, dirty) {
    if (
    /*isNegative*/
    ctx[5]) return 0;
    return 1;
  }

  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  var block = {
    c: function create() {
      if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx, dirty) {
      var previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx);

      if (current_block_type_index !== previous_block_index) {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, function () {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];

        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          if_block.c();
        }

        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    d: function destroy(detaching) {
      if_blocks[current_block_type_index].d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(113:6) <Button class=\\\"w-20 relative\\\" on:click=\\\"{handleSaveTransaction}\\\">",
    ctx: ctx
  });
  return block;
} // (65:0) <Page>


function create_default_slot(ctx) {
  var topbar;
  var t0;
  var promise;
  var t1;
  var div1;
  var moneyfield;
  var updating_isNegative;
  var updating_value;
  var updating_inputRef;
  var t2;
  var textfield;
  var updating_value_1;
  var t3;
  var div0;
  var button0;
  var t4;
  var button1;
  var current;
  topbar = new TopBar({
    props: {
      $$slots: {
        default: [create_default_slot_3]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var info = {
    ctx: ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 17,
    blocks: [,,,]
  };
  handle_promise(promise =
  /*transactionsPaginated*/
  ctx[3].transactions, info);

  function moneyfield_isNegative_binding(value) {
    /*moneyfield_isNegative_binding*/
    ctx[11].call(null, value);
  }

  function moneyfield_value_binding(value) {
    /*moneyfield_value_binding*/
    ctx[12].call(null, value);
  }

  function moneyfield_inputRef_binding(value) {
    /*moneyfield_inputRef_binding*/
    ctx[13].call(null, value);
  }

  var moneyfield_props = {};

  if (
  /*isNegative*/
  ctx[5] !== void 0) {
    moneyfield_props.isNegative =
    /*isNegative*/
    ctx[5];
  }

  if (
  /*transaction*/
  ctx[1].value !== void 0) {
    moneyfield_props.value =
    /*transaction*/
    ctx[1].value;
  }

  if (
  /*moneyInput*/
  ctx[2] !== void 0) {
    moneyfield_props.inputRef =
    /*moneyInput*/
    ctx[2];
  }

  moneyfield = new MoneyField({
    props: moneyfield_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(moneyfield, "isNegative", moneyfield_isNegative_binding);
  });
  binding_callbacks.push(function () {
    return bind(moneyfield, "value", moneyfield_value_binding);
  });
  binding_callbacks.push(function () {
    return bind(moneyfield, "inputRef", moneyfield_inputRef_binding);
  });
  moneyfield.$on("enterPressed",
  /*handleMoneyInputEnterPressed*/
  ctx[6]);

  function textfield_value_binding(value) {
    /*textfield_value_binding*/
    ctx[14].call(null, value);
  }

  var textfield_props = {
    textarea: true,
    id: "comment-input",
    class: "bg-background w-full resize-none text-light outline-none border-none p-2 text-base rounded-xl"
  };

  if (
  /*transaction*/
  ctx[1].comment !== void 0) {
    textfield_props.value =
    /*transaction*/
    ctx[1].comment;
  }

  textfield = new TextField({
    props: textfield_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(textfield, "value", textfield_value_binding);
  });
  button0 = new Button({
    props: {
      class: "w-20",
      $$slots: {
        default: [create_default_slot_2]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler_1*/
  ctx[15]);
  button1 = new Button({
    props: {
      class: "w-20 relative",
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*handleSaveTransaction*/
  ctx[8]);
  var block = {
    c: function create() {
      create_component(topbar.$$.fragment);
      t0 = space();
      info.block.c();
      t1 = space();
      div1 = element("div");
      create_component(moneyfield.$$.fragment);
      t2 = space();
      create_component(textfield.$$.fragment);
      t3 = space();
      div0 = element("div");
      create_component(button0.$$.fragment);
      t4 = space();
      create_component(button1.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      claim_component(topbar.$$.fragment, nodes);
      t0 = claim_space(nodes);
      info.block.l(nodes);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      claim_component(moneyfield.$$.fragment, div1_nodes);
      t2 = claim_space(div1_nodes);
      claim_component(textfield.$$.fragment, div1_nodes);
      t3 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(button0.$$.fragment, div0_nodes);
      t4 = claim_space(div0_nodes);
      claim_component(button1.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "flex justify-around text-dark");
      add_location(div0, file$4, 103, 4, 2953);
      attr_dev(div1, "class", "sticky mt-auto mx-2 bottom-2 left-2 right-2 box-border flex flex-col space-y-4 bg-primary rounded-3xl p-4");
      add_location(div1, file$4, 88, 2, 2437);
    },
    m: function mount(target, anchor) {
      mount_component(topbar, target, anchor);
      insert_dev(target, t0, anchor);
      info.block.m(target, info.anchor = anchor);

      info.mount = function () {
        return t1.parentNode;
      };

      info.anchor = t1;
      insert_dev(target, t1, anchor);
      insert_dev(target, div1, anchor);
      mount_component(moneyfield, div1, null);
      append_dev(div1, t2);
      mount_component(textfield, div1, null);
      append_dev(div1, t3);
      append_dev(div1, div0);
      mount_component(button0, div0, null);
      append_dev(div0, t4);
      mount_component(button1, div0, null);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      var topbar_changes = {};

      if (dirty &
      /*$$scope, selectedTransactionsById, id*/
      262161) {
        topbar_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      topbar.$set(topbar_changes);
      info.ctx = ctx;

      if (dirty &
      /*transactionsPaginated*/
      8 && promise !== (promise =
      /*transactionsPaginated*/
      ctx[3].transactions) && handle_promise(promise, info)) ; else {
        var child_ctx = ctx.slice();
        child_ctx[17] = info.resolved;
        info.block.p(child_ctx, dirty);
      }

      var moneyfield_changes = {};

      if (!updating_isNegative && dirty &
      /*isNegative*/
      32) {
        updating_isNegative = true;
        moneyfield_changes.isNegative =
        /*isNegative*/
        ctx[5];
        add_flush_callback(function () {
          return updating_isNegative = false;
        });
      }

      if (!updating_value && dirty &
      /*transaction*/
      2) {
        updating_value = true;
        moneyfield_changes.value =
        /*transaction*/
        ctx[1].value;
        add_flush_callback(function () {
          return updating_value = false;
        });
      }

      if (!updating_inputRef && dirty &
      /*moneyInput*/
      4) {
        updating_inputRef = true;
        moneyfield_changes.inputRef =
        /*moneyInput*/
        ctx[2];
        add_flush_callback(function () {
          return updating_inputRef = false;
        });
      }

      moneyfield.$set(moneyfield_changes);
      var textfield_changes = {};

      if (!updating_value_1 && dirty &
      /*transaction*/
      2) {
        updating_value_1 = true;
        textfield_changes.value =
        /*transaction*/
        ctx[1].comment;
        add_flush_callback(function () {
          return updating_value_1 = false;
        });
      }

      textfield.$set(textfield_changes);
      var button0_changes = {};

      if (dirty &
      /*$$scope*/
      262144) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      var button1_changes = {};

      if (dirty &
      /*$$scope, isNegative*/
      262176) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(topbar.$$.fragment, local);
      transition_in(info.block);
      transition_in(moneyfield.$$.fragment, local);
      transition_in(textfield.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(topbar.$$.fragment, local);

      for (var i = 0; i < 3; i += 1) {
        var _block = info.blocks[i];
        transition_out(_block);
      }

      transition_out(moneyfield.$$.fragment, local);
      transition_out(textfield.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(topbar, detaching);
      if (detaching) detach_dev(t0);
      info.block.d(detaching);
      info.token = null;
      info = null;
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(div1);
      destroy_component(moneyfield);
      destroy_component(textfield);
      destroy_component(button0);
      destroy_component(button1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(65:0) <Page>",
    ctx: ctx
  });
  return block;
}

function create_fragment$4(ctx) {
  var page;
  var current;
  page = new Page({
    props: {
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(page.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(page.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(page, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var page_changes = {};

      if (dirty &
      /*$$scope, isNegative, transaction, moneyInput, transactionsPaginated, selectedTransactionsById, id*/
      262207) {
        page_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      page.$set(page_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(page.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(page.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(page, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var preload = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(_ref3) {
    var params;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref3.params;
            return _context.abrupt("return", params);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function preload(_x) {
    return _ref4.apply(this, arguments);
  };
}();

function instance$4($$self, $$props, $$invalidate) {
  var $actions;
  validate_store(actions, "actions");
  component_subscribe($$self, actions, function ($$value) {
    return $$invalidate(16, $actions = $$value);
  });
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5Bidu5D", slots, []);
  var id = $$props.id;

  var handleMoneyInputEnterPressed = function handleMoneyInputEnterPressed() {
    var _document;

    (_document = document) === null || _document === void 0 ? void 0 : _document.getElementById("comment-input").focus();
  };

  var handleDelete = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return $actions.deleteTransactions(Object.keys(selectedTransactionsById), id);

            case 2:
              $$invalidate(4, selectedTransactionsById = {});
              _context2.t0 = $$invalidate;
              _context2.next = 6;
              return transactionsPaginated.refresh();

            case 6:
              _context2.t1 = transactionsPaginated = _context2.sent;
              (0, _context2.t0)(3, _context2.t1);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleDelete() {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleSaveTransaction = function handleSaveTransaction() {
    if (isClient() && transaction.value) {
      $actions.saveTransaction(transaction, id).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
        return regenerator.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                $$invalidate(1, transaction.value = 0, transaction);
                $$invalidate(1, transaction.comment = "", transaction);
                _context3.t0 = $$invalidate;
                _context3.next = 5;
                return transactionsPaginated.refresh();

              case 5:
                _context3.t1 = transactionsPaginated = _context3.sent;
                (0, _context3.t0)(3, _context3.t1);
                console.log("moneyInput", moneyInput);
                moneyInput.focus();

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
    }
  };

  var moneyInput;
  var transactionsPaginated = $actions ? $actions.getTransactionsPaginated({
    actions: $actions,
    envelopeId: id
  }) : {};
  var selectedTransactionsById = {};
  var transaction = {
    value: 0,
    comment: ""
  };
  var isNegative = true;
  var writable_props = ["id"];
  Object_1.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<U5Bidu5D> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    return goto("".concat(ROUTES.EDIT, "/").concat(id));
  };

  function envelopetransactions_selectedTransactionsById_binding(value) {
    selectedTransactionsById = value;
    $$invalidate(4, selectedTransactionsById);
  }

  function moneyfield_isNegative_binding(value) {
    isNegative = value;
    $$invalidate(5, isNegative);
  }

  function moneyfield_value_binding(value) {
    transaction.value = value;
    $$invalidate(1, transaction);
  }

  function moneyfield_inputRef_binding(value) {
    moneyInput = value;
    $$invalidate(2, moneyInput);
  }

  function textfield_value_binding(value) {
    transaction.comment = value;
    $$invalidate(1, transaction);
  }

  var click_handler_1 = function click_handler_1() {
    goto(ROUTES.HOME);
  };

  $$self.$$set = function ($$props) {
    if ("id" in $$props) $$invalidate(0, id = $$props.id);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      EnvelopeTransactions: EnvelopeTransactions,
      actions: actions,
      isClient: isClient,
      TopBar: TopBar,
      MoneyField: MoneyField,
      Button: Button,
      TextField: TextField,
      goto: goto,
      TrashIcon: TrashIcon,
      Edit2Icon: Edit2Icon,
      Page: Page,
      scale: scale,
      ROUTES: ROUTES,
      id: id,
      handleMoneyInputEnterPressed: handleMoneyInputEnterPressed,
      handleDelete: handleDelete,
      handleSaveTransaction: handleSaveTransaction,
      moneyInput: moneyInput,
      transactionsPaginated: transactionsPaginated,
      selectedTransactionsById: selectedTransactionsById,
      transaction: transaction,
      isNegative: isNegative,
      $actions: $actions
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("id" in $$props) $$invalidate(0, id = $$props.id);
    if ("moneyInput" in $$props) $$invalidate(2, moneyInput = $$props.moneyInput);
    if ("transactionsPaginated" in $$props) $$invalidate(3, transactionsPaginated = $$props.transactionsPaginated);
    if ("selectedTransactionsById" in $$props) $$invalidate(4, selectedTransactionsById = $$props.selectedTransactionsById);
    if ("transaction" in $$props) $$invalidate(1, transaction = $$props.transaction);
    if ("isNegative" in $$props) $$invalidate(5, isNegative = $$props.isNegative);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*transaction*/
    2) {
       console.log(transaction);
    }
  };

  return [id, transaction, moneyInput, transactionsPaginated, selectedTransactionsById, isNegative, handleMoneyInputEnterPressed, handleDelete, handleSaveTransaction, click_handler, envelopetransactions_selectedTransactionsById_binding, moneyfield_isNegative_binding, moneyfield_value_binding, moneyfield_inputRef_binding, textfield_value_binding, click_handler_1];
}

var U5Bidu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bidu5D, _SvelteComponentDev);

  var _super = _createSuper$4(U5Bidu5D);

  function U5Bidu5D(options) {
    var _this;

    _classCallCheck(this, U5Bidu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
      id: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bidu5D",
      options: options,
      id: create_fragment$4.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*id*/
    ctx[0] === undefined && !("id" in props)) {
      console_1.warn("<U5Bidu5D> was created without expected prop 'id'");
    }

    return _this;
  }

  _createClass(U5Bidu5D, [{
    key: "id",
    get: function get() {
      throw new Error("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bidu5D;
}(SvelteComponentDev);

export default U5Bidu5D;
export { preload };
