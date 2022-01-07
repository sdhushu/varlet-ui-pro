const files = import.meta.globEager('./*.ts')

const en_US: Record<string, any> = {}

for (const file in files) {
  const fileName = file.replace(/(\.\/|\.ts)/g, '') as string
  en_US[fileName] = files[file].default
}

export default en_US
