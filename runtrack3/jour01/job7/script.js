//EXO: 7
    function jourtravaille(date) {
        const jours_feries = [new Date(2020, 0, 1), new Date(2020, 3, 13), new Date(2020, 4, 1), new Date(2020, 4, 8), new Date(2020, 6, 14), new Date(2020, 7, 15), new Date(2020, 10, 1), new Date(2020, 10, 11), new Date(2020, 11, 25)];
        if (jours_feries.includes(date)) {
          console.log(`Le ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()} est un jour férié`);
        } else if (date.getDay() === 0 || date.getDay() === 6) {
          console.log(`Non, ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()} est un week-end`);
        } else {
          console.log(`Oui, ${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()} est un jour travaillé`);
        }
      }

      jourtravaille(new Date(2020, 1, 18));

     //(new Date(2020, 10, 11))



