CREATE SCHEMA obra_social;
USE obra_social;

CREATE TABLE afiliados (
 id_afiliado INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 dni INT NOT NULL, nombre VARCHAR (30) NOT NULL,
 apellido VARCHAR (30) NOT NULL,
 telefono INT, correo VARCHAR (30)
 );
 
CREATE TABLE prestaciones( 
 id_prestacion INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR (30) NOT NULL,
 descripcion VARCHAR (100) NOT NULL,
 precio DECIMAL(8,2)
 );
 
 CREATE TABLE prestadores (
 id_prestador INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR (30) NOT NULL,
 direccion VARCHAR (30) NOT NULL,
 telefono INT
 );

CREATE TABLE autorizaciones (
id_aut INT NOT NULL AUTO_INCREMENT,
id_afiliado INT NOT NULL,
id_prestacion INT NOT NULL,
id_prestador INT NOT NULL,
vigencia DATE NOT NULL,
PRIMARY KEY (id_aut),
FOREIGN KEY (id_afiliado) REFERENCES afiliados(id_afiliado),
FOREIGN KEY (id_prestacion) REFERENCES prestaciones(id_prestacion),
FOREIGN KEY (id_prestador) REFERENCES prestadores(id_prestador)
);

CREATE TABLE historial_consumo (
id_afiliado INT NOT NULL,
id_aut INT NOT NULL,
FOREIGN KEY (id_afiliado) REFERENCES afiliados(id_afiliado),
FOREIGN KEY (id_aut) REFERENCES autorizaciones(id_aut) 
);



