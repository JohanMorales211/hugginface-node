
# Hugging Face Node.js Text-to-Image 🎨

**Genera imágenes asombrosas a partir de texto con la potencia de Hugging Face y Node.js.**

Este proyecto te permite crear imágenes únicas utilizando el modelo de lenguaje avanzado  "black-forest-labs/FLUX.1-dev" de Hugging Face. Simplemente describe lo que quieres ver y ¡observa cómo la IA lo convierte en una realidad visual!

![Imagen generada por FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev/media/main/dev_grid.jpg)

**¡Explora la creatividad sin límites!** 🚀 Puedes clonar este repositorio y comenzar a generar tus propias imágenes.

## Características ✨

* **Fácil de usar:**  Solo necesitas Node.js y un token de acceso de Hugging Face.
* **Personalizable:** Ajusta los parámetros del modelo para obtener resultados únicos.
* **Potente:**  Aprovecha la capacidad del modelo FLUX.1-dev para generar imágenes de alta calidad.
* **Versátil:** Crea imágenes de cualquier cosa que puedas imaginar.

## Instalación 🛠️

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/JohanMorales211/hugginface-node.git
   ```
2. **Navega al directorio del proyecto:**
   ```bash
   cd hugginface-node
   ```
3. **Instala las dependencias:**
   ```bash
   npm install 
   ```

## Ejecutando la Aplicación ▶️

1. **Obtén un token de acceso de Hugging Face:**  
   Visita [Hugging Face](https://huggingface.co/) y crea una cuenta para obtener tu token de acceso.
2. **Configura el token de acceso:**https://github.com/tu-usuario/hugginface-node.git
   Crea un archivo `.env` en la raíz del proyecto y agrega la siguiente línea, reemplazando `tu_token_de_acceso` con tu token real:
   ```
   HF_ACCES_TOKEN=tu_token_de_acceso 
   ```
3. **Inicia la aplicación:**
   ```bash
   node index.js
   ```

## Cómo Funciona 🔄

1. **Modifica el prompt:** Edita el archivo `index.js` y cambia el valor de la variable `prompt` a la descripción de la imagen que deseas generar.
2. **Ejecuta el script:**  Ejecuta `node index.js` para iniciar el proceso de generación de la imagen.
3. **Observa el resultado:** La imagen generada se guardará como "image-generated.png" en el directorio del proyecto.


## Dependencias 📦

* **Node.js:** Entorno de ejecución de JavaScript.
* **@huggingface/inference:**  Librería para interactuar con la API de inferencia de Hugging Face.
* **dotenv:** Librería para cargar variables de entorno desde un archivo `.env`.

## Contribuciones 🤝

¡Las contribuciones son bienvenidas! Si encuentras algún error o quieres agregar nuevas características, no dudes en abrir un issue o enviar un pull request.

---

<div align="center">
  <p>Creado con ❤️ por [Johan Morales]</p>
  <img src="https://media.giphy.com/media/hvRJCLFzcasr6/giphy.gif" width="200" alt="Animación de IA"> 
</div>

--- 

