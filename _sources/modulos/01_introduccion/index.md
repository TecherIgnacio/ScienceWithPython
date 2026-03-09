# 🐍 Módulo 1 — Introducción a Python

<div class="lang-es">

En este módulo vas a aprender los tres bloques fundamentales de cualquier programa Python:
**`print()`**, **variables** y **operaciones aritméticas**.
Con solo estos tres elementos ya podés resolver problemas científicos reales.

</div>
<div class="lang-en">

In this module you'll learn the three fundamental building blocks of any Python program:
**`print()`**, **variables**, and **arithmetic operations**.
With just these three elements you can already solve real scientific problems.

</div>

---

## 1. La función `print()`

<div class="lang-es">

`print()` es la forma más básica de mostrar información en pantalla.
Pensá en `print` como si le dijeras a la computadora: **"mostrá esto"**.

</div>
<div class="lang-en">

`print()` is the most basic way to display information on screen.
Think of `print` as telling the computer: **"show this"**.

</div>

### Probalo vos mismo / Try it yourself

<div class="lang-es">Hacé clic en <strong>▶ Ejecutar</strong> para ver el resultado:</div>
<div class="lang-en">Click <strong>▶ Ejecutar</strong> to see the result:</div>

```{code-block} python
:class: py-cell-browser

print("¡Hola, universo!")
print("Python es genial")
print(2025)
```

<div class="lang-es">

Observá que podés imprimir **texto** (entre comillas) y también **números** (sin comillas).

</div>
<div class="lang-en">

Notice that you can print **text** (with quotes) and also **numbers** (without quotes).

</div>

### `print()` con varios valores

<div class="lang-es">

Podés pasarle varios valores a `print()` separados por comas y los mostrará juntos con un espacio entre ellos:

</div>
<div class="lang-en">

You can pass several values to `print()` separated by commas and it will display them together with a space between them:

</div>

```{code-block} python
:class: py-cell-browser

print("La velocidad de la luz es", 300000, "km/s")
```

:::{tip}
<span class="lang-es">El texto que va entre comillas se llama <strong>cadena de texto</strong> o <em>string</em>. Podés usar comillas simples <code>'hola'</code> o dobles <code>"hola"</code>, ambas funcionan igual.</span>
<span class="lang-en">Text that goes between quotes is called a <strong>string</strong>. You can use single quotes <code>'hello'</code> or double quotes <code>"hello"</code>, both work the same way.</span>
:::

---

## 2. Variables

<div class="lang-es">

Una variable es como una **caja con etiqueta**: le ponés un nombre y guardás un valor adentro.
Cuando después usás ese nombre, Python sabe que tiene que buscar el valor en esa caja.

</div>
<div class="lang-en">

A variable is like a **labeled box**: you give it a name and store a value inside.
When you use that name later, Python knows to look for the value in that box.

</div>

```{code-block} python
:class: py-cell-browser

planeta = "Marte"
distancia_km = 225000000
temperatura_C = -63

print("Planeta:", planeta)
print("Distancia al Sol:", distancia_km, "km")
print("Temperatura promedio:", temperatura_C, "°C")
```

<div class="lang-es">

### Reglas para nombrar variables

- Los nombres solo pueden tener **letras, números y guiones bajos** (`_`)
- No pueden **empezar con un número**: `3planeta` ❌  →  `planeta3` ✅
- No pueden tener **espacios**: usa `_` en su lugar: `velocidad_luz` ✅
- Son **sensibles a mayúsculas**: `Planeta` y `planeta` son variables diferentes

</div>
<div class="lang-en">

### Rules for naming variables

- Names can only contain **letters, numbers, and underscores** (`_`)
- They cannot **start with a number**: `3planet` ❌  →  `planet3` ✅
- They cannot contain **spaces**: use `_` instead: `speed_of_light` ✅
- They are **case-sensitive**: `Planet` and `planet` are different variables

</div>

### Tipos de datos / Data Types

<div class="lang-es">En Python existen diferentes tipos de valores:</div>
<div class="lang-en">In Python there are different types of values:</div>

| Tipo / Type | <span class="lang-es">Descripción</span><span class="lang-en">Description</span> | <span class="lang-es">Ejemplo</span><span class="lang-en">Example</span> |
|---|---|---|
| `int` | <span class="lang-es">Número entero</span><span class="lang-en">Whole number</span> | `42`, `-7`, `2025` |
| `float` | <span class="lang-es">Número decimal</span><span class="lang-en">Decimal number</span> | `3.14`, `9.8`, `-273.15` |
| `str` | <span class="lang-es">Texto (string)</span><span class="lang-en">Text (string)</span> | `"Tierra"`, `'Jupiter'` |

```{code-block} python
:class: py-cell-browser

# Ejemplos de los tres tipos
año = 2025                 # int
gravedad = 9.8             # float (m/s²)
nombre_planeta = "Tierra"  # str

print(nombre_planeta, "— Gravedad:", gravedad, "m/s²  — Año:", año)
```

:::{note}
<span class="lang-es">El símbolo <code>#</code> sirve para escribir <strong>comentarios</strong>: texto que Python ignora pero que ayuda a entender el código.</span>
<span class="lang-en">The <code>#</code> symbol is used to write <strong>comments</strong>: text that Python ignores but helps understand the code.</span>
:::

---

## 3. Operaciones Aritméticas / Arithmetic Operations

<div class="lang-es">Python puede hacer cálculos matemáticos directamente:</div>
<div class="lang-en">Python can perform math calculations directly:</div>

| Operador | <span class="lang-es">Operación</span><span class="lang-en">Operation</span> | <span class="lang-es">Ejemplo</span><span class="lang-en">Example</span> | <span class="lang-es">Resultado</span><span class="lang-en">Result</span> |
|---|---|---|---|
| `+` | <span class="lang-es">Suma</span><span class="lang-en">Addition</span> | `5 + 3` | `8` |
| `-` | <span class="lang-es">Resta</span><span class="lang-en">Subtraction</span> | `10 - 4` | `6` |
| `*` | <span class="lang-es">Multiplicación</span><span class="lang-en">Multiplication</span> | `3 * 7` | `21` |
| `/` | <span class="lang-es">División</span><span class="lang-en">Division</span> | `15 / 4` | `3.75` |
| `//` | <span class="lang-es">División entera</span><span class="lang-en">Integer division</span> | `15 // 4` | `3` |
| `%` | <span class="lang-es">Módulo (resto)</span><span class="lang-en">Modulo (remainder)</span> | `15 % 4` | `3` |
| `**` | <span class="lang-es">Potencia</span><span class="lang-en">Exponentiation</span> | `2 ** 8` | `256` |

```{code-block} python
:class: py-cell-browser

# Python como calculadora
print(5 + 3)
print(10 - 4)
print(3 * 7)
print(15 / 4)   # División normal → resultado decimal
print(15 // 4)  # División entera → solo la parte entera
print(2 ** 10)  # 2 elevado a la 10
```

### Orden de operaciones / Order of Operations

<div class="lang-es">

Python sigue el mismo orden que en matemáticas: primero potencias, luego multiplicación y división, y por último suma y resta. Los paréntesis tienen prioridad sobre todo.

</div>
<div class="lang-en">

Python follows the same order as in mathematics: first exponents, then multiplication and division, and finally addition and subtraction. Parentheses take priority over everything.

</div>

```{code-block} python
:class: py-cell-browser

print(2 + 3 * 4)    # = 14  (primero 3*4=12, luego 2+12)
print((2 + 3) * 4)  # = 20  (paréntesis primero)
print(10 / 2 + 3)   # = 8.0
print(10 / (2 + 3)) # = 2.0
```

---

## Juntando todo / Putting It All Together

<div class="lang-es">

Ahora usemos `print()`, variables y operaciones para responder una pregunta científica real:
¿Cuánto tarda la luz en viajar del Sol a la Tierra?

</div>
<div class="lang-en">

Now let's use `print()`, variables, and operations to answer a real scientific question:
How long does it take light to travel from the Sun to Earth?

</div>

```{code-block} python
:class: py-cell-browser

# ¿Cuánto tarda la luz en llegar del Sol a la Tierra?

velocidad_luz = 300000          # km/s
distancia_sol_tierra = 150000000  # km

tiempo_segundos = distancia_sol_tierra / velocidad_luz
tiempo_minutos = tiempo_segundos / 60

print("La luz tarda", tiempo_segundos, "segundos")
print("O lo que es lo mismo:", tiempo_minutos, "minutos")
```

:::{tip}
<span class="lang-es">¡Modificá los valores y ejecutalo de nuevo! Por ejemplo, cambiá la distancia por la de Marte al Sol (228 millones de km).</span>
<span class="lang-en">Modify the values and run it again! For example, change the distance to Mars's distance from the Sun (228 million km).</span>
:::
