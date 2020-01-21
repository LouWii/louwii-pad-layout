export const midiControlChange = new Map([
  [0, {controlNum: 0, controlNumBin: "00000000", controlNumHex: "00", desc: "Bank Select", valueDesc: "0-127"}],
  [1, {controlNum: 1, controlNumBin: "00000001", controlNumHex: "01", desc: "Modulation Wheel or Lever", valueDesc: "0-127"}],
  [2, {controlNum: 2, controlNumBin: "00000010", controlNumHex: "02", desc: "Breath Controller", valueDesc: "0-127"}],
  [3, {controlNum: 3, controlNumBin: "00000011", controlNumHex: "03", desc: "Undefined", valueDesc: "0-127"}],
  [4, {controlNum: 4, controlNumBin: "00000100", controlNumHex: "04", desc: "Foot Controller", valueDesc: "0-127"}],
  [5, {controlNum: 5, controlNumBin: "00000101", controlNumHex: "05", desc: "Portamento Time", valueDesc: "0-127"}],
  [6, {controlNum: 6, controlNumBin: "00000110", controlNumHex: "06", desc: "Data Entry MSB", valueDesc: "0-127"}],
  [7, {controlNum: 7, controlNumBin: "00000111", controlNumHex: "07", desc: "Channel Volume (formerly Main Volume)", valueDesc: "0-127"}],
  [8, {controlNum: 8, controlNumBin: "00001000", controlNumHex: "08", desc: "Balance", valueDesc: "0-127"}],
  [9, {controlNum: 9, controlNumBin: "00001001", controlNumHex: "09", desc: "Undefined", valueDesc: "0-127"}],
  [10, {controlNum: 10, controlNumBin: "00001010", controlNumHex: "0A", desc: "Pan", valueDesc: "0-127"}],
  [11, {controlNum: 11, controlNumBin: "00001011", controlNumHex: "0B", desc: "Expression Controller", valueDesc: "0-127"}],
  [12, {controlNum: 12, controlNumBin: "00001100", controlNumHex: "0C", desc: "Effect Control 1", valueDesc: "0-127"}],
  [13, {controlNum: 13, controlNumBin: "00001101", controlNumHex: "0D", desc: "Effect Control 2", valueDesc: "0-127"}],
  [14, {controlNum: 14, controlNumBin: "00001110", controlNumHex: "0E", desc: "Undefined", valueDesc: "0-127"}],
  [15, {controlNum: 15, controlNumBin: "00001111", controlNumHex: "0F", desc: "Undefined", valueDesc: "0-127"}],
  [16, {controlNum: 16, controlNumBin: "00010000", controlNumHex: "10", desc: "General Purpose Controller 1", valueDesc: "0-127"}],
  [17, {controlNum: 17, controlNumBin: "00010001", controlNumHex: "11", desc: "General Purpose Controller 2", valueDesc: "0-127"}],
  [18, {controlNum: 18, controlNumBin: "00010010", controlNumHex: "12", desc: "General Purpose Controller 3", valueDesc: "0-127"}],
  [19, {controlNum: 19, controlNumBin: "00010011", controlNumHex: "13", desc: "General Purpose Controller 4", valueDesc: "0-127"}],
  [20, {controlNum: 20, controlNumBin: "00010100", controlNumHex: "14", desc: "Undefined", valueDesc: "0-127"}],
  [21, {controlNum: 21, controlNumBin: "00010101", controlNumHex: "15", desc: "Undefined", valueDesc: "0-127"}],
  [22, {controlNum: 22, controlNumBin: "00010110", controlNumHex: "16", desc: "Undefined", valueDesc: "0-127"}],
  [23, {controlNum: 23, controlNumBin: "00010111", controlNumHex: "17", desc: "Undefined", valueDesc: "0-127"}],
  [24, {controlNum: 24, controlNumBin: "00011000", controlNumHex: "18", desc: "Undefined", valueDesc: "0-127"}],
  [25, {controlNum: 25, controlNumBin: "00011001", controlNumHex: "19", desc: "Undefined", valueDesc: "0-127"}],
  [26, {controlNum: 26, controlNumBin: "00011010", controlNumHex: "1A", desc: "Undefined", valueDesc: "0-127"}],
  [27, {controlNum: 27, controlNumBin: "00011011", controlNumHex: "1B", desc: "Undefined", valueDesc: "0-127"}],
  [28, {controlNum: 28, controlNumBin: "00011100", controlNumHex: "1C", desc: "Undefined", valueDesc: "0-127"}],
  [29, {controlNum: 29, controlNumBin: "00011101", controlNumHex: "1D", desc: "Undefined", valueDesc: "0-127"}],
  [30, {controlNum: 30, controlNumBin: "00011110", controlNumHex: "1E", desc: "Undefined", valueDesc: "0-127"}],
  [31, {controlNum: 31, controlNumBin: "00011111", controlNumHex: "1F", desc: "Undefined", valueDesc: "0-127"}],
  [32, {controlNum: 32, controlNumBin: "00100000", controlNumHex: "20", desc: "LSB for Control 0 (Bank Select)", valueDesc: "0-127"}],
  [33, {controlNum: 33, controlNumBin: "00100001", controlNumHex: "21", desc: "LSB for Control 1 (Modulation Wheel or Lever)", valueDesc: "0-127"}],
  [34, {controlNum: 34, controlNumBin: "00100010", controlNumHex: "22", desc: "LSB for Control 2 (Breath Controller)", valueDesc: "0-127"}],
  [35, {controlNum: 35, controlNumBin: "00100011", controlNumHex: "23", desc: "LSB for Control 3 (Undefined)", valueDesc: "0-127"}],
  [36, {controlNum: 36, controlNumBin: "00100100", controlNumHex: "24", desc: "LSB for Control 4 (Foot Controller)", valueDesc: "0-127"}],
  [37, {controlNum: 37, controlNumBin: "00100101", controlNumHex: "25", desc: "LSB for Control 5 (Portamento Time)", valueDesc: "0-127"}],
  [38, {controlNum: 38, controlNumBin: "00100110", controlNumHex: "26", desc: "LSB for Control 6 (Data Entry)", valueDesc: "0-127"}],
  [39, {controlNum: 39, controlNumBin: "00100111", controlNumHex: "27", desc: "LSB for Control 7 (Channel Volume, formerly Main Volume)", valueDesc: "0-127"}],
  [40, {controlNum: 40, controlNumBin: "00101000", controlNumHex: "28", desc: "LSB for Control 8 (Balance)", valueDesc: "0-127"}],
  [41, {controlNum: 41, controlNumBin: "00101001", controlNumHex: "29", desc: "LSB for Control 9 (Undefined)", valueDesc: "0-127"}],
  [42, {controlNum: 42, controlNumBin: "00101010", controlNumHex: "2A", desc: "LSB for Control 10 (Pan)", valueDesc: "0-127"}],
  [43, {controlNum: 43, controlNumBin: "00101011", controlNumHex: "2B", desc: "LSB for Control 11 (Expression Controller)", valueDesc: "0-127"}],
  [44, {controlNum: 44, controlNumBin: "00101100", controlNumHex: "2C", desc: "LSB for Control 12 (Effect control 1)", valueDesc: "0-127"}],
  [45, {controlNum: 45, controlNumBin: "00101101", controlNumHex: "2D", desc: "LSB for Control 13 (Effect control 2)", valueDesc: "0-127"}],
  [46, {controlNum: 46, controlNumBin: "00101110", controlNumHex: "2E", desc: "LSB for Control 14 (Undefined)", valueDesc: "0-127"}],
  [47, {controlNum: 47, controlNumBin: "00101111", controlNumHex: "2F", desc: "LSB for Control 15 (Undefined)", valueDesc: "0-127"}],
  [48, {controlNum: 48, controlNumBin: "00110000", controlNumHex: "30", desc: "LSB for Control 16 (General Purpose Controller 1)", valueDesc: "0-127"}],
  [49, {controlNum: 49, controlNumBin: "00110001", controlNumHex: "31", desc: "LSB for Control 17 (General Purpose Controller 2)", valueDesc: "0-127"}],
  [50, {controlNum: 50, controlNumBin: "00110010", controlNumHex: "32", desc: "LSB for Control 18 (General Purpose Controller 3)", valueDesc: "0-127"}],
  [51, {controlNum: 51, controlNumBin: "00110011", controlNumHex: "33", desc: "LSB for Control 19 (General Purpose Controller 4)", valueDesc: "0-127"}],
  [52, {controlNum: 52, controlNumBin: "00110100", controlNumHex: "34", desc: "LSB for Control 20 (Undefined)", valueDesc: "0-127"}],
  [53, {controlNum: 53, controlNumBin: "00110101", controlNumHex: "35", desc: "LSB for Control 21 (Undefined)", valueDesc: "0-127"}],
  [54, {controlNum: 54, controlNumBin: "00110110", controlNumHex: "36", desc: "LSB for Control 22 (Undefined)", valueDesc: "0-127"}],
  [55, {controlNum: 55, controlNumBin: "00110111", controlNumHex: "37", desc: "LSB for Control 23 (Undefined)", valueDesc: "0-127"}],
  [56, {controlNum: 56, controlNumBin: "00111000", controlNumHex: "38", desc: "LSB for Control 24 (Undefined)", valueDesc: "0-127"}],
  [57, {controlNum: 57, controlNumBin: "00111001", controlNumHex: "39", desc: "LSB for Control 25 (Undefined)", valueDesc: "0-127"}],
  [58, {controlNum: 58, controlNumBin: "00111010", controlNumHex: "3A", desc: "LSB for Control 26 (Undefined)", valueDesc: "0-127"}],
  [59, {controlNum: 59, controlNumBin: "00111011", controlNumHex: "3B", desc: "LSB for Control 27 (Undefined)", valueDesc: "0-127"}],
  [60, {controlNum: 60, controlNumBin: "00111100", controlNumHex: "3C", desc: "LSB for Control 28 (Undefined)", valueDesc: "0-127"}],
  [61, {controlNum: 61, controlNumBin: "00111101", controlNumHex: "3D", desc: "LSB for Control 29 (Undefined)", valueDesc: "0-127"}],
  [62, {controlNum: 62, controlNumBin: "00111110", controlNumHex: "3E", desc: "LSB for Control 30 (Undefined)", valueDesc: "0-127"}],
  [63, {controlNum: 63, controlNumBin: "00111111", controlNumHex: "3F", desc: "LSB for Control 31 (Undefined)", valueDesc: "0-127"}],
  [64, {controlNum: 64, controlNumBin: "01000000", controlNumHex: "40", desc: "Damper Pedal on/off (Sustain)", valueDesc: "≤63 off, ≥64 on"}],
  [65, {controlNum: 65, controlNumBin: "01000001", controlNumHex: "41", desc: "Portamento On/Off", valueDesc: "≤63 off, ≥64 on"}],
  [66, {controlNum: 66, controlNumBin: "01000010", controlNumHex: "42", desc: "Sostenuto On/Off", valueDesc: "≤63 off, ≥64 on"}],
  [67, {controlNum: 67, controlNumBin: "01000011", controlNumHex: "43", desc: "Soft Pedal On/Off", valueDesc: "≤63 off, ≥64 on"}],
  [68, {controlNum: 68, controlNumBin: "01000100", controlNumHex: "44", desc: "Legato Footswitch", valueDesc: "≤63 Normal, ≥64 Legato"}],
  [69, {controlNum: 69, controlNumBin: "01000101", controlNumHex: "45", desc: "Hold 2", valueDesc: "≤63 off, ≥64 on"}],
  [70, {controlNum: 70, controlNumBin: "01000110", controlNumHex: "46", desc: "Sound Controller 1 (default: Sound Variation)", valueDesc: "0-127"}],
  [71, {controlNum: 71, controlNumBin: "01000111", controlNumHex: "47", desc: "Sound Controller 2 (default: Timbre/Harmonic Intens.)", valueDesc: "0-127"}],
  [72, {controlNum: 72, controlNumBin: "01001000", controlNumHex: "48", desc: "Sound Controller 3 (default: Release Time)", valueDesc: "0-127"}],
  [73, {controlNum: 73, controlNumBin: "01001001", controlNumHex: "49", desc: "Sound Controller 4 (default: Attack Time)", valueDesc: "0-127"}],
  [74, {controlNum: 74, controlNumBin: "01001010", controlNumHex: "4A", desc: "Sound Controller 5 (default: Brightness)", valueDesc: "0-127"}],
  [75, {controlNum: 75, controlNumBin: "01001011", controlNumHex: "4B", desc: "Sound Controller 6 (default: Decay Time - see MMA RP-021)", valueDesc: "0-127"}],
  [76, {controlNum: 76, controlNumBin: "01001100", controlNumHex: "4C", desc: "Sound Controller 7 (default: Vibrato Rate - see MMA RP-021)", valueDesc: "0-127"}],
  [77, {controlNum: 77, controlNumBin: "01001101", controlNumHex: "4D", desc: "Sound Controller 8 (default: Vibrato Depth - see MMA RP-021)", valueDesc: "0-127"}],
  [78, {controlNum: 78, controlNumBin: "01001110", controlNumHex: "4E", desc: "Sound Controller 9 (default: Vibrato Delay - see MMA RP-021)", valueDesc: "0-127"}],
  [79, {controlNum: 79, controlNumBin: "01001111", controlNumHex: "4F", desc: "Sound Controller 10 (default undefined - see MMA RP-021)", valueDesc: "0-127"}],
  [80, {controlNum: 80, controlNumBin: "01010000", controlNumHex: "50", desc: "General Purpose Controller 5", valueDesc: "0-127"}],
  [81, {controlNum: 81, controlNumBin: "01010001", controlNumHex: "51", desc: "General Purpose Controller 6", valueDesc: "0-127"}],
  [82, {controlNum: 82, controlNumBin: "01010010", controlNumHex: "52", desc: "General Purpose Controller 7", valueDesc: "0-127"}],
  [83, {controlNum: 83, controlNumBin: "01010011", controlNumHex: "53", desc: "General Purpose Controller 8", valueDesc: "0-127"}],
  [84, {controlNum: 84, controlNumBin: "01010100", controlNumHex: "54", desc: "Portamento Control", valueDesc: "0-127"}],
  [85, {controlNum: 85, controlNumBin: "01010101", controlNumHex: "55", desc: "Undefined", valueDesc: "---"}],
  [86, {controlNum: 86, controlNumBin: "01010110", controlNumHex: "56", desc: "Undefined", valueDesc: "---"}],
  [87, {controlNum: 87, controlNumBin: "01010111", controlNumHex: "57", desc: "Undefined", valueDesc: "---"}],
  [88, {controlNum: 88, controlNumBin: "01011000", controlNumHex: "58", desc: "High Resolution Velocity Prefix", valueDesc: "0-127"}],
  [89, {controlNum: 89, controlNumBin: "01011001", controlNumHex: "59", desc: "Undefined", valueDesc: "---"}],
  [90, {controlNum: 90, controlNumBin: "01011010", controlNumHex: "5A", desc: "Undefined", valueDesc: "---"}],
  [91, {controlNum: 91, controlNumBin: "01011011", controlNumHex: "5B", desc: "Effects 1 Depth  (default: Reverb Send Level - see MMA RP-023)  (formerly External Effects Depth)", valueDesc: "0-127"}],
  [92, {controlNum: 92, controlNumBin: "01011100", controlNumHex: "5C", desc: "Effects 2 Depth (formerly Tremolo Depth)", valueDesc: "0-127"}],
  [93, {controlNum: 93, controlNumBin: "01011101", controlNumHex: "5D", desc: "Effects 3 Depth  (default: Chorus Send Level - see MMA RP-023)  (formerly Chorus Depth)", valueDesc: "0-127"}],
  [94, {controlNum: 94, controlNumBin: "01011110", controlNumHex: "5E", desc: "Effects 4 Depth (formerly Celeste [Detune] Depth)", valueDesc: "0-127"}],
  [95, {controlNum: 95, controlNumBin: "01011111", controlNumHex: "5F", desc: "Effects 5 Depth (formerly Phaser Depth)", valueDesc: "0-127"}],
  [96, {controlNum: 96, controlNumBin: "01100000", controlNumHex: "60", desc: "Data Increment (Data Entry +1) (see MMA RP-018)", valueDesc: "N/A"}],
  [97, {controlNum: 97, controlNumBin: "01100001", controlNumHex: "61", desc: "Data Decrement (Data Entry -1) (see MMA RP-018)", valueDesc: "N/A"}],
  [98, {controlNum: 98, controlNumBin: "01100010", controlNumHex: "62", desc: "Non-Registered Parameter Number (NRPN) - LSB", valueDesc: "0-127"}],
  [99, {controlNum: 99, controlNumBin: "01100011", controlNumHex: "63", desc: "Non-Registered Parameter Number (NRPN) - MSB", valueDesc: "0-127"}],
  [100, {controlNum: 100, controlNumBin: "01100100", controlNumHex: "64", desc: "Registered Parameter Number (RPN) - LSB*", valueDesc: "0-127"}],
  [101, {controlNum: 101, controlNumBin: "01100101", controlNumHex: "65", desc: "Registered Parameter Number (RPN) - MSB*", valueDesc: "0-127"}],
  [102, {controlNum: 102, controlNumBin: "01100110", controlNumHex: "66", desc: "Undefined", valueDesc: "---"}],
  [103, {controlNum: 103, controlNumBin: "01100111", controlNumHex: "67", desc: "Undefined", valueDesc: "---"}],
  [104, {controlNum: 104, controlNumBin: "01101000", controlNumHex: "68", desc: "Undefined", valueDesc: "---"}],
  [105, {controlNum: 105, controlNumBin: "01101001", controlNumHex: "69", desc: "Undefined", valueDesc: "---"}],
  [106, {controlNum: 106, controlNumBin: "01101010", controlNumHex: "6A", desc: "Undefined", valueDesc: "---"}],
  [107, {controlNum: 107, controlNumBin: "01101011", controlNumHex: "6B", desc: "Undefined", valueDesc: "---"}],
  [108, {controlNum: 108, controlNumBin: "01101100", controlNumHex: "6C", desc: "Undefined", valueDesc: "---"}],
  [109, {controlNum: 109, controlNumBin: "01101101", controlNumHex: "6D", desc: "Undefined", valueDesc: "---"}],
  [110, {controlNum: 110, controlNumBin: "01101110", controlNumHex: "6E", desc: "Undefined", valueDesc: "---"}],
  [111, {controlNum: 111, controlNumBin: "01101111", controlNumHex: "6F", desc: "Undefined", valueDesc: "---"}],
  [112, {controlNum: 112, controlNumBin: "01110000", controlNumHex: "70", desc: "Undefined", valueDesc: "---"}],
  [113, {controlNum: 113, controlNumBin: "01110001", controlNumHex: "71", desc: "Undefined", valueDesc: "---"}],
  [114, {controlNum: 114, controlNumBin: "01110010", controlNumHex: "72", desc: "Undefined", valueDesc: "---"}],
  [115, {controlNum: 115, controlNumBin: "01110011", controlNumHex: "73", desc: "Undefined", valueDesc: "---"}],
  [116, {controlNum: 116, controlNumBin: "01110100", controlNumHex: "74", desc: "Undefined", valueDesc: "---"}],
  [117, {controlNum: 117, controlNumBin: "01110101", controlNumHex: "75", desc: "Undefined", valueDesc: "---"}],
  [118, {controlNum: 118, controlNumBin: "01110110", controlNumHex: "76", desc: "Undefined", valueDesc: "---"}],
  [119, {controlNum: 119, controlNumBin: "01110111", controlNumHex: "77", desc: "Undefined", valueDesc: "---"}],
  [120, {controlNum: 120, controlNumBin: "01111000", controlNumHex: "78", desc: "[Channel Mode Message] All Sound Off", valueDesc: "0"}],
  [121, {controlNum: 121, controlNumBin: "01111001", controlNumHex: "79", desc: "[Channel Mode Message] Reset All Controllers  (See MMA RP-015)", valueDesc: "0"}],
  [122, {controlNum: 122, controlNumBin: "01111010", controlNumHex: "7A", desc: "[Channel Mode Message] Local Control On/Off", valueDesc: "0 off, 127 on"}],
  [123, {controlNum: 123, controlNumBin: "01111011", controlNumHex: "7B", desc: "[Channel Mode Message] All Notes Off", valueDesc: "0"}],
  [124, {controlNum: 124, controlNumBin: "01111100", controlNumHex: "7C", desc: "[Channel Mode Message] Omni Mode Off (+ all notes off)", valueDesc: "0"}],
  [125, {controlNum: 125, controlNumBin: "01111101", controlNumHex: "7D", desc: "[Channel Mode Message] Omni Mode On (+ all notes off)", valueDesc: "0"}],
  [126, {controlNum: 126, controlNumBin: "01111110", controlNumHex: "7E", desc: "[Channel Mode Message] Mono Mode On (+ poly off, + all notes off)", valueDesc: "Note: This equals the number of channels, or zero if the number of channels equals the number of voices in the receiver."}],
  [127, {controlNum: 127, controlNumBin: "01111111", controlNumHex: "7F", desc: "[Channel Mode Message] Poly Mode On (+ mono off, +all notes off)", valueDesc: "0"}],
]);