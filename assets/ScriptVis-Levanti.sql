-- 1. Vista de autorizaciones

CREATE VIEW v_DetalleAutorizacion AS
	SELECT 
		A.id_aut,
		AF.nombre AS NombreAfiliado,
		AF.apellido AS ApellidoAFiliado,
		P.nombre AS Practica,
		PR.nombre AS Prestador,
		A.vigencia
	 FROM autorizaciones A
	 JOIN afiliados AF ON A.id_afiliado = AF.id_afiliado
	 JOIN prestaciones P ON  A.id_prestacion = P.id_prestacion
	 JOIN prestadores PR ON A.id_prestador = PR.id_prestador;
	
    SELECT * FROM v_DetalleAutorizacion;
 
-- 2.  Vista de cantidad de autorizaciones generadas por prestador

CREATE VIEW v_consumoPrestadores AS
	SELECT
		PR.id_prestador,
		PR.nombre AS NombrePrestador,
		COUNT(A.id_aut) AS TotalAutorizaciones
	FROM prestadores PR
	JOIN autorizaciones A ON A.id_prestador = PR.id_prestador
	GROUP BY PR.id_prestador, PR.nombre
	ORDER BY TotalAutorizaciones DESC;
    
SELECT * FROM v_consumoPrestadores;

-- 3.   Vista de costo financiero afiliado

CREATE VIEW v_costoAfiliado AS
	SELECT
		AF.id_afiliado,
		AF.nombre AS Nombre,
		AF.apellido AS Apellido,
		COUNT(A.id_aut) AS TotalAutorizaciones,
		SUM(P.precio) AS MontoTotal
	FROM afiliados AF
	LEFT JOIN autorizaciones A ON AF.id_afiliado = A.id_afiliado
	LEFT JOIN prestaciones P ON A.id_prestacion = P.id_prestacion
	GROUP BY AF.id_afiliado, AF.nombre, AF.apellido
	ORDER BY MontoTotal DESC;

SELECT * FROM v_costoAfiliado;

-- 4. Vista de monto a abonar a prestadores

CREATE VIEW v_pagoPrestadores AS
	SELECT
		PR.id_prestador,
		PR.nombre AS NombrePrestador,
		SUM(P.precio) AS MontoTotal
	FROM prestadores PR
    JOIN prestaciones P ON PR.id_prestador = P.id_prestacion
	JOIN autorizaciones A ON P.id_prestacion = A.id_prestacion
	GROUP BY PR.id_prestador, PR.nombre
	ORDER BY MontoTotal DESC;

SELECT * FROM v_pagoPrestadores;

-- 5. Vista de monto abonado por practica 

CREATE VIEW v_MontoPorPrest AS
SELECT
	PR.id_prestacion,
    PR.nombre AS NombrePractica,
    COUNT(A.id_aut) AS TotalAutorizaciones,
    SUM(PR.precio) AS CostoTotal
FROM prestaciones PR
JOIN autorizaciones A ON PR.id_prestacion = A.id_prestacion
GROUP BY PR.id_prestacion, PR.nombre
ORDER BY CostoTotal DESC;

SELECT * FROM v_MontoPorPrest;

