USE obra_social;

INSERT INTO afiliados (id_afiliado, dni, nombre, apellido, telefono, correo)
VALUES
( NULL, 35123321, "Santiago", "Gonzalez", 1122435201, "santiGonzalez@yahoo.com"),
( NULL, 24123445, "Morena", "Paz", 1143512014, "PazMore@gmail.com"),
( NULL, 22549875, "Jaime", "Rodriguez", 1143579875, "JRodriguez@hotmail.com"),
( NULL, 42002452, "Augusto", "Gimenez", 1145624625, "GimenezAgus@live.com"),
( NULL, 45615852, "Rodrigo", "Fernandez", 1112524154, "RodriF@gmail.com");

INSERT INTO prestaciones (id_prestacion, nombre, descripcion, precio)
VALUES
( NULL, "Resonancia Magnetica", "Imágenes no invasiva que produce imágenes anatómicas tridimensionales detalladas, sin radiación", 30000),
( NULL, "Tomografia Computarizada", "Utiliza un equipo de rayos X especial para crear imágenes transversales del cuerpo", 32000),
( NULL, "Radiografía", "Producen imágenes como sombras de huesos y ciertos órganos y tejidos", 5000),
( NULL, "Ecografia", "Emplea el ultrasonido para crear imágenes bidimensionales o tridimensionales", 7000),
( NULL, "Densitometria", "Procedimiento que mide la cantidad de calcio y otros minerales que hay en un hueso", 6000);

INSERT INTO prestadores (id_prestador, nombre, direccion, telefono)
VALUES
( NULL, "Hospital Italiano", "Juan Domingo Perón 4190, CABA", 49590200),
( NULL, "Hospital Britanico", "Perdriel 74, CABA",  43096400),
( NULL, "Sanatorio Otamendi", "Azcuénaga 870, CABA", 49652900),
( NULL, "Hospital Universitario Austral", "Juan Domingo Peron 1500, Pilar", 4482000),
( NULL, "Sanatorio Mater Dei", "San Martín de Tours 2952, CABA", 48095555);


INSERT INTO autorizaciones (id_aut, id_afiliado, id_prestacion, id_prestador, vigencia)
VALUES
( NULL, 3, 1, 5, "2024-02-01"),
( NULL, 3, 2, 5, "2024-01-25"),
( NULL, 2, 4, 1, "2024-02-11"),
( NULL, 5, 3, 2, "2024-01-09"),
( NULL, 1, 2, 4, "2024-02-25");

INSERT INTO historial_consumo (id_afiliado, id_aut)
VALUES
( 3, 1),
( 3, 2),
( 2, 3),
( 5, 4),
( 1, 5);



