const files = import.meta.globEager("./*.ts")

let en_US: Record<string, any> = {}

for (let file in files) {
  const fileName = file.replace(/(\.\/|\.ts)/g, "") as string
  en_US[fileName] = files[file].default
}

export default en_US