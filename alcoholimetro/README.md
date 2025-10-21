# 🥂 Alcoholímetro - Simulador de Nivel de Alcohol en Sangre

Aplicativo en Node.js que calcula el nivel de alcohol en sangre (BAC - Blood Alcohol Content) utilizando la fórmula de Widmark, con interfaz interactiva y librerías propias para fomentar la reutilización de código.

## 🧠 Prompt utilizado

Necesito un simulador de alcoholímetro en Node.js que calcule el BAC (Blood Alcohol Content) usando la fórmula de Widmark. El programa debe pedir al usuario su peso, sexo, número de tragos consumidos y tiempo transcurrido desde el último trago. Debe usar librerías propias para manejo de entrada, cálculos matemáticos y logging con colores (chalk). Mostrar el resultado con el nivel de BAC, estado legal para conducir y recomendaciones con formato colorido.

## 📂 Estructura del proyecto

```
alcoholimetro/
├── alcoholimetro.js       # Archivo principal
├── package.json           # Configuración del proyecto
├── README.md              # Documentación
└── lib/
    ├── alcohol-lib.js     # Lógica de cálculo del BAC y estados legales
    ├── input.js           # Manejo de entrada del usuario
    ├── logger.js          # Sistema de logging con colores
    └── math-lib.js        # Funciones matemáticas auxiliares
```

## ⚙️ Instalación

```bash
git clone https://github.com/2025-b-sw-construccion-gr2/rocha-2025-b-exrr-sw-gr2.git

cd alcoholimetro

npm install
```

## ▶️ Uso

```bash
npm start
```

O directamente:

```bash
node alcoholimetro.js
```

El programa te solicitará:
1. **Peso** en kilogramos
2. **Sexo** (H/M)
3. **Número de tragos** estándar consumidos
4. **Horas** transcurridas desde el último trago

### 📋 Ejemplo de ejecución

```
[INFO] Bienvenido al simulador de alcoholímetro 🥂

--- ALCOHOLÍMETRO INTERACTIVO ---
Ingrese su peso (kg): 70
Ingrese su sexo (H/M): H
¿Cuántos tragos estándar ha consumido?: 3
¿Hace cuántas horas fue su último trago?: 2

--- RESULTADO DEL ALCOHOLÍMETRO ---
Nivel estimado de alcohol en sangre (BAC): 0.04%
Estado: Afectado: No se recomienda conducir

⚠️  Precaución: sus reflejos pueden estar afectados.
------------------------------------

[OK] Evaluación completada correctamente.
```

## 🧩 Librerías usadas

### Externas

**chalk** → Para colorear y dar formato a los textos de la consola, haciendo los mensajes más claros y visuales (info en cyan, éxito en verde, advertencia en amarillo, error en rojo).

### Propias

**alcohol-lib.js** → Contiene la lógica principal del alcoholímetro: cálculo del BAC usando la fórmula de Widmark y determinación del estado legal basado en el nivel de alcohol en sangre.

**input.js** → Maneja la interacción con el usuario mediante readline, con funciones para hacer preguntas y obtener datos (peso, sexo, tragos, horas).

**logger.js** → Sistema de logging profesional con colores y símbolos para diferentes tipos de mensajes (info, éxito, advertencia, error) y formato especial para mostrar resultados del BAC.

**math-lib.js** → Funciones matemáticas auxiliares reutilizables: validación de números, redondeo a 2 decimales y conversión de strings a números.

## 📐 Fórmula de Widmark

El cálculo del BAC se basa en la **fórmula de Widmark**:

```
BAC = (gramos de alcohol / (peso en gramos × coeficiente de distribución)) × 100 - (tasa de eliminación × horas)
```

### Parámetros:
- **Gramos de alcohol**: Cada trago estándar = 14 gramos de alcohol puro
- **Coeficiente de distribución**: 
  - Hombres: 0.68
  - Mujeres: 0.55
- **Tasa de eliminación**: 0.015% por hora (constante metabólica promedio)

### Estados legales según BAC:

| BAC | Estado | Descripción |
|-----|--------|-------------|
| 0.00% | 🟢 Sobrio | Sin alcohol en sangre |
| < 0.03% | 🟢 Apto para conducir | Nivel muy bajo, casi sobrio |
| 0.03% - 0.08% | 🟡 Afectado | No se recomienda conducir, reflejos afectados |
| ≥ 0.08% | 🔴 Ilegal | Prohibido conducir, supera el límite legal |

## 🎯 Características

✅ Cálculo preciso del BAC usando fórmula científica  
✅ Interfaz interactiva por línea de comandos  
✅ Validación de datos de entrada  
✅ Resultados con códigos de color para mejor visualización  
✅ Evaluación del estado legal para conducir  
✅ Recomendaciones de seguridad  
✅ Código modular con librerías propias reutilizables  

## ⚠️ Nota importante

Este simulador es **solo con fines educativos**. Los resultados son aproximaciones basadas en promedios poblacionales y no deben utilizarse para tomar decisiones reales sobre conducir bajo los efectos del alcohol. El metabolismo del alcohol varía según múltiples factores individuales (edad, tolerancia, medicamentos, condición física, etc.).

## 📝 Licencia

ISC

---

**Desarrollado para prácticas de programación y reutilización de código en Node.js** 🚀
