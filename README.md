# Demo Prueba - GitHub Actions (CI/CD)

**Actividad académica del Instituto Khipu.** Este proyecto sencillo muestra el funcionamiento de GitHub Actions. No está relacionado con ningún hotel ni empresa.

## ¿Qué hace la demo?

1. Contiene una página llamada **Demo Prueba** con una calculadora de suma.
2. Ejecuta **6 pruebas automáticas** con Node.js cuando se suben cambios a `main` o se crea un pull request.
3. Si las pruebas pasan en `main`, publica automáticamente `site/` en GitHub Pages.
4. Si una prueba falla, **el despliegue no se ejecuta**.

## 1. Crear repositorio

1. Abre https://github.com/new e inicia sesión.
2. Nombre del repositorio: `demo-prueba`.
3. Visibilidad: **Public**.
4. Deja desactivado **Add README** porque ya incluimos uno.
5. Haz clic en **Create repository**. Verifica que la rama principal sea `main`.

## 2. Subir los archivos

1. Descomprime el ZIP.
2. En el repositorio, pulsa **uploading an existing file** o **Add file > Upload files**.
3. Sube el **contenido** de la carpeta, sin agregar una carpeta extra. **Importante**: conserva la ruta `.github/workflows/ci-cd.yml`. En algunos sistemas `.github` está oculta. Si el navegador no permite subir correctamente esta carpeta, crea `.github/workflows/ci-cd.yml` desde el editor de GitHub y pega el contenido correspondiente.
4. En **Commit changes**, guarda los archivos directamente en `main`.

## 3. Configurar GitHub Pages

1. Abre **Settings > Pages** en el repositorio.
2. En **Build and deployment**, elige **Source: GitHub Actions**.

## 4. Ver el pipeline

1. Abre **Actions**.
2. Selecciona **CI-CD - Demo Prueba**.
3. Abre la última ejecución: primero corre **CI - Pruebas automáticas**.
4. Si las seis pruebas aprueban, corre **CD - Publicar en GitHub Pages**.
5. Abre **Settings > Pages > Visit site** o la URL indicada en el despliegue. Será parecida a `https://TU-USUARIO.github.io/demo-prueba/`.
6. Si una ejecución iniciada antes de configurar Pages falla en la publicación, puedes ejecutarla nuevamente desde **Actions > CI-CD - Demo Prueba > Run workflow**.

## 5. Cómo demostrar CI/CD al profesor

**Caso exitoso:**
1. Abre `site/index.html` en GitHub y pulsa el ícono de editar.
2. Cambia un texto visible de la página (por ejemplo el título principal).
3. Haz clic en **Commit changes** en `main`.
4. Abre **Actions** y observa las pruebas en verde y el despliegue.
5. Actualiza la página publicada para mostrar el cambio.

**Caso fallido (opcional):**
1. Abre `tests/logic.test.mjs` en GitHub y edita la primera prueba.
2. Cambia `assert.equal(sumar(2, 3), 5)` por `assert.equal(sumar(2, 3), 999)`.
3. Guarda los cambios en `main` y entra a **Actions**.
4. La primera prueba fallará y el trabajo de despliegue se omitirá.
5. **Corrige de inmediato** el valor `999` a `5` y guarda el archivo. Un nuevo pipeline ejecutará las pruebas correctamente y volverá a permitir la publicación.

Para evitar tocar la página publicada en una demostración de equipo, es mejor crear una rama, introducir ahí el error, generar un pull request y observar CI sin despliegue.

## Estructura del proyecto

```text
.github/workflows/ci-cd.yml  # Automatización CI/CD
site/index.html              # Página de demostración
site/styles.css              # Estilos de la página
site/app.js                  # Interacción de la calculadora
site/logic.mjs               # Función sumar
 tests/logic.test.mjs        # Seis pruebas automáticas
package.json                 # Comando npm test
README.md                    # Esta guía
```

## Verificar pruebas localmente (opcional)

Con Node.js 22 o superior, ejecuta `npm test`. Para visualizar la página localmente se recomienda un servidor estático, por ejemplo `python -m http.server 8000 --directory site`, y abrir `http://localhost:8000`.

## Documentación

- https://docs.github.com/en/actions/get-started/understand-github-actions
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
