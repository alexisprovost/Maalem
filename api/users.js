const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const existingUser = users.find((user) => user.name === name);

  if(!name || !room) return { error: 'Username and room are required.' };

  //cree un nouveau utilisateur si une personne avec le meme nom n'existe pas, sinon retourne l'utilisateur avec le nom deja pris
  if(typeof existingUser !== 'undefined'){
    existingUser.room = room;
    return existingUser;
  } else if (typeof existingUser === 'undefined'){
    const user = { id, name, room };
    users.push(user);
    return user;
  }
}
//enlever un utilisateur
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (name) => users.find((user) => user.name === name);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };