const userData = {
    1: { id: 1, name: 'John' }, 
    2: { id: 2, name: 'Mark' }, 
    3: { id: 3, name: 'Adam' },
};

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userData[userId]) {
                resolve(userData[userId]);
            } else {
                reject('User not found');
            }
        }, 1000);
    });
}

async function displayUserData(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log(`User ID: ${user.id}`);
        console.log(`User Name: ${user.name}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}









  

  