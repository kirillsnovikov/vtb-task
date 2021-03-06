import { ColumnData } from '../lib/Helper';

// Name, Display обязательные параметры
// DataAlign: {Center, Left, Right} выравнивание текста в ячейках ''
// ColAlign: {Center, Left, Right} выравнивание текста в шапке ''
// Component: {default, icon} типы используемых комронентов
// Sort: {desc, none, asc} параметры сортировки
// HtmlCellClass: присваивание класса для ячейки
// Sort: {desc, none, asc} параметры сортировки
export const TableColumns = [
  new ColumnData({
    Name: 'cardNumber',
    Display: '№ карты № карты № карты № карты № карты № карты № карты № карты№ карты № карты№ карты № карты№ карты № карты№ карты № карты№ карты № карты',
    Width: 140,
    HtmlHeaderClass: 'HtmlHeaderClass'
  }),
  new ColumnData({
    Name: 'creditLimit',
    Display: 'кредитный лимит',
    Width: 140
  }),
  new ColumnData({
    Name: 'availableBalance',
    Display: 'условия проведения операций',
    Width: 100
  }),
  new ColumnData({
    DataAlign: 'center',
    control: "This is CONTROL!",
    Name: 'status',
    Display: 'статус',
    Width: 140,
    Component: 'icon',
    IconMap: [
      { Value: 'true', Link: "http://www.cyclisthotel.com/images/check.png" },
      { Value: 'false', Link: "https://clever-e.com/img/home/krest.png" },
      { Value: "default", Link: "http://www.defaulticon.com/images/icons32x32/hammer.png?itok=GwaBj_x2" }
    ],
  }),
  new ColumnData({
    ColAlign: 'Right',
    DataAlign: 'center',
    Name: 'type',
    Display: 'тип',
    Component: 'URL',
    Width: 140,
  }),
  new ColumnData({
    Name: 'package',
    Display: 'пакет',
    Width: 140,
    DataAlign: 'right'
  }),
  new ColumnData({
    Name: 'currency',
    Display: 'валюта',
    Width: 140
  }),
  new ColumnData({
    Name: 'confirm',
    Display: 'lsajflsajfldsafj',
    Width: 20,
    // HtmlCellClass: 'super-class'
    HtmlCellClass: {
      "клиент": "client",
      "не подтв": "cell_vertical",
      "default": "ttttt"
    }
  }),
  new ColumnData({
    Name: 'expDate',
    Display: 'условия прлпрлпрп влаовлаао',
    Width: 100,
  }),
];

// console.log(TableColumns)

export const TableData = [{
    confirm: 'не подтв',
    status: 'выавы',
    cardNumber: '409545432155dss ssssssssss sssssssssss sss sssss sssss sssssssssss sss sssss ssssssssssssssss sss sssss sssss',
    type: 'дебет дебет дебет дебет дебет',
    package: 'Visa VKL',
    availableBalance: '30000000',
    currency: 'РУБ',
    creditLimit: '3000000',
    expDate: '12.12.22',
    HtmlRowClass: 'another_class',
  },
  {
    confirm: 'не подтв',
    status: 'false',
    cardNumber: '409545432155',
    type: 'кредит',
    package: 'Visa VKL',
    availableBalance: '30000000',
    currency: 'РУБ',
    creditLimit: null,
    expDate: '12.12.22',
    HtmlRowClass: 'another_class',
  },
  {
    confirm: 'не подтв',
    status: 'true',
    cardNumber: '409545432155',
    type: 'кредит',
    package: 'Visa VKL',
    availableBalance: '30000000',
    currency: 'РУБ',
    creditLimit: '3000000',
    fffff: '3000000',
    dssddd: '3000000',
    expDate: '12.12.22',
    HtmlRowClass: '',
  }
];