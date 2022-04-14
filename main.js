let sentences;
let info;
let nouns = 0;

document.addEventListener("DOMContentLoaded", function(){
    // passing function generateWords() into event listener
    document.querySelector("button").addEventListener("click", generateWords);
    document.querySelector("button").addEventListener("click", analyzeWords);
})


function generateWords(){
    // group the words by 2 in a markov generator
    const rm = RiTa.markov(2);
    rm.addText(artistConk);
    sentences = rm.generate(2);

    // references paragraph tag and pushes content
    sentences = sentences.join(" ");
    document.querySelector("#generated").innerHTML = sentences;
}

function analyzeWords(){
    info = RiTa.analyze(sentences);
    // if(info.pos == nn || info.pos == nns){
    //     nouns = info.pos;
    // }
    document.querySelector("#analysis").innerHTML = info.pos;
}