# Real-time React Chat (Redux-Saga + WebSockets)

## Описание проекта
Асинхронное клиент-серверное веб-приложение для обмена мгновенными сообщениями в общем чате. Построено на базе событийно-ориентированной архитектуры. Управление сайд-эффектами (I/O операции с сокетами) полностью изолировано в чистых генераторах через Redux-Saga.

## Стек технологий
* **Frontend:** React 18, Vite, Redux, Redux-Saga, HTML5 WebSockets API
* **Backend:** Node.js, пакет `ws` (нативный WebSocket-сервер)
* **База данных:** In-Memory хранилище на стороне сервера (список активных сессий).

## Как запустить локально
1. В папке `server`: выполнить `npm install`, затем `npm start` (порт 8989).
2. В папке `client`: выполнить `npm install`, затем `npm run dev`.

## Ссылка на деплой
* [https://app.netlify.com/projects/luminous-tapioca-dec769/overview](https://luminous-tapioca-dec769.netlify.app/)

## Оценка качества кода
[![Maintainability](https://qlty.sh/gh/albert-ios/projects/chat-app/maintainability.svg)](https://qlty.sh/gh/albert-ios/projects/chat-app)
