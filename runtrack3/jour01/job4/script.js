function bisextile(annee) {
    if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
      return true;
    } else {
      return false;
    }
  }
  // console.log(bisextile(2000)); // true
  // console.log(bisextile(1900)); // false


// function bisextile(annee) {
//   if(annee % 4 === 0) {
//       if(annee % 100 === 0) {
//           if(annee % 400 === 0) {
//               return true;
//           } else {
//               return false;
//           }
//       } else {
//           return true;
//       }
//   } else {
//       return false;
//   }
// }

// function bisextile(annee) {
//   return annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0);
// }