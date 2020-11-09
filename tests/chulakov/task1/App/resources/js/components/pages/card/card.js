import React, {useState, useRef} from 'react'
import './card.scss'
import H2 from '../../UI/titles/h2'
import Select from 'react-select'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'



const Card = props => {


  const formik = useFormik({
    initialValues: {
      num1: '',
      num2: '',
      num3: '',
      num4: '',
      month: '',
      year: '',
      ownerName: '',
      codeCvv: '',
    },
    validationSchema: Yup.object({
      num1: Yup.string()
        .min(4, 'Min characters: 4 ')
        .max(4, 'Max characters: 4')
        .required('Required'),
      num2: Yup.string()
        .min(4, 'Min characters: 4 ')
        .max(4, 'Max characters: 4')
        .required('Required'),
      num3: Yup.string()
        .min(4, 'Min characters: 4 ')
        .max(4, 'Max characters: 4')
        .required('Required'),
      num4: Yup.string()
        .min(4, 'Min characters: 4 ')
        .max(4, 'Max characters: 4')
        .required('Required'),
      month: Yup.string()
        .required('Required'),
      year: Yup.string()
        .required('Required'),
      ownerName: Yup.string()
        .min(4, 'Min characters: 4 ')
        .required('Required'),
      codeCvv: Yup.string()
        .min(3, 'Min characters: 3 ')
        .max(3, 'Max characters: 3')
        .required('Required'),

    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  const [num1Val, setNum1Val] = useState('')
  const [num2Val, setNum2Val] = useState('')
  const [num3Val, setNum3Val] = useState('')
  const [num4Val, setNum4Val] = useState('')
  const [codeCvvVal, setCodeCvvVal] = useState('')

  const num1 = useRef('')
  const num2 = useRef('')
  const num3 = useRef('')
  const num4 = useRef('')
  const month  = useRef('')
  const codeCvv = useRef('')

  const handleChange = (currentField, nextField, setFieldState, maxCar) => {
    const field = currentField.current
    const fieldValue = field.value
    
    if(fieldValue.length <= maxCar){
      setFieldState(fieldValue)
      setFieldValue(currentField, fieldValue)
      nextField&&fieldValue.length===maxCar ? nextField.current.focus(): null
    }
  }

  const setFieldValue = (currentField, fieldValue) => {
    switch (currentField) {
      case num1:
        formik.values.num1 = fieldValue
        break;
      case num2:
        formik.values.num2 = fieldValue
        break;
      case num3:
        formik.values.num3 = fieldValue
        break;
      case num4:
        formik.values.num4 = fieldValue
        break;
      case codeCvv:
        formik.values.codeCvv = fieldValue
        break;
      default:

        break;
    }
  }


  return (
    <div className="card">
      <H2 className="page-block-title card__title">Данные банковской карты</H2>
      <div className="card__container">
        <form method="post" className="card__form" onSubmit={formik.handleSubmit}>
          <div className="card__form-inner">
            <div className="card__front">
              <div className="card__form-row card-num">
                <label htmlFor="card-num" className="card__form-row-label">Номер карты</label>
                <div className="card__form-row-group card-num__wrap">
                  <input
                    className={`${formik.touched.num1 && formik.errors.num1? 'control-form--error': null} control-form card-num__field`}
                    id="card-num"
                    name="num1"
                    type="number"
                    maxLength="4"
                    onChange={() => {handleChange(num1, num2, setNum1Val, 4)}}
                    onBlur={formik.handleBlur}
                    value={formik.values.num1}
                    ref={num1}
                  />
                  <input
                    className={`${formik.touched.num2 && formik.errors.num2? 'control-form--error': null} control-form card-num__field`}
                    id="card-num"
                    name="num2"
                    type="number"
                    maxLength="4"
                    onChange={() => {handleChange(num2, num3, setNum2Val, 4)}}
                    onBlur={formik.handleBlur}
                    value={formik.values.num2}
                    ref={num2}
                  />
                  <input
                    className={`${formik.touched.num3 && formik.errors.num3? 'control-form--error': null} control-form card-num__field`}
                    id="card-num"
                    name="num3"
                    type="number"
                    maxLength="4"
                    onChange={() => {handleChange(num3, num4, setNum3Val, 4)}}
                    onBlur={formik.handleBlur}
                    value={formik.values.num3}
                    ref={num3}
                  />
                  <input
                    className={`${formik.touched.num4 && formik.errors.num4? 'control-form--error': null} control-form card-num__field`}
                    id="card-num"
                    name="num4"
                    type="number"
                    maxLength="4"
                    onChange={() => {handleChange(num4, month, setNum4Val, 4)}}
                    onBlur={formik.handleBlur}
                    value={formik.values.num4}
                    ref={num4}
                  />
                </div>
              </div>
              <div className="card__form-row period">
                <label htmlFor="card-period" className="card__form-row-label">Срок действия</label>
                <div className="card__form-row-group period__wrap">
                  <select 
                    name="month" 
                    className={`${formik.touched.month && formik.errors.month? 'control-form--error': null} control-form period__select period__select-month`} 
                    id="card-period"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.month}
                    ref={month}
                  >
                    <option value=""></option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select 
                    name="year" 
                    className={`${formik.touched.year && formik.errors.year? 'control-form--error': null} control-form period__select period__select-year`} 
                    id="card-period"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.year}
                  >
                    <option value=""></option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
              </div>
              <div className="card__form-row owner-name">
                <div className="card__form-row-wrap">
                  <span className="card__form-row-placeholder"></span>
                  <input 
                    type="text" 
                    name="ownerName" 
                    className={`${formik.touched.ownerName && formik.errors.ownerName? 'control-form--error': null} control-form owner-name__field`}
                    placeholder="Держатель карты"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ownerName}
                    />
                </div>
              </div>
            </div>
            <div className="card__back">
              <div className="card__form-row code-cvv">
                <label htmlFor="code-cvv" className="card__form-row-label code-cvv__label">Код CVV2 / CVC2</label>
                <div className="card__form-row-wrap code-cvv-wrap">
                  <input 
                    className={`${formik.touched.codeCvv && formik.errors.codeCvv? 'control-form--error': null} control-form code-cvv__field`}
                    id="card-num"
                    name="codeCvv"
                    type="number"
                    maxLength="3"
                    onChange={() => {handleChange(codeCvv, '', setCodeCvvVal, 3)}}
                    onBlur={formik.handleBlur}
                    value={formik.values.codeCvv}
                    ref={codeCvv}
                  />
                  <a href="#" className="card__form-help">?</a>
                </div>
              </div>
            </div>
          </div>
          <div className="form-footer"><button type="submit" className="btn card__form-btn">Оплатить</button></div>
        </form>
      </div>
    </div>
  )
}

export default Card