/**
 * (Re)initializes the grid.
 */
function init() {

  // Show default message
  showMessage({content : strings.DEFAULT_MESSAGE, title : strings.DEFAULT_TITLE});

  // TODO - Abstract to function in util.js
  const width = sliders[keys.CANVAS].data(keys.SLIDER).getValue();
  const w     = sliders[keys.PATH].data(keys.SLIDER).getValue();

  // TODO - Abstract to function in util.js
  buttons[keys.GENERATE].prop(attributes.DISABLED, false);
  buttons[keys.SOLVE].prop(attributes.DISABLED, true);
  buttons[keys.EXPORT].prop(attributes.DISABLED, true);


  // TODO - Allow non-square mazes?

  // Create p5 canvas object
  canvas = createCanvas(
    width,
    width
  );

  // Assign canvas to inline html element
  canvas.parent(elements.canvas.MAIN);

  // Compute dimension of grid
  cols = floor(width  / w);
  rows = floor(height / w);

  // Get the number of walls
  walls.vertical   = rows * (cols - 1)
  walls.horizontal = cols * (rows - 1)

  // Get subtraction count from sliders
  subtractionsV = subtractions.vertical();
  subtractionsH = subtractions.horizontal();

  generated = false;
  solved    = false;

  // Reinit the grid array
  // and the vertex stack
  // and best path map
  stack.length = 0;
  grid.length  = 0;
  parents.clear();

  // Rows
  for (let j = 0; j < rows; j++) {

    // Cols
    for (let i = 0; i < cols; i++) {

      // New cell
      grid.push(new Cell(i, j, w));
    }
  }

  // TODO - Allow user to click on the cell
  // to specify source and target vertex
  source = grid[0];
  target = grid[grid.length - 1];

  // Start at source
  current = source;

  // Show each grid cell in white
  grid.forEach(c => c.clear());
}
