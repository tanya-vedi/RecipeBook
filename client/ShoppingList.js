
Template.shoppinglist.onCreated(function(){
var self=this;
self.autorun(function(){
	self.subscribe('recipes');
});

});
Template.shoppinglist.helpers({
	items:function(){
		return Recipes.find({inMenu:true});
	}
});