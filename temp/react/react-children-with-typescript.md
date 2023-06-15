리액트 타입스크립트에서 칠드런 사용하기

https://fe-developers.kakaoent.com/2021/211022-react-children-tip/

https://developer-talk.tistory.com/226

react.children.toarray 로 칠드런 모두를 1차원 배열로 만들수 있음
칠드런이 하나일때랑 여러개일때 모두 배열 함수를 사용 가능 (하나일땐 사용 못했음)

children.key 를 사용할 수 있는데, 타입스크립트에선 React.isValidElement(child) 로 한번 검증하고 써야됨


- 챗지피티가 알려줌
React의 Children.toArray() 메소드는 children의 각 요소를 자식 배열로 변환합니다. 그러나 반환된 자식들의 타입이 꼭 React 요소일 필요는 없습니다. 문자열이나 숫자와 같은 다른 타입도 가능합니다. 이런 이유로 TypeScript는 child.key 접근에 대해 경고를 발생시키는 것입니다.

문제를 해결하기 위해 타입 체크를 추가할 수 있습니다. 아래는 타입 체크를 추가한 코드 예시입니다.

tsx
Copy code
{React.Children.toArray(children).map((child) => {
    if (React.isValidElement(child)) {
      console.log(child.key);
    }
    return child;
})}
이렇게 하면 child가 ReactElement일 때만 child.key에 접근하게 됩니다. 따라서 child.key가 없는 타입에 대한 TypeScript 오류는 더 이상 발생하지 않습니다.