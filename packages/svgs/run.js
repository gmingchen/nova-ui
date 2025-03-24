import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const assetsRoot = `${__dirname}/assets`
const componentsRoot = `${__dirname}/components`
const mainRoot = `${__dirname}`

/**
 * 移除非必要属性 并设置 fill 属性
 * @param {*} content
 * @returns
 */
function removeAttribute(content) {
  const removeAttrs = ['id', 'pid', 'class', 'width', 'height', 'version', 'fill']
  removeAttrs.forEach(attr => {
    const reg = new RegExp(` ${attr}="[^"]*"`, 'g')
    content = content.replace(reg, '')
  })
  content = content.replace('<svg', '<svg fill="currentColor"')
  return content
}

/**
 * 提取svg标签
 * @param {*} content
 * @returns
 */
function extractSvg(content) {
  const startIndex = content.indexOf('<svg')
  const endIndex = content.lastIndexOf('</svg>') + '</svg>'.length
  return content.slice(startIndex, endIndex)
}

/**
 * 格式化内容
 * @param {*} content
 * @returns
 */
function format(content) {
  content = extractSvg(content)
  content = removeAttribute(content)
  return content
}

/**
 * 读取文件
 * @returns
 */
const readFile = () => {
  const result = {}
  const files = fs.readdirSync(assetsRoot)
  files.forEach(file => {
    const path = `${assetsRoot}/${file}`
    let content = fs.readFileSync(path, 'utf8')
    content = format(content)
    const name = file.replace('.svg', '')
    result[name] = content
  })
  return result
}

/**
 * 转大驼峰
 * @param {*} value
 * @returns
 */
function toGreatHump(value) {
  return value
    .split('-')
    .map(item => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))
    .join('')
}

/**
 * 转成vue文件内容
 * @param {*} name
 * @param {*} content
 * @returns
 */
function toComponentContent(name, content) {
  const result = `<template>
  ${content}
</template>

<script setup>
  defineOptions({
    name: 'N${name}Svg',
  })
</script>
`
  return result
}

/**
 * 写入vue文件
 * @param {*} key
 * @param {*} content
 */
function writeComponentFile(key, content) {
  const greatHumpName = toGreatHump(key)
  const data = toComponentContent(greatHumpName, content)
  const path = `${componentsRoot}/${key}.vue`
  fs.writeFile(path, data, error => error && console.error(error))
}

/**
 * 转成import语句
 * @param {*} keys
 */
function toImport(keys) {
  return keys.map(key => `import ${toGreatHump(key)} from './components/${key}.vue'`).join('\n')
}

/**
 * 转成export语句
 * @param {*} keys
 * @returns
 */
function toExport(keys) {
  return `export {
  ${keys.map(key => toGreatHump(key)).join(',\n  ')}
}`
}

/**
 * 转成type语句
 * @param {*} keys
 * @returns
 */
function toType(keys) {
  return `export const svgs = [\n${keys
    .map(key => `  '${toGreatHump(key)}'`)
    .join(',\n')},\n] as const

export type SvgType = typeof svgs[number]`
}

/**
 * 写入主入口文件
 * @param {*} key
 * @param {*} content
 */
function writeMainFile(keys) {
  const importData = toImport(keys)
  const exportData = toExport(keys)
  const typeData = toType(keys)
  const data = `${importData}\n\n${exportData}\n\n${typeData}\n`
  const path = `${mainRoot}/index.ts`
  fs.writeFile(path, data, error => error && console.error(error))
}

/**
 * 文件写入
 * @param {*} json
 */
const writeFile = json => {
  for (const key in json) {
    if (Object.prototype.hasOwnProperty.call(json, key)) {
      writeComponentFile(key, json[key])
    }
  }
  const keys = Object.keys(json)
  writeMainFile(keys)
}

/**
 * 运行方法
 */
function run() {
  const json = readFile()
  writeFile(json)
}

run()
