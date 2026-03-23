"use strict";
const img_obj = {
    1 : "img/number_1.png",
    2 : "img/number_2.png",
    3 : "img/number_3.png",
//     4 :
//     5 :
//     6 :
//     7 :
//     8 :
//     9 :
//     10 :
//     11 :
//     12 :
}


const name_obj = {
    1 : "山本",
    2 : "池田",
    3 : "小茂田",
    4 : "飯島",
    5 : "帖佐",
    6 : "蓑茂",
    7 : "平生",
    8 : "野崎",
    9 : "種市",
    10 : "姉崎",
    11 : "佐藤",
    12 : "永井",
}

// imgオブジェクトを配列にする
function imgArray (array) {
    const img_ary =[];
    for (const key in array) {
        img_ary.push(array[key]);
    }
    return img_ary;
}

console.log(imgArray (img_obj));
const imgs = imgArray (img_obj);

        
        // スタートボタン
function rolling(){
// スライド
    document.getElementById("slide").classList.add("swiper");
    document.getElementById("slide").classList.remove("stop_slide");
}




// ストップボタン
function display(){
    document.getElementById("slide").classList.remove("swiper");
    // ランダム数値取得
        const keys = Object.keys(img_obj);
        console.log(keys);
        const random_num = Math.floor(Math.random()* keys.length);
        
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
    const g_name = document.querySelector("#names");
    console.log(document.querySelector("#names"));
    console.log(g_name);
    
    g_name.textContent = name_obj[random_number];
    console.log(name_obj[random_number]);


}


// スタート・ストップ呼び出し
// スタート
const start_ = document.getElementById("start");
// console.log(document.getElementById("start"));
start_.addEventListener("click",rolling);
// ストップ
const stop_ = document.getElementById("stop");
// console.log(document.getElementById("stop"));
stop_.addEventListener("click",display);
