function Showmarks(){
    marks  = document.getElementById('marks').value;
    if (marks>=40) {
        document.getElementById('image').src="./material/shabash.mp4"
        const ele = document.createElement('h1')
        ele.innerHTML="Pass ho gaya be.."
        const result = document.getElementById('result')
        result.innerHTML="You have passed the examination"
        
    }
    else if(marks<40){
        console.log("Abe padhai");
        document.getElementById('image').src="./material/munna.mp4"
        const result = document.getElementById('result')
        result.innerHTML="Fail ho gaya Chutiya"
    }
}
function cancle() {
    marks  = document.getElementById('marks').value = "";
}