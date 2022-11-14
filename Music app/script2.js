function music(){
    var obj = new XMLHttpRequest();
    obj.onreadystatechange=function(){
        console.log("abc");
        if(this.readyState==4 && this.status==200){
            var b= JSON.parse(this.responseText).songs
            var st=""
            var i=0;
        }
    }
    obj.open("GET" , "Music.json", true);
    obj.send();
}
function play11(){
    music();
    document.getElementById("ado").src=b[i].song;
    document.getElementById("img").src=b[i].image;
    document.getElementById("scrl")=b[i].name;
}
function next11(){
    i++;
    document.getElementById("ado").src=b[i].song;
    document.getElementById("img").src=b[i].image;
    document.getElementById("scrl")=b[i].name;
}
function previous11(){
    i--;
    document.getElementById("ado").src=b[i].song;
    document.getElementById("img").src=b[i].image;
    document.getElementById("scrl")=b[i].name;
}