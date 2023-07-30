class User {
    constructor(username) {
        this.username = username;
    }
}

class Facebook {
    users = [];
    friendship = {};
    
    signUp(username) {
        let user = new User(username);
        this.users.push(user);
        this.friendship[username] = [];
    }

    add(user1, user2) {
        if(this.friendship[user1].includes(user2)) return;
        
        this.friendship[user1].push(user2);
        this.friendship[user2].push(user1);
    }
}

let fb = new Facebook();
fb.signUp('shirhaan');
fb.signUp('ashok');
fb.signUp('ramesh');
fb.signUp('sahil');
fb.signUp('debasis');
fb.signUp('dev');

fb.add('shirhaan', 'dev');
fb.add('ramesh', 'ashok');
