# 🏆 <span class="lang-es">Retos Extra — Módulo 1</span><span class="lang-en">Extra Challenges — Module 1</span>

<div class="lang-es" markdown="1">
¿Terminaste los ejercicios? Estos retos son más desafiantes. ¡Intentá resolverlos sin ayuda!
</div>
<div class="lang-en" markdown="1">
Finished the exercises? These challenges are harder. Try to solve them on your own!
</div>

---

## 🏆 <span class="lang-es">Reto 1 — Velocidad de escape</span><span class="lang-en">Challenge 1 — Escape Velocity</span>

<div class="lang-es" markdown="1">
La **velocidad de escape** es la velocidad mínima para alejarse de un planeta: **v = √(2 × G × M / R)**

- `G = 6.674e-11` m³/kg·s²
- Tierra: masa=`5.972e24` kg, radio=`6.371e6` m
- Marte: masa=`6.39e23` kg, radio=`3.390e6` m
- Luna: masa=`7.35e22` kg, radio=`1.737e6` m

*Pista: la raíz cuadrada de x es `x ** 0.5`*
</div>
<div class="lang-en" markdown="1">
**Escape velocity** is the minimum speed to leave a planet: **v = √(2 × G × M / R)**

- `G = 6.674e-11` m³/kg·s²
- Earth: mass=`5.972e24` kg, radius=`6.371e6` m
- Mars: mass=`6.39e23` kg, radius=`3.390e6` m
- Moon: mass=`7.35e22` kg, radius=`1.737e6` m

*Hint: square root of x is `x ** 0.5`*
</div>

```python
# @browser
G = 6.674e-11

masa_tierra  = 5.972e24
radio_tierra = 6.371e6
# ve_tierra = ...  (completá la formula)
# print("Tierra:", ve_tierra, "m/s")

# Marte y Luna: completá vos
```

---

## 🏆 <span class="lang-es">Reto 2 — Pitágoras en el espacio</span><span class="lang-en">Challenge 2 — Pythagorean Theorem in Space</span>

<div class="lang-es" markdown="1">
Dos sondas parten desde la Tierra. La sonda A viaja 450.000 km al norte.
La sonda B viaja 320.000 km al este. ¿Cuál es la distancia directa entre ellas?

**Pitágoras:** `d = √(a² + b²)`
</div>
<div class="lang-en" markdown="1">
Two probes depart from Earth. Probe A travels 450,000 km north.
Probe B travels 320,000 km east. What is the direct distance between them?

**Pythagorean theorem:** `d = √(a² + b²)`
</div>

```python
# @browser
dist_a = 450000  # km (norte)
dist_b = 320000  # km (este)

# distancia = ...
# print("Distancia entre sondas:", ...)
```

---

## 🏆 <span class="lang-es">Reto 3 — Densidad de planetas</span><span class="lang-en">Challenge 3 — Planet Density</span>

<div class="lang-es" markdown="1">
**densidad = masa / volumen**, donde el volumen de una esfera es **V = (4/3) × π × r³**

Calculá la densidad de la Tierra y Saturno. Comparalas con la del agua (1000 kg/m³).
¿Cuál planeta podría flotar en un océano gigante?

- Tierra: masa=`5.972e24` kg, radio=`6.371e6` m
- Saturno: masa=`5.683e26` kg, radio=`5.823e7` m
</div>
<div class="lang-en" markdown="1">
**density = mass / volume**, where the volume of a sphere is **V = (4/3) × π × r³**

Calculate the density of Earth and Saturn. Compare with water (1000 kg/m³).
Which planet could float in a giant ocean?

- Earth: mass=`5.972e24` kg, radius=`6.371e6` m
- Saturn: mass=`5.683e26` kg, radius=`5.823e7` m
</div>

```python
# @browser
pi = 3.14159265

masa_tierra  = 5.972e24
radio_tierra = 6.371e6
# volumen_tierra  = ...
# densidad_tierra = ...

masa_saturno  = 5.683e26
radio_saturno = 5.823e7
# volumen_saturno  = ...
# densidad_saturno = ...

# print(...)
```

---

!!! important ""
    <span class="lang-es">**¿Bloqueado/a?** Normal. Descomponé el problema en partes: calculá una sola variable, imprimila, y luego seguí. El debugging es una habilidad tan importante como programar.</span>
    <span class="lang-en">**Stuck?** That's normal. Break the problem into parts: calculate one variable, print it, then continue. Debugging is a skill just as important as programming.</span>
