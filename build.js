const fs = require("fs");

// 理想中这里全是目录
let dirArr = fs.readdirSync("./docs");

console.log('1')
// 先把 sidebar 删除
fs.unlink("_sidebar.md", function (error) {
  if (error) {
    console.log(error);
  }
});

// 整一个新的 sidebar.md
fs.writeFile("_sidebar.md", "", "utf8", function (error) {
  if (error) {
    console.log(error);
  }
});

for (let dir of dirArr) {
  if (dir !== ".DS_Store") {
    fs.appendFileSync("_sidebar.md", `- ${dir}\n`);
    const fileName = fs.readdirSync(`./docs/${dir}`);
    // console.log(file);
    for (let name of fileName) {
      name = name.slice(0, -3);
      fs.appendFileSync("_sidebar.md", `  - [${name}](docs/${dir}/${name})\n`);
    }
  }
}
