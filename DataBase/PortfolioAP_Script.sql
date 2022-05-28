-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema portfolio_manuel
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema portfolio_manuel
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `portfolio_manuel` DEFAULT CHARACTER SET utf8 ;
USE `portfolio_manuel` ;

-- -----------------------------------------------------
-- Table `portfolio_manuel`.`persona`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_manuel`.`persona` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `titulo` VARCHAR(30) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `img_url` VARCHAR(100) NULL DEFAULT NULL,
  `linkedin_url` VARCHAR(60) NULL DEFAULT NULL,
  `portfolio_id` VARCHAR(60) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_manuel`.`educacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_manuel`.`educacion` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `persona_id` INT(11) NOT NULL,
  `titulo` VARCHAR(45) NULL DEFAULT NULL,
  `institucion` VARCHAR(45) NULL DEFAULT NULL,
  `fecha` CHAR(11) NULL DEFAULT NULL,
  `descripcion` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  CONSTRAINT `fk_educacion_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio_manuel`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_manuel`.`experiencia_laboral`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_manuel`.`experiencia_laboral` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `persona_id` INT(11) NOT NULL,
  `puesto` VARCHAR(45) NULL DEFAULT NULL,
  `empleador` VARCHAR(45) NULL DEFAULT NULL,
  `fecha` CHAR(11) NULL DEFAULT NULL,
  `descripcion` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  CONSTRAINT `fk_experiencia_laboral_persona`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio_manuel`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_manuel`.`nivel_habilidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_manuel`.`nivel_habilidad` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nivel_habilidad` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_manuel`.`tipo_habilidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_manuel`.`tipo_habilidad` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre_tipo` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_manuel`.`habilidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_manuel`.`habilidades` (
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
    REFERENCES `portfolio_manuel`.`nivel_habilidad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_habilidades_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio_manuel`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_habilidades_tipos_habilidad1`
    FOREIGN KEY (`tipo_habilidad_id`)
    REFERENCES `portfolio_manuel`.`tipo_habilidad` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_manuel`.`portfolio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_manuel`.`portfolio` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `persona_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `persona_id`),
  CONSTRAINT `fk_portfolio_persona1`
    FOREIGN KEY (`persona_id`)
    REFERENCES `portfolio_manuel`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_manuel`.`proyectos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_manuel`.`proyectos` (
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
    REFERENCES `portfolio_manuel`.`persona` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `portfolio_manuel`.`secciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `portfolio_manuel`.`secciones` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `portfolio_id` INT(11) NOT NULL,
  `portfolio_persona_id` INT(11) NOT NULL,
  `titulo` VARCHAR(45) NULL DEFAULT NULL,
  `descripcion` VARCHAR(500) NULL DEFAULT NULL,
  `section_img` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `portfolio_id`, `portfolio_persona_id`),
  CONSTRAINT `fk_secciones_portfolio1`
    FOREIGN KEY (`portfolio_id` , `portfolio_persona_id`)
    REFERENCES `portfolio_manuel`.`portfolio` (`id` , `persona_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT persona VALUES (NULL, "Manuel Burgos", "Desarrollador Web Fullstack", "burgossergiomanuel@gmail.com", "https://avatars.githubusercontent.com/u/83843908?v=4", "https://www.linkedin.com/in/manuelburgos-dev/", "https://github.com/BurgosManuel");

INSERT portfolio
VALUES (NULL, 1);

INSERT secciones
VALUES(NULL, 1, 1, "Hero", NULL, "assets/hero-image.png");

INSERT secciones
VALUES(NULL, 1, 1, "Sobre Mí", "¡Hola! Soy Manuel, apasionado por la tecnología, la música y la docencia. Apunto a crecer profesionalmente como <b>Desarrollador Web Fullstack</b>.<br>Busco estar en constante formación y llevar lo aprendido a la práctica, soy responsable, empático, dedicado y curioso. Me encantaría formar parte de proyectos que me permitan desarrollarme como profesional y mejorar mis habilidades, así como también colaborar con un equipo de trabajo para cumplir objetivos.", "assets/about.jpg");

INSERT secciones
VALUES(NULL, 1, 1, "Habilidades", "Estas son algunas de mis habilidades, tanto técnicas como blandas, con las que cuento para el ámbito profesional.", NULL);

INSERT secciones
VALUES(NULL, 1, 1, "Proyectos", "Algunos de los proyectos en los que he trabajado haciendo uso de diversas tecnologías." , NULL);

INSERT secciones
VALUES(NULL, 1, 1, "Contacto", "Si tienes algún proyecto y te gustaría que forme parte del mismo, te invito a contactarme con el siguiente formulario, también puedes usarlo simplemente para dejarme algún comentario o ¡saludarme!" , NULL);

INSERT tipo_habilidad
VALUES(NULL, "Front-End");

INSERT tipo_habilidad
VALUES(NULL, "Back-End");

INSERT tipo_habilidad
VALUES(NULL, "Soft-Skill");

INSERT nivel_habilidad
VALUES (NULL, "Básico");

INSERT nivel_habilidad
VALUES (NULL, "Intermedio");

INSERT nivel_habilidad
VALUES (NULL, "Avanzado");

INSERT habilidades
VALUES (NULL, 1, 3, 1, "HTML", 90, "fa-brands fa-html5");

INSERT habilidades
VALUES (NULL, 2, 1, 1, "Java/Spring Boot", 40, "fa-brands fa-java");

INSERT habilidades
VALUES (NULL, 3, 3, 1, "Colaborativo", 100, "fa-solid fa-people-carry-box");

INSERT educacion
VALUES (NULL, 1, "Desarrollo Web Fullstack", "2021 - 2022", "Argentina Programa", "Curso de Desarrollo Web FullStack donde se estudian diversas tecnologías como ser HTML, CSS, Bootstrap, Angular, Java, Spring Boot, entre otras.");

INSERT educacion
VALUES (NULL, 1, "Profesorado de Música - Piano", "2018 - 2022", "Instituto Superior de Música de la UNT", "Pedagogía, Psicología del Alumno, Manejo de Grupos, Planificación de Clases, Proyectos, Prácticas Profesionales, Composición, Ejecución Instrumental, Arreglos, etc.");

INSERT experiencia_laboral
VALUES(NULL, 1, "FullStack Web Developer", "2022-2022", "Freelancer", "Desarrollo de proyectos personales a fin de desarrollar mis habilidades.");

INSERT proyectos
VALUES (NULL, 1, "Portfolio - Argentina Programa #YoProgramo", "Proyecto final realizado durante el Curso de Desarrollo Web Fullstack Argentina Programa. Utiliza herramientas como HTML, CSS, JS (Angular) y Bootstrap.", "assets/project-1.png", "https://burgosmanuel.github.io/PortfolioWebFullStack/Front-End/index.html", "https://github.com/BurgosManuel/PortfolioWebFullStack/tree/main/Front-End");

INSERT proyectos
VALUES (NULL, 1, "Lista de Tareas - FreeCodeCamp", "Aplicación web de tipo ''To-Do List', cuenta con funciones para agregar y eliminar tareas. Realizada utilizando HTML, CSS y Angular. ", "assets/project-2.png", "https://trapecio-lista-tareas.herokuapp.com/", "https://github.com/BurgosManuel/ListaDeTareas");
