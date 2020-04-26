// https://adventofcode.com/2019/day/3

const wireArray1 = require('./day3-1data.json')
const wireArray2 = require('./day3-2data.json')

/**
 * wo kreuzen sich die beiden Linien?
 * welche Kreuzung hat den geringsten Abstand zum Ausgangspunkt?
 * function distance(???)
 * if (line1.charAt(0) =="R"){x+}
 * if (line1.charAt(0) =="L"){x-}
 * if (line1.charAt(0) =="U"){y+}
 * if (line1.charAt(0) =="D"){y-}
 * 
 * für jede Linie Array mit allen Koordinaten erstellen
 * prüfen welche Koordinaten kommen in beiden Arrays vor -> const intersections = []
 * prüfen welche dieser gemeinsamen Koordinaten ist am nächsten am Ausgangspunkt
 */

 for (let direction of wireArray1) {
     let coordinates = [];
     let x = 0;
     let y = 0;
     switch (direction.charAt(0)){
         case "R":
             coordinates.push({x: x + direction.slice(1)})
             // wie koordination speichern/welche syntax? array oder object?
             // muss ich format von direction.slice(1) von von string auf {number} ändern?
         break;
         case "L":
         break;
         case "U":
         break;
         case "D":
         break;
     };
 };