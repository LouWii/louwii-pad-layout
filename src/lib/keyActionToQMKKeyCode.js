import {keyPressTypes, ACTION_TYPE_KEY_PRESS} from '@/lib/encoderActions'

export default function(actionType, action) {
  if (actionType === ACTION_TYPE_KEY_PRESS && action.keyPressed) {
    const keyPressDetails = keyPressTypes.get(action.keyPressType)
    if (!keyPressDetails) {
      throw 'Tried to get key code for key press type ' + action.keyPressType + ' but it does not exist'
    }

    return keyPressDetails.keyCode.replace('%key%', action.keyPressed)
  }
}