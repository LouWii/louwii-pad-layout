export const keys = {
  // This was copied from https://github.com/qmk/qmk_configurator/tree/master/src/store/modules/keycodes
  // Thanks QMK for doing the hard work!

  letters: [
    { name: 'a', code: 'KC_A', keys: 'a' },
    { name: 'b', code: 'KC_B', keys: 'b' },
    { name: 'c', code: 'KC_C', keys: 'c' },
    { name: 'd', code: 'KC_D', keys: 'd' },
    { name: 'e', code: 'KC_E', keys: 'e' },
    { name: 'f', code: 'KC_F', keys: 'f' },
    { name: 'g', code: 'KC_G', keys: 'g' },
    { name: 'h', code: 'KC_H', keys: 'h' },
    { name: 'i', code: 'KC_I', keys: 'i' },
    { name: 'j', code: 'KC_J', keys: 'j' },
    { name: 'k', code: 'KC_K', keys: 'k' },
    { name: 'l', code: 'KC_L', keys: 'l' },
    { name: 'm', code: 'KC_M', keys: 'm' },
    { name: 'n', code: 'KC_N', keys: 'n' },
    { name: 'o', code: 'KC_O', keys: 'o' },
    { name: 'p', code: 'KC_P', keys: 'p' },
    { name: 'q', code: 'KC_Q', keys: 'q' },
    { name: 'r', code: 'KC_R', keys: 'r' },
    { name: 's', code: 'KC_S', keys: 's' },
    { name: 't', code: 'KC_T', keys: 't' },
    { name: 'u', code: 'KC_U', keys: 'u' },
    { name: 'v', code: 'KC_V', keys: 'v' },
    { name: 'w', code: 'KC_W', keys: 'w' },
    { name: 'x', code: 'KC_X', keys: 'x' },
    { name: 'y', code: 'KC_Y', keys: 'y' },
    { name: 'z', code: 'KC_Z', keys: 'z' },
  ],

  numbers: [
    { name: '! 1', code: 'KC_1', keys: '1' },
    { name: '@ 2', code: 'KC_2', keys: '2' },
    { name: '# 3', code: 'KC_3', keys: '3' },
    { name: '$ 4', code: 'KC_4', keys: '4' },
    { name: '% 5', code: 'KC_5', keys: '5' },
    { name: '^ 6', code: 'KC_6', keys: '6' },
    { name: '& 7', code: 'KC_7', keys: '7' },
    { name: '* 8', code: 'KC_8', keys: '8' },
    { name: '( 9', code: 'KC_9', keys: '9' },
    { name: ') 0', code: 'KC_0', keys: '0' },
  ],

  punctuation: [
    { name: 'Esc', code: 'KC_ESC', keys: 'esc' },
    { name: 'Back Space', code: 'KC_BSPC', keys: 'backspace' },
    { name: 'Enter', code: 'KC_ENT', keys: 'enter' },
    { name: 'Tab', code: 'KC_TAB', keys: 'tab' },
    { name: 'Space', code: 'KC_SPC', keys: 'space' },
    { name: '_ -', code: 'KC_MINS', keys: '-' },
    { name: '+ =', code: 'KC_EQL', keys: '=' },
    { name: '{ [', code: 'KC_LBRC', keys: '[' },
    { name: '} ]', code: 'KC_RBRC', keys: ']' },
    { name: '| \\', code: 'KC_BSLS', keys: '\\' },
    { name: 'Non-US # and ~', code: 'KC_NUHS' },
    { name: ': ;', code: 'KC_SCLN', keys: ';' },
    { name: '" \'', code: 'KC_QUOT', keys: "'" },
    { name: '~ `', code: 'KC_GRV', keys: '`' },
    { name: '< ,', code: 'KC_COMM', keys: ',' },
    { name: '> .', code: 'KC_DOT', keys: '.' },
    { name: '? /', code: 'KC_SLSH', keys: '/' },
    { name: 'Non-US \\ and |', code: 'KC_NUBS' },
  ],

  modifiers: [
    { name: 'Caps Lock', code: 'KC_CAPS', keys: 'caps_lock' },
    { name: 'Left Shift', code: 'KC_LSFT', keys: 'shift' },
    { name: 'Right Shift', code: 'KC_RSFT' },
    { name: 'Left Ctrl', code: 'KC_LCTL', keys: 'ctrl' },
    { name: 'Right Ctrl', code: 'KC_RCTL' },
    { name: 'Left OS', code: 'KC_LGUI', keys: 'cmd' },
    { name: 'Right OS', code: 'KC_RGUI' },
    { name: 'Left Alt', code: 'KC_LALT', keys: 'alt' },
    { name: 'Right Alt', code: 'KC_RALT' },
  ],

  commands: [
    { name: 'Insert', code: 'KC_INS', keys: 'insert' },
    { name: 'Del', code: 'KC_DEL', keys: 'delete' },
    { name: 'Home', code: 'KC_HOME', keys: 'home' },
    { name: 'End', code: 'KC_END', keys: 'end' },
    { name: 'Page Up', code: 'KC_PGUP', keys: 'pageup' },
    { name: 'Page Down', code: 'KC_PGDN', keys: 'pagedown' },
    { name: 'Menu', code: 'KC_APP'},
  ],

  arrows: [
    { name: 'Up', code: 'KC_UP', keys: 'up' },
    { name: 'Down', code: 'KC_DOWN', keys: 'down' },
    { name: 'Left', code: 'KC_LEFT', keys: 'left' },
    { name: 'Right', code: 'KC_RGHT', keys: 'right' },
  ],

  // F Row
  frow: [
    { name: 'F1', code: 'KC_F1', keys: 'f1' },
    { name: 'F2', code: 'KC_F2', keys: 'f2' },
    { name: 'F3', code: 'KC_F3', keys: 'f3' },
    { name: 'F4', code: 'KC_F4', keys: 'f4' },
    { name: 'F5', code: 'KC_F5', keys: 'f5' },
    { name: 'F6', code: 'KC_F6', keys: 'f6' },
    { name: 'F7', code: 'KC_F7', keys: 'f7' },
    { name: 'F8', code: 'KC_F8', keys: 'f8' },
    { name: 'F9', code: 'KC_F9', keys: 'f9' },
    { name: 'F10', code: 'KC_F10', keys: 'f10' },
    { name: 'F11', code: 'KC_F11', keys: 'f11' },
    { name: 'F12', code: 'KC_F12', keys: 'f12' },
    { name: 'F13', code: 'KC_F13' },
    { name: 'F14', code: 'KC_F14' },
    { name: 'F15', code: 'KC_F15' },
    { name: 'F16', code: 'KC_F16' },
    { name: 'F17', code: 'KC_F17' },
    { name: 'F18', code: 'KC_F18' },
    { name: 'F19', code: 'KC_F19' },
    { name: 'F20', code: 'KC_F20' },
    { name: 'F21', code: 'KC_F21' },
    { name: 'F22', code: 'KC_F22' },
    { name: 'F23', code: 'KC_F23' },
    { name: 'F24', code: 'KC_F24' },
  ],

  // Shifted symbols
  shifted: [
    { name: '~', code: 'KC_TILD', keys: '~' },
    { name: '!', code: 'KC_EXLM', keys: '!' },
    { name: '@', code: 'KC_AT', keys: '@' },
    { name: '#', code: 'KC_HASH', keys: '#' },
    { name: '$', code: 'KC_DLR', keys: '$' },
    { name: '%', code: 'KC_PERC', keys: '%' },
    { name: '^', code: 'KC_CIRC', keys: '^' },
    { name: '&', code: 'KC_AMPR', keys: '&' },
    { name: '*', code: 'KC_ASTR', keys: '*' },
    { name: '(', code: 'KC_LPRN', keys: '(' },
    { name: ')', code: 'KC_RPRN', keys: ')' },
    { name: '_', code: 'KC_UNDS', keys: '_' },
    { name: '+', code: 'KC_PLUS', keys: '+' },
    { name: '{', code: 'KC_LCBR', keys: '{' },
    { name: '}', code: 'KC_RCBR', keys: '}' },
    { name: '<', code: 'KC_LT', keys: '<' },
    { name: '>', code: 'KC_GT', keys: '>' },
    { name: ':', code: 'KC_COLN', keys: ':' },
    { name: '|', code: 'KC_PIPE', keys: '|' },
    { name: '?', code: 'KC_QUES', keys: '?' },
    { name: '"', code: 'KC_DQUO', keys: '"' },
  ],

  numpad: [
    { name: '1', code: 'KC_P1', keys: 'num_1' },
    { name: '2', code: 'KC_P2', keys: 'num_2' },
    { name: '3', code: 'KC_P3', keys: 'num_3' },
    { name: '4', code: 'KC_P4', keys: 'num_4' },
    { name: '5', code: 'KC_P5', keys: 'num_5' },
    { name: '6', code: 'KC_P6', keys: 'num_6' },
    { name: '7', code: 'KC_P7', keys: 'num_7' },
    { name: '8', code: 'KC_P8', keys: 'num_8' },
    { name: '9', code: 'KC_P9', keys: 'num_9' },
    { name: 'Num Lock', code: 'KC_NLCK', keys: 'num' },
    { name: '/', code: 'KC_PSLS', keys: 'num_divide' },
    { name: '*', code: 'KC_PAST', keys: 'num_multiply' },
    { name: '-', code: 'KC_PMNS', keys: 'num_subtract' },
    { name: '+', code: 'KC_PPLS', keys: 'num_add' },
    { name: ',', code: 'KC_PCMM' },
    { name: '=', code: 'KC_PEQL' },
    { name: 'Numpad Enter', code: 'KC_PENT' },
  ],

  media: [
    { name: 'Previous', code: 'KC_MPRV', title: 'Previous Track' },
    { name: 'Next', code: 'KC_MNXT', title: 'Next Track' },
    { name: 'Mute', code: 'KC_MUTE', title: 'Mute Audio' },
    { name: 'Vol -', code: 'KC_VOLD', title: 'Volume Down' },
    { name: 'Vol +', code: 'KC_VOLU', title: 'Volume Up' },
    { name: 'Media Stop', code: 'KC_MSTP', title: 'Media Stop' },
    { name: 'Play', code: 'KC_MPLY', title: 'Play/Pause' },
    {
      name: 'Prev Track',
      code: 'KC_MRWD',
      title: 'Previous Track / Rewind (macOS)'
    },
    {
      name: 'Next Track',
      code: 'KC_MFFD',
      title: 'Next Track / Fast Forward (macOS)'
    },
    { name: 'Eject', code: 'KC_EJCT', title: 'Eject (macOS)' },
  ],
}