"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person() {
  _classCallCheck(this, Person);

  this.PersonId = 0;
  this.PersonName = "";
  this.Income = 0;
  this.Occupation = "";
  this.Gender = "";
};

var Logic =
/*#__PURE__*/
function () {
  function Logic() {
    _classCallCheck(this, Logic);

    this.persons = new Map();
    this.persons.set(1, {
      PersonId: 101,
      PersonName: "Ajay",
      Income: 12000,
      Occupation: "Employeed",
      Gender: "Male"
    });
    this.persons.set(2, {
      PersonId: 102,
      PersonName: "Kiran",
      Income: 14000,
      Occupation: "Seld-Employeed",
      Gender: "Female"
    });
  }

  _createClass(Logic, [{
    key: "getPersons",
    value: function getPersons() {
      return this.persons.entries;
    }
  }, {
    key: "savePerson",
    value: function savePerson(key, person) {
      this.persons.set(key, person);
    }
  }, {
    key: "updatePerson",
    value: function updatePerson(key, person) {
      // logic for update
      // if key is !undefined, then search on key and update
      // if key is undefined, then search on PersonId and update
      return this.persons.entries;
    }
  }, {
    key: "deletePersonByKey",
    value: function deletePersonByKey(key) {
      this.persons["delete"](key);
      return this.persons.entries;
    }
  }, {
    key: "deleteByPersonRecord",
    value: function deleteByPersonRecord(person) {
      // search the existance of person by personrecord
      // search the person based on PersonId/PersonName
      // then delete 
      return this.persons.entries;
    }
  }, {
    key: "rearrangeMap",
    value: function rearrangeMap(arrangeKey) {
      // arrangeKey = sort by name / reverse by name
      return this.persons.entries;
    }
  }, {
    key: "searchMap",
    value: function searchMap(criteria) {
      // criteria values = key / PersonId / PersonName / Occupation / Gender
      return this.persons.entries;
    }
  }]);

  return Logic;
}();
