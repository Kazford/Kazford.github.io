const fs = require('fs')
const path = require('path')

class Students {
  constructor(
    name,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight
  ) {
    this.name = name
    this.one = one
    this.two = two
    this.three = three
    this.four = four
    this.five = five
    this.six = six
    this.seven = seven
    this.eight = eight
  }

  toJSON() {
    return ({
      name: this.name,
      one: this.one,
      two: this.two,
      three: this.three,
      four: this.four,
      five: this.five,
      six: this.six,
      seven: this.seven,
      eight: this.eight
    })
  }

  async save() {
    const students = await Students.getAll()
    students.push(this.toJSON())

    return new Promise(((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'students.json'),
        JSON.stringify(students),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    }))


    console.log('Courses', students)
  }

  static getAll() {
    return new Promise(((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'students.json'),
        'utf-8',
        (err, content) => {
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(content))
          }

        }
      )
    }))
  }
}

module.exports = Students;