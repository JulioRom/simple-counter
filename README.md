# Simple Counter - React 

## Descripción

Simple Counter es una aplicación desarrollada con React que actúa como un contador versátil. Puede funcionar en modo progresivo o regresivo, e incluye opciones avanzadas como alertas personalizables al alcanzar un tiempo específico. Su diseño es responsivo gracias a Bootstrap, ofreciendo una interfaz moderna y funcional.

---

## Características

- **Modo Progresivo:** Incrementa los segundos automáticamente desde 0.
- **Modo Regresivo:** Cuenta hacia atrás desde un número configurado.
- **Control de Funcionalidades:** Opciones para pausar, reanudar y reiniciar el contador.
- **Alertas Personalizables:** Notifica al usuario cuando se alcanza un tiempo específico.
- **Diseño Responsivo:** Compatible con dispositivos móviles y de escritorio.

---

## Tecnologías Utilizadas

- **React.js**: Manejo de componentes y estado.
- **Bootstrap**: Estilo y diseño responsivo.
- **Font Awesome**: Íconos utilizados en el contador.
- **JavaScript (ES6+)**: Lógica del contador.

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JulioRom/simple-counter.git

2. Navega al directorio del proyecto:
   ```bash
    cd simple-counter
3. Instala las dependencias:
   ```bash
    npm install
4. Inicia el servidor de desarrollo:
   ```bash
    npm run start

## Estructura del Proyecto
- **App.jsx**: Componente principal que maneja el estado y lógica del contador.
- **SecondsCounter.jsx**: Componente personalizado que representa los dígitos del contador.
- **index.js**: Punto de entrada que monta la aplicación.

## Uso

### Modo Progresivo:
- El contador comienza a incrementar automáticamente al iniciar la aplicación.
- Usa el botón **"Start Progressive"** para volver al modo progresivo después de usar la cuenta regresiva.

### Modo Regresivo:
- Usa los botones **"Countdown 10s"** o **"Countdown 30s"** para iniciar una cuenta regresiva desde el valor indicado.

### Control del Contador:
- **Resume:** Reanuda el contador (progresivo o regresivo).
- **Stop:** Pausa el contador.
- **Reset:** Reinicia el contador a 0.

### Alertas:
- Configura alertas personalizadas usando los botones de **"Alert at 10s"** o **"Alert at 20s"**. Se mostrará un mensaje cuando el tiempo alcanzado coincida con el valor configurado.

## Contribuciones
¡Tu contribución es bienvenida! Sigue estos pasos para colaborar:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios:
   ```bash
   git checkout -b feature-nombre
3. Realiza tus cambios y haz un commit:
    ```bash
    git commit -m "Descripción de tus cambios"
4. Envía un pull request para revisión.

## Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

## Autor

- **Desarrollado por JulioRom**  
- **Contacto:** [julioandrescampos@gmail.com](mailto:julioandrescampos@gmail.com)  
- **GitHub:** [https://github.com/JulioRom](https://github.com/JulioRom)






