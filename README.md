# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

The first thing that happens is the browser checks the cache for a DNS (Domain Name System) record to find the corresponding IP (Internet Protocol) address of techtonic.com. DNS is a database that maintains the name of the website (URL) and the particular IP address it links to. Every single URL on the internet has a unique IP address assigned to it. The IP address belongs to the computer which hosts the server of the website we are requesting to access.

In order to find the DNS record, the browser checks four caches. First, it checks the browser cache, since the browser maintains a repository of DNS records for a fixed duration for websites you have previously visited. Second, if it is not found in the browser cache, the browser would make a system call to your underlying computer OS (Operating System) to fetch the record since the OS also maintains a cache of DNS records. Third, if it’s not found on your computer, the browser would communicate with the router that maintains its’ own cache of DNS records. If all steps fail, the browser would move on to the ISP (Internet Service Provider). Your ISP maintains its’ own DNS server which includes a cache of DNS records which the browser would check with the last hope of finding your requested URL.

If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server that hosts techtonic.com. The purpose of a DNS query is to search multiple DNS servers on the internet until it finds the correct IP address for the website. This type of search is called a recursive search since the search will continue repeatedly from DNS server to DNS server until it either finds the IP address we need or returns an error response saying it was unable to find it.

## From start to finish how does that data reach you to be rendered in the browser?

Once the browser receives the correct IP address it will build a connection with the server that matches the IP address to transfer information. Browsers use internet protocols to build such connections. There are a number of different internet protocols which can be used but TCP (Transmission Control Protocol) is the most common protocol used for any type of HTTP request.

Once the TCP connection is established, it is time to start transferring data. The browser will send a GET request asking for techtonic.com web page. If you’re entering credentials or submitting a form this could be a POST request. This request will also contain additional information such as browser identification, types of requests that it will accept, and connection headers asking it to keep the TCP connection alive for additional requests.

The next step if for the server to handle the request and send back a response. The server contains the code which receives the request from the browser and passes it to a request handler to read and generate a response. The request handler is a program that reads the request, its’ headers, and cookies to check what is being requested and also update the information on the server if needed.

After handling the response, the server will assemble a response in a particular format (JSON, XML, HTML). The server response contains the web page you requested as well as the status code, compression type, how to cache the page, any cookies to set, privacy information, etc.

The final step is for the browser to display the HTML content in phases. First, it will render the bare bone HTML skeleton. Then it will check the HTML tags and sends out GET requests for additional elements on the web page, such as images, CSS stylesheets, JavaScript files etc. These static files are cached by the browser so it doesn’t have to fetch them again the next time you visit the page. At the end, you’ll see techtonic.com appearing on your browser.

## What code is rendered in the browser?

HTML, CSS and JavaScript.

## What is the server-side code’s main function?

Server-side code mostly involves choosing which content is returned to the browser in response to requests. The server-side code handles tasks like validating submitted data and requests, using databases to store and retrieve data and sending the correct data to the client as required.

## What is the client-side code’s main function?

Client-side code is primarily concerned with improving the appearance and behavior of a rendered web page. This includes selecting and styling UI components, creating layouts, navigation, form validation, etc.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

One instance per asset is created.

## How many instances of the server-side code are available at any given time?

Server instances are dynamically created based on the number of clients making requests at any given point.

## What is runtime?

Runtime is the period of time when a program is running. It begins when a program is opened (or executed) and ends with the program is quit or closed.

## How many instances of the databases connected to the server application are created?

One instance per database connection.
