

const inputTodo = document.querySelector("[data-input]");
const createTodo = document.querySelector("[data-createTodo]");
const statuss = document.querySelector(".yesno");
const statuss2 = document.querySelector(".yesno2");
const deleteTodo = document.querySelector("[delete-todo]");

let contentBox= document.querySelector(".todoArea");

let item = document.querySelector("[data-sampleItem]");

function checkTodoInput(){
    
    let x = inputTodo.value;
    if(x.trim() ===""){
        alert("🤦‍♂️🤦👉👉  Please  Enter  Todo First !!!");
        return;
    }
}
function ghost(){
    statuss2.classList.remove("hidden");
    setTimeout(()=>{
        statuss2.classList.add("hidden");
    },1000);
}

createTodo.addEventListener("click",()=>{
    // console.log("ghost");
    
    let text = inputTodo.value;
    if(text.trim()!=""){
        item.style.display="none";
        item.firstElementChild.innerHTML=text;
        let clone = item.cloneNode(true);
        contentBox.appendChild(clone);
        // deleteTodo.addEventListener("click",()=>{
        //     deleteTodo.parentElement.parentElement.remove();
        let count  =0;
        clone.children[1].firstElementChild.addEventListener("click",function(){
            count++;
            if(count ===1 ){
                clone.firstElementChild.style.cssText="border:2px solid; border-radius:3px; padding-inline:5px;";
                clone.firstElementChild.focus();
            // clone.firstElementChild.style.width="80%";
                clone.firstElementChild.contentEditable="true"  ;
            }
            if(count ===2){
                clone.firstElementChild.style.cssText="border:0;"
                clone.firstElementChild.blur();
                clone.firstElementChild.contentEditable="false";
                count =0;
            }
            
        })


        let clickCount =0;
        clone.lastElementChild.lastElementChild.addEventListener("click",function(){
            clickCount++;
            if(clickCount === 1){
                clone.firstElementChild.style.cssText= "text-decoration-line: line-through;text-decoration-style:solid;";
            }
            if(clickCount ===2){
                clone.remove();
                ghost(); 
            }
        })

        clone.style.display="flex";

        statuss.classList.remove("hidden");
        // console.log(statuss.classList);
        setTimeout(()=>{
            statuss.classList.add("hidden");
            // console.log(statuss.classList);

        },1500);
    }
    //   here we are resetting the inputTodo field to enter new Todo item   
    inputTodo.value="";      
    
})


deleteTodo.addEventListener("click",()=>{
    deleteTodo.parentElement.parentElement.remove();
});