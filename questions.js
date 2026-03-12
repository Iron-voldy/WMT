// ========== WMT QUIZ MASTER - ALL QUESTION SETS ==========
// 10 Card Sets x 35 MCQs each = 350 Total Questions

const allQuizData = {

  // ==================== LECTURE 1: Basics of Web, Protocols, Networking, DNS ====================
  lecture1: {
    title: "Lecture 01 - Basics of Web, Protocols, Networking, DNS",
    questions: [
      {
        q: "Who invented the World Wide Web (WWW)?",
        options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Linus Torvalds"],
        answer: 1,
        explanation: "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN."
      },
      {
        q: "What year was the World Wide Web invented?",
        options: ["1991", "1985", "1989", "1995"],
        answer: 2,
        explanation: "The World Wide Web was invented in 1989 by Tim Berners-Lee."
      },
      {
        q: "What is the World Wide Web (WWW)?",
        options: ["A global network of computers", "A system of interlinked hypertext documents", "An email service", "A file transfer protocol"],
        answer: 1,
        explanation: "WWW is a system of interlinked hypertext documents accessed via the internet using browsers."
      },
      {
        q: "What is the difference between the Internet and the Web?",
        options: ["They are the same thing", "Internet is a browser, Web is a server", "Internet is the global network, Web is a service running on it", "Web is the hardware, Internet is the software"],
        answer: 2,
        explanation: "Internet is the global network of computers. The Web is a service running on the internet (websites, apps). FTP, Telnet, email also run on the internet."
      },
      {
        q: "Which of the following is NOT a component of the Web?",
        options: ["Client (browser)", "Server", "Protocols", "Motherboard"],
        answer: 3,
        explanation: "The three components of the Web are: Client (browser), Server (stores web resources), and Protocols (rules for communication)."
      },
      {
        q: "Which of the following is an example of a web server?",
        options: ["Chrome", "Apache", "Windows", "Photoshop"],
        answer: 1,
        explanation: "Apache is a web server. Other examples include Nginx, IIS, and Tomcat. Chrome is a client/browser."
      },
      {
        q: "In the client-server model, who always initiates the conversation?",
        options: ["Server", "Client", "Both equally", "The protocol"],
        answer: 1,
        explanation: "The client always initiates the conversation. The server only sends responses."
      },
      {
        q: "What does HTTP stand for?",
        options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "HyperText Transmission Process", "Home Text Transfer Protocol"],
        answer: 0,
        explanation: "HTTP stands for HyperText Transfer Protocol. It is the foundation of the web."
      },
      {
        q: "HTTP is described as being:",
        options: ["Stateful", "Stateless", "Connection-oriented", "Encrypted by default"],
        answer: 1,
        explanation: "HTTP is stateless - it does not retain information between requests."
      },
      {
        q: "What does HTTPS add over HTTP?",
        options: ["Speed", "Encryption via SSL/TLS", "More bandwidth", "Better HTML support"],
        answer: 1,
        explanation: "HTTPS adds encryption via SSL/TLS to prevent eavesdropping and ensure secure communication."
      },
      {
        q: "What is the default port number for HTTP?",
        options: ["443", "21", "80", "25"],
        answer: 2,
        explanation: "HTTP uses port 80. HTTPS uses port 443."
      },
      {
        q: "What is the default port number for HTTPS?",
        options: ["80", "443", "21", "8080"],
        answer: 1,
        explanation: "HTTPS uses port 443. HTTP uses port 80."
      },
      {
        q: "What port does FTP use?",
        options: ["80", "25", "443", "21"],
        answer: 3,
        explanation: "FTP uses port 21. HTTP uses 80, HTTPS uses 443, SMTP uses 25."
      },
      {
        q: "What port does SMTP use?",
        options: ["21", "80", "25", "443"],
        answer: 2,
        explanation: "SMTP (Simple Mail Transfer Protocol) uses port 25."
      },
      {
        q: "What is SMTP used for?",
        options: ["Downloading files", "Sending emails", "Browsing the web", "Streaming video"],
        answer: 1,
        explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending emails."
      },
      {
        q: "What is the difference between POP3 and IMAP?",
        options: ["POP3 is faster", "POP3 downloads locally, IMAP syncs across devices", "IMAP is older", "They are the same"],
        answer: 1,
        explanation: "POP3 downloads emails locally to one device. IMAP syncs across multiple devices."
      },
      {
        q: "What does FTP stand for?",
        options: ["File Transfer Protocol", "Fast Transmission Protocol", "Full Text Processing", "File Text Protocol"],
        answer: 0,
        explanation: "FTP stands for File Transfer Protocol, used for uploading/downloading files."
      },
      {
        q: "What is a protocol?",
        options: ["A type of server", "A programming language", "A set of rules for data exchange", "A web browser"],
        answer: 2,
        explanation: "A protocol is a set of rules for data exchange that defines how communication happens."
      },
      {
        q: "Which layer do HTTP and HTTPS belong to?",
        options: ["Transport Layer", "Application Layer", "Network Layer", "Physical Layer"],
        answer: 1,
        explanation: "HTTP/HTTPS operate at the Application Layer. TCP/UDP operate at the Transport Layer."
      },
      {
        q: "Which protocols operate at the Transport Layer?",
        options: ["HTTP, HTTPS", "SMTP, IMAP", "TCP, UDP, WebSocket", "FTP, Telnet"],
        answer: 2,
        explanation: "TCP, UDP, and WebSocket operate at the Transport Layer."
      },
      {
        q: "What is a LAN?",
        options: ["Large Area Network", "Local Area Network", "Long Access Network", "Linked Application Network"],
        answer: 1,
        explanation: "LAN stands for Local Area Network - a network within a limited geographic area like a home, school, or office."
      },
      {
        q: "What is the typical speed of a LAN?",
        options: ["1-10 Mbps", "100 Mbps to 10 Gbps", "1-5 Kbps", "50-100 Kbps"],
        answer: 1,
        explanation: "LANs offer fast data transfer rates, often 100 Mbps to 10 Gbps."
      },
      {
        q: "What does MAN stand for?",
        options: ["Multi Area Network", "Metropolitan Area Network", "Main Access Network", "Mobile Attached Network"],
        answer: 1,
        explanation: "MAN stands for Metropolitan Area Network, spanning a city or large campus (up to 50 km)."
      },
      {
        q: "A MAN typically covers what area?",
        options: ["A room", "A city or metropolitan area", "The entire globe", "A single building"],
        answer: 1,
        explanation: "A MAN covers a city, town, or metropolitan area (up to 50 km)."
      },
      {
        q: "What does WAN stand for?",
        options: ["Wireless Access Network", "Wide Area Network", "Web Application Network", "World Attached Network"],
        answer: 1,
        explanation: "WAN stands for Wide Area Network, spanning countries, continents, or the entire globe."
      },
      {
        q: "Which network type spans the largest geographical area?",
        options: ["LAN", "MAN", "WAN", "PAN"],
        answer: 2,
        explanation: "WAN (Wide Area Network) spans the largest area - countries, continents, or the entire globe."
      },
      {
        q: "Which network type has the fastest speed?",
        options: ["WAN", "MAN", "LAN", "All equal"],
        answer: 2,
        explanation: "LAN has the fastest speed due to short range. WAN speeds are slower due to distance and infrastructure."
      },
      {
        q: "What does DNS stand for?",
        options: ["Data Network Service", "Domain Name System", "Digital Naming Standard", "Dynamic Network Server"],
        answer: 1,
        explanation: "DNS stands for Domain Name System, which translates domain names to IP addresses."
      },
      {
        q: "An HTTP Request consists of which components?",
        options: ["Method, Headers, Body", "URL, IP, Port", "Domain, Path, Hash", "Status, Content, Type"],
        answer: 0,
        explanation: "An HTTP Request consists of: Method, Headers, and Body."
      },
      {
        q: "An HTTP Response consists of which components?",
        options: ["Method, Headers, Body", "Status, Headers, Body", "URL, Content, Type", "Protocol, Port, Path"],
        answer: 1,
        explanation: "An HTTP Response consists of: Status, Headers, and Body."
      },
      {
        q: "Which of the following is a benefit of the Web?",
        options: ["Global communication", "Difficult to use", "Only works locally", "Requires special hardware"],
        answer: 0,
        explanation: "Benefits of the Web include: global communication, easy access to information, and platform for applications & services."
      },
      {
        q: "Which is NOT a benefit of computer networks?",
        options: ["Resource Sharing", "Improved Communication", "Increased isolation", "Remote Access"],
        answer: 2,
        explanation: "Benefits include resource sharing, improved communication, enhanced productivity, centralized data management, security, remote access, and scalability."
      },
      {
        q: "What does a client (browser) do?",
        options: ["Stores web content", "Handles rendering of web content", "Defines protocol rules", "Manages databases"],
        answer: 1,
        explanation: "A client (browser) requests information and handles rendering of web content. Examples: Chrome, Firefox, Edge, Opera."
      },
      {
        q: "Which of the following runs on the internet but is NOT the Web?",
        options: ["Websites", "FTP", "Web Apps", "HTML pages"],
        answer: 1,
        explanation: "FTP, Telnet, and email also run on the internet but are not part of the Web. The Web specifically refers to websites and web apps accessed via browsers."
      },
      {
        q: "What happens when a user enters a URL in the browser?",
        options: ["Server sends request to client", "Request is sent to server, server responds", "Browser creates the website", "Nothing happens until refresh"],
        answer: 1,
        explanation: "User enters URL → Request sent to server → Server processes and responds with HTML, CSS, JS."
      }
    ]
  },

  // ==================== LECTURE 2: Advanced HTML and CSS ====================
  lecture2: {
    title: "Lecture 02 - Advanced HTML and CSS",
    questions: [
      {
        q: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        answer: 1,
        explanation: "CSS stands for Cascading Style Sheets, used to define how HTML content is presented."
      },
      {
        q: "How many ways can you insert a style sheet?",
        options: ["1", "2", "3", "4"],
        answer: 2,
        explanation: "There are three ways: Inline style, Embedded (Internal) style sheet, and External style sheet."
      },
      {
        q: "Where is an inline style applied?",
        options: ["In a separate .css file", "In the <head> section", "Directly in the HTML element", "In a <style> tag"],
        answer: 2,
        explanation: "Inline styles are applied directly to the HTML element using the style attribute. They only apply to that specific element."
      },
      {
        q: "Where is an embedded style sheet placed?",
        options: ["In a separate file", "In the <head> of the HTML document", "In each HTML element", "In the <body> tag"],
        answer: 1,
        explanation: "An embedded style sheet is placed in the <head> of the HTML document using <style> tags."
      },
      {
        q: "What is an external style sheet?",
        options: ["CSS inside HTML element", "CSS in the head tag", "A separate .css text file", "CSS in JavaScript"],
        answer: 2,
        explanation: "An external style sheet is a separate text file with .css extension containing all CSS rules."
      },
      {
        q: "Which CSS method is best for maintaining multiple pages?",
        options: ["Inline style", "Embedded style", "External style sheet", "All are equal"],
        answer: 2,
        explanation: "External style sheets can be applied to any number of HTML files. When you change it, all referencing pages update automatically."
      },
      {
        q: "A CSS rule set consists of:",
        options: ["A tag and an attribute", "A selector and a declaration block", "A class and an ID", "A function and a parameter"],
        answer: 1,
        explanation: "A CSS rule set consists of a selector (points to the HTML element) and a declaration block (contains declarations)."
      },
      {
        q: "What does a CSS selector do?",
        options: ["Selects a database", "Points to the HTML element to style", "Creates a new element", "Deletes an element"],
        answer: 1,
        explanation: "The selector points to the HTML element you want to style."
      },
      {
        q: "In a CSS declaration, property and value are separated by:",
        options: ["Semicolon", "Comma", "Colon", "Period"],
        answer: 2,
        explanation: "Each CSS declaration includes a property name and a value, separated by a colon. Declarations are separated by semicolons."
      },
      {
        q: "How do you select an element by its ID in CSS?",
        options: [".myId", "#myId", "myId", "*myId"],
        answer: 1,
        explanation: "In CSS, an ID selector uses the # symbol followed by the ID name."
      },
      {
        q: "How do you select elements by class in CSS?",
        options: ["#className", ".className", "className", "&className"],
        answer: 1,
        explanation: "In CSS, a class selector uses a dot (.) followed by the class name."
      },
      {
        q: "What is a descendant selector in CSS?",
        options: ["Selects by ID", "Selects by class", "Selects a tag nested inside another tag", "Selects all elements"],
        answer: 2,
        explanation: "A descendant selector selects a tag nested inside another specified tag. They are separated by whitespace."
      },
      {
        q: "What does the CSS universal selector (*) do?",
        options: ["Selects first element", "Selects all elements", "Selects no elements", "Selects by ID"],
        answer: 1,
        explanation: "The universal selector (*) selects all elements on the page."
      },
      {
        q: "What is the hex color code for pure red?",
        options: ["#00ff00", "#0000ff", "#ff0000", "#ffff00"],
        answer: 2,
        explanation: "#ff0000 is pure red. First two digits (ff) = 100% red, middle two (00) = 0% green, last two (00) = 0% blue."
      },
      {
        q: "In hex color notation, #fb0 expands to:",
        options: ["#fb0000", "#ffbb00", "#f0b000", "#fbfb00"],
        answer: 1,
        explanation: "Three-digit hex is converted by replicating digits. #fb0 expands to #ffbb00."
      },
      {
        q: "Which hex value means 0% of a color?",
        options: ["ff", "00", "a0", "f0"],
        answer: 1,
        explanation: "Hex 00 means 0% of the colour, and hex ff means 100% of the colour."
      },
      {
        q: "Which hex value means 100% of a color?",
        options: ["00", "0f", "ff", "f0"],
        answer: 2,
        explanation: "Hex ff means 100% of the colour, hex 00 means 0%."
      },
      {
        q: "What is the RGB functional notation for white?",
        options: ["rgb(0,0,0)", "rgb(255,255,255)", "rgb(128,128,128)", "rgb(255,0,0)"],
        answer: 1,
        explanation: "rgb(255,255,255) is white. The integer value 255 corresponds to 100%."
      },
      {
        q: "Why are inline styles rarely used for final website versions?",
        options: ["They don't work", "They are too fast", "They mix content with presentation, hard to maintain", "They are too colorful"],
        answer: 2,
        explanation: "Inline styles mix content with presentation, making it hard to maintain. They can only be used to override previously declared styles."
      },
      {
        q: "What tag is used to link to an external style sheet?",
        options: ["<style>", "<css>", "<link>", "<script>"],
        answer: 2,
        explanation: "The <link> tag is used to link to an external style sheet in the HTML <head>."
      },
      {
        q: "What tag is used to embed a style sheet in HTML?",
        options: ["<link>", "<css>", "<style>", "<sheet>"],
        answer: 2,
        explanation: "The <style> tag is used to embed CSS rules directly in the HTML document's <head>."
      },
      {
        q: "What does CSS do for a website?",
        options: ["Adds interactivity", "Adds colors, fonts, layouts, spacing, and animations", "Stores data", "Creates servers"],
        answer: 1,
        explanation: "CSS adds colors, fonts, layouts, spacing, and animations to make a website visually appealing."
      },
      {
        q: "Which file extension is used for external style sheets?",
        options: [".html", ".js", ".css", ".txt"],
        answer: 2,
        explanation: "External style sheet files must end with the .css extension."
      },
      {
        q: "What does <code>p { color: red; }</code> mean in CSS?",
        options: ["All paragraphs will be red text", "All paragraphs will have red background", "Only the first paragraph is red", "The page background is red"],
        answer: 0,
        explanation: "This CSS rule selects all <p> elements and sets their text color to red."
      },
      {
        q: "How are multiple CSS declarations separated?",
        options: ["Commas", "Colons", "Semicolons", "Periods"],
        answer: 2,
        explanation: "Multiple CSS declarations in a declaration block are separated by semicolons."
      },
      {
        q: "Which CSS property changes text color?",
        options: ["background-color", "font-size", "color", "text-align"],
        answer: 2,
        explanation: "The 'color' property changes the text color of an element."
      },
      {
        q: "What is the CSS box model composed of?",
        options: ["Header, Body, Footer", "Margin, Border, Padding, Content", "Width, Height, Depth", "Color, Size, Position"],
        answer: 1,
        explanation: "The CSS box model consists of Margin, Border, Padding, and Content."
      },
      {
        q: "What does <code>display: flex</code> do?",
        options: ["Hides the element", "Makes element a flex container for flexible layout", "Makes text bold", "Adds a border"],
        answer: 1,
        explanation: "display: flex makes an element a flex container, enabling flexible box layout for its children."
      },
      {
        q: "Which property controls the space between the border and surrounding elements?",
        options: ["Padding", "Margin", "Border", "Width"],
        answer: 1,
        explanation: "Margin controls the space outside the border, between the element and surrounding elements."
      },
      {
        q: "Which property controls space between border and content?",
        options: ["Margin", "Padding", "Border-spacing", "Content-gap"],
        answer: 1,
        explanation: "Padding controls the space between the border and the content inside the element."
      },
      {
        q: "What does <code>background-color: #000;</code> set?",
        options: ["White background", "Black background", "Transparent", "Red background"],
        answer: 1,
        explanation: "#000 (or #000000) is black - 0% of all three color channels (red, green, blue)."
      },
      {
        q: "Which CSS property changes font size?",
        options: ["text-size", "font-size", "size", "font-style"],
        answer: 1,
        explanation: "The font-size property is used to change the size of text."
      },
      {
        q: "What does <code>text-align: center</code> do?",
        options: ["Centers the element", "Centers the text inside the element", "Makes text bold", "Adds a margin"],
        answer: 1,
        explanation: "text-align: center horizontally centers the text content inside the element."
      },
      {
        q: "Which external file does NOT contain the &lt;style&gt; tag?",
        options: ["HTML file", "CSS file", "Both contain it", "Neither contains it"],
        answer: 1,
        explanation: "The external CSS file does NOT contain the <style> tag - it only contains CSS rules."
      },
      {
        q: "How do you combine multiple selectors in CSS?",
        options: ["Using semicolons", "Using commas", "Using periods", "Using colons"],
        answer: 1,
        explanation: "Multiple selectors can be combined using commas to apply the same styles to different elements."
      }
    ]
  },

  // ==================== LECTURE 3: Introduction to JavaScript ====================
  lecture3: {
    title: "Lecture 03 - Introduction to JavaScript",
    questions: [
      {
        q: "What is JavaScript primarily used for in web development?",
        options: ["Content structure", "Presentation/styling", "Interactivity", "Database management"],
        answer: 2,
        explanation: "HTML is for content, CSS is for presentation, JavaScript is for interactivity."
      },
      {
        q: "Which HTML tag is used to include JavaScript?",
        options: ["<javascript>", "<js>", "<script>", "<code>"],
        answer: 2,
        explanation: "The <script></script> tag is used to hold JavaScript code in an HTML document."
      },
      {
        q: "Which keyword declares a function-scoped or globally-scoped variable?",
        options: ["let", "const", "var", "function"],
        answer: 2,
        explanation: "The var statement declares a function-scoped or globally-scoped variable. Variables declared with var are hoisted."
      },
      {
        q: "Which keyword declares a block-scoped variable?",
        options: ["var", "let", "function", "global"],
        answer: 1,
        explanation: "The let statement declares a block-scoped local variable, unlike var which is function-scoped."
      },
      {
        q: "Which keyword declares a read-only constant?",
        options: ["var", "let", "const", "static"],
        answer: 2,
        explanation: "const declares a read-only variable that holds a constant value that cannot be changed through reassignment."
      },
      {
        q: "What is 'hoisting' in JavaScript?",
        options: ["Moving variables to a different scope", "Variables declared with var are processed before code executes", "Removing unused variables", "Creating global variables"],
        answer: 1,
        explanation: "Hoisting means variables declared with var are processed before any code is executed."
      },
      {
        q: "Can you change a const variable's value through reassignment?",
        options: ["Yes always", "No never", "Only if it's a number", "Only in strict mode"],
        answer: 1,
        explanation: "The value of a constant can't be changed through reassignment, and it can't be redeclared."
      },
      {
        q: "If a const variable holds an object, can its properties be updated?",
        options: ["No, nothing can change", "Yes, properties can be updated", "Only if it's an array", "Only in non-strict mode"],
        answer: 1,
        explanation: "If a variable declared with const is an object or array, its properties or items CAN be updated or removed."
      },
      {
        q: "What is the general rule for choosing between var, let, and const?",
        options: ["Always use var", "Use const for things that won't change, let for things that will, var for older browsers", "Always use let", "Use var for objects, const for strings"],
        answer: 1,
        explanation: "Use const for objects/arrays and variables that won't change. Use let for variables that will change. Use var only for older browsers."
      },
      {
        q: "Which is NOT a valid identifier rule in JavaScript?",
        options: ["Cannot be a reserved word", "First character can be a number", "Can contain dollar signs", "Can contain underscores"],
        answer: 1,
        explanation: "The first character of an identifier CANNOT be a number. Identifiers can contain letters, numbers, dollar signs, and underscores."
      },
      {
        q: "Which of these is a primitive type in JavaScript?",
        options: ["Array", "Function", "String", "Date"],
        answer: 2,
        explanation: "Primitive types include: String, Number, Boolean, Null, and Undefined. Array, Function, and Date are objects."
      },
      {
        q: "What is the difference between null and undefined?",
        options: ["They are the same", "null = absence of value, undefined = no value assigned", "null is a number, undefined is a string", "undefined is an error"],
        answer: 1,
        explanation: "Null represents the absence of a value. Undefined represents a state where no value has been assigned at all."
      },
      {
        q: "In JavaScript, what does <code>5/10</code> return?",
        options: ["0 (integer division)", "0.5", "Error", "undefined"],
        answer: 1,
        explanation: "JavaScript has no distinction between integer and floating point. Unlike C/Java where 5/10=0, in JavaScript 5/10=0.5."
      },
      {
        q: "Is JavaScript strongly typed or loosely typed?",
        options: ["Strongly typed", "Loosely typed", "Statically typed", "Not typed at all"],
        answer: 1,
        explanation: "JavaScript is a loosely typed language - there are no explicit integer or floating-point declarations."
      },
      {
        q: "Which conditional statement selects one of many code blocks?",
        options: ["if", "if...else", "switch", "while"],
        answer: 2,
        explanation: "The switch statement is used to select one of many blocks of code to be executed."
      },
      {
        q: "What is the for/in loop used for in JavaScript?",
        options: ["Looping a set number of times", "Looping through properties of an object", "Looping while condition is true", "Creating infinite loops"],
        answer: 1,
        explanation: "for/in loops through the properties of an object."
      },
      {
        q: "What does the while loop do?",
        options: ["Always runs at least once", "Runs while a condition is true (may not run at all)", "Loops through object properties", "Loops a fixed number of times"],
        answer: 1,
        explanation: "The while loop runs while a condition is true. If the condition is false at the start, the block is never executed."
      },
      {
        q: "What does the do...while loop guarantee?",
        options: ["Never executes", "Executes at least once", "Executes exactly twice", "Executes infinitely"],
        answer: 1,
        explanation: "The do...while loop executes the code block once first, then continues while the condition is true."
      },
      {
        q: "What does the break statement do in a loop?",
        options: ["Pauses the loop", "Skips current iteration", "Exits the loop entirely", "Restarts the loop"],
        answer: 2,
        explanation: "The break statement exits the loop entirely, stopping all remaining iterations."
      },
      {
        q: "What does the continue statement do in a loop?",
        options: ["Stops the loop", "Skips the current iteration and moves to the next", "Restarts the loop", "Pauses execution"],
        answer: 1,
        explanation: "The continue statement skips the current iteration and moves to the next iteration of the loop."
      },
      {
        q: "What are the three JavaScript dialog boxes?",
        options: ["input, output, error", "alert, confirm, prompt", "warn, log, error", "show, hide, toggle"],
        answer: 1,
        explanation: "The three JavaScript dialog boxes are: alert() for displaying messages, confirm() for yes/no, and prompt() for user input."
      },
      {
        q: "How do you write single-line comments in JavaScript?",
        options: ["/* comment */", "// comment", "# comment", "-- comment"],
        answer: 1,
        explanation: "JavaScript supports single line comments with // and multi-line comments with /* */."
      },
      {
        q: "What is an array in JavaScript?",
        options: ["A function", "A special variable that holds multiple values", "A type of loop", "A CSS property"],
        answer: 1,
        explanation: "An array is a special variable which can hold more than one value at a time."
      },
      {
        q: "How do you access the length of a string in JavaScript?",
        options: [".size()", ".length", ".count()", ".len()"],
        answer: 1,
        explanation: "The String object has a built-in property called length. For example, 'Hello World!'.length returns 12."
      },
      {
        q: "Where should JavaScript functions ideally be placed?",
        options: ["At the end of body", "In the <head> of the document", "In a separate CSS file", "Inside HTML attributes"],
        answer: 1,
        explanation: "Functions should be placed in the head of the document to guarantee they are loaded before being called."
      },
      {
        q: "What is a JavaScript function?",
        options: ["A CSS selector", "A collection of statements usually with a single purpose", "An HTML element", "A variable type"],
        answer: 1,
        explanation: "A function is a collection of JavaScript statements, usually with a single purpose like calculation or validation."
      },
      {
        q: "Which method writes content to an HTML document?",
        options: ["console.log()", "document.write()", "window.print()", "alert()"],
        answer: 1,
        explanation: "document.write() writes information into HTML documents. innerHTML can also be used via element selectors."
      },
      {
        q: "What data type is <code>true</code> in JavaScript?",
        options: ["String", "Number", "Boolean", "Undefined"],
        answer: 2,
        explanation: "Boolean types are either true or false."
      },
      {
        q: "Which comparison operator checks both value AND type?",
        options: ["==", "===", "!=", ">="],
        answer: 1,
        explanation: "=== is the strict equality operator that checks both value and type. == only checks value."
      },
      {
        q: "Which logical operator represents AND?",
        options: ["||", "!", "&&", "??"],
        answer: 2,
        explanation: "&& is the logical AND operator. || is OR, and ! is NOT."
      },
      {
        q: "Which logical operator represents OR?",
        options: ["&&", "||", "!", "??"],
        answer: 1,
        explanation: "|| is the logical OR operator. && is AND, and ! is NOT."
      },
      {
        q: "What built-in JavaScript object is used for dates?",
        options: ["Time", "Calendar", "Date", "DateTime"],
        answer: 2,
        explanation: "The Date object is a built-in JavaScript object used for working with dates and times."
      },
      {
        q: "What does <code>typeof undefined</code> return?",
        options: ["\"null\"", "\"undefined\"", "\"object\"", "\"string\""],
        answer: 1,
        explanation: "typeof undefined returns 'undefined'. An undefined variable has no value assigned."
      },
      {
        q: "How can you create an array in JavaScript?",
        options: ["var arr = (1,2,3)", "var arr = [1,2,3]", "var arr = {1,2,3}", "var arr = <1,2,3>"],
        answer: 1,
        explanation: "Arrays are created using square brackets: var arr = [1, 2, 3];"
      },
      {
        q: "Which method adds an element to the end of an array?",
        options: ["unshift()", "push()", "pop()", "shift()"],
        answer: 1,
        explanation: "push() adds an element to the end of an array. unshift() adds to the beginning."
      }
    ]
  },

  // ==================== LECTURE 4: HTML DOM ====================
  lecture4: {
    title: "Lecture 04 - HTML DOM",
    questions: [
      {
        q: "What does DOM stand for?",
        options: ["Data Object Model", "Document Object Model", "Digital Output Method", "Document Oriented Markup"],
        answer: 1,
        explanation: "DOM stands for Document Object Model - a platform and language-neutral interface for accessing and updating document content."
      },
      {
        q: "The HTML DOM model is constructed as:",
        options: ["A list", "A table", "A tree of objects", "A stack"],
        answer: 2,
        explanation: "The HTML DOM model is constructed as a tree of Objects, created by the browser."
      },
      {
        q: "What can JavaScript do with the DOM?",
        options: ["Only read elements", "Change HTML elements, attributes, CSS styles, and react to events", "Only change colors", "Only add new elements"],
        answer: 1,
        explanation: "JavaScript can change HTML elements, HTML attributes, CSS styles, and react to events in the page."
      },
      {
        q: "Which method finds an HTML element by its ID?",
        options: ["getElementsByClassName()", "getElementsByTagName()", "getElementById()", "querySelector()"],
        answer: 2,
        explanation: "getElementById() finds a single HTML element by its unique ID."
      },
      {
        q: "Which method finds HTML elements by tag name?",
        options: ["getElementById()", "getElementsByTagName()", "getElementsByClassName()", "querySelector()"],
        answer: 1,
        explanation: "getElementsByTagName() finds HTML elements by their tag name (e.g., 'p', 'div', 'h1')."
      },
      {
        q: "Which method finds HTML elements by class name?",
        options: ["getElementById()", "getElementsByTagName()", "getElementsByClassName()", "getElementByName()"],
        answer: 2,
        explanation: "getElementsByClassName() finds HTML elements by their class name and returns an HTMLCollection."
      },
      {
        q: "What does getElementsByClassName() return?",
        options: ["A single element", "An HTMLCollection", "A string", "An array"],
        answer: 1,
        explanation: "getElementsByClassName() returns an HTMLCollection (classlist) which is a live collection that updates automatically."
      },
      {
        q: "What does getElementByName() return?",
        options: ["A single element", "An HTMLCollection", "A NodeList", "A string"],
        answer: 2,
        explanation: "getElementByName() returns a NodeList. It is mostly used for form inputs and accessed using index."
      },
      {
        q: "DOM methods are written in which naming convention?",
        options: ["snake_case", "kebab-case", "camelCase", "PascalCase"],
        answer: 2,
        explanation: "DOM methods are written in camelCase (e.g., getElementById, getElementsByTagName)."
      },
      {
        q: "HTML DOM events are written in which case?",
        options: ["camelCase", "UPPERCASE", "All simple/lowercase letters", "PascalCase"],
        answer: 2,
        explanation: "HTML DOM events are all in simple/lowercase letters (e.g., onclick, onchange, onkeydown)."
      },
      {
        q: "Which of the following is a keyboard event?",
        options: ["onclick", "onchange", "onkeydown", "onsubmit"],
        answer: 2,
        explanation: "onkeydown is a keyboard event. onclick is a mouse event, onchange and onsubmit are form events."
      },
      {
        q: "Which of the following is a form event?",
        options: ["onkeydown", "onclick", "onchange", "onmouseover"],
        answer: 2,
        explanation: "onchange is a form event triggered when an input field value changes."
      },
      {
        q: "When are DOM events typically used?",
        options: ["Before the page loads", "In combination with functions, executing when the event occurs", "Only during development", "Never in production"],
        answer: 1,
        explanation: "Events are normally used in combination with functions, and the function will not be executed before the event occurs."
      },
      {
        q: "How do you change the background color using DOM?",
        options: ["element.color = 'red'", "element.style.backgroundColor = 'red'", "element.bg = 'red'", "element.css.background = 'red'"],
        answer: 1,
        explanation: "You can change CSS styles using the DOM Style Object, e.g., element.style.backgroundColor = 'red'."
      },
      {
        q: "What happens when you change the src property of an image?",
        options: ["Nothing", "The new image loads gradually onto the page", "The page crashes", "The old image is deleted"],
        answer: 1,
        explanation: "Changing the URL of the image using the src property causes the new image to be loaded gradually onto the page. Replacement is not immediate."
      },
      {
        q: "The DOM is described as platform and language-neutral. What does this mean?",
        options: ["It only works on Windows", "It works with any platform and programming language", "It only works with JavaScript", "It requires Java"],
        answer: 1,
        explanation: "The DOM is platform-neutral and language-neutral, meaning it can be used with any platform and programming language."
      },
      {
        q: "Who creates the HTML DOM tree?",
        options: ["The developer", "The server", "The browser", "The CSS engine"],
        answer: 2,
        explanation: "The HTML DOM model is constructed as a tree of Objects, created by the browser."
      },
      {
        q: "Which event fires when a user clicks the mouse?",
        options: ["onchange", "onclick", "onhover", "onpress"],
        answer: 1,
        explanation: "The onclick event fires when a user clicks the mouse on an element."
      },
      {
        q: "Which event fires when a web page has loaded?",
        options: ["onclick", "onready", "onload", "onstart"],
        answer: 2,
        explanation: "The onload event fires when a web page has finished loading."
      },
      {
        q: "Which event fires when the mouse moves over an element?",
        options: ["onmouseclick", "onmouseover", "onmouseout", "onmouseup"],
        answer: 1,
        explanation: "The onmouseover event fires when the mouse pointer moves over an element."
      },
      {
        q: "Which event fires when an input field is changed?",
        options: ["onclick", "onchange", "oninput", "onload"],
        answer: 1,
        explanation: "The onchange event fires when the value of an input field is changed."
      },
      {
        q: "Which event fires when a form is submitted?",
        options: ["onclick", "onchange", "onsubmit", "onload"],
        answer: 2,
        explanation: "The onsubmit event fires when an HTML form is submitted."
      },
      {
        q: "Which event fires when a user presses a key?",
        options: ["onkeydown", "onclick", "onkeyclick", "onpress"],
        answer: 0,
        explanation: "The onkeydown event fires when a user presses/strokes a key on the keyboard."
      },
      {
        q: "What does the innerHTML property do?",
        options: ["Gets/sets the text content only", "Gets/sets the HTML content inside an element", "Gets the element's ID", "Gets the CSS styles"],
        answer: 1,
        explanation: "innerHTML gets or sets the HTML content inside an element, including HTML tags."
      },
      {
        q: "What does document.getElementById('demo') return if no element has id='demo'?",
        options: ["undefined", "null", "false", "An empty string"],
        answer: 1,
        explanation: "getElementById returns null if no element with the specified ID exists."
      },
      {
        q: "Which is the correct way to change an element's text color via DOM?",
        options: ["element.style.color = 'blue'", "element.textColor = 'blue'", "element.css.color = 'blue'", "element.font.color = 'blue'"],
        answer: 0,
        explanation: "element.style.color = 'blue' is the correct way to change text color using the DOM Style Object."
      },
      {
        q: "In DOM, what is a node?",
        options: ["A CSS rule", "Any single point in the DOM tree (element, text, attribute)", "A JavaScript function", "A server response"],
        answer: 1,
        explanation: "In the DOM tree, every item is a node - elements, text, attributes, and comments are all nodes."
      },
      {
        q: "What is the root element of an HTML DOM tree?",
        options: ["<head>", "<body>", "<html>", "<div>"],
        answer: 2,
        explanation: "The <html> element is the root element of an HTML DOM tree. <head> and <body> are its children."
      },
      {
        q: "What does <code>document.getElementsByTagName('p')</code> return?",
        options: ["The first <p> element", "All <p> elements as a collection", "A string", "The number of <p> elements"],
        answer: 1,
        explanation: "getElementsByTagName returns all matching elements as a collection (HTMLCollection)."
      },
      {
        q: "Which method is mostly used for form inputs?",
        options: ["getElementById()", "getElementsByTagName()", "getElementsByName()", "getElementsByClassName()"],
        answer: 2,
        explanation: "getElementsByName() is mostly used for form inputs, returns a NodeList, and is accessed using index."
      },
      {
        q: "What is an HTMLCollection?",
        options: ["A static array of HTML elements", "A live collection that updates automatically", "A CSS class list", "A JavaScript function"],
        answer: 1,
        explanation: "An HTMLCollection is a live collection that updates automatically when the DOM changes."
      },
      {
        q: "How do you access a specific element from getElementsByClassName()?",
        options: ["Using its name", "Using its index", "Using its value", "Using its type"],
        answer: 1,
        explanation: "Elements in an HTMLCollection are accessed using their index (e.g., collection[0])."
      },
      {
        q: "What is the purpose of the DOM?",
        options: ["To make websites faster", "To allow programs and scripts to dynamically access and update content, structure and style", "To encrypt data", "To store user data"],
        answer: 1,
        explanation: "The DOM allows programs and scripts to dynamically access and update the content, structure and style of documents."
      },
      {
        q: "Which DOM property is used to change an image?",
        options: ["innerHTML", "src", "href", "alt"],
        answer: 1,
        explanation: "The src property of an image element is used to change/replace the image."
      },
      {
        q: "What does 'live collection' mean in the context of DOM?",
        options: ["It never changes", "It automatically updates when the DOM changes", "It only works while online", "It requires a server"],
        answer: 1,
        explanation: "A live collection automatically updates when the DOM changes, unlike static collections."
      }
    ]
  },

  // ==================== LECTURE 5: More on Manipulating the DOM ====================
  lecture5: {
    title: "Lecture 05 - More on Manipulating the DOM",
    questions: [
      {
        q: "What does querySelector() return?",
        options: ["All matching elements", "The first element that matches the criteria", "The last matching element", "A count of matching elements"],
        answer: 1,
        explanation: "querySelector() returns the first element that matches the specified CSS selector criteria."
      },
      {
        q: "What does getAttribute() do?",
        options: ["Adds a new attribute", "Returns the value of the specified attribute", "Removes an attribute", "Checks if attribute exists"],
        answer: 1,
        explanation: "getAttribute(<attribute>) returns the value of the specified attribute of an element."
      },
      {
        q: "What does setAttribute() do?",
        options: ["Gets attribute value", "Removes an attribute", "Overwrites or adds an attribute-value pair", "Checks if attribute exists"],
        answer: 2,
        explanation: "setAttribute(<attribute>, <value>) overwrites the value if the attribute exists, otherwise adds the attribute-value pair."
      },
      {
        q: "What does removeAttribute() do?",
        options: ["Gets attribute value", "Sets a new attribute", "Deletes the attribute from the element", "Hides the attribute"],
        answer: 2,
        explanation: "removeAttribute(<attribute>) deletes the specified attribute from the element."
      },
      {
        q: "What does hasAttribute() return?",
        options: ["The attribute value", "true if attribute exists, false otherwise", "The element", "The attribute name"],
        answer: 1,
        explanation: "hasAttribute(<attribute>) returns true if the attribute exists, otherwise returns false."
      },
      {
        q: "How can you change the appearance of elements using JavaScript?",
        options: ["Only using inline styles", "By adding, changing, or removing the class attribute", "Only through CSS files", "Only through HTML"],
        answer: 1,
        explanation: "You can change appearance by adding, changing, or removing the class attribute using setAttribute, removeAttribute."
      },
      {
        q: "What does querySelectorAll() return?",
        options: ["A single element", "A live list", "A non-live (static) list", "An array"],
        answer: 2,
        explanation: "querySelectorAll() returns a non-live (static) list. Changes to the DOM do not modify the original node list returned."
      },
      {
        q: "What is the difference between a live list and a non-live list?",
        options: ["No difference", "Live lists auto-update when DOM changes, non-live lists don't", "Non-live lists are faster", "Live lists work offline"],
        answer: 1,
        explanation: "Live lists update instantly when the DOM changes. Non-live (static) lists remain unchanged after DOM modifications."
      },
      {
        q: "Why is addEventListener() preferred over inline event handlers?",
        options: ["It's faster", "It separates HTML from JavaScript code", "It uses less memory", "It's the only way to add events"],
        answer: 1,
        explanation: "addEventListener() totally separates HTML from JavaScript code, improving separation of concerns and readability."
      },
      {
        q: "What is the syntax for addEventListener()?",
        options: ["element.addEventListener(event, function, useCapture)", "element.addEvent(type, handler)", "element.on(event, callback)", "element.listen(event, function)"],
        answer: 0,
        explanation: "Syntax: element.addEventListener(event, function, useCapture) where useCapture is optional (default false)."
      },
      {
        q: "Can you add multiple event listeners to the same element?",
        options: ["No, only one", "Yes, including identical event handlers", "Only two maximum", "Only different event types"],
        answer: 1,
        explanation: "addEventListener won't overwrite existing handlers. You can add many handlers, including identical ones, to the same element."
      },
      {
        q: "What method removes an event listener?",
        options: ["deleteEventListener()", "removeEventListener()", "detachEvent()", "clearEventListener()"],
        answer: 1,
        explanation: "You can remove an event listener by using the removeEventListener() method."
      },
      {
        q: "What does the useCapture parameter control?",
        options: ["Whether the event fires", "Event bubbling vs event capturing", "The event type", "The callback function"],
        answer: 1,
        explanation: "useCapture controls whether to use event bubbling (false, default) or event capturing (true)."
      },
      {
        q: "What is event bubbling?",
        options: ["Events propagate from outer to inner", "Events propagate from inner to outer elements", "Events don't propagate", "Events only fire once"],
        answer: 1,
        explanation: "Event bubbling (default, useCapture=false): events propagate from the innermost element outward."
      },
      {
        q: "What is event capturing?",
        options: ["Events propagate from inner to outer", "Events propagate from outer to inner elements", "Events don't propagate", "Events are captured and stored"],
        answer: 1,
        explanation: "Event capturing (useCapture=true): events propagate from the outermost element inward to the target."
      },
      {
        q: "What does the value attribute get from a form field?",
        options: ["The element's HTML", "The current value of the form field", "The element's ID", "The CSS styles"],
        answer: 1,
        explanation: "The value attribute is used to get the value of a form field (input element)."
      },
      {
        q: "What does innerText do?",
        options: ["Gets/sets the HTML content", "Gets/sets the visible text content", "Gets the element's attributes", "Gets the element's CSS"],
        answer: 1,
        explanation: "The innerText attribute displays results as visible text content (without HTML tags)."
      },
      {
        q: "How do you access multiple elements matching a CSS selector?",
        options: ["querySelector()", "querySelectorAll()", "getElementById()", "getElementByName()"],
        answer: 1,
        explanation: "querySelectorAll() returns all matching elements. querySelector() only returns the first match."
      },
      {
        q: "How do you loop through elements returned by querySelectorAll()?",
        options: ["You can't loop through them", "Using a for loop", "Only with forEach", "Only with while"],
        answer: 1,
        explanation: "You can loop through all elements in a NodeList using a for loop (or forEach)."
      },
      {
        q: "What CSS selector does <code>querySelector('.myClass')</code> use?",
        options: ["ID selector", "Class selector", "Tag selector", "Universal selector"],
        answer: 1,
        explanation: "querySelector('.myClass') uses a class selector (dot notation) to find the first element with that class."
      },
      {
        q: "What does <code>querySelector('#myId')</code> select?",
        options: ["Elements with class myId", "The element with id myId", "All elements named myId", "The tag myId"],
        answer: 1,
        explanation: "querySelector('#myId') uses the # ID selector to find the element with that specific ID."
      },
      {
        q: "Can querySelectorAll() results have elements added or removed?",
        options: ["Yes, freely", "No, there are no methods to add/remove elements from the result", "Only added", "Only removed"],
        answer: 1,
        explanation: "NodeLists from querySelectorAll have no methods to add new elements or remove elements."
      },
      {
        q: "In the counter example, what event is listened for?",
        options: ["mouseover", "change", "click", "submit"],
        answer: 2,
        explanation: "In the simple counter example, a click event listener is attached to the button to increment the counter."
      },
      {
        q: "What is the purpose of separation of concerns in web development?",
        options: ["Making code run faster", "Keeping HTML, CSS, and JavaScript code separate", "Reducing file sizes", "Improving server performance"],
        answer: 1,
        explanation: "Separation of concerns means keeping HTML (structure), CSS (presentation), and JavaScript (behavior) in separate files."
      },
      {
        q: "What does document.querySelector('p') return?",
        options: ["All <p> elements", "The first <p> element", "The last <p> element", "A count of <p> elements"],
        answer: 1,
        explanation: "querySelector returns the first element matching the selector. For 'p', it returns the first paragraph element."
      },
      {
        q: "How do you get a reference to an interactive element?",
        options: ["Just use the element name", "Use document.getElementById() or querySelector()", "Elements are automatically available", "Use CSS selectors directly in JS"],
        answer: 1,
        explanation: "You get references to interactive elements using document.getElementById() or querySelector() and store them in variables."
      },
      {
        q: "In the character counter example, which event is used?",
        options: ["click", "input/keyup", "submit", "load"],
        answer: 1,
        explanation: "The live character counter example uses input or keyup events to count characters as the user types."
      },
      {
        q: "What is the hourly rate in the salary calculator example?",
        options: ["Rs.100", "Rs.350", "Rs.550", "Rs.1000"],
        answer: 2,
        explanation: "In the salary calculator example from Lecture 5, the hourly rate is Rs.550."
      },
      {
        q: "Where should event listeners be added for best practice?",
        options: ["Directly in HTML elements", "In the JavaScript code using addEventListener()", "In CSS files", "In the URL"],
        answer: 1,
        explanation: "For best practice, add event listeners inside JavaScript code using addEventListener() to separate HTML from JavaScript."
      },
      {
        q: "What happens to a live list when a new element is added to the DOM?",
        options: ["Nothing changes", "The list updates instantly", "The list becomes invalid", "An error occurs"],
        answer: 1,
        explanation: "A live list updates instantly when elements are added or removed from the DOM."
      },
      {
        q: "What happens to querySelectorAll() result when DOM changes?",
        options: ["It updates automatically", "It stays the same (non-live)", "It throws an error", "It becomes null"],
        answer: 1,
        explanation: "querySelectorAll() returns a non-live list, so DOM changes do not modify the original node list returned."
      },
      {
        q: "Which method can select elements using any CSS selector syntax?",
        options: ["getElementById()", "getElementsByTagName()", "querySelector()/querySelectorAll()", "getElementsByName()"],
        answer: 2,
        explanation: "querySelector() and querySelectorAll() can use any CSS selector syntax (class, id, tag, attribute, etc.)."
      },
      {
        q: "How do you access a single element from a collection returned by getElementsByClassName()?",
        options: ["By its name", "By specifying its index", "By its value", "By its type"],
        answer: 1,
        explanation: "You access a single element from a collection by specifying its index (e.g., elements[0])."
      },
      {
        q: "What is the default value for useCapture in addEventListener()?",
        options: ["true", "false", "null", "undefined"],
        answer: 1,
        explanation: "The default value for useCapture is false, which means event bubbling is used by default."
      },
      {
        q: "What method is used to check if an element has a specific attribute?",
        options: ["getAttribute()", "setAttribute()", "hasAttribute()", "removeAttribute()"],
        answer: 2,
        explanation: "hasAttribute(<attribute>) checks if an element has a specific attribute, returning true or false."
      }
    ]
  },

  // ==================== CODING QUESTIONS ====================
  coding: {
    title: "Coding Questions",
    questions: [
      {
        q: "What is the output of:<pre>console.log(typeof null);</pre>",
        options: ["\"null\"", "\"undefined\"", "\"object\"", "\"boolean\""],
        answer: 2,
        explanation: "typeof null returns 'object' - this is a well-known JavaScript bug/quirk that has persisted since the language was created."
      },
      {
        q: "What is the output of:<pre>let x = 10;\nlet y = '10';\nconsole.log(x == y);</pre>",
        options: ["true", "false", "undefined", "Error"],
        answer: 0,
        explanation: "== performs type coercion. The string '10' is converted to number 10, so 10 == 10 is true."
      },
      {
        q: "What is the output of:<pre>let x = 10;\nlet y = '10';\nconsole.log(x === y);</pre>",
        options: ["true", "false", "undefined", "Error"],
        answer: 1,
        explanation: "=== checks both value AND type. x is number, y is string. Different types, so false."
      },
      {
        q: "What is the output of:<pre>var a = 1;\nfunction test() {\n  console.log(a);\n  var a = 2;\n}\ntest();</pre>",
        options: ["1", "2", "undefined", "Error"],
        answer: 2,
        explanation: "Due to hoisting, 'var a' inside the function is hoisted to the top of the function, so 'a' is undefined when logged (before assignment)."
      },
      {
        q: "What is the output of:<pre>const arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr.length);</pre>",
        options: ["3", "4", "Error - const can't be changed", "undefined"],
        answer: 1,
        explanation: "const prevents reassignment of the variable, but you CAN modify the contents of an array (push, pop, etc.). Length is 4."
      },
      {
        q: "What does this CSS do?<pre>#header { color: blue; }</pre>",
        options: ["Selects all elements with class header", "Selects the element with id header and makes text blue", "Selects all header tags", "Creates a new element"],
        answer: 1,
        explanation: "# is the ID selector. This selects the element with id='header' and sets its text color to blue."
      },
      {
        q: "What is the output of:<pre>for(let i = 0; i < 5; i++) {\n  if(i === 3) break;\n}\nconsole.log('Done');</pre>",
        options: ["Prints 0,1,2,3 then Done", "Prints Done", "Prints 0,1,2 then Done", "Error"],
        answer: 1,
        explanation: "The loop breaks at i===3 but only 'Done' is logged since console.log is after the loop. No logging inside the loop."
      },
      {
        q: "What does this code select?<pre>document.querySelector('.active');</pre>",
        options: ["Element with id active", "First element with class active", "All elements with class active", "Element with tag active"],
        answer: 1,
        explanation: "querySelector('.active') returns the FIRST element with class='active'. The dot indicates class selector."
      },
      {
        q: "What is the output of:<pre>let fruits = ['apple','banana','cherry'];\nconsole.log(fruits[1]);</pre>",
        options: ["apple", "banana", "cherry", "undefined"],
        answer: 1,
        explanation: "Arrays are zero-indexed. fruits[0]='apple', fruits[1]='banana', fruits[2]='cherry'."
      },
      {
        q: "What does this code do?<pre>element.addEventListener('click', function() {\n  this.style.color = 'red';\n});</pre>",
        options: ["Changes all elements to red", "Changes the clicked element's text to red", "Removes the element", "Adds a red border"],
        answer: 1,
        explanation: "addEventListener attaches a click handler. When clicked, 'this' refers to the element, and its text color changes to red."
      },
      {
        q: "What is the output of:<pre>console.log(2 + '2');</pre>",
        options: ["4", "22", "\"22\"", "NaN"],
        answer: 2,
        explanation: "When + is used with a string, JavaScript performs string concatenation. 2 is converted to '2', result is string '22'."
      },
      {
        q: "What is the output of:<pre>console.log(2 - '1');</pre>",
        options: ["1", "\"21\"", "NaN", "undefined"],
        answer: 0,
        explanation: "The - operator converts the string '1' to number 1. So 2 - 1 = 1."
      },
      {
        q: "What does this CSS select?<pre>div p { color: red; }</pre>",
        options: ["All divs and all p elements", "Only p elements that are inside a div", "Only the first p in a div", "All div elements"],
        answer: 1,
        explanation: "This is a descendant selector. It selects all <p> elements that are nested inside <div> elements."
      },
      {
        q: "What is the output of:<pre>let x;\nconsole.log(x);</pre>",
        options: ["null", "0", "undefined", "Error"],
        answer: 2,
        explanation: "A declared variable without a value is undefined. This is the Undefined type in JavaScript."
      },
      {
        q: "What does <code>element.setAttribute('class', 'active')</code> do?",
        options: ["Creates a new element", "Sets or overwrites the class attribute to 'active'", "Removes the class", "Gets the class value"],
        answer: 1,
        explanation: "setAttribute sets the class attribute to 'active'. If class already exists, it overwrites; otherwise adds it."
      },
      {
        q: "What is the output of:<pre>const obj = {name: 'John'};\nobj.name = 'Jane';\nconsole.log(obj.name);</pre>",
        options: ["John", "Jane", "Error", "undefined"],
        answer: 1,
        explanation: "const prevents reassignment of the variable, but object properties CAN be modified. obj.name becomes 'Jane'."
      },
      {
        q: "What does this HTML/JS do?<pre>&lt;button onclick=\"alert('Hello')\"&gt;Click&lt;/button&gt;</pre>",
        options: ["Logs Hello to console", "Shows an alert box with 'Hello' when clicked", "Changes the button text", "Redirects to a new page"],
        answer: 1,
        explanation: "onclick is an inline event handler. When the button is clicked, alert('Hello') displays an alert dialog box."
      },
      {
        q: "What is the output of:<pre>let arr = [1,2,3];\narr.pop();\nconsole.log(arr);</pre>",
        options: ["[1,2,3]", "[1,2]", "[2,3]", "[1,3]"],
        answer: 1,
        explanation: "pop() removes the last element from an array. Array becomes [1,2]."
      },
      {
        q: "What is the output of:<pre>let i = 0;\ndo {\n  i++;\n} while(i < 3);\nconsole.log(i);</pre>",
        options: ["0", "2", "3", "4"],
        answer: 2,
        explanation: "do...while executes then checks: i becomes 1,2,3. When i=3, condition i<3 is false, loop stops. i is 3."
      },
      {
        q: "What does <code>document.getElementById('demo').innerHTML = 'Hello';</code> do?",
        options: ["Creates an element with id demo", "Sets the HTML content of element with id demo to Hello", "Alerts Hello", "Console logs Hello"],
        answer: 1,
        explanation: "getElementById finds the element, innerHTML sets its HTML content to 'Hello'."
      },
      {
        q: "What is the output of:<pre>function greet(name = 'World') {\n  return 'Hello ' + name;\n}\nconsole.log(greet());</pre>",
        options: ["Hello", "Hello World", "Hello undefined", "Error"],
        answer: 1,
        explanation: "Default parameter 'World' is used when no argument is passed. Returns 'Hello World'."
      },
      {
        q: "Which CSS rule has higher specificity?<pre>#header { color: red; }\n.header { color: blue; }</pre>",
        options: [".header (class)", "#header (ID)", "Both equal", "Depends on order"],
        answer: 1,
        explanation: "ID selectors (#) always have higher specificity than class selectors (.). The text color will be red."
      },
      {
        q: "What is the output of:<pre>console.log(Boolean(''));\nconsole.log(Boolean('hello'));</pre>",
        options: ["true, true", "false, false", "false, true", "true, false"],
        answer: 2,
        explanation: "Empty string is falsy (false). Non-empty string is truthy (true)."
      },
      {
        q: "What is the output of:<pre>let a = [1,2,3];\nlet b = a;\nb.push(4);\nconsole.log(a.length);</pre>",
        options: ["3", "4", "undefined", "Error"],
        answer: 1,
        explanation: "Arrays are reference types. b = a means both variables point to the same array. Pushing to b also changes a. Length is 4."
      },
      {
        q: "What is wrong with this code?<pre>const PI;\nPI = 3.14;</pre>",
        options: ["Nothing wrong", "const must be initialized when declared", "PI is a reserved word", "const can't hold numbers"],
        answer: 1,
        explanation: "An initializer for a constant is required. You must specify its value in the same statement in which it's declared."
      },
      {
        q: "What does this code return?<pre>function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 4));</pre>",
        options: ["34", "7", "undefined", "NaN"],
        answer: 1,
        explanation: "Both arguments are numbers, so + performs addition. 3 + 4 = 7."
      },
      {
        q: "What is the output of:<pre>let x = 5;\nif(x > 3) {\n  let x = 10;\n}\nconsole.log(x);</pre>",
        options: ["5", "10", "undefined", "Error"],
        answer: 0,
        explanation: "let is block-scoped. The x=10 inside the if block is a separate variable. Outside the block, x is still 5."
      },
      {
        q: "What does <code>querySelectorAll('li')</code> return if there are 5 list items?",
        options: ["The first li only", "A NodeList with 5 elements", "An array with 5 elements", "5"],
        answer: 1,
        explanation: "querySelectorAll returns a NodeList (non-live) containing all matching elements - in this case 5 li elements."
      },
      {
        q: "What is the output of:<pre>let text = 'Hello';\nconsole.log(text.length);</pre>",
        options: ["4", "5", "6", "undefined"],
        answer: 1,
        explanation: "'Hello' has 5 characters, so text.length returns 5."
      },
      {
        q: "What is the output of:<pre>switch(2) {\n  case 1: console.log('A'); break;\n  case 2: console.log('B'); break;\n  case 3: console.log('C'); break;\n}</pre>",
        options: ["A", "B", "C", "ABC"],
        answer: 1,
        explanation: "switch(2) matches case 2, so 'B' is logged. The break prevents fall-through to other cases."
      },
      {
        q: "What happens without break in a switch case?",
        options: ["Only matched case runs", "All cases after the match also execute (fall-through)", "An error occurs", "The switch exits"],
        answer: 1,
        explanation: "Without break, execution 'falls through' to subsequent cases, running their code too."
      },
      {
        q: "What is the output of:<pre>let nums = [10, 20, 30];\nnums.unshift(5);\nconsole.log(nums[0]);</pre>",
        options: ["10", "5", "20", "30"],
        answer: 1,
        explanation: "unshift() adds element(s) to the beginning of the array. After unshift(5), nums becomes [5,10,20,30]. nums[0] is 5."
      },
      {
        q: "What does <code>element.style.display = 'none'</code> do?",
        options: ["Shows the element", "Hides the element", "Deletes the element", "Makes it transparent"],
        answer: 1,
        explanation: "Setting display to 'none' hides the element - it will not be visible and takes no space in the layout."
      },
      {
        q: "What is the output of:<pre>console.log('5' - 3);</pre>",
        options: ["53", "2", "\"53\"", "NaN"],
        answer: 1,
        explanation: "The - operator converts string '5' to number 5. So 5 - 3 = 2."
      },
      {
        q: "What does this return?<pre>document.querySelectorAll('.item').length</pre> (if there are 4 elements with class item)",
        options: ["0", "4", "undefined", "Error"],
        answer: 1,
        explanation: "querySelectorAll('.item') returns a NodeList of all elements with class 'item'. .length returns the count: 4."
      }
    ]
  },

  // ==================== MIXED MCQs ====================
  mixedMcq: {
    title: "Mixed MCQ Pack",
    questions: [
      {
        q: "Which of the following is NOT a web browser?",
        options: ["Chrome", "Apache", "Firefox", "Edge"],
        answer: 1,
        explanation: "Apache is a web SERVER, not a browser. Chrome, Firefox, and Edge are web browsers (clients)."
      },
      {
        q: "In the client-server model, the server:",
        options: ["Initiates requests", "Only sends responses", "Both sends and initiates", "Has no role"],
        answer: 1,
        explanation: "In the client-server model, the server only sends responses. The client always initiates the conversation."
      },
      {
        q: "What does the <code>&lt;link rel='stylesheet' href='style.css'&gt;</code> tag do?",
        options: ["Adds JavaScript", "Links an external CSS file", "Creates a hyperlink", "Links to another HTML page"],
        answer: 1,
        explanation: "The <link> tag with rel='stylesheet' links an external CSS file to the HTML document."
      },
      {
        q: "Which JavaScript method shows a dialog with OK/Cancel buttons?",
        options: ["alert()", "confirm()", "prompt()", "dialog()"],
        answer: 1,
        explanation: "confirm() shows a dialog with OK and Cancel buttons. alert() only has OK. prompt() has an input field."
      },
      {
        q: "What does <code>parseInt('42px')</code> return?",
        options: ["NaN", "42", "0", "Error"],
        answer: 1,
        explanation: "parseInt parses from left and returns the number until a non-numeric character. '42px' returns 42."
      },
      {
        q: "Which layer does TCP belong to?",
        options: ["Application Layer", "Transport Layer", "Network Layer", "Physical Layer"],
        answer: 1,
        explanation: "TCP operates at the Transport Layer, along with UDP and WebSocket."
      },
      {
        q: "What is the correct HTML for inserting JavaScript?",
        options: ["<js>", "<javascript>", "<script>", "<scripting>"],
        answer: 2,
        explanation: "The <script> tag is used to insert JavaScript code into an HTML document."
      },
      {
        q: "What is the difference between innerHTML and innerText?",
        options: ["No difference", "innerHTML includes HTML tags, innerText shows only visible text", "innerText includes HTML tags", "innerHTML is faster"],
        answer: 1,
        explanation: "innerHTML gets/sets content including HTML tags. innerText only gets/sets the visible text content."
      },
      {
        q: "How do you declare a JavaScript variable that cannot be reassigned?",
        options: ["var x = 5", "let x = 5", "const x = 5", "final x = 5"],
        answer: 2,
        explanation: "const declares a variable that cannot be reassigned. var and let allow reassignment."
      },
      {
        q: "Which CSS property is used to change the background color?",
        options: ["color", "bg-color", "background-color", "bgcolor"],
        answer: 2,
        explanation: "background-color is the CSS property to change the background color of an element."
      },
      {
        q: "What does DNS translate?",
        options: ["IP to domain names", "Domain names to IP addresses", "HTML to CSS", "JavaScript to binary"],
        answer: 1,
        explanation: "DNS (Domain Name System) translates human-readable domain names to machine-readable IP addresses."
      },
      {
        q: "Which is the correct way to write a JavaScript array?",
        options: ["var arr = (1,2,3)", "var arr = [1,2,3]", "var arr = 1,2,3", "var arr = {1:2:3}"],
        answer: 1,
        explanation: "Arrays in JavaScript are created using square brackets: [1, 2, 3]."
      },
      {
        q: "What does <code>document.write()</code> do?",
        options: ["Writes to the console", "Writes to the server", "Writes content to the HTML document", "Writes to a file"],
        answer: 2,
        explanation: "document.write() writes information directly into the HTML document."
      },
      {
        q: "Which network type is typically owned by a single organization?",
        options: ["WAN", "MAN", "LAN", "Internet"],
        answer: 2,
        explanation: "LANs are usually privately owned, managed, and maintained by a single person or organization."
      },
      {
        q: "What does the <code>===</code> operator check?",
        options: ["Value only", "Type only", "Both value and type", "Neither"],
        answer: 2,
        explanation: "=== is the strict equality operator that checks BOTH value AND type."
      },
      {
        q: "What is the purpose of the <code>onclick</code> attribute?",
        options: ["Styling", "Running JavaScript when element is clicked", "Creating a link", "Adding an image"],
        answer: 1,
        explanation: "onclick is an event handler that executes JavaScript code when the element is clicked."
      },
      {
        q: "Which tag defines the head section of an HTML document?",
        options: ["<header>", "<heading>", "<head>", "<top>"],
        answer: 2,
        explanation: "The <head> tag defines the head section containing meta information, title, links to stylesheets, etc."
      },
      {
        q: "What is the difference between let and var?",
        options: ["No difference", "let is block-scoped, var is function-scoped", "var is block-scoped, let is function-scoped", "let is faster"],
        answer: 1,
        explanation: "let is block-scoped (limited to the block), while var is function-scoped (available throughout the function)."
      },
      {
        q: "Which HTTP method is used to request data from a server?",
        options: ["POST", "GET", "PUT", "DELETE"],
        answer: 1,
        explanation: "GET is used to request data from a server. POST is used to send data to the server."
      },
      {
        q: "What does CSS <code>display: none</code> do to an element?",
        options: ["Makes it transparent", "Hides it and removes it from layout", "Only hides it visually", "Disables it"],
        answer: 1,
        explanation: "display: none completely hides the element and removes it from the document layout flow."
      },
      {
        q: "What method adds an element to the beginning of an array?",
        options: ["push()", "unshift()", "prepend()", "addFirst()"],
        answer: 1,
        explanation: "unshift() adds elements to the beginning of an array. push() adds to the end."
      },
      {
        q: "What does <code>element.removeAttribute('class')</code> do?",
        options: ["Removes the element", "Removes the class attribute", "Removes all attributes", "Hides the element"],
        answer: 1,
        explanation: "removeAttribute('class') deletes the class attribute from the element."
      },
      {
        q: "Which property of the DOM gives the number of child nodes?",
        options: ["length", "childNodes.length", "size", "count"],
        answer: 1,
        explanation: "childNodes.length gives the number of child nodes of an element."
      },
      {
        q: "What is the correct syntax for an external JavaScript file?",
        options: ["<script href='app.js'>", "<script name='app.js'>", "<script src='app.js'>", "<js src='app.js'>"],
        answer: 2,
        explanation: "The correct syntax is <script src='app.js'></script> using the src attribute."
      },
      {
        q: "What is event propagation?",
        options: ["Creating events", "How events travel through the DOM tree", "Removing events", "Event timing"],
        answer: 1,
        explanation: "Event propagation is how events travel through the DOM tree - either bubbling (inner to outer) or capturing (outer to inner)."
      },
      {
        q: "Which CSS property sets the font family?",
        options: ["font-style", "text-font", "font-family", "font-type"],
        answer: 2,
        explanation: "font-family is the CSS property used to set the font for text."
      },
      {
        q: "What does <code>NaN</code> stand for in JavaScript?",
        options: ["Not a Null", "Not a Number", "Numeric and Null", "New Assigned Number"],
        answer: 1,
        explanation: "NaN stands for Not a Number. It is returned when a mathematical operation fails."
      },
      {
        q: "Which method converts a string to an integer?",
        options: ["parseInt()", "parseFloat()", "Number()", "toInt()"],
        answer: 0,
        explanation: "parseInt() converts a string to an integer. parseFloat() converts to a floating-point number."
      },
      {
        q: "What is the scope of a variable declared with let inside an if block?",
        options: ["Global", "Function", "Block (only inside the if)", "Module"],
        answer: 2,
        explanation: "let is block-scoped, so a variable declared with let inside an if block is only available within that block."
      },
      {
        q: "Which protocol ensures secure web communication?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        answer: 2,
        explanation: "HTTPS (HTTP Secure) ensures secure communication through SSL/TLS encryption."
      },
      {
        q: "What does <code>console.log()</code> do?",
        options: ["Displays a dialog", "Outputs to browser console", "Writes to the page", "Sends data to server"],
        answer: 1,
        explanation: "console.log() outputs information to the browser's developer console, useful for debugging."
      },
      {
        q: "How do you stop a for loop early?",
        options: ["return", "break", "continue", "exit"],
        answer: 1,
        explanation: "break exits the loop entirely. continue skips to the next iteration. return exits the function."
      },
      {
        q: "Which is NOT a JavaScript data type?",
        options: ["String", "Number", "Float", "Boolean"],
        answer: 2,
        explanation: "Float is not a separate JavaScript data type. JavaScript only has Number (which covers both integers and floats)."
      },
      {
        q: "What does the <code>style</code> attribute in HTML do?",
        options: ["Adds a script", "Applies inline CSS", "Creates a class", "Links a file"],
        answer: 1,
        explanation: "The style attribute applies inline CSS directly to an HTML element."
      },
      {
        q: "What does <code>element.hasAttribute('id')</code> return?",
        options: ["The id value", "true if element has an id, false otherwise", "The element", "undefined"],
        answer: 1,
        explanation: "hasAttribute returns true if the element has the specified attribute, false otherwise."
      }
    ]
  },

  // ==================== GUESSING SET 1 ====================
  guess1: {
    title: "Guessing Set 1 - Web Fundamentals",
    questions: [
      {
        q: "If someone says 'the internet IS the web', they are:",
        options: ["Correct", "Incorrect - the web runs ON the internet", "Partially correct", "It depends on context"],
        answer: 1,
        explanation: "The internet is the global network of computers. The web is just one SERVICE running on the internet, alongside FTP, email, etc."
      },
      {
        q: "A website that uses http:// instead of https:// is:",
        options: ["More modern", "Not encrypted - data can be intercepted", "Faster", "More reliable"],
        answer: 1,
        explanation: "HTTP has no encryption. HTTPS uses SSL/TLS to prevent eavesdropping. Always prefer https://."
      },
      {
        q: "If you're given port 443, what service is likely running?",
        options: ["FTP", "SMTP", "HTTPS", "HTTP"],
        answer: 2,
        explanation: "Port 443 is the default port for HTTPS. Port 80 is HTTP, 21 is FTP, 25 is SMTP."
      },
      {
        q: "You see <code>var x = 5</code> inside a function. Where is x available?",
        options: ["Only inside the function (function-scoped)", "Only in the current block", "Everywhere globally", "Only in the current line"],
        answer: 0,
        explanation: "var is function-scoped. It's available throughout the entire function in which it's declared."
      },
      {
        q: "A developer uses <code>const arr = []; arr.push(1);</code>. Does this work?",
        options: ["No, const can't be modified", "Yes, const prevents reassignment not modification", "Only in strict mode", "It throws a warning"],
        answer: 1,
        explanation: "const prevents reassignment of the variable, but array methods like push() that modify contents still work."
      },
      {
        q: "If a CSS rule uses <code>.header</code>, it selects by:",
        options: ["ID", "Class", "Tag name", "Attribute"],
        answer: 1,
        explanation: "A dot (.) in CSS is a class selector. Hash (#) is ID selector."
      },
      {
        q: "You need emails to sync across your phone and laptop. Which protocol?",
        options: ["POP3", "IMAP", "SMTP", "FTP"],
        answer: 1,
        explanation: "IMAP syncs emails across multiple devices. POP3 downloads emails to one device locally."
      },
      {
        q: "A school network connecting all computers in one building is a:",
        options: ["WAN", "MAN", "LAN", "VPN"],
        answer: 2,
        explanation: "A network within a limited area like a school, home, or building is a LAN (Local Area Network)."
      },
      {
        q: "If <code>querySelector('.btn')</code> finds 5 buttons, how many does it return?",
        options: ["5", "0", "1 (the first match)", "All 5 as an array"],
        answer: 2,
        explanation: "querySelector returns only the FIRST matching element. Use querySelectorAll to get all matches."
      },
      {
        q: "Event bubbling means events travel:",
        options: ["From outer elements to inner", "From inner elements to outer", "Randomly", "Only horizontally"],
        answer: 1,
        explanation: "Event bubbling: events propagate from the innermost element outward to parent elements."
      },
      {
        q: "Guess: What does <code>+'5'</code> evaluate to in JavaScript?",
        options: ["'5' (string)", "5 (number)", "NaN", "Error"],
        answer: 1,
        explanation: "The unary + operator converts a string to a number. +'5' equals the number 5."
      },
      {
        q: "Can you add the same click event listener twice to one button?",
        options: ["No, it overwrites", "Yes, addEventListener allows identical handlers", "Only with different functions", "Only with removeEventListener first"],
        answer: 1,
        explanation: "addEventListener allows adding many handlers to one element, including more than one identical event handler."
      },
      {
        q: "A network connecting offices in Colombo, Kandy, and Galle is a:",
        options: ["LAN", "MAN", "WAN", "PAN"],
        answer: 2,
        explanation: "A network spanning multiple cities across a country is a WAN (Wide Area Network)."
      },
      {
        q: "Guess: What does <code>[] == false</code> return?",
        options: ["true", "false", "Error", "undefined"],
        answer: 0,
        explanation: "An empty array is coerced to an empty string, then to 0. false is also 0. So [] == false is true."
      },
      {
        q: "If you see <code>element.style.backgroundColor</code>, the CSS equivalent is:",
        options: ["backgroundcolor", "background-color", "backgroundColor", "bg-color"],
        answer: 1,
        explanation: "JavaScript uses camelCase (backgroundColor), but the CSS property is hyphenated (background-color)."
      },
      {
        q: "Guess: What happens if you call <code>const x;</code>?",
        options: ["x becomes undefined", "x becomes null", "SyntaxError - const must be initialized", "x becomes 0"],
        answer: 2,
        explanation: "An initializer for a constant is required. You MUST specify its value in the same statement."
      },
      {
        q: "Which loads first in a browser: HTML structure or external CSS?",
        options: ["CSS always first", "HTML parses first, then CSS is fetched and applied", "They load simultaneously", "JavaScript first"],
        answer: 1,
        explanation: "The browser first parses the HTML, encounters the <link> tag, then fetches and applies the CSS."
      },
      {
        q: "If getElementsByClassName returns a live collection, what happens when you add a new element with that class?",
        options: ["Nothing changes", "The collection automatically includes it", "You must refresh manually", "An error occurs"],
        answer: 1,
        explanation: "A live collection automatically updates when the DOM changes. The new element appears in the collection instantly."
      },
      {
        q: "Guess: What is <code>typeof NaN</code>?",
        options: ["'NaN'", "'undefined'", "'number'", "'null'"],
        answer: 2,
        explanation: "Surprisingly, typeof NaN returns 'number'. NaN is technically a numeric value that represents 'not a number'."
      },
      {
        q: "The Internet was created before the World Wide Web. True or false?",
        options: ["True - Internet existed before the Web", "False - Web came first", "They were created at the same time", "Neither existed before 2000"],
        answer: 0,
        explanation: "The Internet (ARPANET) started in the late 1960s. The Web was invented in 1989 by Tim Berners-Lee."
      },
      {
        q: "If indexOf() returns -1, it means:",
        options: ["The element is first", "The element was found", "The element was NOT found", "An error occurred"],
        answer: 2,
        explanation: "indexOf() returns -1 when the element is not found in the array or string."
      },
      {
        q: "Guess: What does <code>'hello'.toUpperCase()</code> return?",
        options: ["'hello'", "'Hello'", "'HELLO'", "Error"],
        answer: 2,
        explanation: "toUpperCase() converts the entire string to uppercase. 'hello' becomes 'HELLO'."
      },
      {
        q: "If CSS has <code>!important</code>, it:",
        options: ["Is ignored", "Overrides all other declarations for that property", "Only works inline", "Adds a comment"],
        answer: 1,
        explanation: "!important overrides all other CSS declarations for that property, regardless of specificity."
      },
      {
        q: "Guess: What type is <code>null</code> according to typeof?",
        options: ["'null'", "'object'", "'undefined'", "'boolean'"],
        answer: 1,
        explanation: "typeof null returns 'object'. This is a long-standing JavaScript bug that has been kept for backwards compatibility."
      },
      {
        q: "A do...while loop will always execute at least:",
        options: ["Zero times", "One time", "Two times", "Three times"],
        answer: 1,
        explanation: "A do...while loop always executes at least once because the condition is checked AFTER the block runs."
      },
      {
        q: "If you want to upload a file to a server, which protocol would you use?",
        options: ["HTTP", "FTP", "SMTP", "DNS"],
        answer: 1,
        explanation: "FTP (File Transfer Protocol) is specifically designed for uploading and downloading files to/from servers."
      },
      {
        q: "Guess: <code>'2' + 2 + 2</code> results in:",
        options: ["6", "222", "'222'", "24"],
        answer: 2,
        explanation: "'2' + 2 = '22' (string concat), then '22' + 2 = '222' (string concat again). Left-to-right evaluation with string."
      },
      {
        q: "Which has higher CSS specificity: inline style or ID selector?",
        options: ["ID selector", "Inline style", "They're equal", "Class selector"],
        answer: 1,
        explanation: "Inline styles have the highest specificity (1000), followed by ID (100), class (10), element (1)."
      },
      {
        q: "If <code>querySelectorAll</code> returns a non-live list, what happens when DOM changes?",
        options: ["The list updates", "The list stays the same", "The list becomes null", "An error occurs"],
        answer: 1,
        explanation: "querySelectorAll returns a non-live (static) list. Any DOM changes do NOT modify the original node list."
      },
      {
        q: "Guess: What does <code>0 == false</code> return?",
        options: ["true", "false", "Error", "undefined"],
        answer: 0,
        explanation: "With ==, false is coerced to 0. So 0 == 0 is true. Use === to avoid type coercion."
      },
      {
        q: "The inventor of WWW worked at:",
        options: ["Google", "Microsoft", "CERN", "MIT"],
        answer: 2,
        explanation: "Tim Berners-Lee invented the World Wide Web while working at CERN (European Organization for Nuclear Research)."
      },
      {
        q: "Guess: <code>2 + 2 + '2'</code> results in:",
        options: ["6", "222", "'42'", "24"],
        answer: 2,
        explanation: "2 + 2 = 4 (number addition), then 4 + '2' = '42' (string concatenation). Left-to-right evaluation."
      },
      {
        q: "Which is faster: LAN or WAN connections?",
        options: ["WAN", "LAN", "Same speed", "Depends on browser"],
        answer: 1,
        explanation: "LANs are faster (100 Mbps to 10 Gbps) because of short range. WANs are slower due to distance."
      },
      {
        q: "Guess: What does <code>!!0</code> evaluate to?",
        options: ["true", "false", "0", "NaN"],
        answer: 1,
        explanation: "!0 = true (0 is falsy), then !true = false. Double negation !! converts to boolean. 0 is falsy, so !!0 is false."
      },
      {
        q: "To prevent fall-through in a switch statement, you need:",
        options: ["continue", "break", "return", "stop"],
        answer: 1,
        explanation: "The break statement prevents fall-through in switch cases. Without it, execution continues to the next case."
      }
    ]
  },

  // ==================== GUESSING SET 2 ====================
  guess2: {
    title: "Guessing Set 2 - Tricky Concepts",
    questions: [
      {
        q: "Guess: <code>typeof undefined === typeof null</code> returns:",
        options: ["true", "false", "Error", "undefined"],
        answer: 1,
        explanation: "typeof undefined is 'undefined', typeof null is 'object'. They are NOT equal, so false."
      },
      {
        q: "Can an external CSS file contain HTML tags?",
        options: ["Yes, always", "No, only CSS rules", "Only <style> tags", "Only <link> tags"],
        answer: 1,
        explanation: "An external CSS file does NOT contain any HTML tags (no <style> tag either). Only CSS rules."
      },
      {
        q: "Guess: What does <code>[1,2,3].reverse()</code> return?",
        options: ["[1,2,3]", "[3,2,1]", "undefined", "[3,1,2]"],
        answer: 1,
        explanation: "reverse() reverses the array in place and returns [3,2,1]."
      },
      {
        q: "If addEventListener's useCapture is false, events use:",
        options: ["Event capturing", "Event bubbling", "No propagation", "Both"],
        answer: 1,
        explanation: "useCapture=false (default) means event bubbling - events propagate from inner to outer elements."
      },
      {
        q: "Guess: <code>'hello' === new String('hello')</code> returns:",
        options: ["true", "false", "Error", "undefined"],
        answer: 1,
        explanation: "'hello' is a primitive string, new String('hello') is an object. === checks type too, so false."
      },
      {
        q: "Which CSS declaration takes highest priority?",
        options: ["External stylesheet", "Embedded stylesheet", "Inline style", "Browser default"],
        answer: 2,
        explanation: "Priority order: Inline style > Embedded > External > Browser default. (Except !important overrides all.)"
      },
      {
        q: "Guess: What happens with <code>let x = 1; let x = 2;</code>?",
        options: ["x becomes 2", "x stays 1", "SyntaxError - can't redeclare with let", "undefined"],
        answer: 2,
        explanation: "let does not allow redeclaration in the same scope. This throws a SyntaxError."
      },
      {
        q: "Can <code>var</code> variables be redeclared without error?",
        options: ["No, throws error", "Yes, even in strict mode", "Only in non-strict mode", "Only once"],
        answer: 1,
        explanation: "Duplicate variable declarations using var will not trigger an error, even in strict mode."
      },
      {
        q: "Guess: <code>[10, 9, 8].sort()</code> returns:",
        options: ["[8, 9, 10]", "[10, 9, 8]", "[10, 8, 9]", "Error"],
        answer: 2,
        explanation: "sort() without a compare function sorts as strings. '10' < '8' (because '1' < '8'), so [10, 8, 9]."
      },
      {
        q: "Tim Berners-Lee invented the Web for which purpose?",
        options: ["Shopping", "Sharing research documents between institutions", "Gaming", "Social media"],
        answer: 1,
        explanation: "Tim Berners-Lee created the Web while at CERN to enable sharing of research documents between institutions."
      },
      {
        q: "Guess: What is <code>1 + null</code>?",
        options: ["1", "'1null'", "null", "NaN"],
        answer: 0,
        explanation: "null is coerced to 0 in numeric context. So 1 + 0 = 1."
      },
      {
        q: "What happens if you try to access <code>arr[-1]</code> in JavaScript?",
        options: ["Returns last element", "Returns undefined", "Returns first element", "Error"],
        answer: 1,
        explanation: "JavaScript arrays don't support negative indexing like Python. arr[-1] returns undefined."
      },
      {
        q: "Guess: <code>0.1 + 0.2 === 0.3</code> returns:",
        options: ["true", "false", "Error", "undefined"],
        answer: 1,
        explanation: "Due to floating-point precision, 0.1 + 0.2 = 0.30000000000000004, not exactly 0.3. So false."
      },
      {
        q: "If both inline and embedded CSS set the same element's color, which wins?",
        options: ["Embedded", "Inline (higher specificity)", "Whichever was written last", "Neither"],
        answer: 1,
        explanation: "Inline styles have higher specificity (1000) than embedded styles, so inline wins."
      },
      {
        q: "Guess: <code>Boolean([])</code> returns:",
        options: ["true", "false", "Error", "null"],
        answer: 0,
        explanation: "An empty array [] is truthy in JavaScript. Only '', 0, null, undefined, NaN, false are falsy."
      },
      {
        q: "What does the HTTP status code 404 mean?",
        options: ["Success", "Server Error", "Not Found", "Redirect"],
        answer: 2,
        explanation: "404 means 'Not Found' - the requested resource does not exist on the server."
      },
      {
        q: "Guess: <code>typeof function(){}</code> returns:",
        options: ["'function'", "'object'", "'undefined'", "'code'"],
        answer: 0,
        explanation: "typeof for a function returns 'function', even though functions are technically objects in JavaScript."
      },
      {
        q: "Why does JavaScript use camelCase for DOM methods?",
        options: ["It's slower", "CSS uses hyphens which aren't valid JS identifiers", "It's a bug", "No specific reason"],
        answer: 1,
        explanation: "CSS uses hyphens (background-color) which aren't valid in JavaScript identifiers, so DOM uses camelCase (backgroundColor)."
      },
      {
        q: "Guess: What is <code>'cat' + 3 + 4</code>?",
        options: ["'cat7'", "'cat34'", "NaN", "Error"],
        answer: 1,
        explanation: "'cat' + 3 = 'cat3' (string concat), then 'cat3' + 4 = 'cat34'. Left-to-right with a string."
      },
      {
        q: "What does 'stateless' mean for HTTP?",
        options: ["It stores all states", "Each request is independent - no memory of previous requests", "It can't process requests", "It only works once"],
        answer: 1,
        explanation: "Stateless means HTTP doesn't retain information between requests. Each request is treated independently."
      },
      {
        q: "Guess: <code>1 + undefined</code> results in:",
        options: ["1", "NaN", "undefined", "Error"],
        answer: 1,
        explanation: "undefined cannot be converted to a number properly. 1 + undefined results in NaN."
      },
      {
        q: "If you type google.com in your browser, which protocol is most likely used?",
        options: ["FTP", "SMTP", "HTTPS", "Telnet"],
        answer: 2,
        explanation: "Modern browsers default to HTTPS for major websites. Google.com uses HTTPS for encrypted communication."
      },
      {
        q: "Guess: <code>'' == 0</code> returns:",
        options: ["true", "false", "Error", "undefined"],
        answer: 0,
        explanation: "An empty string '' is coerced to 0. So 0 == 0 is true. This is why === is preferred."
      },
      {
        q: "What is the parent node of <head> and <body> in the DOM tree?",
        options: ["document", "<html>", "<div>", "<main>"],
        answer: 1,
        explanation: "The <html> element is the root of the DOM tree and parent of both <head> and <body>."
      },
      {
        q: "Guess: Can you use forEach() on a querySelectorAll result?",
        options: ["No, it's not an array", "Yes, NodeList supports forEach", "Only with Array.from()", "Only in ES6+"],
        answer: 1,
        explanation: "Modern browsers support forEach() directly on NodeList objects returned by querySelectorAll."
      },
      {
        q: "Why protocols matter for the web?",
        options: ["They make websites look better", "They enable interoperability, reliability & security", "They add animations", "They create databases"],
        answer: 1,
        explanation: "Protocols enable interoperability (different systems working together), ensure reliability, and provide security."
      },
      {
        q: "Guess: <code>Math.max()</code> without arguments returns:",
        options: ["0", "Infinity", "-Infinity", "NaN"],
        answer: 2,
        explanation: "Math.max() with no arguments returns -Infinity. Math.min() returns Infinity. This is by design."
      },
      {
        q: "What happens when you assign innerHTML to an empty string?",
        options: ["Nothing", "The element content is cleared", "The element is removed", "Error"],
        answer: 1,
        explanation: "Setting innerHTML = '' clears all the content inside the element."
      },
      {
        q: "Guess: <code>true + true</code> returns:",
        options: ["true", "2", "'truetrue'", "Error"],
        answer: 1,
        explanation: "true is coerced to 1 in numeric context. So 1 + 1 = 2."
      },
      {
        q: "Which network size uses fiber optics for high-bandwidth connectivity?",
        options: ["PAN", "LAN", "MAN", "VPN"],
        answer: 2,
        explanation: "MAN (Metropolitan Area Network) often uses fiber optics and high-bandwidth infrastructure connecting across a city."
      },
      {
        q: "Guess: What does <code>[...'hello']</code> create?",
        options: ["['hello']", "['h','e','l','l','o']", "Error", "'hello'"],
        answer: 1,
        explanation: "The spread operator ... splits the string into individual characters: ['h','e','l','l','o']."
      },
      {
        q: "Internal style sheets override external ones when:",
        options: ["Never", "Always", "When they come after the external link", "When they have lower specificity"],
        answer: 2,
        explanation: "In CSS, when specificity is equal, the later declaration wins. If internal styles come after the external link, they override."
      },
      {
        q: "If FTP uses port 21 and HTTP uses port 80, what uses port 25?",
        options: ["HTTPS", "DNS", "SMTP", "Telnet"],
        answer: 2,
        explanation: "Port 25 is used by SMTP (Simple Mail Transfer Protocol) for sending emails."
      },
      {
        q: "Guess: <code>typeof typeof 1</code> returns:",
        options: ["'number'", "'string'", "1", "undefined"],
        answer: 1,
        explanation: "typeof 1 = 'number' (a string), then typeof 'number' = 'string'. So typeof typeof 1 is 'string'."
      },
      {
        q: "removeEventListener requires passing the same function reference. What does this mean?",
        options: ["Any function will work", "You must pass the exact same function object used in addEventListener", "You can use any name", "It removes all listeners"],
        answer: 1,
        explanation: "removeEventListener only works if you pass the exact same function reference that was used in addEventListener."
      }
    ]
  },

  // ==================== GUESSING SET 3 ====================
  guess3: {
    title: "Guessing Set 3 - Advanced Challenges",
    questions: [
      {
        q: "Guess: What does <code>[] + []</code> return?",
        options: ["[]", "0", "'' (empty string)", "undefined"],
        answer: 2,
        explanation: "Both arrays are converted to empty strings. '' + '' = '' (empty string)."
      },
      {
        q: "If a const object can have properties changed, how do you truly freeze it?",
        options: ["Use let instead", "Use Object.freeze()", "Use var", "Use strict mode"],
        answer: 1,
        explanation: "Object.freeze() prevents adding, removing, or modifying properties of an object."
      },
      {
        q: "Guess: <code>[] + {}</code> returns:",
        options: ["'[object Object]'", "{}", "0", "Error"],
        answer: 0,
        explanation: "[] converts to '', {} converts to '[object Object]'. '' + '[object Object]' = '[object Object]'."
      },
      {
        q: "Why should form validation happen client-side AND server-side?",
        options: ["Client-side is enough", "Server-side only needed", "Client-side can be bypassed, server-side is essential", "Neither is needed"],
        answer: 2,
        explanation: "Client-side validation improves UX but can be bypassed. Server-side validation is essential for security."
      },
      {
        q: "Guess: What is <code>3 > 2 > 1</code>?",
        options: ["true", "false", "Error", "undefined"],
        answer: 1,
        explanation: "3 > 2 = true. true > 1 = false (true converts to 1, and 1 > 1 is false)."
      },
      {
        q: "What does CORS stand for in web development?",
        options: ["Central Object Resource System", "Cross-Origin Resource Sharing", "Content Origin Request Service", "Client Object Rendering System"],
        answer: 1,
        explanation: "CORS stands for Cross-Origin Resource Sharing - a security mechanism for cross-domain requests."
      },
      {
        q: "Guess: <code>'b' + 'a' + + 'a' + 'a'</code> returns:",
        options: ["'baaa'", "'baNaNa'", "Error", "'ba0a'"],
        answer: 1,
        explanation: "'b' + 'a' = 'ba'. +'a' = NaN (can't convert 'a' to number). 'ba' + NaN + 'a' = 'baNaNa'."
      },
      {
        q: "What is the purpose of the <code>data-*</code> attribute in HTML?",
        options: ["Storing custom data on elements", "Creating databases", "Styling elements", "Adding scripts"],
        answer: 0,
        explanation: "data-* attributes allow storing custom data directly on HTML elements, accessible via JavaScript."
      },
      {
        q: "Guess: <code>null == undefined</code> returns:",
        options: ["true", "false", "Error", "null"],
        answer: 0,
        explanation: "null and undefined are loosely equal (==) to each other and nothing else. null == undefined is true."
      },
      {
        q: "Guess: <code>null === undefined</code> returns:",
        options: ["true", "false", "Error", "null"],
        answer: 1,
        explanation: "With strict equality ===, null and undefined are different types, so false."
      },
      {
        q: "What does viewport meta tag do in responsive design?",
        options: ["Adds CSS", "Controls layout width on mobile devices", "Adds JavaScript", "Links to a database"],
        answer: 1,
        explanation: "The viewport meta tag controls the width and scaling of content on mobile devices."
      },
      {
        q: "Guess: <code>1 < 2 < 3</code> returns:",
        options: ["true", "false", "Error", "3"],
        answer: 0,
        explanation: "1 < 2 = true. true < 3 → 1 < 3 = true. So the result is true (but for the wrong reason!)."
      },
      {
        q: "What's the difference between <code>window.onload</code> and <code>DOMContentLoaded</code>?",
        options: ["No difference", "DOMContentLoaded fires when HTML is parsed, onload waits for all resources", "onload is faster", "DOMContentLoaded is deprecated"],
        answer: 1,
        explanation: "DOMContentLoaded fires when HTML is fully parsed. window.onload waits for all resources (images, CSS) to load."
      },
      {
        q: "Guess: <code>typeof []</code> returns:",
        options: ["'array'", "'object'", "'list'", "'collection'"],
        answer: 1,
        explanation: "Arrays in JavaScript are objects. typeof [] returns 'object'. Use Array.isArray() to check for arrays."
      },
      {
        q: "What does 'semantic HTML' mean?",
        options: ["Using HTML5 tags", "Using tags that have meaning (like <nav>, <article>)", "Using CSS with HTML", "Using JavaScript"],
        answer: 1,
        explanation: "Semantic HTML uses tags that describe their content's purpose, like <nav>, <article>, <header>, <footer>."
      },
      {
        q: "Guess: <code>Number('')</code> returns:",
        options: ["NaN", "0", "undefined", "Error"],
        answer: 1,
        explanation: "Number('') converts an empty string to 0. But Number('abc') would return NaN."
      },
      {
        q: "What is the box-sizing: border-box property for?",
        options: ["Adds a box shadow", "Makes width/height include padding and border", "Removes all borders", "Centers the box"],
        answer: 1,
        explanation: "box-sizing: border-box makes the width and height include padding and border, making layout calculations easier."
      },
      {
        q: "Guess: What does <code>Array(3)</code> create?",
        options: ["[3]", "[undefined, undefined, undefined]", "An empty array of length 3", "Error"],
        answer: 2,
        explanation: "Array(3) creates an empty (sparse) array with length 3, but no actual elements. It has 3 empty slots."
      },
      {
        q: "What does 'callback function' mean?",
        options: ["A function that calls the server", "A function passed as an argument to another function", "A function that returns a value", "A recursive function"],
        answer: 1,
        explanation: "A callback is a function passed as an argument to another function, to be executed later (e.g., in event handlers)."
      },
      {
        q: "Guess: <code>!!''</code> returns:",
        options: ["true", "false", "''", "undefined"],
        answer: 1,
        explanation: "An empty string is falsy. !'' = true, then !true = false. So !!'' returns false."
      },
      {
        q: "What's the purpose of CSS media queries?",
        options: ["Adding videos", "Applying styles based on device/screen conditions", "Playing audio", "Connecting to databases"],
        answer: 1,
        explanation: "Media queries apply different CSS styles based on conditions like screen width, enabling responsive design."
      },
      {
        q: "Guess: <code>'5' > '40'</code> returns:",
        options: ["false", "true", "Error", "undefined"],
        answer: 1,
        explanation: "When comparing strings, JavaScript compares character codes. '5' (code 53) > '4' (code 52), so true."
      },
      {
        q: "What does 'graceful degradation' mean in web design?",
        options: ["Website gets slower", "Website works in modern browsers, degrades nicely in older ones", "Website breaks intentionally", "CSS animation slowing"],
        answer: 1,
        explanation: "Graceful degradation means building for modern browsers first, ensuring older browsers still get a usable experience."
      },
      {
        q: "Guess: What does <code>{} + []</code> return in the browser console?",
        options: ["'[object Object]'", "0", "NaN", "undefined"],
        answer: 1,
        explanation: "In console, {} is treated as empty block. Then +[] converts [] to 0. Result is 0. (Context-dependent!)"
      },
      {
        q: "What is the purpose of the alt attribute in <code>&lt;img&gt;</code> tags?",
        options: ["Alternative style", "Alternative text for accessibility and when image fails to load", "Alternative URL", "Adding animation"],
        answer: 1,
        explanation: "The alt attribute provides alternative text for screen readers and displays when the image can't load."
      },
      {
        q: "Guess: <code>isNaN('hello')</code> returns:",
        options: ["true", "false", "NaN", "Error"],
        answer: 0,
        explanation: "isNaN('hello') tries to convert 'hello' to a number (NaN), so it returns true."
      },
      {
        q: "What is Z-index in CSS used for?",
        options: ["Setting zoom level", "Controlling stacking order of positioned elements", "Setting z-axis rotation", "Adding z-pattern layout"],
        answer: 1,
        explanation: "Z-index controls the stacking order of positioned elements. Higher values appear on top."
      },
      {
        q: "Guess: What does <code>Math.floor(4.9)</code> return?",
        options: ["5", "4", "4.9", "NaN"],
        answer: 1,
        explanation: "Math.floor() rounds DOWN to the nearest integer. 4.9 rounds down to 4."
      },
      {
        q: "What does 'responsive design' mean?",
        options: ["Fast loading", "Website adapts to different screen sizes", "Quick server response", "Using only JavaScript"],
        answer: 1,
        explanation: "Responsive design means the website layout adapts to different screen sizes (desktop, tablet, mobile)."
      },
      {
        q: "Guess: <code>1 + '1' - 1</code> returns:",
        options: ["1", "11", "10", "'10'"],
        answer: 2,
        explanation: "1 + '1' = '11' (string concat). '11' - 1 = 10 (- forces number conversion). Result is number 10."
      },
      {
        q: "What is the difference between <code>visibility: hidden</code> and <code>display: none</code>?",
        options: ["No difference", "visibility:hidden keeps the space, display:none removes from layout", "display:none keeps space", "Both remove from layout"],
        answer: 1,
        explanation: "visibility:hidden makes element invisible but it still occupies space. display:none removes it from the layout entirely."
      },
      {
        q: "Guess: <code>Array.isArray([])</code> returns:",
        options: ["true", "false", "'array'", "undefined"],
        answer: 0,
        explanation: "Array.isArray() is the reliable way to check if something is an array. Returns true for []."
      },
      {
        q: "What is the purpose of closures in JavaScript?",
        options: ["Closing the browser", "A function retaining access to its outer scope variables", "Ending a script", "Closing a tag"],
        answer: 1,
        explanation: "A closure is a function that retains access to variables from its outer (enclosing) scope even after that scope has closed."
      },
      {
        q: "Guess: What does <code>+'abc'</code> return?",
        options: ["0", "NaN", "'abc'", "Error"],
        answer: 1,
        explanation: "The unary + tries to convert 'abc' to a number, which fails, returning NaN."
      },
      {
        q: "What does the <code>defer</code> attribute on a script tag do?",
        options: ["Deletes the script", "Downloads script during parsing, executes after DOM is ready", "Runs script immediately", "Prevents script from running"],
        answer: 1,
        explanation: "defer downloads the script in parallel with HTML parsing but only executes after the DOM is fully built."
      }
    ]
  }
};
