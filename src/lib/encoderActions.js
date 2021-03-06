
export const ACTION_TYPE_KEY_PRESS = 'KeyPress'
export const ACTION_TYPE_MIDI_CONTROL_CHANGE = 'MidiControlChange'
export const ACTION_TYPE_MIDI_RGB_CHANGE = 'RGBChange'

export const actionTypes = new Map([
  [ACTION_TYPE_KEY_PRESS, {name: 'Key Press'}],
  [ACTION_TYPE_MIDI_CONTROL_CHANGE, {name: 'MIDI Control Change'}],
  [ACTION_TYPE_MIDI_RGB_CHANGE, {name: 'RGB Control'}],
])

export const keyPressTypes = new Map([
  ['keyPress',                {name: 'Simple Key Press', desc: 'A standard key press, press and releas a key', functionCall: 'tap_code(%key%);', keyCode: '%key%'}],
  ['ctrlKeyPress',            {name: 'Control + Key Press', desc: 'Presses Ctrl key + selected key', keyCode: 'LCTL(%key%)'}],
  ['shiftKeyPress',           {name: 'Shift + Key Press', desc: 'Presses Shift + selected key', keyCode: 'LSFT(%key%)'}],
  ['altKeyPress',             {name: 'Alt + Key Press', desc: 'Presses Alt + selected key', keyCode: 'LALT(%key%)'}],
  ['winKeyPress',             {name: 'Win (GUI) + Key Press', desc: 'Presses Win/GUI/OS key + selected key', keyCode: 'LGUI(%key%)'}],
  ['shiftWinKeyPress',        {name: 'Shift + Win (GUI) + Key Press', desc: 'Presses Shift + Win + selected key', keyCode: 'LSFT(LGUI(%key%))'}],
  ['ctrlAltKeyPress',         {name: 'Control + Alt + Key Press', desc: 'Presses Ctrl + Alt + selected key', keyCode: 'LCA(%key%)'}],
  ['ctrlAltWinKeyPress',      {name: 'Control + Alt + Win (GUI) + Key Press', desc: 'Presses Ctrl + Alt + Win + selected key', keyCode: 'LCAG(%key%)'}],
  ['ctrlShiftAltKeyPress',    {name: 'Control + Shift + Alt + Key Press', desc: 'Presses Ctrl + Shift + Alt + selected key', keyCode: 'MEH(%key%)'}],
  ['ctrlShiftAltWinKeyPress', {name: 'Control + Shift + Alt + Win (GUI) + Key Press', desc: 'Presses Ctrl + Shift + Alt + Win + selected key', keyCode: 'HYPR(%key%)'}],
])

export const rgbActionTypes = new Map([
  ['RGB_TOG', {name: 'RGB_TOG', desc: 'Toggle RGB lighting on or off'}],
  ['RGB_MODE_FORWARD', {name: 'RGB_MODE_FORWARD', desc: 'Cycle through modes'}],
  ['RGB_MODE_REVERSE', {name: 'RGB_MODE_REVERSE', desc: 'Cycle through modes in reverse'}],
  ['RGB_HUI', {name: 'RGB_HUI', desc: 'Increase hue'}],
  ['RGB_HUD', {name: 'RGB_HUD', desc: 'Decrease hue'}],
  ['RGB_SAI', {name: 'RGB_SAI', desc: 'Increase saturation'}],
  ['RGB_SAD', {name: 'RGB_SAD', desc: 'Decrease saturation'}],
  ['RGB_VAI', {name: 'RGB_VAI', desc: 'Increase value (brightness)'}],
  ['RGB_VAD', {name: 'RGB_VAD', desc: 'Decrease value (brightness)'}],
  ['RGB_MODE_PLAIN', {name: 'RGB_MODE_PLAIN', desc: 'Static (no animation) mode'}],
  ['RGB_MODE_BREATHE', {name: 'RGB_MODE_BREATHE', desc: 'Breathing animation mode'}],
  ['RGB_MODE_RAINBOW', {name: 'RGB_MODE_RAINBOW', desc: 'Rainbow animation mode'}],
  ['RGB_MODE_SWIRL', {name: 'RGB_MODE_SWIRL', desc: 'Swirl animation mode'}],
  ['RGB_MODE_SNAKE', {name: 'RGB_MODE_SNAKE', desc: 'Snake animation mode'}],
  ['RGB_MODE_KNIGHT', {name: 'RGB_MODE_KNIGHT', desc: '"Knight Rider" animation mode'}],
  ['RGB_MODE_XMAS', {name: 'RGB_MODE_XMAS', desc: 'Christmas animation mode'}],
  ['RGB_MODE_GRADIENT', {name: 'RGB_MODE_GRADIENT', desc: 'Static gradient animation mode'}],
  ['RGB_MODE_RGBTEST', {name: 'RGB_MODE_RGBTEST', desc: 'Red, Green, Blue test animation mode'}],
])