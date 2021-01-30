import {keyPressTypes} from '@/lib/encoderActions'
import keyActionToQMKKeyCode from '@/lib/keyActionToQMKKeyCode'

function getSortedLayers(layers) {
  return layers.sort((l1, l2) => l1.index - l2.index)
}

/**
 * Generate the C code to be put in QMK keymap.c
 * @param {Array} layers 
 * @param {Array} encoders 
 */
export default function(layers, encoders, keys) {

    layers = getSortedLayers(layers)
    let layerCheck = ''
    layers.forEach(layer => {
        let encoderCheck = ''
        encoders.filter(e => e.layerIndex === layer.index).sort((a, b) => a.index - b.index).forEach(encoder => {
            const actionUp = getCFunctionCall(encoder.clockwiseActionType, encoder.clockwiseAction)
            const actionDown = getCFunctionCall(encoder.counterclockwiseActionType, encoder.counterclockwiseAction)
            const encoderLayerCode =
    `if (index == ${encoder.index}) {
        if (clockwise) {
            ${actionUp}
        } else {
            ${actionDown}
        }
    }`
            if ('' !== encoderCheck) {
                encoderCheck += ' else '
            }
            encoderCheck += encoderLayerCode
        })

        if ('' !== layerCheck) {
            layerCheck += ' else '
        }
        layerCheck += 
`if (biton32(layer_state) == ${layer.slug}) {
    ${encoderCheck}
}`
    });

    console.log(getLayersDefinition(layers))
    console.log(getLayerNamesList(layers))
    console.log(getKeyMap(layers, keys))
    console.log(layerCheck)

}

function getCFunctionCall(actionType, actionDetails) {
    if (!actionType) return

    const fn = CFunctionCalls['getCFunctionCallFor' + actionType]
    if ('function' === typeof fn) {
        return fn(actionDetails)
    } else {
        throw 'Tried to generate code for action type ' + actionType + ' but function getCFunctionCallFor' + actionType + ' does not exist'
    }
}

const CFunctionCalls = {
    getCFunctionCallForKeyPress(actionDetails) {
        const keyPressTypeDetails = keyPressTypes.get(actionDetails.keyPressType)
        if (!keyPressTypeDetails) {
            throw 'Tried to get function call template for "' + actionDetails.keyPressType + '" but that keyPressType was not found'
        }
        if (!keyPressTypeDetails.functionCall) {
            throw 'Tried to get function call template for "' + actionDetails.keyPressType + '" but that keyPressType has no function call template'
        }
        return keyPressTypeDetails.functionCall.replace('%key%', actionDetails.keyPressed)
    },

    getCFunctionCallForMidiControlChange(actionDetails) {
        return 'hi '+actionDetails
    },

    getCFunctionCallForRGBChange(actionDetails) {
        return 'hello '+actionDetails
    },
}

function getLayersDefinition(layers) {
  let layersDef = ''
  let layerCount = 0
  layers.forEach(l => {
    layersDef += `#define ${l.slug} ${layerCount} \n`
    layerCount++
  })
  layersDef += `#define _LSEL  31 // Make sure this layer is the very last one

const int layers_count = ${layers.length + 1};`
// We add the total layer count + one for the "layer select" layer

  return layersDef
}

function getLayerNamesList(layers) {
  let maxNameLength = 0
  let layerArrayCode = ''
  layers.forEach(l => {
    if (l.name.length > maxNameLength) maxNameLength = l.name.length
    layerArrayCode += `  "${l.name}",
`
  })
  layerArrayCode = layerArrayCode.slice(0, -2)

  return `const char PROGMEM layer_names[${layers.length}][${maxNameLength + 1}] = {
${layerArrayCode}
};`
}

function getKeyMap(layers, keys) {
  let layersKeymap = ''
  layers.forEach(layer => {
    const keyCodes = []
    keys.filter(k => k.layerIndex === layer.index).sort((a, b) => a.index - b.index).forEach(key => {
      keyCodes.push(getKeyKeyCode(key))
    })

    // TODO the app needs to know the row and columns number to generate the map properly and dynamically and complete missing keycodes if any
    layersKeymap += `  [${layer.slug}] = LAYOUT( /* ${layer.name} */
    ${keyCodes[0]}, ${keyCodes[1]}, ${keyCodes[2]}, ${keyCodes[3]},
    ${keyCodes[4]}, ${keyCodes[5]}, ${keyCodes[6]}, ${keyCodes[7]}
  ),
`
  })
  layersKeymap = layersKeymap.slice(0, -2)

  return `const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
${layersKeymap}
};`
}

function getKeyKeyCode(key) {
  if (key.keyCode) return key.keyCode

  const keyCode = keyActionToQMKKeyCode(this.keyItem.actionType, this.keyItem.action)
  if (keyCode) return keyCode

  console.warn(`key ${key.index} has no key codes and we could not determine it`)
  return 'KC_NO'
}