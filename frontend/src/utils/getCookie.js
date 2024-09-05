export default function getCookie(cookieName) {
    // Split the document.cookie string into individual cookies
    const cookies = document.cookie.split(';');
    
    // Loop through the cookies to find the one with the specified name
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === cookieName) {
            // Return the value of the cookie
            return decodeURIComponent(value);
        }
    }
    
    // Return null if the cookie is not found
    return null;
}