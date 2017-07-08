
Template.Recipe.onCreated(function(){
var self=this;
self.autorun(function(){
	self.subscribe('recipes');
});

});
Template.Recipe.helpers({
	recipes:function(){
		return Recipes.find();
	}
});