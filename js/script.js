// const selectCity = document.querySelector('#city');
// const city = new Choices(selectCity, {
//     searchEnabled: false,
//     itemSelectText: '',
// })
//
// city.setChoices(
//     [
//         {
//             label: 'А',
//             id: 2,
//             disabled: false,
//             choices: [
//                 {value: '53', label: 'Абакан'},
//                 {value: '63', label: 'Анапа'},
//                 {value: '29', label: 'Архангельск'},
//                 {value: '40', label: 'Астрахань'},
//             ],
//         },
//         {
//             label: 'Б',
//             id: 3,
//             disabled: false,
//             choices: [
//                 {value: '25', label: 'Барнаул'},
//                 {value: '32', label: 'Белгород'},
//                 {value: '36', label: 'Благовещенск'},
//                 {value: '45', label: 'Братск'},
//                 {value: '38', label: 'Брянск'},
//             ],
//         },
//         {
//             label: 'В',
//             id: 4,
//             disabled: false,
//             choices: [
//                 {value: '23', label: 'Владивосток'},
//                 {value: '46', label: 'Владикавказ'},
//                 {value: '27', label: 'Волгоград'},
//                 {value: '26', label: 'Воронеж'},
//             ],
//         },
//         {
//             label: 'Г',
//             id: 5,
//             disabled: false,
//             choices: [
//                 {value: '124', label: 'Горно-Алтайск'},
//                 {value: '96', label: 'Грозный'},
//             ],
//         },
//         {
//             label: 'Е',
//             id: 6,
//             disabled: false,
//             choices: [
//                 {value: '3', label: 'Екатеринбург'},
//             ],
//         },
//         {
//             label: 'И',
//             id: 7,
//             disabled: false,
//             choices: [
//                 {value: '103', label: 'Иваново'},
//                 {value: '64', label: 'Ижевск'},
//                 {value: '22', label: 'Иркутск'},
//             ],
//         },
//         {
//             label: 'К',
//             id: 8,
//             disabled: false,
//             choices: [
//                 {value: '10', label: 'Казань'},
//                 {value: '17', label: 'Калининград'},
//                 {value: '95', label: 'Калуга'},
//                 {value: '15', label: 'Кемерово'},
//                 {value: '104', label: 'Киров'},
//                 {value: '11', label: 'Краснодар'},
//                 {value: '12', label: 'Красноярск'},
//                 {value: '119', label: 'Курган'},
//                 {value: '47', label: 'Курск'},
//             ],
//         },
//         {
//             label: 'Л',
//             id: 9,
//             disabled: false,
//             choices: [
//                 {value: '115', label: 'Липецк'},
//             ],
//         },
//         {
//             label: 'М',
//             id: 10,
//             disabled: false,
//             choices: [
//                 {value: '48', label: 'Магнитогорск'},
//                 {value: '94', label: 'Махачкала'},
//                 {value: '39', label: 'Мин.Воды'},
//                 {value: '1', label: 'Москва', selected: true},
//                 {value: '30', label: 'Мурманск'},
//             ],
//         },
//         {
//             label: 'Н',
//             id: 11,
//             disabled: false,
//             choices: [
//                 {value: '8', label: 'Н.Новгород'},
//                 {value: '54', label: 'Нальчик'},
//                 {value: '34', label: 'Нижневартовск'},
//                 {value: '19', label: 'Нижнекамск'},
//                 {value: '16', label: 'Новокузнецк'},
//                 {value: '9', label: 'Новосибирск'},
//                 {value: '67', label: 'Новый Уренгой'},
//                 {value: '123', label: 'Ноябрьск'},
//             ],
//         },
//         {
//             label: 'О',
//             id: 12,
//             disabled: false,
//             choices: [
//                 {value: '21', label: 'Омск'},
//                 {value: '28', label: 'Оренбург'},
//                 {value: '49', label: 'Орск'},
//             ],
//         },
//         {
//             label: 'П',
//             id: 13,
//             disabled: false,
//             choices: [
//                 {value: '43', label: 'П.Камчатский'},
//                 {value: '65', label: 'Пенза'},
//                 {value: '2', label: 'Пермь'},
//                 {value: '117', label: 'Петрозаводск'},
//                 {value: '118', label: 'Псков'},
//             ],
//         },
//         {
//             label: 'Р',
//             id: 14,
//             disabled: false,
//             choices: [
//                 {value: '18', label: 'Ростов-на-Дону'},
//             ],
//         },
//         {
//             label: 'С',
//             id: 15,
//             disabled: false,
//             choices: [
//                 {value: '5', label: 'С.Петербург'},
//                 {value: '7', label: 'Самара'},
//                 {value: '101', label: 'Саранск'},
//                 {value: '31', label: 'Саратов'},
//                 {value: '62', label: 'Симферополь'},
//                 {value: '56', label: 'Сочи'},
//                 {value: '55', label: 'Ставрополь'},
//                 {value: '13', label: 'Сургут'},
//                 {value: '41', label: 'Сыктывкар'},
//             ],
//         },
//         {
//             label: 'Т',
//             id: 16,
//             disabled: false,
//             choices: [
//                 {value: '52', label: 'Томск'},
//                 {value: '14', label: 'Тюмень'},
//             ],
//         },
//         {
//             label: 'У',
//             id: 17,
//             disabled: false,
//             choices: [
//                 {value: '42', label: 'Улан-Удэ'},
//                 {value: '50', label: 'Ульяновск'},
//                 {value: '4', label: 'Уфа'},
//             ],
//         },
//         {
//             label: 'Х',
//             id: 18,
//             disabled: false,
//             choices: [
//                 {value: '20', label: 'Хабаровск'},
//                 {value: '35', label: 'Ханты-Мансийск'},
//             ],
//         },
//         {
//             label: 'Ч',
//             id: 19,
//             disabled: false,
//             choices: [
//                 {value: '51', label: 'Чебоксары'},
//                 {value: '6', label: 'Челябинск'},
//                 {value: '102', label: 'Череповец'},
//                 {value: '44', label: 'Чита'},
//             ],
//         },
//         {
//             label: 'Ю',
//             id: 20,
//             disabled: false,
//             choices: [
//                 {value: '24', label: 'Ю.Сахалинск'},
//             ],
//         },
//         {
//             label: 'Я',
//             id: 21,
//             disabled: false,
//             choices: [
//                 {value: '37', label: 'Якутск'},
//                 {value: '85', label: 'Ярославль'},
//             ],
//         },
//     ],
//     'value',
//     'label',
//     false,
// )
//
// const selectCountry = document.querySelector('#country');
// const country = new Choices(selectCountry, {
//     searchEnabled: false,
//     itemSelectText: '',
// })
//
// country.setChoices(
//     [
//         {value: '46', label: 'Абхазия'},
//         {value: '53', label: 'Армения'},
//         {value: '90', label: 'Венесуэла'},
//         {value: '6', label: 'Греция'},
//         {value: '1', label: 'Египет'},
//         {value: '3', label: 'Индия'},
//         {value: '7', label: 'Индонезия'},
//         {value: '15', label: 'Кипр'},
//         {value: '13', label: 'Китай'},
//         {value: '10', label: 'Куба'},
//         {value: '27', label: 'Маврикий'},
//         {value: '8', label: 'Мальдивы'},
//         {value: '18', label: 'Мексика'},
//         {value: '9', label: 'ОАЭ'},
//         {value: '47', label: 'Россия'},
//         {value: '28', label: 'Сейшелы'},
//         {value: '2', label: 'Тайланд'},
//         {value: '41', label: 'Танзания'},
//         {value: '5', label: 'Тунис'},
//         {value: '4', label: 'Турция', selected: true},
//         {value: '12', label: 'Шри-Ланка'},
//     ],
//     'value',
//     'label',
//     false,
// )
//
// const selectType = document.querySelector('#type');
// const type = new Choices(selectType, {
//     searchEnabled: false,
//     itemSelectText: '',
// })
//
// const selectMeal = document.querySelector('#meal');
// const meal = new Choices(selectMeal, {
//     searchEnabled: false,
//     itemSelectText: '',
// })
//
// const selectRating = document.querySelector('#rating');
// const rating = new Choices(selectRating, {
//     searchEnabled: false,
//     itemSelectText: '',
// })
//
// const selectBudget = document.querySelector('#budget');
// const budget = new Choices(selectBudget, {
//     searchEnabled: false,
//     itemSelectText: '',
// })
// let max_budget = 0
// let min_budget = 0
// const budgetRanges = {
//     "2": [100000, 200000],
//     "3": [200000, 300000],
//     "4": [300000, 400000],
//     "5": [400000, 500000],
//     "6": [500000, 1000000],
// }
//
// selectBudget.addEventListener('change', function () {
//     [min_budget, max_budget] = budgetRanges[selectBudget.value] || [0, 0]
// })
//
// const daterange = $('input[name="daterange"]')
// let currentDate = new Date()
// let endFromDateValue = currentDate.toLocaleDateString('en-GB')
// currentDate.setMonth(currentDate.getMonth() + 1)
// let endToDateValue = currentDate.toLocaleDateString('en-GB')
//
// $(function () {
//     daterange.daterangepicker({
//         autoUpdateInput: true,
//         opens: 'right',
//         drops: 'down',
//         startDate: endFromDateValue,
//         endDate: endToDateValue,
//         minDate: endFromDateValue,
//         applyButtonClasses: "btn-warning",
//         cancelClass: "btn-secondary",
//         locale: {
//             format: "DD/MM/YYYY",
//             applyLabel: "Ок",
//             cancelLabel: "Очистить даты",
//             fromLabel: "От",
//             toLabel: "До",
//             daysOfWeek: [
//                 "Вс",
//                 "Пн",
//                 "Вт",
//                 "Ср",
//                 "Чт",
//                 "Пт",
//                 "Сб"
//             ],
//             monthNames: [
//                 "Январь",
//                 "Февраль",
//                 "Март",
//                 "Апрель",
//                 "Май",
//                 "Июнь",
//                 "Июль",
//                 "Август",
//                 "Сентябрь",
//                 "Октябрь",
//                 "Ноябрь",
//                 "Декабрь"
//             ]
//         },
//     }, function (start, end) {
//         endFromDateValue = start.format('YYYY-MM-DD')
//         endToDateValue = end.format('YYYY-MM-DD')
//     })
//     daterange.on('apply.daterangepicker', function (ev, picker) {
//         $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'))
//
//     })
//
//     daterange.on('cancel.daterangepicker', function () {
//         endFromDateValue = currentDate.toLocaleDateString('en-GB')
//         currentDate.setMonth(currentDate.getMonth() + 1)
//         endToDateValue = currentDate.toLocaleDateString('en-GB')
//         $(this).val(endFromDateValue + ' - ' + endToDateValue)
//     })
// })
//
// const containerTourists = $('#tourists')
// const selectTourists = $('#tourists__select')
// let adultsCount = 1
// let childrenCount = 0
// let child_age_1
// let child_age_2
// let child_age_3
//
// function updateCounts() {
//     $("#adultsCount").text(adultsCount)
// }
//
// $(document).ready(function () {
//     $("#tourists__input").val(adultsCount + " взрослый")
// })
//
// let validValue
// let findNumbers = []
//
// function addChildRow() {
//     childrenCount++
//     findNumber()
//     let resultArray = compareArrays(findNumbers)
//     validValue = resultArray[0]
//     const childRow = $("<div class='tourist-container child-container d-flex mb-2'>" +
//         "<div class='child-container'>" +
//         "<label for='childAge-" + validValue + "' class='select-label'>Возраст ребенка: </label>" +
//         "<select id='childAge-" + validValue +"' data-select='" + validValue +"' class='select-label data-select'>" +
//         "<option value=\"2\" selected>До 2 лет</option>" +
//         "<option value=\"3\">3 года</option>" +
//         "<option value=\"4\">4 года</option>" +
//         "<option value=\"5\">5 лет</option>" +
//         "<option value=\"6\">6 лет</option>" +
//         "<option value=\"7\">7 лет</option>" +
//         "<option value=\"8\">8 лет</option>" +
//         "<option value=\"9\">9 лет</option>" +
//         "<option value=\"10\">10 лет</option>" +
//         "<option value=\"11\">11 лет</option>" +
//         "<option value=\"12\">12 лет</option>" +
//         "<option value=\"13\">13 лет</option>" +
//         "<option value=\"14\">14 лет</option>" +
//         "<option value=\"15\">15 лет</option>" +
//         "</select>" +
//         "</div>" +
//         "<button class='removeChild select-button' data-child='" + validValue + "'>Удалить</button>" +
//         "</div>")
//     $("#resultContainer").append(childRow)
//     childRow.find("select").change(function () {
//         const selectedValue = $(this).val()
//         updateChildAge(validValue, selectedValue)
//     })
//     updateChildAge(validValue, $('[data-select="' + validValue + '"]').val())
//     findNumber()
//     console.log('массив с селектами: '+ findNumbers)
// }
//
// function findNumber() {
//     findNumbers = []
//     $('.data-select').each(function () {
//         let validValue = +$(this).attr('data-select')
//         findNumbers.push(validValue)
//     })
// }
//
// function updateChildAge(child, value) {
//     switch (child) {
//         case 1:
//             child_age_1 = value
//             break
//         case 2:
//             child_age_2 = value
//             break
//         case 3:
//             child_age_3 = value
//             break
//     }
// }
//
// function compareArrays(findNumbers) {
//     const existingNumbers = [1, 2, 3]
//     let newArray = []
//
//     for (let i = 0; i < existingNumbers.length; i++) {
//         let number = existingNumbers[i]
//         if (findNumbers.indexOf(number) === -1) {
//             newArray.push(number)
//         }
//     }
//     newArray.sort((a, b) => a - b)
//
//     return newArray
// }
//
// $(".increment").on("click", function () {
//     if (adultsCount < 6) {
//         adultsCount++
//     }
//     updateCounts()
// })
//
// $('#addChild').on('click', function () {
//     if (childrenCount < 4) {
//         $("#childAgeContainer").show()
//         addChildRow()
//     }
//     if (childrenCount === 3) {
//         $('#addChild').hide()
//     }
// })
//
// $(".decrement").on("click", function () {
//     if (adultsCount > 1) {
//         adultsCount--
//     }
//     updateCounts()
// })
//
// $("#resultContainer").on("click", ".removeChild", function () {
//     const child = $(this).data("child")
//     updateChildAge(child, null)
//     $(this).parent().remove()
//     childrenCount--
//     if (childrenCount < 4) {
//         $('#addChild').show()
//     }
//     if (childrenCount === 0) {
//         validValue = 0
//     }
// })
//
// let shouldHideTourists = true
//
// function appendTourists() {
//     let touristsInfo = adultsCount + (adultsCount === 1 ? " взрослый" : " взрослых")
//     if (childrenCount > 0) {
//         touristsInfo += " " + childrenCount + (childrenCount === 1 ? " ребенок" : " ребенка")
//     }
//     $("#tourists__input").val(touristsInfo)
//     if ($('.data-select').length > 0) {
//         $('.data-select').each(function () {
//             let validValue = +$(this).attr('data-select')
//             let selectedValue = $(this).val()
//             updateChildAge(validValue, selectedValue)
//         })
//     }
// }
//
// $("#selectButton").on("click", function () {
//     shouldHideTourists = !shouldHideTourists
//     appendTourists()
// })
//
// containerTourists.click(function (event) {
//     event.stopPropagation()
//     if (shouldHideTourists) {
//         selectTourists.show()
//     } else {
//         selectTourists.hide()
//     }
//     shouldHideTourists = true
// })
//
// $(document).click(function (event) {
//     if (!containerTourists.is(event.target)) {
//         appendTourists()
//         selectTourists.hide()
//     }
// })

// $('#button').on('click', function () {
//     let fields = {
//         city: selectCity.value,
//         country: selectCountry.value,
//         type: selectType.value,
//         meal: selectMeal.value,
//         rating: selectRating.value,
//         price_from: min_budget,
//         price_to: max_budget,
//         date_from: endFromDateValue,
//         date_to: endToDateValue,
//         stars: document.querySelector('input[type="radio"]:checked').value,
//         adults: adultsCount,
//     }
//     if (child_age_1) {
//         fields.child_age_1 = child_age_1
//     }
//     if (child_age_2) {
//         fields.child_age_2 = child_age_2
//     }
//     if (child_age_3) {
//         fields.child_age_3 = child_age_3
//     }
//     const data = JSON.stringify(fields)
//     console.log(data)
// })

Telegram.WebApp.ready()
//     Telegram.WebApp.expand()

Telegram.WebApp.MainButton.setText('Choose').show().onClick(function () {
    const data = JSON.stringify({hex: '123', rgb: '123'});
    Telegram.WebApp.sendData(data);
    Telegram.WebApp.close();
});
// Telegram.WebApp.MainButton.setText('Подобрать тур').show().onClick(function () {
//     let fields = {
//         city: selectCity.value,
//         country: selectCountry.value,
//         type: selectType.value,
//         meal: selectMeal.value,
//         rating: selectRating.value,
//         price_from: min_budget,
//         price_to: max_budget,
//         date_from: endFromDateValue,
//         date_to: endToDateValue,
//         stars: document.querySelector('input[type="radio"]:checked').value,
//         adults: adultsCount,
//     }
//     if (child_age_1) {
//         fields.child_age_1 = child_age_1
//     }
//     if (child_age_2) {
//         fields.child_age_2 = child_age_2
//     }
//     if (child_age_3) {
//         fields.child_age_3 = child_age_3
//     }
//     const data = JSON.stringify(fields)
//     Telegram.WebApp.sendData(data)
//     Telegram.WebApp.close()
// })
