const fs = require('fs');

console.log("=== File System Operations ===\n");

// Task 1: Reading data.txt using fs.readFileSync()
console.log("1. Reading data.txt file...");
try {
    const data = fs.readFileSync('data.txt', 'utf8');
    console.log("File contents:");
    console.log("--------------");
    console.log(data);
    console.log("--------------");
} catch (err) {
    console.error("Error reading file:", err);
}

// Task 2: Writing to output.txt using fs.writeFileSync()
console.log("\n2. Writing to output.txt file...");
try {
    const message = `Hello! My name is Sahul.
This message was written using fs.writeFileSync().
Current date: ${new Date().toLocaleDateString()}
File system operations are fundamental in Node.js!`;
    
    fs.writeFileSync('output.txt', message);
    console.log("Successfully wrote to output.txt");
    
    // Verify by reading the newly created file
    const outputContent = fs.readFileSync('output.txt', 'utf8');
    console.log("\nVerification - output.txt contents:");
    console.log("--------------");
    console.log(outputContent);
    console.log("--------------");
} catch (err) {
    console.error("Error writing file:", err);
}

console.log("\n=== File operations completed ===");