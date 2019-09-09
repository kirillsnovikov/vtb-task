import {ColumnData} from '../lib/Helper';

var Name, Display, Width;
export const TableColumns = [
(new ColumnData('status', 'статус')).SetCompName("v-icon-cell").SetIconMap([
  {Value:true, Link:"@/assets/icons/active.svg"},
  {Value:false, Link:"@/assets/icons/block.svg"}
  ]),
new ColumnData('cardNumber', '№ карты', 200),
new ColumnData('type', 'тип'),
new ColumnData('package', 'пакет'),
new ColumnData('availableBalance', 'доступный остаток'),
new ColumnData('currency', 'валюта'),
new ColumnData('creditLimit', 'кредитный лимит', 200),
new ColumnData('expDate', 'окончание действия'),
];
// console.log(TableColumns)

export const TableData = [
{
  options: {
    isActive: false,
    textAlign: 'left'
  },
  data: {
    status: true,
    cardNumber: '409545432155',
    type: 'дебет',
    package: 'Visa VKL',
    availableBalance: '30000000',
    currency: 'РУБ',
    creditLimit: '3000000',
    expDate: '12.12.22',
  }
},
{
  options: {
    isActive: false,
    textAlign: 'left'
  },
  data: {
    status: true,
    cardNumber: '409545432155',
    type: 'кредит',
    package: 'Visa VKL',
    availableBalance: '30000000',
    currency: 'РУБ',
    creditLimit: null,
    expDate: '12.12.22',
  }
},
{
  options: {
    isActive: false,
    textAlign: 'left'
  },
  data: {
    status: true,
    cardNumber: '409545432155',
    type: 'кредит',
    package: 'Visa VKL',
    availableBalance: '30000000',
    currency: 'РУБ',
    creditLimit: '3000000',
    expDate: '12.12.22',
  }
}
];