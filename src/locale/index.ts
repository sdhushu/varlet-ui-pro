import enUS from './en-US'

import zhCN from './zh-CN'

import { Locale } from '@varlet/ui'

// @ts-ignore
import _enUS from '@varlet/ui/es/locale/en-US'

const { add, use, pack, packs, merge } = Locale


add('en-US',_enUS)

merge('en-US', enUS)

merge('zh-CN', zhCN)

export { add, pack, packs, merge, use }







