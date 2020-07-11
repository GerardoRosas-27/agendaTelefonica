-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.11-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5977
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for agendatelefonica
CREATE DATABASE IF NOT EXISTS `agendatelefonica` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `agendatelefonica`;

-- Dumping structure for table agendatelefonica.chats
CREATE TABLE IF NOT EXISTS `chats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grupo` int(11) DEFAULT NULL,
  `mensaje` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__grupos` (`grupo`),
  KEY `FK__mensajes` (`mensaje`),
  CONSTRAINT `FK__grupos` FOREIGN KEY (`grupo`) REFERENCES `grupos` (`id`),
  CONSTRAINT `FK__mensajes` FOREIGN KEY (`mensaje`) REFERENCES `mensajes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table agendatelefonica.chats: ~2 rows (approximately)
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
INSERT INTO `chats` (`id`, `grupo`, `mensaje`) VALUES
	(1, 1, 1),
	(2, 1, 2);
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;

-- Dumping structure for table agendatelefonica.conexiones
CREATE TABLE IF NOT EXISTS `conexiones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` int(11) DEFAULT NULL,
  `idsocket` varchar(100) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_conexiones_usuarios` (`usuario`),
  CONSTRAINT `FK_conexiones_usuarios` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table agendatelefonica.conexiones: ~48 rows (approximately)
/*!40000 ALTER TABLE `conexiones` DISABLE KEYS */;
INSERT INTO `conexiones` (`id`, `usuario`, `idsocket`, `fecha`) VALUES
	(9, 1, 'ZoZPDIP0hS24-rC0AAAA', '2020-06-28 00:00:00'),
	(10, 1, 'sm7B0WQ3Gyi06OymAAAA', '2020-06-28 00:00:00'),
	(11, 1, 'w_yWyEM349hpQ_BKAAAA', '2020-06-28 00:00:00'),
	(12, 1, 'JJw0yjzanQR1UMd1AAAA', '2020-06-28 00:00:00'),
	(13, 1, 'yrjPFUTVzpWqA0FYAAAC', '2020-06-28 00:00:00'),
	(14, 1, 'yrjPFUTVzpWqA0FYAAAC', '2020-06-28 00:00:00'),
	(15, 1, 'krG2AMjgYjgoqf9AAAAD', '2020-06-28 00:00:00'),
	(16, 1, 'KcqDnZe4DS4MuxbrAAAA', '2020-06-28 00:00:00'),
	(17, 1, '2bqtKSvwNC-9oQiRAAAA', '2020-06-28 00:00:00'),
	(18, 1, '32RXR6cX04-ZehrXAAAB', '2020-06-28 00:00:00'),
	(19, 1, 'u98j6--efNIfqhKSAAAC', '2020-06-28 00:00:00'),
	(20, 1, '_Ln2wrH2enYH5HUFAAAD', '2020-06-28 00:00:00'),
	(21, 1, 'FH8uaPiPnDKUO2NLAAAB', '2020-06-28 00:00:00'),
	(22, 1, 'VFe_ZUhgf7nu0aVxAAAC', '2020-06-28 00:00:00'),
	(23, 1, 'NR8RPtTCRZGCk2dWAAAD', '2020-06-28 00:00:00'),
	(24, 1, 'ps4_CCCXSGvBp1hwAAAA', '2020-06-28 00:00:00'),
	(25, 1, 'bCuQCLbjCiEMkY2fAAAA', '2020-06-28 00:00:00'),
	(26, 1, 'FTwN39udU8o_-Op9AAAA', '2020-06-28 00:00:00'),
	(27, 1, 'FhZxydidrsmTYn2UAAAA', '2020-06-28 00:00:00'),
	(28, 1, 'FhZxydidrsmTYn2UAAAA', '2020-06-28 00:00:00'),
	(29, 1, 'pa3NJ4iq0Ik-eL2mAAAA', '2020-06-28 00:00:00'),
	(30, 1, 'po7Ezybyoisu9lXLAAAA', '2020-06-28 00:00:00'),
	(31, 1, '1o9h1oMl8EwKZfdAAAAA', '2020-06-28 00:00:00'),
	(32, 1, 'SqvE6UXhpaXwUOt1AAAA', '2020-06-28 00:00:00'),
	(33, 1, 'X9pr-XfNtqJ-1ADcAAAA', '2020-06-28 00:00:00'),
	(34, 1, 'gY7kNBL6ArECr3cWAAAA', '2020-06-28 00:00:00'),
	(35, 1, '4yZbvZIrTagOCjr_AAAA', '2020-06-28 00:00:00'),
	(36, 1, 'HUvsjJm0PfYsxviHAAAA', '2020-06-28 00:00:00'),
	(37, 1, 'TC3DLYcArFbyV7a4AAAA', '2020-06-28 00:00:00'),
	(38, 1, 'yHIEaBMc8kTo5ySwAAAA', '2020-06-28 00:00:00'),
	(39, 1, 'b4KsvRJONCemGMlFAAAA', '2020-06-28 00:00:00'),
	(40, 1, 'Hddn2L0eewo5G6FnAAAA', '2020-06-28 00:00:00'),
	(41, 1, 'nH7hZgl6huJWTSPXAAAA', '2020-06-28 00:00:00'),
	(42, 1, 'cPSsgDie146n6aTfAAAA', '2020-06-28 00:00:00'),
	(43, 1, 'cPSsgDie146n6aTfAAAA', '2020-06-28 00:00:00'),
	(44, 1, '_KhFGjEnpr8_AKlcAAAA', '2020-06-28 00:00:00'),
	(45, 1, '_KhFGjEnpr8_AKlcAAAA', '2020-06-28 00:00:00'),
	(46, 2, 'ccyko6FrHo_GfbiGAAAA', '2020-06-28 00:00:00'),
	(47, 1, 'zMg4cucIraLls4vmAAAA', '2020-06-28 00:00:00'),
	(48, 1, 'zMg4cucIraLls4vmAAAA', '2020-06-28 00:00:00'),
	(49, 1, 'm7dl29Kofx2gFm9nAAAB', '2020-06-28 00:00:00'),
	(50, 1, 'WHLydforaiqDt4UYAAAB', '2020-06-28 00:00:00'),
	(51, 1, 'WHLydforaiqDt4UYAAAB', '2020-06-28 00:00:00'),
	(52, 1, 'CssNhWs2QH-xl-IKAAAA', '2020-06-28 00:00:00'),
	(53, 1, 'CssNhWs2QH-xl-IKAAAA', '2020-06-28 00:00:00'),
	(54, 2, '4-V1lsNBLer5R7_pAAAB', '2020-06-28 00:00:00'),
	(55, 1, 'CssNhWs2QH-xl-IKAAAA', '2020-06-28 00:00:00'),
	(56, 1, 'CssNhWs2QH-xl-IKAAAA', '2020-06-28 00:00:00');
/*!40000 ALTER TABLE `conexiones` ENABLE KEYS */;

-- Dumping structure for table agendatelefonica.grupos
CREATE TABLE IF NOT EXISTS `grupos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `tipo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table agendatelefonica.grupos: ~2 rows (approximately)
/*!40000 ALTER TABLE `grupos` DISABLE KEYS */;
INSERT INTO `grupos` (`id`, `nombre`, `tipo`) VALUES
	(1, 'prueba', 'grupo'),
	(2, 'prueba 2', 'contacto'),
	(3, 'grupo de chat', 'grupo');
/*!40000 ALTER TABLE `grupos` ENABLE KEYS */;

-- Dumping structure for table agendatelefonica.mensajes
CREATE TABLE IF NOT EXISTS `mensajes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `mensaje` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table agendatelefonica.mensajes: ~2 rows (approximately)
/*!40000 ALTER TABLE `mensajes` DISABLE KEYS */;
INSERT INTO `mensajes` (`id`, `nombre`, `mensaje`) VALUES
	(1, 'bruster', 'mensaje 1'),
	(2, 'bruster', 'mensaje 2');
/*!40000 ALTER TABLE `mensajes` ENABLE KEYS */;

-- Dumping structure for table agendatelefonica.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `contra` varchar(400) DEFAULT NULL,
  `telefono` varchar(14) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table agendatelefonica.usuarios: ~2 rows (approximately)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `contra`, `telefono`) VALUES
	(1, 'bruster', 'bruster_24@outlook.es', '$2b$10$iIzAIDAcBA8uYzJ5cIdNCO4anTypUhLkhNJvhUy9ZCIS02ArNRQKK', '7561019626'),
	(2, 'Gerardo', 'bruster_25@outlook.es', '$2b$10$jdAB2ClYbAnJr1.1aCvi.OakCvRWnP/H7iZevv9Dn73weAfQpAG8i', '5612939070');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

-- Dumping structure for table agendatelefonica.usuariosgrupos
CREATE TABLE IF NOT EXISTS `usuariosgrupos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `grupo` int(11) DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_usuariosgrupos_grupos` (`grupo`),
  KEY `FK_usuariosgrupos_usuarios` (`usuario`),
  CONSTRAINT `FK_usuariosgrupos_grupos` FOREIGN KEY (`grupo`) REFERENCES `grupos` (`id`),
  CONSTRAINT `FK_usuariosgrupos_usuarios` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table agendatelefonica.usuariosgrupos: ~5 rows (approximately)
/*!40000 ALTER TABLE `usuariosgrupos` DISABLE KEYS */;
INSERT INTO `usuariosgrupos` (`id`, `grupo`, `usuario`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 2, 1),
	(4, 3, 1),
	(5, 3, 2);
/*!40000 ALTER TABLE `usuariosgrupos` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
