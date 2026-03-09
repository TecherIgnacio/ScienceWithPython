# 🐍 Módulo 1 — Introducción a Python

<div class="lang-es" markdown="1">
En este módulo vas a aprender los tres bloques fundamentales de cualquier programa Python:
**`print()`**, **variables** y **operaciones aritméticas**.
Con solo estos tres elementos ya podés resolver problemas científicos reales.
</div>
<div class="lang-en" markdown="1">
In this module you'll learn the three fundamental building blocks of any Python program:
**`print()`**, **variables**, and **arithmetic operations**.
With just these three elements you can already solve real scientific problems.
</div>

---

## 1. La función `print()`

<div class="lang-es" markdown="1">
`print()` es la forma más básica de mostrar información en pantalla.
Pensá en `print` como si le dijeras a la computadora: **"mostrá esto"**.
</div>
<div class="lang-en" markdown="1">
`print()` is the most basic way to display information on screen.
Think of `print` as telling the computer: **"show this"**.
</div>

<div class="lang-es">Hacé clic en <strong>▶ Ejecutar</strong> para ver el resultado:</div>
<div class="lang-en">Click <strong>▶ Ejecutar</strong> to see the result:</div>

```python
# @browser
print("¡Hola, universo!")
print("Python es genial")
print(2025)
```

<div class="lang-es" markdown="1">
Observá que podés imprimir **texto** (entre comillas) y también **números** (sin comillas).
</div>
<div class="lang-en" markdown="1">
Notice that you can print **text** (with quotes) and also **numbers** (without quotes).
</div>

### `print()` con varios valores

<div class="lang-es" markdown="1">
Podés pasarle varios valores separados por comas y los mostrará juntos:
</div>
<div class="lang-en" markdown="1">
You can pass several values separated by commas and it will display them together:
</div>

```python
# @browser
print("La velocidad de la luz es", 300000, "km/s")
```

!!! tip "String"
    <span class="lang-es">El texto entre comillas se llama **cadena de texto** o *string*. Podés usar `'hola'` o `"hola"`, ambas funcionan igual.</span>
    <span class="lang-en">Text between quotes is called a **string**. You can use `'hello'` or `"hello"`, both work the same way.</span>

---

## 2. Variables

<div class="lang-es" markdown="1">
Una variable es como una **caja con etiqueta**: le ponés un nombre y guardás un valor adentro.
Cuando después usás ese nombre, Python sabe qué valor usar.
</div>
<div class="lang-en" markdown="1">
A variable is like a **labeled box**: you give it a name and store a value inside.
When you use that name later, Python knows what value to use.
</div>

```python
# @browser
planeta = "Marte"
distancia_km = 225000000
temperatura_C = -63

print("Planeta:", planeta)
print("Distancia al Sol:", distancia_km, "km")
print("Temperatura promedio:", temperatura_C, "C")
```

<div class="lang-es" markdown="1">

### Reglas para nombrar variables

- Solo pueden tener **letras, números y guiones bajos** (`_`)
- No pueden **empezar con un número**: `3planeta` ❌ → `planeta3` ✅
- No pueden tener **espacios**: `velocidad_luz` ✅
- Son **sensibles a mayúsculas**: `Planeta` y `planeta` son diferentes

</div>
<div class="lang-en" markdown="1">

### Rules for naming variables

- Can only contain **letters, numbers, and underscores** (`_`)
- Cannot **start with a number**: `3planet` ❌ → `planet3` ✅
- Cannot contain **spaces**: `speed_of_light` ✅
- Are **case-sensitive**: `Planet` and `planet` are different

</div>

### Tipos de datos / Data Types

| Tipo | <span class="lang-es">Descripción</span><span class="lang-en">Description</span> | <span class="lang-es">Ejemplo</span><span class="lang-en">Example</span> |
|---|---|---|
| `int` | <span class="lang-es">Número entero</span><span class="lang-en">Whole number</span> | `42`, `-7` |
| `float` | <span class="lang-es">Número decimal</span><span class="lang-en">Decimal number</span> | `3.14`, `9.8` |
| `str` | <span class="lang-es">Texto</span><span class="lang-en">Text</span> | `"Tierra"` |

Esto es sumamente importante cuando queremos, por ejemplo, 

```python
# @browser
anio = 2025                # int
gravedad = 9.8             # float (m/s²)
nombre_planeta = "Tierra"  # str

print(nombre_planeta, "— Gravedad:", gravedad, "m/s² — Año:", anio)
```

!!! note "Comentarios / Comments"
    <span class="lang-es">El símbolo `#` sirve para escribir **comentarios**: texto que Python ignora pero que ayuda a entender el código.</span>
    <span class="lang-en">The `#` symbol is used to write **comments**: text that Python ignores but helps understand the code.</span>

---

## 3. Operaciones Aritméticas / Arithmetic Operations

| Operador | <span class="lang-es">Operación</span><span class="lang-en">Operation</span> | <span class="lang-es">Ejemplo</span><span class="lang-en">Example</span> | <span class="lang-es">Resultado</span><span class="lang-en">Result</span> |
|---|---|---|---|
| `+` | <span class="lang-es">Suma</span><span class="lang-en">Addition</span> | `5 + 3` | `8` |
| `-` | <span class="lang-es">Resta</span><span class="lang-en">Subtraction</span> | `10 - 4` | `6` |
| `*` | <span class="lang-es">Multiplicación</span><span class="lang-en">Multiplication</span> | `3 * 7` | `21` |
| `/` | <span class="lang-es">División</span><span class="lang-en">Division</span> | `15 / 4` | `3.75` |
| `//` | <span class="lang-es">División entera</span><span class="lang-en">Integer division</span> | `15 // 4` | `3` |
| `%` | <span class="lang-es">Resto</span><span class="lang-en">Remainder</span> | `15 % 4` | `3` |
| `**` | <span class="lang-es">Potencia</span><span class="lang-en">Power</span> | `2 ** 8` | `256` |

```python
# @browser
print(5 + 3)
print(10 - 4)
print(3 * 7)
print(15 / 4)   # Division normal → resultado decimal
print(15 // 4)  # Division entera → solo la parte entera
print(2 ** 10)  # 2 elevado a la 10
```

### Orden de operaciones / Order of Operations

```python
# @browser
print(2 + 3 * 4)    # = 14  (primero 3*4=12, luego 2+12)
print((2 + 3) * 4)  # = 20  (paréntesis primero)
print(10 / 2 + 3)   # = 8.0
print(10 / (2 + 3)) # = 2.0
```

---

## Juntando todo / Putting It All Together

<div class="lang-es" markdown="1">
Usemos los tres conceptos para responder una pregunta científica real:
**¿Cuánto tarda la luz en viajar del Sol a la Tierra?**
</div>
<div class="lang-en" markdown="1">
Let's use all three concepts to answer a real scientific question:
**How long does it take light to travel from the Sun to Earth?**
</div>

```python
# @browser
velocidad_luz = 300000           # km/s
distancia_sol_tierra = 150000000 # km

tiempo_segundos = distancia_sol_tierra / velocidad_luz
tiempo_minutos = tiempo_segundos / 60

print("La luz tarda", tiempo_segundos, "segundos")
print("O lo que es lo mismo:", tiempo_minutos, "minutos")
```

!!! tip ""
    <span class="lang-es">¡Modificá los valores y ejecutalo de nuevo! Por ejemplo, cambiá la distancia por la de Marte al Sol (228 millones de km).</span>
    <span class="lang-en">Modify the values and run it again! Try Mars's distance from the Sun (228 million km).</span>
