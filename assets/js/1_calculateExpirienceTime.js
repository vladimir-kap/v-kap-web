const startDate = new Date('2021-12-25'); // Дата начала работы


        // Получаем текущую дату
        const currentDate = new Date();

        // Вычисляем разницу между текущей датой и датой начала работы
        let years = currentDate.getFullYear() - startDate.getFullYear();
        let months = currentDate.getMonth() - startDate.getMonth();

        // Если текущий месяц меньше месяца начала работы, уменьшаем количество лет на 1 и добавляем 12 месяцев
        if (months < 0) {
            years--;
            months += 12;
        }

        // Функция для определения правильного окончания для слова "год"
        function getYearEnding(years) {
            if (years % 10 === 1 && years % 100 !== 11) {
                return 'год';
            } else if (years % 10 >= 2 && years % 10 <= 4 && (years % 100 < 10 || years % 100 >= 20)) {
                return 'года';
            } else {
                return 'лет';
            }
        }

        // Функция для определения правильного окончания для слова "месяц"
        function getMonthEnding(months) {
            if (months % 10 === 1 && months % 100 !== 11) {
                return 'месяц';
            } else if (months % 10 >= 2 && months % 10 <= 4 && (months % 100 < 10 || months % 100 >= 20)) {
                return 'месяца';
            } else {
                return 'месяцев';
            }
        }

        // Формируем строку с опытом работы
        const experienceString = `Опыт работы: ${years} ${getYearEnding(years)} ${months} ${getMonthEnding(months)}`;

        // Вставляем строку с опытом работы в элемент с id "experienceResult"
        document.getElementById('experienceResult').textContent = experienceString;