import Advertising from "../advertising/advertising";


const BlockAdvertising = () => {
    return  (
      <div className="elements">
        <Advertising title='Предлогаем вашему вниманию' value='DoorDash' href='https://www.doordash.com/' description='DoorDash — это сервис доставки еды и товаров из локальных магазинов в течение нескольких часов'/>
        <Advertising title='Последние новости вы можете узнать здесь' value='Twitter' href='https://www.twitter.com/' description='Твиттер», находится в процессе ребрендинга в X, — американский сервис микроблогов и социальная сеть/'/>
      </div>
    )
}

export default BlockAdvertising;