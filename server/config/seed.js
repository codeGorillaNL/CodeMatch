/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      role: 'user',
      name: 'Bjorn de Jong',
      image: 'bjorn-dejong.png',
      email: 'b.dejong@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Cor Oldenhuis',
      image: 'cor-oldenhuis.png',
      email: 'c.oldenhuis@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'ui-ux', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Harco Wittendorp',
      image: 'harco-wittendorp.png',
      email: 'h.wittendorp@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Dennis Weda',
      image: 'dennis-weda.png',
      email: 'd.weda@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Ramon Horst',
      image: 'ramon-horst.png',
      email: 'r.horst@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Ramon van Koll',
      image: 'ramon-vankoll.png',
      email: 'r.vankoll@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Arjan Warrink',
      image: 'arjan-warrink.png',
      email: 'a.warrink@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Robin Schoemaker',
      image: 'robin-schoemaker.png',
      email: 'r.schoemaker@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Vera Hoving',
      image: 'vera-hoving.png',
      email: 'v.hoving@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Stephan Wolbers',
      image: 'stephan-wolbers.png',
      email: 's.wolbers@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Paul van de Laan',
      image: 'paul-vandelaan.png',
      email: 'p.vandelaan@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Danny Bieleveld',
      image: 'danny_bieleveld.png',
      email: 'd.Bieleveld@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Rene de Groot',
      image: 'rene_degroot.png',
      email: 'r.degroot@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    }, {
      provider: 'local',
      role: 'user',
      name: 'Rabin Jiawan',
      image: 'rabin-jiawan.png',
      email: 'r.jiawan@codegorilla.nl',
      password: 'test',
      skills: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      jobTitle: 'Junior Developer'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
