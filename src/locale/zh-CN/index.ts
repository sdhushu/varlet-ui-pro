const files = import.meta.globEager('./*.ts')

let zh_CN:Record<string, any> = {}

for (let file in files){
  const fileName = file.replace(/(\.\/|\.ts)/g, '') as string
  zh_CN[fileName] = files[file]
}

export default zh_CN