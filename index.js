var index = 0; 
showList();
function press(n){
    showList(index += n);
}
function showList(n){
    let x = document.querySelectorAll('.open');
    for(let i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    if(n === 1){
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "block";
        }
    }else if(n == 2){
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
    }else{
        console.error("error");
    }
}