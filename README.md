# Complejidad Algorítmica
Teoría de la complejidad estudia el consumo de recursos que un algoritmo ocupa. La complejidad se basa en el crecimiento de recursos, no en su tamaño.

## Aspectos a analizar
Los aspectos por analizar se dividen en dos _Recursos_.
- Tiempo / temporal
- Espacio / espacial

A veces podemos sacrificar uno por otro.

Cuando hablamos de complejidad algorítmica nos referimos a _medir los recursos_, el rendimiento de un algoritmo.

En la Complejidad Temporal nos interesa por ejemplo saber, ¿cuánto tarda?. Pero no solo la ejecucion sino el ritmo es decir cómo aumenta el tiempo, mientras que en la Complejidad Espacial, ¿cuánto espacio en memoria ocupa? En _JavaScript_ el mejor aspecto a analizar es el tiempo ya que el espacio es mucho más importante en dispositivos embebidos (chips).

## Otras complejidades existentes
- Accesos a memoria
- Procesos paralelos
- Comparaciones

# Análisis asintótico
El análisis asintótico nace de la idea de simplificar. Es un metodo para describir el comportamiento limitante de una funcion.

## Notación Big-O
Busca describir una funcion que sea mayor o igual que la complejidad de un algoritmo.
|Clase|Crecimiento|
|-|-|
|||
### CalCálculo de la notación Big-O
#### Timepo
```sh
let bar             // O(1)
if() {}             // O(1)
for() {}            // O(n)
while() {}          // O(n)
for() { for() {} }  // O(n^2)
```