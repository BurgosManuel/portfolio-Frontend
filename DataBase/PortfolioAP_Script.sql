-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema portfolio_ap
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema portfolio_ap
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portfolio_ap` DEFAULT CHARACTER SET utf8 ;
USE `portfolio_ap` ;

-- -----------------------------------------------------
-- Table `portfolio_ap`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_ap`.`persona` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `portfolio_id` INT NULL DEFAULT NULL,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `titulo` VARCHAR(30) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `linkedin_url` VARCHAR(60) NULL DEFAULT NULL,
  `github_url` VARCHAR(60) NULL,
  `img_url` VARCHAR(100) NULL DEFAULT NULL,
  `banner_url` VARCHAR(100) NULL,
  `about_url` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_ap`.`educacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_ap`.`educacion` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `persona_id` INT(11) NOT NULL,
  `titulo` VARCHAR(45) NULL DEFAULT NULL,
  `institucion` VARCHAR(45) NULL DEFAULT NULL,
  `fecha` CHAR(11) NULL DEFAULT NULL,
  `descripcion` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  CONSTRAINT `fk_educacion_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio_ap`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_ap`.`experiencia_laboral`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_ap`.`experiencia_laboral` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `persona_id` INT(11) NOT NULL,
  `puesto` VARCHAR(45) NULL DEFAULT NULL,
  `empleador` VARCHAR(45) NULL DEFAULT NULL,
  `fecha` CHAR(11) NULL DEFAULT NULL,
  `descripcion` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  CONSTRAINT `fk_experiencia_laboral_persona`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio_ap`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_ap`.`nivel_habilidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_ap`.`nivel_habilidad` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nivel_habilidad` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_ap`.`tipo_habilidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_ap`.`tipo_habilidad` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre_tipo` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_ap`.`habilidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_ap`.`habilidad` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `tipo_habilidad_id` INT(11) NOT NULL,
  `nivel_habilidad_id` INT(11) NOT NULL,
  `persona_id` INT(11) NOT NULL,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `progreso` INT(100) NULL DEFAULT NULL,
  `icono` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `tipo_habilidad_id`, `nivel_habilidad_id`, `persona_id`),
  CONSTRAINT `fk_habilidades_nivel_habilidad1`
    FOREIGN KEY (`nivel_habilidad_id`)
    REFERENCES `portfolio_ap`.`nivel_habilidad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_habilidades_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio_ap`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_habilidades_tipos_habilidad1`
    FOREIGN KEY (`tipo_habilidad_id`)
    REFERENCES `portfolio_ap`.`tipo_habilidad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_ap`.`portfolio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_ap`.`portfolio` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `persona_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  CONSTRAINT `fk_portfolio_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio_ap`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_ap`.`proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_ap`.`proyecto` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `persona_id` INT(11) NOT NULL,
  `titulo` VARCHAR(45) NULL DEFAULT NULL,
  `descripcion` VARCHAR(500) NULL DEFAULT NULL,
  `img_url` VARCHAR(100) NULL DEFAULT NULL,
  `demo_url` VARCHAR(100) NULL DEFAULT NULL,
  `repo_url` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  CONSTRAINT `fk_proyectos_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio_ap`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_ap`.`seccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_ap`.`seccion` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `portfolio_id` INT(11) NOT NULL,
  `portfolio_persona_id` INT(11) NOT NULL,
  `titulo` VARCHAR(45) NULL DEFAULT NULL,
  `descripcion` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `portfolio_id`, `portfolio_persona_id`),
  CONSTRAINT `fk_secciones_portfolio1`
    FOREIGN KEY (`portfolio_id` , `portfolio_persona_id`)
    REFERENCES `portfolio_ap`.`portfolio` (`id` , `persona_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT persona VALUES (1, 1, "Manuel Burgos", "Desarrollador Web Fullstack", "burgossergiomanuel@gmail.com", "https://www.linkedin.com/in/manuelburgos-dev/", "https://github.com/BurgosManuel", "https://avatars.githubusercontent.com/u/83843908?v=4", "assets/hero-image.png", "assets/about.jpg");

INSERT portfolio
VALUES (1, 1);

INSERT seccion
VALUES(1, 1, 1, "Sobre Mí", "¡Hola! Soy Manuel, apasionado por la tecnología, la música y la docencia. Apunto a crecer profesionalmente como <b>Desarrollador Web Fullstack</b>.<br>Busco estar en constante formación y llevar lo aprendido a la práctica, soy responsable, empático, dedicado y curioso. Me encantaría formar parte de proyectos que me permitan desarrollarme como profesional y mejorar mis habilidades, así como también colaborar con un equipo de trabajo para cumplir objetivos.");

INSERT seccion
VALUES(2, 1, 1, "Habilidades", "Estas son algunas de mis habilidades, tanto técnicas como blandas, con las que cuento para el ámbito profesional.");

INSERT seccion
VALUES(3, 1, 1, "Proyectos", "Algunos de los proyectos en los que he trabajado haciendo uso de diversas tecnologías.");

INSERT seccion
VALUES(4, 1, 1, "Contacto", "Si tienes algún proyecto y te gustaría que forme parte del mismo, te invito a contactarme con el siguiente formulario, también puedes usarlo simplemente para dejarme algún comentario o ¡saludarme!");

INSERT tipo_habilidad
VALUES(1, "Front-End");

INSERT tipo_habilidad
VALUES(2, "Back-End");

INSERT tipo_habilidad
VALUES(3, "Soft-Skill");

INSERT nivel_habilidad
VALUES (1, "Básico");

INSERT nivel_habilidad
VALUES (2, "Intermedio");

INSERT nivel_habilidad
VALUES (3, "Avanzado");

INSERT habilidad
VALUES (1, 1, 3, 1, "HTML", 90, "fa-brands fa-html5");

INSERT habilidad
VALUES (2, 2, 1, 1, "Java/Spring Boot", 40, "fa-brands fa-java");

INSERT habilidad
VALUES (3, 3, 3, 1, "Colaborativo", 100, "fa-solid fa-people-carry-box");

INSERT educacion
VALUES (1, 1, "Desarrollo Web Fullstack", "Argentina Programa", "2021 - 2022", "Curso de Desarrollo Web FullStack donde se estudian diversas tecnologías como ser HTML, CSS, Bootstrap, Angular, Java, Spring Boot, entre otras.");

INSERT educacion
VALUES (2, 1, "Profesorado de Música - Piano", "Instituto Superior de Música de la UNT", "2018 - 2022", "Pedagogía, Psicología del Alumno, Manejo de Grupos, Planificación de Clases, Proyectos, Prácticas Profesionales, Composición, Ejecución Instrumental, Arreglos, etc.");

INSERT experiencia_laboral
VALUES(1, 1, "FullStack Web Developer", "Freelancer", "2022-2022", "Desarrollo de proyectos personales a fin de desarrollar mis habilidades.");

INSERT proyecto
VALUES (1, 1, "Portfolio - Argentina Programa #YoProgramo", "Proyecto final realizado durante el Curso de Desarrollo Web Fullstack Argentina Programa. Utiliza herramientas como HTML, CSS, JS (Angular) y Bootstrap.", "assets/project-1.png", "https://burgosmanuel.github.io/PortfolioWebFullStack/Front-End/index.html", "https://github.com/BurgosManuel/PortfolioWebFullStack/tree/main/Front-End");

INSERT proyecto
VALUES (2, 1, "Lista de Tareas - FreeCodeCamp", "Aplicación web de tipo ''To-Do List', cuenta con funciones para agregar y eliminar tareas. Realizada utilizando HTML, CSS y Angular. ", "assets/project-2.png", "https://trapecio-lista-tareas.herokuapp.com/", "https://github.com/BurgosManuel/ListaDeTareas");
