const Column = ({ label, items }) => (
  <div>
    <p className="opacity-30">{label}</p>
    <div>
      {items.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
    </div>
  </div>
)

const TableHeader = ({ cols }) => (
  <div className="hidden md:grid md:grid-cols-subgrid md:col-span-5 opacity-30">
    {cols.map((col, i) => (
      <p key={i} className={i === 3 ? "md:col-span-2" : ""}>
        {col}
      </p>
    ))}
  </div>
)

const GridRow = ({ children, href }) => {
  const Component = href ? "a" : "div"
  const classes =
    "grid grid-cols-1 col-span-1 md:grid-cols-subgrid md:col-span-5"
  const props = href
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: `${classes} hover:opacity-50`,
      }
    : { className: classes }

  return <Component {...props}>{children}</Component>
}

const Section = ({ title, children }) => (
  <section className="grid grid-cols-2 md:grid-cols-6 gap-4 items-start">
    <h2 className="col-span-2 md:col-span-1">{title}</h2>
    <div className="col-span-2 md:col-span-5 grid grid-cols-1 md:grid-cols-subgrid gap-y-4 md:gap-y-0">
      {children}
    </div>
  </section>
)

export default function Home() {
  return (
    <main className="p-4 min-h-screen flex flex-col gap-8 md:gap-16">
      {/* Header */}
      <Section title="Antoine Venco">
        <Column
          label="Design skills"
          items={[
            "Branding,",
            "Graphic Design,",
            "Webdesign,",
            "User Experience,",
            "Motion,",
            "Sound Design,",
            "3D Rendering",
          ]}
        />
        <Column
          label="Development skills"
          items={[
            "Front-end,",
            "Back-end,",
            "Headless CMS,",
            "E-commerce,",
            "Creative Coding",
          ]}
        />
        <Column
          label="Technologies"
          items={[
            "React,",
            "Next.js,",
            "Sanity,",
            "Tailwind,",
            "Webflow,",
            "Wordpress,",
            "Three.js,",
            "Medusa.js",
          ]}
        />
        <div className="md:col-span-2 order-first md:order-last">
          <p className="opacity-30">About</p>
          <div>
            <p>
              As a graphic designer who doubles as a developer, I&apos;m able to
              build coherent systems where design and development support each
              other. With 10+ years of experience, I&apos;ve shaped a practice
              that moves fluidly between visual direction, interface thinking,
              and technical execution. This hybrid background lets me bridge
              teams and disciplines, and gives me the freedom to take a project
              from concept to production with the same level of precision and
              intent.
            </p>
            <p>&nbsp;</p>
            <p>I&apos;m based in Marseille, France.</p>
            <p className="underline">
              <a href="mailto:antoine.venco@gmail.com">
                antoine.venco@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Section>

      {/* Selected Works */}
      <Section title="Selected works">
        <TableHeader cols={["Title", "Year", "Services", "Details"]} />

        <GridRow href="https://www.figma.com/proto/0K1SxYey6CsyRFQggRS1mC/Antiprocess-2024?page-id=1991%3A1998&node-id=1991-2016&t=uoT29Snu02X2y2vK-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1991%3A2016&hide-ui=1">
          <p>Antiprocess (WIP)</p>
          <p>2025</p>
          <p>Design, Development</p>
          <p className="md:col-span-2">
            Branding and Website for Antiprocess: A jewelry brand I co-founded.
          </p>
        </GridRow>

        <GridRow href="https://www.erranceproject.com/">
          <p>Errance</p>
          <p>2025</p>
          <p>Design, Development</p>
          <p className="md:col-span-2">
            Website for Errance Project, an art-production platform in
            Marseille.
          </p>
        </GridRow>

        <GridRow href="https://www.olaradio.fr/">
          <p>Ola Radio</p>
          <p>2025</p>
          <p>Design, Development</p>
          <p className="md:col-span-2">
            Branding and Website for Ola Radio, a community-webradio I co-run.
          </p>
        </GridRow>

        <GridRow href="https://www.ivresselacave.com/">
          <p>Ivresse</p>
          <p>2025</p>
          <p>Development</p>
          <p className="md:col-span-2">
            Website for Ivresse, a wine bar and event space in Marseille.
          </p>
        </GridRow>

        <GridRow href="https://www.zeugagency.com">
          <p>Zeug</p>
          <p>2024</p>
          <p>Design, Development</p>
          <p className="md:col-span-2">
            Website for Zeug, an artist management and image strategy agency
            based in Paris.
          </p>
        </GridRow>

        <GridRow href="https://www.notorious.vision/">
          <p>Notorious</p>
          <p>2024</p>
          <p>Design, Development</p>
          <p className="md:col-span-2">
            Website for Notorious, a production studio based in Paris.
          </p>
        </GridRow>

        <GridRow href="https://casab-real-estate.webflow.io/en">
          <p>CasaB</p>
          <p>2023</p>
          <p>Design, Development</p>
          <p className="md:col-span-2">
            Website for CasaB, a villa in Minorque.
          </p>
        </GridRow>

        <GridRow href="https://510paris.netlify.app/">
          <p>510 Paris</p>
          <p>2022</p>
          <p>Design, Development</p>
          <p className="md:col-span-2">
            Website for 510 Paris, a production studio based in Paris.
          </p>
        </GridRow>

        <GridRow href="https://www.the-arch.be/">
          <p>Arch</p>
          <p>2020</p>
          <p>Design, Development</p>
          <p className="md:col-span-2">
            Website for Arch, A sustainable building in Brussels.
          </p>
        </GridRow>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <TableHeader cols={["Title", "Period", "Role(s)", "Main Tasks"]} />

        <GridRow>
          <p>Freelance</p>
          <p>2014-Now</p>
          <p>Graphic Designer, Developer</p>
          <p className="md:col-span-2">All of the above</p>
        </GridRow>

        <GridRow>
          <p>Ola Radio</p>
          <p>2019-Now</p>
          <p>Co-runner, AD, Developer</p>
          <p className="md:col-span-2">
            Artistic Direction, Development, Music programming
          </p>
        </GridRow>

        <GridRow>
          <p>Antiprocess</p>
          <p>2018-Now</p>
          <p>Co-founder, AD, Developer</p>
          <p className="md:col-span-2">
            Artistic Direction, Development, 3D Modeling/Rendering
          </p>
        </GridRow>

        <GridRow>
          <p>Oil in Water</p>
          <p>2021-2024</p>
          <p>Graphic Designer, Developer</p>
          <p className="md:col-span-2">
            Art direction, Interface design, Prototyping, Motion, Development
          </p>
        </GridRow>

        <GridRow>
          <p>Dataveyes</p>
          <p>2019-2021</p>
          <p>Assistant AD, Developer</p>
          <p className="md:col-span-2">
            Interface design, Prototyping, Motion, Data-vizualization
          </p>
        </GridRow>

        <GridRow>
          <p>Adyax</p>
          <p>2018-2019</p>
          <p>Assistant AD</p>
          <p className="md:col-span-2">
            Interface design, Graphic adaptations, Motion design
          </p>
        </GridRow>
      </Section>

      {/* Other */}
      <Section title="Other">
        <Column label="Languages" items={["French,", "English"]} />
        <Column
          label="Soft Skills"
          items={[
            "Empathy,",
            "Autonomy,",
            "Problem-solving,",
            "Adaptability,",
            "Multidisciplinary,",
            "Role-bridging",
          ]}
        />
        <Column
          label="Hobbies"
          items={["DJing,", "Music production,", "Photography,", "Cooking"]}
        />
      </Section>
    </main>
  )
}
