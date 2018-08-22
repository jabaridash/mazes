/**
 * Sets min, max, initial value for a
 *jquery  bootstrap-slider object reference.
 */
function initSlider({key=undefined, min=undefined, max=undefined, def=undefined}) {

  let slider = sliders[key]

  slider.slider(attributes.SET_ATTRIBUTE, attributes.MIN, min);
  slider.slider(attributes.SET_ATTRIBUTE, attributes.MAX, max);
  slider.slider(attributes.SET_ATTRIBUTE, attributes.VALUE, def);
  slider.slider(events.REFRESH);
};

//------------------------------------------------------------------------------

/**
 * Connects a slider to a label with
 * an optional transformer function that
 * performs data type conversion and an
 * optional callback that takes in the transformed
 * value.
 */
function connectSliderLabel({

    // Named parameters + default values
    sliderKey      = undefined,
    labelKey      = undefined,
    transformer = (v) => v,
    callback    = (v) => {}

  }) {

    let slider = sliders[sliderKey];
    let label  = labels[labelKey];

  // On slide event
  slider.on(events.SLIDE, (e) => {

    // Transform the data
    let v = transformer(e.value);

    // Set the value
    label.text(v);

    // Follow up action
    callback(v);
  });

  // Get initial value from label
  let data = slider.data(keys.SLIDER).getValue();

  // Display on screen
  label.text(data);
};

//------------------------------------------------------------------------------

/**
 * Initializes a button by setting
 * the onclick event as well as
 * attaches event listeners that tell
 * the button when to activate and
 * deactivate.
 */
function initButton({

    key  = undefined,
    onclick = () => {},
    enable  = [],
    disable = []
  }) {

  let button = buttons[key]

  // Set on click
  button.click(onclick);

  // For all events in disable array,
  // if fired, disable this button
  disable.forEach(e => {

    button.on(e, (event) => button.prop(attributes.DISABLED, true));
  });

  // For all events in enable array,
  // if fired, enable this button
  enable.forEach(e => {

    button.on(e, (event) => button.prop(attributes.DISABLED, false));
  });
};

//------------------------------------------------------------------------------

function initElement({map=undefined, key=undefined, selector=undefined, initializer=undefined}) {

  map[key] = initializer ? initializer(selector) : $(selector)
}

//------------------------------------------------------------------------------

function initAgorithm({map=undefined, key=undefined, algorithm=undefined}) {

  map[key] = algorithm
}
