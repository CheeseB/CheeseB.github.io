---
title: "[운영체제] 운영체제 개요"
categories:
- os
tags:
- 운영체제
- os
- 커널
classes: wide
---

## 운영체제의 정의

**운영체제(OS: Operating System)란?**
- **컴퓨터 하드웨어 바로 윗단에 설치되는 소프트웨어**
- **사용자 및 다른 모든 소프트웨어와 하드웨어를 연결하는 소프트웨어 계층**
- **컴퓨터를 동작시키기 위해 필요한 기본적인 소프트웨어**
	- 하드웨어와 운영체제가 한몸이 되어야만 사용자에게 쓰일 수 있음

<img src="{{site.url}}/assets/img/post/os1.jpg" width="60%">

사용자 입장에선 하드웨어 자체를 다루는 것이 쉽지 않으므로 하드웨어 위에 기본적으로 운영체제를 탑재하여,
<br>전원을 켰을 때 사용자가 손쉽게 사용할 수 있도록 한다.
<br>각종 소프트웨어들은 하드웨어와 운영체제가 한몸으로 존재하는 컴퓨터 시스템 위에서 수행된다.
<br><br>

**커널(kernel) 이란?**
- **운영체제에서 메모리에 올라온 부분**
- **운영체제 코드 중 핵심 부분**
- **좁은 의미의 운영체제**

소프트웨어가 컴퓨터 시스템에서 수행되려면 메모리에 그 프로그램이 올라가 있어야 한다.
<br>운영 체제 자체도 하나의 소프트웨어로서 전원이 켜짐과 동시에 메모리에 올라간다.
<br>하지만 운영체제는 규모가 큰 프로그램이기 때문에 모두 메모리에 올라간다면 메모리 공간의 낭비가 심할 것이다.
<br>그러므로 운영체제 중 항상 필요한 부분만 전원이 켜짐과 동시에 메모리에 올려놓고,
<br>그렇지 않은 부분은 필요할 때 메모리에 올려 사용한다.
<br>이때 메모리에 상주하는 부분이 커널이다.

**넓은 의미의 운영체제: 커널 뿐 아니라 각종 시스템을 위한 유틸리티들을 광범위하게 포함하는 개념(ex. 디스크 조각모음, 파일 복사 프로그램 등)
<br>위 유틸리티는 운영체제의 일부가 아닌 별도의 프로그램이지만 시스템을 위해 운영체제에 함께 설치되기 때문에 넓은 의미로 운영체제에 포함시킴. 항상 메모리에 올라와 있는 것은 아님.*
<br><br>

## 운영체제의 기능

**운영체제의 역할**
- **하드웨어에 대한 역할: 사용자가 알기 힘든 각종 하드웨어를 관리**
- **사용자에 대한 역할: 편리한 인터페이스 제공**
- **보안 및 보호 기능: 사용자와 운영체제 자신을 보호**


1. 하드웨어에 대한 역할

컴퓨터 시스템 내 자원(resource)을 효율적으로 관리해 가장 좋은 성능을 내도록 한다.
<br>운영체제의 가장 중요한 핵심 기능이라 할 수 있으며, 운영체제를 자원 관리자(resource manager)라고 부르기도 한다.

**자원: CPU, 메모리, 하드디스크 등 하드웨어 자원 + 소프트웨어 자원*

<img src="{{site.url}}/assets/img/post/os2.jpg" width="60%">


하지만 전체적인 성능을 향상시키려다 일부 프로그램 또는 사용자가 불이익을 당할 수 있기 때문에
<br>운영 체제는 자원이 형평성 있게 분배되도록 하는 역할도 수행한다.
<br>즉, 효율성이 가장 큰 목표이지만 형평성 역시 운영체제가 고려할 목표이다.

2. 사용자에 대한 역할
	
컴퓨터 시스템을 편리하게 사용할 수 있는 환경을 제공한다.
<br>이는 하드웨어를 직접 다루는 복잡한 부분은 운영체제가 대행해 주고, 각 사용자 및 프로그램은 그에 대한 자세한 내용을 알지 못해도 프로그램을 수행할 수 있도록 해 주는것을 뜻한다.
<br>예를 들어 사용자는 파일이 디스크에 어떻게 저장되는지 자세히 알지 못하지만 운영체제가 제공하는 편리한 인터페이스를 통해 파일을 손쉽게 저장하거나 내용을 꺼내볼 수 있다.

<img src="{{site.url}}/assets/img/post/os3.jpg" width="60%">


운영체제는 위와 같이 추상화된 컴퓨터를 제공하면서 동시 사용자 및 프로그램들에게 각각 독자적으로 컴퓨터를 사용하는것과 같은 환상을 제공한다.

3. 보안 및 보호 기능

여러 사용자의 프로그램이 하나의 컴퓨터에서 수행되면 이에 대한 보안이 필요하다.
<br>다른 사용자 프로그램의 메모리 영역을 참조하거나 사적인 파일에 접근, 혹은 운영체제 자체의 메모리를 변경하는 일이 있어서는 안된다.
<br><br>

## 운영체제의 분류

**동시작업 지원 여부에 따른 분류**
- **단일 작업용 운영체제 (single tasking)**
- **다중 작업용 운영 체제 (multi tasking)**

단일 작업용 운영체제는 한번에 하나의 프로그램만 수행시킬 수 있는 운영체제로, 대개 초기 컴퓨터용 운영 체제가 이에 해당한다. (ex. DOS)
<br>
다중 작업용 운영체제는 동시에 두개 이상의 프로그램을 처리할 수 있는 운영체제로, 최근 대부분의 운영체제가 이에 해당한다.
<br>

다중 작업용 운영체제의 여러 개념
- 시분할 시스템 (time sharing system)
- 다중 프로그래밍 시스템 (multi-programming system)
- 대화형 시스템 (interactive system)

1. 시분할 시스템

	운영체제가 다중 작업을 처리할 땐 여러 프로그램이 CPU와 메모리를 공유하는데, 일반적으로 컴퓨터는 CPU가 하나 뿐이다.
	<br>그리고 사실 다중 작업용이라 하더라도 CPU에선 매 순간 하나의 프로그램만이 수행된다.
	<br>하지만 CPU의 처리 속도가 매우 빨라 짧은 시간 단위로 여러 프로그램들이 번갈아 수행되기 때문에
	<br>사용자 입장에선 여러 프로그램이 동시에 수행되는 것처럼 보이는 것이다.
	<br>
	<br>이처럼 CPU의 작업 시간을 여러 프로그램이 조금씩 나누어 쓰는 시스템을 시분할 시스템이라 한다.


2. 다중 프로그래밍 시스템

	CPU와 달리 메모리는 여러 프로그램들이 조금씩 메모리 공간을 보유하며 동시에 올라가 있을 수 있다.
	<br>
	<br>이처럼 메모리 공간을 분할해 여러 프로그램들을 동시에 메모리에 올리고 처리하는 시스템을 다중 프로그래밍 시스템이라 한다.

3. 대화형 시스템

	다중 작업용 운영체제는 여러 프로그램을 같이 수행시키지만 사용자 입장에선 각 프로그램에 대한 입력의 결과가 곧바로 화면에 보여지기 때문에 이러한 시스템을 대화형 시스템이라고도 한다.

이들 용어는 각 프로그램이 사용자의 입력에 대해 곧바로 응답한다는 측면에서 유사한 의미로 사용되며, 현대의 PC가 이러한 조건을 만족하는 시스템이다.
<br>
<br>서버의 경우에도 서버 컴퓨터에 사용자가 입력을 할 경우 곧바로 응답하여, 마치 서버를 자기 혼자 사용하는 것처럼 느끼게 하므로 대화형 시스템에 해당한다.

**다중 처리기 시스템(multi-processor system)은 한 컴퓨터에 CPU가 여러개 설치된 경우를 뜻하므로 위 용어들과는 의미가 다름*
<br><br>

**다중 사용자의 동시 지원 여부에 따른 분류**
- **단일 사용자용 운영체제**
- **다중 사용자용 운영체제**

단일 사용자용 운영체제는 한번에 한명의 사용자만이 사용하도록 허용하는 운영체제이다.
<br>DOS와 같이 한번에 하나의 작업만 수행할 수 있는 경우, MS윈도우즈처럼 다중 작업이 가능하지만 혼자서만 사용할 수 있는 경우로 나뉜다.

**최근에는 MS윈도우즈도 서버 기능을 지원해 다중 사용자용 운영체제로 쓰이는 경우도 많음*

다중 사용자용 운영체제는 여러 사용자가 동시에 접속해 사용할 수 있는 운영체제이다.
<br>이메일 서버나 웹 서버 등 서버 컴퓨터가 대표적인 예시이다.

<img src="{{site.url}}/assets/img/post/os4.jpg" width="60%">
<br><br>

**작업 처리 방식에 따른 분류**
- **일괄 처리 방식 운영체제 (batch processing)**
- **시분할 방식 운영체제 (time sharing)**
- **실시간 운영체제 (real time)**

일괄 처리 방식은 작업 요청의 일정량을 모아 한꺼번에 처리하는 방식이다.
<br>처리할 여러 작업을 모아 일정량이 쌓이면 일괄 처리하고, 모든 작업이 종료된 후에 결과를 얻는다.
<br>사용자 입장에선 응답시간이 길다는 단점이 있다. (ex. 초창기 컴퓨터의 펀치카드)
<br>
<br>시분할 방식은 여러 작업을 수행할 때 컴퓨터의 처리 능력을 일정 시간 단위로 분할해 사용하는 방식이다.
<br>사용자들은 짧은 시간 내에 곧바로 응답을 받을 수 있으며, 이러한 대화형 시스템은 시분할 방식의 대표적인 특징이다.
<br>
<br>실시간 운영체제는 정해진 시간 안에 반드시 일을 종료해야 하는 시스템에서 사용된다.

- 경성 실시간 시스템 (hard realtime system): 주어진 시간을 지키지 못할 경우 매우 위험한 결과를 초래할 수 있는 시스템
	- 미사일, 공장제어, 원자로 제어 시스템 등
- 연성 실시간 시스템 (soft realtime system): 데이터가 시간을 맞추어 전달되어야 올바른 기능을 수행하지만 위험한 결과를 초래하진 않는 시스템
	- 멀티미디어 스트리밍 시스템 등