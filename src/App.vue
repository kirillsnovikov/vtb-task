<template>
  <div id="app">
    <section class="main-section">
      <div class="content"></div>
    </section>
    <vertical-menu :dataSetJson='ds'></vertical-menu>
    <!-- <VerticalMenu :dataSetJson='ds'/> -->
    <Popup />
  </div>
</template>

<script>
  // import VerticalMenu from './components/menu/VerticalMenu.vue'
  import Popup from './components/popups/Popup.vue'

  var dataSet = {
    mainMenu: {
      'VTB FM Clients Screen': {
        captionName: 'главная',
        tabIcon: 'icon-home',
        links: [
        {
          captionName: 'aaaaaa',
          icon: ''
        }
        ]
      },
      clients: {
        captionName: 'клиенты',
        tabIcon: 'icon-users',
        links: [
        {
          captionName: 'bbbbbb',
          icon: ''
        }
        ]
      },
      organisations: {
        captionName: 'Организации',
        tabIcon: 'icon-briefcase',
        links: [
        {
          captionName: 'cccccc',
          icon: ''
        }
        ]
      },
      tasks: {
        captionName: 'задачи',
        tabIcon: 'icon-inbox-check',
        links: [
        {
          captionName: 'мои задачи',
          icon: ''
        },
        {
          captionName: 'список задач',
          icon: ''
        },
        {
          captionName: 'задачи на обработку',
          icon: ''
        }
        ]
      },
      inbox: {
        captionName: 'входящие',
        tabIcon: 'icon-inbox-download',
        links: [
        {
          name: 'ddddddd',
          icon: ''
        }
        ]
      }
    },
    bottomMenu: {
      calendar: {
        captionName: 'календарь',
        tabIcon: 'icon-calendar'
      },
      settings: {
        captionName: 'настройки',
        tabIcon: 'icon-cog'
      }
    },
    person: {
      firstname: 'Алексей',
      lastname: 'Викторов'
    }
  };

  export default {

    name: 'app',
    components: {
      VerticalMenu,
      Popup
    },
    data() {
      return {
        ds: dataSet
      }
    }
  }
</script>
