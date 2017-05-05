function OnBananaClicked(keyword){
	document.getElementById("tagsfilter").value += keyword + ", ";
}

function OnAddTagPressed(){
	keyword = document.getElementById("taginput").value;
	gameInstance.SendMessage ('KeywordsManager', 'AddKeyword', keyword);
}