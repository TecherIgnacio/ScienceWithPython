# 🔧 <span class="lang-es">Configuración</span><span class="lang-en">Setup</span>

<div class="lang-es" markdown="1">
Antes de empezar a programar, necesitás tener Python instalado en tu computadora.
Esta guía te explica cómo hacerlo paso a paso.
</div>
<div class="lang-en" markdown="1">
Before you start coding, you need to have Python installed on your computer.
This guide walks you through it step by step.
</div>

---

## <span class="lang-es">¿Qué es Python?</span><span class="lang-en">What is Python?</span>

<div class="lang-es" markdown="1">
**Python** es un lenguaje de programación: una forma de darle instrucciones a la
computadora usando palabras casi en inglés. Es uno de los más usados del mundo,
especialmente en ciencia y tecnología.
</div>
<div class="lang-en" markdown="1">
**Python** is a programming language: a way to give instructions to a computer
using words that are almost in plain English. It's one of the most widely used
languages in the world, especially in science and technology.
</div>

---

## <span class="lang-es">Instalar Python</span><span class="lang-en">Install Python</span>

=== "Windows"

    <div class="lang-es" markdown="1">
    **Paso 1 — Descargar Python**

    1. Ir a [python.org/downloads](https://python.org/downloads)
    2. Hacer clic en el botón **"Download Python 3.x.x"**
    3. Ejecutar el instalador descargado

    **Paso 2 — Opción importante**

    > ⚠️ Antes de hacer clic en "Install Now", marcá la casilla **"Add Python to PATH"**. Esto es esencial.

    **Paso 3 — Verificar la instalación**

    Abrí el **Símbolo del sistema** (`cmd`) y escribí:
    ```
    python --version
    ```
    Si ves `Python 3.x.x`, ¡Python está instalado correctamente! 🎉
    </div>
    <div class="lang-en" markdown="1">
    **Step 1 — Download Python**

    1. Go to [python.org/downloads](https://python.org/downloads)
    2. Click the **"Download Python 3.x.x"** button
    3. Run the downloaded installer

    **Step 2 — Important option**

    > ⚠️ Before clicking "Install Now", check the box that says **"Add Python to PATH"**. This is essential.

    **Step 3 — Verify the installation**

    Open the **Command Prompt** (`cmd`) and type:
    ```
    python --version
    ```
    If you see `Python 3.x.x`, Python is installed correctly! 🎉
    </div>

=== "macOS"

    <div class="lang-es" markdown="1">
    **Paso 1 — Descargar Python**

    1. Ir a [python.org/downloads](https://python.org/downloads)
    2. Hacer clic en **"Download Python 3.x.x"** (instalador para macOS)
    3. Abrir el archivo `.pkg` descargado y seguir las instrucciones

    **Paso 2 — Verificar la instalación**

    Abrí la **Terminal** (Aplicaciones > Utilidades) y escribí:
    ```
    python3 --version
    ```
    En macOS se usa `python3` en lugar de `python`.
    </div>
    <div class="lang-en" markdown="1">
    **Step 1 — Download Python**

    1. Go to [python.org/downloads](https://python.org/downloads)
    2. Click **"Download Python 3.x.x"** (macOS installer)
    3. Open the downloaded `.pkg` file and follow the instructions

    **Step 2 — Verify the installation**

    Open the **Terminal** (Applications > Utilities) and type:
    ```
    python3 --version
    ```
    On macOS, use `python3` instead of `python`.
    </div>

=== "Linux"

    <div class="lang-es" markdown="1">
    En la mayoría de las distribuciones, Python ya viene instalado. Verificá con:
    ```
    python3 --version
    ```
    Si no está instalado (Ubuntu/Debian):
    ```
    sudo apt update && sudo apt install python3
    ```
    </div>
    <div class="lang-en" markdown="1">
    On most distributions, Python is already installed. Check with:
    ```
    python3 --version
    ```
    If it's not installed (Ubuntu/Debian):
    ```
    sudo apt update && sudo apt install python3
    ```
    </div>

---

## <span class="lang-es">Instalar VS Code</span><span class="lang-en">Install VS Code</span>

<div class="lang-es" markdown="1">
Para escribir código necesitás un editor. Recomendamos **Visual Studio Code** (VS Code):
es gratis, muy usado y fácil de aprender.

1. Descargalo desde [code.visualstudio.com](https://code.visualstudio.com)
2. Instalalo en tu sistema operativo
3. Instalá la extensión **Python** desde el panel de extensiones (ícono de cuatro cuadrados en la barra lateral)
</div>
<div class="lang-en" markdown="1">
To write code you need an editor. We recommend **Visual Studio Code** (VS Code):
it's free, widely used, and easy to learn.

1. Download it from [code.visualstudio.com](https://code.visualstudio.com)
2. Install it for your operating system
3. Install the **Python** extension from the extensions panel (four-squares icon in the sidebar)
</div>

---

## <span class="lang-es">Tu primer programa</span><span class="lang-en">Your First Program</span>

<div class="lang-es" markdown="1">
Con VS Code abierto:

1. Creá un archivo nuevo llamado `hola.py`
2. Escribí el siguiente código:
</div>
<div class="lang-en" markdown="1">
With VS Code open:

1. Create a new file called `hola.py`
2. Write the following code:
</div>

```python
print("¡Hola, universo!")
```

<div class="lang-es" markdown="1">
3. Guardá con **Ctrl+S** (Windows/Linux) o **Cmd+S** (macOS)
4. Abrí la terminal en VS Code con **Ctrl+`** y ejecutá:
```
python hola.py
```
Deberías ver `¡Hola, universo!` en pantalla. **¡Acabás de ejecutar tu primer programa Python!** 🚀
</div>
<div class="lang-en" markdown="1">
3. Save with **Ctrl+S** (Windows/Linux) or **Cmd+S** (macOS)
4. Open the terminal in VS Code with **Ctrl+`** and run:
```
python hola.py
```
You should see `¡Hola, universo!` on screen. **You just ran your first Python program!** 🚀
</div>

---

## <span class="lang-es">Enfoque híbrido</span><span class="lang-en">Hybrid Approach</span>

<div class="hybrid-info">
  <div class="hybrid-badge browser">🌐 <strong><span class="lang-es">En el navegador</span><span class="lang-en">In the browser</span></strong></div>
  <div class="hybrid-badge local">💻 <strong><span class="lang-es">En tu PC</span><span class="lang-en">On your PC</span></strong></div>
</div>

<div class="lang-es" markdown="1">
- Los ejercicios **🌐 en el navegador** se resuelven directamente en esta página, sin instalar nada. Ideales para practicar conceptos rápidamente.
- Los ejercicios **💻 en tu PC** requieren Python instalado. Tienen un botón para descargar el archivo `.py` y ejecutarlo vos mismo/a.
</div>
<div class="lang-en" markdown="1">
- **🌐 Browser** exercises can be solved directly on this page, with nothing to install. Great for quickly practicing concepts.
- **💻 PC** exercises require Python installed. They include a button to download the `.py` file and run it yourself.
</div>

!!! tip ""
    <span class="lang-es">¿Todo listo? ¡Pasá al **Módulo 1** para escribir tus primeras líneas de código!</span>
    <span class="lang-en">All set? Head to **Module 1** to write your first lines of code!</span>
