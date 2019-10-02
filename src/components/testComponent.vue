<template>
    <div id="_swecontent" class="vtb-fm-contact-form-applet">
      <div class="vtb-header">
        <div class="siebui-span-xl-1">
          Фото
        </div>

        <div class="siebui-span-xl-3">
          ФИО
        </div>

        <div class="siebui-span-xl-1">
          красная
        </div>

        <div class="siebui-span-xl-6">
          иконки
        </div>

        <div class="siebui-span-xl-1">
          <a href="#" class="vtb-collapse-applet"></a>
        </div>

      </div>
      <div class="vtb-body">
        <div class="siebui-row">
          <div class="siebui-span-xl-2">
            + 7 917 5166404
            dderbentsov@tsconsulting.com
          </div>

          <div class="siebui-span-xl-1">

          </div>

          <div class="siebui-span-xl-2">
            Паспорт серия
          </div>

          <div class="siebui-span-xl-1">

          </div>

          <div class="siebui-span-xl-2">
            Адрес проживания
          </div>

          <div class="siebui-span-xl-1">

          </div>

          <div class="siebui-span-xl-2">
            Россия
          </div>

          <div class="siebui-span-xl-1">

          </div>
        </div>
      </div>
      <div class="vtb-footer">
      </div>
    </div>
</template>

<script>

    import testRRRmponent from './testRRRmponent.vue'
    export default {
      props: {
        obj: Object,
        person: String
      },

      components: {
          testRRRmponent
      },

    }
</script>

<style media="screen">

a.vtb-collapse-applet {
  width: 28px;
  height: 28px;
  display: block;
  background: url('./../assets/icons/arroa-up.svg') no-repeat center;
  transform: rotate(-90deg);
}
a.vtb-collapse-applet:active {

  transform: rotate(90deg);
}

.vtb-fm-contact-form-applet {
  position: relative;
  width: 943px;
  height: 243px;
  border-radius: 10px;
  background-color: var(--white);
}

.vtb-fm-contact-form-applet .vtb-header {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--pale-grey);
}

.vtb-fm-contact-form-applet .vtb-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 14px;
  border-radius: 0 0 10px 10px;
  background-color: var(--dark-sky-blue);

}

:root {
  --white: #ffffff;
  --black: #000000;
  --watermelon: #fd4176;
  --tangerine: #ff9300;
  --electric-purple: #a237f3;
  --brown-grey: #999999;
  --dark-lime-green: #73c700;
  --azure: #00a5ff;
  --very-light-pink: #cccccc;
  --butterscotch: #ffbb41;
  --azure-two: #00a0df;
  --blue-blue: #1750c6;
  --royal: #0a2896;
  --blue-blue-two: #1851c7;
  --dull-orange: #d6ba42;
  --camel: #c69146;
  --dark-sky-blue: #3c97dd;
  --pale-grey: #f7f8fd;
}
body {
   /*background-image: linear-gradient(to right, var(--royal), var(--blue-blue) 97%, var(--blue-blue-two));*/
}

/*--------------------------------------------------------------------------------
 * fluidgrid.less - provides fluid grid functionality
 *                  not to be confused with jqGrid, which is being styled in applet.less
 *--------------------------------------------------------------------------------*/
/* Maximum number of columns for Responsive Behavior */
/*
 * Generate the extra small columns
 */
/*
 * Generate the small columns
 */
/*
 * Generate the medium columns
 */
/*
 * Generate the large columns
 */
/*
 * Generate the extra large columns
 */
.siebui-row {
  margin-left: 0;
  margin-right: 0;
}
.siebui-span-xs-1, .siebui-span-sm-1, .siebui-span-md-1, .siebui-span-lg-1, .siebui-span-xl-1, .siebui-span-xs-2, .siebui-span-sm-2, .siebui-span-md-2, .siebui-span-lg-2, .siebui-span-xl-2, .siebui-span-xs-3, .siebui-span-sm-3, .siebui-span-md-3, .siebui-span-lg-3, .siebui-span-xl-3, .siebui-span-xs-4, .siebui-span-sm-4, .siebui-span-md-4, .siebui-span-lg-4, .siebui-span-xl-4, .siebui-span-xs-5, .siebui-span-sm-5, .siebui-span-md-5, .siebui-span-lg-5, .siebui-span-xl-5, .siebui-span-xs-6, .siebui-span-sm-6, .siebui-span-md-6, .siebui-span-lg-6, .siebui-span-xl-6, .siebui-span-xs-7, .siebui-span-sm-7, .siebui-span-md-7, .siebui-span-lg-7, .siebui-span-xl-7, .siebui-span-xs-8, .siebui-span-sm-8, .siebui-span-md-8, .siebui-span-lg-8, .siebui-span-xl-8, .siebui-span-xs-9, .siebui-span-sm-9, .siebui-span-md-9, .siebui-span-lg-9, .siebui-span-xl-9, .siebui-span-xs-10, .siebui-span-sm-10, .siebui-span-md-10, .siebui-span-lg-10, .siebui-span-xl-10, .siebui-span-xs-11, .siebui-span-sm-11, .siebui-span-md-11, .siebui-span-lg-11, .siebui-span-xl-11, .siebui-span-xs-12, .siebui-span-sm-12, .siebui-span-md-12, .siebui-span-lg-12, .siebui-span-xl-12 {
  position: relative;
  min-height: 1px;
  padding-left: 0;
  padding-right: 0;
}
.siebui-span-xs-1, .siebui-span-xs-2, .siebui-span-xs-3, .siebui-span-xs-4, .siebui-span-xs-5, .siebui-span-xs-6, .siebui-span-xs-7, .siebui-span-xs-8, .siebui-span-xs-9, .siebui-span-xs-10, .siebui-span-xs-11, .siebui-span-xs-12 {
  float: left;
}
.siebui-span-xs-12 {
  width: 100%;
}
.siebui-span-xs-11 {
  width: 91.66666667%;
}
.siebui-span-xs-10 {
  width: 83.33333333%;
}
.siebui-span-xs-9 {
  width: 75%;
}
.siebui-span-xs-8 {
  width: 66.66666667%;
}
.siebui-span-xs-7 {
  width: 58.33333333%;
}
.siebui-span-xs-6 {
  width: 50%;
}
.siebui-span-xs-5 {
  width: 41.66666667%;
}
.siebui-span-xs-4 {
  width: 33.33333333%;
}
.siebui-span-xs-3 {
  width: 25%;
}
.siebui-span-xs-2 {
  width: 16.66666667%;
}
.siebui-span-xs-1 {
  width: 8.33333333%;
}
.siebui-span-xs-pull-12 {
  right: 100%;
}
.siebui-span-xs-pull-11 {
  right: 91.66666667%;
}
.siebui-span-xs-pull-10 {
  right: 83.33333333%;
}
.siebui-span-xs-pull-9 {
  right: 75%;
}
.siebui-span-xs-pull-8 {
  right: 66.66666667%;
}
.siebui-span-xs-pull-7 {
  right: 58.33333333%;
}
.siebui-span-xs-pull-6 {
  right: 50%;
}
.siebui-span-xs-pull-5 {
  right: 41.66666667%;
}
.siebui-span-xs-pull-4 {
  right: 33.33333333%;
}
.siebui-span-xs-pull-3 {
  right: 25%;
}
.siebui-span-xs-pull-2 {
  right: 16.66666667%;
}
.siebui-span-xs-pull-1 {
  right: 8.33333333%;
}
.siebui-span-xs-pull-0 {
  right: 0%;
}
.siebui-span-xs-push-12 {
  left: 100%;
}
.siebui-span-xs-push-11 {
  left: 91.66666667%;
}
.siebui-span-xs-push-10 {
  left: 83.33333333%;
}
.siebui-span-xs-push-9 {
  left: 75%;
}
.siebui-span-xs-push-8 {
  left: 66.66666667%;
}
.siebui-span-xs-push-7 {
  left: 58.33333333%;
}
.siebui-span-xs-push-6 {
  left: 50%;
}
.siebui-span-xs-push-5 {
  left: 41.66666667%;
}
.siebui-span-xs-push-4 {
  left: 33.33333333%;
}
.siebui-span-xs-push-3 {
  left: 25%;
}
.siebui-span-xs-push-2 {
  left: 16.66666667%;
}
.siebui-span-xs-push-1 {
  left: 8.33333333%;
}
.siebui-span-xs-push-0 {
  left: 0%;
}
.siebui-span-xs-offset-12 {
  margin-left: 100%;
}
.siebui-span-xs-offset-11 {
  margin-left: 91.66666667%;
}
.siebui-span-xs-offset-10 {
  margin-left: 83.33333333%;
}
.siebui-span-xs-offset-9 {
  margin-left: 75%;
}
.siebui-span-xs-offset-8 {
  margin-left: 66.66666667%;
}
.siebui-span-xs-offset-7 {
  margin-left: 58.33333333%;
}
.siebui-span-xs-offset-6 {
  margin-left: 50%;
}
.siebui-span-xs-offset-5 {
  margin-left: 41.66666667%;
}
.siebui-span-xs-offset-4 {
  margin-left: 33.33333333%;
}
.siebui-span-xs-offset-3 {
  margin-left: 25%;
}
.siebui-span-xs-offset-2 {
  margin-left: 16.66666667%;
}
.siebui-span-xs-offset-1 {
  margin-left: 8.33333333%;
}
.siebui-span-xs-offset-0 {
  margin-left: 0%;
}
@media (min-width: 480px) {
  .siebui-span-sm-1, .siebui-span-sm-2, .siebui-span-sm-3, .siebui-span-sm-4, .siebui-span-sm-5, .siebui-span-sm-6, .siebui-span-sm-7, .siebui-span-sm-8, .siebui-span-sm-9, .siebui-span-sm-10, .siebui-span-sm-11, .siebui-span-sm-12 {
    float: left;
  }
  .siebui-span-sm-12 {
    width: 100%;
  }
  .siebui-span-sm-11 {
    width: 91.66666667%;
  }
  .siebui-span-sm-10 {
    width: 83.33333333%;
  }
  .siebui-span-sm-9 {
    width: 75%;
  }
  .siebui-span-sm-8 {
    width: 66.66666667%;
  }
  .siebui-span-sm-7 {
    width: 58.33333333%;
  }
  .siebui-span-sm-6 {
    width: 50%;
  }
  .siebui-span-sm-5 {
    width: 41.66666667%;
  }
  .siebui-span-sm-4 {
    width: 33.33333333%;
  }
  .siebui-span-sm-3 {
    width: 25%;
  }
  .siebui-span-sm-2 {
    width: 16.66666667%;
  }
  .siebui-span-sm-1 {
    width: 8.33333333%;
  }
  .siebui-span-sm-pull-12 {
    right: 100%;
  }
  .siebui-span-sm-pull-11 {
    right: 91.66666667%;
  }
  .siebui-span-sm-pull-10 {
    right: 83.33333333%;
  }
  .siebui-span-sm-pull-9 {
    right: 75%;
  }
  .siebui-span-sm-pull-8 {
    right: 66.66666667%;
  }
  .siebui-span-sm-pull-7 {
    right: 58.33333333%;
  }
  .siebui-span-sm-pull-6 {
    right: 50%;
  }
  .siebui-span-sm-pull-5 {
    right: 41.66666667%;
  }
  .siebui-span-sm-pull-4 {
    right: 33.33333333%;
  }
  .siebui-span-sm-pull-3 {
    right: 25%;
  }
  .siebui-span-sm-pull-2 {
    right: 16.66666667%;
  }
  .siebui-span-sm-pull-1 {
    right: 8.33333333%;
  }
  .siebui-span-sm-pull-0 {
    right: 0%;
  }
  .siebui-span-sm-push-12 {
    left: 100%;
  }
  .siebui-span-sm-push-11 {
    left: 91.66666667%;
  }
  .siebui-span-sm-push-10 {
    left: 83.33333333%;
  }
  .siebui-span-sm-push-9 {
    left: 75%;
  }
  .siebui-span-sm-push-8 {
    left: 66.66666667%;
  }
  .siebui-span-sm-push-7 {
    left: 58.33333333%;
  }
  .siebui-span-sm-push-6 {
    left: 50%;
  }
  .siebui-span-sm-push-5 {
    left: 41.66666667%;
  }
  .siebui-span-sm-push-4 {
    left: 33.33333333%;
  }
  .siebui-span-sm-push-3 {
    left: 25%;
  }
  .siebui-span-sm-push-2 {
    left: 16.66666667%;
  }
  .siebui-span-sm-push-1 {
    left: 8.33333333%;
  }
  .siebui-span-sm-push-0 {
    left: 0%;
  }
  .siebui-span-sm-offset-12 {
    margin-left: 100%;
  }
  .siebui-span-sm-offset-11 {
    margin-left: 91.66666667%;
  }
  .siebui-span-sm-offset-10 {
    margin-left: 83.33333333%;
  }
  .siebui-span-sm-offset-9 {
    margin-left: 75%;
  }
  .siebui-span-sm-offset-8 {
    margin-left: 66.66666667%;
  }
  .siebui-span-sm-offset-7 {
    margin-left: 58.33333333%;
  }
  .siebui-span-sm-offset-6 {
    margin-left: 50%;
  }
  .siebui-span-sm-offset-5 {
    margin-left: 41.66666667%;
  }
  .siebui-span-sm-offset-4 {
    margin-left: 33.33333333%;
  }
  .siebui-span-sm-offset-3 {
    margin-left: 25%;
  }
  .siebui-span-sm-offset-2 {
    margin-left: 16.66666667%;
  }
  .siebui-span-sm-offset-1 {
    margin-left: 8.33333333%;
  }
  .siebui-span-sm-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 768px) {
  .siebui-span-md-1, .siebui-span-md-2, .siebui-span-md-3, .siebui-span-md-4, .siebui-span-md-5, .siebui-span-md-6, .siebui-span-md-7, .siebui-span-md-8, .siebui-span-md-9, .siebui-span-md-10, .siebui-span-md-11, .siebui-span-md-12 {
    float: left;
  }
  .siebui-span-md-12 {
    width: 100%;
  }
  .siebui-span-md-11 {
    width: 91.66666667%;
  }
  .siebui-span-md-10 {
    width: 83.33333333%;
  }
  .siebui-span-md-9 {
    width: 75%;
  }
  .siebui-span-md-8 {
    width: 66.66666667%;
  }
  .siebui-span-md-7 {
    width: 58.33333333%;
  }
  .siebui-span-md-6 {
    width: 50%;
  }
  .siebui-span-md-5 {
    width: 41.66666667%;
  }
  .siebui-span-md-4 {
    width: 33.33333333%;
  }
  .siebui-span-md-3 {
    width: 25%;
  }
  .siebui-span-md-2 {
    width: 16.66666667%;
  }
  .siebui-span-md-1 {
    width: 8.33333333%;
  }
  .siebui-span-md-pull-12 {
    right: 100%;
  }
  .siebui-span-md-pull-11 {
    right: 91.66666667%;
  }
  .siebui-span-md-pull-10 {
    right: 83.33333333%;
  }
  .siebui-span-md-pull-9 {
    right: 75%;
  }
  .siebui-span-md-pull-8 {
    right: 66.66666667%;
  }
  .siebui-span-md-pull-7 {
    right: 58.33333333%;
  }
  .siebui-span-md-pull-6 {
    right: 50%;
  }
  .siebui-span-md-pull-5 {
    right: 41.66666667%;
  }
  .siebui-span-md-pull-4 {
    right: 33.33333333%;
  }
  .siebui-span-md-pull-3 {
    right: 25%;
  }
  .siebui-span-md-pull-2 {
    right: 16.66666667%;
  }
  .siebui-span-md-pull-1 {
    right: 8.33333333%;
  }
  .siebui-span-md-pull-0 {
    right: 0%;
  }
  .siebui-span-md-push-12 {
    left: 100%;
  }
  .siebui-span-md-push-11 {
    left: 91.66666667%;
  }
  .siebui-span-md-push-10 {
    left: 83.33333333%;
  }
  .siebui-span-md-push-9 {
    left: 75%;
  }
  .siebui-span-md-push-8 {
    left: 66.66666667%;
  }
  .siebui-span-md-push-7 {
    left: 58.33333333%;
  }
  .siebui-span-md-push-6 {
    left: 50%;
  }
  .siebui-span-md-push-5 {
    left: 41.66666667%;
  }
  .siebui-span-md-push-4 {
    left: 33.33333333%;
  }
  .siebui-span-md-push-3 {
    left: 25%;
  }
  .siebui-span-md-push-2 {
    left: 16.66666667%;
  }
  .siebui-span-md-push-1 {
    left: 8.33333333%;
  }
  .siebui-span-md-push-0 {
    left: 0%;
  }
  .siebui-span-md-offset-12 {
    margin-left: 100%;
  }
  .siebui-span-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .siebui-span-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .siebui-span-md-offset-9 {
    margin-left: 75%;
  }
  .siebui-span-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .siebui-span-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .siebui-span-md-offset-6 {
    margin-left: 50%;
  }
  .siebui-span-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .siebui-span-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .siebui-span-md-offset-3 {
    margin-left: 25%;
  }
  .siebui-span-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .siebui-span-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .siebui-span-md-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 992px) {
  .siebui-span-lg-1, .siebui-span-lg-2, .siebui-span-lg-3, .siebui-span-lg-4, .siebui-span-lg-5, .siebui-span-lg-6, .siebui-span-lg-7, .siebui-span-lg-8, .siebui-span-lg-9, .siebui-span-lg-10, .siebui-span-lg-11, .siebui-span-lg-12 {
    float: left;
  }
  .siebui-span-lg-12 {
    width: 100%;
  }
  .siebui-span-lg-11 {
    width: 91.66666667%;
  }
  .siebui-span-lg-10 {
    width: 83.33333333%;
  }
  .siebui-span-lg-9 {
    width: 75%;
  }
  .siebui-span-lg-8 {
    width: 66.66666667%;
  }
  .siebui-span-lg-7 {
    width: 58.33333333%;
  }
  .siebui-span-lg-6 {
    width: 50%;
  }
  .siebui-span-lg-5 {
    width: 41.66666667%;
  }
  .siebui-span-lg-4 {
    width: 33.33333333%;
  }
  .siebui-span-lg-3 {
    width: 25%;
  }
  .siebui-span-lg-2 {
    width: 16.66666667%;
  }
  .siebui-span-lg-1 {
    width: 8.33333333%;
  }
  .siebui-span-lg-pull-12 {
    right: 100%;
  }
  .siebui-span-lg-pull-11 {
    right: 91.66666667%;
  }
  .siebui-span-lg-pull-10 {
    right: 83.33333333%;
  }
  .siebui-span-lg-pull-9 {
    right: 75%;
  }
  .siebui-span-lg-pull-8 {
    right: 66.66666667%;
  }
  .siebui-span-lg-pull-7 {
    right: 58.33333333%;
  }
  .siebui-span-lg-pull-6 {
    right: 50%;
  }
  .siebui-span-lg-pull-5 {
    right: 41.66666667%;
  }
  .siebui-span-lg-pull-4 {
    right: 33.33333333%;
  }
  .siebui-span-lg-pull-3 {
    right: 25%;
  }
  .siebui-span-lg-pull-2 {
    right: 16.66666667%;
  }
  .siebui-span-lg-pull-1 {
    right: 8.33333333%;
  }
  .siebui-span-lg-pull-0 {
    right: 0%;
  }
  .siebui-span-lg-push-12 {
    left: 100%;
  }
  .siebui-span-lg-push-11 {
    left: 91.66666667%;
  }
  .siebui-span-lg-push-10 {
    left: 83.33333333%;
  }
  .siebui-span-lg-push-9 {
    left: 75%;
  }
  .siebui-span-lg-push-8 {
    left: 66.66666667%;
  }
  .siebui-span-lg-push-7 {
    left: 58.33333333%;
  }
  .siebui-span-lg-push-6 {
    left: 50%;
  }
  .siebui-span-lg-push-5 {
    left: 41.66666667%;
  }
  .siebui-span-lg-push-4 {
    left: 33.33333333%;
  }
  .siebui-span-lg-push-3 {
    left: 25%;
  }
  .siebui-span-lg-push-2 {
    left: 16.66666667%;
  }
  .siebui-span-lg-push-1 {
    left: 8.33333333%;
  }
  .siebui-span-lg-push-0 {
    left: 0%;
  }
  .siebui-span-lg-offset-12 {
    margin-left: 100%;
  }
  .siebui-span-lg-offset-11 {
    margin-left: 91.66666667%;
  }
  .siebui-span-lg-offset-10 {
    margin-left: 83.33333333%;
  }
  .siebui-span-lg-offset-9 {
    margin-left: 75%;
  }
  .siebui-span-lg-offset-8 {
    margin-left: 66.66666667%;
  }
  .siebui-span-lg-offset-7 {
    margin-left: 58.33333333%;
  }
  .siebui-span-lg-offset-6 {
    margin-left: 50%;
  }
  .siebui-span-lg-offset-5 {
    margin-left: 41.66666667%;
  }
  .siebui-span-lg-offset-4 {
    margin-left: 33.33333333%;
  }
  .siebui-span-lg-offset-3 {
    margin-left: 25%;
  }
  .siebui-span-lg-offset-2 {
    margin-left: 16.66666667%;
  }
  .siebui-span-lg-offset-1 {
    margin-left: 8.33333333%;
  }
  .siebui-span-lg-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 1200px) {
  .siebui-span-xl-1, .siebui-span-xl-2, .siebui-span-xl-3, .siebui-span-xl-4, .siebui-span-xl-5, .siebui-span-xl-6, .siebui-span-xl-7, .siebui-span-xl-8, .siebui-span-xl-9, .siebui-span-xl-10, .siebui-span-xl-11, .siebui-span-xl-12 {
    float: left;
  }
  .siebui-span-xl-12 {
    width: 100%;
  }
  .siebui-span-xl-11 {
    width: 91.66666667%;
  }
  .siebui-span-xl-10 {
    width: 83.33333333%;
  }
  .siebui-span-xl-9 {
    width: 75%;
  }
  .siebui-span-xl-8 {
    width: 66.66666667%;
  }
  .siebui-span-xl-7 {
    width: 58.33333333%;
  }
  .siebui-span-xl-6 {
    width: 50%;
  }
  .siebui-span-xl-5 {
    width: 41.66666667%;
  }
  .siebui-span-xl-4 {
    width: 33.33333333%;
  }
  .siebui-span-xl-3 {
    width: 25%;
  }
  .siebui-span-xl-2 {
    width: 16.66666667%;
  }
  .siebui-span-xl-1 {
    width: 8.33333333%;
  }
  .siebui-span-xl-pull-12 {
    right: 100%;
  }
  .siebui-span-xl-pull-11 {
    right: 91.66666667%;
  }
  .siebui-span-xl-pull-10 {
    right: 83.33333333%;
  }
  .siebui-span-xl-pull-9 {
    right: 75%;
  }
  .siebui-span-xl-pull-8 {
    right: 66.66666667%;
  }
  .siebui-span-xl-pull-7 {
    right: 58.33333333%;
  }
  .siebui-span-xl-pull-6 {
    right: 50%;
  }
  .siebui-span-xl-pull-5 {
    right: 41.66666667%;
  }
  .siebui-span-xl-pull-4 {
    right: 33.33333333%;
  }
  .siebui-span-xl-pull-3 {
    right: 25%;
  }
  .siebui-span-xl-pull-2 {
    right: 16.66666667%;
  }
  .siebui-span-xl-pull-1 {
    right: 8.33333333%;
  }
  .siebui-span-xl-pull-0 {
    right: 0%;
  }
  .siebui-span-xl-push-12 {
    left: 100%;
  }
  .siebui-span-xl-push-11 {
    left: 91.66666667%;
  }
  .siebui-span-xl-push-10 {
    left: 83.33333333%;
  }
  .siebui-span-xl-push-9 {
    left: 75%;
  }
  .siebui-span-xl-push-8 {
    left: 66.66666667%;
  }
  .siebui-span-xl-push-7 {
    left: 58.33333333%;
  }
  .siebui-span-xl-push-6 {
    left: 50%;
  }
  .siebui-span-xl-push-5 {
    left: 41.66666667%;
  }
  .siebui-span-xl-push-4 {
    left: 33.33333333%;
  }
  .siebui-span-xl-push-3 {
    left: 25%;
  }
  .siebui-span-xl-push-2 {
    left: 16.66666667%;
  }
  .siebui-span-xl-push-1 {
    left: 8.33333333%;
  }
  .siebui-span-xl-push-0 {
    left: 0%;
  }
  .siebui-span-xl-offset-12 {
    margin-left: 100%;
  }
  .siebui-span-xl-offset-11 {
    margin-left: 91.66666667%;
  }
  .siebui-span-xl-offset-10 {
    margin-left: 83.33333333%;
  }
  .siebui-span-xl-offset-9 {
    margin-left: 75%;
  }
  .siebui-span-xl-offset-8 {
    margin-left: 66.66666667%;
  }
  .siebui-span-xl-offset-7 {
    margin-left: 58.33333333%;
  }
  .siebui-span-xl-offset-6 {
    margin-left: 50%;
  }
  .siebui-span-xl-offset-5 {
    margin-left: 41.66666667%;
  }
  .siebui-span-xl-offset-4 {
    margin-left: 33.33333333%;
  }
  .siebui-span-xl-offset-3 {
    margin-left: 25%;
  }
  .siebui-span-xl-offset-2 {
    margin-left: 16.66666667%;
  }
  .siebui-span-xl-offset-1 {
    margin-left: 8.33333333%;
  }
  .siebui-span-xl-offset-0 {
    margin-left: 0%;
  }
}

</style>
