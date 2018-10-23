console.log('Before');
// getUser(1, (user)=> {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repo[0], (commits) => {
//             console.log(commits);
//         })
//     })
// });
console.log('After');

// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log('Commits', commits))
//     .catch(err => console.log('Error', err.message));

async function displayCommits() {
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(err)
    {
        console.log('Error', err.message);
    }
  
}
displayCommits();

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database....');
            resolve({id: id, gitHubUsername: 'enado95'})
        }, 2000);
    });
    
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve([{'name':'project1'},{'name':'project2'},{'name':'project3'}]);
            reject(new Error('Could not get the repos'));
        }, 2000);
    })
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
          }, 2000);
    });
    
  }