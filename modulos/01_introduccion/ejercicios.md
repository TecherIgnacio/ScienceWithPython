# ✏️ Ejercicios — Módulo 1

<div class="lang-es">

Es hora de practicar. Vas a encontrar ejercicios de dos tipos:

</div>
<div class="lang-en">

Time to practice. You'll find two types of exercises:

</div>

<div class="hybrid-info">
  <div class="hybrid-badge browser">🌐 <span class="lang-es">En el navegador — editá y ejecutá directamente</span><span class="lang-en">In the browser — edit and run directly</span></div>
  <div class="hybrid-badge local">💻 <span class="lang-es">En tu PC — descargá el archivo y ejecutalo</span><span class="lang-en">On your PC — download the file and run it</span></div>
</div>

---

## 🌐 Ejercicio 1 — Tu primera presentación

<div class="lang-es">

Modificá el código para que imprima **tu nombre**, tu **edad** y tu **planeta favorito**.

</div>
<div class="lang-en">

Modify the code to print **your name**, your **age**, and your **favorite planet**.

</div>

```{code-block} python
:class: py-cell-browser

# Completá con tus datos
nombre  = "..."   # Cambia por tu nombre
edad    = 0       # Cambia por tu edad
planeta = "..."   # Cambia por tu planeta favorito

print("Hola, me llamo", nombre)
print("Tengo", edad, "años")
print("Mi planeta favorito es", planeta)
```

---

## 🌐 Ejercicio 2 — Calculadora de velocidad

<div class="lang-es">

La velocidad se calcula como: **velocidad = distancia / tiempo**

Completá el código para calcular la velocidad promedio de una nave espacial
que recorre 384.400 km (distancia Tierra-Luna) en 3 días.

</div>
<div class="lang-en">

Speed is calculated as: **speed = distance / time**

Complete the code to calculate the average speed of a spacecraft
that travels 384,400 km (Earth-Moon distance) in 3 days.

</div>

```{code-block} python
:class: py-cell-browser

distancia_km = 384400  # km (distancia Tierra-Luna)
tiempo_dias  = 3       # dias

# Convertí los días a horas (1 día = 24 horas)
tiempo_horas = tiempo_dias * 24

# Calculá la velocidad en km/h
velocidad = distancia_km / tiempo_horas

print("Distancia:", distancia_km, "km")
print("Tiempo:", tiempo_horas, "horas")
print("Velocidad promedio:", velocidad, "km/h")
```

:::{tip}
<span class="lang-es">¿Podés modificar el código para calcular también la velocidad en m/s? (1 km = 1000 m, 1 hora = 3600 s)</span>
<span class="lang-en">Can you modify the code to also calculate the speed in m/s? (1 km = 1000 m, 1 hour = 3600 s)</span>
:::

---

## 🌐 Ejercicio 3 — Área de un círculo

<div class="lang-es">

El área de un círculo es: **A = π × r²**

Calculá el área de la Tierra (radio ≈ 6.371 km) y la Luna (radio ≈ 1.737 km),
y encontrá cuántas veces es más grande la Tierra que la Luna.

</div>
<div class="lang-en">

The area of a circle is: **A = π × r²**

Calculate the area of Earth (radius ≈ 6,371 km) and the Moon (radius ≈ 1,737 km),
and find how many times larger Earth is compared to the Moon.

</div>

```{code-block} python
:class: py-cell-browser

pi = 3.14159265

radio_tierra = 6371   # km
radio_luna   = 1737   # km

area_tierra = pi * radio_tierra ** 2
area_luna   = pi * radio_luna   ** 2

veces = area_tierra / area_luna

print("Area de la Tierra:", round(area_tierra, 0), "km²")
print("Area de la Luna:  ", round(area_luna,   0), "km²")
print("La Tierra es", round(veces, 1), "veces mas grande que la Luna")
```

---

## 💻 Ejercicio 4 — Conversión de Unidades Astronómicas

<div class="lang-es">

Una **Unidad Astronómica (UA)** es la distancia promedio de la Tierra al Sol: 149.597.870 km.

Creá un programa en tu PC que defina las distancias de cada planeta en UA,
las convierta a km, y las imprima.

</div>
<div class="lang-en">

An **Astronomical Unit (AU)** is the average distance from Earth to the Sun: 149,597,870 km.

Create a program on your PC that defines each planet's distance in AU,
converts them to km, and prints the results.

</div>

```{code-block} python
:class: py-cell-local

# Ejercicio 4 — Conversion de Unidades Astronomicas
# Ejecuta este archivo con: python ejercicio4.py

UA_en_km = 149597870  # 1 UA en kilometros

# Distancias al Sol en Unidades Astronomicas
mercurio_UA = 0.39
venus_UA    = 0.72
tierra_UA   = 1.00
marte_UA    = 1.52
jupiter_UA  = 5.20
saturno_UA  = 9.58

# Convertir a kilometros
mercurio_km = mercurio_UA * UA_en_km
venus_km    = venus_UA    * UA_en_km
tierra_km   = tierra_UA   * UA_en_km
marte_km    = marte_UA    * UA_en_km
jupiter_km  = jupiter_UA  * UA_en_km
saturno_km  = saturno_UA  * UA_en_km

print("Planeta     | UA    | Kilometros")
print("-" * 38)
print("Mercurio    |", mercurio_UA, "|", mercurio_km)
print("Venus       |", venus_UA,   "|", venus_km)
print("Tierra      |", tierra_UA,  "|", tierra_km)
print("Marte       |", marte_UA,   "|", marte_km)
print("Jupiter     |", jupiter_UA, "|", jupiter_km)
print("Saturno     |", saturno_UA, "|", saturno_km)
```

---

## 💻 Ejercicio 5 — Conversor de tiempo

<div class="lang-es">

Creá un programa en tu PC que tome 31.536.000 segundos (1 año terrestre) y los convierta a
minutos, horas y días. Luego hace lo mismo con un año en Marte (687 días terrestres).

</div>
<div class="lang-en">

Create a program on your PC that takes 31,536,000 seconds (1 Earth year) and converts them to
minutes, hours, and days. Then do the same for a Martian year (687 Earth days).

</div>

```{code-block} python
:class: py-cell-local

# Ejercicio 5 — Conversor de tiempo
# Ejecuta este archivo con: python ejercicio5.py

segundos_totales = 31536000  # 1 año terrestre

minutos = segundos_totales / 60
horas   = minutos / 60
dias    = horas / 24

print("Un año en la Tierra equivale a:")
print("  Segundos:", segundos_totales)
print("  Minutos: ", minutos)
print("  Horas:   ", horas)
print("  Dias:    ", dias)

# Año en Marte
anio_marte_dias = 687
anio_marte_seg  = anio_marte_dias * 24 * 3600

print()
print("Un año en Marte dura:")
print("  Dias terrestres:", anio_marte_dias)
print("  Segundos:       ", anio_marte_seg)
```

:::{note}
<span class="lang-es">Para ejecutar estos archivos: guardá el código en un archivo <code>.py</code>, abrí la terminal en esa carpeta y escribí <code>python nombre_archivo.py</code>. Si necesitás ayuda, revisá la sección de <strong>Configuración</strong>.</span>
<span class="lang-en">To run these files: save the code in a <code>.py</code> file, open the terminal in that folder, and type <code>python filename.py</code>. If you need help, review the <strong>Setup</strong> section.</span>
:::
