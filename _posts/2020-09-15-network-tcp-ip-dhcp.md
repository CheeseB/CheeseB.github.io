---
title: "[네트워크] TCP/IP 와 DHCP"
categories:
  - network
tags:
  - network
  - tcp
  - ip
  - tcp/ip
  - dhcp
toc: true
toc_sticky: true
---

## TCP/IP

TCP/IP (Transmission Control Protocol / Internet Protocol)
- ARPANET에서 개발
- 데이터 전송 프로토콜 중 하나로, 인터넷을 사용하기 위해 꼭 필요한 프로토콜임
- 각 네트워크에 접속되는 호스트들은 고유의 주소를 가지고 있어, 자신의 네트워크 뿐 아니라 다른 네트워크의 호스트까지도 서로 데이터를 주고받을 수 있는 것이 특징
	- 호스트의 고유 주소는 InterNIC (Internet Network Information Center) 라는 단체에서 관리 분배함

<br>

OCI 7계층과 TCP/IP 4계층

<img src="{{site.url}}/assets/img/post/net1.png">

- TCP/IP 계층 구조는 통신을 크게 4가지 단계로 나눔
- IP는 인터넷 계층, TCP는 그 위에 올라가는 프로토콜
	- IP 위에 올라가는 프로토콜엔 UDP도 있음
- IP는 TCP/IP 계층 구조에선 인터넷 계층에 속하지만 OSI 7계층으로는 네트워크 계층에 속함
- TCP는 TCP/IP 계층 구조와 OSI 7 계층 구조 둘 다 트랜스포트 계층에 속함

<br>

## IP주소와 DHCP

전 세계에서 인터넷을 사용하는 모든 사람은 각자 유일한 IP주소를 가지고 있으며, IP주소가 서로 충돌한다면 둘 중 하나는 인터넷을 쓰지 못한다.
<br>NIC(Network Information Center)는 전 세계에 이렇게 유일한 IP주소를 관리하고 나눠주는 기관이다.
<br>
<br>DHCP 서버란?

- IP주소를 자동으로 배정해 주는 서버
- Dynamic Host Configuration Protocol
- 네트워크의 모든 IP주소를 가지고 있다가 클라이언트 PC가 켜지면서 네트워크에 브로드캐스트를 뿌리면 자신이 관리하는 IP주소중 하나를 주는 역할을 함
- 클라이언트 PC는 DHCP클라이언트 구성만 가지고 있다가 DHCP서버가 있는 네트워크에 연결만 하면 자동으로 IP주소를 부여받게 됨
- 다 쓰고난 IP주소는 회수함

<img src="{{site.url}}/assets/img/post/net2.jpg">

DHCP를 사용하지 않으면 네트워크 관리자는 수백대의 PC에 일일이 IP주소를 배정하고, PC를 포맷하거나 부서 이전이 있을 때 안 쓰는 IP주소를 찾아서 배정하고 쓰던 주소를 다시 찾아오는 등의 번거로운일을 해야하기 때문에 요즘 네트워크 환경에선 DHCP가 거의 일반화되어 있다.