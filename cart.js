function functionname(){
    var a = document.getElementsByClassName("selecteditems")
    selecteditems =[]
    for (let i = 0; i < a.length; i++) {
        if(a[i].checked){
            selecteditems.push(a[i].value)
        }
    }
    M.toast({
        html:"Item Added Successfully",
        classes:"green accent-3 rounded black-text"
    })
    console.log(selecteditems)
}

function viewcart(){
    if(selecteditems.length == 0){
        document.getElementById("write").innerHTML="Your Cart is empty."
        document.getElementById("removeitems").innerHTML = ""
    }
    else if (selecteditems.length == 1) {
        var x =[];
        var items=""
        for (let i = 0; i < selecteditems.length; i++) {
            x = selecteditems[i];
            var a = "<li>" + x + "</li>"
            items = items + a
        }
        document.getElementById("write").innerHTML= items
        var removebutton = '<a class="modal-close left waves-effect waves-green btn red" onclick="removelist()">Remove Item</a>'
        document.getElementById("removeitems").innerHTML = removebutton
    }
    else{
        var x =[];
        var items=""
        for (let i = 0; i < selecteditems.length; i++) {
            x = selecteditems[i];
            var a = "<li>"+x+"</li>"
            items = items + a
        }
        document.getElementById("write").innerHTML= items
        var removebutton = '<a class="modal-close left waves-effect waves-green btn red modal-trigger" href="#modalforremoveitem" onclick="removelist()">Remove Items</a>'
        document.getElementById("removeitems").innerHTML = removebutton
    }
}

function removelist(){
    if (selecteditems.length == 1) {
        selecteditems.splice(0,1);
        M.toast({
            html: "Item Removed Successfully",
            classes: "red rounded"
        })
    }
    else{
        var x =[];
        var items=""
        for (let i = 0; i < selecteditems.length; i++) {
            x = selecteditems[i];
            items += '<li><input class="removeitemlist forex" type="radio" value="' + x + '"/><span>' + x + '</span></li>'
        }
        document.getElementById("addtoremovelist").innerHTML = items
    }
}

function remove(){
    var a = document.getElementsByClassName("removeitemlist")
    var removeitemlist =[]
    for (let i = 0; i < a.length; i++) {
        if(a[i].checked){
            removeitemlist.push(a[i].value)
        }
    }
    console.log(removeitemlist)
    var ele = []
    for (let j = 0; j < removeitemlist.length; j++) {
        ele = removeitemlist[j]; 
        for (let i = 0; i < selecteditems.length; i++) {
            if ( selecteditems[i] === ele) { 
                selecteditems.splice(i, 1);
            }
    }
    }
    M.toast({
        html: "Items Removed Successfully",
        classes: "red rounded"
    })
}

let data = [{
    "name": "asiq",
    "age" : "dfsdf"
},{
    "name": "akash",
    "age" : "dfsdf"
},{
    "name": "fsdfg",
    "age" : "dfsdf"
}]
console.log(data.age)