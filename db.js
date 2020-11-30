conn = new Mongo();
db = conn.getDB("AppHeroku");

db.Contactos.insert(
  [
   {Nombre: 'Jose', Apellidos:'Merma Condori', Correo:'jmerma@gmail.com', Celular: '942035890'},
   {Nombre: 'Lourdes', Apellidos:'Castillo Lopez', Correo:'lcastillo@gmail.com', Celular: '942035890'},
   {Nombre: 'Cesar', Apellidos:'Acjota Merma', Correo:'cacjota@gmail.com', Celular: '942035890'}
 ]);