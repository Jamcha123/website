var x = document.getElementsByClassName("text");
class thing
{
    default(){
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
    }
    open(){
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "block";
        }
    }
    close(){
        for(let i = 0; i < x.length; i++){
            x[i].style.display = "none";
        }
    }
}
let mything = new thing();
let myPromise  = new Promise(function(resolve, reject){
    resolve();
    reject();
})
myPromise.then(
    function(value){
        mything.default();
        document.getElementById("enter").addEventListener(('click'), (e) => {
            mything.open();
        })
        document.getElementById("exit").addEventListener(('click'), (e) => {
            mything.close();
        })
    },
    function(error){
        console.error("error");
    }
)