console.log("test")
//I want to have an array for both todo and completed
const outstanding = [];

const completed = [];

paint();
console.log(paint);

//Whenever an element in one of the arrays changes then I want the list to update

function clicked() {
    console.log("I was clicked!");
    //find element by ID (my-textbox)

    //Get the value of the element
    let myTextbox = document.getElementById("my-textbox");
    //console.log(`adding ${myTextbox}`);

    //Add the value to the state (the array of to-do's)
    outstanding.push(myTextbox.value);

    //Empty the field 
    myTextbox.value = "";
    
    // and the value gets added to the "todo list"
    paint()
}

function paint() {
    //console.log(outstanding)
    let text = '';
    for (let i = 0; i < outstanding.length; i++) {
        text += "<li>" + 
                outstanding[i] +
                "&nbsp;<span class='my-button-syle'><button onclick=\"done('" + outstanding[i] + "')\"><i class='fa-sharp fa-solid fa-check'></i></button></span>&nbsp;" + 
                "&nbsp;<button onclick=\"deleteIt('" + outstanding[i] + "')\"><i class='fa-solid fa-trash-can'></i></button>" + 
                 "</li>";
    } 
    document.getElementById("outstandingList").innerHTML = text;
    //console.log(text)
 text = '';
 for (let i = 0; i < completed.length; i++) {
    text += "<li>" + 
                completed[i] + 
                "&nbsp;<button onclick=\"deleteIt('" + completed[i] + "')\"><i class='fa-solid fa-trash-can'></i></button>&nbsp;" + 
                 "</li>";
 }   
    document.getElementById("completedList").innerHTML = text;

}

function done(toDoDone) {
    completed.push(toDoDone);
    
    const deleteIt = outstanding.indexOf(toDoDone);
    if (deleteIt >= 0) {
        outstanding.splice(deleteIt, 1);
    }

    paint()
}

function deleteIt(removeIt) {
    const deleteIt = outstanding.indexOf(removeIt);
    if (deleteIt >= 0) {
        outstanding.splice(deleteIt, 1);
    }
    const deleteIt2 = completed.indexOf(removeIt);
    if (deleteIt2 >= 0) {
        completed.splice(deleteIt2, 1);
    }

    paint()
}

function headerButtonClicked(elementId, cssClass) {
    let header = $(`#${elementId}`);
    
    console.log(header)
    let classes = header.attr('class').split(/\s+/);
    let elementHasClass = classes.indexOf(cssClass)
    if (elementHasClass >= 0) {
        header.removeClass(cssClass)
    } else {
        header.addClass(cssClass);
    }
    
    console.log(classes)

}

//All the button variables
// var done = document.getElementsByClassName("complete");
// var remove = document.getElementById("remove");

// addtocomplete.onclick = function(outstanding, done) {
//     for (var i = 0; i < outstanding.length; i++) {
//       if (addtocomplete.Id == outstanding.Id) {
//         done.push(outstanding.Id[i])
//       }
//     }
//   }