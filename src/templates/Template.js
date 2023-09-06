import goat from '@images/cabrita.jpg'
import dog from '@images/doggy.jpg'

const Template = () => {
  const view = `
    <div>
      <h1 class="title">Soy un linda cabra y un perrito</h1>
      <img src="${goat}" />
      <img src="${dog}"/>
    </div>
  `
  return view
}

export default Template;