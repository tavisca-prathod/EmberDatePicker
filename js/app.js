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


App.DatePickerView = Ember.View.extend({
    inputDate : null,
    tagName : 'input',
    stepMonths : 1,
    dateFormat : "",
    showAnim : "show",
    customOptions : ["showWeek","maxDate","onSelect"],

    didInsertElement: function() {
        var self = this;
        this.$().datepicker();
        var optionIndex = 0;
        for(optionIndex; optionIndex < (this.get('customOptions')).length; optionIndex++){
            customOption = (this.get('customOptions'))[optionIndex];
            if(typeof (this.get(customOption)) !== 'undefined'){
                this.$().datepicker( "option", customOption, (this.get(customOption)));
            }
        }

        this.$().datepicker("show");
    },

    showWeek : true,
    maxDate : '+1m +1w',

    change : function() {
        this.set('inputDate',this.$().datepicker("getDate"));
    },
     onSelect : function(dateText, inst) {
        console.log("dfdfdfd");
     }
});
