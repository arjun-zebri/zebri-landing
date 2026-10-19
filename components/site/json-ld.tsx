/**
 * Writes schema.org data into the page for search and answer engines.
 * `<` is escaped so no string in the data can close the script tag.
 *
 * @module components/site/json-ld
 */

/** One JSON-LD script. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
