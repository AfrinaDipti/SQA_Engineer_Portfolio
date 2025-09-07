const fs = require("fs");
const path = require("path");

const reportsDir = path.join(__dirname, "cypress/reports/mochawesome");

fs.readdirSync(reportsDir).forEach(file => {
  if (file.endsWith(".json")) {
    const filePath = path.join(reportsDir, file);
    const content = fs.readFileSync(filePath, "utf8").trim();

    if (!content) {
      console.log(`🗑️ Deleted empty JSON: ${file}`);
      fs.unlinkSync(filePath);
    }
  }
});

console.log("✅ Empty JSON cleanup complete.");
