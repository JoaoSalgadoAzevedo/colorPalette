// lock animation
export default function lockOpen() {
    lock.innerHTML = "";
    
    setTimeout(function() {
    lock.innerHTML = "";
    }, 1000);
    
    setInterval(lockOpen, 2000);
    }
    
    // Call lockOpen function
    lockOpen();