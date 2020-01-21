
export const actionTypes = new Map([
  ['KeyPress', 'Key Press'],
  ['MidiControlChange', 'MIDI Control Change'],
  ['RGBChange', 'RGB Control'],
])

export const keyPressTypes = new Map([
  ['keyPress', {name: 'Simple Key Press', desc: 'A standard key press, press and releas a key'}],
  ['ctrlKeyPress', {name: 'Control + Key Press', desc: 'Presses Ctrl key + selected key'}],
  ['shiftKeyPress', {name: 'Shift + Key Press', desc: 'Presses Shift + selected key'}],
  ['altKeyPress', {name: 'Alt + Key Press', desc: 'Presses Alt + selected key'}],
  ['winKeyPress', {name: 'Win (GUI) + Key Press', desc: 'Presses Win/GUI/OS key + selected key'}],
  ['shiftWinKeyPress', {name: 'Shift + Win (GUI) + Key Press', desc: 'Presses Shift + Win + selected key'}],
  ['ctrlAltKeyPress', {name: 'Control + Alt + Key Press', desc: 'Presses Ctrl + Alt + selected key'}],
  ['ctrlAltWinKeyPress', {name: 'Control + Alt + Win (GUI) + Key Press', desc: 'Presses Ctrl + Alt + Win + selected key'}],
  ['ctrlShiftAltKeyPress', {name: 'Control + Shift + Alt + Key Press', desc: 'Presses Ctrl + Shift + Alt + selected key'}],
  ['ctrlShiftAltWinKeyPress', {name: 'Control + Shift + Alt + Win (GUI) + Key Press', desc: 'Presses Ctrl + Shift + Alt + Win + selected key'}],
])