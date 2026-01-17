const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Eleganza For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Eleganza is ideal wherever soft furnishings and décor patterns
          must be developed digitally to save time and fabric while enabling
          consistent production.
        </p>

        {/* Home furnishings manufacturers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Home furnishings manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Companies producing curtains, drapes, sheers, blinds, cushion
              covers, bed linen, table linen, and sofa throws that need
              standardized cutting patterns for multiple sizes and styles.
            </li>
            <li>
              Units wanting digital pattern libraries so new colourways and
              collections can be launched quickly with minimal re-patterning
              effort.
            </li>
          </ul>
        </div>

        {/* Export houses */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Export houses and private-label suppliers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Home textile exporters supplying large retail chains and brands
              with strict size, repeat, and finishing specifications.
            </li>
            <li>
              Vendors managing many SKUs per buyer who benefit from accurate,
              reusable digital patterns to reduce claims, rejections, and
              sampling rounds.
            </li>
          </ul>
        </div>

        {/* Cluster units */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Job-working and cluster-based units
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Small and medium furnishing units in clusters (curtain stitchers,
              cushion makers, bedspread units) that need error-free templates
              for consistent output.
            </li>
            <li>
              Common facility centres supporting these MSMEs with centralized
              digital pattern development before bulk cutting and stitching.
            </li>
          </ul>
        </div>

        {/* Interior brands */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Interior brands and project firms
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Interior and décor brands executing turnkey furnishing packages
              for residences, hotels, offices, and institutions.
            </li>
            <li>
              Project teams that must standardize patterns for repeated room
              types (hotel rooms, apartments, dorms) to streamline production
              and installation.
            </li>
          </ul>
        </div>

        {/* Design studios */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Design studios and freelance pattern developers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Textile and home-furnishing designers who convert their concepts
              into production-ready patterns for multiple clients.
            </li>
            <li>
              Studios offering specialized pattern services (e.g., scalloped
              edges, pleats, valances, shaped runners) where digital tools cut
              down manual trial-and-error.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Education and skill-development institutes
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Fashion, textile, and interior programs that want students to
              learn industry-style digital pattern workflows for home
              furnishings.
            </li>
            <li>
              Government and NGO-led skilling centres preparing women and youth
              for employment or self-employment in the furnishings value chain
              using digital tools.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
