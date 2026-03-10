# 🔬 <span class="lang-es">Ejemplos — Módulo 1</span><span class="lang-en">Examples — Module 1</span>

<div class="lang-es" markdown="1">
Veamos cómo aplicar `print()`, variables y operaciones para resolver preguntas
científicas reales. ¡Todos los ejemplos son ejecutables!
</div>
<div class="lang-en" markdown="1">
Let's see how to apply `print()`, variables, and operations to solve real
scientific questions. All examples are runnable!
</div>

---

## <span class="lang-es">Ejemplo 1 — Velocidad de la luz</span><span class="lang-en">Example 1 — Speed of Light</span>

<div class="lang-es" markdown="1">
La velocidad de la luz es de **300.000 km/s**. Podemos calcular cuánto tarda
en viajar desde cada planeta hasta el Sol.
</div>
<div class="lang-en" markdown="1">
The speed of light is **300,000 km/s**. We can calculate how long it takes
to travel from each planet to the Sun.
</div>

```python
# @browser
velocidad_luz = 300000  # km/s

mercurio = 57900000
venus    = 108200000
tierra   = 149600000
marte    = 227900000
jupiter  = 778500000

t_mercurio = (mercurio / velocidad_luz) / 60
t_venus    = (venus    / velocidad_luz) / 60
t_tierra   = (tierra   / velocidad_luz) / 60
t_marte    = (marte    / velocidad_luz) / 60
t_jupiter  = (jupiter  / velocidad_luz) / 60

print("Tiempo que tarda la luz en llegar al Sol:")
print("  Mercurio:", t_mercurio, "minutos")
print("  Venus:   ", t_venus, "minutos")
print("  Tierra:  ", t_tierra, "minutos")
print("  Marte:   ", t_marte, "minutos")
print("  Jupiter: ", t_jupiter, "minutos")
```

---

## <span class="lang-es">Ejemplo 2 — Conversión de temperatura</span><span class="lang-en">Example 2 — Temperature Conversion</span>

<div class="lang-es" markdown="1">
En ciencia se usan tres escalas: **Celsius**, **Fahrenheit** y **Kelvin**.

- Celsius → Fahrenheit: `F = C × 9/5 + 32`
- Celsius → Kelvin: `K = C + 273.15`
</div>
<div class="lang-en" markdown="1">
In science, three scales are used: **Celsius**, **Fahrenheit**, and **Kelvin**.

- Celsius → Fahrenheit: `F = C × 9/5 + 32`
- Celsius → Kelvin: `K = C + 273.15`
</div>

```python
# @browser
nombre  = "Marte (promedio)"
celsius = -63

fahrenheit = celsius * 9/5 + 32
kelvin     = celsius + 273.15

print("Lugar:", nombre)
print("Celsius:   ", celsius,    "C")
print("Fahrenheit:", fahrenheit, "F")
print("Kelvin:    ", kelvin,     "K")
```

---

## <span class="lang-es">Ejemplo 3 — Energía cinética</span><span class="lang-en">Example 3 — Kinetic Energy</span>

<div class="lang-es" markdown="1">
La **energía cinética** es la energía de un objeto en movimiento: **E = ½ × m × v²**
</div>
<div class="lang-en" markdown="1">
**Kinetic energy** is the energy of a moving object: **E = ½ × m × v²**
</div>

```python
# @browser
# Pelota de tenis
masa_pelota = 0.058  # kg
vel_pelota  = 60     # m/s
ek_pelota   = 0.5 * masa_pelota * vel_pelota ** 2

# Auto a 100 km/h
masa_auto = 1200   # kg
vel_auto  = 27.8   # m/s
ek_auto   = 0.5 * masa_auto * vel_auto ** 2

# Estacion Espacial Internacional
masa_iss = 420000  # kg
vel_iss  = 7660    # m/s
ek_iss   = 0.5 * masa_iss * vel_iss ** 2

print("Energia cinetica:")
print("  Pelota de tenis:", ek_pelota, "J")
print("  Auto a 100 km/h:", ek_auto, "J")
print("  ISS en orbita:  ", ek_iss,             "J")
```

---

## <span class="lang-es">Ejemplo 4 — Peso en otros planetas</span><span class="lang-en">Example 4 — Weight on Other Planets</span>

<div class="lang-es" markdown="1">
Tu peso cambia según la gravedad del planeta. **Peso = masa × gravedad**
</div>
<div class="lang-en" markdown="1">
Your weight changes depending on the planet's gravity. **Weight = mass × gravity**
</div>

```python
# @browser
tu_masa = 50  # cambia por tu masa en kg

g_mercurio = 3.7
g_venus    = 8.87
g_tierra   = 9.8
g_marte    = 3.72
g_jupiter  = 24.79
g_luna     = 1.62

print("Con", tu_masa, "kg, tu peso seria:")
print("  Mercurio:", tu_masa * g_mercurio, "N")
print("  Venus:   ", tu_masa * g_venus, "N")
print("  Tierra:  ", tu_masa * g_tierra, "N")
print("  Marte:   ", tu_masa * g_marte, "N")
print("  Jupiter: ", tu_masa * g_jupiter, "N")
print("  Luna:    ", tu_masa * g_luna, "N")
```
