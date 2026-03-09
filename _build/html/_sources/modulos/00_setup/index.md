# 🔧 Configuración

<div class="lang-es">

Antes de empezar a programar, necesitás tener Python instalado en tu computadora.
Esta guía te explica cómo hacerlo paso a paso.

</div>
<div class="lang-en">

Before you start coding, you need to have Python installed on your computer.
This guide will walk you through it step by step.

</div>

---

## ¿Qué es Python? / What is Python?

<div class="lang-es">

**Python** es un lenguaje de programación. Básicamente, es una forma de darle
instrucciones a la computadora usando palabras casi en inglés.
Es uno de los lenguajes más usados del mundo, especialmente en ciencia y tecnología.

</div>
<div class="lang-en">

**Python** is a programming language. It's basically a way to give instructions
to a computer using words that are almost in plain English.
It's one of the most widely used languages in the world, especially in science and technology.

</div>

---

## Instalar Python / Install Python

::::{tab-set}

:::{tab-item} Windows

**Paso 1 — Descargar Python**

1. Ir a [python.org/downloads](https://python.org/downloads)
2. Hacer clic en el botón amarillo **"Download Python 3.x.x"**
3. Ejecutar el instalador descargado

**Paso 2 — Opciones importantes durante la instalación**

> ⚠️ **Importante:** Antes de hacer clic en "Install Now",
> marcá la casilla que dice **"Add Python to PATH"**. Esto es esencial.

**Paso 3 — Verificar la instalación**

Abrí el menú de inicio, buscá **"Símbolo del sistema"** (o `cmd`) y escribí:

```
python --version
```

Si ves algo como `Python 3.12.0`, ¡Python está instalado correctamente! 🎉

:::

:::{tab-item} macOS

**Paso 1 — Descargar Python**

1. Ir a [python.org/downloads](https://python.org/downloads)
2. Hacer clic en **"Download Python 3.x.x"** (elige el instalador para macOS)
3. Abrir el archivo `.pkg` descargado y seguir las instrucciones

**Paso 2 — Verificar la instalación**

Abrí la aplicación **Terminal** (está en Aplicaciones > Utilidades) y escribí:

```
python3 --version
```

Si ves `Python 3.x.x`, ¡listo! En macOS se usa `python3` en lugar de `python`.

:::

:::{tab-item} Linux

En la mayoría de las distribuciones Linux, Python ya viene instalado. Verificá con:

```
python3 --version
```

Si no está instalado (Ubuntu/Debian):

```
sudo apt update && sudo apt install python3
```

:::

::::

---

## Instalar un editor de código / Install a Code Editor

<div class="lang-es">

Para escribir y ejecutar código en tu computadora vas a necesitar un editor.
Recomendamos **Visual Studio Code** (VS Code): es gratis, muy usado y fácil de usar.

</div>
<div class="lang-en">

To write and run code on your computer, you'll need an editor.
We recommend **Visual Studio Code** (VS Code): it's free, widely used, and easy to get started with.

</div>

1. Descargalo desde [code.visualstudio.com](https://code.visualstudio.com)
2. <span class="lang-es">Instalalo siguiendo las instrucciones de tu sistema operativo</span><span class="lang-en">Install it following the instructions for your operating system</span>
3. <span class="lang-es">Una vez abierto, instalá la extensión **Python** (buscala en el panel de extensiones)</span><span class="lang-en">Once open, install the **Python** extension (search for it in the Extensions panel)</span>

---

## Tu primer programa en tu PC / Your First Program on Your PC

<div class="lang-es">

Con VS Code abierto:

1. Creá un archivo nuevo llamado `hola.py`
2. Escribí el siguiente código:

</div>
<div class="lang-en">

With VS Code open:

1. Create a new file called `hola.py`
2. Write the following code:

</div>

```python
print("¡Hola, universo!")
```

<div class="lang-es">

3. Guardá el archivo con **Ctrl+S** (Windows/Linux) o **Cmd+S** (macOS)
4. Abrí la terminal dentro de VS Code con **Ctrl+`** y ejecutá:

</div>
<div class="lang-en">

3. Save the file with **Ctrl+S** (Windows/Linux) or **Cmd+S** (macOS)
4. Open the terminal inside VS Code with **Ctrl+`** and run:

</div>

```
python hola.py
```

<div class="lang-es">

Deberías ver `¡Hola, universo!` en la pantalla. **¡Felicitaciones, acabás de ejecutar tu primer programa Python!** 🚀

</div>
<div class="lang-en">

You should see `¡Hola, universo!` printed on screen. **Congratulations, you just ran your first Python program!** 🚀

</div>

---

## Enfoque híbrido del curso / Hybrid Approach

<div class="lang-es">

A lo largo del curso vas a encontrar dos tipos de ejercicios, identificados por badges de color:

</div>
<div class="lang-en">

Throughout the course you'll find two types of exercises, identified by colored badges:

</div>

<div class="hybrid-info">
  <div class="hybrid-badge browser">🌐 <strong><span class="lang-es">En el navegador</span><span class="lang-en">In the browser</span></strong></div>
  <div class="hybrid-badge local">💻 <strong><span class="lang-es">En tu PC</span><span class="lang-en">On your PC</span></strong></div>
</div>

<div class="lang-es">

- Los ejercicios **🌐 en el navegador** los podés hacer directamente en esta página, sin instalar nada. Ideal para practicar conceptos rápidamente.
- Los ejercicios **💻 en tu PC** requieren que tengas Python instalado. Tienen un botón para descargar el archivo `.py` y ejecutarlo vos mismo/a.

Los ejercicios locales son importantes porque en el mundo real vas a trabajar siempre con Python en tu propia máquina. ¡Familiarizarte con ese flujo desde el principio es clave!

</div>
<div class="lang-en">

- **🌐 Browser** exercises can be done directly on this page, with no installation required. Great for quickly practicing concepts.
- **💻 PC** exercises require Python to be installed. They include a download button to get the `.py` file and run it yourself.

Local exercises matter because in the real world you'll always work with Python on your own machine. Getting familiar with that workflow from the start is key!

</div>

:::{tip}
<span class="lang-es">¿Todo listo? ¡Pasá al **Módulo 1** para escribir tus primeras líneas de código!</span>
<span class="lang-en">All set? Head to **Module 1** to write your first lines of code!</span>
:::
