// Export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
    // Validate the endpoint object
    if (
        typeof endpoint !== "object" ||
        endpoint === null ||
        !("name" in endpoint)
    ) {
        throw new TypeError("Invalid endpoint object");
    }

    // Check if the WeakMap has an entry for this endpoint
    if (!weakMap.has(endpoint)) {
        // Initialize the count for this endpoint
        weakMap.set(endpoint, 1);
    } else {
        // Increment the count for this endpoint
        const count = weakMap.get(endpoint);
        if (count >= 5) {
            throw new Error("Endpoint load is high");
        }
        weakMap.set(endpoint, count + 1);
    }
}
