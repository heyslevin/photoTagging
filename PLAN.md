# Features

## Global

- Get mouse position when clicked
- document.addEventListener('mousemove', logKey);
- Use e.clientX, e.clientY
- Get mouse position relative to screen, then get position of space around image, and subtract. This results in coordinates within image

function relativeCoords ( event ) {
var bounds = event.target.getBoundingClientRect();
var x = event.clientX - bounds.left;
var y = event.clientY - bounds.top;
return {x: x, y: y};
}

// React Style

- Box Component that renders conditionally on click
- Box with props that updates position based on mousePosition

Popup Component
<Popup mousePosition={position}>

- PENDING - Get responsive coordinates

## Dropdown on click location

- Absolute position elements, with Top and left being clientX or X (depending on position of element)

1. Make a box appear on Click position
2. Wrap that box in PopupTrigger. This will make this the reference. (https://chakra-ui.com/docs/overlay/popover)
3. Try to put a menu there

- Close when clicked out of div:

document.addEventListener('click', function(e) {
var el = e.target.closest('#menucontainer');
if (el) {
// click inside the popup

    } else {
        // click outside the popup
        // getElementById("").style.display = 'none'
        // remove event listener

    }

});

## Check if coordinate is within bounds

- Create bounding box based on coordinate.
  - Point A: (x-10),(y-10)
  - Point B: (x+10),(y+10)
    if (x > x-10 && x < x+10 && y > x-10 && y < y+10) {
    you hit the box
    }

## Time and get score

- Have "Start" Button
  - Onclick start timer:
    - startTime = new.Date().getTime()
  - If allFound === true, check timer
    - endTime = new.Date().getTime()
  - Time elapsed = endTime - startTime
  - Convert to minutes:
    function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
    seconds == 60 ?
    (minutes+1) + ":00" :
    minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    );

# Interface

- NavBar
  - Icons of searched person (Waldo)
    - Checkmark when found
  - View Leaderboard
  - Time elapsed
  - Home? Maybe
- Waldoimage
