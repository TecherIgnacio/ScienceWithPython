# 🔬 <span class="lang-es">Ejemplos — Módulo 2</span><span class="lang-en">Examples — Module 2</span>

<div class="lang-es" markdown="1">
Veamos cómo usar los condicionales para resolver problemas científicos reales.
</div>
<div class="lang-en" markdown="1">
Let's see how to use conditionals to solve real scientific problems.
</div>

---

## <span class="lang-es">Ejemplo 1 — Clasificar la temperatura de un planeta</span><span class="lang-en">Example 1 — Classifying a Planet's Temperature</span>

<div class="lang-es" markdown="1">
Según la temperatura superficial, clasificamos un planeta en distintas categorías:
</div>
<div class="lang-en" markdown="1">
Based on the surface temperature, we classify a planet into different categories:
</div>

```python
# @browser
planeta = "Venus"
temp_C  = 465  # temperatura promedio en °C

if temp_C < -50:
    categoria = "Helado"
elif temp_C < 0:
    categoria = "Frio"
elif temp_C < 50:
    categoria = "Templado (habitable)"
elif temp_C < 200:
    categoria = "Caliente"
else:
    categoria = "Extremadamente caliente"

print("Planeta:", planeta)
print("Temperatura:", temp_C, "C")
print("Categoria:  ", categoria)
```

---

## <span class="lang-es">Ejemplo 2 — ¿Puede escapar la nave?</span><span class="lang-en">Example 2 — Can the Spacecraft Escape?</span>

<div class="lang-es" markdown="1">
Para escapar de un planeta, la nave debe alcanzar la **velocidad de escape**.
Si no la alcanza, la gravedad la devuelve.
</div>
<div class="lang-en" markdown="1">
To escape a planet, the spacecraft must reach the **escape velocity**.
If it doesn't, gravity pulls it back.
</div>

```python
# @browser
planeta          = "Tierra"
vel_escape_km_s  = 11.2   # km/s (velocidad de escape de la Tierra)
vel_nave_km_s    = 9.5    # km/s (velocidad de nuestra nave)

print("Nave:", vel_nave_km_s, "km/s")
print("Escape necesario:", vel_escape_km_s, "km/s")

if vel_nave_km_s >= vel_escape_km_s:
    diferencia = vel_nave_km_s - vel_escape_km_s
    print("La nave ESCAPA con", diferencia, "km/s de sobra")
else:
    faltante = vel_escape_km_s - vel_nave_km_s
    print("La nave NO escapa. Le faltan", faltante, "km/s")
```

---

## <span class="lang-es">Ejemplo 3 — Clasificar gravedad de planetas</span><span class="lang-en">Example 3 — Classifying Planet Gravity</span>

<div class="lang-es" markdown="1">
Comparamos la gravedad de un planeta con la de la Tierra (9.8 m/s²) para saber
si los astronautas se sentirían más pesados o más livianos.
</div>
<div class="lang-en" markdown="1">
We compare a planet's gravity to Earth's (9.8 m/s²) to determine
whether astronauts would feel heavier or lighter.
</div>

```python
# @browser
g_tierra = 9.8  # m/s²

planetas = [
    ("Mercurio", 3.7),
    ("Venus",    8.87),
    ("Marte",    3.72),
    ("Jupiter",  24.79),
    ("Luna",     1.62),
]

for nombre, g in planetas:
    ratio = g / g_tierra
    if ratio < 0.5:
        estado = "mucho mas liviano"
    elif ratio < 0.9:
        estado = "mas liviano"
    elif ratio <= 1.1:
        estado = "similar a la Tierra"
    elif ratio <= 2.0:
        estado = "mas pesado"
    else:
        estado = "mucho mas pesado"
    print(nombre + ":", estado, "(" + str(g) + " m/s²)")
```

!!! note ""
    <span class="lang-es">Este ejemplo usa una lista y un bucle `for` — los veremos en detalle en el Módulo 3. Por ahora, observá cómo los condicionales clasifican cada planeta.</span>
    <span class="lang-en">This example uses a list and a `for` loop — we'll cover those in Module 3. For now, notice how the conditionals classify each planet.</span>

---

## <span class="lang-es">Ejemplo 4 — ¿Agua líquida posible?</span><span class="lang-en">Example 4 — Liquid Water Possible?</span>

<div class="lang-es" markdown="1">
El agua es líquida entre 0°C y 100°C a presión normal.
A menor presión atmosférica, el punto de ebullición baja.
</div>
<div class="lang-en" markdown="1">
Water is liquid between 0°C and 100°C at normal pressure.
At lower atmospheric pressure, the boiling point drops.
</div>

```python
# @browser
planeta     = "Marte"
temp_C      = 20     # temperatura en ese momento (°C)
presion_atm = 0.006  # presion atmosferica (atm) — Marte tiene muy poca

# El agua hierve a menos temperatura con poca presion
# Regla simplificada: punto de ebullicion ~ 100 * presion_atm^0.3
punto_ebullicion = 100 * presion_atm ** 0.3

if temp_C > 0 and temp_C < punto_ebullicion and presion_atm > 0.006:
    print(planeta, ": agua liquida POSIBLE")
    print("Rango valido:", 0, "a", punto_ebullicion, "C")
else:
    print(planeta, ": agua liquida NO posible")
    if temp_C <= 0:
        print("  → Temperatura demasiado baja (se congela)")
    if presion_atm <= 0.006:
        print("  → Presion demasiado baja (se evapora)")
    if temp_C >= punto_ebullicion:
        print("  → Temperatura demasiado alta (se evapora)")
```
