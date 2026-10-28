import { plywoodSpreads } from './plywoodData';
import { laminatesSpreads } from './laminatesData';
import { acrylicSpreads } from './acrylicData';
import { veneersSpreads } from './veneersData';
import { doorsSpreads } from './doorsData';
import { hardwareSpreads } from './hardwareData';
import { kitchenAccessoriesSpreads } from '../KitchenAccessories';

export { BRAND_CONFIG } from './brandConfig';
export { CATEGORY_DEFINITIONS } from './categoryDefinitions';
export {
  getCategoriesForBrand,
  getCanonicalCategory,
  isPlywoodOrLaminateBrand,
  isBrandMatch,
  isBrandCategoryMatch
} from './helpers';

export {
  plywoodSpreads,
  laminatesSpreads,
  acrylicSpreads,
  veneersSpreads,
  doorsSpreads,
  hardwareSpreads
};

// Master SPREADS dataset for ProductsPage catalogue and booklet
export const SPREADS = [
  ...plywoodSpreads,
  ...laminatesSpreads,
  ...acrylicSpreads,
  ...veneersSpreads,
  ...doorsSpreads,
  ...hardwareSpreads,
  ...kitchenAccessoriesSpreads
];
