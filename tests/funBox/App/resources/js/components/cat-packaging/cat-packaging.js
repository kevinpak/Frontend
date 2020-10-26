import React, {useState, useEffect} from 'react'
import './cat-packaging.scss'
import * as $ from 'jquery'
import cat from '../../../images/png/cat.png'

const CatPackaging = (props) => {
  const selectedClass = 'cart-packaging__body--selected'
  const visitedClass = 'cart-packaging__body--visited'
  const visitedClassSecondary = 'cart-packaging__appreciation--visited'
  const disableClass = 'cart-packaging__body--disabled'
  const packageClass = 'cart-packaging__body'
  const defaultPachagingInfos = {
    'firstAppreciation': (props.appreciation&&props.appreciation.length>0) ? props.appreciation : 'Сказочное заморское яство',
    'secondAppreciation': (props.secondAppreciation&&props.secondAppreciation.length>0) ? props.secondAppreciation : 'Котэ не одобряет?',
    'name': (props.name&&props.name.length>0) ? props.name : 'Нямушка',
    'type': (props.type&&props.type.length) ? props.type : 'с фуа-гра',
    'image': (props.image&&props.image.length) ? props.image : cat,
    'weight': (props.weight&&((typeof props.weight)==='number')) ? props.weight : 0.5,
    'disabled': (typeof props.disabled)==='boolean' ? props.disabled : true
  }

  const [selected, setSelected] = useState(null)
  const [visited, setVisited] = useState(null)
  const [disabled, setDisabled] = useState(defaultPachagingInfos.disabled)
  const [appreciation, setAppreciation] = useState(defaultPachagingInfos.firstAppreciation)
  const [packagingInfos, setPackagingInfos] = useState(defaultPachagingInfos)

  const [compSelectedClassName, setCompSelectedClassName] = useState('')
  const [compVisitedClassName, setCompVisitedClassName] = useState('')
  const [compSecondaryVisitedClassName, setCompSecondaryVisitedClassName] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    const children = event.target
    const cartPackageBody = children.closest('.cart-packaging').querySelector('.'+packageClass)

    if(!disabled){
      //-SELECTED
      if (cartPackageBody.classList.contains(selectedClass)) {
        setSelected(false)
      } else { 
        setSelected(true)
      }

      //-VISITED
      if (visited) {
        setAppreciation(defaultPachagingInfos.firstAppreciation)
        return setVisited(false)
      }
    }
    //if (cartPackageBody.classList.contains(visitedClass)) {
      //cartPackageBody.classList.remove(visitedClass)
    //}
    //cartPackageBody.classList.toggle(selectedClass)
  }

  const handleMouseEntrer = () => {
    if (visited) {
      setAppreciation(defaultPachagingInfos.secondAppreciation)
    } 
  }

  const handleMouseLeve = () => {
    if (selected) {
      setVisited(true)
    }

    if (visited) {
      setAppreciation(defaultPachagingInfos.firstAppreciation)
    }
  }

  const contentBottom = () => {
    if(selected){
      return props.selectedBottomContent
    } else if(disabled) {
      return `Печалька, ${props.type} закончился.`
    }


    return (
      <>
        Чего сидишь? Порадуй котэ,
        <a href="#" className="cart-packaging__bottom-link"  onClick={handleClick}>
          <span className="cart-packaging__bottom-link-text">купи</span>.
        </a>
      </>
    )
  }

  const specifics = weight => {
    if (weight < 1) {
      return (
        <>
          <div className="cart-packaging__specifics-item">
            <span className="cart-packaging__specifics-item-num">10</span> порций
          </div>
          <div className="cart-packaging__specifics-item">
            мышь в подарок
          </div>
        </>
      )
    } else {
      if (weight < 5) {
        return (
          <>
            <div className="cart-packaging__specifics-item">
              <span className="cart-packaging__specifics-item-num">40</span> порций
            </div>
            <div className="cart-packaging__specifics-item">
              <span className="cart-packaging__specifics-item-num">2</span> мыши в подарок
            </div>
          </>
        )
      } else if (weight >= 5) {
        return ( 
          <>
            <div className="cart-packaging__specifics-item">
              <span className="cart-packaging__specifics-item-num">100</span> порций
            </div>
            <div className="cart-packaging__specifics-item">
              <span className="cart-packaging__specifics-item-num">5</span> мыши в подарок
            </div>
            <div className="cart-packaging__specifics-item">
              заказчик доволен
            </div>
          </>
        )
      }
    } 
    
  }

  useEffect(() => {
    if (selected) {
      setCompSelectedClassName(selectedClass)
    } else {
      setCompSelectedClassName('')
    }
  }, [selected])

  useEffect(() => {
    if (visited) {
      setCompVisitedClassName(visitedClass)
      setCompSecondaryVisitedClassName(visitedClassSecondary)
    } else {
      setCompVisitedClassName('')
      setCompSecondaryVisitedClassName('')
    }
  }, [visited])

  useEffect(() => {
    if (disabled) {
      setSelected(null)
      setVisited(null)
    }
  }, [disabled])


  return (
    <>
      <div className="cart-packaging">
        <div className={`cart-packaging__body ${compSelectedClassName} ${compVisitedClassName} ${disabled? disableClass:''}`}  onClick={handleClick} onMouseEnter={handleMouseEntrer} onMouseLeave={handleMouseLeve}>
          <div className="cart-packaging__inner">
            <div className={`cart-packaging__appreciation ${compSecondaryVisitedClassName}`} >{appreciation}</div>
            <h3 className="cart-packaging__title">{packagingInfos.name}</h3>
            <div className="cart-packaging__sub-title">{packagingInfos.type}</div>
            <div className="cart-packaging__specifics">
              {specifics(props.weight)}
            </div>
            <div className="cart-packaging__picture">
              <img src={packagingInfos.image} alt="cart-packaging__image" className="cat image"/>
            </div>
            <div className="cart-packaging__weight">
              <span className="cart-packaging__weight-value">{packagingInfos.weight.toString().replace('.', ',')}</span>кг
            </div>
          </div>
        </div>
        <div className={`cart-packaging__bottom ${disabled? 'cart-packaging__bottom--disabled':''}`}> {contentBottom()}</div>
      </div>
    </>
  )
}

export default CatPackaging