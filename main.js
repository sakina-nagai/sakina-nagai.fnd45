"use strict";
const img_obj = {
  1: "img/kao_1.png",
  2: "img/kao_2.png",
  3: "img/kao_3.png",
  4: "img/kao_4.png",
  5: "img/kao_5.png",
  6: "img/kao_6.png",
  7: "img/kao_7.png",
  8: "img/kao_8.png",
  9: "img/kao_9.png",
  10: "img/kao_10.png",
  11: "img/kao_11.png",
  12: "img/kao_12.png",
};

const name_obj = {
  1: "山本",
  2: "池田",
  3: "小茂田",
  4: "飯島",
  5: "帖佐",
  6: "蓑毛",
  7: "平生",
  8: "野崎",
  9: "種市",
  10: "姉崎",
  11: "佐藤",
  12: "永井",
};



// スタートボタン
function rolling() {
  // スライド
  document.getElementById("slide").classList.add("swiper");


  document.getElementById("slide-names").classList.add("swiper");
if(document.getElementById("random-name")){
    const removename = document.getElementById("random-name");
    console.log(removename);
    removename.remove();
}




}

// ストップボタン
function display() {
  //画像スライド  
  document.getElementById("slide").classList.remove("swiper");
  document.getElementById("slide-names").classList.remove("swiper");

  // ランダム数値取得
  const keys = Object.keys(img_obj);
  console.log(keys);
  const random_num = Math.floor(Math.random() * keys.length);
  const random_number = keys[random_num];
  console.log(keys);
  console.log(random_number);
  // 画像表示
  document.createElement("img");
  const img = document.createElement("img");
  const sl = document.getElementById("slide");
  img.src = img_obj[random_number];
  sl.prepend(img); //先頭に追加

  // 名前表示
  const NAME = document.createElement("div");//作りたいタグの名前と指定したらタグ（要素）が生成される
  const g_name = document.querySelector("#names");
  NAME.innerText = name_obj[random_number];
  g_name.prepend(NAME);
  NAME.id = "random-name";
}

// スタート・ストップ呼び出し
// スタート
const start_ = document.getElementById("start");
// console.log(document.getElementById("start"));
start_.addEventListener("click", rolling);
// ストップ
const stop_ = document.getElementById("stop");
// console.log(document.getElementById("stop"));
stop_.addEventListener("click", display);

