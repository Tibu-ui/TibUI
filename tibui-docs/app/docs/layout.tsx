import { readdirSync } from "fs";
import { Fragment } from "react";

export default async function layout({ children }: { children: React.ReactNode }) {
  const folders = readdirSync("data/pages");

  const pages = folders.map(folderName => ({
    name: folderName,
    chapters: readdirSync(`data/pages/${folderName}`).map(x => x.replace("_en.mdx", "")),
  }));

  return (
    <Fragment>
      <nav></nav>
      <ul>
        {pages.map(folder =>
          <li key={folder.name}>
            <h2>{folder.name}</h2>
            <ul>
              {folder.chapters.map(chapter => <li key={chapter}>{chapter}</li>)}
            </ul>
          </li>
        )}
      </ul>
      <main>{children}</main>
    </Fragment>
  );
}
