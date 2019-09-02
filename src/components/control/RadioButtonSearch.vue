<template>
    <div
        class="radio-button-search-group"
    >
        <label
            v-for="(item, index) in DataSet"
            :key="index"
            class="radio-button-search"
            :class="[
            { 'is-active': DataSet[index].Key === active },
            { 'is-focus': focus }
            ]"
            role="radio"
            @click="ChangeActive(index)"
        >
            <span
                class="radio-button-search__inner"
                :style="DataSet[index].Key === active">
                <template>{{item.Value}}</template>
            </span>
        </label>
    </div>
</template>
<script>
  export default {
    name: 'RadioButtonSearch',

    props: {
        //[{Key:"", Value:""}]
        DataSet:Array,
        active: String
    },
    data() {
      return {
        focus: false
      };
    },
    methods: {
        ChangeActive(index) {
            if(this.active == this.DataSet[index].Key)
                return;

            this.active = this.DataSet[index].Key;
            this.$emit('on-change', this.active);
        }
    }
  };
</script>
<style>
.radio-button-search-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    font-size: 0
}

.radio-button-search,.radio-button-search__inner {
    position: relative;
    display: inline-block;
    outline: none
}

.radio-button-search__inner {
    line-height: 1;
    white-space: nowrap;
    vertical-align: middle;
    background: #fff;
    border: 1px solid #dcdfe6;
    font-weight: 500;
    border-left: 0;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    margin: 0;
    cursor: pointer;
    transition: all .3s cubic-bezier(.645,.045,.355,1);
    padding: 5px 5px;
    font-size: 10px;
    border-radius: 0
}
.radio-button-search.is-active span {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    box-shadow: -1px 0 0 0 #409eff;
}

.radio-button-search__inner.is-round {
    padding: 12px 20px
}

.radio-button-search__inner:hover {
    color: #409eff
}

.radio-button-search__inner [class*=el-icon-] {
    line-height: .9
}

.radio-button-search__inner [class*=el-icon-]+span {
    margin-left: 5px
}

.radio-button-search:first-child .radio-button-search__inner {
    border-left: 1px solid #dcdfe6;
    border-radius: 4px 0 0 4px;
    box-shadow: none!important
}

.radio-button-search:last-child .radio-button-search__inner {
    border-radius: 0 4px 4px 0
}

.radio-button-search:first-child:last-child .radio-button-search__inner {
    border-radius: 4px
}

.radio-button-search--medium .radio-button-search__inner {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 0
}

.radio-button-search--medium .radio-button-search__inner.is-round {
    padding: 10px 20px
}

.radio-button-search--small .radio-button-search__inner {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 0
}

.radio-button-search--small .radio-button-search__inner.is-round {
    padding: 9px 15px
}

.radio-button-search--mini .radio-button-search__inner {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 0
}

.radio-button-search--mini .radio-button-search__inner.is-round {
    padding: 7px 15px
}

.radio-button-search:focus:not(.is-focus):not(:active):not(.is-disabled) {
    box-shadow: 0 0 2px 2px #409eff
}
</style>