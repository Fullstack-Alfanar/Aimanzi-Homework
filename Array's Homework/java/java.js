// Q1:
// var name, arr = [];
// for (i = 0; i < 5; i++) {
//     name = prompt("Enter a name");
//     arr[i] = name;
// }
// //  להציג רק את השם הראשון ואת השם האחרון

// alert(arr[0] + "," + arr[1]);

// הציגתהשמות כל שם בשורה נפרדת
// alert(arr[0]);
// alert(arr[4]);

// הצגת כל השמות בשורה אחת אבל הפוך (השם האחרון מוצג ראשון, לאחריו השם הלפני האחרון
// alert(arr[4] + "," + arr[3] + "," + arr[2] + "," + arr[1] + "," + arr[0]);

// -------------------------------------------------------------------------------------------
// Q2 :
// var arr=[];
// arr[0]="appele";
// arr[1]="banana";
// arr[2]="orange";
// arr[3]="grape";

// // הצגת כל פרי בשורה נפרדת
// // alert (arr[0]);
// // alert (arr[1]);
// // alert (arr[2]);
// // alert (arr[3]);

// // הצגת כל פרי בשורה נפרדת ע"י לולאה
// for(i=0;i<4;i++){
// alert(arr[i]);
// }

// -------------------------------------------------------------------------------------------
// Q3:
// var arraygrades = [], grade;
// for (i = 0; i < 10; i++) {
//     grade = +prompt("insert grade");
//     arraygrades[i] = grade;
//     if (grade < 0 || grade > 100) {
//         alert("Invald grade");
//     } else
//         alert("Legal grade");
// }
// -------------------------------------------------------------------------------------------
// Q4 :
// var arraynumbers = [], max = 0, min, mum = 0, avrg, sum = 0;


// for (i = 0; i < 5; i++) {
//     num = +prompt("insert number");
//     if (num >= 1 && num <= 100) {
//         arraynumbers[i] = num;
//     } else {
//         alert("insert number betwen 1 to 100 only");
//         i--;
//     }
// }

// א.	את כל המערך בסדר הפוך (מהסוף להתחלה)

// for (i=4;i>=0;i--) {
//     alert(arraynumbers[i]);
// }

// ב.	את סכום המספרים
// for (i=4;i>=0;i--) {
//     sum= sum+arraynumbers[i];
// }

// ג.	את ממוצע המספרים
// avrg=sum/5;
// alert(avrg);

// ד.	את המספר המקסימלי
// for (i = 0; i < 5; i++) {
//     if (arraynumbers[i] > max) {
//         max = arraynumbers[i]
//     }
// }
// alert(max);

// ה.	את המספר המינימלי
// min=arraynumbers[0];
// for (i = 0; i < 5; i++) {
//     if (arraynumbers[i] < min) {
//         min = arraynumbers[i]
//     }
// }
// alert(min);
// -------------------------------------------------------------------------------------------
// Q1 challenge :
// לקלוט מספר ולהציג מרובה ברוחב ואורך ע"פ המספר שנקלט
// var n, x = "";
// n = +prompt("insert number");
// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= n; j++) {
//         x += "*";
//     }
//     x += ("\n");
// }
// alert(x);
// -------------------------------------------------------------------------------------------
// Q2 challenge :
// 2.	קלטו מהמשתמש רוחב וגובה של מלבן.
// הציגו מלבן מלא בכוכביות ברוחב ובגובה שנקלטו.
//
// var n,col="",row="",x="";
//     col = +prompt("insert colums number");
//     row = +prompt("insert rows number");
// for (i = 1; i <= col ; i++) {
//     for (j = 1; j <=row; j++) {
//         x+="*";
//     }
// x+=("\n");
// }
// alert(x);
// -------------------------------------------------------------------------------------------
// Q21:  קילטו מהמשתמש מספר , הציגו ריבוע כתלות במספר שנקלט 

// var n, x = "";
// n = +prompt("insert number");
// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= n; j++) {
//         x += j;
//         alert(x);
//     }
//     x += ("\n");
// }
// alert(x);

// -------------------------------------------------------------------------------------------

//Q22: .קילטו מהמשתמש מספרים שוב ושוב עד שמכניס 0 או מספר שלילי.
//  עבור כל מספר שנקלט (ללא ה-0 או המספר השלילי שמסיימים את הקלט) .
//   הציגו את כל המספרים ממנו ועד 1 בסדר יורד.

// var num, i;
// do {
//     num = +prompt("Insert number");
//     for (i = num; i >= 1;i--) {
//         alert(i);
//     }
// } while (num > 0);
// -------------------------------------------------------------------------------------------

// Q20:   קילטו מספר והציגו משולש מקודקוד לבסיס כתלות מספר
//  var n,x="";
//     n = +prompt("insert number");
// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= i; j++) {
//         x+=j;
//     }
// x+=("\n");
// }
// alert(x);
// -------------------------------------------------------------------------------------------

// שאלת אתגר מס 7:
// /קילטו מספר והציגו משולש הפןך מבסיס לקודקוד כתלות מספר
//  var n,x="";
//     n = +prompt("insert number");
// for (i = n; i >= 1; i--) {
//     for (j = 1; j <= i; j++) {
//         x+="*";
//     }
// x+=("\n");
// }
// alert(x);
// -------------------------------------------------------------------------------------------










