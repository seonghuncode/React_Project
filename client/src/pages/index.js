//AppIndex에서 import를 여러개 하고 만약 경로가 바뀌면 여기서만 수정 하면 되고 AppIndex에서도 여러파일을 한번만 import하면 된다
//index.js는 폴더에서 딱 하나만 존재한다(index는 생략이 가능하기 때문에 다른 파일에서 불러올 경우 index파일이 여러개면 오류가 발생할 수 잇다)
import Main from "./Main";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import Onboarding4 from "./Onboarding4";
import Onboarding5 from "./Onboarding5";

export {
  Main,
  Onboarding1,
  Onboarding2,
  Onboarding3,
  Onboarding4,
  Onboarding5,
};
