const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { series } = require('gulp')


function clean(cb) {
  console.log('In clean()')

  cb()
}

async function test(cb) {
  console.log(`In test()`)
  try {
    const result = await exec('yarn test')
    console.log(result.stdout)

    cb()
  } catch (error) {
    cb(error)
  }
}

function build(cb) {
  console.log('In build()')
  cb()
}

exports.build = build
exports.default = series(clean, test, build)
