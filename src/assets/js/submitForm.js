// Массив доступных для франшизы мест
const availablePlaces = ['Алексеевск', 'Кызыл', 'Баку']

// Экспортируемая функция отправки формы
const submitForm = (form) => {
  if (form.city !== 'Город') { isAvailable(form.city)} 
  else if (form.region) { isAvailable(form.region) }
}

// Функция проверки на наличие Города/Региона в массиве доступных мест
const isAvailable = (place) => {
  if(availablePlaces.includes(place)){ alert('Доступно!') } 
  else { alert('Не доступно :(') }
}

export default submitForm;