import {ColumnData} from '../lib/Helper';

var Name, Display, Width;
export const TableColumns =
[(new ColumnData('name', 'Имя', '150')),
 new ColumnData('power', 'Мощь')];

export const TableData = [
      { name: 'Chuck Norris', power: Infinity, isActive:false },
      { name: 'Bruce Lee', power: 9000, isActive:false },
      { name: 'Jackie Chan', power: 7000, isActive:false },
      { name: 'Jet Li', power: 8000, isActive:false }
    ];