const prices = [{ name: "p1", price: 50 }, { name: "p2", price: 22 }, { name: "p3", price: 45 }]
// מימוש לולאת פוראיצ
// prices.myForEach = function (callbackFunc) {
//     for (let i = 0; i < this.length; i++) {
//         callbackFunc(this[i]);
//     }
// }

// אופן בשימוש
// prices.myForEach(item => console.log(item));

// פרימטיבי
let num = 12;
// מורכב
let man = { name: "jonathan", age: 25 };

function plus1(value) {
    value.age += 1;
}
// משתנה מורכב מועבר בי רפרנס ןלכן משנה את הערך של הקי עצמו
plus1(man)
// משתנה פרימיטבי מועתק בתוך הפונקציה --> בי באליו ולכן לא ישתנה
plus1(num)