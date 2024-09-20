
describe('fetchUserData and displayUserData functions', () => {
    beforeEach(() => {
        jasmine.clock().install(); 
    });

    afterEach(() => {
        jasmine.clock().uninstall(); 
    });

    it('should fetch and display user data for an existing user', async () => {
        // Arrange
        const userId = 2;
        spyOn(console, 'log'); // Spy on the console.log method to capture log messages


        const fetchDataPromise = fetchUserData(userId);
        const displayDataPromise = displayUserData(userId);

        // Simulate the passage of time
        jasmine.clock().tick(1000); // Advance time by 1 second

        // Resolve the fetchUserData Promise with user data
        await Promise.resolve(fetchDataPromise);

        // Simulate the passage of time
        jasmine.clock().tick(1000); // Advance time by another 1 second

        // Assert
        expect(console.log).toHaveBeenCalledWith(`User ID: ${userId}`);
        expect(console.log).toHaveBeenCalledWith(`User Name: Mark`);
    });

    it('should handle an error when fetching user data for a non-existing user', async () => {
        // Arrange
        const userId = 4; // User not found
        spyOn(console, 'error'); // Spy on the console.error method to capture error messages

        // Act
        const fetchDataPromise = fetchUserData(userId);
        const displayDataPromise = displayUserData(userId);

        // Simulate the passage of time
        jasmine.clock().tick(1000); // Advance time by 1 second

        // Reject the fetchUserData Promise with an error
        await Promise.reject;

        // Simulate the passage of time
        jasmine.clock().tick(1000); // Advance time by another 1 second

        // Assert
        expect(console.error).toHaveBeenCalledWith('Error: User not found');
    });
});
