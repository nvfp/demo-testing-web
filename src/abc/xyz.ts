// Define a union type
type Status = "success" | "error" | "pending";

// Function that displays a message based on status
function getStatusMessage(status: Status): string {
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

// Call the function and log the result
const msg = getStatusMessage("success");
console.log(msg);
