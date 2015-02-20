
function windowLoaded() {
    setInterval(checkDeployable, 5000);
    checkDeployable();
}

function checkDeployable(){
    if (document.getElementById('deployable')){
        return;
    }
    var x = document.getElementsByClassName("merge-pr")[0];
    var div = document.createElement('button');
    div.innerHTML = "Deployable";
    div.className = "button primary deployable";
    div.id = "deployable";
    x.parentNode.appendChild(div);

    div.addEventListener("click", function(){
        var new_comment_field = document.getElementById('new_comment_field');
        new_comment_field.value = "#deployable";

        var buttons = document.getElementsByTagName('button');
        for (var x=0;x<buttons.length;x++){
            var content = buttons[x].innerHTML;
            //console.log(content);
            if (content.trim() === "Comment"){
                buttons[x].click();
            }
        }
    });  
}
addEventListener("load", windowLoaded, false);