// fetch("https://messaged.com/api/v1/embed-url");

// Get the current element
var msgEmbedNode = document.querySelector("#messaged-embed");

// Create a new element
var newNode = document.createElement("div");

var iframe = document.createElement("iframe");
var html = "<body>Foo</body>";
iframe.contentWindow.document.open();
iframe.contentWindow.document.write(html);
iframe.contentWindow.document.close();

// Replace the current node with the new node
msgEmbedNode.parentNode.replaceChild(newNode, currentNode);
