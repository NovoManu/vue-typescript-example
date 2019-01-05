interface Module {
  [key: string]: object
}

const requireModule = require.context('.', true, /\.ts$/)
const modules: Module = {}

requireModule.keys().forEach(fileName => {
  if (fileName === './index.ts') return
  if (fileName.indexOf('index.ts') !== -1) {
    const moduleName = fileName.split('/')[1]
    modules[moduleName] = requireModule(fileName)[moduleName]
  }
})

export default modules
