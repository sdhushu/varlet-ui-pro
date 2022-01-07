const files = import.meta.globEager('./*.ts')

const zh_CN: Record<string, any> = {}

for (const file in files) {
  const fileName = file.replace(/(\.\/|\.ts)/g, '') as string
  zh_CN[fileName] = files[file].default
}

export default zh_CN
