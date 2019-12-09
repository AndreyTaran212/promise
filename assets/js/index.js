'use strict';
/*
import testObject from './test.js'

console.log(testObject);

testObject[Symbol.for('id')] = 'new value';

console.log(testObject)*/
/*
class ListItem {
    constructor(value , next = null, prev = null){
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addFront(value){
        const newHead = new ListItem(value, this.head, null);

        if (this.head) {
            this.head.prev = newHead;
        }
        this.head = newHead;

        if (!this.tail){
            this.tail = newHead;
        }
        this.size++;
    }

    addEnd(value) {
        const newItem = new ListItem(value, null, this.tail);
        if (this.tail) {
            this.tail.next = newItem;
        }

        this.tail = newItem;

        if (!this.head) {
            this.head = newItem;
        }
        this.size++
    }

    addAfter(node, value){
        if (node instanceof ListItem) {
            if (this.tail === node) {
                this.addEnd(value);
                return;
            }

            const newItem = new ListItem(value, node.next, node);

            node.next = newItem;

            this.size++;

        }
    }

    insertTo(index, value) {
        if (this.size === 0 || index === (this.size -1)) {
            this.value
        }
    }



    [Symbol.iterator]() {
        let current = this.head;


        return {
            next() {
                if (current) {
                    const value = current.value;
                    current = current.next;
                    return {
                        value: value,
                        done: false,
                    }
                }else {
                    return {
                        done: true,
                    }
                }
            }
        }
    }
}
/!*
const arr = [...range];
console.log(arr);

for (let value of range){
    console.log(value);
}*!/


const list = new List();

list.addEnd('qewqr');
list.addEnd(3456);
list.addEnd(true);
list.addEnd({name:{firstName:'Test', lastName: 'qqq'}});
list.addEnd(function () {
    console.log('I`m function')

});
for(let q of list){
    console.log(q);
}
*/
/*
function myFoo(callback) {

    console.log('myFoo');
    setTimeout(callback, 0);

}

myFoo(myHandler);

setTimeout(() => {

    console.log(10);

}, 0);

console.log('qqq');
console.log('qqq');
console.log('qqq');
console.log('qqq');
console.log('qqq');
console.log('qqq');
console.log('qqq');
console.log('qqq');

function myHandler() {

    console.log('MY HANDLER');

}*/
/*
const user = {
    name: 'Name',
    surname: 'QQq',
    age: 33,
    isMale: true,

};

const  jsonUser = JSON.stringify( user );

const parsedUser = JSON.parse( jsonUser );

const users = [];

for (let i = 0; i<10; i++){

    users.push({

        name: `Name${i}`,
        surname: `QQq${i}`,
        age: 33,
        isMale: true,



    })
}

const  jsonUsers = JSON.stringify( users );

const parsedUsers = JSON.parse( jsonUsers );*/
/*const store = {
    users: null,
    isFetching: false,
    error: null,
};

const request = new XMLHttpRequest();


const button = document.getElementById('qq');

button.onclick = function() {
    request.open('GET','./users.json');
    request.send();
};

request.onloadstart = function () {
    store.isFetching = true;
};

request.onloadend = function () {
    store.isFetching = false;

    if (this.status >= 200 && this.status < 300){
        store.users = JSON.parse( this.responseText );
    }else {
        store.error = new Error(`${this.status}: ${this.statusText}`);
    }

};*/
/*


const loadUsersPromise = new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    request.onload = () => {
        resolve(JSON.parse(request.responseText))
    };
    request.onerror = () =>{
        reject( new Error(`${this.status}: ${this.statusText}`))
    };

    request.open("GET", "./users.json");
    request.send();

});

loadUsersPromise
    .then(function (users) {
        console.log(users);
    })
    .catch(function (err) {
        console.log(err);
    });



*/
/*
fetch('./users.json')
    .then(parseData)
    .then(logData)
    .catch(onLoadUsersReject);

function parseData(response) {
    return response.json();
}

function onLoadUsersReject(response) {
    console.log(response);
}

function logData(data) {
    console.log(data);
}
*/
/*function loadUser(resolve, reject) {
    const request = new XMLHttpRequest();

    let user = null;
    request.onload = function () {
        user = JSON.parse(request.responseText);
        resolve(user);
    };

    request.onerror = function () {
        reject(new Error(`${this.status}: ${this.statusText}`))
    };
    request.open('GET', './users.json');
    request.send();

}

const loadUserPromise = new Promise(loadUser);

loadUserPromise
    .then(console.log)
    .catch(console.error);*/
/*fetch('./users.json')
    .then((response) => {
        return response.json();
    })
    .then((data => {
        console.log(data);
    }))
    .catch(err => {
        console.log(err);
    });*/
/*const fetchPromise = fetch('./users.json');*/
/*const parseJsonPromise = fetchPromise
    .then(response => response.json())
    .catch(console.error);

parseJsonPromise
    .then(console.log)
    .catch(console.error);*/
/*
fetch('./user.json')
    .then(response => response.json())
    .then( appendUsersToList )
    .catch(console.error);
function appendUsersToList(users) {

}*/
/*

const promise = new Promise(function (resolve, reject) {
    resolve(4);
});

promise
    .then(onResolve)
    .catch(onReject);

function onResolve(data) {
    console.log('function onResolve');
    console.log(data);
}

function onReject(error) {
    console.log(error);
}*/
/*

const promise1 = new Promise(resolve => {
    resolve(5);
});

console.log(promise1);

const promise2 = Promise.resolve(4);

console.log(promise2);
async function getResolvedPromise(value) {
    return value;
}

const promise3 = getResolvedPromise(4);

console.log(promise3);

promise1.then(console.log);
promise2.then(console.log);
*/
/*

//async/await syntax
async function AsyncFunction() {

}
const arrowAsyncFunction = async () => {

};
*/
/*
const promise = Promise.resolve(7);

promise
    .then(console.log);

async function asyncFunction() {
    const promiseValue = await promise;
    console.log(promiseValue);
}

asyncFunction();*/
/*const promise = new Promise(
    function (resolve, reject) {

        setTimeout(function () {
            reject(new Error('error'));
        }, 4000)
    }
);

asyncFunction();

async function asyncFunction() {
    try {
        console.log(await promise);
    } catch (e) {
        console.error(e)
    }

}*/
/*
promise
    .then(console.log)
    .catch(console.error);*/

/*

const promise1 =  Promise.reject(1);
const promise2 =  Promise.resolve('1');
const promise3 =  Promise.resolve(true);
const promise4 =  Promise.resolve(null);
const promise5 =  Promise.resolve();
const promise6 =  Promise.resolve({});
const promise7 =  Promise.resolve(Symbol('symbol'));

async function logData() {
try {
    const q = await promise7;
    console.log(q);
    console.log(await promise2);
    console.log(await promise3);
    console.log(await promise4);
    console.log(await promise5);
    console.log(await promise6);
    console.log(await promise7);

}catch (e) {
    console.error(e);
}



}
logData();*/
/*
function randomResolve(resolve, reject) {

    setTimeout(function () {
        if (Math.random() > 0.2) {
            resolve('Success!')
        }
        reject(new Error('error'));
    }, 2000)
}

const promises = [
    new Promise(randomResolve),
    new Promise(randomResolve),
    new Promise(randomResolve),
    new Promise(randomResolve),
];
test();
async function test() {
    try {

        const result = await Promise.race( promises );

        console.log(result);
    } catch (e) {
        console.error(e);
    }

}
*/
/*fetch('./users.json')
    .then(response => {
        return response.json()
    })
    .then(console.log)
    .catch(console.error);*/


const [postTaskButton] = document.getElementsByTagName('button');
const taskInput = document.querySelector('input[type="text');

const state = {
    isFetching: false,
    tasks: [],
    error: null,
};

/*
loadTaskButton.onclick = async function () {
    try {
        const response = await fetch('http://192.168.0.106:3000/tasks');
        const data = await response.json();
        console.log(data);

    } catch (e) {
        console.error(e);
    }

};*/


postTaskButton.onclick = async function () {
    try {
        const {value} = taskInput;
        taskInput.value = '';
        const response = fetch('http://192.168.0.106:3000/task', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(new Object({
                value
            })), // тип данных в body должен соответвовать значению заголовка "Content-Type"
        });

        if (response.status >= 200 && response.status < 300) {
            const data = await response.json();
            state.tasks.unshift(data);
            refreshTasksList(state.tasks)
        }
    } catch (e) {
        console.error(e);
    }
};

async function loadAllTasks() {
    try {
        const response = await fetch('http://192.168.0.106:3000/tasks');
        state.tasks = await response.json();
        refreshTasksList(state.tasks)
    } catch (e) {
        state.error = e;
    }
}

function refreshTasksList(tasks) {
    const tasksList = document.getElementById('tasksList');
    tasksList.innerHTML = "";
    tasks.forEach(task => {
        const taskListItem = document.createElement('li');
        taskListItem.append(task.value);
        tasksList.append(taskListItem);
    })
}


window.onload = loadAllTasks;