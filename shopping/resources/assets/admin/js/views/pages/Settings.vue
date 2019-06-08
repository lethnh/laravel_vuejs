<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">{{ __('Settings') }}</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">{{ __('Home') }}</a></li>
        <li class="breadcrumb-item active"><a href="#">{{ __('Settings') }}</a></li>
      </ol>
    </div>
    <div class="row">
      <div class="col-md-7">
        <div class="card">
          <div class="card-header">
            <h6>{{ __('General Settings') }}</h6>
          </div>
          <div class="card-body">
            <form @submit.prevent="saveSettings">
              <div class="form-body">
                <div class="form-group row">
                  <label class="col-md-3 form-control-label">{{ __('Title') }}</label>
                  <div class="col-md-9">
                    <input type="text" class="form-control" v-model.trim="settings.app_name.value">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-md-3 form-control-label">{{ __('Description') }}</label>
                  <div class="col-md-9">
                    <input type="text" class="form-control" v-model.trim="settings.app_description.value">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-md-3 form-control-label">{{ __('Keywords') }}</label>
                  <div class="col-md-9">
                    <input type="text" class="form-control" v-model.trim="settings.app_keywords.value">
                    <small class="form-text text-muted">{{ __('Each keyword separate by comma') }}</small>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-md-3 form-control-label">{{ __('Language') }}</label>
                  <div class="col-md-9">
                    <select class="form-control is is-valid" v-model="settings.app_locale.value" style="width: auto;">
                      <option
                        v-for="lang in languages"
                        :value="lang.value"
                        :selected="lang.value === settings.app_locale.value"
                      >
                        {{ lang.text }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-md-3 form-control-label">{{ __('Timezone') }}</label>
                  <div class="col-md-9">
                    <select class="form-control is is-valid" v-model="settings.app_timezone.value" style="width: auto;">
                      <option
                        v-for="tz in timezones"
                        :value="tz"
                        :selected="tz === settings.app_timezone.value"
                      >
                        {{ tz }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-9 offset-md-3">
                  <button type="submit" class="btn btn-primary">
                    <i class="icon-fa icon-fa-save"></i> {{ __('Save') }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Settings from '../../services/settings'

export default {
  data() {
    return {
      settings: {
        app_name: {
          value: ''
        },
        app_description: {
          value: ''
        },
        app_keywords: {
          value: ''
        },
        app_locale: {
          value: ''
        },
        app_timezone: {
          value: ''
        },
      },
      languages: [
        {
          value: 'en',
          text: __('English'),
        },
        {
          value: 'jp',
          text: __('Japanese'),
        },
      ],
      timezones: moment.tz.names(),
    }
  },
  mounted() {
    this.getSettings()
  },
  methods: {
    getSettings() {
      let vm = this
      Settings.get().then((res) => {
        if (! _.isEmpty(res)) {
          vm.settings = res
        }
      })
    },
    saveSettings() {
      Settings.save(this.settings)
    }
  }
}
</script>
