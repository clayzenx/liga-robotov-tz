const submitForm = (form) => {
  console.log(form);
  if (form.city) {
    isAvailable(form.city)
  } else if (form.region) {
    isAvailable(form.region)
  }
}

const availablePlaces = ['Бар']

const isAvailable = (place) => {
  if(availablePlaces.includes(place)){
    alert('Доступно!')
  } else {
    alert('Не доступно :(')
  }
}

export default submitForm;