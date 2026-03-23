# 🔀 <span class="lang-es">Módulo 2 — Condicionales</span><span class="lang-en">Module 2 — Conditionals</span>

<div class="lang-es" markdown="1">
Hasta ahora tu código siempre hace lo mismo, sin importar los datos.
Con los **condicionales** podés hacer que el programa tome decisiones:
"si pasa esto, hacé aquello; si no, hacé lo otro".
</div>
<div class="lang-en" markdown="1">
So far your code always does the same thing, no matter the data.
With **conditionals** you can make the program take decisions:
"if this happens, do that; otherwise, do something else".
</div>

---

## 1. <span class="lang-es">Operadores de comparación</span><span class="lang-en">Comparison Operators</span>

<div class="lang-es" markdown="1">
Antes de tomar decisiones, necesitamos **comparar** valores.
Estos operadores devuelven `True` (verdadero) o `False` (falso):
</div>
<div class="lang-en" markdown="1">
Before making decisions, we need to **compare** values.
These operators return `True` or `False`:
</div>

| Operador | <span class="lang-es">Significado</span><span class="lang-en">Meaning</span> | <span class="lang-es">Ejemplo</span><span class="lang-en">Example</span> | <span class="lang-es">Resultado</span><span class="lang-en">Result</span> |
|---|---|---|---|
| `==` | <span class="lang-es">igual a</span><span class="lang-en">equal to</span> | `5 == 5` | `True` |
| `!=` | <span class="lang-es">distinto de</span><span class="lang-en">not equal to</span> | `5 != 3` | `True` |
| `>`  | <span class="lang-es">mayor que</span><span class="lang-en">greater than</span> | `8 > 3` | `True` |
| `<`  | <span class="lang-es">menor que</span><span class="lang-en">less than</span> | `2 < 1` | `False` |
| `>=` | <span class="lang-es">mayor o igual</span><span class="lang-en">greater or equal</span> | `5 >= 5` | `True` |
| `<=` | <span class="lang-es">menor o igual</span><span class="lang-en">less or equal</span> | `3 <= 7` | `True` |

```python
# @browser
print(10 > 3)
print(10 < 3)
print(10 == 10)
print(10 != 5)
print(9.8 >= 9.8)
```

!!! tip "True / False"
    <span class="lang-es">En Python, `True` y `False` se llaman **booleanos** (`bool`). Son el resultado de cualquier comparación.</span>
    <span class="lang-en">In Python, `True` and `False` are called **booleans** (`bool`). They are the result of any comparison.</span>

---

## 2. <span class="lang-es">if / else</span><span class="lang-en">if / else</span>

<div class="lang-es" markdown="1">
La estructura `if` ejecuta un bloque de código **solo si** la condición es `True`.
El bloque `else` se ejecuta cuando la condición es `False`.

```
if condición:
    # código si es verdadero
else:
    # código si es falso
```

**Importante**: el código dentro del `if` va con **4 espacios de sangría**.
</div>
<div class="lang-en" markdown="1">
The `if` statement executes a block of code **only if** the condition is `True`.
The `else` block runs when the condition is `False`.

```
if condition:
    # code if true
else:
    # code if false
```

**Important**: the code inside `if` must be **indented with 4 spaces**.
</div>

```python
# @browser
temperatura = -20  # °C

if temperatura > 0:
    print("El agua puede estar liquida")
else:
    print("El agua esta congelada")
```

<div class="lang-es" markdown="1">
Cambiá el valor de `temperatura` y volvé a ejecutar. Probá con `100`, `-20`, `0`.
</div>
<div class="lang-en" markdown="1">
Change the value of `temperatura` and run again. Try `100`, `-20`, `0`.
</div>

---

## 3. <span class="lang-es">elif — múltiples condiciones</span><span class="lang-en">elif — multiple conditions</span>

<div class="lang-es" markdown="1">
Cuando hay más de dos posibilidades, usamos `elif` (abreviatura de "else if"):
</div>
<div class="lang-en" markdown="1">
When there are more than two possibilities, we use `elif` (short for "else if"):
</div>

```python
# @browser
gravedad = 3.72  # Marte (m/s²)

if gravedad < 2:
    print("Gravedad muy baja (luna o asteroide)")
elif gravedad < 5:
    print("Gravedad baja (planeta pequeno)")
elif gravedad < 12:
    print("Gravedad moderada (planeta terrestre)")
else:
    print("Gravedad alta (gigante gaseoso)")
```

<div class="lang-es" markdown="1">
Python evalúa las condiciones **de arriba hacia abajo** y ejecuta solo el primer bloque que sea `True`. Los demás se ignoran.
</div>
<div class="lang-en" markdown="1">
Python evaluates conditions **from top to bottom** and runs only the first block that is `True`. The rest are skipped.
</div>

---

## 4. <span class="lang-es">Combinar condiciones</span><span class="lang-en">Combining conditions</span>

<div class="lang-es" markdown="1">
Podés combinar varias condiciones usando `and`, `or` y `not`:

| Operador | <span class="lang-es">Significado</span><span class="lang-en">Meaning</span> | <span class="lang-es">Ejemplo</span><span class="lang-en">Example</span> |
|---|---|---|
| `and` | <span class="lang-es">ambas deben ser True</span><span class="lang-en">both must be True</span> | `x > 0 and x < 10` |
| `or`  | <span class="lang-es">al menos una True</span><span class="lang-en">at least one True</span> | `x < 0 or x > 100` |
| `not` | <span class="lang-es">invierte el resultado</span><span class="lang-en">inverts the result</span> | `not (x == 5)` |
</div>
<div class="lang-en" markdown="1">
You can combine multiple conditions using `and`, `or`, and `not`:

| Operator | Meaning | Example |
|---|---|---|
| `and` | both must be True | `x > 0 and x < 10` |
| `or`  | at least one True | `x < 0 or x > 100` |
| `not` | inverts the result | `not (x == 5)` |
</div>

```python
# @browser
temp_C   = 15
presion  = 1.0  # atm (presion terrestre normal)

if temp_C > 0 and temp_C < 100 and presion >= 0.6:
    print("Condiciones compatibles con agua liquida")
else:
    print("El agua no puede existir en estado liquido")
```

---

## <span class="lang-es">Juntando todo</span><span class="lang-en">Putting It All Together</span>

<div class="lang-es" markdown="1">
¿Puede haber vida en ese planeta? Usemos condiciones para evaluarlo:
</div>
<div class="lang-en" markdown="1">
Could there be life on that planet? Let's use conditions to evaluate it:
</div>

```python
# @browser
nombre      = "Marte"
temp_min    = -125  # °C
temp_max    = 20    # °C
tiene_agua  = True
tiene_atm   = True

# Condiciones basicas para la vida
temp_ok  = temp_max > 0 and temp_min < 50
vida_posible = temp_ok and tiene_agua and tiene_atm

if vida_posible:
    print(nombre, ": condiciones basicas para la vida PRESENTES")
else:
    print(nombre, ": condiciones basicas para la vida AUSENTES")
    if not tiene_agua:
        print("  → Falta agua liquida")
    if not tiene_atm:
        print("  → Falta atmosfera")
    if not temp_ok:
        print("  → Temperatura fuera de rango")
```

!!! tip ""
    <span class="lang-es">Cambiá los valores del planeta y experimentá. ¿Qué pasa si `tiene_agua = False`?</span>
    <span class="lang-en">Change the planet values and experiment. What happens if `tiene_agua = False`?</span>
