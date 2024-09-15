<!-- https://vivmagarwal.notion.site/HTML-Working-with-Links-e63e4febe0774d959926c0888131380a -->

HTML - Working with Links ⚓ 

1. Basics of the Anchor Element:
<a href="<https://www.example.com/>">Visit Example</a>


2. Understanding URLs:
    - a) Absolute URL:<a href="<https://www.example.com/gallery>">Go to Gallery</a>
    - b) Relative URLs:
        -   Folder Down (Navigating deeper into the site's structure) <a href="images/pic.jpg">See the picture</a>
        - Folder Up (Going back in the site's structure): <a href="../about.html">About Us</a>

3. More Than Just Web Pages:
    -   <a href="images/sunset.jpg" download>Click to download the sunset image</a>

4. Navigating Within a Page:
    -   a) Fragments: 
        ```
            <h2 id="summary">Summary</h2>
            <a href="#summary">Jump to Summary</a>
        ```    
    -  b) Jump to Top Link:
    ```<a href="#">Back to Top</a>```

5. Difference Between Link and Hyperlink:
- All hyperlinks are links, but not all links are hyperlinks. Confused? Think of fruits. All apples are fruits, but not all fruits are apples.
- like, link is example.com but hyperlink is, "click here" and move to example.com


<h1>Live Server URL</h1>

<http://127.0.0.1:5500/path-to-your-file.html>

Let's break down this URL:
- <code>http://</code>: This is the protocol. In web URLs, you'll typically see http or https (the latter is a secure version). For local development, http is just fine.
- 127.0.0.1: This is an IP address, specifically the loopback address. 
- :5500: This is the port number
- <code>/path-to-your-file.html</code>: This is the path to the specific file you're serving. If you started the live server on an <code>index.html</code> file inside a folder called <code>mywebsite</code>, this part might look like /<code>mywebsite/index.html.</code>

So, when you access this URL in your browser, you're essentially telling it to connect to your own computer (via 127.0.0.1 or localhost), on port 5500, and retrieve the specific file mentioned in the path.
