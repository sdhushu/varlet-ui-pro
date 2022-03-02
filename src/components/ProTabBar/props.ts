import type { PropType } from 'vue'

export const proProps = {
  tabList: {
    type: Array
  },
  active: {
    type: [String, Number],
    default: 0
  },
  fixedBottom: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  disabledColor: {
    type: String
  },
  color: {
    type: String
  },
  onClick: {
    type: Function as PropType<(active: string | number) => void>
  },
  onChange: {
    type: Function as PropType<(active: string | number) => void>
  },
  'onUpdate:active': {
    type: Function as PropType<(active: string | number) => void>
  }
}
