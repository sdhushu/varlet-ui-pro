import enUS from './en-US'
import zhCN from './zh-CN'

import { Locale, Pack } from '@varlet/ui'
import _enUS from '@varlet/ui/es/locale/en-US'

const { add, use, pack, packs, merge } = Locale.useLocale<typeof zhCN & Pack>()

add('en-US', _enUS)

merge('en-US', enUS as any)

merge('zh-CN', zhCN as any)

export { pack, add, packs, merge, use }
