export {
  ALL_PRICING,
  getPricingByCategory,
  getPricingById,
  getHighlightedPlan,
  PRICING_CATEGORIES,
  PRICING_CONCEPTION_WEB,
  PRICING_VIBE_CODING,
  PRICING_ODOO,
  PRICING_GOOGLE_ADS,
  PRICING_FACEBOOK_ADS,
  PRICING_NATIVE_ADS,
  PRICING_RESEAUX_SOCIAUX,
  PRICING_SEO,
  PRICING_GMB,
  PRICING_GRAPHISME,
} from "./pricing";

export {
  SECTORS,
  getSectorBySlug,
  getSectorsByService,
  getAllSectorSlugs,
} from "./sectors";

export {
  ZONES,
  getZoneBySlug,
  getZonesByCity,
  getZonesByRegion,
  getAllZoneSlugs,
} from "./zones";

export {
  FAQ,
  getFaqByCategory,
  getFaqById,
  getAllFaqCategories,
  FAQ_CATEGORY_LABELS,
} from "./faq";
export type { FaqItem, FaqCategory } from "./faq";

export {
  MAIN_NAVIGATION,
  NAV_SERVICES,
  NAV_TARIFS,
  FOOTER_NAVIGATION,
  MOBILE_NAVIGATION,
  isMegaMenu,
} from "./navigation";
export type {
  NavItem,
  NavGroup,
  MegaMenuItem,
  SimpleNavItem,
  NavigationItem,
} from "./navigation";

export {
  BLOG_CATEGORIES,
  getBlogCategoryBySlug,
  getBlogCategoriesByService,
  getAllBlogCategorySlugs,
} from "./blog-categories";
export type { BlogCategoryData } from "./blog-categories";
