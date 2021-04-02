import { d as decrementActiveDropZoneCount, _ as _toConsumableArray, S as SHADOW_ITEM_MARKER_PROPERTY_NAME, I as ITEM_ID_KEY, a as SHADOW_PLACEHOLDER_ITEM_ID, i as incrementActiveDropZoneCount, s as styleDraggable, m as morphDraggedElementToBeLike, b as decorateShadowEl, c as _defineProperty, e as createDraggedElementFrom, f as styleActiveDropZones, p as preventShrinking, g as dispatchConsiderEvent, T as TRIGGERS, h as SOURCES, j as areObjectsShallowEqual, k as areArraysShallowEqualSameOrder, l as styleInactiveDropZones, n as moveDraggedElementToWasDroppedState, o as getBoundingRectNoTransforms, q as hideOriginalDragTarget, r as armWindowScroller, D as DRAGGED_ENTERED_EVENT_NAME, t as DRAGGED_LEFT_EVENT_NAME, u as DRAGGED_OVER_INDEX_EVENT_NAME, v as DRAGGED_LEFT_DOCUMENT_EVENT_NAME, w as observe, x as disarmWindowScroller, y as unobserve, z as DRAGGED_LEFT_TYPES, A as dispatchFinalizeEvent, B as unDecorateShadowElement, C as dndzone$2, E as toString, F as _typeof, G as _inherits, H as _getPrototypeOf, J as _possibleConstructorReturn, K as _classCallCheck, L as init, M as safe_not_equal, N as _assertThisInitialized, O as dispatch_dev, P as _createClass, Q as SvelteComponentDev, R as validate_slots, U as element, V as text, W as space, X as claim_element, Y as children, Z as claim_text, $ as detach_dev, a0 as claim_space, a1 as attr_dev, a2 as add_location, a3 as insert_dev, a4 as append_dev, a5 as listen_dev, a6 as noop, a7 as bubble, a8 as validate_each_argument, a9 as validate_each_keys, aa as create_component, ab as claim_component, ac as mount_component, ad as _slicedToArray, ae as transition_in, af as transition_out, ag as destroy_component, ah as validate_store, ai as component_subscribe, aj as goto, ak as action_destroyer, al as group_outros, am as update_keyed_each, an as check_outros, ao as is_function, ap as run_all, aq as set_store_value, ar as outro_and_destroy_block } from './client.7a959cea.js';
import { _ as _objectWithoutProperties, f as formatMoney, P as Page, T as TopBar, e as envelopes, a as actions, R as ROUTES } from './constants.584939f5.js';
import { P as PlusIcon, l as longpress } from './longpress.b58a61bc.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var DEFAULT_DROP_ZONE_TYPE = "--any--";
var MIN_OBSERVATION_INTERVAL_MS = 100;
var MIN_MOVEMENT_BEFORE_DRAG_START_PX = 3;
var DEFAULT_DROP_TARGET_STYLE = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
};
var originalDragTarget;
var draggedEl;
var draggedElData;
var draggedElType;
var originDropZone;
var originIndex;
var shadowElData;
var shadowElDropZone;
var dragStartMousePosition;
var currentMousePosition;
var isWorkingOnPreviousDrag = false;
var finalizingPreviousDrag = false;
var unlockOriginDzMinDimensions;
var isDraggedOutsideOfAnyDz = false; // a map from type to a set of drop-zones

var typeToDropZones = new Map(); // important - this is needed because otherwise the config that would be used for everyone is the config of the element that created the event listeners

var dzToConfig = new Map(); // this is needed in order to be able to cleanup old listeners and avoid stale closures issues (as the listener is defined within each zone)

var elToMouseDownListener = new WeakMap();
/* drop-zones registration management */

function registerDropZone(dropZoneEl, type) {

  if (!typeToDropZones.has(type)) {
    typeToDropZones.set(type, new Set());
  }

  if (!typeToDropZones.get(type).has(dropZoneEl)) {
    typeToDropZones.get(type).add(dropZoneEl);
    incrementActiveDropZoneCount();
  }
}

function unregisterDropZone(dropZoneEl, type) {
  typeToDropZones.get(type).delete(dropZoneEl);
  decrementActiveDropZoneCount();

  if (typeToDropZones.get(type).size === 0) {
    typeToDropZones.delete(type);
  }
}
/* functions to manage observing the dragged element and trigger custom drag-events */


function watchDraggedElement() {
  armWindowScroller();
  var dropZones = typeToDropZones.get(draggedElType);

  var _iterator = _createForOfIteratorHelper(dropZones),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var dz = _step.value;
      dz.addEventListener(DRAGGED_ENTERED_EVENT_NAME, handleDraggedEntered);
      dz.addEventListener(DRAGGED_LEFT_EVENT_NAME, handleDraggedLeft);
      dz.addEventListener(DRAGGED_OVER_INDEX_EVENT_NAME, handleDraggedIsOverIndex);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  window.addEventListener(DRAGGED_LEFT_DOCUMENT_EVENT_NAME, handleDrop); // it is important that we don't have an interval that is faster than the flip duration because it can cause elements to jump bach and forth

  var observationIntervalMs = Math.max.apply(Math, [MIN_OBSERVATION_INTERVAL_MS].concat(_toConsumableArray(Array.from(dropZones.keys()).map(function (dz) {
    return dzToConfig.get(dz).dropAnimationDurationMs;
  }))));
  observe(draggedEl, dropZones, observationIntervalMs * 1.07);
}

function unWatchDraggedElement() {
  disarmWindowScroller();
  var dropZones = typeToDropZones.get(draggedElType);

  var _iterator2 = _createForOfIteratorHelper(dropZones),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var dz = _step2.value;
      dz.removeEventListener(DRAGGED_ENTERED_EVENT_NAME, handleDraggedEntered);
      dz.removeEventListener(DRAGGED_LEFT_EVENT_NAME, handleDraggedLeft);
      dz.removeEventListener(DRAGGED_OVER_INDEX_EVENT_NAME, handleDraggedIsOverIndex);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  window.removeEventListener(DRAGGED_LEFT_DOCUMENT_EVENT_NAME, handleDrop);
  unobserve();
} // finds the initial placeholder that is placed there on drag start


function findShadowPlaceHolderIdx(items) {
  return items.findIndex(function (item) {
    return item[ITEM_ID_KEY] === SHADOW_PLACEHOLDER_ITEM_ID;
  });
}

function findShadowElementIdx(items) {
  // checking that the id is not the placeholder's for Dragula like usecases
  return items.findIndex(function (item) {
    return !!item[SHADOW_ITEM_MARKER_PROPERTY_NAME] && item[ITEM_ID_KEY] !== SHADOW_PLACEHOLDER_ITEM_ID;
  });
}
/* custom drag-events handlers */


function handleDraggedEntered(e) {

  var _dzToConfig$get = dzToConfig.get(e.currentTarget),
      items = _dzToConfig$get.items,
      dropFromOthersDisabled = _dzToConfig$get.dropFromOthersDisabled;

  if (dropFromOthersDisabled && e.currentTarget !== originDropZone) {
    return;
  }

  isDraggedOutsideOfAnyDz = false; // this deals with another race condition. in rare occasions (super rapid operations) the list hasn't updated yet

  items = items.filter(function (item) {
    return item[ITEM_ID_KEY] !== shadowElData[ITEM_ID_KEY];
  });

  if (originDropZone !== e.currentTarget) {
    var originZoneItems = dzToConfig.get(originDropZone).items;
    var newOriginZoneItems = originZoneItems.filter(function (item) {
      return !item[SHADOW_ITEM_MARKER_PROPERTY_NAME];
    });
    dispatchConsiderEvent(originDropZone, newOriginZoneItems, {
      trigger: TRIGGERS.DRAGGED_ENTERED_ANOTHER,
      id: draggedElData[ITEM_ID_KEY],
      source: SOURCES.POINTER
    });
  } else {
    var shadowPlaceHolderIdx = findShadowPlaceHolderIdx(items);

    if (shadowPlaceHolderIdx !== -1) {
      items.splice(shadowPlaceHolderIdx, 1);
    }
  }

  var _e$detail$indexObj = e.detail.indexObj,
      index = _e$detail$indexObj.index,
      isProximityBased = _e$detail$indexObj.isProximityBased;
  var shadowElIdx = isProximityBased && index === e.currentTarget.children.length - 1 ? index + 1 : index;
  shadowElDropZone = e.currentTarget;
  items.splice(shadowElIdx, 0, shadowElData);
  dispatchConsiderEvent(e.currentTarget, items, {
    trigger: TRIGGERS.DRAGGED_ENTERED,
    id: draggedElData[ITEM_ID_KEY],
    source: SOURCES.POINTER
  });
}

function handleDraggedLeft(e) {
  // dealing with a rare race condition on extremely rapid clicking and dropping
  if (!isWorkingOnPreviousDrag) return;

  var _dzToConfig$get2 = dzToConfig.get(e.currentTarget),
      items = _dzToConfig$get2.items,
      dropFromOthersDisabled = _dzToConfig$get2.dropFromOthersDisabled;

  if (dropFromOthersDisabled && e.currentTarget !== originDropZone) {
    return;
  }

  var shadowElIdx = findShadowElementIdx(items);
  var shadowItem = items.splice(shadowElIdx, 1)[0];
  shadowElDropZone = undefined;
  var _e$detail = e.detail,
      type = _e$detail.type,
      theOtherDz = _e$detail.theOtherDz;

  if (type === DRAGGED_LEFT_TYPES.OUTSIDE_OF_ANY || type === DRAGGED_LEFT_TYPES.LEFT_FOR_ANOTHER && theOtherDz !== originDropZone && dzToConfig.get(theOtherDz).dropFromOthersDisabled) {
    isDraggedOutsideOfAnyDz = true;
    shadowElDropZone = originDropZone;
    var originZoneItems = dzToConfig.get(originDropZone).items;
    originZoneItems.splice(originIndex, 0, shadowItem);
    dispatchConsiderEvent(originDropZone, originZoneItems, {
      trigger: TRIGGERS.DRAGGED_LEFT_ALL,
      id: draggedElData[ITEM_ID_KEY],
      source: SOURCES.POINTER
    });
  } // for the origin dz, when the dragged is outside of any, this will be fired in addition to the previous. this is for simplicity


  dispatchConsiderEvent(e.currentTarget, items, {
    trigger: TRIGGERS.DRAGGED_LEFT,
    id: draggedElData[ITEM_ID_KEY],
    source: SOURCES.POINTER
  });
}

function handleDraggedIsOverIndex(e) {

  var _dzToConfig$get3 = dzToConfig.get(e.currentTarget),
      items = _dzToConfig$get3.items,
      dropFromOthersDisabled = _dzToConfig$get3.dropFromOthersDisabled;

  if (dropFromOthersDisabled && e.currentTarget !== originDropZone) {
    return;
  }

  isDraggedOutsideOfAnyDz = false;
  var index = e.detail.indexObj.index;
  var shadowElIdx = findShadowElementIdx(items);
  items.splice(shadowElIdx, 1);
  items.splice(index, 0, shadowElData);
  dispatchConsiderEvent(e.currentTarget, items, {
    trigger: TRIGGERS.DRAGGED_OVER_INDEX,
    id: draggedElData[ITEM_ID_KEY],
    source: SOURCES.POINTER
  });
} // Global mouse/touch-events handlers


function handleMouseMove(e) {
  e.preventDefault();
  var c = e.touches ? e.touches[0] : e;
  currentMousePosition = {
    x: c.clientX,
    y: c.clientY
  };
  draggedEl.style.transform = "translate3d(".concat(currentMousePosition.x - dragStartMousePosition.x, "px, ").concat(currentMousePosition.y - dragStartMousePosition.y, "px, 0)");
}

function handleDrop() {
  finalizingPreviousDrag = true; // cleanup

  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("touchmove", handleMouseMove);
  window.removeEventListener("mouseup", handleDrop);
  window.removeEventListener("touchend", handleDrop);
  unWatchDraggedElement();
  moveDraggedElementToWasDroppedState(draggedEl);

  if (!shadowElDropZone) {
    shadowElDropZone = originDropZone;
  }

  var _dzToConfig$get4 = dzToConfig.get(shadowElDropZone),
      items = _dzToConfig$get4.items,
      type = _dzToConfig$get4.type;

  styleInactiveDropZones(typeToDropZones.get(type), function (dz) {
    return dzToConfig.get(dz).dropTargetStyle;
  }, function (dz) {
    return dzToConfig.get(dz).dropTargetClasses;
  });
  var shadowElIdx = findShadowElementIdx(items); // the handler might remove the shadow element, ex: dragula like copy on drag

  if (shadowElIdx === -1) shadowElIdx = originIndex;
  items = items.map(function (item) {
    return item[SHADOW_ITEM_MARKER_PROPERTY_NAME] ? draggedElData : item;
  });

  function finalizeWithinZone() {
    unlockOriginDzMinDimensions();
    dispatchFinalizeEvent(shadowElDropZone, items, {
      trigger: isDraggedOutsideOfAnyDz ? TRIGGERS.DROPPED_OUTSIDE_OF_ANY : TRIGGERS.DROPPED_INTO_ZONE,
      id: draggedElData[ITEM_ID_KEY],
      source: SOURCES.POINTER
    });

    if (shadowElDropZone !== originDropZone) {
      // letting the origin drop zone know the element was permanently taken away
      dispatchFinalizeEvent(originDropZone, dzToConfig.get(originDropZone).items, {
        trigger: TRIGGERS.DROPPED_INTO_ANOTHER,
        id: draggedElData[ITEM_ID_KEY],
        source: SOURCES.POINTER
      });
    }

    unDecorateShadowElement(shadowElDropZone.children[shadowElIdx]);
    cleanupPostDrop();
  }

  animateDraggedToFinalPosition(shadowElIdx, finalizeWithinZone);
} // helper function for handleDrop


function animateDraggedToFinalPosition(shadowElIdx, callback) {
  var shadowElRect = getBoundingRectNoTransforms(shadowElDropZone.children[shadowElIdx]);
  var newTransform = {
    x: shadowElRect.left - parseFloat(draggedEl.style.left),
    y: shadowElRect.top - parseFloat(draggedEl.style.top)
  };

  var _dzToConfig$get5 = dzToConfig.get(shadowElDropZone),
      dropAnimationDurationMs = _dzToConfig$get5.dropAnimationDurationMs;

  var transition = "transform ".concat(dropAnimationDurationMs, "ms ease");
  draggedEl.style.transition = draggedEl.style.transition ? draggedEl.style.transition + "," + transition : transition;
  draggedEl.style.transform = "translate3d(".concat(newTransform.x, "px, ").concat(newTransform.y, "px, 0)");
  window.setTimeout(callback, dropAnimationDurationMs);
}
/* cleanup */


function cleanupPostDrop() {
  draggedEl.remove();
  originalDragTarget.remove();
  draggedEl = undefined;
  originalDragTarget = undefined;
  draggedElData = undefined;
  draggedElType = undefined;
  originDropZone = undefined;
  originIndex = undefined;
  shadowElData = undefined;
  shadowElDropZone = undefined;
  dragStartMousePosition = undefined;
  currentMousePosition = undefined;
  isWorkingOnPreviousDrag = false;
  finalizingPreviousDrag = false;
  unlockOriginDzMinDimensions = undefined;
  isDraggedOutsideOfAnyDz = false;
}

function dndzone(node, options) {
  var config = {
    items: undefined,
    type: undefined,
    flipDurationMs: 0,
    dragDisabled: false,
    dropFromOthersDisabled: false,
    dropTargetStyle: DEFAULT_DROP_TARGET_STYLE,
    dropTargetClasses: [],
    transformDraggedElement: function transformDraggedElement() {},
    centreDraggedOnCursor: false,
    customStartEvent: ''
  };
  var elToIdx = new Map();

  function addMaybeListeners() {
    window.addEventListener("mousemove", handleMouseMoveMaybeDragStart, {
      passive: false
    });
    window.addEventListener("touchmove", handleMouseMoveMaybeDragStart, {
      passive: false,
      capture: false
    });
    window.addEventListener("mouseup", handleFalseAlarm, {
      passive: false
    });
    window.addEventListener("touchend", handleFalseAlarm, {
      passive: false
    });
  }

  function removeMaybeListeners() {
    window.removeEventListener("mousemove", handleMouseMoveMaybeDragStart);
    window.removeEventListener("touchmove", handleMouseMoveMaybeDragStart);
    window.removeEventListener("mouseup", handleFalseAlarm);
    window.removeEventListener("touchend", handleFalseAlarm);
  }

  function handleFalseAlarm() {
    removeMaybeListeners();
    originalDragTarget = undefined;
    dragStartMousePosition = undefined;
    currentMousePosition = undefined;
  }

  function handleMouseMoveMaybeDragStart(e) {
    e.preventDefault();
    var c = e.touches ? e.touches[0] : e;
    currentMousePosition = {
      x: c.clientX,
      y: c.clientY
    };

    if (Math.abs(currentMousePosition.x - dragStartMousePosition.x) >= MIN_MOVEMENT_BEFORE_DRAG_START_PX || Math.abs(currentMousePosition.y - dragStartMousePosition.y) >= MIN_MOVEMENT_BEFORE_DRAG_START_PX) {
      removeMaybeListeners();
      handleDragStart();
    }
  }

  function handleMouseDown(e) {
    // on safari clicking on a select element doesn't fire mouseup at the end of the click and in general this makes more sense
    if (e.target !== e.currentTarget && (e.target.value !== undefined || e.target.isContentEditable)) {
      return;
    } // prevents responding to any button but left click which equals 0 (which is falsy)


    if (e.button) {
      return;
    }

    if (isWorkingOnPreviousDrag) {
      return;
    }

    e.stopPropagation();
    var c = e.touches ? e.touches[0] : e;
    dragStartMousePosition = {
      x: c.clientX,
      y: c.clientY
    };
    currentMousePosition = _objectSpread({}, dragStartMousePosition);
    originalDragTarget = e.currentTarget;
    addMaybeListeners();
  }

  function handleCustomEvent(e) {
    originalDragTarget = e.currentTarget;

    if (e.detail && e.detail.startDragPosition) {
      dragStartMousePosition = e.detail.startDragPosition;
      currentMousePosition = _objectSpread({}, dragStartMousePosition);
      handleDragStart();
    }
  }

  function handleDragStart() {
    isWorkingOnPreviousDrag = true; // initialising globals

    var currentIdx = elToIdx.get(originalDragTarget);
    originIndex = currentIdx;
    originDropZone = originalDragTarget.parentElement;
    var items = config.items,
        type = config.type,
        centreDraggedOnCursor = config.centreDraggedOnCursor;
    draggedElData = _objectSpread({}, items[currentIdx]);
    draggedElType = type;
    shadowElData = _objectSpread(_objectSpread({}, draggedElData), {}, _defineProperty({}, SHADOW_ITEM_MARKER_PROPERTY_NAME, true)); // The initial shadow element. We need a different id at first in order to avoid conflicts and timing issues

    var placeHolderElData = _objectSpread(_objectSpread({}, shadowElData), {}, _defineProperty({}, ITEM_ID_KEY, SHADOW_PLACEHOLDER_ITEM_ID)); // creating the draggable element


    draggedEl = createDraggedElementFrom(originalDragTarget, centreDraggedOnCursor && currentMousePosition); // We will keep the original dom node in the dom because touch events keep firing on it, we want to re-add it after the framework removes it

    function keepOriginalElementInDom() {
      if (!draggedEl.parentElement) {
        document.body.appendChild(draggedEl); // to prevent the outline from disappearing

        draggedEl.focus();
        watchDraggedElement();
        hideOriginalDragTarget(originalDragTarget);
        document.body.appendChild(originalDragTarget);
      } else {
        window.requestAnimationFrame(keepOriginalElementInDom);
      }
    }

    window.requestAnimationFrame(keepOriginalElementInDom);
    styleActiveDropZones(Array.from(typeToDropZones.get(config.type)).filter(function (dz) {
      return dz === originDropZone || !dzToConfig.get(dz).dropFromOthersDisabled;
    }), function (dz) {
      return dzToConfig.get(dz).dropTargetStyle;
    }, function (dz) {
      return dzToConfig.get(dz).dropTargetClasses;
    }); // removing the original element by removing its data entry

    items.splice(currentIdx, 1, placeHolderElData);
    unlockOriginDzMinDimensions = preventShrinking(originDropZone);
    dispatchConsiderEvent(originDropZone, items, {
      trigger: TRIGGERS.DRAG_STARTED,
      id: draggedElData[ITEM_ID_KEY],
      source: SOURCES.POINTER
    }); // handing over to global handlers - starting to watch the element

    window.addEventListener("mousemove", handleMouseMove, {
      passive: false
    });
    window.addEventListener("touchmove", handleMouseMove, {
      passive: false,
      capture: false
    });
    window.addEventListener("mouseup", handleDrop, {
      passive: false
    });
    window.addEventListener("touchend", handleDrop, {
      passive: false
    });
  }

  function configure(_ref) {
    var _ref$items = _ref.items,
        items = _ref$items === void 0 ? undefined : _ref$items,
        _ref$flipDurationMs = _ref.flipDurationMs,
        dropAnimationDurationMs = _ref$flipDurationMs === void 0 ? 0 : _ref$flipDurationMs,
        _ref$type = _ref.type,
        newType = _ref$type === void 0 ? DEFAULT_DROP_ZONE_TYPE : _ref$type,
        _ref$dragDisabled = _ref.dragDisabled,
        dragDisabled = _ref$dragDisabled === void 0 ? false : _ref$dragDisabled,
        _ref$dropFromOthersDi = _ref.dropFromOthersDisabled,
        dropFromOthersDisabled = _ref$dropFromOthersDi === void 0 ? false : _ref$dropFromOthersDi,
        _ref$dropTargetStyle = _ref.dropTargetStyle,
        dropTargetStyle = _ref$dropTargetStyle === void 0 ? DEFAULT_DROP_TARGET_STYLE : _ref$dropTargetStyle,
        _ref$dropTargetClasse = _ref.dropTargetClasses,
        dropTargetClasses = _ref$dropTargetClasse === void 0 ? [] : _ref$dropTargetClasse,
        _ref$transformDragged = _ref.transformDraggedElement,
        transformDraggedElement = _ref$transformDragged === void 0 ? function () {} : _ref$transformDragged,
        _ref$centreDraggedOnC = _ref.centreDraggedOnCursor,
        centreDraggedOnCursor = _ref$centreDraggedOnC === void 0 ? false : _ref$centreDraggedOnC,
        _ref$customStartEvent = _ref.customStartEvent,
        customStartEvent = _ref$customStartEvent === void 0 ? '' : _ref$customStartEvent;
    config.dropAnimationDurationMs = dropAnimationDurationMs;

    if (config.type && newType !== config.type) {
      unregisterDropZone(node, config.type);
    }

    config.type = newType;
    registerDropZone(node, newType);
    config.items = _toConsumableArray(items);
    config.dragDisabled = dragDisabled;
    config.transformDraggedElement = transformDraggedElement;
    config.centreDraggedOnCursor = centreDraggedOnCursor;
    config.customStartEvent = customStartEvent; // realtime update for dropTargetStyle

    if (isWorkingOnPreviousDrag && !finalizingPreviousDrag && (!areObjectsShallowEqual(dropTargetStyle, config.dropTargetStyle) || !areArraysShallowEqualSameOrder(dropTargetClasses, config.dropTargetClasses))) {
      styleInactiveDropZones([node], function () {
        return config.dropTargetStyle;
      }, function () {
        return dropTargetClasses;
      });
      styleActiveDropZones([node], function () {
        return dropTargetStyle;
      }, function () {
        return dropTargetClasses;
      });
    }

    config.dropTargetStyle = dropTargetStyle;
    config.dropTargetClasses = _toConsumableArray(dropTargetClasses); // realtime update for dropFromOthersDisabled

    if (isWorkingOnPreviousDrag && config.dropFromOthersDisabled !== dropFromOthersDisabled) {
      if (dropFromOthersDisabled) {
        styleInactiveDropZones([node], function (dz) {
          return dzToConfig.get(dz).dropTargetStyle;
        }, function (dz) {
          return dzToConfig.get(dz).dropTargetClasses;
        });
      } else {
        styleActiveDropZones([node], function (dz) {
          return dzToConfig.get(dz).dropTargetStyle;
        }, function (dz) {
          return dzToConfig.get(dz).dropTargetClasses;
        });
      }
    }

    config.dropFromOthersDisabled = dropFromOthersDisabled;
    dzToConfig.set(node, config);
    var shadowElIdx = findShadowElementIdx(config.items);

    var _loop = function _loop(idx) {
      var draggableEl = node.children[idx];
      styleDraggable(draggableEl, dragDisabled);

      if (idx === shadowElIdx) {
        morphDraggedElementToBeLike(draggedEl, draggableEl, currentMousePosition.x, currentMousePosition.y, function () {
          return config.transformDraggedElement(draggedEl, draggedElData, idx);
        });
        decorateShadowEl(draggableEl);
        return "continue";
      }

      if (config.customStartEvent) {
        draggableEl.removeEventListener(config.customStartEvent, elToMouseDownListener.get(draggableEl));
      } else {
        draggableEl.removeEventListener("mousedown", elToMouseDownListener.get(draggableEl));
        draggableEl.removeEventListener("touchstart", elToMouseDownListener.get(draggableEl));
      }

      if (!dragDisabled) {
        if (config.customStartEvent) {
          draggableEl.addEventListener(config.customStartEvent, handleCustomEvent);
        } else {
          draggableEl.addEventListener("mousedown", handleMouseDown);
          draggableEl.addEventListener("touchstart", handleMouseDown);
        }

        elToMouseDownListener.set(draggableEl, handleMouseDown);
      } // updating the idx


      elToIdx.set(draggableEl, idx);
    };

    for (var idx = 0; idx < node.children.length; idx++) {
      var _ret = _loop(idx);

      if (_ret === "continue") continue;
    }
  }

  configure(options);
  return {
    update: function update(newOptions) {
      configure(newOptions);
    },
    destroy: function destroy() {
      unregisterDropZone(node, config.type);
      dzToConfig.delete(node);
    }
  };
}

/**
 * A custom action to turn any container to a dnd zone and all of its direct children to draggables
 * Supports mouse, touch and keyboard interactions.
 * Dispatches two events that the container is expected to react to by modifying its list of items,
 * which will then feed back in to this action via the update function
 *
 * @typedef {object} Options
 * @property {array} items - the list of items that was used to generate the children of the given node (the list used in the #each block
 * @property {string} [type] - the type of the dnd zone. children dragged from here can only be dropped in other zones of the same type, default to a base type
 * @property {number} [flipDurationMs] - if the list animated using flip (recommended), specifies the flip duration such that everything syncs with it without conflict, defaults to zero
 * @property {boolean} [dragDisabled]
 * @property {boolean} [dropFromOthersDisabled]
 * @property {object} [dropTargetStyle]
 * @property {string[]} [dropTargetClasses]
 * @property {function} [transformDraggedElement]
 * @param {HTMLElement} node - the element to enhance
 * @param {Options} options
 * @return {{update: function, destroy: function}}
 */

function dndzone$1(node, options) {
  validateOptions(options);
  var pointerZone = dndzone(node, options);
  var keyboardZone = dndzone$2(node, options);
  return {
    update: function update(newOptions) {
      validateOptions(newOptions);
      pointerZone.update(newOptions);
      keyboardZone.update(newOptions);
    },
    destroy: function destroy() {
      pointerZone.destroy();
      keyboardZone.destroy();
    }
  };
}

function validateOptions(options) {
  /*eslint-disable*/
  var items = options.items,
      flipDurationMs = options.flipDurationMs,
      type = options.type,
      dragDisabled = options.dragDisabled,
      dropFromOthersDisabled = options.dropFromOthersDisabled,
      dropTargetStyle = options.dropTargetStyle,
      dropTargetClasses = options.dropTargetClasses,
      transformDraggedElement = options.transformDraggedElement,
      autoAriaDisabled = options.autoAriaDisabled,
      centreDraggedOnCursor = options.centreDraggedOnCursor,
      customStartEvent = options.customStartEvent,
      rest = _objectWithoutProperties(options, ["items", "flipDurationMs", "type", "dragDisabled", "dropFromOthersDisabled", "dropTargetStyle", "dropTargetClasses", "transformDraggedElement", "autoAriaDisabled", "centreDraggedOnCursor", "customStartEvent"]);
  /*eslint-enable*/


  if (Object.keys(rest).length > 0) {
    console.warn("dndzone will ignore unknown options", rest);
  }

  if (!items) {
    throw new Error("no 'items' key provided to dndzone");
  }

  var itemWithMissingId = items.find(function (item) {
    return !{}.hasOwnProperty.call(item, ITEM_ID_KEY);
  });

  if (itemWithMissingId) {
    throw new Error("missing '".concat(ITEM_ID_KEY, "' property for item ").concat(toString(itemWithMissingId)));
  }

  if (dropTargetClasses && !Array.isArray(dropTargetClasses)) {
    throw new Error("dropTargetClasses should be an array but instead it is a ".concat(_typeof(dropTargetClasses), ", ").concat(toString(dropTargetClasses)));
  }
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Envelope.svelte";

function create_fragment(ctx) {
  var div4;
  var div0;
  var t0;
  var t1;
  var div3;
  var div1;
  var t2;
  var t3;
  var div2;
  var t4_value = formatMoney(
  /*value*/
  ctx[3]) + "";
  var t4;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div4 = element("div");
      div0 = element("div");
      t0 = text(
      /*emoji*/
      ctx[1]);
      t1 = space();
      div3 = element("div");
      div1 = element("div");
      t2 = text(
      /*name*/
      ctx[2]);
      t3 = space();
      div2 = element("div");
      t4 = text(t4_value);
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes,
      /*emoji*/
      ctx[1]);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes,
      /*name*/
      ctx[2]);
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t4 = claim_text(div2_nodes, t4_value);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "text-5xl");
      add_location(div0, file, 13, 2, 252);
      attr_dev(div1, "class", "text-2xl truncate");
      add_location(div1, file, 17, 4, 356);
      attr_dev(div2, "class", "font-mono text-base");
      add_location(div2, file, 20, 4, 416);
      attr_dev(div3, "class", "text-dark flex flex-col overflow-hidden");
      add_location(div3, file, 16, 2, 298);
      attr_dev(div4, "id",
      /*_id*/
      ctx[0]);
      attr_dev(div4, "class", "bg-primary border-box flex space-x-2 rounded-3xl bg-primary shadow p-2");
      add_location(div4, file, 8, 0, 138);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div0);
      append_dev(div0, t0);
      append_dev(div4, t1);
      append_dev(div4, div3);
      append_dev(div3, div1);
      append_dev(div1, t2);
      append_dev(div3, t3);
      append_dev(div3, div2);
      append_dev(div2, t4);

      if (!mounted) {
        dispose = listen_dev(div4, "click",
        /*click_handler*/
        ctx[5], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
      mounted = false;
      dispose();
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
  validate_slots("Envelope", slots, []);
  var envelope = $$props.envelope;
  var _envelope = envelope,
      _id = _envelope._id,
      emoji = _envelope.emoji,
      name = _envelope.name,
      value = _envelope.value;
  var writable_props = ["envelope"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Envelope> was created with unknown prop '".concat(key, "'"));
  });

  function click_handler(event) {
    bubble($$self, event);
  }

  $$self.$$set = function ($$props) {
    if ("envelope" in $$props) $$invalidate(4, envelope = $$props.envelope);
  };

  $$self.$capture_state = function () {
    return {
      formatMoney: formatMoney,
      envelope: envelope,
      _id: _id,
      emoji: emoji,
      name: name,
      value: value
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("envelope" in $$props) $$invalidate(4, envelope = $$props.envelope);
    if ("_id" in $$props) $$invalidate(0, _id = $$props._id);
    if ("emoji" in $$props) $$invalidate(1, emoji = $$props.emoji);
    if ("name" in $$props) $$invalidate(2, name = $$props.name);
    if ("value" in $$props) $$invalidate(3, value = $$props.value);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [_id, emoji, name, value, envelope, click_handler];
}

var Envelope = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Envelope, _SvelteComponentDev);

  var _super = _createSuper(Envelope);

  function Envelope(options) {
    var _this;

    _classCallCheck(this, Envelope);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      envelope: 4
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Envelope",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*envelope*/
    ctx[4] === undefined && !("envelope" in props)) {
      console.warn("<Envelope> was created without expected prop 'envelope'");
    }

    return _this;
  }

  _createClass(Envelope, [{
    key: "envelope",
    get: function get() {
      throw new Error("<Envelope>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Envelope>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Envelope;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
} // (25:2) <TopBar>


function create_default_slot_1(ctx) {
  var t;
  var div;
  var plusicon;
  var current;
  var mounted;
  var dispose;
  plusicon = new PlusIcon({
    props: {
      size: "20"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t = text("LOPY\n    ");
      div = element("div");
      create_component(plusicon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "LOPY\n    ");
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      claim_component(plusicon.$$.fragment, div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "cursor-pointer");
      add_location(div, file$1, 26, 4, 787);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
      insert_dev(target, div, anchor);
      mount_component(plusicon, div, null);
      current = true;

      if (!mounted) {
        dispose = listen_dev(div, "click",
        /*click_handler*/
        ctx[3], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(plusicon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(plusicon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(div);
      destroy_component(plusicon);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot_1.name,
    type: "slot",
    source: "(25:2) <TopBar>",
    ctx: ctx
  });
  return block;
} // (43:4) {#each $envelopes as envelope (envelope._id)}


function create_each_block(key_1, ctx) {
  var span;
  var envelope;
  var t;
  var current;
  var mounted;
  var dispose;

  function click_handler_1() {
    return (
      /*click_handler_1*/
      ctx[4](
      /*envelope*/
      ctx[6])
    );
  }

  envelope = new Envelope({
    props: {
      envelope:
      /*envelope*/
      ctx[6]
    },
    $$inline: true
  });
  envelope.$on("click", click_handler_1);
  var block = {
    key: key_1,
    first: null,
    c: function create() {
      span = element("span");
      create_component(envelope.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      claim_component(envelope.$$.fragment, span_nodes);
      t = claim_space(span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "outline-none cursor-unset");
      add_location(span, file$1, 43, 6, 1249);
      this.first = span;
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(envelope, span, null);
      append_dev(span, t);
      current = true;

      if (!mounted) {
        dispose = action_destroyer(longpress.call(null, span));
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      var envelope_changes = {};
      if (dirty &
      /*$envelopes*/
      1) envelope_changes.envelope =
      /*envelope*/
      ctx[6];
      envelope.$set(envelope_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(envelope.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(envelope.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      destroy_component(envelope);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(43:4) {#each $envelopes as envelope (envelope._id)}",
    ctx: ctx
  });
  return block;
} // (24:0) <Page>


function create_default_slot(ctx) {
  var topbar;
  var t;
  var div;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var dndzone_action;
  var current;
  var mounted;
  var dispose;
  topbar = new TopBar({
    props: {
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var each_value =
  /*$envelopes*/
  ctx[0];
  validate_each_argument(each_value);

  var get_key = function get_key(ctx) {
    return (
      /*envelope*/
      ctx[6]._id
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
      create_component(topbar.$$.fragment);
      t = space();
      div = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      claim_component(topbar.$$.fragment, nodes);
      t = claim_space(nodes);
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
      attr_dev(div, "class", "w-full p-4 flex flex-col space-y-3");
      add_location(div, file$1, 31, 2, 917);
    },
    m: function mount(target, anchor) {
      mount_component(topbar, target, anchor);
      insert_dev(target, t, anchor);
      insert_dev(target, div, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div, null);
      }

      current = true;

      if (!mounted) {
        dispose = [action_destroyer(dndzone_action = dndzone$1.call(null, div, {
          items:
          /*$envelopes*/
          ctx[0],
          flipDurationMs: 200,
          dropTargetStyle: {
            opacity: "50%"
          },
          customStartEvent: "longpress"
        })), listen_dev(div, "consider",
        /*handleDnd*/
        ctx[2], false, false, false), listen_dev(div, "finalize",
        /*handleDnd*/
        ctx[2], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      var topbar_changes = {};

      if (dirty &
      /*$$scope*/
      512) {
        topbar_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      topbar.$set(topbar_changes);

      if (dirty &
      /*$envelopes, handleEnvelopeClicked*/
      3) {
        each_value =
        /*$envelopes*/
        ctx[0];
        validate_each_argument(each_value);
        group_outros();
        validate_each_keys(ctx, each_value, get_each_context, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, null, get_each_context);
        check_outros();
      }

      if (dndzone_action && is_function(dndzone_action.update) && dirty &
      /*$envelopes*/
      1) dndzone_action.update.call(null, {
        items:
        /*$envelopes*/
        ctx[0],
        flipDurationMs: 200,
        dropTargetStyle: {
          opacity: "50%"
        },
        customStartEvent: "longpress"
      });
    },
    i: function intro(local) {
      if (current) return;
      transition_in(topbar.$$.fragment, local);

      for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
        transition_in(each_blocks[_i4]);
      }

      current = true;
    },
    o: function outro(local) {
      transition_out(topbar.$$.fragment, local);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        transition_out(each_blocks[_i5]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(topbar, detaching);
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(div);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].d();
      }

      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(24:0) <Page>",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
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
      /*$$scope, $envelopes*/
      513) {
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
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var $envelopes;
  var $actions;
  validate_store(envelopes, "envelopes");
  component_subscribe($$self, envelopes, function ($$value) {
    return $$invalidate(0, $envelopes = $$value);
  });
  validate_store(actions, "actions");
  component_subscribe($$self, actions, function ($$value) {
    return $$invalidate(5, $actions = $$value);
  });
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", slots, []);

  var handleEnvelopeClicked = function handleEnvelopeClicked(envelope) {
    goto("".concat(ROUTES.ENVELOPE, "/").concat(envelope._id));
  };

  var handleDnd = function handleDnd(_ref3) {
    var detail = _ref3.detail;
    set_store_value(envelopes, $envelopes = detail.items, $envelopes);

    if (detail.info.trigger === TRIGGERS.DROPPED_INTO_ZONE) {
      $actions.reorderEnvelopes(detail.items);
    }
  };

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    return goto("".concat(ROUTES.EDIT, "/new"));
  };

  var click_handler_1 = function click_handler_1(envelope) {
    return handleEnvelopeClicked(envelope);
  };

  $$self.$capture_state = function () {
    return {
      TopBar: TopBar,
      PlusIcon: PlusIcon,
      Envelope: Envelope,
      envelopes: envelopes,
      actions: actions,
      goto: goto,
      Page: Page,
      dndzone: dndzone$1,
      TRIGGERS: TRIGGERS,
      ROUTES: ROUTES,
      longpress: longpress,
      handleEnvelopeClicked: handleEnvelopeClicked,
      handleDnd: handleDnd,
      $envelopes: $envelopes,
      $actions: $actions
    };
  };

  return [$envelopes, handleEnvelopeClicked, handleDnd, click_handler, click_handler_1];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper$1(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
