// UI element selector ids Most of them are
// Jquery selectors so they are preceded by a # symbol
const elements = {
  message : {
    MESSAGE : '#message',
    TITLE   : '#message-title',
    CONTENT : '#message-content'
  },

  dropdown : {
    GENERATE  : '#dropdown-generator',
    SOLVE     : '#dropdown-solver',
    HEURISTIC : '#dropdown-heuristic'
  },

  button : {
    GENERATE : '#button-generate',
    SOLVE    : '#button-solve',
    EXPORT   : '#button-export',
    CANCEL   : '#button-cancel'
  },

  slider : {
    CANVAS     : '#canvas-width-slider',
    PATH       : '#path-width-slider',
    FRAMES     : '#frame-rate-slider',
    SUBTRACT_V : '#vertical-wall-slider',
    SUBTRACT_H : '#horizontal-wall-slider'
  },

  label : {
    CANVAS_W   : '#canvas-width-slider-value',
    CANVAS_H   : '#canvas-height-slider-value',
    PATH       : '#path-width-slider-value',
    FRAMES     : '#frame-rate-slider-value',
    SUBTRACT_V : '#vertical-wall-slider-value',
    SUBTRACT_H : '#horizontal-wall-slider-value'
  },

  checkbox : {
    AUTOSOLVE : '#checkbox-autosolve',
    HIGHLIGHT : '#checkbox-highlight-visited',
    ANIMATE   : '#checkbox-animate'
  },

  canvas : {
    // NOTE - Not a Jquery selector
    // so there is purposely no # symbol
    MAIN : 'sketch-holder'
  },

  misc : {
      HEURISTIC_ROW : '#row-dropdown-heuristic'
  }
}

//------------------------------------------------------------------------------

// HTML element attributes / states
const attributes = {
  MIN           : 'min',
  MAX           : 'max',
  VALUE         : 'value',
  DISABLED      : 'disabled',
  SET_ATTRIBUTE : 'setAttribute'
}

//------------------------------------------------------------------------------

// Jquery event strings
const events = {
  CHANGE       : 'change',
  SLIDE        : 'slide',
  CLICK        : 'click',
  REFRESH      : 'refresh',
  GENERATED    : 'generated',
  GENERATING   : 'generating',
  SOLVED       : 'solved',
  SOLVING      : 'solving',
  INITIALIZING : 'initializing'
}

//------------------------------------------------------------------------------

// Keys for lookup in
// associative arrays
// of UI elements
const keys = {
  AUTOSOLVE  : 'autosolve',
  HEURISTIC  : 'heuristic',
  CANCEL     : 'cancel',
  CANVAS     : 'canvas',
  PATH       : 'path',
  WIDTH      : 'width',
  HEIGHT     : 'height',
  GENERATE   : 'generate',
  SOLVE      : 'solve',
  EXPORT     : 'export',
  FRAMES     : 'frame-rate',
  SLIDER     : 'slider',
  HIGHLIGHT  : 'highlight',
  ANIMATE    : 'animate',
  SUBTRACT_V : 'vertical',
  SUBTRACT_H : 'horizontal',
  MESSAGE    : 'message',
  TITLE      : 'title',
  CONTENT    : 'content'
}

//------------------------------------------------------------------------------

// Associative arrays of UI elements
const message     = []
const buttons     = []
const sliders     = []
const labels      = []
const dropdowns   = []
const checkboxes  = []
const misc        = []

//------------------------------------------------------------------------------

/**
 * For each event, create an associated set of subscribers.
 * This way, when the event is fired, We just lookup the set of subscribers
 * and notify all of them that the event was triggered. Assuming they have the
 * appropriate event-listener registered, each subscriber will respond to the
 * event appropriately.
 */
const subscribers = (() => {
  let s = []

  for (let key in events) {
      s[events[key]] = new Set()
  }

  return s
})()

//------------------------------------------------------------------------------

 // Singleton maze object
const maze = Maze.getInstance()
