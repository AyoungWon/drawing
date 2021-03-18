# Drawing Web
***

드로잉 웹은 windows 운영체제에 기본적으로 들어있는 그림판을 웹으로 사용할 수 있도록 만든 웹 서비스입니다. 그림판의 기본적인 펜툴로 그리기, 도형그리기, 색 변경 등의 기능이 제공되며, 그리기 완료 후 해당 그림을 png파일로 저장할 수 있습니다.

## Let's see
<img src="/README.assets/asset1.png"  width="300px" height="200px">

* youtube: <https://youtu.be/GscKR8V7hoE>
* 배포 사이트: <https://wayne-draw.web.app>


***

## 개발 동기
웹 개발을 공부하면서 주로 일반적인 사이트 화면 구현이나, 로그인/로그아웃과 같이 유저와 관련된 기능을 구현하는 것에 집중했었습니다. 문득, 우리가 한번쯤은 사용해봤을 기본 프로그램은 어떻게 만들어지는지 궁금하게 됬고, 그중에 어렸을 때 많이 사용해봤던 윈도우의 그림판을 선택해 만들게 되었습니다.

## 기술 스택
라이브러리를 활용하지 않고도 기본적인 기능은 HTML5의 Canvas와 바닐라 자바스크립트를 이용하여 구현할 수 있다는 것을 알게됬습니다. 다만, color-picker를 한정된 몇개의 샘플에서 선택하는 것이 아니라 그림판처럼 사용자가 RGB팔레트에서 직접 컬러를 찾아 선택하고, 투명도를 조절할 수 있게 만들고 싶다고 생각했고, 찾아보니 'spectrum.js'라는 제이쿼리 기반의 라이브러리를 활용하여 원하던 것을 만들 수 있었습니다.
그외의 기능과 화면은 HTML, CSS, VanilaJS로 작성하였습니다.

- HTML
- CSS
- VanilaJS
- SpectrumJS(Base on JQuery)

## 특징
|||
|:---:|:---:|
| <img src="/README.assets/asset2.png"  width="300px" height="200px"><br>다양한 색상을 선택하여 그릴 수 있습니다.<br>|<img src="/README.assets/asset3.png"  width="300px" height="200px"><br>텍스트도 입력 가능합니다.|
|<img src="/README.assets/asset4.png"  width="300px" height="200px"><br>도형도 그릴 수 있으며, 도형 채우기와 테두리 선택도 가능합니다.<br>|<img src="/README.assets/asset5.png"  width="300px" height="200px"><br>그림 그리기를 완료한 후 png형태로 파일을 저장할 수 있습니다.|


