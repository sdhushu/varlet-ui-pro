import { PropType } from "vue"

export const proProps = {
  menu: {
    type: Array
  },
  active: {
    type: [String, Number, Boolean]
  },
  onChange: {
    type: Function as PropType<(active: string | number | boolean) => void>
  },
  "onUpdate:active": {
    type: Function as PropType<(active: string | number | boolean) => void>
  }
}