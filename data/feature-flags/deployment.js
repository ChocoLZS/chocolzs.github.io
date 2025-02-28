/**
 * 只展示中文
 */
const IS_LANG_ZH_ONLY = process.env.NEXT_PUBLIC_LANG === 'zh'
/**
 * 部署位置：'zh' | 'gh' | 'en'
 */
const IS_DEPLOY_IN_ZH = process.env.NEXT_PUBLIC_DEPLOY_LOC === 'zh'
/**** 结束 ****/

console.log('IS_LANG_ZH_ONLY', IS_LANG_ZH_ONLY)

module.exports = {
  IS_LANG_ZH_ONLY,
  IS_DEPLOY_IN_ZH,
}
