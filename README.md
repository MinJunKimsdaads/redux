<h2>여러 상태관리 라이브러리를 정리 겸, 공부</h2>
<p>-> 간단한 장바구니 기능을 통해 상태관리 확인</p>

<img src="http://aaeexx.dothome.co.kr/project/image/redux/redux.gif">

<h3>redux</h3>
<p>-> 기본적인 상태관리 라이브러리</p>
<p>-> 파이프라인 코드가 많이 생김</p>

<h3>redux-toolkit</h3>
<p>-> redux 함수에 비해 편함</p>
<p>-> reducer에 action 함수를 바로 사용할 수 있음 (createSlice)</p>
<p>-> immer를 사용해서 불변성을 유지하면서 보일러플레이트 코드를 줄임</p>

<h3>redux-thunk</h3>
<p>-> redux에 비동기 작업 처리에 중점</p>
<p>-> 일반 redux와 유사, 미들웨어 사용</p>
<p>-> 미들웨어 사용이 간단함</p>

<h3>redux-saga</h3>
<p>-> redux에 비동기 작업 처리에 중점</p>
<p>-> 제너레이터 함수를 주요 사용</p>
<p>-> put, delay등 다양한 메서드가 있으며 redux-thunk에 비해 복잡함</p>

<h3>recoil</h3>
<p>-> redux와 달리 컴포넌트 간에 상태를 전달하는 데 효과적</p>

<h3>mobx</h3>
<p>-> Class를 사용, 객체의 변화를 감지하고 상태를 직접 변경</p>
<p>-> redux에 비해 좀 더 간단한 코드</p>

