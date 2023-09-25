// JavaScript

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

//console.log(document.getElementById('myColor').value);


function changeColor(){
    // 背景色を変更
      document.body.style.backgroundColor = color.value;
    // カラーコードを表示
      text.textContent = color.value;
}

// カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);