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

<div class="py-interactive" data-mode="browser"># Completá con tus datos
nombre  = "..."   # Cambiá por tu nombre
edad    = 0       # Cambiá por tu edad
planeta = "..."   # Cambiá por tu planeta favorito

print("Hola, me llamo", nombre)
print("Tengo", edad, "años")
print("Mi planeta favorito es", planeta)</div>

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

<div class="py-interactive" data-mode="browser">distancia_km = 384400  # km (distancia Tierra-Luna)
tiempo_dias  = 3       # días

# Primero convertí los días a horas (1 día = 24 horas)
tiempo_horas = tiempo_dias * 24

# Ahora calculá la velocidad en km/h
velocidad = distancia_km / tiempo_horas

print("Distancia:", distancia_km, "km")
print("Tiempo:", tiempo_horas, "horas")
print("Velocidad promedio:", velocidad, "km/h")</div>

:::{tip}
<span class="lang-es">¿Podés modificar el código para calcular también la velocidad en m/s? (1 km = 1000 m, 1 hora = 3600 s)</span>
<span class="lang-en">Can you modify the code to also calculate the speed in m/s? (1 km = 1000 m, 1 hour = 3600 s)</span>
:::

---

## 🌐 Ejercicio 3 — Área de un círculo

<div class="lang-es">

El área de un círculo es: **A = π × r²**

Calculá el área de:
1. La Tierra (radio ≈ 6.371 km)
2. La Luna (radio ≈ 1.737 km)

Y encontrá cuántas veces es más grande la sección transversal de la Tierra que la de la Luna.

</div>
<div class="lang-en">

The area of a circle is: **A = π × r²**

Calculate the area of:
1. Earth (radius ≈ 6,371 km)
2. The Moon (radius ≈ 1,737 km)

And find how many times larger Earth's cross-section is compared to the Moon's.

</div>

<div class="py-interactive" data-mode="browser">pi = 3.14159265

radio_tierra = 6371   # km
radio_luna   = 1737   # km

area_tierra = pi * radio_tierra ** 2
area_luna   = pi * radio_luna   ** 2

veces = area_tierra / area_luna

print("Área de la sección de la Tierra:", round(area_tierra, 0), "km²")
print("Área de la sección de la Luna:  ", round(area_luna,   0), "km²")
print("La Tierra es", round(veces, 1), "veces más grande que la Luna")</div>

---

## 💻 Ejercicio 4 — Conversión de unidades astronómicas

<div class="lang-es">

Una **Unidad Astronómica (UA)** es la distancia promedio de la Tierra al Sol: **149.597.870 km**.
Es la unidad que se usa para medir distancias dentro del Sistema Solar.

Creá un programa en tu PC que:
1. Defina la distancia de cada planeta al Sol en UA
2. Convierta cada distancia a kilómetros
3. Imprima los resultados

</div>
<div class="lang-en">

An **Astronomical Unit (AU)** is the average distance from Earth to the Sun: **149,597,870 km**.
It's the unit used to measure distances within the Solar System.

Create a program on your PC that:
1. Defines each planet's distance from the Sun in AU
2. Converts each distance to kilometers
3. Prints the results

</div>

<div class="py-interactive" data-mode="local">
# Ejercicio 4 — Conversión de Unidades Astronómicas
# Ejecutá este archivo en tu PC con: python ejercicio4.py

UA_en_km = 149597870  # 1 UA en kilómetros

# Distancias al Sol en Unidades Astronómicas (UA)
mercurio_UA = 0.39
venus_UA    = 0.72
tierra_UA   = 1.00
marte_UA    = 1.52
jupiter_UA  = 5.20
saturno_UA  = 9.58

# Convertir a kilómetros
mercurio_km = mercurio_UA * UA_en_km
venus_km    = venus_UA    * UA_en_km
tierra_km   = tierra_UA   * UA_en_km
marte_km    = marte_UA    * UA_en_km
jupiter_km  = jupiter_UA  * UA_en_km
saturno_km  = saturno_UA  * UA_en_km

print("Planeta     | UA    | Kilómetros")
print("-" * 40)
print("Mercurio    |", mercurio_UA, "|", mercurio_km)
print("Venus       |", venus_UA,   "|", venus_km)
print("Tierra      |", tierra_UA,  "|", tierra_km)
print("Marte       |", marte_UA,   "|", marte_km)
print("Júpiter     |", jupiter_UA, "|", jupiter_km)
print("Saturno     |", saturno_UA, "|", saturno_km)
</div>

---

## 💻 Ejercicio 5 — Segundo por segundo

<div class="lang-es">

Muchos procesos científicos se miden en unidades de tiempo muy específicas.
Creá un programa en tu PC que tome una cantidad de **segundos** y la convierta a:
- Minutos
- Horas
- Días

Usá como ejemplo la duración de un año en la Tierra: **31.536.000 segundos**.

</div>
<div class="lang-en">

Many scientific processes are measured in very specific time units.
Create a program on your PC that takes a number of **seconds** and converts it to:
- Minutes
- Hours
- Days

Use as an example the length of a year on Earth: **31,536,000 seconds**.

</div>

<div class="py-interactive" data-mode="local">
# Ejercicio 5 — Conversor de tiempo
# Ejecutá este archivo con: python ejercicio5.py

segundos_totales = 31536000  # 1 año en la Tierra

minutos = segundos_totales / 60
horas   = minutos / 60
dias    = horas / 24

print("Un año en la Tierra equivale a:")
print("  Segundos:", segundos_totales)
print("  Minutos: ", minutos)
print("  Horas:   ", horas)
print("  Días:    ", dias)

# Bonus: ¿Y en Marte? Un año en Marte dura 687 días terrestres
anio_marte_dias = 687
anio_marte_seg  = anio_marte_dias * 24 * 3600

print()
print("Un año en Marte dura:")
print("  Días terrestres:", anio_marte_dias)
print("  Segundos:       ", anio_marte_seg)
</div>

:::{note}
<span class="lang-es">Para ejecutar estos archivos: guardá el código en un archivo `.py`, abrí la terminal en la carpeta donde lo guardaste y escribí <code>python nombre_del_archivo.py</code>. Si no sabés cómo, revisá la sección de <strong>Configuración</strong>.</span>
<span class="lang-en">To run these files: save the code in a `.py` file, open the terminal in the folder where you saved it, and type <code>python filename.py</code>. If you're not sure how, review the <strong>Setup</strong> section.</span>
:::
