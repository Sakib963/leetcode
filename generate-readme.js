const fs = require("fs");
const path = require("path");

const baseDir = ".";
const folders = fs.readdirSync(baseDir).filter(name =>
  /^\d+-/.test(name) && fs.statSync(path.join(baseDir, name)).isDirectory()
);

const tableRows = [
  "| # | Title | Difficulty | Folder |",
  "|--:|-------|------------|--------|"
];

folders.sort((a, b) => {
  const aNum = parseInt(a.split("-")[0]);
  const bNum = parseInt(b.split("-")[0]);
  return aNum - bNum;
}).forEach(folder => {
  const parts = folder.split("-");
  const problemNumber = parts[0];
  const title = parts.slice(1).join(" ").replace(/-/g, " ");
  const folderPath = `./${folder}`;

  let difficulty = "—";

  try {
    const readmePath = path.join(baseDir, folder, "readme.md");
    if (fs.existsSync(readmePath)) {
      const readmeContent = fs.readFileSync(readmePath, "utf-8");
      const match = readmeContent.match(/Difficulty\*\*:\s*(\w+)/i);
      if (match) {
        difficulty = match[1];
      }
    }
  } catch (err) {
    // Ignore and fallback to default
  }

  const row = `| ${parseInt(problemNumber)} | ${title} | ${difficulty} | [${folder}](${folderPath}) |`;
  tableRows.push(row);
});

const fullReadme = `# leetcode

This repo is where I document the LeetCode problems I’ve solved using JavaScript.

Each problem has its own folder with:
- the solution file
- (maybe!) a short \`readme.md\` where I explain how I thought about the problem, what tripped me up, and what I learned from it

The goal isn’t just to get the right answer — it’s to get better at thinking clearly, breaking down problems, and writing good code under pressure.

I’m not trying to rush through hundreds of problems. I just want to build a solid habit of consistent practice and reflection.

Thanks for stopping by ✌️

---

## 📚 Problem List(${folders.length} solved)

${tableRows.join("\n")}
`;

fs.writeFileSync("README.md", fullReadme);
console.log("✅ README.md updated with problem list!");
