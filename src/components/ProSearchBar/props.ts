import type { PropType } from 'vue'

export const proProps = {
  placeholder: {
    type: String
  },
  round: {
    type: Boolean,
    default: false
  },
  value: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  'onUpdate:value': {
    type: Function as PropType<(value: string) => void>
  },
  onInput: {
    type: Function as PropType<(value: string, e: Event) => void>
  },
  onChange: {
    type: Function as PropType<(value: string, e: Event) => void>
  }
}
