var message=["ようこそ　魔導士ギルドFAIRYTAIL（妖精の尻尾）へ!"];
for (var i=0; i<message.length; i++) {
    alert(message[i]);
}

function proverb(language) {
    var message="";

    if (language==1){
        message="魔力があろうがなかろうが大事なのは生きてるって事だろ！命だろーが！(182話）";
    } else if (language == 2) {
        message = "罪なんかじゃない。仲間を思う気持ちは罪なんかじゃない！（74話）";
    } else if (language == 3) {
        message="傷なんてどこに増えようが構わねぇんだ目に見える方はな（46話）";
    } else if (language == 4) {
        message="仲間を売るくらいなら死んだほうがましだ！（52話）";
    } else {
        message = "想定されていない引数です";
    }
    
      alert(message);
    
} 