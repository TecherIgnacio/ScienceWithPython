# 🏆 <span class="lang-es">Retos Extra — Módulo 2</span><span class="lang-en">Extra Challenges — Module 2</span>

<div class="lang-es" markdown="1">
¿Terminaste los ejercicios? Estos retos requieren combinar varias condiciones.
¡Intentá resolverlos sin mirar la solución!
</div>
<div class="lang-en" markdown="1">
Finished the exercises? These challenges require combining multiple conditions.
Try to solve them without looking at the solution!
</div>

---

## 🏆 <span class="lang-es">Reto 1 — Clasificador de estrellas</span><span class="lang-en">Challenge 1 — Star Classifier</span>

<div class="lang-es" markdown="1">
Los astrónomos clasifican las estrellas por temperatura superficial.
Completá el clasificador usando `if/elif/else`:

| Tipo | <span class="lang-es">Temperatura</span><span class="lang-en">Temperature</span> | <span class="lang-es">Color</span><span class="lang-en">Color</span> |
|---|---|---|
| O | > 30.000 K | <span class="lang-es">Azul</span><span class="lang-en">Blue</span> |
| B | 10.000 – 30.000 K | <span class="lang-es">Azul-blanco</span><span class="lang-en">Blue-white</span> |
| A | 7.500 – 10.000 K | <span class="lang-es">Blanco</span><span class="lang-en">White</span> |
| F | 6.000 – 7.500 K | <span class="lang-es">Amarillo-blanco</span><span class="lang-en">Yellow-white</span> |
| G | 5.200 – 6.000 K | <span class="lang-es">Amarillo (como el Sol)</span><span class="lang-en">Yellow (like the Sun)</span> |
| K | 3.700 – 5.200 K | <span class="lang-es">Naranja</span><span class="lang-en">Orange</span> |
| M | < 3.700 K | <span class="lang-es">Rojo</span><span class="lang-en">Red</span> |
</div>
<div class="lang-en" markdown="1">
Astronomers classify stars by their surface temperature.
Complete the classifier using `if/elif/else`:

| Type | Temperature | Color |
|---|---|---|
| O | > 30,000 K | Blue |
| B | 10,000 – 30,000 K | Blue-white |
| A | 7,500 – 10,000 K | White |
| F | 6,000 – 7,500 K | Yellow-white |
| G | 5,200 – 6,000 K | Yellow (like the Sun) |
| K | 3,700 – 5,200 K | Orange |
| M | < 3,700 K | Red |
</div>

```python
# @browser
estrella    = "Sol"
temp_K      = 5778  # temperatura en Kelvin

# completá el clasificador aqui
if temp_K > 30000:
    tipo  = "O"
    color = "Azul"
elif temp_K > 10000:
    tipo  = "B"
    color = "Azul-blanco"
elif temp_K > 7500:
    tipo  = "A"
    color = "Blanco"
elif temp_K > 6000:
    tipo  = "F"
    color = "Amarillo-blanco"
elif temp_K > 5200:
    tipo  = "G"
    color = "Amarillo"
elif temp_K > 3700:
    tipo  = "K"
    color = "Naranja"
else:
    tipo  = "M"
    color = "Rojo"

print("Estrella:", estrella)
print("Temperatura:", temp_K, "K")
print("Tipo:", tipo, "—", color)
```

<div class="lang-es" markdown="1">
Probá con: Sol (5778 K), Sirio (9940 K), Betelgeuse (3500 K), Rigel (12000 K).
</div>
<div class="lang-en" markdown="1">
Try with: Sun (5778 K), Sirius (9940 K), Betelgeuse (3500 K), Rigel (12000 K).
</div>

---

## 🏆 <span class="lang-es">Reto 2 — Año bisiesto</span><span class="lang-en">Challenge 2 — Leap Year</span>

<div class="lang-es" markdown="1">
Un año es bisiesto si:

1. Es divisible por 4 **y**
2. No es divisible por 100 **o** es divisible por 400

*Pista: el operador `%` da el resto de la división. Si `año % 4 == 0`, es divisible por 4.*
</div>
<div class="lang-en" markdown="1">
A year is a leap year if:

1. It is divisible by 4 **and**
2. It is not divisible by 100 **or** it is divisible by 400

*Hint: the `%` operator gives the remainder. If `year % 4 == 0`, it's divisible by 4.*
</div>

```python
# @browser
anio = 2024  # cambia el año

# Completá las condiciones:
if anio % 4 == 0 and (anio % 100 != 0 or anio % 400 == 0):
    print(anio, "ES año bisiesto (366 dias)")
else:
    print(anio, "NO es año bisiesto (365 dias)")
```

<div class="lang-es" markdown="1">
Verificá con: 2024 (sí), 1900 (no), 2000 (sí), 2100 (no).
</div>
<div class="lang-en" markdown="1">
Verify with: 2024 (yes), 1900 (no), 2000 (yes), 2100 (no).
</div>

---

## 🏆 <span class="lang-es">Reto 3 — Índice UV y protección solar</span><span class="lang-en">Challenge 3 — UV Index and Sun Protection</span>

<div class="lang-es" markdown="1">
La OMS clasifica el índice UV y recomienda protección según el nivel.
Construí un clasificador completo:

| Índice UV | <span class="lang-es">Nivel</span><span class="lang-en">Level</span> | <span class="lang-es">Recomendación</span><span class="lang-en">Recommendation</span> |
|---|---|---|
| 0–2 | <span class="lang-es">Bajo</span><span class="lang-en">Low</span> | <span class="lang-es">Sin protección</span><span class="lang-en">No protection needed</span> |
| 3–5 | <span class="lang-es">Moderado</span><span class="lang-en">Moderate</span> | <span class="lang-es">Gafas y sombrero</span><span class="lang-en">Glasses and hat</span> |
| 6–7 | <span class="lang-es">Alto</span><span class="lang-en">High</span> | <span class="lang-es">+ Protector solar</span><span class="lang-en">+ Sunscreen</span> |
| 8–10 | <span class="lang-es">Muy alto</span><span class="lang-en">Very high</span> | <span class="lang-es">+ Ropa protectora</span><span class="lang-en">+ Protective clothing</span> |
| 11+ | <span class="lang-es">Extremo</span><span class="lang-en">Extreme</span> | <span class="lang-es">Evitar exposición</span><span class="lang-en">Avoid exposure</span> |
</div>
<div class="lang-en" markdown="1">
The WHO classifies the UV index and recommends protection by level.
Build a complete classifier:

| UV Index | Level | Recommendation |
|---|---|---|
| 0–2 | Low | No protection needed |
| 3–5 | Moderate | Glasses and hat |
| 6–7 | High | + Sunscreen |
| 8–10 | Very high | + Protective clothing |
| 11+ | Extreme | Avoid exposure |
</div>

```python
# @browser
indice_uv = 7  # cambia el valor (0 a 15)

# completá el clasificador:
if indice_uv <= 2:
    nivel    = "Bajo"
    consejo  = "Sin proteccion especial"
elif indice_uv <= 5:
    nivel    = "Moderado"
    consejo  = "Usa gafas y sombrero"
elif indice_uv <= 7:
    nivel    = "Alto"
    consejo  = "Gafas, sombrero y protector solar"
elif indice_uv <= 10:
    nivel    = "Muy alto"
    consejo  = "Ropa protectora + protector solar factor alto"
else:
    nivel    = "Extremo"
    consejo  = "Evita la exposicion directa al sol"

print("Indice UV:", indice_uv)
print("Nivel:    ", nivel)
print("Consejo:  ", consejo)
```

---

!!! important ""
    <span class="lang-es">**¿Bloqueado/a?** Empezá por el caso más simple: un solo `if`. Luego agregá los `elif` uno por uno, verificando que cada condición funcione antes de seguir.</span>
    <span class="lang-en">**Stuck?** Start with the simplest case: a single `if`. Then add `elif` blocks one by one, checking each condition works before moving on.</span>
