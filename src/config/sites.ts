export interface SiteConfig {
  slug: string;
  domain: string;
  name: string;
  shortName: string;
  description: string;
  dbEnvVar: string;
  smtpUserEnvVar: string;
  smtpPassEnvVar: string;
  smtpFromEnvVar: string;
  r2BucketEnvVar: string;
  r2PublicUrlEnvVar: string;
  nextauthSecretEnvVar: string;
}

const sites: Record<string, SiteConfig> = {
  ejauipar: {
    slug: 'ejauipar',
    domain: 'ejauipar.com',
    name: 'European Journal of Ayurvedic, Unani and Interdisciplinary Pharmaceuticals & Allopathic Review',
    shortName: 'EJAUIPAR',
    description: 'Ayurvedic, Unani and Pharmaceutical Research',
    dbEnvVar: 'DATABASE_URL_EJAUIPAR',
    smtpUserEnvVar: 'SMTP_USER_EJAUIPAR',
    smtpPassEnvVar: 'SMTP_PASS_EJAUIPAR',
    smtpFromEnvVar: 'SMTP_FROM_EJAUIPAR',
    r2BucketEnvVar: 'R2_BUCKET_EJAUIPAR',
    r2PublicUrlEnvVar: 'R2_PUBLIC_URL_EJAUIPAR',
    nextauthSecretEnvVar: 'NEXTAUTH_SECRET_EJAUIPAR',
  },
};

const DEV_SITE_SLUG = 'ejauipar';

export function getSiteConfig(slug: string): SiteConfig | null {
  return sites[slug] ?? null;
}

export function getSiteConfigByDomain(host: string): SiteConfig | null {
  const domain = host.split(':')[0];

  for (const site of Object.values(sites)) {
    if (site.domain === domain) return site;
  }

  if (domain === 'localhost' || domain === '127.0.0.1') {
    return sites[DEV_SITE_SLUG];
  }

  return null;
}

export function getAllSites(): SiteConfig[] {
  return Object.values(sites);
}
