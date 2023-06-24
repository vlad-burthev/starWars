# 🪐 Star Wars Application

## 🐧 Links
- `Project` https://fantastic-sprinkles-441ea6.netlify.app/

---

## 🐶 Available Scripts and Commands

```bash
# Install
yarn add                    # install dependencies
```

```bash
# General
yarn run start            # run app in the development mode
yarn run storybook        # run storybook
```

```bash
# Deploy (part of "deploy" script)
yarn run build            # builds the app for production
yarn run build-storybook  # storybook build
```

```bash
# Not used
yarn run eject            # remove the single build dependency
yarn run deploy-storybook # storybook deploy
```

---

## 🦄 API
- https://swapi.dev (основное API)
- https://swapi.py4e.com (запасное API - если основное не работает)
- https://starwars-visualguide.com (изображения для API)

---

## 🐗 Lighthouse Metrics Performance
<img src="https://github.com/dev-pandaren/react-star-wars/blob/__temp__/_temp/readme/lighthouse.png?raw=true" width="500px" />

---

## 🐼 Рассмотренные темы

### React.js
- Разворачивание приложения с `create-react-app`
- Состояние компонента (хук `useState`)
- Жизненный цикл компонента (хук `useEffect`)
- Context API (хук `useContext`)
- Рефы и DOM (хук `useRef`)
- Мемоизация (хук `useCallback`)
- Создание собственных хуков
- Фрагменты
- Паттерн `Higher-Order Component`
- Паттерн `Подъём состояния`
- Обработка событий
- Controlled Components
- Подключение CSS, `css-modules`, библиотека `classnames`
- Списки и ключи, `Reconciliation Algorithm`
- Отложенная загрузка компонентов `React.lazy()`
- Библиотека `prop-types` для валидации props

### React Router
- Базовый роутинг
- URL Parameters
- Query Parameters
- Обработка страницы 404 (Not Found)
- Хуки `useLocation` и `useHistory`

### Redux
- Базовая структура react-redux-приложения
- Хуки `useDispatch`, `useSelector`
- Redux Middleware
- Создание асинхронных action с библиотекой `redux-thunk`
- Отслеживание состояния store с `redux-devtools-extension`

### Общее
- Задание Alias в React-приложении (библиотека `react-app-rewire-alias`)
- Деплой приложения на GitHub Pages (библиотека `gh-pages`)
- Создание Ui-Kit из визуальных компонентов и публикация в `@storybook`
- Библиотека `lodash` с готовыми функциями
- `Visual Studio Code`. Сниппеты и плагины

### JavaScript
- Методы работы с массивами: `map`, `filter`, `forEach`
- Асинхронность: `Promise`, `Async Functions`
- ES6-модули (import и export)
- Оператор разворота для объектов (props для компонента)
- Деструктуризация массивов и объектов
- Тернарные операторы
- Работа с Local Storage
- Работа с API с использованием `Fetch`

### Вёрстка
- CSS Custom Properties, изменение через JavaScript
- CSS Filters
- CSS Flexbox
- CSS Multi Columns
- Стилизация скроллбара

---

## 🐣 Порядок импортов
- Библиотеки
- Контекст
- HOC
- UI-компоненты
- Компоненты
- Изображения
- Хуки
- Роуты
- Сервисы
- Утилиты
- Константы
- Стили

---

### 🐨 TODO
#### Тестирование и перформанс
- `ESLint` + `Prettier`
- Тесты: `Jest`, `Enzyme`
- Тесты `Cypress`
- Проверка производительности в `Lighthouse` (Google Chrome)

#### Технологии
- `TypeScript`
- `Firebase` регистрация  
- `Material UI`, стилизация через css-in-js
- `Redux Thunk`
- `React Hook Form` для обработки данных форм

#### Функционал
- Перегруппировка компонентов Header при адаптиве
- Роутер. Анимация при переходе между страницами
- Добавить шрифты
- Публикация NPM-пакета для UiKit
- .bat-файлы для запуска скриптов


---

### NPM

```bash
yarn add classnames lodash prop-types react react-dom react-redux react-router react-router-dom react-scripts redux @reduxjs/toolkit redux-thunk
```

```bash
yarn add --dev @storybook/addon-actions @storybook/addon-essentials @storybook/addon-links @storybook/node-logger @storybook/preset-create-react-app @storybook/react @storybook/storybook-deployer gh-pages react-app-rewire-alias react-app-rewired
```
