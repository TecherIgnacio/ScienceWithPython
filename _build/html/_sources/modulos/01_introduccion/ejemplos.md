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

<div class="py-interactive" data-mode="browser"># Distancias promedio de cada planeta al Sol (en km)
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
print("  Júpiter: ", round(t_jupiter,  2), "minutos")</div>

:::{note}
<span class="lang-es">Usamos `round(numero, decimales)` para redondear el resultado. Eso no lo vimos en la teoría, ¡pero podés probarlo! Los paréntesis significan que es una función, igual que `print()`.</span>
<span class="lang-en">We use `round(number, decimals)` to round the result. We haven't covered this in theory yet, but you can try it! The parentheses mean it's a function, just like `print()`.</span>
:::

---

## Ejemplo 2 — Conversión de temperatura

<div class="lang-es">

En ciencia se usan tres escalas de temperatura: **Celsius**, **Fahrenheit** y **Kelvin**.
Las fórmulas para convertir entre ellas son:

- Celsius → Fahrenheit: `F = C × 9/5 + 32`
- Celsius → Kelvin: `K = C + 273.15`

</div>
<div class="lang-en">

In science, three temperature scales are used: **Celsius**, **Fahrenheit**, and **Kelvin**.
The conversion formulas are:

- Celsius → Fahrenheit: `F = C × 9/5 + 32`
- Celsius → Kelvin: `K = C + 273.15`

</div>

<div class="py-interactive" data-mode="browser"># Temperaturas extremas del Sistema Solar en Celsius
lugares = [
    ("Superficie del Sol",     5500),
    ("Venus (superficie)",      465),
    ("Tierra (promedio)",        15),
    ("Marte (promedio)",        -63),
    ("Plutón (superficie)",    -229),
]

print("Lugar                    | Celsius | Fahrenheit | Kelvin")
print("-" * 55)

for nombre, celsius in lugares:
    fahrenheit = celsius * 9/5 + 32
    kelvin     = celsius + 273.15
    print(f"{nombre:<25}| {celsius:>7} | {fahrenheit:>10.1f} | {kelvin:>6.2f}")</div>

<div class="lang-es">

Podés modificar la lista de lugares y temperaturas para explorar otros valores.

</div>
<div class="lang-en">

You can modify the list of places and temperatures to explore other values.

</div>

---

## Ejemplo 3 — Energía cinética de un objeto

<div class="lang-es">

La **energía cinética** es la energía que tiene un objeto por estar en movimiento.
Su fórmula es:

**E = ½ × m × v²**

Donde:
- `m` = masa en kilogramos (kg)
- `v` = velocidad en metros por segundo (m/s)
- `E` = energía en Joules (J)

</div>
<div class="lang-en">

**Kinetic energy** is the energy an object has due to its motion.
Its formula is:

**E = ½ × m × v²**

Where:
- `m` = mass in kilograms (kg)
- `v` = velocity in meters per second (m/s)
- `E` = energy in Joules (J)

</div>

<div class="py-interactive" data-mode="browser"># Energía cinética de distintos objetos

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

print("Energía cinética de distintos objetos:")
print("  Pelota de tenis:  ", ek_pelota,  "J")
print("  Auto a 100 km/h:  ", ek_auto,    "J")
print("  ISS en órbita:    ", ek_iss,     "J")</div>

:::{tip}
<span class="lang-es">¿La energía cinética de la ISS parece un número enorme? ¡Es porque sí lo es! Experimenta cambiando los valores para desarrollar intuición científica.</span>
<span class="lang-en">Does the ISS's kinetic energy seem like a huge number? It is! Experiment by changing the values to build scientific intuition.</span>
:::

---

## Ejemplo 4 — Cálculo de peso en otros planetas

<div class="lang-es">

Tu peso depende de la gravedad del planeta donde estés.
La fórmula es simple: **Peso = masa × gravedad**

La gravedad de cada planeta (en m/s²):

</div>
<div class="lang-en">

Your weight depends on the gravity of the planet you're on.
The formula is simple: **Weight = mass × gravity**

Gravity on each planet (in m/s²):

</div>

<div class="py-interactive" data-mode="browser"># ¿Cuánto pesarías en cada planeta?
tu_masa = 50  # Cambiá este valor por tu masa en kg

gravedad_mercurio = 3.7
gravedad_venus    = 8.87
gravedad_tierra   = 9.8
gravedad_marte    = 3.72
gravedad_jupiter  = 24.79
gravedad_luna     = 1.62

print("Con una masa de", tu_masa, "kg, tu peso sería:")
print("  En Mercurio:", round(tu_masa * gravedad_mercurio, 1), "N")
print("  En Venus:   ", round(tu_masa * gravedad_venus,    1), "N")
print("  En la Tierra:", round(tu_masa * gravedad_tierra,  1), "N")
print("  En Marte:   ", round(tu_masa * gravedad_marte,    1), "N")
print("  En Júpiter: ", round(tu_masa * gravedad_jupiter,  1), "N")
print("  En la Luna: ", round(tu_masa * gravedad_luna,     1), "N")</div>

<div class="lang-es">

¡Cambiá `tu_masa` al principio del código para ver los resultados con tu propio peso!

</div>
<div class="lang-en">

Change `tu_masa` at the top of the code to see results with your own mass!

</div>
