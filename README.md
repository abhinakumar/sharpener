Q . Why do we need headers any idea?
 Ans - Headers are crucial in HTTP requests and responses. They facilitate content negotiation, 
authentication, caching, CORS handling, compression, and security. They provide metadata about the request/response, 
enabling effective communication between clients and servers, enhancing performance, and enforcing policies.

Q . What is axios?
Ans - Axios is a JavaScript library for making HTTP requests from browsers or Node.js.
It offers a user-friendly API, supports request/response interception, 
JSON data parsing, and HTTP header management, making it popular 
for API calls and data retrieval from servers.

Q . What are the common problems faced when you make network calls and what should you do to solve it.
Ans - When making network calls, common problems include timeouts, connection errors,
CORS restrictions, rate limiting, and handling error responses from the server.
To address these issues, set appropriate timeouts, implement error handling, and ensure the server
includes necessary CORS headers. Handle rate-limiting responses and consider client-side rate limiting.
Properly handle errors to provide meaningful messages to users.
Address security concerns by securely transmitting sensitive data and validating/sanitizing user input.
Use HTTPS for secure data transfer. Implement authentication and authorization mechanisms 
to protect sensitive data. Thoroughly test network calls and debug using browser tools or server 
logs to ensure smooth functioning and reliability of the application.
