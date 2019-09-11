import {ColumnData} from '../lib/Helper';

export const TableColumns = [
(new ColumnData('status', 'статус', 40)).SetCompName("v-icon-cell").SetIconMap([
  {Value:true, Link:"http://www.cyclisthotel.com/images/check.png"},
  {Value:false, Link:"https://clever-e.com/img/home/krest.png"}
  ]),
new ColumnData('cardNumber', '№ карты', 40),
new ColumnData('type', 'тип', 40),
new ColumnData('package', 'пакет', 40),
new ColumnData('availableBalance', 'доступный остаток', 40, 'align-right'),
new ColumnData('currency', 'валюта', 40),
new ColumnData('creditLimit', 'кредитный лимит', 40),
new ColumnData('expDate', 'окончание действия', 40),
];
// console.log(TableColumns)

export const TableData = [
{
  status: true,
  cardNumber: '409545432155dssssssssssssssssssssssssssssssssssss',
  type: 'дебет',
  package: 'Visa VKL',
  availableBalance: '30000000',
  currency: 'РУБ',
  creditLimit: '3000000',
  expDate: '12.12.22',
},
{
  status: true,
  cardNumber: '409545432155',
  type: 'кредит',
  package: 'Visa VKL',
  availableBalance: '30000000',
  currency: 'РУБ',
  creditLimit: null,
  expDate: '12.12.22',
},
{
  status: false,
  cardNumber: '409545432155',
  type: 'кредит',
  package: 'Visa VKL',
  availableBalance: '30000000',
  currency: 'РУБ',
  creditLimit: '3000000',
  expDate: '12.12.22',
}
];