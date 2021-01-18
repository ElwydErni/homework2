const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

let i = Object.keys(user);
for (let key of i){
    console.log(key + ' : ' + user[key]);
}