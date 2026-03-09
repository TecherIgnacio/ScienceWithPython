# 🔬 Ejemplos — Módulo 1

<div class="lang-es">

Acá vas a ver cómo aplicar `print()`, variables y operaciones aritméticas
para resolver preguntas científicas reales. ¡Todos los ejemplos son ejecutables!

</div>
<div class="lang-en">

Here you'll see how to apply `print()`, variables, and arithmetic operations
to solve real scientific questions. All examples are runnable!

</div>

---

## Ejemplo 1 — Velocidad de la luz en el Sistema Solar

<div class="lang-es">

La velocidad de la luz es de **300.000 km/s**. Con eso podemos calcular cuánto
tarda en viajar entre cualquier planeta y el Sol.

</div>
<div class="lang-en">

The speed of light is **300,000 km/s**. With that we can calculate how long
it takes to travel between any planet and the Sun.

</div>

```{code-block} python
:class: py-cell-browser

# Distancias promedio de cada planeta al Sol (en km)
velocidad_luz = 300000  # km/s

mercurio = 57900000
venus    = 108200000
tierra   = 149600000
marte    = 227900000
jupiter  = 778500000

# Calculamos el tiempo en minutos para cada planeta
t_mercurio = (mercurio / velocidad_luz) / 60
t_venus    = (venus    / velocidad_luz) / 60
t_tierra   = (tierra   / velocidad_luz) / 60
t_marte    = (marte    / velocidad_luz) / 60
t_jupiter  = (jupiter  / velocidad_luz) / 60

print("Tiempo que tarda la luz en llegar al Sol:")
print("  Mercurio:", round(t_mercurio, 2), "minutos")
print("  Venus:   ", round(t_venus,    2), "minutos")
print("  Tierra:  ", round(t_tierra,   2), "minutos")
print("  Marte:   ", round(t_marte,    2), "minutos")
print("  Jupiter: ", round(t_jupiter,  2), "minutos")
```

:::{note}
<span class="lang-es">Usamos <code>round(numero, decimales)</code> para redondear el resultado. Los paréntesis significan que es una función, igual que <code>print()</code>.</span>
<span class="lang-en">We use <code>round(number, decimals)</code> to round the result. The parentheses mean it's a function, just like <code>print()</code>.</span>
:::

---

## Ejemplo 2 — Conversión de temperatura

<div class="lang-es">

En ciencia se usan tres escalas de temperatura: **Celsius**, **Fahrenheit** y **Kelvin**.

- Celsius → Fahrenheit: `F = C × 9/5 + 32`
- Celsius → Kelvin: `K = C + 273.15`

</div>
<div class="lang-en">

In science, three temperature scales are used: **Celsius**, **Fahrenheit**, and **Kelvin**.

- Celsius → Fahrenheit: `F = C × 9/5 + 32`
- Celsius → Kelvin: `K = C + 273.15`

</div>

```{code-block} python
:class: py-cell-browser

# Temperatura de distintos lugares del Sistema Solar
nombre   = "Marte (promedio)"
celsius  = -63

fahrenheit = celsius * 9/5 + 32
kelvin     = celsius + 273.15

print("Lugar:", nombre)
print("Celsius:   ", celsius, "°C")
print("Fahrenheit:", fahrenheit, "°F")
print("Kelvin:    ", kelvin, "K")
```

<div class="lang-es">

¡Cambiá los valores de <code>nombre</code> y <code>celsius</code> para explorar otros planetas!

</div>
<div class="lang-en">

Change the values of <code>nombre</code> and <code>celsius</code> to explore other planets!

</div>

---

## Ejemplo 3 — Energía cinética

<div class="lang-es">

La **energía cinética** es la energía que tiene un objeto por estar en movimiento.
Su fórmula es: **E = ½ × m × v²**

Donde `m` es la masa en kg y `v` es la velocidad en m/s.

</div>
<div class="lang-en">

**Kinetic energy** is the energy an object has due to its motion.
Its formula is: **E = ½ × m × v²**

Where `m` is mass in kg and `v` is velocity in m/s.

</div>

```{code-block} python
:class: py-cell-browser

# Energía cinética de distintos objetos

# Una pelota de tenis en un partido
masa_pelota = 0.058   # kg (~58 gramos)
vel_pelota  = 60      # m/s (~216 km/h)
ek_pelota   = 0.5 * masa_pelota * vel_pelota ** 2

# Un auto en la autopista
masa_auto = 1200      # kg
vel_auto  = 27.8      # m/s (~100 km/h)
ek_auto   = 0.5 * masa_auto * vel_auto ** 2

# La Estación Espacial Internacional
masa_iss = 420000     # kg (420 toneladas)
vel_iss  = 7660       # m/s (velocidad orbital)
ek_iss   = 0.5 * masa_iss * vel_iss ** 2

print("Energia cinetica de distintos objetos:")
print("  Pelota de tenis:", round(ek_pelota, 1), "J")
print("  Auto a 100 km/h:", round(ek_auto,   1), "J")
print("  ISS en orbita:  ", ek_iss,             "J")
```

---

## Ejemplo 4 — Peso en otros planetas

<div class="lang-es">

Tu peso depende de la gravedad del planeta donde estés.
La fórmula es: **Peso = masa × gravedad**

</div>
<div class="lang-en">

Your weight depends on the gravity of the planet you're on.
The formula is: **Weight = mass × gravity**

</div>

```{code-block} python
:class: py-cell-browser

# Cambia tu_masa por tu propio valor en kg
tu_masa = 50  # kg

g_mercurio = 3.7
g_venus    = 8.87
g_tierra   = 9.8
g_marte    = 3.72
g_jupiter  = 24.79
g_luna     = 1.62

print("Con una masa de", tu_masa, "kg, tu peso seria:")
print("  Mercurio:", round(tu_masa * g_mercurio, 1), "N")
print("  Venus:   ", round(tu_masa * g_venus,    1), "N")
print("  Tierra:  ", round(tu_masa * g_tierra,   1), "N")
print("  Marte:   ", round(tu_masa * g_marte,    1), "N")
print("  Jupiter: ", round(tu_masa * g_jupiter,  1), "N")
print("  Luna:    ", round(tu_masa * g_luna,     1), "N")
```
