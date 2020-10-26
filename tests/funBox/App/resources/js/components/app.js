import React from 'react'
import CatPackaging from '../components/cat-packaging/cat-packaging'
import Section from '../components/section/section'

const CatPackagings = [
  {
    type: 'с фуа-гра',
    weight: 0.5,
    selectedBottomContent: 'Печень утки разварная с артишоками.',
    disabled: false
  },
  {
    type: 'с рыбой',
    weight: 2,
    selectedBottomContent: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    disabled: false
  },
  {
    type: 'с курой',
    weight: 5,
    selectedBottomContent: 'Филе из цыплят с трюфелями в бульоне.',
    disabled: true
  },
]



const App = () => {

  return (
    <>
      {
        CatPackagings.length > 0 ?
          <Section className="section__wrapper" innerClassName="section__inner--flex" title="Ты сегодня покормил кота?">
            {
              CatPackagings.map((item, index) => {
                return (
                  <CatPackaging
                    key= {index}
                    type= {item.type}
                    weight= {item.weight}
                    selectedBottomContent= {item.selectedBottomContent}
                    disabled= {item.disabled}
                  />
                )
              })
            }
          </Section>
        :''
      }
    </>
  )
}

export default App