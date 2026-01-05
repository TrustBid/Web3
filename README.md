<p align="center">
  <img src="docs/logoTrustBid.png" alt="TrustBid Logo" width="220"/>
</p>
<p align="center">
  <strong>Transparencia, trazabilidad y confianza desde el diseño</strong>
</p>



# 🛡️ TrustBid

**TrustBid** es una plataforma orientada a la **transparencia, trazabilidad y anticorrupción** en el manejo de fondos, licitaciones y procesos sensibles, utilizando tecnologías modernas y blockchain para garantizar **confianza, auditabilidad y datos verificables**.

---

## 🚀 Propósito

En muchos contextos (especialmente en LATAM), la falta de transparencia en el uso de fondos públicos o privados genera desconfianza y corrupción.  
**TrustBid nace para responder a una pregunta clave:**

> *¿Cómo sabemos que la ayuda, el dinero o los recursos llegan realmente a donde deben llegar?*

---

## 🔍 ¿Qué hace TrustBid?

- 📊 Visualiza datos de fondos y procesos de forma clara e interactiva  
- 🔗 Permite la **trazabilidad de transacciones y decisiones**
- 🛡️ Reduce intermediarios opacos
- 🧾 Facilita la auditoría pública y privada
- 🌍 Aplica a ONGs, gobiernos, empresas y proyectos sociales

---

## 🧱 Tecnologías utilizadas

### Frontend
- ⚛️ **React**
- 🟦 **TypeScript**
- 🎨 **Tailwind CSS**
- 📈 Gráficos interactivos (charts)

### Blockchain / Web3
- 🌟 **Stellar / Soroban** (trazabilidad, contratos inteligentes)
- 🔐 Enfoque en integridad y transparencia de datos

### Herramientas
- 🧰 Vite
- 🧪 Git & GitHub
- 💻 Visual Studio Code

---

## 🖥️ Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/trustbid.git

# Entrar al proyecto
cd trustbid

# Instalar dependencias
npm install

# Levantar entorno de desarrollo
npm run dev






# Stellar / Soroban Monorepo Scaffold

Monorepo listo para inicializar un proyecto sobre Stellar Soroban con contratos, interfaz de bindings y aplicaciones cliente (frontend/backend) trabajando en paralelo.

## Layout
- `packages/contracts`: workspace Rust para contratos Soroban (ej: `contract-a`).
- `packages/interface`: frontera estable; generación de bindings consumidos por frontend/backend.
- `packages/frontend`: cliente web que consume bindings generados.
- `packages/backend`: servicios que consumen bindings y exponen APIs.
- `docs`: arquitectura, contratos y decisiones técnicas.
- `scripts`: utilidades para devnet local, despliegue y generación de bindings.
- `infra`: plantillas para CI/CD e infraestructura (placeholders iniciales).

## Uso rápido
1. Instala toolchain Rust y Soroban CLI.
2. `scripts/devnet.sh` para levantar un devnet local (placeholder, agrega comandos reales).
3. `scripts/generate_bindings.sh` para regenerar bindings en `packages/interface/generated`.
4. `cargo build --workspace --manifest-path packages/contracts/Cargo.toml` para compilar contratos.

Adapta la licencia en `LICENSE` y completa `.env.example` antes de desplegar.
