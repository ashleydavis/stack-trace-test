const { parse } = require('error-stack-parser');

try {
    function innerfn() {
        throw new Error("my error");
    }
    
    function outerfn() {
        innerfn();
    }
    
    outerfn();
}
catch (err) {
    console.log("Raw:");
    console.log(err.stack);

    const frames = parse(err);

    console.log("Parsed stack frame:");
    console.log(JSON.stringify(frames, null, 4));
}