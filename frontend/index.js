function myFunction()
{
  fetch("http://127.0.0.1:5000/GetRandom")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    // HTML Write Begin
    var node = document.createElement("li");
    node.className = "list-group-item";
    var textnode = document.createTextNode(myJson.number);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    // HTML Write End
    // console.log(myJson.number);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
}

// Calling the function on every 2 seconds
setInterval(myFunction, 2000);