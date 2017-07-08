
Template.Recipe.onCreated(function(){
	this.editMode = new ReactiveVar(false);
	//this.editMode = new ReactiveVar();
	//this.editMode.set(false);
});
Template.Recipe.helpers({
	updateRecipeId: function(){
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
});
Template.Recipe.events({
	'click .toggle-menu': function() {
		//console.log('click');
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function(){
		//console.log(this);
		Meteor.call('deleteRecipe', this._id);
	},
	'click .fa-pencil': function(event, template){
		//console.log(this);
		//Session.set('editMode', !Session.get('editMode'));
		template.editMode.set(!template.editMode.get());
	}
});