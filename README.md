# Пример приложения на React + TypeScript + Webpack + CSS Modules

- React и React-DOM, только клиентский рендер.
- Для сборки приложения используется Webpack.
- TypeScript собирается через Babel.
- Поддерживаются CSS Modules в файлах *.module.css.
- Поддерживаются обычные глобальные CSS в файлах *.global.css.
- Изображения из CSS и TSX помещаются в *assets*.

## Запуск

Устанавливаем зависимости:
```
npm i
```

Проверяем корректность типов:
```
npm test
```

Запускаем сборку:
```
npm run build
```

## Открытие приложения

Для работы, нужно открывать через запуск web-сервера с корнем в директории `public`.

Например, сделать это можно выполнив команду:
```
npx http-server
```

В браузере открываем http://localhost:8080/
