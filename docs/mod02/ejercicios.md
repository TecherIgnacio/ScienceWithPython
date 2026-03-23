# ✏️ <span class="lang-es">Ejercicios — Módulo 2</span><span class="lang-en">Exercises — Module 2</span>

<div class="hybrid-info">
  <div class="hybrid-badge browser">🌐 <span class="lang-es">En el navegador</span><span class="lang-en">In the browser</span></div>
  <div class="hybrid-badge local">💻 <span class="lang-es">En tu PC</span><span class="lang-en">On your PC</span></div>
</div>

---

## 🌐 <span class="lang-es">Ejercicio 1 — Positivo, negativo o cero</span><span class="lang-en">Exercise 1 — Positive, negative or zero</span>

<div class="lang-es" markdown="1">
Completá el código para que clasifique el número como positivo, negativo o cero.
Probá con distintos valores.
</div>
<div class="lang-en" markdown="1">
Complete the code to classify the number as positive, negative, or zero.
Try different values.
</div>

```python
# @browser
numero = -7  # cambia este valor

# completá el if/elif/else aqui
if numero > 0:
    print(numero, "es positivo")
elif numero < 0:
    print(numero, "es negativo")
else:
    print("El numero es cero")
```

---

## 🌐 <span class="lang-es">Ejercicio 2 — ¿Podés respirar en ese planeta?</span><span class="lang-en">Exercise 2 — Can you breathe on that planet?</span>

<div class="lang-es" markdown="1">
El aire de la Tierra tiene un 21% de oxígeno. Para respirar sin traje espacial
se necesita al menos un **16% de O₂** y una presión atmosférica mayor a **0.5 atm**.

Completá el código con las condiciones correctas.
</div>
<div class="lang-en" markdown="1">
Earth's air has 21% oxygen. To breathe without a spacesuit you need
at least **16% O₂** and an atmospheric pressure greater than **0.5 atm**.

Complete the code with the correct conditions.
</div>

```python
# @browser
planeta     = "Planeta X"
oxigeno_pct = 19    # % de oxigeno en la atmosfera
presion_atm = 0.8   # presion en atm

# Condicion: oxigeno >= 16 Y presion >= 0.5
if oxigeno_pct >= 16 and presion_atm >= 0.5:
    print("En", planeta, "podrias respirar sin traje espacial")
else:
    print("En", planeta, "necesitas traje espacial")
    if oxigeno_pct < 16:
        print("  → Poco oxigeno:", oxigeno_pct, "%")
    if presion_atm < 0.5:
        print("  → Presion muy baja:", presion_atm, "atm")
```

!!! tip ""
    <span class="lang-es">Cambiá los valores de `oxigeno_pct` y `presion_atm` para probar distintos casos.</span>
    <span class="lang-en">Change the values of `oxigeno_pct` and `presion_atm` to try different cases.</span>

---

## 🌐 <span class="lang-es">Ejercicio 3 — Clasificar velocidad de una nave</span><span class="lang-en">Exercise 3 — Classifying a Spacecraft's Speed</span>

<div class="lang-es" markdown="1">
Clasificá la velocidad de una nave según estas categorías:

- Menos de 1 km/s → "Muy lenta"
- Entre 1 y 7.9 km/s → "Suborbital"
- Entre 7.9 y 11.2 km/s → "Orbital"
- Mayor o igual a 11.2 km/s → "Escape de la Tierra"
</div>
<div class="lang-en" markdown="1">
Classify the spacecraft's speed according to these categories:

- Less than 1 km/s → "Very slow"
- Between 1 and 7.9 km/s → "Suborbital"
- Between 7.9 and 11.2 km/s → "Orbital"
- Greater than or equal to 11.2 km/s → "Earth escape"
</div>

```python
# @browser
velocidad = 8.5  # km/s — cambia este valor

if velocidad < 1:
    print("Velocidad:", velocidad, "km/s → Muy lenta")
elif velocidad < 7.9:
    print("Velocidad:", velocidad, "km/s → Suborbital")
elif velocidad < 11.2:
    print("Velocidad:", velocidad, "km/s → Orbital")
else:
    print("Velocidad:", velocidad, "km/s → Escape de la Tierra")
```

---

## 💻 <span class="lang-es">Ejercicio 4 — Comparador de planetas</span><span class="lang-en">Exercise 4 — Planet Comparator</span>

<div class="lang-es" markdown="1">
Creá un programa que compare la gravedad de dos planetas e indique cuál es mayor,
cuál es menor, o si son iguales.
</div>
<div class="lang-en" markdown="1">
Create a program that compares the gravity of two planets and indicates
which is greater, which is lesser, or if they are equal.
</div>

```python
# @local
# Ejercicio 4 — Comparador de planetas

planeta_a   = "Marte"
gravedad_a  = 3.72  # m/s²

planeta_b   = "Venus"
gravedad_b  = 8.87  # m/s²

print("Comparando:", planeta_a, "vs", planeta_b)
print(planeta_a + ":", gravedad_a, "m/s²")
print(planeta_b + ":", gravedad_b, "m/s²")

if gravedad_a > gravedad_b:
    diferencia = gravedad_a - gravedad_b
    print(planeta_a, "tiene mayor gravedad por", diferencia, "m/s²")
elif gravedad_b > gravedad_a:
    diferencia = gravedad_b - gravedad_a
    print(planeta_b, "tiene mayor gravedad por", diferencia, "m/s²")
else:
    print("Ambos planetas tienen la misma gravedad")
```

---

## 💻 <span class="lang-es">Ejercicio 5 — ¿El objeto flota?</span><span class="lang-en">Exercise 5 — Does the object float?</span>

<div class="lang-es" markdown="1">
Un objeto flota en agua si su densidad es menor que la del agua (1000 kg/m³).
Calculá la densidad y determiná si el objeto flota.

**densidad = masa / volumen**
</div>
<div class="lang-en" markdown="1">
An object floats in water if its density is less than water's density (1000 kg/m³).
Calculate the density and determine if the object floats.

**density = mass / volume**
</div>

```python
# @local
# Ejercicio 5 — ¿Flota o se hunde?

objeto  = "Hielo"
masa    = 900     # kg
volumen = 1       # m³

densidad       = masa / volumen
densidad_agua  = 1000  # kg/m³

print("Objeto: ", objeto)
print("Masa:   ", masa, "kg")
print("Volumen:", volumen, "m³")
print("Densidad:", densidad, "kg/m³")

if densidad < densidad_agua:
    print(objeto, "FLOTA (densidad menor que el agua)")
elif densidad == densidad_agua:
    print(objeto, "queda suspendido (misma densidad que el agua)")
else:
    print(objeto, "SE HUNDE (densidad mayor que el agua)")
```

!!! note ""
    <span class="lang-es">Probá con distintos materiales: hierro (7870 kg/m³), madera de balsa (120 kg/m³), Saturno (687 kg/m³ — ¡flotaría en un océano gigante!).</span>
    <span class="lang-en">Try different materials: iron (7870 kg/m³), balsa wood (120 kg/m³), Saturn (687 kg/m³ — it would float in a giant ocean!).</span>
