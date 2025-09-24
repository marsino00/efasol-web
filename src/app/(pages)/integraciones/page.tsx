"use client";

import { useTranslations } from "next-intl";

export default function IntegracionesPage() {
  const t = useTranslations("integrations");

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="text-3xl font-bold mb-6">{t("activeIntegrations")}</h1>
      <p>{t("description")}</p>
      <br />
      <ul>
        <li>
          <strong>next</strong> — ^15.2.3
        </li>
        <li>
          <strong>react</strong> — ^19.0.0
        </li>
        <li>
          <strong>next-intl</strong> — ^4.0.0
        </li>
        <li>
          <strong>contentful</strong> — ^11.5.4
        </li>
        <li>
          <strong>next-sitemap</strong> — ^4.2.3
        </li>
      </ul>
      <br />
      <p>{t("multilanguage")}</p>
    </main>
  );
}
