import { F as _inherits, G as _getPrototypeOf, H as _possibleConstructorReturn, J as _classCallCheck, K as init, L as safe_not_equal, M as _assertThisInitialized, N as dispatch_dev, O as _createClass, P as SvelteComponentDev, Q as validate_slots, aB as svg_element, W as claim_element, X as children, Z as detach_dev, a0 as attr_dev, a1 as add_location, a2 as insert_dev, a3 as append_dev, ac as _slicedToArray, a5 as noop, aL as compute_rest_props, aM as assign, aN as exclude_internal_props, aE as empty, a6 as bubble, aI as binding_callbacks, R as element, aO as set_attributes, aP as set_input_value, a4 as listen_dev, aj as action_destroyer, aQ as get_spread_update, ao as run_all, ar as create_slot, aG as toggle_class, as as update_slot, ad as transition_in, ae as transition_out } from './client.5349a614.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "node_modules/svelte-feather-icons/src/icons/TrashIcon.svelte";

function create_fragment(ctx) {
  var svg;
  var polyline;
  var path;
  var svg_class_value;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      polyline = svg_element("polyline");
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
      polyline = claim_element(svg_nodes, "polyline", {
        points: true
      }, 1);
      children(polyline).forEach(detach_dev);
      path = claim_element(svg_nodes, "path", {
        d: true
      }, 1);
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(polyline, "points", "3 6 5 6 21 6");
      add_location(polyline, file, 13, 242, 528);
      attr_dev(path, "d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2");
      add_location(path, file, 13, 285, 571);
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
      attr_dev(svg, "class", svg_class_value = "feather feather-trash " +
      /*customClass*/
      ctx[2]);
      add_location(svg, file, 13, 0, 286);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, polyline);
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
      4 && svg_class_value !== (svg_class_value = "feather feather-trash " +
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
  validate_slots("TrashIcon", slots, []);
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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<TrashIcon> was created with unknown prop '".concat(key, "'"));
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

var TrashIcon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(TrashIcon, _SvelteComponentDev);

  var _super = _createSuper(TrashIcon);

  function TrashIcon(options) {
    var _this;

    _classCallCheck(this, TrashIcon);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      size: 0,
      strokeWidth: 1,
      class: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "TrashIcon",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(TrashIcon, [{
    key: "size",
    get: function get() {
      throw new Error("<TrashIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TrashIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "strokeWidth",
    get: function get() {
      throw new Error("<TrashIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TrashIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<TrashIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TrashIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return TrashIcon;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/form/TextField.svelte"; // (30:0) {:else}

function create_else_block(ctx) {
  var label;
  var input;
  var mounted;
  var dispose;
  var input_levels = [
  /*$$restProps*/
  ctx[4], {
    size: "1"
  }, {
    type: "text"
  }];
  var input_data = {};

  for (var i = 0; i < input_levels.length; i += 1) {
    input_data = assign(input_data, input_levels[i]);
  }

  var block = {
    c: function create() {
      label = element("label");
      input = element("input");
      this.h();
    },
    l: function claim(nodes) {
      label = claim_element(nodes, "LABEL", {
        class: true
      });
      var label_nodes = children(label);
      input = claim_element(label_nodes, "INPUT", {
        size: true,
        type: true
      });
      label_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(input, input_data);
      add_location(input, file$1, 31, 4, 624);
      attr_dev(label, "class", "h-full w-full");
      add_location(label, file$1, 30, 2, 590);
    },
    m: function mount(target, anchor) {
      insert_dev(target, label, anchor);
      append_dev(label, input);
      /*input_binding*/

      ctx[12](input);
      set_input_value(input,
      /*value*/
      ctx[0]);

      if (!mounted) {
        dispose = [listen_dev(input, "input",
        /*input_input_handler*/
        ctx[13]), action_destroyer(/*focus*/
        ctx[3].call(null, input)), listen_dev(input, "keyup",
        /*keyup_handler_1*/
        ctx[8], false, false, false), listen_dev(input, "input",
        /*input_handler_1*/
        ctx[9], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      set_attributes(input, input_data = get_spread_update(input_levels, [dirty &
      /*$$restProps*/
      16 &&
      /*$$restProps*/
      ctx[4], {
        size: "1"
      }, {
        type: "text"
      }]));

      if (dirty &
      /*value*/
      1 && input.value !==
      /*value*/
      ctx[0]) {
        set_input_value(input,
        /*value*/
        ctx[0]);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(label);
      /*input_binding*/

      ctx[12](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_else_block.name,
    type: "else",
    source: "(30:0) {:else}",
    ctx: ctx
  });
  return block;
} // (20:0) {#if textarea}


function create_if_block(ctx) {
  var label;
  var textarea_1;
  var mounted;
  var dispose;
  var textarea_1_levels = [
  /*$$restProps*/
  ctx[4]];
  var textarea_1_data = {};

  for (var i = 0; i < textarea_1_levels.length; i += 1) {
    textarea_1_data = assign(textarea_1_data, textarea_1_levels[i]);
  }

  var block = {
    c: function create() {
      label = element("label");
      textarea_1 = element("textarea");
      this.h();
    },
    l: function claim(nodes) {
      label = claim_element(nodes, "LABEL", {
        class: true
      });
      var label_nodes = children(label);
      textarea_1 = claim_element(label_nodes, "TEXTAREA", {});
      children(textarea_1).forEach(detach_dev);
      label_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(textarea_1, textarea_1_data);
      add_location(textarea_1, file$1, 21, 4, 432);
      attr_dev(label, "class", "h-full w-full");
      add_location(label, file$1, 20, 2, 398);
    },
    m: function mount(target, anchor) {
      insert_dev(target, label, anchor);
      append_dev(label, textarea_1);
      set_input_value(textarea_1,
      /*value*/
      ctx[0]);
      /*textarea_1_binding*/

      ctx[11](textarea_1);

      if (!mounted) {
        dispose = [listen_dev(textarea_1, "input",
        /*textarea_1_input_handler*/
        ctx[10]), action_destroyer(/*focus*/
        ctx[3].call(null, textarea_1)), listen_dev(textarea_1, "keyup",
        /*keyup_handler*/
        ctx[6], false, false, false), listen_dev(textarea_1, "input",
        /*input_handler*/
        ctx[7], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      set_attributes(textarea_1, textarea_1_data = get_spread_update(textarea_1_levels, [dirty &
      /*$$restProps*/
      16 &&
      /*$$restProps*/
      ctx[4]]));

      if (dirty &
      /*value*/
      1) {
        set_input_value(textarea_1,
        /*value*/
        ctx[0]);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(label);
      /*textarea_1_binding*/

      ctx[11](null);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(20:0) {#if textarea}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var if_block_anchor;

  function select_block_type(ctx, dirty) {
    if (
    /*textarea*/
    ctx[2]) return create_if_block;
    return create_else_block;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type(ctx);
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
      if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(ctx, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx);

        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
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
  var omit_props_names = ["autofocus", "value", "textarea", "inputRef"];
  var $$restProps = compute_rest_props($$props, omit_props_names);
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("TextField", slots, []);
  var _$$props2 = $$props,
      _$$props2$autofocus = _$$props2.autofocus,
      autofocus = _$$props2$autofocus === void 0 ? false : _$$props2$autofocus;
  var _$$props3 = $$props,
      _$$props3$value = _$$props3.value,
      value = _$$props3$value === void 0 ? "" : _$$props3$value;
  var _$$props4 = $$props,
      _$$props4$textarea = _$$props4.textarea,
      textarea = _$$props4$textarea === void 0 ? false : _$$props4$textarea;
  var _$$props5 = $$props,
      inputRef = _$$props5.inputRef;

  var focus = function focus(el) {
    if (autofocus) {
      // You gotta put it in a timeout so it runs in an idle time and works...
      var timer = setTimeout(function () {
        el.focus();
        return function () {
          return clearTimeout(timer);
        };
      }, 0);
    }
  };

  function keyup_handler(event) {
    bubble($$self, event);
  }

  function input_handler(event) {
    bubble($$self, event);
  }

  function keyup_handler_1(event) {
    bubble($$self, event);
  }

  function input_handler_1(event) {
    bubble($$self, event);
  }

  function textarea_1_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }

  function textarea_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      inputRef = $$value;
      $$invalidate(1, inputRef);
    });
  }

  function input_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      inputRef = $$value;
      $$invalidate(1, inputRef);
    });
  }

  function input_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }

  $$self.$$set = function ($$new_props) {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("autofocus" in $$new_props) $$invalidate(5, autofocus = $$new_props.autofocus);
    if ("value" in $$new_props) $$invalidate(0, value = $$new_props.value);
    if ("textarea" in $$new_props) $$invalidate(2, textarea = $$new_props.textarea);
    if ("inputRef" in $$new_props) $$invalidate(1, inputRef = $$new_props.inputRef);
  };

  $$self.$capture_state = function () {
    return {
      autofocus: autofocus,
      value: value,
      textarea: textarea,
      inputRef: inputRef,
      focus: focus
    };
  };

  $$self.$inject_state = function ($$new_props) {
    if ("autofocus" in $$props) $$invalidate(5, autofocus = $$new_props.autofocus);
    if ("value" in $$props) $$invalidate(0, value = $$new_props.value);
    if ("textarea" in $$props) $$invalidate(2, textarea = $$new_props.textarea);
    if ("inputRef" in $$props) $$invalidate(1, inputRef = $$new_props.inputRef);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [value, inputRef, textarea, focus, $$restProps, autofocus, keyup_handler, input_handler, keyup_handler_1, input_handler_1, textarea_1_input_handler, textarea_1_binding, input_binding, input_input_handler];
}

var TextField = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(TextField, _SvelteComponentDev);

  var _super = _createSuper$1(TextField);

  function TextField(options) {
    var _this;

    _classCallCheck(this, TextField);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      autofocus: 5,
      value: 0,
      textarea: 2,
      inputRef: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "TextField",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*inputRef*/
    ctx[1] === undefined && !("inputRef" in props)) {
      console.warn("<TextField> was created without expected prop 'inputRef'");
    }

    return _this;
  }

  _createClass(TextField, [{
    key: "autofocus",
    get: function get() {
      throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "value",
    get: function get() {
      throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "textarea",
    get: function get() {
      throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "inputRef",
    get: function get() {
      throw new Error("<TextField>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<TextField>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return TextField;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src/components/Button.svelte";

function create_fragment$2(ctx) {
  var button;
  var current;
  var mounted;
  var dispose;
  var default_slot_template =
  /*#slots*/
  ctx[2].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[1], null);
  var button_levels = [
  /*$$props*/
  ctx[0], {
    type: "button"
  }, {
    style: "color: inherit"
  }];
  var button_data = {};

  for (var i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }

  var block = {
    c: function create() {
      button = element("button");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        type: true,
        style: true
      });
      var button_nodes = children(button);
      if (default_slot) default_slot.l(button_nodes);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      set_attributes(button, button_data);
      toggle_class(button, "svelte-z4z4ix", true);
      add_location(button, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);

      if (default_slot) {
        default_slot.m(button, null);
      }

      current = true;

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*click_handler*/
        ctx[3], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        2) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[1], dirty, null, null);
        }
      }

      set_attributes(button, button_data = get_spread_update(button_levels, [dirty &
      /*$$props*/
      1 &&
      /*$$props*/
      ctx[0], {
        type: "button"
      }, {
        style: "color: inherit"
      }]));
      toggle_class(button, "svelte-z4z4ix", true);
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
      if (detaching) detach_dev(button);
      if (default_slot) default_slot.d(detaching);
      mounted = false;
      dispose();
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
  var _$$props = $$props,
      _$$props$$$slots = _$$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = _$$props.$$scope;
  validate_slots("Button", slots, ['default']);

  function click_handler(event) {
    bubble($$self, event);
  }

  $$self.$$set = function ($$new_props) {
    $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("$$scope" in $$new_props) $$invalidate(1, $$scope = $$new_props.$$scope);
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(0, $$props = assign(assign({}, $$props), $$new_props));
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$props = exclude_internal_props($$props);
  return [$$props, $$scope, slots, click_handler];
}

var Button = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Button, _SvelteComponentDev);

  var _super = _createSuper$2(Button);

  function Button(options) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Button",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return Button;
}(SvelteComponentDev);

export { Button as B, TextField as T, TrashIcon as a };
