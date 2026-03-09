# 🏆 Retos Extra — Módulo 1

<div class="lang-es">

¿Terminaste los ejercicios y querés más? Estos retos son más desafiantes y no tienen
solución dada de antemano. ¡Intentá resolverlos solo/a!

</div>
<div class="lang-en">

Finished the exercises and want more? These challenges are harder and don't come
with a pre-given solution. Try to solve them on your own!

</div>

---

## 🏆 Reto 1 — Velocidad de escape

<div class="lang-es">

La **velocidad de escape** es la velocidad mínima que necesita un cohete para
alejarse de un planeta sin caer de vuelta. Su fórmula es:

**v = √(2 × G × M / R)**

Donde:
- `G = 6.674e-11` (constante de gravitación universal, en m³/kg·s²)
- `M` = masa del planeta (kg)
- `R` = radio del planeta (m)
- `v` = velocidad de escape (m/s)

**Tu misión:** Calculá la velocidad de escape de la Tierra, Marte y la Luna.

Datos:
- Tierra: masa = 5.972e24 kg, radio = 6.371e6 m
- Marte:  masa = 6.39e23 kg,  radio = 3.390e6 m
- Luna:   masa = 7.35e22 kg,  radio = 1.737e6 m

*Pista: en Python, la raíz cuadrada de x se escribe como `x ** 0.5`*

</div>
<div class="lang-en">

The **escape velocity** is the minimum speed a rocket needs to leave a planet
without falling back. Its formula is:

**v = √(2 × G × M / R)**

Where:
- `G = 6.674e-11` (universal gravitational constant, in m³/kg·s²)
- `M` = planet mass (kg)
- `R` = planet radius (m)
- `v` = escape velocity (m/s)

**Your mission:** Calculate the escape velocity of Earth, Mars, and the Moon.

Data:
- Earth: mass = 5.972e24 kg, radius = 6.371e6 m
- Mars:  mass = 6.39e23 kg,  radius = 3.390e6 m
- Moon:  mass = 7.35e22 kg,  radius = 1.737e6 m

*Hint: in Python, the square root of x is written as `x ** 0.5`*

</div>

<div class="py-interactive" data-mode="browser">
# Reto 1 — Velocidad de escape
# Completá el código

G = 6.674e-11  # constante gravitacional

# Tierra
masa_tierra  = 5.972e24
radio_tierra = 6.371e6
# ve_tierra = ... (completá la fórmula)
# print("Velocidad de escape Tierra:", ...)

# Marte (completá vos)

# Luna (completá vos)
</div>

---

## 🏆 Reto 2 — El teorema de Pitágoras en el espacio

<div class="lang-es">

Dos sondas espaciales parten desde la Tierra en direcciones perpendiculares.
La sonda A viaja 450.000 km hacia el norte. La sonda B viaja 320.000 km hacia el este.

¿Cuál es la distancia directa entre las dos sondas?

Usá el **Teorema de Pitágoras**: `distancia = √(a² + b²)`

*Pista: `x ** 0.5` es la raíz cuadrada, `x ** 2` es el cuadrado*

</div>
<div class="lang-en">

Two space probes depart from Earth in perpendicular directions.
Probe A travels 450,000 km north. Probe B travels 320,000 km east.

What is the direct distance between the two probes?

Use the **Pythagorean Theorem**: `distance = √(a² + b²)`

*Hint: `x ** 0.5` is the square root, `x ** 2` is the square*

</div>

<div class="py-interactive" data-mode="browser">
# Reto 2 — Pitágoras en el espacio
# Completá el código

distancia_a = 450000  # km (sonda A, hacia el norte)
distancia_b = 320000  # km (sonda B, hacia el este)

# distancia_entre_sondas = ...
# print(...)
</div>

---

## 🏆 Reto 3 — El IMC de los planetas (densidad)

<div class="lang-es">

Así como los humanos tenemos el IMC (Índice de Masa Corporal), los planetas
tienen **densidad**: cuánta masa tienen por unidad de volumen.

**densidad = masa / volumen**

El volumen de una esfera es: `V = (4/3) × π × r³`

**Tu misión:**
Calculá la densidad de la Tierra y de Saturno y compará con la densidad del agua (1000 kg/m³).

Datos:
- Tierra: masa = 5.972e24 kg, radio = 6.371e6 m
- Saturno: masa = 5.683e26 kg, radio = 5.823e7 m

¿Qué planeta podría flotar en un océano gigante?

</div>
<div class="lang-en">

Just like humans have BMI (Body Mass Index), planets have **density**:
how much mass they have per unit of volume.

**density = mass / volume**

The volume of a sphere is: `V = (4/3) × π × r³`

**Your mission:**
Calculate the density of Earth and Saturn, then compare with the density of water (1000 kg/m³).

Data:
- Earth:  mass = 5.972e24 kg, radius = 6.371e6 m
- Saturn: mass = 5.683e26 kg, radius = 5.823e7 m

Which planet could float in a giant ocean?

</div>

<div class="py-interactive" data-mode="browser">
# Reto 3 — Densidad de planetas
# Completá el código

pi = 3.14159265

# Tierra
masa_tierra  = 5.972e24   # kg
radio_tierra = 6.371e6    # m
# volumen_tierra   = ...
# densidad_tierra  = ...

# Saturno
masa_saturno  = 5.683e26  # kg
radio_saturno = 5.823e7   # m
# volumen_saturno  = ...
# densidad_saturno = ...

densidad_agua = 1000  # kg/m³

# Imprimí los resultados y compará con el agua
# print(...)
</div>

---

:::{important}
<span class="lang-es">
<strong>¿Bloqueado/a en algún reto?</strong> Eso es completamente normal. Intentá descomponerlo en partes más chicas: primero calculá una sola variable, imprimila, y después seguí. El debugging (buscar errores) es una habilidad tan importante como programar.
</span>
<span class="lang-en">
<strong>Stuck on a challenge?</strong> That's completely normal. Try breaking it into smaller parts: first calculate just one variable, print it, then continue. Debugging (finding errors) is a skill just as important as programming.
</span>
:::
