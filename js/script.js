
var createTest = {
	    createTitle: function(tagname, tagtext, tagclass){
			 var tit = document.createElement(tagname);
			 tit.innerHTML = tagtext;
			 tit.className = tagclass;
			 document.body.appendChild(tit);
		},
		
		createItem: function( tagtext, tagclass, n){
			var point = document.createElement('ul');
			point.className = tagclass;
			for ( var i = 1; i <= n; i++){
			
			    var pointElement = document.createElement('li');
				var pointLabel = document.createElement('label');
				pointLabel.innerHTML = '<input type="checkbox"> '+tagtext+i;				
				pointElement.insertBefore(pointLabel, pointElement.children[0]);
				point.appendChild(pointElement);
				
			}
			
			document.body.appendChild(point);
		},
		
		createSubmit: function( tagtext, tagclass){
		var inputSubmit = document.createElement('input');	
		inputSubmit.setAttribute('type', 'submit');
		inputSubmit.setAttribute('value', tagtext);		
		inputSubmit.className = tagclass;
		document.body.appendChild(inputSubmit);
		}
};

var titletext = 'Тест по программированию';
var pointtext = 'Вариант ответа №';
var n=3;

createTest.createTitle('h1', titletext, 'main_title');

for ( var i = 1; i <= n; i++){
    var titletext = i+'. Вопрос №'+i;
    createTest.createTitle('h2', titletext, 'point_title');
    createTest.createItem(pointtext, 'point', 3);
}

createTest.createSubmit('Проверить мои результаты', 'submit_class');


