import {responsiveSize} from '@/helpers';
import {Dimensions} from 'react-native';

let {height, width}: any = Dimensions.get('window');
let set = width / 40;

// metrics sizes
export const MetricsSizes = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  SET_HEIGHT: set * 6.4,
  SET_RADIUS: set * 2,

  TINY: set / 2,
  SMALL: set,
  REGULAR: set * 1.5,
  MEDIUM: set * 2,
  LARGE: set * 3,
  XLARGE: set * 4,
  XXLARGE: set * 5,
  SET40: set * 40,
  SET50: set * 50,
  SET80: set * 8,
  SET100: set * 10,
  SET200: set * 20,
  SET150: set * 15,
  SET220: set * 22,
  SET250: set * 25,
  SET120: set * 12,
  SET110: set * 11,

  NEG_TINY: -set / 2,
  NEG_SMALL: -set,
  NEG_REGULAR: -set * 1.5,

  WIDTH_SMALL: width / 4,
  WIDTH_MEDIUM: width / 3,
  WIDTH_LARGE: width / 2,
  WIDTH_XLARGE: width / 1.5,
  WIDTH_XXLARGE: width,

  HEIGHT_SMALL: height / 4,
  HEIGHT_MEDIUM: height / 3,
  HEIGHT_LARGE: height / 2,
  HEIGHT_XLARGE: height / 1.5,
  HEIGHT_XXLARGE: height,
};

// font sizes
const {SMALL, REGULAR, LARGE} = MetricsSizes;
export const FontSize = {
  xs: SMALL,
  sm: SMALL * 1.2,
  bs: SMALL * 1.4,
  rg: SMALL * 1.4,
  md: REGULAR * 1.2,
  lg: LARGE * 0.8,
  xl: LARGE,
  xxl: LARGE * 1.2,
};

// layout
export const Layout = {
  alignCenter: {
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
  },
  rowJCenter: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between' as 'space-between',
    alignItems: 'center' as 'center',
  },
  rowARCenter: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-around' as 'space-around',
    alignItems: 'center' as 'center',
  },
  justifyCContent: {
    justifyContent: 'center' as 'center',
  },
  row: {
    flexDirection: 'row' as 'row',
  },
  justifySBContent: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between' as 'space-between',
  },
  fill: {
    flex: 1,
  },
  fillB: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  positionA: {position: 'absolute' as 'absolute'},
  positionR: {position: 'relative' as 'relative'},
  rowACenter: {
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
  },
  rowCCenter: {
    flexDirection: 'row' as 'row',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
  },
  columnSFlexStart: {
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between' as 'space-between',
    alignItems: 'flex-start' as 'flex-start',
  },
  column: {
    flexDirection: 'column' as 'column',
  },
  flexAStart: {
    justifyContent: 'flex-start' as 'flex-start',
    alignItems: 'flex-start' as 'flex-start',
  },
  flexAEnd: {
    justifyContent: 'flex-end' as 'flex-end',
    alignItems: 'flex-end' as 'flex-end',
  },
  rowFlexEnd: {
    flexDirection: 'row' as 'row',
    justifyContent: 'flex-end' as 'flex-end',
    alignItems: 'flex-end' as 'flex-end',
  },
  rowFlexStart: {
    flexDirection: 'row' as 'row',
    justifyContent: 'flex-start' as 'flex-start',
    alignItems: 'flex-start' as 'flex-start',
  },
  flexStart: {
    justifyContent: 'flex-start' as 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end' as 'flex-end',
  },
  textCenter: {
    textAlign: 'center' as 'center',
  },
  rowSpaceEvenly: {
    flexDirection: 'row' as 'row',
    justifyContent: 'space-evenly' as 'space-evenly',
    alignItems: 'center' as 'center',
  },
  columnCenter: {
    flexDirection: 'column' as 'column',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
  },
  wrapB: {
    flexWrap: 'wrap' as 'wrap',
    flexDirection: 'row' as 'row',
    display: 'flex' as 'flex',
    justifyContent: 'space-between' as 'space-between',
  },
  flexEndA: {
    alignItems: 'flex-end' as 'flex-end',
  },
};

export const FontFamily = {
  FBlack: 'Poppins-Black',
  FBlackItalic: 'Poppins-BlackItalic',
  FBold: 'Poppins-Bold',
  FBoldItalic: 'Poppins-BoldItalic',
  FExtraBold: 'Poppins-ExtraBold',
  FItalic: 'Poppins-Italic',
  FLight: 'Poppins-Light',
  FMedium: 'Poppins-Medium',
  FMediumItalic: 'Poppins-MediumItalic',
  FRegular: 'Poppins-Regular',
  FSemiBold: 'Poppins-SemiBold',
  FGreatVibesRegular: 'GreatVibes-Regular',
  FSatisfyRegular: 'Satisfy-Regular',
  FPacificoRegular: 'Pacifico-Regular',
};

export const SPACE = {
  TINY: MetricsSizes.TINY,
  SMALL: MetricsSizes.SMALL,
  MEDIUM: MetricsSizes.MEDIUM,
  LARGE: MetricsSizes.LARGE,
};

export const COLORS = {
  PRIMARY: '#FFA451',
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GREY: '#CCCCCC',
  LIGHT_GREY: '#707B81',
  LIGHT_PRIMARY: '#FFF2E7',
  CREAM: '#F0ECF3',
  BLUE: '#1A2530',
  LIGHT_BLACK: '#707B81',
  LIGHT_BLUE: '#5B9EE1',
  LIGHT_WHITE: '#F2F2F2',
  LIGHT_WHITE2: '#F8F9FA',
  RED: '#C80036',
  DARK_BLUE: '#2D3B48',
};

export const ICONS_NAME = {
  filterVariant: 'filter',
  storefront: 'storefront',
  plus: 'plus',
  heart: 'heart',
  hearto: 'hearto',
  arrowRight: 'arrowright',
  arrowLeft: 'arrowleft',
  star: 'star',
  minus: 'minus',
  bell: 'bell',
  cart: 'cart',
  home: 'home',
  user: 'user',
  right: 'right',
  google: 'google',
  facebook: 'facebook',
  apple1: 'apple',
  delete: 'delete-forever',
  cross: 'closecircle',
  cartArrowDown: 'cart-arrow-down',
  eye: 'eye-outline',
  eyeOff: 'eye-off-outline',
  storefrontOutline: 'storefront-outline',
  dotsGrid: 'dots-grid',
  heartOutline: 'heart-outline',
  mapMarker: 'map-marker',
  magnify: 'magnify',
  homeOutline: 'home-outline',
  bellOutline: 'bell-outline',
  accountOutline: 'account-outline',
  account: 'account',
  mail: 'mail',
  phone: 'phone',
  edit: 'edit',
  down: 'menu-down',
  up: 'menu-up',
  logout: 'logout',
  camera: 'camerao',
};

export const ICONS_TYPE = {
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  AntDesign: 'AntDesign',
};

export const MARGIN_H_SMALL = {
  marginHorizontal: MetricsSizes.SMALL,
};
export const MARGIN_H_MEDIUM = {
  marginHorizontal: MetricsSizes.MEDIUM,
};
export const MARGIN_H_LARGE = {
  marginHorizontal: MetricsSizes.LARGE,
};
export const PADDING_H_SMALL = {
  paddingHorizontal: MetricsSizes.SMALL,
};
export const PADDING_H_MEDIUM = {
  paddingHorizontal: MetricsSizes.MEDIUM,
};
export const PADDING_H_LARGE = {
  paddingHorizontal: MetricsSizes.LARGE,
};

export const MARGIN_V_TINY = {
  marginVertical: MetricsSizes.TINY,
};
export const MARGIN_V_SMALL = {
  marginVertical: MetricsSizes.SMALL,
};
export const MARGIN_V_MEDIUM = {
  marginVertical: MetricsSizes.MEDIUM,
};
export const MARGIN_V_LARGE = {
  marginVertical: MetricsSizes.LARGE,
};
export const PADDING_V_SMALL = {
  paddingVertical: MetricsSizes.SMALL,
};
export const PADDING_V_MEDIUM = {
  paddingVertical: MetricsSizes.MEDIUM,
};
export const PADDING_V_LARGE = {
  paddingVertical: MetricsSizes.LARGE,
};

export const TextStyle = {
  heading: {
    fontSize: responsiveSize(26),
    fontWeight: '600' as '600',
    color: COLORS.BLUE,
  },
  subHeading: {
    fontSize: responsiveSize(16),
    fontWeight: '400' as '400',
    color: COLORS.LIGHT_GREY,
  },
};
