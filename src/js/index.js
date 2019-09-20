/* eslint-disable */
import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

function excuseGenerator() {
  let person = ["my mom", "my father", "a thieft", "a stranger"];
  let what = ["took ", "stole ", "lost", "picked up"];
  let when = ["this morning", "this afternoon", "yesterday", "last night"];

  let perIndex = Math.floor(Math.random() * person.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return person[perIndex] + " " + what[whatIndex] + " " + when[whenIndex];
}
