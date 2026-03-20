const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  // prueba para verificar si un usuario esta en la lista con add

test("verify if an user was added correctly with add()", () =>{
  let user2 = new User(1,"Ricardo", "ricardo@generation.org")
  // verificamos que no este en la lista
  expect(userController.getUsers()).not.toContain(user2) ;
  userController.add(user2);
  // verificamos que ahora si se añadio el usuario
  expect(userController.getUsers()).toContain(user2)
})

// prueba para verificar que un usuario no esta en la lista con remove
test("verify if an user was removed correctly with remove()", () =>{
  // verificamos que este en la lista 
  let user2 = new User(1,"Ricardo", "ricardo@generation.org")
  // agregamos al usuario que deseamos eliminar
  userController.add(user2);
  expect(userController.getUsers()).toContain(user2)
  // eliminamos al usuario
  userController.remove(user2);
  // verificamos que se elimino correctamente el usuario
  expect(userController.getUsers()).not.toContain(user2);
});


// pruebas unitarias para la funcion findById
test('verify if an user is on the list by id', () =>{
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.findById(user.id);
  const result = userController.findById(user.id);
  expect(result).toEqual(user);
});

test('verify if an user is on the list by id', () =>{
  let userNew = new User(1,"Ricardo", "ricardo@generation.org");
  userController.findById(userNew.id);
  const result = userController.findById(userNew.id);
  expect(result).toEqual(userNew);
});

// pruebas unitarias para la funcion findByEmail
test('verify if an user is on the list by email', () =>{
  let usuario = new User(1234,"Santiago", "santiago@generation.org");
  userController.findByEmail(usuario.email);
  const result = userController.findByEmail(usuario.email);
  expect(result).toEqual(usuario);
});

test('verify if an user is on the list by email', () =>{
  let usuario2 = new User(1,"Ricardo", "ricardo@generation.org");
  userController.findByEmail(usuario2.email);
  const result = userController.findByEmail(usuario2.email);
  expect(result).toEqual(usuario2);
});