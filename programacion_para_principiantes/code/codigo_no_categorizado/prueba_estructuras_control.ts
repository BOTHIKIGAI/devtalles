/* 
Realizar un programa que muestre la nota del alumno
como: A, B, C, D, F donde:

A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/

let gradeStudent = 55;

if (gradeStudent >= 90) {
    console.log('El estudiante obtuvo una A');
} else if (gradeStudent >= 80) {
    console.log('El estudiante obtuvo una B')
} else if (gradeStudent >= 70) {
    console.log('El estudiante obtuvo una C')
} else if (gradeStudent >= 60) {
    console.log('El estudiante obtuvo una D')
} else {
    console.log('El estudiante obtuvo una F')
}