-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 12-02-2019 a las 07:44:56
-- Versión del servidor: 5.7.23
-- Versión de PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `delivery`
--

-- --------------------------------------------------------

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `id` int(11) NOT NULL,
  `fecha` datetime DEFAULT NULL,
  `iva` float DEFAULT NULL,
  `direccion_pedido` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `poblacion_pedido` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_restaurante` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`id`, `fecha`, `iva`, `direccion_pedido`, `poblacion_pedido`, `id_usuario`, `id_restaurante`) VALUES
(1, '2019-02-07 00:00:00', 21, 'local', 'local', 1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `linea`
--

CREATE TABLE `linea` (
  `id` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_factura` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `linea`
--

INSERT INTO `linea` (`id`, `cantidad`, `id_producto`, `id_factura`) VALUES
(1, 1, NULL, 1),
(2, 1, NULL, 1),
(3, 1, NULL, 1),
(4, 1, NULL, 1),
(5, 1, NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipio`
--

CREATE TABLE `municipio` (
  `id` int(11) NOT NULL,
  `poblacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_area` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `municipio`
--

INSERT INTO `municipio` (`id`, `poblacion`, `id_area`) VALUES
(1, 'Valencia', 1),
(5, 'Moncada', 2),
(6, 'Puzol', 2),
(7, 'Massamagrell', 2),
(8, 'Godella', 2),
(32, 'Burjasot', 2),
(33, 'Meliana', 2),
(34, 'Tabernes Blanques', 2),
(35, 'Rafelbuñol', 2),
(36, 'El Puig', 2),
(37, 'Foyos', 2),
(38, 'Almacera', 2),
(39, 'Puebla de Farnals', 2),
(40, 'Rocafort', 2),
(41, 'Museros', 2),
(42, 'Albalat dels Sorells', 2),
(43, 'Albuixech', 2),
(44, 'Bonrepos y Mirambell', 2),
(45, 'Alfara del Patriarca', 2),
(46, 'Vinalesa', 2),
(47, 'Masalfasar', 2),
(48, 'Emperador', 2),
(49, 'Albalat dels Tarongers', 3),
(50, 'Alfara de la Baronia', 3),
(51, 'Algar de Palancia', 3),
(52, 'Algimia de Alfara', 3),
(53, 'Benavites', 3),
(54, 'Benifairo de les Valls', 3),
(55, 'Canet en Berenguer', 3),
(56, 'Estivella', 3),
(57, 'Faura', 3),
(58, 'Gilet', 3),
(59, 'Petres', 3),
(60, 'Quart de les Valls', 3),
(61, 'Quartell', 3),
(62, 'Sagunt', 3),
(63, 'Segart', 3),
(64, 'Torres Torres', 3),
(65, 'Torrente', 5),
(66, 'Paterna', 5),
(67, 'Mislata', 5),
(68, 'Chirivella', 5),
(69, 'Aldaya', 5),
(70, 'Alacuas', 5),
(71, 'Manises', 5),
(72, 'Cuart de Poblet', 5),
(73, 'Picaña', 5),
(74, 'Catarroja', 4),
(75, 'Paiporta', 4),
(76, 'Alfafar', 4),
(77, 'Picasent', 4),
(78, 'Silla', 4),
(79, 'Albal', 4),
(80, 'Benetuser', 4),
(81, 'Sedavi', 4),
(82, NULL, 4),
(83, 'Alcacer', 4),
(84, 'Masanasa', 4),
(85, 'Beniparrell', 4),
(86, 'Lugar Nuevo de la Corona', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `codigo` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `desc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `existencias` int(11) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `foto` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_tipoproducto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `codigo`, `nombre`, `desc`, `existencias`, `precio`, `foto`, `id_tipoproducto`) VALUES
(14, 'A001', 'Ensalada Cesare\r\n', 'Variedad de brotes, tomates, pimientos rojos, salsa cesar y palomitas de maíz.\r\n', 100, 4, 'cesare.jpg', 3),
(15, 'A002', 'Ensalada clásica', 'Variedad de brotes, tomates, cebolla, nueces y zanahoria.\r\n', 100, 4, 'mediterranea.jpg', 3),
(16, 'A003', 'Cous cous\r\n', 'Cous cous con aguacate, alubias rojas, maíz, cacahuetes con aliño de lima y tabasco.\r\n', 100, 4, 'couscous.jpg', 3),
(17, 'A004', 'Sándwich vegano\r\n', 'Pan de pita, brotes de soja y aguacate.\r\n', 100, 4, 'Sandwich_vegano.jpg', 3),
(18, 'A005', 'Sándwich de la casa\r\n', 'Pan de sándwich, bacon, cebolla, pepinillos y mostaza.\r\n', 100, 4, 'sandwich_casa.jpg', 3),
(19, 'A006', 'Sándwich doble\r\n', 'Pan de sándwich,lechuga, queso fresco y salsa.\r\n', 100, 4, 'sandwich_doble.jpg', 3),
(20, 'B001', 'Coulant de chocolate\r\n', 'Huevo, harina, azúcar, chocolate negro y mantequilla\r\n', 100, 3, 'coulant.jpg', 4),
(21, 'B002', 'Batido de chocolate\r\n', 'Leche, azúcar y chocolate.\r\n', 100, 3, 'batido_chocolate.jpg', 4),
(22, 'B003', 'Batido tropical\r\n', 'Leche, azúcar y zumo de frutas del bosque.\r\n', 100, 3, 'batido_frutas_bosque.jpg', 4),
(23, 'B004', 'Batido de kiwi\r\n', 'Leche, azúcar y zumo de kiwi.\r\n', 100, 3, 'batido_kiwi.jpg', 4),
(24, 'B005', 'Batido de manzana\r\n', 'Leche, azúcar y zumo de manzana.\r\n', 100, 3, 'batido_manzana.jpg', 4),
(25, 'B006', 'Macarons\r\n', '4 unidades de macarons de chocolate, vainilla, plátano y caramelo\r\n', 100, 3, 'macarons.jpg', 4),
(26, 'C001', 'Bacon', 'Pan de centeno, hamburguesa de vacuno, bacon y queso.\r\n', 100, 4.5, 'bacon.jpg', 1),
(27, 'C002', 'Queso manchego\r\n', 'Pan de centeno, hamburguesa de vacuno,  queso manchego, lechuga y tomate.\r\n', 100, 4.5, 'queso_manchego.jpg', 1),
(28, 'C003', 'Queso de cabra\r\n', 'Pan de centeno, hamburguesa de vacuno,  queso de cabra, lechuga,tomate y pepinillos.\r\n', 100, 4.5, 'queso_cabra.jpg', 1),
(29, 'C004', 'Doble con queso\r\n', 'Pan de centeno,doble hamburguesa de vacuno,  queso, lechuga y tomate.\r\n', 100, 4.5, 'doble_queso.jpg', 1),
(30, 'C005', 'Vegana\r\n', 'Pan de centeno, hamburguesa de quinoa,  cebolla, lechuga y tomate.\r\n', 100, 4.5, 'vegana.jpg', 1),
(31, 'C006', 'Ternera\r\n', 'Pan de centeno, hamburguesa de ternera,  queso manchego, lechuga y tomate.\r\n', 100, 4.5, 'ternera.jpg', 1),
(32, 'C007', 'Clásica\r\n', 'Pan de centeno, hamburguesa de vacuno,  queso , lechuga y tomate.\r\n', 100, 4.5, 'clasica.jpg', 1),
(33, 'C008', 'Especial\r\n', 'Pan de centeno, hamburguesa de vacuno adobado,  queso, salsa de la casa, lechuga y tomate.\r\n', 100, 4.5, 'especial.jpg', 1),
(34, 'C009', 'Cesar\r\n', 'Pan de centeno, hamburguesa de vacuno,  queso, salsa cesar, lechuga y tomate.\r\n', 100, 4.5, 'cesar.jpg', 1),
(35, 'D001', 'Coca-Cola\r\n', 'Coca-Cola de 0.33L\r\n', 100, 2, 'cocacola.jpg', 2),
(36, 'D002', 'Coca-Cola Light\r\n', 'Coca-Cola Light de 0.33L\r\n', 100, 2, 'cocacolalight.jpg', 2),
(37, 'D003', 'Fanta Limón\r\n', 'Fanta Limón de 0.33L\r\n', 100, 2, 'fantalimon.jpg', 2),
(38, 'D004', 'Fanta Naranja\r\n', 'Fanta Naranja de 0.33L\r\n', 100, 2, 'fantanaranja.jpg', 2),
(39, 'D005', 'Cerveza Alhambra\r\n', 'Lata\r\n', 100, 2, 'alhambra.jpg', 2),
(40, 'D006', 'Agua\r\n', '0,33L\r\n', 100, 2, 'agua.jpg', 2),
(41, 'D007', 'Alhambra Reserva\r\n', 'Lata\r\n', 100, 2, 'alhambraespecial.jpg', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurante`
--

CREATE TABLE `restaurante` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `poblacion` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `restaurante`
--

INSERT INTO `restaurante` (`id`, `nombre`, `direccion`, `poblacion`) VALUES
(1, 'Eat It Valencia norte', 'Calle Juan de Juanes 23', 'Valencia'),
(2, 'Eat It Museros', 'Calle Juan Saldaña 21', 'Museros'),
(3, 'Eat It Meliana', 'Calle Magallanes 52', 'Meliana'),
(4, 'Eat It Moncada', 'Calle Maria Cristina 43', 'Moncada'),
(5, 'Eat It Estivella', 'Calle Noelia Silla 45', 'Estivella'),
(6, 'Eat It Sagunt', 'Calle Paz 5', 'Sagunt'),
(7, 'Eat It Albalat dels Tarongers', 'Calle Maria Moliner 23', 'Albalat dels Tarongers'),
(8, 'Eat It Torrente', 'Calle Jesus Buris 66', 'Torrente'),
(9, 'Eat It Aldaya', 'Calle Jesus Manzal 68', 'Aldaya'),
(10, 'Eat It Paterna', 'Calle Jesus Nules 44', 'Paterna'),
(11, 'Eat It Catarroja', 'Calle Maria Magno 443', 'Catarroja'),
(12, 'Eat It Paiporta', 'Calle Pepe Masil 4', 'Paiporta'),
(13, 'Eat It Picasent', 'Calle Juan Magno 55', 'Picasent');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurante_municipio`
--

CREATE TABLE `restaurante_municipio` (
  `id` int(11) NOT NULL,
  `id_restaurante` int(11) DEFAULT NULL,
  `id_municipio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `restaurante_municipio`
--

INSERT INTO `restaurante_municipio` (`id`, `id_restaurante`, `id_municipio`) VALUES
(1, 1, 1),
(2, 2, 41),
(3, 2, 5),
(4, 2, 6),
(5, 2, 7),
(6, 3, 34),
(7, 3, 8),
(8, 3, 39),
(9, 3, 38),
(10, 3, 33),
(11, 4, 32),
(12, 4, 35),
(13, 4, 36),
(14, 4, 37),
(15, 4, 40),
(16, 4, 42),
(17, 4, 43),
(18, 4, 44),
(19, 4, 45),
(20, 4, 46),
(21, 4, 48),
(22, 4, 47),
(23, 4, 47),
(24, 6, 62),
(25, 6, 54),
(26, 6, 50),
(27, 6, 51),
(28, 6, 52),
(29, 7, 53),
(30, 7, 55),
(31, 7, 57),
(32, 7, 58),
(33, 7, 59),
(34, 5, 56),
(35, 5, 61),
(36, 5, 63),
(37, 5, 64),
(38, 8, 65),
(39, 8, 68),
(40, 8, 67),
(41, 12, 75),
(42, 12, 70),
(43, 12, 69),
(44, 10, 66),
(45, 10, 73),
(46, 10, 71),
(47, 10, 72),
(48, 11, 74),
(49, 11, 76),
(50, 11, 78),
(51, 12, 80),
(52, 12, 78),
(53, 12, 75),
(54, 13, 81),
(55, 13, 83),
(56, 13, 84),
(57, 13, 85),
(58, 13, 86);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoproducto`
--

CREATE TABLE `tipoproducto` (
  `id` int(11) NOT NULL,
  `desc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipoproducto`
--

INSERT INTO `tipoproducto` (`id`, `desc`) VALUES
(1, 'Hamburguesa'),
(2, 'Bebida'),
(3, 'Varios'),
(4, 'Postre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousuario`
--

CREATE TABLE `tipousuario` (
  `id` int(11) NOT NULL,
  `desc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipousuario`
--

INSERT INTO `tipousuario` (`id`, `desc`) VALUES
(0, 'Visitante'),
(1, 'Administrador'),
(2, 'Cliente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ape1` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ape2` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `login` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pass` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `direccion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `poblacion` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `token` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `validado` tinyint(1) DEFAULT NULL,
  `id_tipousuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `ape1`, `ape2`, `telefono`, `login`, `pass`, `email`, `direccion`, `poblacion`, `token`, `validado`, `id_tipousuario`) VALUES
(1, 'Jaume', 'Monzonis', 'Lazaro', 666666666, 'jaume', '5C633EE1B9C2C7814422BDFC98106CD96FA651899D54B99DAAF5897AC720CEC4', 'jaume_monzonis@hotmail.com', 'C/ Sant Bernador', 'Valencia', 'sdfsdajf53454355435435', 1, 2),
(2, 'Pepe', 'Rodirs', 'Juanes', 666000333, 'pepe', '7C9E7C1494B2684AB7C19D6AFF737E460FA9E98D5A234DA1310C97DDF5691834', 'jaume@hotmail.com', 'Calle Juanes', 'Museros', 'sdjhfqqq8434354325', 1, 1),
(4, 'iris', 'iris', 'iris', 666333666, 'iris', '47612b3175fece07f6c3e91992412c5b16ca88a9068cb72fecbcf653eb5ffcd7', 'jaume_monzonis@hotmail.com', 'calle juanes', 'Valencia', 'FcxO70GQCCokABsLNZIkx8761cqeo4rbOsoEDWVFUheKgdUmDck7xnkepPy9mm0l65zLSX1lHcXOkbuHfMHczjkiCkobfp6ATNSuzX1t1gpmKCNUE5IfIX62m0pf2OBnpy8uyEOvudpLQKI4nfXeax1jTTydihYdbw3IxUbLwx6ddhszQ9Dnm3mFLXk1DdJddtv39T6qXyoF8jLqtwYM6ZxCMFOvnvau0JkmKCUkUokaNjz4NM7EbEJ8AwpDBdZw', 1, 2),
(5, 'juan', 'ee', 'eeee', 444444444, 'juan', 'ed08c290d7e22f7bb324b15cbadce35b0b348564fd2d5f95752388d86d71bcca', 'jaume_monzonis@hotmail.com', 'calle juanes', 'valencia', 'x5C3wJ7gT7Xbj5vYaL7nnmD3nq0tVS6IINbuBBGjiIMK2YdbdCarn3yZsUO6swDLCrC656Oi1BNzYHPchd5ZpR73DxceMCR84LpPwlDkhFfF5Am5QYYOoNgQpmDeRE16UTsyh9Kzni6ejprgdmFGOOovowx6wQf7OxDuH213y0fb6CEtD7xztF10RsL776fLXx57Lu2lfKBsbEiiDx96ohmf3RRFq8mUhQvVbyJbGhNDHdoLq14F3r9q3nQhW8G8', 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_factura_usuario1_idx` (`id_usuario`),
  ADD KEY `fk_factura_restaurante1_idx` (`id_restaurante`);

--
-- Indices de la tabla `linea`
--
ALTER TABLE `linea`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_linea_producto1_idx` (`id_producto`),
  ADD KEY `fk_linea_factura1_idx` (`id_factura`);

--
-- Indices de la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_municipio_area1_idx` (`id_area`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_producto_tipoproducto1_idx` (`id_tipoproducto`);

--
-- Indices de la tabla `restaurante`
--
ALTER TABLE `restaurante`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `restaurante_municipio`
--
ALTER TABLE `restaurante_municipio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_restaurante_municipio_restaurante1_idx` (`id_restaurante`),
  ADD KEY `fk_restaurante_municipio_municipio1_idx` (`id_municipio`);

--
-- Indices de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario_tipoUsuario_idx` (`id_tipousuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `area`
--
ALTER TABLE `area`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `linea`
--
ALTER TABLE `linea`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `municipio`
--
ALTER TABLE `municipio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `restaurante`
--
ALTER TABLE `restaurante`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `restaurante_municipio`
--
ALTER TABLE `restaurante_municipio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT de la tabla `tipoproducto`
--
ALTER TABLE `tipoproducto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipousuario`
--
ALTER TABLE `tipousuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `fk_factura_restaurante1` FOREIGN KEY (`id_restaurante`) REFERENCES `restaurante` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_factura_usuario1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `linea`
--
ALTER TABLE `linea`
  ADD CONSTRAINT `fk_linea_factura1` FOREIGN KEY (`id_factura`) REFERENCES `factura` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_linea_producto1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `municipio`
--
ALTER TABLE `municipio`
  ADD CONSTRAINT `fk_municipio_area1` FOREIGN KEY (`id_area`) REFERENCES `area` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `fk_producto_tipoProducto1` FOREIGN KEY (`id_tipoproducto`) REFERENCES `tipoproducto` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `restaurante_municipio`
--
ALTER TABLE `restaurante_municipio`
  ADD CONSTRAINT `fk_restaurante_municipio_municipio1` FOREIGN KEY (`id_municipio`) REFERENCES `municipio` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_restaurante_municipio_restaurante1` FOREIGN KEY (`id_restaurante`) REFERENCES `restaurante` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_usuario_tipousuario` FOREIGN KEY (`id_tipousuario`) REFERENCES `tipousuario` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
