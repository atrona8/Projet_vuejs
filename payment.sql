-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: payment
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id_account` int NOT NULL AUTO_INCREMENT,
  `balance` decimal(19,9) NOT NULL DEFAULT '0.000000000',
  `currency` varchar(45) DEFAULT 'XOF',
  `userId` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_account`),
  UNIQUE KEY `userId_UNIQUE` (`userId`),
  KEY `fk_userid_idx` (`userId`),
  CONSTRAINT `fk_userid_account` FOREIGN KEY (`userId`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (7,1000000.000000000,NULL,'test','2022-08-02 19:06:46','2022-08-02 19:06:46'),(8,124356.000000000,'EURO','atrona8@gmail.com','2022-08-03 05:50:01','2022-08-03 10:48:01'),(11,1000000.000000000,NULL,'test12','2022-08-03 13:22:36','2022-08-03 13:22:36');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id_article` int NOT NULL AUTO_INCREMENT,
  `unitPrice` decimal(19,9) NOT NULL,
  `quantity` int NOT NULL,
  `totalPrice` decimal(19,9) NOT NULL,
  `sellerId` varchar(100) NOT NULL,
  `reference` varchar(100) DEFAULT NULL,
  `created-at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_article`),
  KEY `fk_seller_article_idx` (`sellerId`),
  CONSTRAINT `fk_seller_article` FOREIGN KEY (`sellerId`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (5,1000.000000000,0,2000.000000000,'test','Nom article','2022-08-03 06:37:49','2022-08-03 08:14:46'),(6,1000.000000000,2,2000.000000000,'test','Iphone 19','2022-08-03 10:42:32','2022-08-03 14:41:02'),(7,900.000000000,0,2700.000000000,'test','Adidas azertyu','2022-08-03 10:43:22','2022-08-03 13:44:30'),(8,900.000000000,0,2700.000000000,'test','Mac','2022-08-03 10:52:00','2022-08-03 13:44:30'),(9,1000.000000000,0,7000.000000000,'test','Produit 500','2022-08-03 13:35:54','2022-08-03 13:44:30'),(10,2999.000000000,5,14995.000000000,'test','Moto T-MAX','2022-08-05 02:05:39','2022-08-05 02:05:39'),(11,4.000000000,4,16.000000000,'atrona8@gmail.com','test','2022-08-05 13:00:41','2022-08-05 13:00:41'),(12,5.000000000,5,25.000000000,'atrona8@gmail.com','azert','2022-08-05 13:03:37','2022-08-05 13:03:37'),(13,10000.000000000,1,10000.000000000,'atrona8@gmail.com','testproduit','2022-08-11 06:04:46','2022-08-11 06:04:46'),(14,10000.000000000,1,10000.000000000,'atrona8@gmail.com','testproduit','2022-08-11 06:05:43','2022-08-11 06:05:43');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profil`
--

DROP TABLE IF EXISTS `profil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profil` (
  `id_profil` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `userId` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_profil`),
  UNIQUE KEY `userId_UNIQUE` (`userId`),
  KEY `fk_userid_idx` (`userId`),
  CONSTRAINT `fk_userid` FOREIGN KEY (`userId`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profil`
--

LOCK TABLES `profil` WRITE;
/*!40000 ALTER TABLE `profil` DISABLE KEYS */;
INSERT INTO `profil` VALUES (73,'atrona8','SYLLA','Mali',21,'atrona8@gmail.com','2022-08-03 05:49:54','2022-08-03 05:49:54'),(74,'nom modif','test','71223445',18,'test12','2022-08-03 13:18:52','2022-08-03 13:18:52');
/*!40000 ALTER TABLE `profil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `identifier` varchar(100) NOT NULL,
  `status` varchar(45) DEFAULT 'valide',
  `amount` decimal(19,9) NOT NULL,
  `currency` varchar(45) DEFAULT 'XOF',
  `taxes` int DEFAULT '0',
  `fees` decimal(19,9) NOT NULL,
  `addedFees` decimal(19,9) NOT NULL,
  `finalAmount` decimal(19,9) GENERATED ALWAYS AS ((((((1 + (`taxes` / 100)) * `quantity`) * `amount`) + `fees`) + `addedFees`)) VIRTUAL,
  `quantity` int NOT NULL DEFAULT '1',
  `userId` varchar(100) NOT NULL,
  `articleId` int NOT NULL,
  `sellerId` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`identifier`),
  UNIQUE KEY `identifier_UNIQUE` (`identifier`),
  KEY `fk_userid_transaction_idx` (`userId`),
  KEY `fk_articleid_transaction_idx` (`articleId`),
  KEY `fk_seller_idx` (`sellerId`),
  CONSTRAINT `fk_articleid_transaction` FOREIGN KEY (`articleId`) REFERENCES `article` (`id_article`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_seller` FOREIGN KEY (`sellerId`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_userid_transaction` FOREIGN KEY (`userId`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` (`identifier`, `status`, `amount`, `currency`, `taxes`, `fees`, `addedFees`, `quantity`, `userId`, `articleId`, `sellerId`, `created_at`, `updated_at`) VALUES ('45364T76GHJI7','valide',1000.000000000,'F',18,10.000000000,10.000000000,0,'atrona8@gmail.com',5,'test','2022-08-03 13:44:30','2022-08-03 13:44:30'),('nom transaction','valide',1000.000000000,'F',18,10.000000000,10.000000000,2,'atrona8@gmail.com',5,'test','2022-08-03 08:14:46','2022-08-03 08:14:46');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `transaction_AFTER_INSERT` AFTER INSERT ON `transaction` FOR EACH ROW BEGIN
	UPDATE article 
    SET article.quantity = article.quantity  - quantity ;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `email` varchar(50) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `password` text NOT NULL,
  `category` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`email`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('atrona8@gmail.com','0785825702','$2b$10$yTCuifzonr8pnrZN.PiDSOHuL1l8.u9FM47raxrZbPREMRPmNFFqS','marchand','2022-08-03 05:49:52','2022-08-05 05:33:12'),('test','712234455','$2b$10$yNtNA7Fjzv0lvH1QUKBSTO9aR./WKtk6FdmkwZ7UMymGWunRzcS16','client','2022-07-29 01:17:32','2022-07-29 01:17:32'),('test12','712234455','$2b$10$1y777KUQG8mvjAVFUrHZo.ItEVbdxOKcy2Kx3n9/Agm0rEShRUeDO','client','2022-08-03 13:07:40','2022-08-03 13:07:40'),('test13','712234455','$2b$10$x.zVGlJsz7fAoTfNmuscnu8kU/gAhCNldwvFBTjHgXtIOSW5fGNYy','client','2022-08-03 13:08:22','2022-08-03 13:08:22'),('tet@test.test','+22177777777','$2b$10$mU2UxBw/t073PpITYWn5jOoHY9YLzPX9D/dtTVY61EKww4p.mLkT2','testeur','2022-08-11 06:05:43','2022-08-11 06:05:43');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-11  6:14:09
