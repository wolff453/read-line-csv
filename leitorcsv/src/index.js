import { readFile } from 'fs/promises'

const read = (await readFile('./util/file.csv')).toString()
const split = read.split('\r\n')
const [header, ...data] = split
const splitHeader = header.split(',')


const user = data.map(item => {
    let obj = {}
    const splitLine = item.split(',')
    for (let i in splitLine) {
        obj[splitHeader[i]] = splitLine[i]
    }
    return obj
})

console.log(user)