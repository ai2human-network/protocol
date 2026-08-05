import fs from "node:fs";
const files = ["schema/task.schema.json", "schema/proof.schema.json", "schema/status.schema.json", "examples/http-error-task.json"];
for (const file of files) JSON.parse(fs.readFileSync(new URL(file, import.meta.url), "utf8"));
console.log(`Validated ${files.length} JSON files.`);
