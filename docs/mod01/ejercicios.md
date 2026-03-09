# ✏️ Ejercicios — Módulo 1

<div class="hybrid-info">
  <div class="hybrid-badge browser">🌐 <span class="lang-es">En el navegador</span><span class="lang-en">In the browser</span></div>
  <div class="hybrid-badge local">💻 <span class="lang-es">En tu PC</span><span class="lang-en">On your PC</span></div>
</div>

---

## 🌐 Ejercicio 1 — Tu primera presentación

<div class="lang-es" markdown="1">
Modificá el código para imprimir **tu nombre**, tu **edad** y tu **planeta favorito**.
</div>
<div class="lang-en" markdown="1">
Modify the code to print **your name**, your **age**, and your **favorite planet**.
</div>

```python
# @browser
nombre  = "..."  # cambia por tu nombre
edad    = 0      # cambia por tu edad
planeta = "..."  # cambia por tu planeta favorito

print("Hola, me llamo", nombre)
print("Tengo", edad, "anos")
print("Mi planeta favorito es", planeta)
```

---

## 🌐 Ejercicio 2 — Calculadora de velocidad

<div class="lang-es" markdown="1">
**velocidad = distancia / tiempo**

Calculá la velocidad de una nave que recorre 384.400 km (Tierra-Luna) en 3 días.
</div>
<div class="lang-en" markdown="1">
**speed = distance / time**

Calculate the speed of a spacecraft that travels 384,400 km (Earth-Moon) in 3 days.
</div>

```python
# @browser
distancia_km = 384400  # km (Tierra-Luna)
tiempo_dias  = 3

tiempo_horas = tiempo_dias * 24
velocidad    = distancia_km / tiempo_horas

print("Distancia:", distancia_km, "km")
print("Tiempo:", tiempo_horas, "horas")
print("Velocidad:", velocidad, "km/h")
```

!!! tip ""
    <span class="lang-es">¿Podés calcular también la velocidad en m/s? (1 km = 1000 m, 1 hora = 3600 s)</span>
    <span class="lang-en">Can you also calculate the speed in m/s? (1 km = 1000 m, 1 hour = 3600 s)</span>

---

## 🌐 Ejercicio 3 — Área de un círculo

<div class="lang-es" markdown="1">
**A = π × r²** — Calculá el área de la Tierra (r=6.371 km) y la Luna (r=1.737 km),
y cuántas veces más grande es la Tierra.
</div>
<div class="lang-en" markdown="1">
**A = π × r²** — Calculate the area of Earth (r=6,371 km) and the Moon (r=1,737 km),
and how many times larger Earth is.
</div>

```python
# @browser
pi           = 3.14159265
radio_tierra = 6371
radio_luna   = 1737

area_tierra = pi * radio_tierra ** 2
area_luna   = pi * radio_luna   ** 2
veces       = area_tierra / area_luna

print("Area Tierra:", area_tierra, "km²")
print("Area Luna:  ", area_luna, "km²")
print("La Tierra es", veces, "veces mas grande")
```

---

## 💻 Ejercicio 4 — Unidades Astronómicas

<div class="lang-es" markdown="1">
Una **UA** (Unidad Astronómica) = distancia Tierra-Sol = 149.597.870 km.
Creá un programa que convierta las distancias de los planetas de UA a km.
</div>
<div class="lang-en" markdown="1">
One **AU** (Astronomical Unit) = Earth-Sun distance = 149,597,870 km.
Create a program that converts planet distances from AU to km.
</div>

```python
# @local
# Ejercicio 4 — Conversion de Unidades Astronomicas
UA_en_km = 149597870

mercurio_UA = 0.39
venus_UA    = 0.72
tierra_UA   = 1.00
marte_UA    = 1.52
jupiter_UA  = 5.20

print("Planeta     | UA   | Kilometros")
print("-" * 36)
print("Mercurio    |", mercurio_UA, "|", mercurio_UA * UA_en_km)
print("Venus       |", venus_UA,   "|", venus_UA   * UA_en_km)
print("Tierra      |", tierra_UA,  "|", tierra_UA  * UA_en_km)
print("Marte       |", marte_UA,   "|", marte_UA   * UA_en_km)
print("Jupiter     |", jupiter_UA, "|", jupiter_UA * UA_en_km)
```

---

## 💻 Ejercicio 5 — Conversor de tiempo

<div class="lang-es" markdown="1">
Creá un programa que convierta 31.536.000 segundos (1 año terrestre) a
minutos, horas y días. Luego hace lo mismo para un año en Marte (687 días).
</div>
<div class="lang-en" markdown="1">
Create a program that converts 31,536,000 seconds (1 Earth year) to
minutes, hours, and days. Then do the same for a Martian year (687 days).
</div>

```python
# @local
# Ejercicio 5 — Conversor de tiempo
segundos = 31536000  # 1 año terrestre

print("Un año en la Tierra:")
print("  Segundos:", segundos)
print("  Minutos: ", segundos / 60)
print("  Horas:   ", segundos / 3600)
print("  Dias:    ", segundos / 86400)

anio_marte = 687 * 86400  # en segundos
print()
print("Un año en Marte:")
print("  Dias:    ", 687)
print("  Segundos:", anio_marte)
```

!!! note ""
    <span class="lang-es">Para ejecutar: guardá el código en un archivo `.py`, abrí la terminal en esa carpeta y escribí `python nombre_del_archivo.py`.</span>
    <span class="lang-en">To run: save the code in a `.py` file, open the terminal in that folder, and type `python filename.py`.</span>
