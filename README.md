# React-Recoil First Study
***
2024.05.17

***
## Recoil 흐름
1. atom을 통해 Data의 상태를 정의
2. useRecoilValue를 통해 atom을 구독(1에서의 Data 상태를 가져옴)
3. selector는 atom을 구독하면서 상태를 변경하는데에 사용됨
4. useRecoilState를 통해 atom의 상태를 변경
   - useState와 유사한 [state, setState] 구조 및 기능
   - useState와의 차이점 : 컴포넌트 내부의 로컬에만 국한되지 않고 전역적인 상태 관리 및 공유
5. useSetRecoilState를 통해 atom의 Setter를 생성하는 Hook