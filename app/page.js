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

const Row = ({ title, col2, col3, details, href }) => (
  <GridRow href={href}>
    <p className="opacity-30 md:opacity-100">
      {title}
      {href && " ↗"}
    </p>
    <p>{col2}</p>
    <p>{col3}</p>
    <p className="md:col-span-3 lg:col-span-2">{details}</p>
  </GridRow>
)

const TableHeader = ({ cols }) => (
  <div className="hidden md:grid md:grid-cols-subgrid md:col-span-6 lg:col-span-5 opacity-30">
    {cols.map((col, i) => (
      <p key={i} className={i === 3 ? "md:col-span-3 lg:col-span-2" : ""}>
        {col}
      </p>
    ))}
  </div>
)

const GridRow = ({ children, href }) => {
  const Component = href ? "a" : "div"
  const classes =
    "grid grid-cols-1 col-span-1 md:grid-cols-subgrid md:col-span-6 lg:col-span-5"
  const props = href
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: `${classes} md:hover:opacity-50`,
      }
    : { className: classes }

  return <Component {...props}>{children} </Component>
}

const Section = ({ title, children }) => {
  const renderTitle = () => {
    if (Array.isArray(title)) {
      return title.map((item, i) => <p key={i}>{item}</p>)
    }
    return title
  }

  return (
    <section className="grid grid-cols-2 md:grid-cols-6 gap-4 items-start">
      <h2 className="md:col-span-5 lg:col-span-1">{renderTitle()}</h2>
      <div className="col-span-2 md:col-span-6 lg:col-span-5 grid grid-cols-1 md:grid-cols-subgrid gap-y-4 md:gap-y-0">
        {children}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="p-4 min-h-screen flex flex-col gap-8 md:gap-16">
      {/* Header */}
      <Section
        title={[
          "Antoine Venco",
          "Marseille, France.",
          <a href="mailto:antoine.venco@gmail.com" className="underline">
            antoine.venco
            <wbr />
            @gmail.com
          </a>,
        ]}
      >
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
          </div>
        </div>
      </Section>

      {/* Selected Works */}
      <Section title="Selected works">
        <TableHeader cols={["Title", "Year", "Services", "Details"]} />

        <Row
          title="Antiprocess (WIP)"
          col2="2025"
          col3="Design, Development"
          details="Branding and Website for Antiprocess: A jewelry brand I co-founded."
          href=""
        />

        <Row
          title="Errance"
          col2="2025"
          col3="Design, Development"
          details="Website for Errance Project, an art-production platform in Marseille."
          href="https://www.erranceproject.com/"
        />

        <Row
          title="Ola Radio"
          col2="2025"
          col3="Design, Development"
          details="Branding and Website for Ola Radio, a community-webradio I co-run."
          href="https://www.olaradio.fr/"
        />

        <Row
          title="Ivresse"
          col2="2025"
          col3="Development"
          details="Website for Ivresse, a wine bar and event space in Marseille."
          href="https://www.ivresselacave.com/"
        />

        <Row
          title="Zeug"
          col2="2024"
          col3="Design, Development"
          details="Website for Zeug, an artist management agency based in Paris."
          href="https://www.zeugagency.com"
        />

        <Row
          title="Notorious"
          col2="2024"
          col3="Design, Development"
          details="Website for Notorious, a production studio based in Paris."
          href="https://www.notorious.vision/"
        />

        <Row
          title="CasaB"
          col2="2023"
          col3="Design, Development"
          details="Website for CasaB, a villa in Minorque."
          href="https://casab-real-estate.webflow.io/en"
        />

        <Row
          title="510 Paris"
          col2="2022"
          col3="Design, Development"
          details="Website for 510 Paris, a production studio based in Paris."
          href="https://510paris.netlify.app/"
        />

        <Row
          title="Arch"
          col2="2020"
          col3="Design, Development"
          details="Website for Arch, A sustainable building in Brussels."
          href="https://www.the-arch.be/"
        />
      </Section>

      {/* Experience */}
      <Section title="Experiences">
        <TableHeader cols={["Title", "Period", "Role(s)", "Main Tasks"]} />

        <Row
          title="Freelance"
          col2="2014-Now"
          col3="Graphic Designer, Developer"
          details="All of the above"
        />

        <Row
          title="Ola Radio"
          col2="2019-Now"
          col3="Co-runner, AD, Developer"
          details="Artistic Direction, Development, Music programming"
        />

        <Row
          title="Antiprocess"
          col2="2018-Now"
          col3="Co-founder, AD, Developer"
          details="Artistic Direction, Development, 3D Modeling/Rendering"
        />

        <Row
          title="Oil in Water"
          col2="2021-2024"
          col3="Graphic Designer, Developer"
          details="Art direction, Interface design, Prototyping, Motion, Development"
        />

        <Row
          title="Dataveyes"
          col2="2019-2021"
          col3="Assistant AD, Developer"
          details="Interface design, Prototyping, Motion, Data-vizualization"
        />

        <Row
          title="Adyax"
          col2="2018-2019"
          col3="Assistant AD"
          details="Interface design, Graphic adaptations, Motion design"
        />
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
        <div className="md:col-span-2 order-first md:order-last">
          <p className="opacity-30">Certifications</p>
          <div>
            <p>
              ECV Paris Master’s degree (M2) in Visual Design Art Direction,
            </p>
            <p>Rhino 3D Design and development of parametric 3D parts</p>
          </div>
        </div>
      </Section>
    </main>
  )
}
