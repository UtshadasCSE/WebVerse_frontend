const fs = require("fs");
fs.writeFile("demo3.txt", "Hello", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Done");
  }
});
fs.appendFile("demo3.txt", "Bangladesh", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Done 2");
  }
});

fs.readFile("demo1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
// fs.rename("demo")
fs.exists("demo2.txt", (result) => {
  if (result) {
    console.log("Found");
  } else {
    console.log("Not found");
  }
});
