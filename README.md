## Команды

Стартовая команда 

```
gulp
```

Собрать проект

```
gulp build
```

Задеплоить проект 

```
gulp deploy
```
Сборка позволяет использовать как Pug так и ванильный HTML.

## Перегон токенов
  * разделить JSON на составляющие (при необходимости модифицировать exportTokens.js)
  * открыть папку tokens в терминале и вызвать
  
```
exportTokens.js
```
  * файл с переменными будет собран в lib/scss/
  * если переменные не импортированы в lib/scss/index.scss, импортировать туда

