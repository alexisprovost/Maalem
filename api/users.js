const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  console.log(name+'88888888888888888888888888')
  const existingUser = users.find((user) => user.name === name);
  console.log(existingUser +'^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');

  if(!name || !room) return { error: 'Username and room are required.' };
  if(typeof existingUser !== 'undefined'){
    existingUser.room = room;
    console.log('existingUser is :' +typeof existingUser +', '+existingUser.name+', '+ existingUser.room)
    return existingUser;
  } else if (typeof existingUser === 'undefined'){
    const user = { id, name, room };
    users.push(user);
    console.log('Pushed user is :' + user.name +', ' + user.room);
    return user;
  }
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (name) => users.find((user) => user.name === name);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };