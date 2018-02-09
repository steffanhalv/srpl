#! /usr/bin/env node
var path = require('path')
var fs = require('fs')
var readline = require('readline')
var stream = require('stream')
var args = process.argv.slice(2)

if (args.length < 3) {
    console.error('srpl require 3 arguments: [ src search replace ] from current path. Supports regexp and flag')
    return
}

var src = args[0]
var search = args[1]
var replace = args[2]
var flag = 'g'

if (args.length > 3) {
    flag = args[3]
}

var read = process.cwd() + '/' + src

var write = process.cwd() + '/' + 'repl_' + src
fs.unlink(write, e => {
    console.log('Replacing in ', read)

    var writestream = fs.createWriteStream(write, {flags: 'a'})
    var instream = fs.createReadStream(read)
    var outstream = new stream
    var rl = readline.createInterface(instream, outstream)
    
    var i = 0
    
    rl.on('line', function (line) {
        line = line.replace(new RegExp(search, flag), String(replace))
        writestream.write(line + '\r\n')
        console.log('Replacing at line ', i++)
    })
    
    rl.on('close', function () {
        writestream.end()
        console.log('File saved to ', write)
    })    
})
