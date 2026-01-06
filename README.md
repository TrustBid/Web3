# TrustBid - Plataforma global que aporta trazabilidad y transparencia verificable al uso de fondos sociales

[![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Stellar](https://img.shields.io/badge/Stellar-Blockchain-7D00FF?style=flat-square)](https://stellar.org/)

TrustBid es una plataforma orientada a la transparencia, trazabilidad y anticorrupción** en el manejo de fondos, licitaciones y procesos sensibles, utilizando tecnologías modernas y blockchain para garantizar confianza, auditabilidad y datos verificables.

## ✨ Caracteristicas
### 🚀 Propósito

TrustBid existe para **romper la caja negra en la gestión de fondos sociales y donaciones**.

Su propósito es transformar procesos cerrados y difíciles de auditar
en sistemas **transparentes, trazables y verificables desde el primer desembolso**,
utilizando tecnología blockchain como infraestructura de confianza.

TrustBid busca que la rendición de cuentas
no dependa de reportes tardíos ni de la buena voluntad de los intermediarios,
sino de **datos públicos, inmutables y accesibles**.

> _¿Cómo sabemos que la ayuda, el dinero o los recursos llegan realmente a donde deben llegar?_

Mediante **registros inmutables en blockchain y verificación criptográfica**,
TrustBid convierte esta incertidumbre en un estándar de confianza,
enfrentando la corrupción estructural que se repite en distintos países y realidades,
con tecnología diseñada para el bien común.


---

### 🔍 ¿Qué hace TrustBid?
  
- 🔗 Permite la **trazabilidad de transacciones y decisiones**
- 🛡️ Reduce intermediarios opacos
- 🧾 Facilita la auditoría pública y privada
- 🌍 Aplica a ONGs, gobiernos, empresas y proyectos sociales
  
### 📊 Visualización de Datos en Stellar

**TrustBid** aprovecha el **Ledger de Stellar** para transformar datos financieros complejos en interfaces interactivas y comprensibles para cualquier ciudadano o auditor.

- **Exploración en Tiempo Real:** Los fondos y movimientos se consultan directamente desde la red Stellar, garantizando que lo que ves en el dashboard es la realidad inmutable de la blockchain.
- **Gráficos de Flujo de Fondos:** Utilizamos la velocidad de confirmación de Stellar (2-5 segundos) para actualizar visualizaciones de desembolsos y gastos casi al instante.
- **Evidencia Técnica:** Cada punto de datos en nuestras gráficas está vinculado a un `Transaction Hash` de Stellar, permitiendo una verificación de "doble clic" para auditorías profundas.

---
### 🌱 Escalabilidad e inclusión

La arquitectura  está diseñada con una visión global e inclusiva, permitiendo que la transparencia sea accesible para todos y no solo para quienes cuentan con infraestructura avanzada.

El sistema permite:

- 🌍 **Adaptarse a distintos marcos legales y contextos regulatorios**, facilitando su adopción en diferentes países y regiones.
- 📈 **Escalar desde proyectos locales hasta iniciativas regionales o globales**, sin perder trazabilidad ni confianza.
- 🤝 **Incluir comunidades con acceso limitado a infraestructura tradicional**, reduciendo barreras tecnológicas y promoviendo la participación equitativa.

---

### 🛡️ Un paso hacia un futuro más justo

**TrustBid** no es solo una plataforma: es una **declaración de principios**.

Nace con el objetivo de:

- Reducir la corrupción mediante registros inmutables y auditables  
- Fortalecer instituciones a través de procesos abiertos y verificables  
- Proteger a las personas garantizando el uso responsable y trazable de los recursos  

Todo esto utilizando **blockchain como motor de cambio social**, no como fin en sí mismo.

> _La transparencia no debería ser un privilegio, sino un estándar global._

---

### ✨ Nuestra convicción

Construido con conciencia, propósito y responsabilidad, **TrustBid** refleja la creencia de que la tecnología puede —y debe— estar al servicio del bien común.

Porque un futuro más justo no solo se imagina:  
**se diseña, se construye y se verifica.**



## 🖥️ Instalación y uso

### PreRequisitos

- Node.js 18+ 
- pnpm (recommended) or npm
- Git
  
### Instalacion 

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/your-username/TrustBid.git
   cd TrustBid
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Abre tu navegador**
   Navegar a  [http://localhost:5173/](http://localhost:5173/)

## 📁 Estructura del Proyecto 
- `packages/contracts`: workspace Rust para contratos Soroban (ej: `contract-a`).
- `packages/interface`: frontera estable; generación de bindings consumidos por frontend/backend.
- `packages/frontend`: cliente web que consume bindings generados.
- `packages/backend`: servicios que consumen bindings y exponen APIs.
- `docs`: arquitectura, contratos y decisiones técnicas.
- `scripts`: utilidades para devnet local, despliegue y generación de bindings.
- `infra`: plantillas para CI/CD e infraestructura (placeholders iniciales).

## 🔐 Características de Seguridad

- **Transparencia en la Blockchain** – Todos los movimientos de fondos se registran en la cadena y son verificables públicamente
- **Aplicación de Contratos Inteligentes** – Las reglas para la asignación y ejecución de fondos son aplicadas por contratos inteligentes de Soroban
- **Privacidad de Datos desde el Diseño** – No se almacenan datos personales sensibles en servidores centralizados

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos
- **Stellar Development Foundation** por la infraestructura de blockchain

## 📞 Soporte

- **Email**: teamtrustbid@gmail.com






