// https://adventofcode.com/2019/day/3

const wireArray1 = require('./day3-1data-1.json')
const wireArray2 = require('./day3-1data-2.json')
// const wireArray1 = ["R75","D30","R83","U83","L12","D49","R71","U7","L72","U62","R66","U55","R34","D71","R55","D58","R83"]
// const wireArray2 = ["L10","U10","R20","D50","R10","U50","L98","U47","R26","D63","R33","U87","L62","D20","R33","U53","R51","U98","R91","D20","R16","D67","R40","U7","R15","U6","R7"]

function stringToNumber(str) {
    return parseInt(str.slice(1), 10)
}

function coordinates(arr) {

    let coord = [];
    let x = 0;
    let y = 0;

    for (let direction of arr) {

        const range = stringToNumber(direction.slice(0));

        switch (direction.charAt(0)) {
            case "R":
                for (let i = 1; i <= range; i++){
                coord.push({ x: x += 1, y: y += 0 });
            }
                break;
            case "L":
                for (let i = 1; i <= range; i++){
                    coord.push({ x: x -= 1, y: y += 0 });
                }
                break;
            case "U":
                for (let i = 1; i <= range; i++){
                    coord.push({ x: x += 0, y: y += 1 });
                }
                break;
            case "D":
                for (let i = 1; i <= range; i++){
                    coord.push({ x: x += 0, y: y -= 1 });
                }
                break;
        };
    };
    return coord;
}

const coordinatesWire1 = coordinates(wireArray1);
const coordinatesWire2 = coordinates(wireArray2);

function intersections(arr1, arr2) {
    let intersec = [];
    for (let coordArr1 of arr1) {
        for (let coordArr2 of arr2) {
            if (coordArr1.x == coordArr2.x == true && coordArr1.y == coordArr2.y == true) { intersec.push(coordArr1) };
        };
    };
    return intersec;
};

const intersectionArray = intersections(coordinatesWire1, coordinatesWire2);

function distance(arr){
    let distance = 0;
    let distanceArray = [];
    for (let intersection of arr){
        distance = Math.abs(intersection.x) + Math.abs(intersection.y)
        distanceArray.push(distance);
    }
    return distanceArray;
}
const distanceArray = distance(intersectionArray);

console.log(Math.min.apply(null, distanceArray));