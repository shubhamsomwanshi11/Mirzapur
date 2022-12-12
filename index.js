function Showmarks(){
    marks  = document.getElementById('marks').value;
    if (marks>=40) {
        document.getElementById('image').src="./material/shabash.mp4"
        
    }
    else if(marks<40){
        console.log("Abe padhai");
        document.getElementById('image').src="./material/munna.mp4"
    }
}