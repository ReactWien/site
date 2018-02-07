import React from "react";
import { AnchorContext, Header, Footer } from "./";

import "normalize.css/normalize.css";
import "../../styles/fontello-codes.css";
import "../../styles/fontello-embedded.css";
import "../../styles/style.scss";

const SiteBody = ({
  children,
  section,
  location: { pathname },
  page: { file: { title } },
}) => (
  <AnchorContext>
    <main>
      <Header pathname={pathname} title={title} />
      <div className="main-container container">
        <section className="grid grid_6col">{children}</section>
      </div>
      <Footer />
    </main>
  </AnchorContext>
);

export default SiteBody;
