# Features

## Global

### Dropdown on click location

### Check if coordinate is within bounds

- State has Characters: found / not found
- On correct found, change character state
- Cross of Character in nav bar

### Do actions when selected character

### Time and get score

- Start with Blank Screen
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

### Next

- Sort Players for leaderboard based on time

  - Option 1: write player, then fetch list ordered
  - Option 2: write player, and order list locally

  https://stackoverflow.com/questions/5073799/how-to-sort-a-javascript-array-of-objects-by-nested-object-property
