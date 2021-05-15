const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  console.log(name+'88888888888888888888888888')
  const existingUser = users.find((user) => user.name === name);
  console.log(existingUser +'^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');

  if(!name || !room) return { error: 'Username and room are required.' };
  if(typeof existingUser !== 'undefined'){
    console.log('existingUser is :' + typeof existingUser)
    return {existingUser};
  } else {
    const user = { id, name, room };
    users.push(user);
    console.log('Pushed user is :' + user);
    return { user };
  }
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };