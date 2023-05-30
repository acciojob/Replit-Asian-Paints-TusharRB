//your JS code here. If required.
document.getElementById("change_button").addEventListener("click", function() {
  var blockId = document.getElementById("block_id").value;
  var colorId = document.getElementById("colour_id").value;
  
  var gridItem = document.getElementById(blockId);
  if (gridItem) {
    gridItem.style.backgroundColor = colorId;
  }
});

document.getElementById("reset_button").addEventListener("click", function() {
  var gridItems = document.getElementsByClassName("grid-item");
  for (var i = 0; i < gridItems.length; i++) {
    gridItems[i].style.backgroundColor = "transparent";
  }
});
