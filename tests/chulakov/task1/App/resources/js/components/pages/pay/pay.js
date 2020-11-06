import React from 'react'
import './pay.scss'
import Card from '../card/card'


const Pay = props => {
  return (
    <div className="pay">
      <div className="pay__infos">
        <div className="pay__infos-title">Информация по оплате:</div>
        <table className="pay__infos-table">
          <tbody>
            <tr className="pay__infos-row">
              <td className="pay__infos-row-label">Номер счета:</td>
              <td className="pay__infos-row-text">87123658716587</td>
            </tr>
            <tr className="pay__infos-row">
              <td className="pay__infos-row-label">Сумма платежа:</td>
              <td className="pay__infos-row-text">100 руб.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Card/>
    </div>
  )
}

export default Pay