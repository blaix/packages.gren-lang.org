import process from "process";

export const port = process.env["PORT"] || 3000;

export const canonicalUrl =
  process.env["GREN_CANONICAL_URL"] || `http://localhost:${port}`;

export const dbPath = process.env["GREN_PACKAGES_DATABASE"] || ":memory:";

export const zulip = {
  username: process.env["GREN_ZULIP_USERNAME"],
  apiKey: process.env["GREN_ZULIP_APIKEY"],
  realm: process.env["GREN_ZULIP_REALM"],
};
