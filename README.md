# 💻 Portfolio Web - #YoProgramo
![GitHub Release Date](https://img.shields.io/github/release-date/burgosmanuel/portfolio-frontend) ![GitHub followers](https://img.shields.io/github/followers/burgosmanuel?style=social)

*NOTA: En este repositorio se encuentra todo lo relacionado al **Frontend** del proyecto, para dirigirse al repositorio del **Backend** **[hacer click aquí](http://github.com/BurgosManuel/portfolio-Backend "aquí").***
## 📝 Descripción
- ***Portfolio Web Fullstack*** realizado como Proyecto Final del curso **Argentina Programa - #YoProgramo**.

- Se trata de una **Single Page Application (SPA)** realizada utilizando tecnologías Frontend como ser **HTML, CSS, Angular y Bootstrap**.

- La **primera versión** se encuentra disponible [en este enlace](http://burgosmanuel.ar "en este enlace").

## ✅ Manejo de la App
- Utilizando diversas herramientas de Angular como ser *Directives*, *Binding*, *Routing*, *Event Emitters*, *Input/Output*, *Interceptors* y *Services*; se implementaron las siguientes funcionalidades. 

1. Podemos ingresar con nuestros datos o crear una cuenta de usuario a través del apartado <b>"Ingresar"</b> en la barra de navegación y apretando en <b>"Registrarse"</b>.
<div align="center">
<img src="https://user-images.githubusercontent.com/83843908/185225455-d9c5fce9-da2b-490b-9eab-000caac98da5.png"><img src="https://user-images.githubusercontent.com/83843908/185225702-25f92470-462c-4ff9-b38c-332afca32965.png">
</div>
<br>
2. Cada usuario tiene su propio <b>Portfolio Personal</b> , una vez ingresada a la cuenta, se pueden modificar la información a través de los distintos elementos en la interfaz como ser:
<div align="center">
<img src="https://user-images.githubusercontent.com/83843908/185227225-abeeae3b-2a62-47e8-b0c8-ae15abea99db.png">
</div>
<br>
3. Podemos <b>compartir nuestro portfolio</b> de manera pública apretando en el botón <b>"Compartir"</b> que se encuentra en la barra de navegación, esto copiará la URL de nuestro portfolio al portapapeles.
<div align="center">
<img src="https://user-images.githubusercontent.com/83843908/185227497-4357fe88-1db7-4191-a2a1-de09ff544587.png">
</div>
<br>

## ⌨🖱 Instalación
- Si queremos correr la aplicación en un entorno local debemos tener en cuenta lo siguiente: 

1. Clonar el repositorio utilizando GIT o descargando el archivo ZIP:

    `git clone https://github.com/BurgosManuel/portfolio-Frontend.git`

2. Instalar las dependencias a través de NPM.

    `npm install`

3. Configurar las variables de entornos en src/enviroments/enviroment.ts, donde configuraremos 3 propiedades:

- **baseUrl**: La URL de base para las conexiones con nuestra API REST. EJ:

  `baseUrl: "http://localhost:8080"`
  
- **authApi**: La URL para realizar las autenticaciones en nuestra API REST. EJ: 

  `authApi: "http://localhost:8080/api/auth"`

- **frontUrl**: La URL para redireccionar y realizar distintas operaciones en nuestro Frontend. EJ:

  `frontUrl: "http://localhost:4200/portfolio/"` (incluir el *slash* o *barra diagonal* al final).

4. Compilar y montar el proyecto utilizando el comando `ng serve`

5. **IMPORTANTE:** Debemos tener un servidor con el proyecto *Backend* activo para poder obtener los datos y registrar usuarios, caso contrario, no se renderizarán los componentes de Angular. Para más información ir al **[repositorio backend.](http://github.com/BurgosManuel/portfolio-Backend "repositorio backend.")**

## 📩 Contacto
🙋‍♂️Si tienes dudas o te interesa ponerte en contacto conmigo podés hacerlo a través de:
**[LinkedIn ](https://linkedin.com/in/burgosmanuel-dev) - [Github ](https://github.com/BurgosManuel) - [Web](https://burgosmanuel.ar)**
