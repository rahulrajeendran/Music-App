var i=0;
function play11(){
    var audio=document.getElementById("ado");
    var obj = new XMLHttpRequest();
    obj.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var b= JSON.parse(this.responseText).songs
            document.getElementById("ado").src=b[i].song;
            document.getElementById("img").src=b[i].image;
            document.getElementById("scrl").innerHTML=b[i].name; 
            var r=document.getElementById("ado");
            document.getElementById("li1").innerHTML=b[i+1].name;
            document.getElementById("li2").innerHTML=b[i+2].name;
            document.getElementById("li3").innerHTML=b[i+3].name;
            var cls=document.getElementById("pl1")
            if(cls.className=="fa fa-play"){
                console.log("krfjbrk")
                cls.className="fa fa-pause"
                r.play();
            }else{
                console.log("ddhvjh")
                cls.className="fa fa-play"
                r.pause();
            }
            }

        }
    obj.open("GET" , "Music.json", true);
    obj.send();

    audio.addEventListener("timeupdate", () => {
        console.log("progress");
        var pp=document.getElementById("pro");
          var prgs = audio.currentTime / audio.duration * 100;
          pp.style.width=`${prgs}%`;
      });
}


function next11(){
    var audio=document.getElementById("ado");
    var obj = new XMLHttpRequest();
    obj.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var b= JSON.parse(this.responseText).songs
            i++;
            document.getElementById("ado").src=b[i].song;
            document.getElementById("img").src=b[i].image;
            document.getElementById("scrl").innerHTML=b[i].name;
            var cls=document.getElementById("pl1")
            cls.className="fa fa-pause"
            var r=document.getElementById("ado");
            r.play();
            document.getElementById("li1").innerHTML=b[i+1].name;
            document.getElementById("li2").innerHTML=b[i+2].name;
            document.getElementById("li3").innerHTML=b[i+3].name;
            }
        }
    obj.open("GET" , "Music.json", true);
    obj.send();

    audio.addEventListener("timeupdate", () => {
        console.log("progress");
        var pp=document.getElementById("pro");
          var prgs = audio.currentTime / audio.duration * 100;
          pp.style.width=`${prgs}%`;
      });
}


function previous11(){
    var audio=document.getElementById("ado");
    var obj = new XMLHttpRequest();
    obj.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var b= JSON.parse(this.responseText).songs
            i--;
            document.getElementById("ado").src=b[i].song;
            document.getElementById("img").src=b[i].image;
            document.getElementById("scrl").innerHTML=b[i].name;
            var cls=document.getElementById("pl1")
            cls.className="fa fa-pause"
            var r=document.getElementById("ado");
            r.play();
            document.getElementById("li1").innerHTML=b[i+1].name;
            document.getElementById("li2").innerHTML=b[i+2].name;
            document.getElementById("li3").innerHTML=b[i+3].name;
            }
        }
    obj.open("GET" , "Music.json", true);
    obj.send();

    audio.addEventListener("timeupdate", () => {
        console.log("progress");
        var pp=document.getElementById("pro");
          var prgs = audio.currentTime / audio.duration * 100;
          pp.style.width=`${prgs}%`;
      });
}
// audio.addEventListener("timeupdate", () => {
//     console.log("progress");
//     var pp=document.getElementById("pro");
//       var prgs = audio.currentTime / audio.duration * 100;
//       pp.style.width=`${prgs}%`;
//   });
// audio.addEventListener("click", () => {
//         console.log("progress");
//         const
//       });