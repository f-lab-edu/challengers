const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  xs: calcRem(8),
  small: calcRem(12),
  base: calcRem(16),
  lg: calcRem(20),
  xl: calcRem(24),
  xxl: calcRem(32),
  titleSize: calcRem(40),
};

const fontWeights = {
  thin: '200',
  light: '300',
  regular: '400',
  bold: '500',
  semiBold: '600',
  extraBold: '700',
};

const paddings = {
  small: calcRem(4),
  base: calcRem(8),
  large: calcRem(16),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxxl: calcRem(40),
};

const margins = {
  small: calcRem(4),
  base: calcRem(8),
  large: calcRem(16),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxxl: calcRem(40),
};

const colors = {
  red: '#FB3746',
  black: '#222222',
  darkGray: '#686868',
  lightGray: '#DDDDDD',
  disabled: '#ebebeb',
  white: '#ffffff',
  yellow: '#FFE600',
};

const borders = {
  darkGray: '1px solid #686868',
  lightGray: '1px solid #DDDDDD',
};

const flex = {
  flexBox: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,
};

const theme = {
  fontSizes,
  fontWeights,
  paddings,
  margins,
  colors,
  borders,
  flex,
};

export default theme;
