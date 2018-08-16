/*
 * This file holds all constant and variable
 * values that reflect the 'state' of the application.
 * No global value should be declared outside of this
 * file. They should all be local to functions.
 */

// Frame rate parameters
const MIN_FRAME_RATE = 1;
const MAX_FRAME_RATE = 60;

// Canvas parameters
const MIN_CANVAS_WIDTH     = 100;
const MAX_CANVAS_WIDTH     = 2000;
const DEFAULT_CANVAS_WIDTH = 300;

// Grid parameters
const MIN_PATH_WIDTH     = 10;
const MAX_PATH_WIDTH     = Math.floor(0.05 * MAX_CANVAS_WIDTH);
const DEFAULT_PATH_WIDTH = MIN_PATH_WIDTH;

// All string messages
const strings = {

  GENERATE_BUTTON : 'Generate',
  SOLVE_BUTTON    : 'Solve',
  EXPORT_BUTTON   : 'Export',
  DOWNLOAD_MSG    : 'Would you like to download the solution as well?',
  WAIT_FOR_MAZE   : 'Please wait until the maze is fully generated.',
  WAIT_TO_SOLVE   : 'Please wait util the maze is be fully solved',
  ALREADY_SOLVED  : 'The maze it already solved',
  CONFIRM_CANCEL  : 'Are you sure you want to cancel?',
  YES             : 'Yes',
  NO              : 'No'
};

// Keys for lookup in
// associative arrays
// of UI elements
const keys = {

  CANVAS    : 'canvas',
  PATH      : 'path',
  WIDTH     : 'width',
  HEIGHT    : 'height',
  GENERATE  : 'generate',
  SOLVE     : 'solve',
  EXPORT    : 'export',
  FRAMES    : 'frame-rate',
  SLIDER    : 'slider',
  HIGHLIGHT : 'highlight',
  ANIMATE   : 'animate'
};

// UI element selector ids
const elements = {

  dropdown : {

    GENERATE : '#dropdown-generator',
    SOLVE    : '#dropdown-solver'
  },

  button : {

    GENERATE : '#button-generate',
    SOLVE    : '#button-solve',
    EXPORT   : '#button-export',
    CANCEL   : '#button-cancel'
  },

  slider : {

    CANVAS : '#canvas-width-slider',
    PATH   : '#path-width-slider',
    FRAMES : '#frame-rate-slider'
  },

  label : {

    CANVAS_W : '#canvas-width-slider-value',
    CANVAS_H : '#canvas-height-slider-value',
    PATH     : '#path-width-slider-value',
    FRAMES   : '#frame-rate-slider-value'
  },

  checkbox : {

    HIGHLIGHT : '#checkbox-highlight-visited',
    ANIMATE   : '#checkbox-animate'
  },

  canvas : {

    MAIN : 'sketch-holder'
  }
};

// HTML element attributes / states
const attributes = {

  MIN      : 'min',
  MAX      : 'max',
  VALUE    : 'value',
  DISABLED : 'disabled'
};

// Jquery event strings
const events = {

  SLIDE      : 'slide',
  CLICK      : 'click',
  REFRESH    : 'refresh',
  GENERATED  : 'generated',
  GENERATING : 'generating',
  SOLVED     : 'solved',
  SOLVING    : 'solving'
};

// Names of supported algorithms
const algorithms = {

  generator : {

    BFS    : 'bfs',
    DFS    : 'dfs',
    HYBRID : 'hybrid'
  },

  solver : {

    BFS      : 'BFS',
    DFS      : 'DFS',
    A_STAR   : 'aStar',
    DIJKSTRA : 'dijkstra'
  },

  visualizer : {

    HIGHLIGHT : 'highlight'
  }

};

// Numbers for top, bottom,
// right, and left walls for
// a given cell's wall array.
const TOP    = 0;
const RIGHT  = 1;
const BOTTOM = 2;
const LEFT   = 3;

// UI element
// associative arrays
const buttons    = [];
const sliders    = [];
const labels     = [];
const dropdowns  = [];
const checkboxes = [];

// Arrays of functions
// used for generating,
// solving, and visualizing
const solvers     = [];
const generators  = [];
const visualizers = [];

// Dimensions of grid
let cols;
let rows;
let current;

// Canvas, images
let canvas;
let maze;

// Used in graph traversal
const grid    = [];
const stack   = [];
const parents = new Map();

// Boolean flags
let generated = false;
let solved    = false;

// Repeated action in draw()
// and main event loop
let action;
let callback;

// Colors
let BLACK = 0;


const LINE_WIDTH = 2;
