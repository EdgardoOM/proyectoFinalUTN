-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2024 a las 17:17:14
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rom_pasteleria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id_comentario` int(11) NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  `usuario_comentario` varchar(250) NOT NULL,
  `comentario_comentario` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id_comentario`, `img_id`, `usuario_comentario`, `comentario_comentario`) VALUES
(2, 'jntozht9wo7q27ixwwja', 'Usuario Uno', 'comentario de nuestros usuarios, comentario de nuestros usuarios, comentario de nuestros usuarios, comentario de nuestros usuarios.'),
(3, 'mdnbd6dmgo4ezqg2c2kl', 'Usuario Dos', 'comentario de nuestros usuarios, comentario de nuestros usuarios, comentario de nuestros usuarios, comentario de nuestros usuarios.'),
(4, 'vzhlpqfyyin8pon8o0kv', 'Usuario Tres', 'comentario de nuestros usuarios, comentario de nuestros usuarios, comentario de nuestros usuarios, comentario de nuestros usuarios.'),
(5, 'xreze72p307qb0dwexp2', 'Usuario Cuatro', 'comentario de nuestros usuarios, comentario de nuestros usuarios, comentario de nuestros usuarios, comentario de nuestros usuarios.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(250) NOT NULL,
  `descripcion_producto` varchar(250) NOT NULL,
  `precio_producto` int(4) NOT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre_producto`, `descripcion_producto`, `precio_producto`, `img_id`) VALUES
(10, 'Producto 1', 'Descripción del producto, decripción del mismo, características.', 1234, 'bray0hwl7uxkn2kdanp5'),
(11, 'Producto 2', 'Descripción del producto, decripción del mismo, características.', 4567, 'kgvh5muhxvpspxriubsp'),
(15, 'Producto 5', 'Descripción del producto, descripción del mismo, características.', 12344, 'qefyin2j1xqre03y6rou'),
(16, 'Producto 6', 'Descripción del producto, descripción del mismo, características.', 54697, 'fhvfmpxti3kuavaefcty');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id_publicacion` int(11) NOT NULL,
  `descripcion_publicacion` varchar(250) NOT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `publicaciones`
--

INSERT INTO `publicaciones` (`id_publicacion`, `descripcion_publicacion`, `img_id`) VALUES
(1, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sequi voluptatibus natus perferendis....', 'yc8brv95fzfcoea7pw3y'),
(2, 'descripcion del producto probando descripcion\r\n', 'afm5bskmk6iegbwgmpri'),
(4, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sequi voluptatibus natus perferendis....', 'yjbcjafcj7fpd6m13zzd'),
(5, 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sequi voluptatibus natus perferendis....', 'ukvs9hkezwpgojtlkp3u');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'edgardo', '81dc9bdb52d04dc20036dbd8313ed055');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id_comentario`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id_publicacion`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id_publicacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
