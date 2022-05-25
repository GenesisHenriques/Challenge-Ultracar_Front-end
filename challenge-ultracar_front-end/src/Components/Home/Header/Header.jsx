import './Header.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import MyContext from '../../MyContext';
import logotipo from '../../../Image/Logo.png';

function handlerInput(array, state) {
  const newArray = [];
  array.map((item) => newArray.push(item.value));
  state(newArray);
}

function Header() {
  const optionsMonth = [
    { value: 'all', label: 'Todos' },
    { value: '1semester', label: '1º semestre' },
    { value: '1semester', label: '2º semestre' },
    { value: '1quarter', label: '1º trimestre' },
    { value: '2quarter', label: '2º trimestre' },
    { value: '3quarter', label: '3ª trimestre' },
    { value: '4quarter', label: '4ª trimestre' },
    { value: 'jan', label: 'jan' },
    { value: 'fev', label: 'fev' },
    { value: 'mar', label: 'mar' },
    { value: 'abr', label: 'abr' },
    { value: 'mai', label: 'mai' },
    { value: 'jun', label: 'jun' },
    { value: 'jul', label: 'jul' },
    { value: 'ago', label: 'ago' },
    { value: 'set', label: 'set' },
    { value: 'out', label: 'out' },
    { value: 'nov', label: 'nov' },
    { value: 'dez', label: 'dez' },
  ]
  const optionsSalesman = [
    { value: 'All', label: 'Todos' },
    { value: 'Gênesis', label: 'Gênesis' },
    { value: 'Patricia', label: 'Patricia' },
    { value: 'Marcos', label: 'Marcos' },
    { value: 'Arthur', label: 'Arthur' },
  ]

  const animatedComponents = makeAnimated();

  return (
    <MyContext.Consumer>
      {
        state => (
          <div className='header'>
            <img src={logotipo} alt='Logotipo do site' />
            <h2>DASHBOARD DE VENDAS</h2>
            <form className='formMonth'>
              <p>Mês</p>
              <Select
                components={animatedComponents}
                className='selectMonth'
                isMulti
                options={optionsMonth}
                isClearable={true}
                isSearchable={true}
                closeMenuOnSelect={true}
                onChange={(inputText) => handlerInput(inputText, state.setMonths)}
              />
            </form>
            <form className='formSalesman'>
              <p>Vendedor</p>
              <Select
                components={animatedComponents}
                className='selectMonth'
                isMulti
                options={optionsSalesman}
                isClearable={true}
                isSearchable={true}
                closeMenuOnSelect={true}
                onChange={(inputText) => handlerInput(inputText, state.setSellers)}
              />
            </form>
            <div className='inputYear'>
              <p>Ano</p>
              <input type="text" name="name" id='inputYear' />
            </div>
          </div>
        )
      }
    </MyContext.Consumer>
  );
}

export default Header;