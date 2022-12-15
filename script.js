const que=[
    "It is certain",
    "Reply hazy",
    "Try again",
    "Don’t count on it",
    "It is decidedly so	ask again later",
    "My reply is no",
    "Without a doubt",
    "My sources say no",
    "Yes definitely",
    "Cannot predict now",
    "Outlook not so good",
    "You may rely on it",
    "Concentrate and ask again",
    "Very doubtful",
    "As I see it, yes",		
    "Most likely",	
    "Outlook good",		
    "Yes",		
    "Signs point to yes",
];

document.getElementById("response").innerHTML=que;

    function myFunction(){
        que.sort(function(a,b){return 0.5 - Math.random()});
        document.getElementById("response").innerHTML=que[0];
        document.getElementById("response").style.fontSize="20px";
        setTimeout(timesOut, 4000);

    function timesOut(){
        document.getElementById("response").innerHTML="8";
        document.getElementById("response").style.fontSize="120PX";
        document.getElementById("clear").value="";

    }

}
