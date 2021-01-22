import {keyPressTypes} from '@/lib/encoderActions'

/**
 * Generate the C code to be put in QMK keymap.c
 * @param {Array} layers 
 * @param {Array} encoders 
 */
export default function(layers, encoders) {

    let layerCheck = ''
    layers.sort((a, b) => a.index - b.index).forEach(layer => {
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