export const proProps = {
  contents: {
    type: [Array, String]
  },
  noticeIcon: {
    type: String
  },
  loop: {
    type: Boolean,
    default: true
  },
  arrow: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: Number,
    default: 1000
  },
  touchable: {
    type: Boolean,
    default: false
  }
}