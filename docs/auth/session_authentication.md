# Stateful/Session Authenticiaton

1. **MemoryStore:** 
  This is the default session store provided by `express-session`, which 
  stores session data in memory. As mentioned earlier, it's not 
  recommended for production use due to scalability and reliability
  concerns.
  **Limitation:**
  Sessions stored in MemoryStore will be deleted when the Express.js 
  application restarts.

2. **CookieStore:**
  In this approach, session data is stored directly in encrypted cookies on
  the client-side. While this can be convenient, it's not suitable for
  storing large amounts of data and may have security implications.
  **Limitation:**
    i. **Data Size Limitations:** 
        Cookies have a limited size (usually around 4KB per cookie), so storing large amounts of data in cookies can be impractical. Session data stored in cookies is transmitted with every HTTP request, so storing large amounts of data in cookies can significantly increase network traffic and impact performance.
    ii. **Security Risks/Cookie Tampering:** 
        Storing session data in client-side cookies, even when encrypted, poses security risks. Cookies are susceptible to interception and tampering by attackers, especially without HTTPS, leading to potential unauthorized access, data manipulation, and privacy breaches. Careful consideration of security implications is essential when choosing session storage methods.
    iii. **Privacy Concerns:** 
        Storing session data in cookies can raise privacy concerns, as the data is stored on the client's device and can potentially be accessed by other websites or third-party scripts. This can lead to tracking and profiling of users' behavior across different websites.
    iv. **Limited Server-Side Control:** 
        With client-side storage, the server has limited control over the session data. The server relies on the client to send the session data back with each request, which can lead to inconsistencies or security vulnerabilities if the client-side storage is compromised or manipulated.

1. **Using Databases:**
  `express-session` supports using databases like MongoDB, Redis, MySQL, PostgreSQL, etc., as session stores. This approach involves storing session data in a database, providing better scalability, persistence, and reliability compared to memory-based storage.

1. **Custom Session Stores:**
  You can also implement custom session stores tailored to your specific requirements. This allows you to integrate with other storage solutions or services as needed.