const { writeFile, readFile, appendFile } = require('fs')

writeFile("data.txt", "Karambit Blue ", "utf-8", (err) => {
  if (err) throw err;
  console.log('The "Karambit Blue Gem" was written to file!');
});


writeFile("data.txt", "Cost - $1.5mil", "utf-8", (err) => {
  if (err) throw err;
  console.log('The "Cost - $1.5mil" was written to file!');
});

// The content in data file was override by the written text


appendFile("data.txt", "   Codi Kader", (err) => {
    if (err) throw err;
    console.log(`"Codi Kader" was appended to the file`);
});



readFile("./data.txt", "utf-8", (err, data) => {
  if (!err) {
    console.log(data);
  } else {
    console.log("Something Went Wrong");
  }
});