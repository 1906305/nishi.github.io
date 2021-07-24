var message=["ようこそ　不良の世界へ!"];
for (var i=0; i<message.length; i++) {
    alert(message[i]);
}

function proverb(language) {
    var message="";

    if (language==1){
        message="立ち向かわないと。逃げちゃダメだ。過去でも、現代でも、オレが変わらないと何も変えれない。（2話）";
    } else if (language == 2) {
        message = "ヒナが守ってあげる。（2話）";
    } else if (language == 3) {
        message="君なら姉さんを救える！（1話）";
    } else if (language == 4) {
        message="オレが不良の時代を創ってやる。（5話）";
    } else {
        message = "想定されていない引数です";
    }
    
      alert(message);
    
} 