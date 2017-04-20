const viz = require('viz.js')
const minimist = require('minimist')

hexo.extend.tag.register('viz', (argv, content) => {
  let args = minimist(argv)
  let svg = viz(content, {
    engine: args.engine || 'dot'
  })

  return '<div style="margin: 0.5em 0px; display: block!important; text-align: center">' + svg + '</div>'
}, {
  ends: true
})
