/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
//var format = require('string-template');
class Parameter {
  constructor(name, type, def, required, custom) {
    this.name = name
    this.type = type
    this.def = def
    this.required = required
    this.custom = custom
  }

  set value(newValue) {
    this.validate(newValue)
    this.$value = newValue
  }

  get value() {
    if (this.$value) {
      return this.$value
    } else {
      this.defaultParameter()
    }
  }

  get defaultParameter() {
    if (this.custom) {
      return this.custom[this.def]
    }
    return this.def
  }

  validate(value) {
    let errors = []
    console.log(this.getType(value))
    // console.log(value instanceof Object)
    // console.log(typeof value)
    // console.log(typeof typeof value === this.type)
    // console.log(value)
    if (this.required && !value) {
      errors.push(this.name + ' is required')
    }
    // if (this.type !== 'any' && (value instanceof this.type)) {
    //   errors.push(this.name + ' must be type of "' + this.type + '", ' + value + ' given')
    // }
    // console.log(errors)
  }

  getType(value) {
    var regex = /^\[object (\S+?)\]$/;
    var matches = Object.prototype.toString.call(value).match(regex) || [];
    return (matches[1] || 'undefined').toLowerCase();
  }

  // setType(type) {
  //   if (typeof type === 'function') {
  //     console.log(type)
  //     console.log(new type instanceof type)
  //     return type.name.toLowerCase()
  //   }
  //   return type
  // }
}

const parameters = [
  new Parameter('Name', 'any', 'n/a', true),
  new Parameter('Display', String, 'n/a', true),
  new Parameter('Index', Number, 0, false),
  new Parameter('Width', Object, 100, false),
  new Parameter('IconMap', Array, [], false),
  new Parameter('Sort', String, 'none', false, {
    'desc': 'dsc',
    'none': 'none',
    'asc': 'asc',
  }),
  new Parameter('Align', String, 'left', false, {
    'left': 'align-left',
    'right': 'align-right',
    'center': 'align-center',
  }),
  new Parameter('Component', String, 'default', false, {
    'default': 'v-def-cell',
    'icon': 'v-icon-cell',
  }),
]
parameters.forEach(el => {
  el.value = ''
  // console.log(el)
})
// console.log(par1)
// console.log(par1.type.name)

// let par = new Parameter('asf', 'asfd', 'sdfds', true, {
//   'left': 'align-left',
//   'right': 'align-right',
//   'center': 'align-center',
// })

export const CommonConfig = {
  isShowError: true, //true - Включено отображение ошибок. false - Выключено
  isShowLog: true, //true - Включено отображение ошибок. false - Выключено
}

export const TableConfig = {
  GridPadding: 20,
  ColPadding: 5,
  TableWidth: "auto",
  ColWidth: 100,
  column: {
    align: {
      'left': 'align-left',
      'right': 'align-right',
      'center': 'align-center',
    },
    sort: {
      'desc': 'dsc',
      'none': 'none',
      'asc': 'asc',
    },
    component: {
      'default': 'v-def-cell',
      'icon': 'v-icon-cell',
    },
    get sortDefault() { return this.sort.none },
    get alignDefault() { return this.align.left },
    get componentDefault() { return this.component.default },
  }
}
export const ShowError = function(prefix, msg, JSONdata) {
  if (!CommonConfig.isShowError) {
    return
  }
  var errorMsg = `[${prefix}]: ${msg}`;
  errorMsg += ' ' + JSON.stringify(JSONdata);
  console.error(errorMsg);
}

export const ShowLog = function(prefix, msg, objectData) {
  if (!CommonConfig.isShowError) {
    return
  }
  console.log(`[${prefix}]: ${msg}`);
  if (objectData) {
    console.log(objectData);
  }
}

export const ColumnData = function(params) {
  var errPrefix = 'ColumnData'
  const paramsKeys = ['Name', 'Display', 'Index', 'Sort', 'Width', 'Align', 'Component', 'IconMap']
  // console.log(Object.keys(paramsKeys))
  paramsKeys.forEach((key, index) => {
    switch (key) {
      case 'Name':
        if (!params[key]) ShowError(errPrefix, key + ' empty.', params[key])
        this[key] = params[key] ? params[key] : 'n/a';
        break;
      case 'Display':
        if (!params[key]) ShowError(errPrefix, key + ' empty.', params[key])
        this[key] = params[key] ? HtmlEncode(params[key]) : 'n/a';
        break;
      case 'Index':
        if (params[key] && !Number.isInteger(params[key])) ShowError(errPrefix, key + ' is only Integer.', params[key])
        this[key] = params[key] ? params[key] : 0;
        break;
      case 'Sort':
        if (params[key] && !TableConfig.column.sort[params[key]]) {
          ShowError(errPrefix, key + ' only: ' + Object.keys(TableConfig.column.sort).join('; '), params[key])
        }
        this[key] = params[key] ? TableConfig.column.sort[params[key]] : TableConfig.column.sortDefault;
        break;
      case 'Width':
        if (params[key] && !Number.isInteger(params[key])) ShowError(errPrefix, key + ' is only Integer.', params[key])
        this[key] = params[key] ? params[key] : TableConfig.ColWidth;
        break;
      case 'Align':
        if (params[key] && !TableConfig.column.align[params[key]]) {
          ShowError(errPrefix, key + ' only: ' + Object.keys(TableConfig.column.align).join('; '), params[key])
        }
        this[key] = params[key] ? TableConfig.column.align[params[key]] : TableConfig.column.alignDefault;
        break;
      case 'Component':
        if (params[key] && !TableConfig.column.component[params[key]]) {
          ShowError(errPrefix, key + ' only: ' + Object.keys(TableConfig.column.component).join('; '), params[key])
        }
        this[key] = params[key] ? TableConfig.column.component[params[key]] : TableConfig.column.componentDefault;
        break;
      case 'IconMap':
        if (params[key] && !Array.isArray(params[key])) ShowError(errPrefix, key + ' is only Array.', params[key])
        this[key] = params[key] ? params[key] : []
        break;
    }
  })
  // console.log(this)
  // let keys = Object.keys(params)
  // console.log(params.Name)
  // console.log(this.Name = 'kk/')
  // console.log(this)
  // params.forEach(param => {
  // param.Name
  // })
  // console.log('aaa', this)
  // var that = this;
  // var arg = { Name: Name, Display: Display, Sort: Sort, Index: Index };
  // if (!Name)
  //   ShowError(errPrefix, "Name empty", arg);
  // if (!Display)
  //   ShowError(errPrefix, "Display empty", arg);
  // if (Index && !Number.isInteger(Number(Index)))
  //   ShowError(errPrefix, "Index only integer", arg);
  // if (Sort && !TableConfig.column.sort[Sort])
  //   ShowError(errPrefix, "Sort only: " + Object.keys(TableConfig.column.sort).join("; "), arg);
  // this.Name = Name ? Name : 'n/a';
  // this.Display = Display ? HtmlEncode(Display) : 'n/a';
  // this.Index = Index ? Number(Index) : 0;
  // this.Sort = Sort ? Sort : TableConfig.column.sortDefault;
  // this.Width = Width ? Width : TableConfig.ColWidth;
  // this.Align = Align ? Align : TableConfig.Align;
  //this.__defineGetter__('Component', function(){debugger;})
  //this.__defineSetter__('Component', function(v){debugger;})

  // this.Component = "v-def-cell";
  // this.SetComponent = function(component) {
  //   this.Component = component;
  //   return this;
  // }
  // this.SetIconMap = function(IconMap) { //Value:"", Link:""
  //   this.IconMap = IconMap;
  //   return this;
  // }
}

function HtmlEncode(orig) {
  if (orig == null)
    return "";

  return orig.replace(/&/g, "&amp;").
  replace(/'/g, "&#039;").
  replace(/"/g, "&quot;").
  replace(/>/g, "&gt;").
  replace(/</g, "&lt;");
}