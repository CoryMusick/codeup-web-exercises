const wait = time => {
    return new Promise((resolve) =>
    setTimeout(()=> resolve(), time)
    )
};


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 second'));



const lastCommit = username => {
    fetch('https://api.github.com/users/' + username + 'repositories', {headers: {'Authorization': '40aafe8d395152f197e3066114d9678e17b0f770'}})
        .then((data) => console.log(data.json()))
        .then((data) => fetch(data.repos_url))







};

lastCommit('corymusick');