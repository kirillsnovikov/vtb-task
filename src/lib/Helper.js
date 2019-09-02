/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
//var format = require('string-template');

export const CommonConfig = {
  isShowError: "1", //1 - Включено отображение ошибок. 0 - Выключено
  isShowLog: "1", //1 - Включено отображение ошибок. 0 - Выключено
}

export const TableConfig = {
  GridPadding: "20",
  ColPadding: "5",
  TableWidth: "auto",
  ColWidth: "100",
  column:{
    //sortIndex:{"-1":"desc", "0":"none", "1":"asc"},
    sortName:{"desc":"dsc", "none":"none", "asc":"asc"},
    get sortDefault(){return this.sortName.none}
  }
}
export const ShowError = function(prefix, msg, JSONdata){
  if(CommonConfig.isShowError != "1")
    return;
  var errorMsg = `[{prefix}]: {msg}`;
    errorMsg += " " + JSON.stringify(JSONdata);
  console.error(errorMsg);
}

export const ShowLog = function(prefix, msg, objectData){
  if(CommonConfig.isShowLog != "1")
    return;
  
    console.log(`[${prefix}]: ${msg}`);
  if(objectData)
    console.log(objectData);
}

export const ColumnData = function(Name, Display, Width, Sort, Index){
  var errPrefix = "ColumnData";
  var that = this;
  var arg = {Name:Name, Display:Display, Sort:Sort, Index:Index};
  if(!Name)
    ShowError(errPrefix, "Name empty", arg);
  if(!Display)
    ShowError(errPrefix, "Display empty", arg);
  if(Index && !Number.isInteger(Number(Index)))
    ShowError(errPrefix, "Index only indeger", arg);
  if(Sort && !TableConfig.column.sortName[Sort])
    ShowError(errPrefix, "Sort only: " + Object.keys(TableConfig.column.sortName).join("; "), arg);
  that.Name = Name ? Name : 'n/a';
  that.Display = Display ? HtmlEncode(Display) : 'n/a';
  that.Index = Index ? Number(Index) : 0;
  that.Sort = Sort ? Sort : TableConfig.column.sortDefault;
  that.Width = (Width ? Width : TableConfig.ColWidth) + 'px';
  //this.__defineGetter__('CompName', function(){debugger;})
  //that.__defineSetter__('CompName', function(v){debugger;})

  that.CompName = "v-def-cell";
  that.SetCompName = function(CompName){
      that.CompName = CompName;
      return that;
  }
}

function HtmlEncode(orig)
{
  if (orig == null)
    return "";

  return orig.replace (/&/g, "&amp;").
    replace (/'/g, "&#039;").
    replace (/"/g, "&quot;").
    replace (/>/g, "&gt;").
    replace (/</g, "&lt;");
}

