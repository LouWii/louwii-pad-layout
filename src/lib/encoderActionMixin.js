import {checkValueForEvent} from '@/lib/valueChecker'
import {checkValueForInit} from '@/lib/valueChecker'

export const encoderActionMixin = {
  methods: {
    checkForEvent(stateKey) {
      const currentStateKey = 'current' + stateKey[0].toUpperCase() + stateKey.slice(1)
      if (checkValueForEvent(this.action, stateKey, this[currentStateKey])) {
        this.emitChangeEvent()
      }
    },
    initValues(values) {
      values.forEach(function(value) {
        const currentStateKey = 'current' + value[0].toUpperCase() + value.slice(1)
        if (checkValueForInit(this.action, value, currentStateKey)) {
          this[currentStateKey] = this.action[value]
        }
      }.bind(this))
    },
  }
}