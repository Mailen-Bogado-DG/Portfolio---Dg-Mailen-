# Mai — Portfolio de Mailen Elda Bogado

Portfolio realizado con Next.js (App Router), React, TypeScript y Tailwind CSS. Diseño rosa y violeta, portada animada, siete trabajos con sus portadas originales, estudios con visor de certificados y enlaces directos de contacto.

## Abrir y verlo desde Visual Studio Code

1. Abrí **Visual Studio Code → Archivo → Abrir carpeta**.
2. Elegí la carpeta **Proyecto Portfolio Mailen** completa.
3. Abrí **Terminal → Nueva terminal**.
4. Si es la primera vez, instalá las dependencias:

   ```bash
   npm install
   ```

5. Iniciá el sitio:

   ```bash
   npm run dev
   ```

6. Abrí **http://localhost:3000** en tu navegador. Si el puerto está ocupado, usá la dirección que indique la terminal.

Dejá esa terminal abierta mientras trabajás. Al guardar un archivo, el navegador actualiza los cambios. Para detenerlo, presioná **Ctrl+C**.

Necesitás Node.js 20.9 o posterior (se recomienda Node 22 LTS). Si `npm` no se reconoce, instalá Node desde https://nodejs.org y reiniciá VS Code. No se necesita Live Server: Next.js se inicia con `npm run dev`.

## Personalizar contenido

| Qué querés cambiar | Archivo o carpeta |
| --- | --- |
| Presentación, foto, contacto y enlace de CV | `data/site.ts` |
| Proyectos, categorías, años, contextos, procesos y galerías | `data/projects.ts` |
| Estudios, instituciones y certificados | `data/education.ts` |
| Colores, tamaños, espacios y responsive | `app/globals.css` |
| Título y descripción SEO general | `app/layout.tsx` |
| Foto personal | `public/images/mai-placeholder.jpg` |
| Portadas y galería | `public/images/projects/` |
| Certificados | `public/images/certificates/` |
| CV descargable | **Agregar tu archivo en `public/cv.pdf`** |

Las rutas de archivos en los datos comienzan con `/images/`, sin `public`. Podés usar JPG, PNG, WebP o SVG. Para reemplazar la ilustración por tu foto, guardala con el mismo nombre o cambiá `portrait` y `portraitAlt` en `data/site.ts`.

**Las siete portadas corresponden a los trabajos proporcionados por Mai. La ilustración de retrato y los estudios siguen siendo ejemplos por completar.** Los textos de contexto, proceso y galerías de los trabajos se pueden agregar en `data/projects.ts`. En `components/Education.tsx` también podés quitar la leyenda general de formación de muestra; la leyenda del retrato está en `components/About.tsx`.

El CV no se incluyó: el enlace apunta a `/cv.pdf` y tiene `download`, como se solicitó. Hasta agregar el PDF real, esa descarga no estará disponible.

Para agregar proyectos, duplicá un objeto en `data/projects.ts` con un `id` y un `slug` únicos. Las rutas se generan automáticamente al compilar. En `images`, usá `layout: "full"` para una imagen completa o dos elementos consecutivos con `layout: "half"` para dos columnas. En celular se muestran en una columna. `mockups` contiene las aplicaciones finales.

## Comprobar y generar una versión para publicar

```bash
npm run typecheck
npm run build
npm start
```

`npm run build` genera la carpeta **out**, con el sitio estático completo. `npm start` permite revisar esa versión; abrí la dirección que imprima la terminal.

## Subir a Netlify cuando quieras

El proyecto ya tiene exportación estática y un `netlify.toml` preparado. No requiere base de datos, variables secretas ni servidor propio.

**Opción manual:** ejecutá `npm run build` y subí la carpeta **out** a Netlify con su función de despliegue manual. No subas la carpeta del código como si fuera el resultado compilado.

**Opción con Git:** subí el proyecto a tu repositorio y conectalo a Netlify. Usá `npm run build` como comando de construcción y `out` como directorio de publicación. Las configuraciones están guardadas en `netlify.toml`. Cada publicación debe compilar de nuevo cuando cambies contenido.

No agregues una redirección global a `/index.html`: cada proyecto tiene su propio HTML y la página 404 también está generada.

## Organización

```text
app/                   Páginas, layout y estilos
  proyectos/[slug]/    Plantilla reutilizable para cada caso
components/            Secciones y componentes interactivos
data/                  Contenido editable
public/                Imágenes, favicon y tu futuro CV
scripts/               Fuente de las ilustraciones de muestra
```

Poppins se importa desde Google Fonts (requiere conexión; si no está disponible se usa la fuente de respaldo). Las imágenes son locales. El marquee puede pausarse y respeta `prefers-reduced-motion`. El menú se usa con teclado y se cierra con Escape; el visor de certificados usa un diálogo nativo con foco contenido y restaurado al cerrar.

Documentación técnica: [Next.js](https://nextjs.org/docs/app/getting-started/installation), [exportación estática](https://nextjs.org/docs/app/guides/static-exports), [Tailwind con Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs).

