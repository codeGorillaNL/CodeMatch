'use strict';

class SignupController {
  //start-non-standard
  user = {};
  errors = {};
  submitted = false;
  //end-non-standard

  constructor(Auth, $state, $scope, $http) {
    this.Auth = Auth;
    this.$http = $http;
    this.$state = $state;

    this.options = ['Vast dienstverband', 'Tijdelijk dienstverband', 'Zelfstandig ondernemer', 'Student', 'Overig'];

    this.uitkeringen = ['WW', 'Wajong', 'Bijstand / IOAW', 'Overig'];

    this.statusses = ['Ongehuwd', 'Samenwonend', 'Gehuwd', 'Overig'];

    this.listOptions = {
      title: 'Campaigns',
      noDataMessage: 'You have no campaigns within this time range.',
      columns: {
        'Campaign Name': 'item.title',
        'Country': 'item.country',
        'Conversions': 'item.metrics.conversions | number',
        'Impressions': 'item.metrics.impressions | number',
        'Conv Rate': 'item.metrics.conversion_rate | percentage',
        'Total Spent': 'item.metrics.spend | currency',
        'Cost/Conv': 'item.metrics.cost_per_conversion | currency',
        'Start Date (UTC)': 'item.timestamp_start | date:"MM/dd/yy"',
        'End Date (UTC)': 'item.timestamp_end | date:"MM/dd/yy"',
      }
    };

    this.educations = ['Middelbaar', 'MBO', 'HBO', 'WO', 'Overig'];

    this.data = [
      {
        title: 'Campaign 1',
        timestamp_start: '2015-12-10T17:32:17+0000',
        'country': 'IN',
        'timestamp_end': '2015-12-17T17:32:17+0000',
        'metrics': {
          'spend': 21563,
          'impressions': 2022842,
          'conversions': 210563,
          'cost_per_conversion': 0.10,
          'conversion_rate': 0.1007
        }
      },
      {
        'title': 'Campaign 1',
        'timestamp_start': '2015-12-10T17:32:17+0000',
        'country': 'IN',
        'timestamp_end': '2015-12-17T17:32:17+0000',
        'metrics': {
          'spend': 21563,
          'impressions': 2022842,
          'conversions': 210563,
          'cost_per_conversion': 0.10,
          'conversion_rate': 0.1007
        }
      }    ];

    this.form = {
  "items": [
    {
      "type": "multipleChoices",
      "props": {
        "title": "",
        // "helpText": "Selecteeer je geslacht"
      },
      "config": {
        "required": true
      },
      "options": [
        {
          "value": "Man"
        },
        {
          "value": "Vrouw"
        },
        {
          "value": "Anders"
        }
      ]
    },
    {
      "type": "input",
      "props": {
        "title": "Voorletters",
        // "helpText": "Voer je voorletters in."
      },
      "config": {
        "required": true,
        "type": "text"
      }
    },
    {
      "type": "input",
      "props": {
        "title": "Roepnaam",
        // "helpText": "Voer je roepnaam in."
      },
      "config": {
        "required": true,
        "type": "text"
      }
    },
    {
      "type": "input",
      "props": {
        "title": "Achternaam",
        // "helpText": "Voer je achternaam in."
      },
      "config": {
        "required": true,
        "type": "text"
      }
    },
    {
      "type": "input",
      "props": {
        "title": "Geboortedatum",
        // "helpText": "Voer je geboortedatum in gescheiden door \"-\"."
      },
      "config": {
        "required": true,
        "placeholder": "01-01-1990",
        "type": "text"
      }
    },
    {
      "type": "input",
      "props": {
        "title": "Straatnaam",
        // "helpText": "Voer je straatnaam in."
      },
      "config": {
        "required": true,
        "type": "text"
      }
    },
    {
      "type": "input",
      "props": {
        "title": "Huisnummer",
        // "helpText": "Voer je huisnummer in."
      },
      "config": {
        "required": true,
        "type": "number"
      }
    },
    {
      "type": "input",
      "props": {
        "title": "Toevoeging",
        // "helpText": "Voer een eventuele toevoeging aan je huisnummer in."
      },
      "config": {
        "required": false
      }
    },
    {
      "type": "input",
      "props": {
        "title": "Postcode",
        // "helpText": "Voer je postcode in."
      },
      "config": {
        "required": true,
        "placeholder": "1234 AA"
      }
    },
    {
      "type": "input",
      "props": {
        "title": "Woonplaats",
        // "helpText": "Voer je woonplaats in."
      },
      "config": {
        "required": true
      }
    },
    {
      "type": "input",
      "props": {
        "title": "Mailadres",
        // "helpText": "Voer een geldig mailadres in."
      },
      "config": {
        "required": true
      }
    },
    {
      "type": "input",
      "props": {
        "title": "Kies een wachtwoord",
        // "helpText": "Kies een wachtwoord van minimaal 8 karakters, 1 hoofdletter en 1 cijfer."
      },
      "config": {
        "required": true
      }
    },
    {
      "type": "input",
      "props": {
        "title": "Herhaal wachtwoord",
        // "helpText": "Herhaal het gekozen wachtwoord."
      },
      "config": {
        "required": true
      }
    },
    {
      "type": "input",
      "props": {
        "title": "",
        // "helpText": ""
      },
      "config": {
        "required": false
      }
    }
  ]
}
  }

  nextPage(user) {
      this.errorMessage = 'Niet alle verplichte velden zijn ingevuld. \n Vul de velden met een * in.';

    if (this.selectedTab == 0 && !this.signupForm1.$valid) {
      return this.errorMessage;
      // this.errorMessage = '';
      // this.selectedTab = this.selectedTab + 1;
    }
    if (this.selectedTab == 1 && !this.signupForm2.$valid) {
      return this.errorMessage;
    }
    else {
      this.errorMessage = '';
      this.selectedTab = this.selectedTab + 1;
    }
  }

    sendSignupForm(form) {
      // console.log(form);
      this.$http({
              url: "/mail/mail.php",
              method: "POST",
              headers: {'Content-Type': 'application/json'},
              data: form
          }).then(response => {
              if (response.statusText == 'OK') {
                this.$state.go('success');
              }
              else {
                this.mailStatus = response.statusText;
              }
          });
    }

  register(form) {
    this.submitted = true;

    if (this.user.password === this.user.verifyPassword) {
      this.Auth.createUser({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Account created, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            // form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}

angular.module('codeGorillaApp')
  .controller('SignupController', SignupController);
