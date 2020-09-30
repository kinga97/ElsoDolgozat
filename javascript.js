'use strict';

const students = [
    {'nev' : 'Tóth Balázs', 'osztaly' : '14SZF'},
    {'nev' : 'Börcsök Dávid', 'osztaly' : '14SZF'},
    {'nev' : 'Szabó Levente', 'osztaly' : '14SZF'},
    {'nev' : 'Pásztor Krisztián', 'osztaly' : '14SZF'},
    {'nev' : 'Visnyei Ádám', 'osztaly' : '14SZF'},
    {'nev' : 'Kucsera Kinga', 'osztaly' : '14SZF'},
    {'nev' : 'Kiss László', 'osztaly' : '14SZF'},
    {'nev' : 'Németh Christopher', 'osztaly' : '14SZF'},
];

function getStudents() {
        let szoveg = '<table>';
        szoveg += `<tr><th>Név</th><th>Osztály</th></tr>`;
        students.forEach((student) => {
            szoveg += `<tr><td>${student.nev}</td><td>${student.osztaly}</td></tr>`;
        });
        szoveg += '</table>';
        document.getElementById('tablazat').innerHTML = szoveg;
}

getStudents();

function feltolt() {
    let nev = document.getElementById('nev').value;
    let osztaly = document.getElementById('osztaly').value;
    console.log(nev + ' ' + osztaly);
    
    let nevTomb = [];
    students.forEach((student) => {
        nevTomb.push(student.nev);
    });
        
    if (nevTomb.includes(nev)) {
        window.alert('Ez a név már szerepel a listában!');
    }
    else {
        students.push({'nev' : `${nev}`, 'osztaly' : `${osztaly}`});
    }

   /* let eldont = false;
   students.forEach((student) => {
       if (student.nev == nev)
       {
           eldont = true;
       }
   });
   if (eldont) {
       window.alert('Ez a név már szerepel a listában!');
   }
   else {
    students.push({'nev' : `${nev}`, 'osztaly' : `${osztaly}`});
   }*/
   
    getStudents();
}

function utolsoTorol() {
    students.pop();
    getStudents();
}
