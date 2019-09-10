import {ColumnData} from '../lib/Helper';

export const TableColumns = [
(new ColumnData('status', 'статус', 80)).SetCompName("v-icon-cell").SetIconMap([
  {Value:true, Link:"https://simpleorderflow.s3-us-west-2.amazonaws.com/assets/images/sof-icon-tick.png"},
  {Value:false, Link:"https://clever-e.com/img/home/krest.png"}
  ]),
new ColumnData('cardNumber', '№ карты', 100),
new ColumnData('type', 'тип', 100),
new ColumnData('package', 'пакет', 100),
new ColumnData('availableBalance', 'доступный остаток', 100),
new ColumnData('currency', 'валюта', 100),
new ColumnData('creditLimit', 'кредитный лимит', 200),
new ColumnData('expDate', 'окончание действия', 100),
];
// console.log(TableColumns)

export const TableData = [
{
  isActive: false,
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
  isActive: false,
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
  isActive: false,
  data: {
    status: false,
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