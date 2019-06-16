// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColors: {
      main: string;
      secondary: string;
      sub: string;
      white: string;
    };
    objColors: {
      main: string;
      secondary: string;
      third: string;
      sub: string;
    };
    backColors: {
      hoverWhite: string;
      hoverBlack: string;
    };
  }
}
