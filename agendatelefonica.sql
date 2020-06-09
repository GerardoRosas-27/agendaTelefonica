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

-- Dumping structure for table agendatelefonica.contactos
CREATE TABLE IF NOT EXISTS `contactos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_contactos_usuarios` (`usuario`),
  CONSTRAINT `FK_contactos_usuarios` FOREIGN KEY (`usuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table agendatelefonica.contactos: ~0 rows (approximately)
/*!40000 ALTER TABLE `contactos` DISABLE KEYS */;
INSERT INTO `contactos` (`id`, `nombre`, `telefono`, `correo`, `fecha`, `usuario`) VALUES
	(12, 'gerardo', '2424234', 'bruster@outlook.es', '2025-07-24 05:00:00', 1),
	(14, 'gerarado', '2423432432', 'bruster', '2020-06-24 05:00:00', 3),
	(15, 'gerardo', '24324234', 'bruster@outlook.es', '2020-06-18 05:00:00', 1);
/*!40000 ALTER TABLE `contactos` ENABLE KEYS */;

-- Dumping structure for table agendatelefonica.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `contra` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table agendatelefonica.usuarios: ~2 rows (approximately)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `contra`) VALUES
	(1, 'Gerardo Rosas 2', 'bruster@outlook.es', '$2b$10$np9kCS.c0KOvea6cjQ5NcOBiwiqa7KB81Ow4UgdwhoVETERXcc.v6'),
	(2, 'bruster', 'bruster_24@outlook.es', '$2b$10$E2mkSGRyumQrp5Hdk6geweV80qnQ0sWbxus/DBZqnbYNGaPwZ3qSK'),
	(3, 'bruster', 'bruster_25@outlook.es', '$2b$10$uLfj7KAdfV9eVB1yxnimUOS1b.4qu06P4ZkrzEU/yamXUBEleBokm');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
