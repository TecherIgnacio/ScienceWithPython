# 🔧 Configuración

<div class="lang-es" markdown="1">
Antes de empezar a programar, necesitás tener Python instalado en tu computadora.
Esta guía te explica cómo hacerlo paso a paso.
</div>
<div class="lang-en" markdown="1">
Before you start coding, you need to have Python installed on your computer.
This guide walks you through it step by step.
</div>

---

## ¿Qué es Python? / What is Python?

<div class="lang-es" markdown="1">
**Python** es un lenguaje de programación: una forma de darle instrucciones a la computadora
usando palabras casi en inglés. Es uno de los lenguajes más usados del mundo, especialmente
en ciencia y tecnología.
</div>
<div class="lang-en" markdown="1">
**Python** is a programming language: a way to give instructions to a computer using words
that are almost in plain English. It's one of the most widely used languages in the world,
especially in science and technology.
</div>

---

## Instalar Python / Install Python

=== "Windows"

    **Paso 1 — Descargar Python**

    1. Ir a [python.org/downloads](https://python.org/downloads)
    2. Hacer clic en el botón **"Download Python 3.x.x"**
    3. Ejecutar el instalador descargado

    **Paso 2 — Opción importante**

    > ⚠️ Antes de hacer clic en "Install Now", marcá la casilla **"Add Python to PATH"**.

    **Paso 3 — Verificar**

    Abrí el **Símbolo del sistema** (`cmd`) y escribí:
    ```
    python --version
    ```
    Si ves `Python 3.x.x`, ¡Python está instalado! 🎉

=== "macOS"

    **Paso 1 — Descargar Python**

    1. Ir a [python.org/downloads](https://python.org/downloads)
    2. Hacer clic en **"Download Python 3.x.x"** (instalador para macOS)
    3. Abrir el `.pkg` descargado y seguir las instrucciones

    **Paso 2 — Verificar**

    Abrí la **Terminal** (Aplicaciones > Utilidades) y escribí:
    ```
    python3 --version
    ```
    En macOS se usa `python3` en lugar de `python`.

=== "Linux"

    En la mayoría de las distribuciones, Python ya viene instalado. Verificá con:
    ```
    python3 --version
    ```
    Si no está (Ubuntu/Debian):
    ```
    sudo apt update && sudo apt install python3
    ```

---

## Instalar VS Code

<div class="lang-es" markdown="1">
Para escribir código necesitás un editor. Recomendamos **Visual Studio Code** (VS Code):
es gratis, muy usado y fácil de aprender.
</div>
<div class="lang-en" markdown="1">
To write code you need an editor. We recommend **Visual Studio Code** (VS Code):
it's free, widely used, and easy to learn.
</div>

1. Descargalo desde [code.visualstudio.com](https://code.visualstudio.com)
2. <span class="lang-es">Instalalo en tu sistema operativo</span><span class="lang-en">Install it for your operating system</span>
3. <span class="lang-es">Instalá la extensión **Python** desde el panel de extensiones</span><span class="lang-en">Install the **Python** extension from the extensions panel</span>

---

## Tu primer programa / Your First Program

<div class="lang-es" markdown="1">
1. Creá un archivo llamado `hola.py`
2. Escribí el siguiente código:
</div>
<div class="lang-en" markdown="1">
1. Create a file called `hola.py`
2. Write the following code:
</div>

```python
print("¡Hola, universo!")
```

<div class="lang-es" markdown="1">
3. Guardá con **Ctrl+S**
4. Abrí la terminal en VS Code (**Ctrl+`**) y ejecutá:
```
python hola.py
```
¡Deberías ver `¡Hola, universo!` en pantalla! 🚀
</div>
<div class="lang-en" markdown="1">
3. Save with **Ctrl+S**
4. Open the terminal in VS Code (**Ctrl+`**) and run:
```
python hola.py
```
You should see `¡Hola, universo!` on screen! 🚀
</div>

---

## Enfoque híbrido / Hybrid Approach

<div class="hybrid-info">
  <div class="hybrid-badge browser">🌐 <strong>En el navegador</strong></div>
  <div class="hybrid-badge local">💻 <strong>En tu PC</strong></div>
</div>

<div class="lang-es" markdown="1">
- Los ejercicios **🌐 en el navegador** los podés hacer directamente en esta página, sin instalar nada.
- Los ejercicios **💻 en tu PC** requieren Python instalado. Tienen un botón para descargar el archivo `.py`.
</div>
<div class="lang-en" markdown="1">
- **🌐 Browser** exercises can be done directly on this page, no installation needed.
- **💻 PC** exercises require Python installed. They have a button to download the `.py` file.
</div>

!!! tip "¿Todo listo? / All set?"
    <span class="lang-es">¡Pasá al **Módulo 1** para escribir tus primeras líneas de código!</span>
    <span class="lang-en">Head to **Module 1** to write your first lines of code!</span>
