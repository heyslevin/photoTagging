# Features

## Global

### Dropdown on click location

### Check if coordinate is within bounds

- Create bounding box based on coordinates
  - Point A: (x-10),(y-10)
  - Point B: (x+10),(y+10)
- Check if mouseclick is within bounds
  if (x > x-10 && x < x+10 && y > x-10 && y < y+10) {
  you hit the box
  }

### Time and get score

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

### Interface

- NavBar
  - Icons of searched person (Waldo)
    - Checkmark when found
  - View Leaderboard
  - Time elapsed
  - Home? Maybe
- Waldoimage
