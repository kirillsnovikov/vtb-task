import { ColumnData } from '../lib/Helper';

// Name, Display обязательные параметры
// Align: {center, left, right} выравнивание текста в колонке ''
// Component: {default, icon} типы используемых комронентов
// Sort: {desc, none, asc} параметры сортировки
export const TableColumns = [

  new ColumnData({
    control: "This is CONTROL!",
    Name: 'status',
    Display: 'статус',
    Width: 140,
    Component: 'icon',
    IconMap: [
      { Value: true, Link: "http://www.cyclisthotel.com/images/check.png" },
      { Value: false, Link: "https://clever-e.com/img/home/krest.png" }
    ],
  }),
  new ColumnData({
    Name: 'cardNumber',
    Display: '№ карты',
    Width: 140
  }),
  new ColumnData({
    Align: 'right',
    Name: 'type',
    Display: 'тип',
    Width: 140,
  }),
  new ColumnData({
    Name: 'package',
    Display: 'пакет',
    Width: 140,
    Align: 'right'
  }),
  new ColumnData({
    Name: 'availableBalance',
    Display: 'доступный остаток',
    Width: 140
  }),
  new ColumnData({
    Name: 'currency',
    Display: 'валюта',
    Width: 140
  }),
  new ColumnData({
    Name: 'creditLimit',
    Display: 'кредитный лимит',
    Width: 140
  }),
  new ColumnData({
    Name: 'expDate',
    Display: 'окончание&действия',
    Width: 140,
  }),
];

export const TableData = [{
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
    fffff: '3000000',
    dssddd: '3000000',
    expDate: '12.12.22',
  }
];