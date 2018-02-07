import React, { Fragment } from "react";
import { content } from "@react-finland/content-2018";
import { AnchorHeader, Contacts, Markdown } from "../components";
import ContactMini from "./ContactMini";

const speakers = [
  content.speakers.find(({ name }) => name === "Andrey Okonetchnikov"),
  content.speakers.find(({ name }) => name === "Patrick Stapfer"),
  content.speakers.find(({ name }) => name === "Juho Vepsäläinen"),
];

const SiteIndex = ({ section }) => (
  <Fragment>
    <section className="intro intro_home">
      <div className="intro--main">
        <Markdown source={require("./intro.md")} />
      </div>
      <aside className="intro--aside">
        <Markdown
          source={`By the way, we proudly support the local community. A part (10%) of the profit goes there!`}
        />
      </aside>
    </section>
    <AnchorHeader level={2}>Trainers</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts items={speakers} render={ContactMini} />
    </div>
    <AnchorHeader level={2}>Tickets</AnchorHeader>
    <div className="grid--full">
      <tito-widget event="react-finland/2018" />
    </div>
  </Fragment>
);

export default SiteIndex;
