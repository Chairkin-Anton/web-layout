        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("myMap-1", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [48.87219, 2.35422],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 18
            });

            var myPlacemark = new ymaps.Placemark([48.87223, 2.35422], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/Subtract.svg',
                iconImageSize: [30, 42],
                iconImageOffset: [-3, -42]
            });

            // Создание геообъекта с типом точка (метка).
            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point", // тип геометрии - точка
                    coordinates: [48.87223, 25.35422] // координаты точки
                }
            });

            // Размещение геообъекта на карте.
            myMap.geoObjects.add(myGeoObject); 
            myMap.geoObjects.add(myPlacemark);
        }