// Case1
// triangleOne: base = 10cm, height = 13cm
// triangleTwo: base = 16,5cm, height = 20,3cm
// Case2
// triangleThree: base = 16,5cm, height = 20,3cm
// triangleFour: base = 20,3cm, height = 16,5cm
// Case3
// triangleFive: base = 7,8cm, height = 5,6cm
// triangleSix: base = 9,3cm, height = 12,4cm
function calculateArea(base, height) {
  return (base * height) / 2
}
//Case-1

//triangleOne
function compare1() {
  if (triangleOne > triangleTwo) {
    console.log("triangleOne bigger than triangleTwo")
  } else {
    console.log("triangleTwo bigger than triangleOne")
  }
}
const base1 = 10,
  height1 = 13
let triangleOne = calculateArea(base1, height1)
console.log(`triangleOne : ${triangleOne}cm`)
//triangleTwo
const base2 = 16.5,
  height2 = 20.3
let triangleTwo = calculateArea(base2, height2)
console.log(`triangleTwo : ${triangleTwo}cm`)
//compare
compare1(triangleOne, triangleTwo)

//Case-2
function compare2() {
  if (triangleThree > triangleFour) {
    console.log("triangleThree bigger than triangleFour")
  }
  if (triangleThree < triangleFour) {
    console.log("triangleFour bigger than triangleThree")
  } else {
    console.log("Both triangles have the same area")
  }
  {
  }
}
//triangleThree

const base3 = 16.5,
  height3 = 20.3
let triangleThree = calculateArea(base3, height3)
console.log(`triangleThree : ${triangleThree}cm`)
//triangleFour
const base4 = 20.3,
  height4 = 16.5
let triangleFour = calculateArea(base4, height4)
console.log(`triangleFour : ${triangleTwo}cm`)
//compare
compare2(triangleThree, triangleFour)

// Case3
function compare3() {
  if (triangleFive > triangleSix) {
    console.log("triangleFive bigger than triangleSix")
  } else {
    console.log("triangleSix bigger than triangleFive")
  }
}
// triangleFive
const base5 = 7.8,
  height5 = 5.6
let triangleFive = calculateArea(base5, height5)
console.log(`triangleFive : ${triangleFive}cm`)
//triangleSix
const base6 = 9.3,
  height6 = 12.4
let triangleSix = calculateArea(base6, height6)
console.log(`triangleSix : ${triangleSix}cm`)
//compare
compare3(triangleFive, triangleSix)
