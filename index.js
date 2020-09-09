/*
--------------------------------------------------------
ทำเพือการศึกษา โดย TinnerKung
แจกได้จำหน่ายพ่องตาย
ของมันฟรีเสือกหาพ่อค้าดูด Script เอาไปโมให้เสียตัง
ลูกค้าแม่งก็ควายชิปหาย

- TinnerKung
- Facebook https://www.facebook.com/sycertinnerkung
- GitHub https://github.com/TinnerKung
- Website https://sycerteam.tk
--------------------------------------------------------
*/
var readline = require('readline-sync');
var request = require('request');
var colors = require('colors');
const { exit } = require('process');
const librcon = require("librcon");
const utf8 = require('utf8');

console.log(colors.rainbow("----------- Minecarft Rcon Control -----------------------------"));
console.log(colors.cyan.underline("พิม yes | เปิดการใช้งาน"));
console.log(colors.cyan.underline("พิม no  | ปิดการใช้งาน"));
console.log(colors.rainbow("----------- Dev By TinnerKung ----------------------------------"));
var menu = readline.question("เลือกโหมด: ");
if(menu == 'yes'){

var ipfix = readline.question("IP ไม่เอา Port: ")
var port = readline.question("Rcon Port: ")
var password = readline.question("Rcon Password: ")

  function rq() {
    var command = readline.question("command: ")
    librcon.send(command, password, ipfix, port).then((res) => {
        console.log(colors.green("Output Command : " + res));
    }).catch((err) => {
        console.log("Error การเชื่อมต่อ " + err.message);
        exit();
    });
  };
  function time() {
    setTimeout(rq, 1000);
    clearTimeout(time);
  }
  setInterval(time, 1500);
};

if(menu == 'no'){

exit();

}
