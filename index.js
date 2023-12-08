 
let myLeads = []
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
// localStorage.clear()

myLeads = JSON.parse(localStorage.getItem("myLeads"))
if(myLeads == null)
{
    myLeads = []
}
else
renderData()

let inputBtn = document.getElementById("input-btn")
let deleteBtn = document.getElementById("delete-btn")
let saveTab = document.getElementById("save-tab")

saveTab.addEventListener("click",function(){
    chrome.tabs.query({active : true,currentWindow : true},function(tabs){
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        renderData()
    })
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderData()
    // inputEl.innerText = ""
    inputEl.value = ""
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads = []
    renderData()

})

function renderData(){
    let listItems = ""
    for(let i = 0;i<myLeads.length;i++)
    {
        // listItems  += "<li> <a href='"+ myLeads[i] +"'>" +myLeads[i]  +" </a></li>"
        listItems  += `<li> 
        <a target=_blank href='${myLeads[i]}'>${myLeads[i]} </a>
        </li>`

    }
    console.log(listItems)
    ulEl.innerHTML = listItems;
}


