const express = require("express");
const fs = require("fs");
const path = require("path");
const marked = require("marked");

const app = express();
const contentDir = path.join(__dirname, "md_files");

// Middleware setup
app.use(express.static(path.join(__dirname, 'public')));
app.use('/src', express.static(path.join(contentDir, 'ap1')));
app.use('/md_files', express.static(contentDir));
app.set("view engine", "ejs");

// Get markdown file structure
function getMarkdownStructure(dir) {
    const structure = {};
    const items = fs.readdirSync(dir);

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory() && item !== "src") {
            structure[item] = getMarkdownStructure(fullPath);
        } else if (item.endsWith(".md")) {
            structure[item] = path.relative(contentDir, fullPath);
        }
    });

    return structure;
}

// Routes
app.get("/", (req, res) => {
    try {
        const structure = getMarkdownStructure(contentDir);
        res.render("index", { structure });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading content");
    }
});

// Raw markdown files
app.get("/*.md", (req, res) => {
    const filePath = path.join(contentDir, req.params[0] + ".md");
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(404).send("File not found");
        }
        res.send(data);
    });
});

app.get('*', (req, res) => {
    const structure = getMarkdownStructure(contentDir);
    res.render("index", { structure });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));