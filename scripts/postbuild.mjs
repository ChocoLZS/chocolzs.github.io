import rss from './rss.mjs'
import { makeIndexPage } from './staticfile.mjs'

async function postbuild() {
  await rss()
  makeIndexPage()
}

postbuild()
