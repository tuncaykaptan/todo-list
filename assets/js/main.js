const list = document.getElementById("list");
const input = document.getElementById("input");
const send = document.getElementById("send");
const deleteButton = document.getElementById("delete_button");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let content = input.value;
        crateNewItem(content);
    }
})
// Tuncay Kaptan
send.addEventListener("click", function(){
    let content = input.value;
    crateNewItem(content);
})

function crateNewItem(content){
    if(input.value != ""){
    let newItem = document.createElement("li");
    newItem.classList.add("mx-5");
    newItem.classList.add("my-3");
    newItem.classList.add("flex");
    newItem.classList.add("justify-between");
    newItem.classList.add("items-center");
    newItem.innerHTML = content;

    let closeButton = document.createElement("a");
    closeButton.classList.add("float-right");
    closeButton.classList.add("hover:cursor-pointer");
    closeButton.id = "delete_button";
    newItem.append(closeButton);

    let closeIcon = document.createElement("i");
    closeButton.classList.add("fa");
    closeButton.classList.add("fa-times");
    closeButton.append(closeIcon);

    list.append(newItem);
    input.value = "";

    deleteButtons = document.querySelectorAll(".fa-times");
 
    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
        
    }

}
}

function deleteItem(){
    let selected = this.parentElement;
    selected.remove();
}