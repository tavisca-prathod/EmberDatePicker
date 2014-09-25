App = Ember.Application.create();

App.LOG_TRANSITIONS_INTERNAL = true;

App.Router.map(function(){
    this.resource('datePicker');
});

App.DatePickerRoute = Em.Route.extend({
    model : function(){
        return {"inputDate" : "01-01-2000"};
    }
});

var container = Ember.ContainerView.create();
container.append();



App.DatePickerView = Ember.View.extend({
    inputDate : null,
    tagName : 'input',
    maxDate : "",
    showWeek : false,
    stepMonths : 1,
    dateFormat : "",
    classNames: ['ui-datepicker'],
    didInsertElement: function() {
        var self = this;
        this.$().datepicker({dateFormat:this.get('dateFormat'),maxDate: this.get('maxDate'),showWeek: this.get('showWeek'),stepMonths: this.get('stepMonths')});
        this.$().datepicker("setDate",self.get('inputDate'));
        this.$().datepicker("show");
    }.observes('inputDate'),

    change : function() {
        this.set('inputDate',this.$().datepicker("getDate"));
    }
});
