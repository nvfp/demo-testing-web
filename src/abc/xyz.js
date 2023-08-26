function getStatusMessage(status) {
    switch (status) {
        case "success":
            return "Operation was successful!";
        case "error":
            return "An error occurred.";
        case "pending":
            return "Operation is pending...";
        default:
            return "Unknown status.";
    }
}
var msg = getStatusMessage("success");
console.log(msg);
