// Ex. npm run repl haagen_no.sql '2017/12/(.*?).png' '2017/12/png/\$1.png'
var path = require('path')
var fs = require('fs')
var readline = require('readline')
var stream = require('stream')
var args = process.argv.slice(2)

if (args.length < 3) {
    console.error('srpl require 3 arguments: [ src search replace ] from current path. Supports regexp')
    return
}

var src = args[0]
var search = args[1]
var replace = args[2]
var read = path.join(__dirname, src)
var write = path.join(__dirname, 'repl_' + src)
fs.unlink(write, e => {
    /*if (e) {
        console.error(e)
        return
    }*/
    console.log('Replacing in ' + read)

    var writestream = fs.createWriteStream(write, {flags: 'a'})
    var instream = fs.createReadStream(read)
    var outstream = new stream
    var rl = readline.createInterface(instream, outstream)
    
    var i = 0
    
    rl.on('line', function (line) {
        // console.log(line)
        line = line.replace(new RegExp(search, 'g'), String(replace))
        writestream.write(line + '\r\n')
        console.log('Line', i++)
    })
    
    rl.on('close', function () {
        writestream.end()
    })    
})

